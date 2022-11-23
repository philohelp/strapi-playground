import { request } from "@strapi/helper-plugin";

const stripeSundevRequests = {
  getInvoices: async () => {
    return await request(`/sundev-billing/get-invoices`, {
      method: "GET",
    });
  },
  getCustomer: async () => {
    return await request(`/sundev-billing/get-customer`, {
      method: "GET",
    });
  },
};

export default stripeSundevRequests;
