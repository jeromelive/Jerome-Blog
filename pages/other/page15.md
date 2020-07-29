<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhaojunyun-jk
 * @Date: 2020-07-28 20:03:08
 * @LastEditors: zhaojunyun-jk
 * @LastEditTime: 2020-07-28 20:50:11
--> 
# JavaScript 知识点

## 1. 介绍一下 js 的数据类型有哪些,值是如何存储的

JavaScript 共有 8 种数据类型，JavaScript不支持任何创建自定义类型的机制，而所有值最终都将是以下 8 种数据类型之一。
- 7 种基本数据类型，`undefined`、`null`、`Number`、`String`、`Boolean`、`Symbol`、`BigInt`
- 1 种引用数据类型，`Object`。其中包含 `function`、`Array`、`Date`等。

JavaScript 数据类型存储方式
- 原始数据类型：直接存储在栈`（stack）`中，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储。
- 引用数据类型：同时存储在栈`（stack）`和堆`（heap）`中，占据空间大、大小不固定。引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。

## 2. `&&` 、 `||`和`!!` 运算符分别能做什么

- `&&`  叫逻辑与，在其操作数中找到第一个虚值表达式并返回它，如果没有找到任何虚值表达式，则返回最后一个真值表达式。它采用短路来防止不必要的工作。

```js
console.log(false && 1 && []) // false
console.log(" " && true && 5) // 5

true && console.log('1') // 1
false && console.log('2') // 不打印东西
```

- `||` 叫逻辑或，在其操作数中找到第一个真值表达式并返回它。这也使用了短路来防止不必要的工作。在支持 ES6 默认函数参数之前，它用于初始化函数中的默认参数值。
- 
```js
console.log(null || 1 || undefined) // 1
function test(name) {
  let temp = name || 'jerome'
  console.log(temp)
}
test() // jerome
test('pig') //pig
```

- `!!` 运算符可以将右侧的值强制转换为布尔值，这也是将值转换为布尔值的一种简单方法。

```js
console.log(!!'') // false
console.log(!!0) // false
console.log(!!1) // true
console.log(!!'2') // true
```

## 3. js的数据类型的转换

## 4. js 中数据类型的判断（ typeof，instanceof，constructor，Object.prototype.toString.call()

## 5. 介绍 js 有哪些内置对象？

## 6. undefined 与 undeclared 的区别？

## 7. null 和 undefined 的区别？

## 8. {} 和 [] 的 valueOf 和 toString 的结果是什么？

## 9. Javascript 的作用域和作用域链？

## 10. javascript 创建对象的几种方式？

## 11. JavaScript 继承的几种实现方式？

## 12. 寄生式组合继承的实现？

## 13. 谈谈你对this、call、apply和bind的理解

## 14. JavaScript 原型，原型链？有什么特点？

## 15. js 获取原型的方法？

## 16. 什么是闭包，为什么要用它？

## 17. 什么是 DOM 和 BOM？

## 18. 三种事件模型是什么？

## 19. 事件委托是什么？

## 20. 什么是事件传播?

## 21. 什么是事件捕获？

## 22. 什么是事件冒泡？

## 23. DOM 操作——怎样添加、移除、移动、复制、创建和查找节点？

## 24. js数组和对象有哪些原生方法,列举一下

## 25. 常用的正则表达式

## 26. Ajax 是什么? 如何创建一个 Ajax？

## 27. js 延迟加载的方式有哪些？

## 28. 谈谈你对模块化开发的理解？

## 29. js 的几种模块规范？

## 30. AMD和CMD 规范的区别？

## 31. ES6 模块与 CommonJS 模块、AMD、CMD 的差异。

## 32.   requireJS的核心原理是什么？

## 33. 谈谈JS的运行机制

## 34. arguments 的对象是什么？

## 35. 为什么在调用这个函数时，代码中的`b`会变成一个全局变量?

## 36. 简单介绍一下V8引擎的垃圾回收机制

## 37. 哪些操作会造成内存泄漏？

## 38. ECMAScript 是什么？

## 39. ECMAScript 2015（ES6）有哪些新特性？

## 40. `var`,`let`和`const`的区别是什么？

## 41. 什么是箭头函数？

## 42. 什么是类？

## 43. 什么是模板字符串？

## 44. 什么是对象解构？

## 45. 什么是`Set`对象，它是如何工作的？

## 46. 什么是Proxy？