"use strict";

const fetch = require("node-fetch");
const getPluginConfig = require("../helpers/pluginConfig");

async function fetchCustomer(customerId) {
  try {
    const res = await fetch(
      `https://api.stripe.com/v1/customers/${customerId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.STRIPE_TOKEN}`,
        },
      }
    );
    return res.json();
  } catch (err) {
    console.dir(err, { depth: null });
  }
}

async function fetchInvoices(customerId) {
  try {
    const res = await fetch(
      `https://api.stripe.com/v1/invoices?customer=${customerId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.STRIPE_TOKEN}`,
        },
      }
    );
    return res.json();
  } catch (err) {
    console.dir(err, { depth: null });
  }
}

module.exports = ({ strapi }) => ({
  async getInvoices() {
    const customerId = getPluginConfig(strapi, "customerId");
    const invoices = await fetchInvoices(customerId);
    return invoices;
  },
  async getCustomer() {
    const customerId = getPluginConfig(strapi, "customerId");
    const customer = await fetchCustomer(customerId);
    return customer;
  },
});
