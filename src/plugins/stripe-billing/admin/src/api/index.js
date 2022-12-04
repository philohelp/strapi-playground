import { request } from "@strapi/helper-plugin";

const myRequests = {
  getCompanyInfos: async () => {
    return await request(`/stripe-billing/get-company-infos`, {
      method: "GET",
    });
  },
  getInvoices: async () => {
    return await request(`/stripe-billing/get-invoices`, {
      method: "GET",
    });
  },
  getSubscriptions: async () => {
    return await request(`/stripe-billing/get-subscriptions`, {
      method: "GET",
    });
  },
  getSubscriptionItems: async (subscriptionId) => {
    return await request(
      `/stripe-billing/get-subscription-items/${subscriptionId}`,
      {
        method: "GET",
      }
    );
  },
  getCustomer: async () => {
    return await request(`/stripe-billing/get-customer`, {
      method: "GET",
    });
  },
  updateCustomer: async (newCustomer) => {
    return await request(`/stripe-billing/update-customer`, {
      method: "POST",
      body: { ...newCustomer },
    });
  },
};

export default myRequests;
