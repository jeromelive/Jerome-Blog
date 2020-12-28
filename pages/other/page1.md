# requestAnimationFrame、requestIdleCallback、IntersectionObserver

## requestAnimationFrame

告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。回调函数执行次数通常是每秒60次

> 注意：若你想在浏览器下次重绘之前继续更新下一帧动画，那么回调函数自身必须再次调用window.requestAnimationFrame()

```js
let id = window.requestAnimationFrame((DOMHighResTimeStamp) => {
  // DOMHighResTimeStamp 与 performance.now() 相同
  console.log(DOMHighResTimeStamp === performance.now()) // true
})

// 取消回调
window.cancelAnimationFrame(id)
```

## requestIdleCallback

将在浏览器的空闲时段内调用的函数排队。可以在空闲回调函数中调用requestIdleCallback()，以便在下一次通过事件循环之前调度另一个回调。

```js
let id = window.requestIdleCallback(() =>{
  console.log('requestIdleCallback') // requestIdleCallback
}, {timeout: 10})

// 取消回调
window.cancelIdleCallback(id)
```

## IntersectionObserver

提供了一种异步观察目标元素与其祖先元素或顶级文档视窗(viewport)交叉状态的方法。祖先元素与视窗(viewport)被称为根(root)。

```js
var observer = new IntersectionObserver((entry) => {
  if(entry && entry.length) {
    entry.forEach((item) => {
      item.target.innerHTML = item.intersectionRatio
    })
  }
}, {
  threshold: [0, 0.25, 0.5, 0.75, 1]
})
observer.observe(document.getElementById('test'))

var opt = {
  root: document.getElementById('srcoller'),
}
var observer1 = new IntersectionObserver((entry) => {
  console.log(entry, 222)
})
observer1.observe(document.getElementById('scroller-test'))

var time = 10000
while(time) {
  time--
  console.log(1)
}
console.log(window.requestIdleCallback(() =>{
  console.log('requestIdleCallback')
}, {timeout: 10}))

// 10000次 1
// 1
// requestIdleCallback
```