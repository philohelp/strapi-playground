import { request } from "@strapi/helper-plugin";

const myRequests = {
  getCompanyInfos: async () => {
    return await request(`/sundev-billing/get-company-infos`, {
      method: "GET",
    });
  },
  getInvoices: async () => {
    return await request(`/sundev-billing/get-invoices`, {
      method: "GET",
    });
  },
  getSubscriptions: async () => {
    return await request(`/sundev-billing/get-subscriptions`, {
      method: "GET",
    });
  },
  getCustomer: async () => {
    return await request(`/sundev-billing/get-customer`, {
      method: "GET",
    });
  },
  updateCustomer: async (newCustomer) => {
    return await request(`/sundev-billing/update-customer`, {
      method: "POST",
      body: { ...newCustomer },
    });
  },
};

export default myRequests;
