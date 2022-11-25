"use strict";

const getPluginConfig = require("../helpers/pluginConfig");

module.exports = ({ strapi }) => ({
  async getInvoices(ctx) {
    return await strapi
      .plugin("sundev-billing")
      .service("myService")
      .getInvoices();
  },
  async getCustomer(ctx) {
    return await strapi
      .plugin("sundev-billing")
      .service("myService")
      .getCustomer();
  },
  async updateCustomer(ctx) {
    return await strapi
      .plugin("sundev-billing")
      .service("myService")
      .updateCustomer(ctx.body.newCustomer);
  },
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
});
