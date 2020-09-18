/* 
  * 
  * @name : M站H5的项目
  * @Info : 项目配置文件
  * @Date : 09/17
*/


module.exports = {
  // 公共的路径
  publicPath: './',
  // 输出文件目录
  outputDir: 'front',
   // 关闭source map 加速生产环境的构建速度
  productionSourceMap:false, 
  // 多页配置
  pages: {
    admin: {
      // 应用入口配置，相当于单页面应用的main.js，必需项
      entry: 'src/pages/admin/main.js',
      // 应用的模版，相当于单页面应用的public/index.html，可选项，省略时默认与模块名一致
      template: 'public/admin.html',
      // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
      filename: 'admin.html'
    },
    index: {
      entry: 'src/pages/index/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 代理配置
  devServer:{
    open: true, // 配置自动启动浏览器
    proxy: {
      '/api': {
        target: 'http://dev-tiku-api.pt.chengjiukehu.com', // 域名
        changOrigin: true // 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
      },
      '/api2': {
        target: 'http://http://localhost:8080/', // 域名
        changOrigin: true // 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
      }
    }
  }
}