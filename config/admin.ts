export default ({ env }) => ({
  url: env("MY_HEROKU_URL"),
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
});
