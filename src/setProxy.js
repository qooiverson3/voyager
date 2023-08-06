// // setupProxy.js

// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//   app.use(
//     '/ping',
//     createProxyMiddleware({
//       target: 'http://localhost:8080/ping', // 將請求代理到 http://localhost:5000
//       changeOrigin: true,
//     })
//   );
// };
