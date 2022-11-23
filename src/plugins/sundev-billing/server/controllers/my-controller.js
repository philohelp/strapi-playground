"use strict";

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
});
