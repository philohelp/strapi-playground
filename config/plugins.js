module.exports = ({ env }) => ({
  // "expo-notifications": {
  //   enabled: true,
  //   config: {
  //     testToken: "ExponentPushToken[k7_gXqEStY8a82CA06gSmK]",
  //   },
  // },
  "open-ai": {
    enabled: true,
    resolve: "./src/plugins/open-ai",
    config: {
      API_TOKEN: env("OPENAI_API_TOKEN"),
    },
  },
  // "freedcamp-tickets": {
  //   enabled: true,
  //   resolve: "./src/plugins/freedcamp-tickets",
  //   config: {
  //     freedcampKey: env("FREEDCAMP_KEY"),
  //     projectId: "3244328",
  //   },
  // },
  // "stripe-billing": {
  //   enabled: true,
  //   resolve: "./src/plugins/stripe-billing",
  //   config: {
  //     // customerId: env("STRIPE_CUSTOMER_ID"),
  //     // customerId: "cus_MrA2JnxwhH7Ck5", // Dialogues
  //     customerId: env("STRIPE_CUSTOMER_ID"), // Test mode
  //     companyName: "Sur un nuage",
  //     companyDescription:
  //       "Retrouvez toutes les informations concernant votre abonnement.",
  //     // companyLogo: "https://surunnuage.com/img/logo-footer.png",
  //   },
  // },
  // ckeditor: true,
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
