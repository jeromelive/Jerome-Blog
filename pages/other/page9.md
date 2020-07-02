<!--
 * @Author: your name
 * @Date: 2020-07-02 17:54:39
 * @LastEditTime: 2020-07-02 20:30:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Jerome-Blog\pages\other\page9.md
--> 
# Web worker 前端多线程

## 一、概要
Web Worker 的作用，就是为 JavaScript 创造多线程环境，允许主线程创建 Worker 线程，将一些任务分配给后者运行。在主线程运行的同时，Worker 线程在后台运行，两者互不干扰。等到 Worker 线程完成计算任务，再把结果返回给主线程。这样的好处是，一些计算密集型或高延迟的任务，被 Worker 线程负担了，主线程（通常负责 UI 交互）就会很流畅，不会被阻塞或拖慢。


## 二、Web Worker 有以下几个使用注意点。

- 同源限制

分配给 Worker 线程运行的脚本文件，必须与主线程的脚本文件同源。

- DOM 限制

Worker 线程所在的全局对象，与主线程不一样，无法读取主线程所在网页的 DOM 对象，也无法使用document、window、parent这些对象。但是，Worker 线程可以navigator对象和location对象。

- 通信联系

Worker 线程和主线程不在同一个上下文环境，它们不能直接通信，必须通过消息完成。

- 脚本限制

Worker 线程不能执行alert()方法和confirm()方法，但可以使用 XMLHttpRequest 对象发出 AJAX 请求。

- 文件限制

Worker 线程无法读取本地文件，即不能打开本机的文件系统（file://），它所加载的脚本，必须来自网络。


## 三、基本使用
```js
// 主线程
var worker = new Worker('worker.js')
worker.onmessage = function(event) {
    console.log('Received message ' + event.data);
    doSometing()
}
function doSometing() {
    worker.postMessage('Work done!')
}

// 子线程 worker.js
// Web Worker 有自己的全局对象，不是主线程的 window，而是一个专门为 Worker 定制的全局对象。因此定义在window上面的对象和方法不是全部都可以使用。
self.addEventListener('message', function(e) {
    self.postMessage('You said: ' + e.data)
}, false)
self.onmessage(function() {
    self.postMessage('You said: ' + e.data)
})
```

## 四、Worker 内实现多线程
```js
// 主线程
var worker = new Worker('work.js')
worker.onmessage = function(event) {
    document.getElementById('result').textContent = event.data
}

// work.js
var num = 10
var result = 0
for(var i = 0; i < num; i += 1) {
    var worker = new Worker('core.js', {name: i})
    worker.postMessage('start')
    worker.postMessage('end')
    worker.onmessage = storeResult
}
function storeResult() {
    ++result;
    if (result >= 10)
      postMessage('finished'); // finished!
}

// core.js
onmessage = getStart;
function getStart(event) {
    console.log(`${name} ${event.data}`)
    onmessage = getEnd;
}
function getEnd(event) {
    console.log(`${name} ${event.data}`)
    end = event.data;
    onmessage = null;
    work();
}
function work() {
  postMessage(name);
  close();
}
```
## 五、API
- 主线程
浏览器原生提供Worker()构造函数，用来供主线程生成 Worker 线程。

```js
var myWorker = new Worker(jsUrl, options);
```
Worker()构造函数，可以接受两个参数。第一个参数是脚本的网址（必须遵守同源政策），该参数是必需的，且只能加载 JS 脚本，否则会报错。第二个参数是配置对象，该对象可选。它的一个作用就是指定 Worker 的名称，用来区分多个 Worker 线程。

```js
// 主线程
var myWorker = new Worker('worker.js', { name : 'myWorker' });

// Worker 线程
self.name // myWorker
```
Worker()构造函数返回一个 Worker 线程对象，用来供主线程操作 Worker。Worker 线程对象的属性和方法如下。

> Worker.onerror：指定 error 事件的监听函数。<br/>
> Worker.onmessage：指定 message 事件的监听函数，发送过来的数据在Event.data属性中<br/>
> Worker.onmessageerror：指定 messageerror 事件的监听函数。发送的数据无法序列化成字符串时，会触发这个事件。<br/>
> Worker.postMessage()：向 Worker 线程发送消息。<br/>
> Worker.terminate()：立即终止 Worker 线程。

- Worker 线程

Web Worker 有自己的全局对象，不是主线程的window，而是一个专门为 Worker 定制的全局对象。因此定义在window上面的对象和方法不是全部都可以使用。

Worker 线程有一些自己的全局属性和方法。

> self.name： Worker 的名字。该属性只读，由构造函数指定。<br/>
> self.onmessage：指定message事件的监听函数。<br/>
> self.onmessageerror：指定 messageerror 事件的监听函数。发送的数据无法序列化成字符串时，会触发这个事件。<br/>
> self.close()：关闭 Worker 线程。<br/>
> self.postMessage()：向产生这个 Worker 线程发送消息。<br/>
> self.importScripts()：加载 JS 脚本。