module.exports = [
  {
    method: "GET",
    path: "/get-issues",
    handler: "myController.getIssues",
    config: {
      policies: [],
      auth: false,
    },
  },
];
