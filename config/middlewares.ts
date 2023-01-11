export default [
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  {
    name: "strapi::body",
    config: {
      gzip: {
        enabled: true,
        options: {
          br: false,
        },
      },
    },
  },
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
