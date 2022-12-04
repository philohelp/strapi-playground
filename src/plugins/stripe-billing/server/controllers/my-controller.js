"use strict";
const stripe = require("stripe")(process.env.STRIPE_TOKEN);
const getPluginConfig = require("../helpers/pluginConfig");

module.exports = ({ strapi }) => ({
  async getCompanyInfos() {
    const companyName = await getPluginConfig(strapi, "companyName");
    const companyDescription = await getPluginConfig(
      strapi,
      "companyDescription"
    );
    const companyLogo = await getPluginConfig(strapi, "companyLogo");
    const companyIcon = await getPluginConfig(strapi, "companyIcon");
    const companyInfos = {
      title: companyName ? companyName : "Billing",
      subtitle: companyDescription
        ? companyDescription
        : "All the relevant information about your billing",
      logo: companyLogo ? companyLogo : undefined,
      icon: companyIcon ? companyIcon : undefined,
    };
    return companyInfos;
  },
  async getInvoices() {
    const customerId = getPluginConfig(strapi, "customerId");
    const invoices = await stripe.invoices.list({
      customer: customerId,
    });
    return invoices;
  },
  async getSubscriptions() {
    const customerId = getPluginConfig(strapi, "customerId");
    const subscriptions = await stripe.subscriptions.list({
      customer: customerId,
    });
    return subscriptions;
  },
  async getSubscriptionItems(ctx) {
    const subscriptionId = ctx.params.subscriptionId;
    const subscriptionItems = await stripe.subscriptionItems.list({
      subscription: subscriptionId,
      expand: ["data.price.product"],
    });
    return subscriptionItems;
  },
  async getCustomer() {
    const customerId = getPluginConfig(strapi, "customerId");
    const customer = await stripe.customers.retrieve(customerId);
    return customer;
  },
  async updateCustomer(ctx) {
    const customerId = getPluginConfig(strapi, "customerId");
    const { body } = ctx.request;
    const customer = await stripe.customers.update(customerId, {
      ...body,
    });
    return customer;
  },
});
