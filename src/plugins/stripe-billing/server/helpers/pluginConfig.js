const pluginId = require("./pluginId");

/**
 * @typedef {import('../../types/typedefs').PluginConfigMap} PluginConfigMap
 */

const getPluginConfig = (strapi, field = "customerId") => {
  return strapi.plugin(pluginId).config(field);
};

module.exports = getPluginConfig;
