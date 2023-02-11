const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 打包完后修改路径，开发中不要用--
  publicPath: './',
  assetsDir: 'static',
  //                            --
  devServer: {
    open: true,
    // host: '192.168.1.5',
    // host: 'localhost',
    // port: 8080,
    proxy: {
      '/api': {
        // target: 'http://39.98.123.211', // 这是本地用node写的一个服务，用webpack-dev-server起的服务默认端口是8080
        target: 'http://gmall-h5-api.atguigu.cn',
        pathRewrite: { "/api": "" }, // 后台在转接的时候url中是没有 /api 的
        changeOrigin: true, // 加了这个属性，那后端收到的请求头中的host是目标地址 target
      }
    }
  }
})
