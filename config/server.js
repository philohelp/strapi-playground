module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS", [
      "eI1NAO3jwqTBpOkyDuGuYA==",
      "vTMDNj/EtMFo1roTWqozpw==",
      "2ohAco32AzWLK4crO2xZ7Q==",
      "OAydMqSJZJeVvA4QWehrGQ==",
    ]),
  },
});
