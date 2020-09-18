/* 
  * 
  * @name : M站H5的项目
  * @Info : 项目配置文件
  * @Date : 09/17
*/

// 多页面配置的选项函数
const createPage = (name, title) => {
  return {
    entry: `src/pages/${name}/main.js`,
    template: 'public/index.html',
    filename: `${name}.html`,
    title,
  }
}

module.exports = {
  // 公共的路径
  publicPath: './',
  // 关闭source map 加速生产环境的构建速度
  productionSourceMap:false, 
  // 多页配置
  pages: {
    index: createPage('index', '首页'),
    admin: createPage('admin', '关于我们')
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