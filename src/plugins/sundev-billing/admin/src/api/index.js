import { request } from "@strapi/helper-plugin";

const stripeSundevRequests = {
  getInvoices: async () => {
    return await request(`/sundev-billing/get-invoices`, {
      method: "GET",
    });
  },
};

export default stripeSundevRequests;
