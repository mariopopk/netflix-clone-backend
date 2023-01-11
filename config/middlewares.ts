export default [
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::compression",
    config: {
      br: false,
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
