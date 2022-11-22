"use strict";

const fetch = require("node-fetch");

async function fetchInvoices() {
  try {
    const res = await fetch(
      `https://api.stripe.com/v1/invoices?customer=${process.env.STRIPE_CUSTOMER_ID}`,
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
    const invoices = await fetchInvoices();
    // return "hello you";
    return invoices;
  },
});
