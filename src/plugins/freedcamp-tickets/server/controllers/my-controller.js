"use strict";
const FormData = require("form-data");
const axios = require("axios").default;
const getPluginConfig = require("../helpers/pluginConfig");

const instance = axios.create({
  baseURL: "https://freedcamp.com/api/v1/issues",
  timeout: 1000,
  headers: {
    "X-API-KEY": process.env.FREEDCAMP_KEY,
    "Content-Type": "multipart/form-data",
  },
});

async function getMyIssues(projectId) {
  try {
    const response = await instance.get(`/?project_id=${projectId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function createMyIssue(data) {
  const formdata = new FormData();
  formdata.append("data", data);
  try {
    const response = axios({
      url: "https://freedcamp.com/api/v1/issues/",
      method: "POST",
      data: formdata,
      headers: {
        "X-API-KEY": process.env.FREEDCAMP_KEY,
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

module.exports = ({ strapi }) => ({
  async getIssues() {
    const projectId = getPluginConfig(strapi, "projectId");
    const response = await getMyIssues(projectId);
    return response;
  },
  async createIssue(ctx) {
    const projectId = getPluginConfig(strapi, "projectId");
    const body = ctx.request.body;
    const data = JSON.stringify({ ...body, project_id: projectId });
    const response = await createMyIssue(data);
    return response.data;
  },
});
