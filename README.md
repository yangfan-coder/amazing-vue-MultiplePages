vue-cli 打包多页面配置、主流H5适配方案
===========================
项目配置了当前如何打包多页面打包的配置文件、和如何适配[H5](https://segmentfault.com/a/1190000024497379)的缩放方案
****
	
|作者|yangfan19|
|---|---
|segmentfault|[点击我](https://segmentfault.com/u/this_586daa4645804)
|github|[点击我](https://github.com/yangfandashuaige/amazing-webNginxLog)


****
## 目录
```
.
├── README.md
├── babel.config.js
├── list.txt
├── package.json
├── postcss.config.js
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   └── HelloWorld.vue
│   └── pages
│       ├── admin
│       │   ├── App.vue
│       │   ├── main.js
│       │   ├── router.js
│       │   ├── store.js
│       │   └── views
│       │       ├── About.vue
│       │       └── Home.vue
│       └── index
│           ├── App.vue
│           ├── main.js
│           ├── router.js
│           ├── store.js
│           └── views
│               ├── About.vue
│               └── Home.vue
├── vue.config.js
└── yarn.lock
```
## 参考资料
[如何使用vue-cli4构建一个多页应用](https://blog.liuyunzhuge.com/2019/12/21/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8vue-cli4%E6%9E%84%E5%BB%BA%E4%B8%80%E4%B8%AA%E5%A4%9A%E9%A1%B5%E5%BA%94%E7%94%A8/)<br />
[vue-cli3.0 多页面配置](https://juejin.im/post/6844903881265152008#comment)


## 其他

如果需要详情配置根据自己的需求到[官网](https://cli.vuejs.org/zh/config/#%E7%9B%AE%E6%A0%87%E6%B5%8F%E8%A7%88%E5%99%A8)配置