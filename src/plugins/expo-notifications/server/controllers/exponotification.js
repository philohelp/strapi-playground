"use strict";

module.exports = {
  async find(ctx) {
    try {
      return await strapi
        .plugin("expo-notifications")
        .service("exponotification")
        .find(ctx.query);
    } catch (err) {
      ctx.throw(500, err);
    }
  },
  async delete(ctx) {
    try {
      ctx.body = await strapi
        .plugin("expo-notifications")
        .service("exponotification")
        .delete(ctx.params.id);
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async create(ctx) {
    try {
      ctx.body = await strapi
        .plugin("expo-notifications")
        .service("exponotification")
        .create(ctx.request.body);
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async update(ctx) {
    try {
      ctx.body = await strapi
        .plugin("expo-notifications")
        .service("exponotification")
        .update(ctx.params.id, ctx.request.body);
    } catch (err) {
      ctx.throw(500, err);
    }
  },
};