module.exports = {
  publicPath: './',
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    open: false, // 自动启动浏览器
    host: '0.0.0.0', // localhost
    port: 8080, // 端口号

    // 配置代理
    proxy: {
      //配置跨域
      '/api': {
        target: 'http://127.0.0.1:5000', // 接口的域名
        changOrigin: true, // 开启代理，在本地创建一个虚拟服务端
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
