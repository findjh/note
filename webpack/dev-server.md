- publicPath:打包生成的静态文件所在的位置

  ```js
  devServer:{
      	//自动打开浏览器时，带上这个前缀
          //open:['/publicPathForDevServe'],
      
          open:'http://localhost:3000/publicPathForDevServe',
          port:3000,
          host: '0.0.0.0',
          devMiddleware: {
               //要和output.publicPath 一致
              publicPath: '/publicPathForDevServe',
          },
  }
  ```

  

- contentBase :用于配置提供额外静态文件内容的目录

  