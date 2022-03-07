```js
(function light() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('red')
            resolve()
        }, 1000)
    }).then(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('green');
                resolve()
            }, 500)
        })
    }).then(() => { light() }) //递归了
})();
```
