- rem单位都是相对于根元素html的font-size来决定大小的,根元素的font-size相当于提供了一个基准，当页面的size发生变化时，只需要改变font-size的值，那么以rem为固定单位的元素的大小也会发生响应的变化。
  因此，如果通过rem来实现响应式的布局，只需要根据视图容器的大小，动态的改变font-size即可。

```js
(function () {
    function changeRootFont() {
        //设计稿宽度750px(物理像素)
        var designWidth = 750;
        var rem2px = 100;
        //dpr
        var dpr = window.innerWidth / designWidth;
        document.documentElement.style.fontsize = (dpr * rem2px) + 'px';
        //eg: iphone6: (375 / 750) * 100 + 'px';
    }
    changeRootFont();
    window.addEventListener('resize',changeRootFont,false);
})();
```

