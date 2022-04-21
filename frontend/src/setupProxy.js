const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/_api/**",
    createProxyMiddleware({
      target: "http://api:5000",
      pathRewrite: {
        "^/_api": "", //remove 'api' from requests
      },
      //   changeOrigin: true,
      // logLevel: "debug",
    })
  );
};
