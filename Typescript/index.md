- 使用tsc命令必须要npm install typescript -g  全局安装

- 元组：表示一个数量和类型都固定了的数组。

- 常数枚举就是普通枚举前＋const, 它会在编译阶段被删除，并且不能包含计算成员。

- never 永远不知道是什么类型，场景：

     1.一个函数永远不会返回，那么他的返回值类型就是never 

  2. 如果函数一定要抛出错误，那么他永远不会正常结束，那么他的返回值类型就是never

- 函数重载：**必须要把精确的定义放在前面**，最后函数实现时，需要使用 `|`操作符或者`?`操作符，把所有可能的输入类型全部包含进去

  ```js
  interface User {
    name: string;
    age: number;
  }
  
  const user = {
    name: 'Jack',
    age: 123
  };
  
  class SomeClass {
  
    /**
     * 注释 1
     */
    public test(para: User): number;
    /**
     * 注释 2
     */
    public test(para: number, flag: boolean): number;
    public test(para: User | number, flag?: boolean): number {
      // 具体实现
      return 11;
    }
  }
  const someClass = new SomeClass();
  // ok
  someClass.test(user);
  someClass.test(123, false);
  
  // Error
  someClass.test(123);
  someClass.test(user, false);
  ```

- protected :只能在自己，子类访问，其他地方不能访问。

- 可索引接口

  ```js
  //可索引接口 对数组或对象进行约束
  interface IArr{
      [index:number]:string;
  }
  const UserArr:IArr = ['z','j']
  ```

  

- keyof   typeof

  ```javascript
  let p1 = {name:'zjh',age:19,gender:0};
  
  type IPerson = typeof p1; //先拿到一个对象，通过对象获取反推这个对象的类型
  // 等于
  // type IPerson = {
  //     name: string;
  //     age: number;
  //     gender: number;
  // }
  type IPersonKey = keyof IPerson; //等于 type IPersonKey = "name" | "age" | "gender"
  ```

- Partial

  ```js
  interface IPerson {
      name: string;
      age: number;
      gender: number;
  }
  
  type IPersonSearch = Partial<IPerson>;
  //原理：
  // type Partial<T> = { [K in keyof T]?:T[K]}
  ```

  

- Required

  ```js
  interface IPerson {
      name?: string;
      age?: number;
      gender?: number;
  }
  type IPersonSearch = Required<IPerson>; //Required的作用是所有的属性必传
  //原理：-?
  //type Required<T> = { [key in keyof T]-?: T[key]};
  ```

  

- readonly

  ```js
   interface IPerson {
      name: string;
      age: number;
      gender: number;
  }
  // type Readonly<T> = { readonly [key in keyof T]: T[key]};
  type IPersonSearch = Readonly<IPerson>
  let person:IPersonSearch = {name:'zjh',age:1,gender:0}
  person.name = 'xx' //error read-only
  ```

- ```js
  interface IPerson {
      name: string;
      age: number;
      gender: number;
  }
  /**
   * Pick实现
   * type Pick<T,K extends keyof T> = { [P in K]: T[P]}
   */
  type IPersonSearch = Pick<IPerson,'gender'|'name'>;
  //type IPersonSearch = {
  //     gender: number;
  // }
  let obj =  { gender:0 ,name:'zjh'}
  let person :IPersonSearch = obj;
  ```

- /**

   \* T 泛型类

   \* K keys 若干个key

   \* P 就是一个临时变量，指的K 里的一个元素

   */

- Exclude

  ```js
   实现原理：type Exclude<T,U> = T extends U ? never : T;
  
  type E = Exclude<number|string|boolean, string>;//排除string type E = number | boolean
  
  
  反：Extract  
  原理： type Extract<T, U> = T extends U ? T : never
  ```

- NonNullable :排除null 、undefined

  ```js
  //实现： type NonNullable<T> = T extends null | undefined ? never : T;
  type E = NonNullable<null|undefined|string|number>;// type E = string | number
  ```

- ReturnType 获取函数的返回值类型

  ```js
  function getUserInfo(){
      return {name:'zf',age:10}
  }
  //原理：type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any
  type UserInfo = ReturnType<typeof getUserInfo>
  ```

  

- unknown与any的最大区别是：任何类型的值可以赋值给any，同时any类型的值也可以赋值给任何类型。unknown 任何类型的值都可以赋值给它，但它只能赋值给unknown和any