### loader的别名

```js
resolveloader:{
    //去node_modules找，找不到再去 loader所处的文件夹 找
    modules:[node_modules, loader所处的文件夹 ]
    //或者 别名
    alias:{
        loader1: path.resolve(__dirname, 'loaders', 'loader1.js')
    }
}
```

### 默认：从右到左，从下到上。   顺序: pre + normal + inline + post  

- 除了js、json ,其他文件要配置loader才能让webpack认识

  

#### css

- css-loader 用来翻译处理@import 和url()
- style-loader 可以把css插入到DOM中

#### file-loader

```js
{
    test:/\.jpg|png|svg|gif$/,
        use:[
            {
                loader:'file-loader',
                options:{
                    name:'[hash:10].[ext]',
                    //如果为false,返回值就是图片拷贝后的目标路径名
                    esModule:false, //如果为true, require('../1.jpg')返回的是对象，图片src值在default里面
                }
            }
        ]
}
```

#### #### url-loader

- 小于limit 就转成base64

  

webpack5

```js
{
    test:/\.jpg|png|svg|gif$/,
        type:'asset' ,
            parser:{
                dataUrlCondition: {
                    maxSize: 8 * 1024,
                },
            }
},
```

