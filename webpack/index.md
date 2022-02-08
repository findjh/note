### 打包

- `npx webpack `  当有webpack.config.js就使用这个文件来配置，否则就用默认的配置。

- `npx webpack --config 指定webpack配置文件名`。 这个命令会比较长，所以要在package.json中的scripts添加下脚本 

  ```js
  "scripts": {
      "build":"webpack --config webpack.config.my.js"
  }
  ```

## webpack-dev-server

 安装`yarn add webpack-dev-server `  打包在内存里，很快。

启动  `npx webpack-dev-server`

```js
devServer:{
    port: 3001,
    client: {
       progress: true,
    },
    static:{
        directory: path.join(__dirname, 'build'), 
    }
},
```

### html-webpack-plugin

- `yarn add html-webpack-plugin -D` 

  ```js
  let HtmlWebpackPlugin = require('html-webpack-plugin')
  plugins:[
          new HtmlWebpackPlugin({
              template:'./src/index.html',//模板文件路径
              filename:'index.html',//打包后文件名
              minify:{
                  removeAttributeQuotes:true,//去除双引号
                  collapseWhitespace:true,//一行显示
              },
              hash:true,//给html引用的文件加hash
          })
      ]
  
   // 给打包后的文件名加hash :8只显示8位
  output:{
      filename:'bundle.[hash:8].js',//打包后的文件名
      path:path.resolve('build'),
  },
  ```

  

  

### loader

```js
module:{ 
        rules:[ //规则
            {
                //css-loader 解析@import 这种语法
                //style-loader 负责把css插入到head的标签中
                //less-loader 把less -> css
                //loader的特点 希望单一
                //loader的用法 字符串只用一个loader
                //多个loader需要 []
                //loader的顺序 默认是从右向左 从下到上执行
                //loader还可以写成对象方式
                test:/\.css$/,
                use:[
                    {loader:'style-loader'},
                    'css-loader'
                ]
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            // {
            //     test:/\.jsx$/,
            // }
        ]
    }
```

### mini-css-extract-plugin  

注意插件都是class

```js
let MiniCssExtractPlugin = require('mini-css-extract-plugin')
plugins:[
        new MiniCssExtractPlugin({
            filename:'main.css',//将css内容放到main.css文件里面
            //filename:'css/main.css'  
        })
    ],
module:{ 
    	//抽离成 css 文件，以link的方式引用。
        rules:[
            {
                test:/\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test:/\.less$/,
                use:[MiniCssExtractPlugin.loader,'css-loader','less-loader']
            },
        ]
    }  
```

### css 压缩 optimize-css-assets-webpack-plugin 

```js
let OptimizeCss = require('optimize-css-assets-webpack-plugin')
optimization:{
    minimizer:[new OptimizeCss()]
}
```

### js丑化  uglify-js-webpack-plugin

### 全局变量引入 的两种方式：

```js
1.给每个模块注入$变量
let Webpack = require('webpack')
new Webpack.ProvidePlugin({
    $:'jQuery',
})
配置后就可以直接引用$

2. 引入cdn 但不打包
externals:{
    jquery:'$'
}
```

### 图片处理

- js创建图片来引入

  ```js
  {
      test:/\.(png|gif|jpg)$/,
      use:'file-loader'
  }
  
  //file-loader默认会在内部生成一张图片，到build目录下
  import logo from './imgs/logo.png'; //把图片引入，返回的结果是一个新的图片地址
  let image = new Image();
  image.src=logo;
  document.body.appendChild(image)
  
  //但一般会用url-loader
  //做一个限制，当图片 小于多少k的时候 用base64 来转化（可以减少请求）
  //否则用file-loader 产生真实的图片路径
   {
       test:/\.(png|gif|jpg)$/,
           use:{
               loader:'url-loader',
               options:{
                   limit:200 * 1024, //200KB
                   outputPath:'imgs/' //打包在build里面的imgs目录
               }
           }
   },
  ```

- 在css中引入background('url');  css-loader会处理成require语法，然后被file-loader处理

- 在html中 <img src="" alt=""/>

  ```js
  {
      test:/\.html$/,
      use:'html-withimg-loader'
  },
  ```

### publicPath 给资源添加路径( js ,css , 图片等)

```js
//这样会给所有资源文件增加路径前缀
output:{
        publicPath:'http://test.cn'
    }
// 如果只想给图片文件添加路径前缀
{
     test:/\.(png|gif|jpg)$/,
         use:{
             loader:'url-loader',
             options:{
                 limit:200 * 1024, //200KB
                 outputPath:'imgs/' //打包在build里面的imgs目录
                 publicPath:'http.test.cn'
             }
         }
 },
```

