"use strict";

const axios = require("axios").default;
const getPluginConfig = require("../helpers/pluginConfig");

const instance = axios.create({
  baseURL: "https://freedcamp.com/api/v1/issues",
  timeout: 1000,
  headers: { "X-API-KEY": process.env.FREEDCAMP_KEY },
});

async function getMyIssues(projectId) {
  try {
    const response = await instance.get("/", {
      params: {
        project_id: projectId,
      },
    });
    // console.dir(response.data, { depth: null });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

module.exports = ({ strapi }) => ({
  async getIssues() {
    const projectId = getPluginConfig(strapi, "projectId");
    const issues = await getMyIssues(projectId);
    return issues;
  },
});
