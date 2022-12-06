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
  {
    method: "POST",
    path: "/create-issue",
    handler: "myController.createIssue",
    config: {
      policies: [],
      auth: false,
    },
  },
];
