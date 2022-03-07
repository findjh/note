```js
Promise.resolve()
    .then(() => {
        console.log("then 1");
        Promise.resolve()
            .then(() => {
                console.log("then 1-1");
                return Promise.resolve();
            })
            .then(() => {
                console.log("then 1-2");
            });
    })
    .then(() => {
        console.log("then 2");
    })
    .then(() => {
        console.log("then 3");
    })
    .then(() => {
        console.log("then 4");
    })
    .then(() => {
        console.log("then 5");
    });
console.log("script end");
```
