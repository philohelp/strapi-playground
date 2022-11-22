module.exports = [
  {
    method: "GET",
    path: "/get-invoices",
    handler: "myController.index",
    config: {
      auth: false,
      policies: [],
    },
  },
];
