const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
  app.use(
    '/sumsub',
    createProxyMiddleware({
      target: 'https://test-api.sumsub.com',
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        '/sumsub': '',
      },
    }),
  );
};
