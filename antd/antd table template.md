## antd table template

```javascript
const columns = [
  {
    title: 'Name',
    dataIndex: 'name', //去datasource当前行中查找name字段
    slots: { title: 'customTitle', customRender: 'xxa' }, //customRender:当dataIndex对应数据字段不满足要求是，需要修改就要用插槽，customRender就指定了插槽名字
  }
]
```

## 关键字 text record index

- text ： 对应的数据

- record : 当前行的数据
- index： 当前行的索引