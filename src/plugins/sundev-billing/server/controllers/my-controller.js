"use strict";
const stripe = require("stripe")(process.env.STRIPE_TOKEN);
const getPluginConfig = require("../helpers/pluginConfig");

module.exports = ({ strapi }) => ({
  async getCompanyInfos(ctx) {
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
  async getInvoices(ctx) {
    const customerId = getPluginConfig(strapi, "customerId");
    const invoices = await stripe.invoices.list({
      // customer: "cus_KQVDgsezcABG4M",
      customer: customerId,
    });
    // return [];
    return invoices;
  },
  async getSubscriptions(ctx) {
    const customerId = getPluginConfig(strapi, "customerId");
    const subscriptions = await stripe.subscriptions.list({
      customer: customerId,
      // customer: "cus_KQVDgsezcABG4M",
      // expand: ["data.items.data.plan.product"],
      // expand: ["data.plan.product"],
    });
    return subscriptions;
  },
  async getSubscriptionItems(ctx) {
    // const { body } = ctx.request;
    // const { subscriptionId } = body;
    const subscriptionId = ctx.params.subscriptionId;
    const subscriptionItems = await stripe.subscriptionItems.list({
      subscription: subscriptionId,
      expand: ["data.price.product"],
    });
    return subscriptionItems;
  },
  async getCustomer(ctx) {
    const customerId = getPluginConfig(strapi, "customerId");
    const customer = await stripe.customers.retrieve(
      // "cus_KQVDgsezcABG4M"
      customerId
    );
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
