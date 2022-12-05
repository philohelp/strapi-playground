import { request } from "@strapi/helper-plugin";

const myRequests = {
  getIssues: async () => {
    return await request(`/freedcamp-tickets/get-issues`, {
      method: "GET",
    });
  },
};

export default myRequests;
