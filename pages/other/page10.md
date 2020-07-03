<!--
 * @Author: your name
 * @Date: 2020-07-03 10:35:24
 * @LastEditTime: 2020-07-03 15:10:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Jerome-Blog\pages\other\page10.md
--> 
# Event Loop

## 一、概要
`setTimeout`、`setInterval`、`Promise` 的执行顺序主要是由 `Event Loop` 底层原理决定的

## 二、同步和异步

同步是指代码执行按照书写顺序来执行，异步是指代码的执行不按照书写的顺序来执行，可能是书写在后面的代码会限执行

- 同步
```js
function sync() {
    let i = 10
    let start = new Date().getTime()
    while(true) {
        let now = new Date().getTime()
        if(now - start > 10000) {
            console.log(1)
            break
        }
    }
}

console.log(2)
sync()
console.log(3)
```
以上代码先打印 `2`，执行 `sync` 函数，10s 后答应 `1`，最后打印 `3`，代码是按照书写顺序来执行的

- 异步
```js
function async() {
    setTimeout(() => {
        console.log(4)
        console.log((new Date().getTime() - start)/ 1000)
    }, 1000)
}
console.log(2)
async()
console.log(3)
```
上述代码先打印 `2`，执行 `async` 函数，再打印 `3`，最后打印 `4`，代码是并不按照书写顺序来执行的，

- 同时使用 `sync`、`async`
```js
function sync() {
    let i = 10
    let start = new Date().getTime()
    while(true) {
        let now = new Date().getTime()
        if(now - start > 5000) {
            console.log(1)
            break
        }
    }
}
function async() {
    setTimeout(() => {
        console.log(4)
        console.log(`setTimeout end: ${(new Date().getTime() - start)/ 1000}`)
    }, 1000)
}

let start = new Date().getTime()
console.log(2)
async()
console.log(3)
sync()
console.log(5)
```
上述代码执行输出如下：

![](/Jerome-Blog/other-page10-1.png)

`async` 执行应该在 `1s` 后打印出 `4` 与 `setTimeout end`，却在最后在被打印出来，并且用时是 `5.004s` 而不是 `1s`。这里主要是由于同步函数 `sync` 起到了阻塞的作用，代码执行 `5s` 后才被释放。然而程序并不是马上执行 `setTimeout` 的回调，而是再打印 `5` 才执行 `setTimeout` 回调，此处涉及到了 js 中的宏任务的问题。这也是为什么 `setTimeout` 事件不准的问题所在

## 三、JS 的异步如何实现
"JS 单线程"事实上是指 JS 主运行线程只有一个，并不是整个运行环境都是单线程。以 Chrome 为例，浏览器是多进程的。

![](/Jerome-Blog/other-page10-2.png)

上图只是一个概括分类，意思是Chrome有这几类的进程和线程，并不是每种只有一个，比如渲染进程就有多个，每个选项卡都有自己的渲染进程。有时候我们使用Chrome会遇到某个选项卡崩溃或者没有响应的情况，这个选项卡对应的渲染进程可能就崩溃了，但是其他选项卡并没有用这个渲染进程，他们有自己的渲染进程，所以其他选项卡并不会受影响。这也是Chrome单个页面崩溃并不会导致浏览器崩溃的原因，而不是像老IE那样，一个页面卡了导致整个浏览器都卡。

对于前端工程师来说，主要关心的还是渲染进程，下面来分别看下里面每个线程是做什么的。

### GUI线程
GUI线程就是渲染页面的，他 **解析HTML和CSS** ，然后将他们构建成DOM树和渲染树就是这个线程负责的。

### JS引擎线程
这个线程就是负责执行JS的 **主线程**，前面说的"JS是单线程的"就是指的这个线程。大名鼎鼎的Chrome V8引擎就是在这个线程运行的。需要注意的是，这个 **线程跟GUI线程是互斥的**。互斥的原因是JS也可以操作DOM，如果JS线程和GUI线程同时操作DOM，结果就混乱了，不知道到底渲染哪个结果。这带来的后果就是如果JS长时间运行，GUI线程就不能执行，整个页面就感觉卡死了。所以我们最开始例子的while(true)这样长时间的同步代码在真正开发时是绝对不允许的。

