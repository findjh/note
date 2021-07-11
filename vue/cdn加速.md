- 在Vue项目中，引入到工程中的所有js、css文件，编译时都会被打包进vendor.js，浏览器在加载该文件之后才能开始显示首屏。若是引入的库众多，那么vendor.js文件体积将会相当的大，影响首开的体验。

  解决方法是，将引用的外部js、css文件剥离开来，不编译到vendor.js中，而是用资源的形式引用，这样浏览器可以使用多个线程异步将vendor.js、外部的js等加载下来，达到加速首开的目的。

  

搭建vue的时候，一般都使用vue官方推荐的[命令行工具](https://link.jianshu.com/?t=https%3A%2F%2Fcn.vuejs.org%2Fv2%2Fguide%2Finstallation.html%23%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7-CLI)。需要打包的时候，默认会`把所有代码合并`生产新文件,其中包括各种库，就会导致打包出来很大。如果使用cdn的话,会更利于程序的加载速度。

在Vue项目中，引入到工程中的所有js、css文件，编译时都会被打包进vendor.js，浏览器在加载该文件之后才能开始显示首屏。若是引入的库众多，那么vendor.js文件体积将会相当的大，影响首开的体验。

解决方法是，将引用的外部js、css文件剥离开来，不编译到vendor.js中，而是用资源的形式引用，这样浏览器可以使用多个线程异步将vendor.js、外部的js等加载下来，达到加速首开的目的。

外部的库文件，可以使用CDN资源，或者别的服务器资源等。

下面，以引入vue、vuex、vue-router为例，说明处理流程。

## 一、资源引入

在index.html中，添加CDN资源，例如bootstrap上的资源：

```
<body>
<div id="app"></div>
<script src="https://cdn.bootcss.com/vue/2.5.2/vue.min.js"></script>
<script src="https://cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js"></script>
<script src="https://cdn.bootcss.com/vuex/3.0.1/vuex.min.js"></script>
</body>
```

 

## 二、添加配置

在bulid/webpack.base.conf.js文件中，增加externals，将引用的外部模块导入，如下：



```
module.exports = {
entry: {
app: './src/main.js'
},
externals:{
'vue': 'Vue',
'vue-router': 'VueRouter',
'vuex':'Vuex'
}
```

注意一点：

格式为 'aaa' : 'bbb', 其中，aaa表示要引入的资源的名字，bbb表示该模块提供给外部引用的名字，由对应的库自定。例如，vue为Vue，vue-router为VueRouter.

## 三、去掉原有的引用

去掉import，如：

```
// import Vue from 'vue'
// import Router from 'vue-router'
```

 

去掉Vue.use(XXX)，如：

```
 Vue.use(Router)
```

测试

重新npm run build，会看到 vendor.js体积有所下降了。我自已的个人主页中，将所有的外部模块，使用CDN引入之后，vendor.js从1M，降为30k左右。

通过开发者模式的Network工具，可以看到vue.js、vuex.js、vendor.js等文件会分别由一个线程进行加载。且因为使用了CDN，减轻了带宽压力。