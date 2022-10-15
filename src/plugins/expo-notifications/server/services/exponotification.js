"use strict";

module.exports = ({ strapi }) => ({
  async find(query) {
    // return "Welcome to Strapi plugin 🚀";
    return await strapi.entityService.findMany(
      "plugin::expo-notifications.exponotification",
      query
    );
  },

  async delete(id) {
    return await strapi.entityService.delete(
      "plugin::expo-notifications.exponotification",
      id
    );
  },

  async create(data) {
    return await strapi.entityService.create(
      "plugin::expo-notifications.exponotification",
      data
    );
  },

  async update(id, data) {
    return await strapi.entityService.update(
      "plugin::expo-notifications.exponotification",
      id,
      data
    );
  },
});
