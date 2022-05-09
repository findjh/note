### 强制缓存只对引用资源生效，直接访问的资源不会走强制缓存。
```js
res.setHeader('Cache-Control', 'max-age=30'); //30秒之内不用找我（相对时间）
res.setHeader('Expires', new Date( Date.now() + 30*1000) ).toUTCString();// 访问后 到几点别找我了（绝对时间）
```
- 缺陷：服务端更改文件了 ，客户端用的还是老的文件。
- 强制缓存是不发送请求的！，但协商缓存会每次发送请求！！
 
### 协商缓存类型：
 1. no-cache 浏览器缓存文件了，但每次都发送请求到服务器
 2. no-store 浏览器不会缓存文件，每次都发送请求到服务器
 ```js
  res.setHeader('Cache-Control', 'no-cache'); //这是为了每次都向服务器发请求（因为浏览器有默认强制缓存时间）
 
  let ctime = statObj.ctime.toUTCString();
  if( req.headers['if-modified-since'] == ctime){
    res.statusCode = 304;
    res.end();// 浏览器会找缓存
  }else{
    res.setHeader('Last-Modified', ctime) //之后浏览器每次请求都会带上If-Modified-Since请求头
    fs.createReadStream(filePath).pipe(res);
  }
 ```
 - last-modified 缺陷：
  1. 可能文件没有变，但是修改时间变了；
  2. 可能CDN 放置到别的服务器的时间 和 当前的时间不一样；  
 
 - md5 （摘要算法）：不能反解，不能根据摘要的结果，反推出 摘要前的内容。
 - sha1/sha256(加盐算法）
 - 加密算法表示能解密
 
 - ETag方案：读取文件内容，产生一个md5戳，可以用md5 戳来做校验；浏览器发送的请求头带有If-None-Match
  ```js
  res.setHeader('Cache-Control', 'no-cache'); //这是为了每次都向服务器发请求（因为浏览器有默认强制缓存时间）
 
  let etag = crypto.createHash('md5').update(fs.readFileSync(filePath)).digest('base64');
  if( req.headers['if-none-match'] == etag){
    res.statusCode = 304;
    res.end();// 浏览器会找缓存
  }else{
    res.setHeader('Etag', etag) //之后浏览器每次请求都会带上If-Modified-Since请求头
    fs.createReadStream(filePath).pipe(res);
  }
 ```
 
 ### 强制缓存搭配协商缓存
 - https://m.imooc.com/article/22841
