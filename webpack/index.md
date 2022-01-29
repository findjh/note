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
            }
        ]
    }
```



