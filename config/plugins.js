module.exports = ({ env }) => ({
  "sundev-billing": {
    enabled: true,
    resolve: "./src/plugins/sundev-billing",
  },
  ckeditor: true,
  "expo-notifications": {
    enabled: true,
    resolve: "./src/plugins/expo-notifications",
  },
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook: process.env.VERCEL_DEPLOY_PLUGIN_HOOK,
      apiToken: process.env.VERCEL_DEPLOY_PLUGIN_API_TOKEN,
      appFilter: "web3",
      teamFilter: "suncms",
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  search: {
    enabled: true,
    excludedFields: [
      "createdAt",
      "createdBy",
      "updatedBy",
      "metiers",
      "publishedAt",
    ],
    config: {
      provider: "algolia",
      providerOptions: {
        apiKey: env("ALGOLIA_PROVIDER_ADMIN_API_KEY"),
        applicationId: env("ALGOLIA_PROVIDER_APPLICATION_ID"),
      },
      contentTypes: [
        { name: "api::famille-de-metier.famille-de-metier", index: "main" },
      ],
    },
  },
  email: {
    config: {
      provider: "sendmail",
      settings: {
        defaultFrom: "thomas@surunnuage.dev",
        defaultReplyTo: "thomas@surunnuage.dev",
        testAddress: "thpoirier@gmail.com",
      },
    },
  },
  // email: {
  //   config: {
  //     provider: "sendgrid",
  //     providerOptions: {
  //       apiKey: env("SENDGRID_API_KEY"),
  //     },
  //     settings: {
  //       defaultFrom: "thpoirier@gmail.com",
  //       defaultReplyTo: "thpoirier@gmail.com",
  //       testAddress: "thomas@surunnuage.dev",
  //     },
  //   },
  // },
});
