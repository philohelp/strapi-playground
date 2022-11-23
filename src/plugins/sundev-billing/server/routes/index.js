module.exports = [
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
    path: "/get-customer",
    handler: "myController.getCustomer",
    config: {
      auth: false,
      policies: [],
    },
  },
];
