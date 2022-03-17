### cookie
- http是无状态的，cookie 用来识别身份.
- 服务端、浏览器都可以设置cookie.
- 一般来说，只有服务器操作Cookie 才能保证一些必要的安全.如果某一个Cookie 选项被设置成 HttpOnly = true 的话，那此Cookie 只能通过服务器端修改，Js 是操作不了的
### session 解决cookie不安全的，存在服务端
###
