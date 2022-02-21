module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        directives: {
          "script-src": [
            "'self'",
            "'unsafe-inline'",
            "cdn.jsdelivr.net",
            "editor.unlayer.com",
          ],
          "connect-src": ["'self'", "https:"],
          "frame-src": ["'self'", "editor.unlayer.com"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "res.cloudinary.com",
            "cdn.jsdelivr.net",
            "strapi.io",
            "s3.amazonaws.com",
          ],
          "media-src": ["'self'", "data:", "blob:", "res.cloudinary.com"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      origin: ["*"], //allow all origins
      headers: ["*"], //allow all headers
    },
  },
  // 'strapi::cors',
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
