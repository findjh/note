- 子元素的padding，margin如果设置百分比，不论是垂直方向或者是水平方向，都相对于直接父亲元素的width，而与父元素的height无关

- 如果设置border-radius为百分比，则是相对于自身的宽度.

  除了border-radius外，还有比如translate、background-size等都是相对于自身的

- font-size值为百分比，按照继承过来的乘以百分比，没有就按16px