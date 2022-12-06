import { request } from "@strapi/helper-plugin";

const myRequests = {
  getIssues: async () => {
    return await request(`/freedcamp-tickets/get-issues`, {
      method: "GET",
    });
  },
  createIssue: async (data) => {
    return await request(`/freedcamp-tickets/create-issue`, {
      method: "POST",
      body: data,
    });
  },
};

export default myRequests;
