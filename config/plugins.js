module.exports = ({ env }) => ({
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
      // providerOptions: {
      //   apiKey: env("SENDGRID_API_KEY"),
      // },
      settings: {
        defaultFrom: "thpoirier@gmail.com",
        defaultReplyTo: "thpoirier@gmail.com",
        testAddress: "thomas@surunnuage.dev",
      },
    },
  },
});
