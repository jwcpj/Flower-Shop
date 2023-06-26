const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //关闭eslint检查
  publicPath: "./",
  assetsDir: "static",
  productionSourceMap: false,
  devServer: {
    open: true,
    proxy: {
      "/user": {
        changeOrigin: true, //开启代理:在本地会创建一个虚拟服务端，然后发送请求数据
        target: "http://localhost:8081",
      },
      "/product": {
        changeOrigin: true, //开启代理:在本地会创建一个虚拟服务端，然后发送请求数据
        target: "http://localhost:8081",
      },
      "/cart": {
        changeOrigin: true, //开启代理:在本地会创建一个虚拟服务端，然后发送请求数据
        target: "http://localhost:8081",
      },
    },
  },
})
