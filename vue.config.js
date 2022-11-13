const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })


module.exports = defineConfig({
  devServer:{
    port:3454,
    proxy: {
      '/V1': {
        target: 'http://127.0.0.1:7777',
        changeOrigin: true,
        pathRewrite: {
            '^/V1': ''
        }
      }
    }
  }
});