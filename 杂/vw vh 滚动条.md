- 百分比不会包含padding, 比如一个元素的height:200px; paddingTop:20px;

如果子元素的height: 50%; 那么子元素的高度：（200 - 20）* 50%

- vw vh 的是整个视口的尺寸，会把滚动条的宽度或高度计算进去。

案例： 一个元素A的高度是100vh, 如果他的子元素的宽度超出了父元素A，导致出现底部横向滚动条，那么父元素A就会纵向滚动，因为100vh + 滚动条的高度 超过了视口高度100vh；

解决办法：元素A的外部套一个高度为100vh的容器,  然后A的高度是100%，这个100% d的高度 + 滚动条高度就是视口100vh了

- 总结：vw , vh 尺寸包含滚动条。 百分比% 不包含滚动条和padding