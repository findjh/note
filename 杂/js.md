- box-sizing默认是content-box，当设置width时，指定的是content的宽度，如果有padding，盒子会看起来更宽

- dom的clientWidth = content + padding ； offsetWidth = content + padding + border;

- 让元素居右：设置display：flex；justify-content:flex-end;

- await 赋给一个变量，该变量是resolve里的响应数据

  ```javascript
  const result = this.$http.post('login',this.loginForm);
  console.log(result);//返回的是一个promise 
  //如果想要直接得到数据，应该加await，赋给result的值就不再是一个promise对象了
  const result = await this.$http.post('login',this.loginForm);
  console.log(result);//返回data
  ```

- 解构赋值并重命名

  ```
  const obj = {
  	name:'zjh',age:'19'
  }
  const {name:user} = obj; //用user重命名
  console.log(user); //zjh
  ```

- 如果token只在当前网站打开期间生效，则应将token保存在sessionStorage

- router.beforeEach里面的三个参数to是表示将要访问的路径，from是表示从哪个路径跳转而来，next()表示放行 ，next('/login')表示强制跳转到登录页

  ```
  //路由导航守卫控制访问权限
  router.beforeEach((to,from,next) =>{
    //to 将要访问的路径
    //from 代表从哪个路径跳转而来
    //next 时候一个函数，表示放行
    //  next()  放行 next("/login") 强制跳转
  
    //登录页面直接放行
    if(to.path === '/login') return next();
    //获取token
    const token = window.sessionStorage.getItem('token');
    //token不存在时，强制跳转到登录页
    if(!token) return next('/login');
    //存在则直接放行
    next();
  })
  ```

- 将数字转化为字符串：在后面+ 空字符 或者 String()

- 正则表达式的方法: 

  - test 返回验证true 或false

    

- 对象的{ } 不是作用域

- 类的所有方法都定义在类的`prototype`属性上面

- 当html不设置背景时，body的背景将作为整个浏览器的背景色，而不是body标签自己的背景色。
  当设置html背景色后，body的背景色就变成了body自己的背景色，此时html的背景色将被浏览器获取成为浏览器的背景色
  
- 正则方法转换url参数为对象:
/**
  const str = '?a=1&b=2&c=3&'
  function parser(str){
    const obj = {}
    const reg = /([^?&]+)=([^?&]+)/g;
    str.replace(reg,function(){
      obj[arguments[1]] = arguments[2]
    })
    return obj;
  }
  const obj = parser(str);
  console.log(obj)
**/
