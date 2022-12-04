module.exports = [
  {
    method: "GET",
    path: "/get-company-infos",
    handler: "myController.getCompanyInfos",
    config: {
      auth: false,
      policies: [],
    },
  },
  {
    method: "GET",
    path: "/get-customer",
    handler: "myController.getCustomer",
    config: {
      auth: false,
      policies: [],
    },
  },
  {
    method: "GET",
    path: "/get-invoices",
    handler: "myController.getInvoices",
    config: {
      auth: false,
      policies: [],
    },
  },
  {
    method: "GET",
    path: "/get-subscriptions",
    handler: "myController.getSubscriptions",
    config: {
      auth: false,
      policies: [],
    },
  },
  {
    method: "GET",
    path: "/get-subscription-items/:subscriptionId",
    handler: "myController.getSubscriptionItems",
    config: {
      auth: false,
      policies: [],
    },
  },
  {
    method: "POST",
    path: "/update-customer",
    handler: "myController.updateCustomer",
    config: {
      auth: false,
      policies: [],
    },
  },
];