### 定时器线程
前面异步例子的 `setTimeout` 其实就运行在这里，他跟JS主线程根本不在同一个地方，所以“单线程的JS”能够实现异步。JS的定时器方法还有 `setInterval` ，也是在这个线程。

### 事件触发线程
定时器线程其实只是一个计时的作用，他并不会真正执行时间到了的回调，真正执行这个回调的还是JS主线程。所以**当时间到了定时器线程会将这个回调事件给到事件触发线程，然后事件触发线程将它加到事件队列里面去。最终JS主线程从事件队列取出这个回调执行。事件触发线程不仅会将定时器事件放入任务队列，其他满足条件的事件也是他负责放进任务队列。**

### 异步HTTP请求线程
这个线程负责处理 **异步的ajax请求** ，当请求完成后，他也会通知事件触发线程，然后事件触发线程将这个事件放入事件队列给主线程执行。

所以 **JS异步的实现靠的就是浏览器的多线程，当他遇到异步API时，就将这个任务交给对应的线程，当这个异步API满足回调条件时，对应的线程又通过事件触发线程将这个事件放入任务队列，然后主线程从任务队列取出事件继续执行。** 这个流程我们多次提到了任务队列，这其实就是 Event Loop，下面我们详细来讲解下。

## 四、Event Loop
Event loop 就是事件循环，其实就是 JS 管理事件执行的一个流程。各个异步线程执行完成之后，通过事件触发线程将回调事件放到事件队列，主线程轮询事件队列是否有回调，有的话就执行。

事件队列里面的事件也包含了两类：宏任务和微任务。微任务拥有更高的优先级，当事件循环遍历队列时，先检查微任务队列，如果里面有任务，就全部拿来执行，执行完之后再执行一个宏任务。执行每个宏任务之前都要检查下微任务队列是否有任务，如果有，优先执行微任务队列。

1.主线程每次执行时，先看看要执行的是同步任务，还是异步的API<br>
2.同步任务就继续执行，一直执行完<br>
3.遇到异步API就将它交给对应的异步线程，自己继续执行同步任务<br>
4.异步线程执行异步API，执行完后，将异步回调事件放入事件队列上<br>
5.主线程手上的同步任务干完后就来事件队列看看有没有任务<br>
6.主线程发现事件队列有任务，就取出里面的任务执行<br>
7.主线程不断循环上述流程

![](/Jerome-Blog/other-page10-3.png)

上图需要注意以下几点：
> 1.一个Event Loop可以有一个或多个事件队列，但是只有一个微任务队列。
> 2.微任务队列全部执行完会重新渲染一次
> 3.每个宏任务执行完都会重新渲染一次
> 4.`requestAnimationFrame` 处于渲染阶段，不在微任务队列，也不在宏任务队列

常见宏任务有：
> 1.`script` (可以理解为外层同步代码)<br>
> 2.`setTimeout/setInterval`<br>
> 3.`I/O`<br>
> 4.UI事件<br>
> 5.`postMessage`


常见微任务有：
> 1.`Promise`<br>
> 2.`MutaionObserver` 监听DOM树变化

上面这些事件类型中要注意Promise，他是微任务，也就是说他会在定时器前面运行，我们来看个例子:

```js
console.log('1');
setTimeout(() => {
  console.log('2');
},0);
Promise.resolve().then(() => {
  console.log('5');
})
new Promise((resolve) => {
  console.log('3');
  resolve();
}).then(() => {
  console.log('4');
})
```

上述代码的输出是 `1,3,5,4,2`。因为：

> 1.先输出 `1` ，这个没什么说的，同步代码最先执行<br>
> 2.`console.log('2');` 在 `setTimeout`里面，`setTimeout` 是宏任务，`“2”` 进入宏任务队列<br>
> 3.`console.log('5');` 在 `Promise.then` 里面，进入微任务队列<br>
> 4.`console.log('3');` 在 `Promise` 构造函数的参数里面，这其实是同步代码，直接输出<br>
> 5.`console.log('4');` 在 `then` 里面，他会进入微任务队列，检查事件队列时先执行微任务<br>
> 6.同步代码运行结果是 `“1，3”`<br>
> 7.然后检查微任务队列，输出 `“5，4”`<br>
> 8.最后执行宏任务队列，输出 `“2”`