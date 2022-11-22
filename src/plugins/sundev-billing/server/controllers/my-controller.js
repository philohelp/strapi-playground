"use strict";

module.exports = ({ strapi }) => ({
  async index(ctx) {
    return await strapi
      .plugin("sundev-billing")
      .service("myService")
      .getInvoices();
  },
});
