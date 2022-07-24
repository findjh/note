- hash

![image-20220710224118031](D:\Project\note\webpack\assets\image-20220710224118031.png)

- chunkhash 根据不同的的入口文件（Entry)进行依赖文件解析、构建对应的chunk， 生成对应的hash值。我们在生产环境里把一些公共库和程序入口文件区分开，单独打包构建，接着我们采用chunkhash的方式生产hash值，那么只要我们不改动公共库的代码，就可以保证哈希值不会受影响。

![image-20220710231708254](D:\Project\note\webpack\assets\image-20220710231708254.png)

- contenthash

  ![image-20220710232445000](D:\Project\note\webpack\assets\image-20220710232445000.png)