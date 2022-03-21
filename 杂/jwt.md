### JSON web token
**解决问题**：session不支持分布式架构，无法支持横向扩展，只能通过数据库来保存会话数据实现共享，如果持久层失败会出现认证失败，服务器不保存任何*会话数据*。
### Content-Type
1.application/x-www-form-urlencoded ：前端传 键值对形式，后端用qs解析
2. application/json 前端传json字符串， 后端要用JSON.parse解析
### token组成 
 -  token = base64形式的header . base64形式的content . 签名方法(header.content.secret)
 -  内容一般是用户的唯一标识，不放敏感信息
