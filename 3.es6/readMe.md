# es6

## 1.变量声明

字面理解 ES6 的三种声明方式：

1. var：它是 variable 的简写，可以理解成变量的意思。
2. let：它在英文中是“让”的意思，也可以理解为一种声明的意思。
3. const：它在英文中也是常量的意思，在 ES6 也是用来声明常量的，常量你可以简单理解为不变的量。

## 2.解构赋值

### 数组解构赋值

1. 数组模式和赋值模式统一

```js
// 可以简单的理解为等号左边和等号右边的形式要统一，如果不统一解构将失败。很可能获得undefined或者直接报错
let [a, b, [c, d]] = [1, 2, [3, 4]];
console.log(a, b, c, d); // 1,2,3,4
```

2. 解构的默认值

```js
let [a, b = 'jspang'] = ['技术胖'];
console.log(a, b); //技术胖,jspang

let [a, b = 'jspang'] = ['技术胖', undefined];
console.log(a, b); //技术胖,jspang

let [a, b = 'jspang'] = ['技术胖', null];
console.log(a, b); //技术胖,null
```

### 对象的解构赋值

注意：对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。

```js
let { foo, bar } = { foo: 'JSPang', bar: '技术胖' };
console.log(foo + bar); //控制台打印出了“JSPang技术胖”
```

### 圆括号的使用

如果在解构之前就定义了变量，这时候你再解构会出现问题。下面是错误的代码，编译会报错。

```js
let foo;
{foo} ={foo:'JSPang'};
console.log(foo);  //报错

// 正确写法
let foo;
({foo} ={foo:'JSPang'});
console.log(foo);  //JSPang
```

### 字符串解构

字符串也可以解构，这是因为，此时字符串被转换成了一个类似数组的对象。

```js
const [a, b, c, d, e, f] = 'JSPang';
console.log(a); //J
console.log(b); //S
console.log(c); //P
console.log(d); //a
console.log(e); //n
console.log(f); //g
```

## 3.扩展运算符和 rest 运算符

```js
// 扩展运算符
function foo(...arg) {
  console.log(arg[0]);
  console.log(arg[1]);
  console.log(arg[2]);
}
foo(1, 2); //1,2,undefined

// rest 运算符
function jspang(first, ...arg) {
  // ...arg,就是rest运算符,也是用...来表示的
  console.log(arg.length); //7
}

jspang(0, 1, 2, 3, 4, 5, 6, 7);
```

## 4.字符串模板

```js
1. 字符串模板
let text = '字符串模板';
let blog = `我是一段文字,用来学习${text}`;

2. 字符串查找 includes blog.includes('文字')
3. 判断开头是否存在 blog.startsWith('文字');
4. 判断结尾是否存在 blog.endsWith('文字');
5. 复制字符串 'jspang|'.repeat(3);
```

## 5.ES6 数字操作

```js
// 二进制声明 Binary
let binary = 0b010101;
console.log(binary); //21
// 八进制声明 Octal
let octal = 0o777;
console.log(octal); //511

// 1. 数字判断和转换
// 数字验证Number.isFinite(xx),只有数字才会返回true
console.log(Number.isFinite(11 / 4)); //true
console.log(Number.isFinite('11')); //false
console.log(Number.isFinite(NaN)); //false
console.log(Number.isFinite(undefined)); //false

// 2. NaN验证
// NaN是特殊的非数字
console.log(Number.isNaN(NaN)); //true

// 3. 判断是否为整数Number.isInteger(xx)

// 4. 整数转换Number.parseInt(xxx)和浮点型转换Number.parseFloat(xxx)
let a = '9.18';
console.log(Number.parseInt(a)); //9
console.log(Number.parseFloat(a)); //9.18

// 5. 整数取值范围操作
console.log('最大安全整数', Number.MAX_SAFE_INTEGER);
console.log('最小安全整数', Number.MIN_SAFE_INTEGER);

// 6. 安全整数判断isSafeInteger( )
let a = Math.pow(2, 53) - 1;
console.log(Number.isSafeInteger(a)); //false
```

## 6. ES6 新增的数组知识

1. 将 json 转换成数组 Array.from(json)

```js
let json = {
  '0': 'jspang',
  '1': '技术胖',
  '2': '大胖逼逼叨',
  length: 3
};

let arr = Array.from(json);
console.log(arr);
```

2. 将一堆文本转换成数组 Array.of('1','2','3')

3. 数组查找方法 find() 找到就会返回元素,否则会返回 undefined

4. 数组元素替换 fill()  
   它的作用是把数组进行填充，它接收三个参数，第一个参数是填充的变量，第二个是开始填充的位置，第三个是填充到的位置

```js
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.fill('jspang', 2, 5);
console.log(arr); // [0, 1, "jspang", "jspang", "jspang", 5, 6, 7, 8, 9]
```

5. for...of 循环

```js
// 1. 最简单的循环
for (let item of arr) {
}
// 2. 输出数组索引
for (let index of arr.keys()) {
  console.log(index);
}
// 3. 同时输出数组内容和索引
for (let [index, val] of arr.entries()) {
  console.log(index, val);
}
```

```js
```

```js
```

```js
```

```js
```

```js
```
