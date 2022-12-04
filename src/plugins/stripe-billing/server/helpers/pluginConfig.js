const pluginId = require("./pluginId");

/**
 * @typedef {import('../../types/typedefs').PluginConfigMap} PluginConfigMap
 */

const getPluginConfig = (strapi, field = "customerId") => {
  const pluginConfig = strapi.plugin(pluginId).config(field);
  return pluginConfig;
};

module.exports = getPluginConfig;
