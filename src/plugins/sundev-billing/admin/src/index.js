import { prefixPluginTranslations } from "@strapi/helper-plugin";
import pluginPkg from "../../package.json";
import pluginId from "./pluginId";
import Initializer from "./components/Initializer";
import PluginIcon from "./components/PluginIcon";
import myRequests from "./api";

const name = pluginPkg.strapi.name;

async function getCompanyInfos() {
  const infos = await myRequests.getCompanyInfos();
  const companyName = infos.title;
  // console.log("companyName from plugin index", companyName);
  return companyName;
}

// function getIntLabel() {
//   return {
//     id: `${pluginId}.plugin.name`,
//     defaultMessage: "Billing",
//   };
// }

export default {
  register(app) {
    app.addMenuLink({
      to: `/plugins/${pluginId}`,
      icon: PluginIcon,
      // intLabel: getIntLabel(),
      intlLabel: {
        id: `${pluginId}.plugin.name`,
        // defaultMessage: name,
        defaultMessage: "Sur un nuage",
        // defaultMessage: "Billing",
      },
      Component: async () => {
        const component = await import(
          /* webpackChunkName: "[request]" */ "./pages/App"
        );

        return component;
      },
      permissions: [
        // Uncomment to set the permissions of the plugin here
        // {
        //   action: '', // the action name should be plugin::plugin-name.actionType
        //   subject: null,
        // },
      ],
    });
    app.registerPlugin({
      id: pluginId,
      initializer: Initializer,
      isReady: false,
      name,
    });
  },

  bootstrap(app) {},
  async registerTrads({ locales }) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return import(
          /* webpackChunkName: "translation-[request]" */ `./translations/${locale}.json`
        )
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, pluginId),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};
