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

