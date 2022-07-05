- ```css
  // 这里auto-fill和auto-fit的区别，主要是影响到元素个数比较少的情况
  auto-fill和auto-fit一开始做的事情是一样的就是尽可能的分配轨道数量，区别在于后面空轨道是否会折叠为0。auto-fill不折叠空轨道，auto-fit折叠空轨道
  ```

![1](D:\Project\note\CSS\assets\1.jpg)

![2](D:\Project\note\CSS\assets\2.jpg)

```js
.main{
    height:400px;
    background-color: pink;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
}
.main div{
    width: 120px;
    height: 120px;
    background-color: orange;
}
<div class="main">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
</div>
```

