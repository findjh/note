- vscode：安装code run插件，然后npm install -g ts-node ,最后右键运行ts文件

- 构造方法：super()   普通方法: super.方法()

- private只能在本身类里面访问，protected可以在子类里面访问， 默认是public

- 访问私有实例

  ```
  class Person{
    private _name : string
  
    constructor(name : string){
      this._name = name;
    }
  
    //setter 当 实例.name 赋值时，会调用该方法
    set name(name : string){
      this._name = name;
    }
    //getter
    get name(){
      return this._name
    }
  }
  
  const p = new Person('zjh');
  p.name = 'Lee'
  console.log(p.name); //Lee
  ```

- static 类静态 如果是只读 ：static readonly


- 字段和方法都是public  非静态

- 实体类可以不写constructor 

- ```js
  interface Animal{
    name ?:string
    sex ?:string
    eat?():string //?可选 表示实现类可以不实现这些属性或方法
  }
  class Person implements Animal{
    
  }
  ```

- readonly属性在赋值后不能再修改

```js
interface IPerson{
  readonly name : string;
  id : number
}
let p : IPerson = {
  name:'zjh',
  id : 1
}

p.name = 'xx';
console.log(p.name);
```
- class的constructor 参数中前面增加修饰符public，标识此属性放到了实例上。
- let num:number = undefined; //undefined和null可以赋值给任何类型
- ts的class中有方法重载，但js没有！！
- static修饰符表示在类对象上定义一个属性
- 类里的方法相当于在类.prototype定义了一个方法。
 ```js
 class Greeter {
    static standardGreeting = "Hello, there";
    sayHi(){
        return Greeter.standardGreeting;
    }
}

转换后的js
var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Greeter.prototype.sayHi = function () {
        return Greeter.standardGreeting;
    };
    Greeter.standardGreeting = "Hello, there";
    return Greeter;
}());
```
