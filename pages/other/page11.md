<!--
 * @Author: your name
 * @Date: 2020-07-13 15:02:34
 * @LastEditTime: 2020-07-20 11:15:40
 * @LastEditors: zhaojunyun-jk
 * @Description: In User Settings Edit
 * @FilePath: \Jerome-Blog\pages\other\page11.md
--> 
# Zepto 的 touch 模块

## 一、概要

以往移动端的点击事件会出现 `300ms` 左右的延迟，`Zepto` 的 `touch` 模块就是解决移动端的延迟问题，同时提供滑动的 `swipe` 事件

## 二、定义自定义事件

`EventTarget.dispatchEvent` 向一个指定的事件目标派发一个事件,  并以合适的顺序同步调用目标元素相关的事件处理函数。

> `EventTarget.dispatchEvent(event)`<br>
> **参数**
> - `event` 是要被派发的事件对象
> - `target` 被用来初始化 事件和决定将会触发的目标

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>Document</title>
  <style>
    #tap {
      width: 200px;
      height: 200px;
      margin: 100px auto;
      background: black;
    }
  </style>
</head>
<body>
  <div id="tap"></div>
  <script>
    Element.prototype.trigger = function (eventName) {
      this.dispatchEvent(new Event(eventName))
    }
    document.querySelector('#tap').addEventListener('click', click, false)
    document.querySelector('#tap').addEventListener('tap', tap, false)
    function click(event) {
      event.target.trigger('tap')
    }
    function tap() {
      console.log('tap')
    }
  </script>
</body>
```

上述代码操作后输出如下：

> tap

## 三、`Zepto` 提供的模拟事件

Zepto 提供了 `tap`, `singleTap`, `doubleTap`,  `longTap`, `swipe`, `swipeLeft`, `swipeRight`, `swipeUp`, `swipeDown` ，其中八个事件通过 tap 事件基础上延伸出来的，所以要理解 Zepto 的 touch 模块，从 tap 事件开始有助于更好地理解代码逻辑。

- ### `tap` 事件

有效 `tap` 事件即为一个物理点击，物理点击通常是手指触碰按压移动端屏幕之后抬起手指的过程，其中允许手指出现细微的移动。根据这个思路，实现一个简单的 `tap` 事件代码如下：

```html
<script>
  let now, delta, deltaX = 0, deltaY = 0, firstTouch, touch = {}
  // 在 Element 定义一个 trigger 方法，用来派发自定义事件
  Element.prototype.trigger = function (eventName) {
    this.dispatchEvent(new Event(eventName))
  }

  function setup() {
    function down(e) {
      // 保存 touchstart 的鼠标 x,y 值
      firstTouch = e.touches[0]
      touch.x1 = firstTouch.pageX
      touch.y1 = firstTouch.pageY
      touch.el = firstTouch.target
    }
    function move(e) {
      // 保存 touchmove 的鼠标 x,y 值
      firstTouch = e.touches[0]
      touch.x2 = firstTouch.pageX
      touch.y2 = firstTouch.pageY

      // 累加手指移动的路程
      deltaX += Math.abs(touch.x1 - touch.x2)
      deltaY += Math.abs(touch.y1 - touch.y2)
    }
    function up(e) {
      // 手指移动的 x,y 总路程小于30才生成一个 tap 事件
      if(deltaX < 30 && deltaY < 30) {
        touch.el && touch.el.trigger('tap')
      }
      deltaX = deltaY = 0
    }
    // 代理事件
    window.addEventListener('touchstart', down)
    window.addEventListener('touchmove', move)
    window.addEventListener('touchend', up)
  }

  setup()
  document.querySelector('#tap').addEventListener('tap', tap, false)
  function tap() {
    console.log('tap')
  }
</script>
```

- ### `doubleTap`, `singleTap`, `longTap` 事件

单点可以理解为一定时间内点击操作不超过一次即为一次有效的单点事件，一定时间内点击两次为一个双击事件，一定事件内长按屏幕的同一个位置为一个长按事件，实现代码如下：
```html
<script>
  let now, delta, deltaX = 0, deltaY = 0, firstTouch, touch = {}
  let touchTimeout, longTapTimeout

  Element.prototype.trigger = function (eventName) {
    this.dispatchEvent(new Event(eventName))
  }

  function longTap() {
    longTapTimeout = null
    touch.el && touch.el.trigger('longTap')
    touch = {}
  }

  function cancelLongTap() {
    if (longTapTimeout) clearTimeout(longTapTimeout)
    longTapTimeout = null
  }

  function setup() {
    function down(e) {
      // 清除长按事件定时器
      cancelLongTap()

      now = Date.now()
      // 计算事件间隙
      delta = now - (touch.last || now)
      // 时间间隙在0~250之间触发两次 down 即为双击事件
      if(delta > 0 && delta <= 250) touch.isDoubleTap = true
      // 重置单击计时器
      touchTimeout && clearTimeout(touchTimeout)
      
      // 开启长按计时器
      longTapTimeout = setTimeout(function() {
        longTap()
      }, 750)

      firstTouch = e.touches[0]
      touch.x1 = firstTouch.pageX
      touch.y1 = firstTouch.pageY
      touch.el = firstTouch.target
      touch.last = now
    }
    function move(e) {
      // 清除长按事件定时器
      cancelLongTap()
      firstTouch = e.touches[0]
      touch.x2 = firstTouch.pageX
      touch.y2 = firstTouch.pageY

      deltaX += Math.abs(touch.x1 - touch.x2)
      deltaY += Math.abs(touch.y1 - touch.y2)
    }
    function up(e) {
      // 清除长按事件定时器
      cancelLongTap()
      
      // 长按会清除 touch 数据，所以需要判断 touch 是否被清空
      if('last' in touch) {
        if(deltaX < 30 && deltaY < 30) {
          touch.el && touch.el.trigger('tap')

          if(touch.isDoubleTap) {
            touch.el && touch.el.trigger('doubleTap')
            touch = {}
          } else {
            touchTimeout = setTimeout(function() {
              clearTimeout(touchTimeout)
              touch.el && touch.el.trigger('singleTap')
              touch = {}
            }, 250)
          }
          
        } else {
          touch = {}
        }
      }
      deltaX = deltaY = 0
    }

    window.addEventListener('touchstart', down)
    window.addEventListener('touchmove', move)
    window.addEventListener('touchend', up)
  }
  setup()
  document.querySelector('#tap').addEventListener('tap', tap, false)
  document.querySelector('#tap').addEventListener('doubleTap', doubleTap, false)
  document.querySelector('#tap').addEventListener('singleTap', singleTap, false)
  document.querySelector('#tap').addEventListener('longTap', longTap1, false)
  function tap() {
    console.log('tap')
  }
  function doubleTap() {
    console.log('doubleTap')
  }
  function singleTap() {
    console.log('singleTap')
  }
  function longTap1() {
    console.log('longTap')
  }
</script>
```

- ### `swipe`, `swipeLeft`, `swipeRight`, `swipeUp`, `swipeDown` 事件
通过滑动的距离可以判断是否为 `swipe` 类型的事件，通过 `x`，`y` 移动的距离可以判断 `swipe` 事件的方向

```html
<script>
  let now, delta, deltaX = 0, deltaY = 0, firstTouch, touch = {}
  let touchTimeout, longTapTimeout

  function swipeDirection(x1, x2, y1, y2) {
    // 比较 x , y 的移动距离的绝对值，然后计算是方向
    return Math.abs(x1 - x2) >=
    Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down')
  }
  Element.prototype.trigger = function (eventName) {
    this.dispatchEvent(new Event(eventName))
  }

  function longTap() {
    longTapTimeout = null
    touch.el && touch.el.trigger('longTap')
    touch = {}
  }

  function cancelLongTap() {
    if (longTapTimeout) clearTimeout(longTapTimeout)
    longTapTimeout = null
  }

  function cancelAll() {
    if (touchTimeout) clearTimeout(touchTimeout)
    if (tapTimeout) clearTimeout(tapTimeout)
    if (swipeTimeout) clearTimeout(swipeTimeout)
    if (longTapTimeout) clearTimeout(longTapTimeout)
    touchTimeout = tapTimeout = swipeTimeout = longTapTimeout = null
    touch = {}
  }

  function setup() {
    function down(e) {
      cancelLongTap()
      now = Date.now()
      delta = now - (touch.last || now)
      if(delta > 0 && delta <= 250) touch.isDoubleTap = true
      touchTimeout && clearTimeout(touchTimeout)
      
      longTapTimeout = setTimeout(function() {
        longTap()
      }, 750)

      firstTouch = e.touches[0]
      touch.x1 = firstTouch.pageX
      touch.y1 = firstTouch.pageY
      touch.el = firstTouch.target
      touch.last = now
    }
    function move(e) {
      cancelLongTap()
      firstTouch = e.touches[0]
      touch.x2 = firstTouch.pageX
      touch.y2 = firstTouch.pageY

      deltaX += Math.abs(touch.x1 - touch.x2)
      deltaY += Math.abs(touch.y1 - touch.y2)
    }
    function up(e) {
      cancelLongTap()
      // 移动距离操作 30 为 swipe 类型事件
      if((touch.x2 && Math.abs(touch.x1 - touch.x2) > 30) ||
        (touch.y2 && Math.abs(touch.y1 - touch.y2) > 30)) {
          swipeTimeout = setTimeout(function() {
            if(touch.el) {
              touch.el.trigger('swipe')
              touch.el.trigger('swipe' + (swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2)))
            }
            touch = {}
          }, 0)
      } else if('last' in touch) {
        if(deltaX < 30 && deltaY < 30) {
          touch.el && touch.el.trigger('tap')

          if(touch.isDoubleTap) {
            touch.el && touch.el.trigger('doubleTap')
            touch = {}
          } else {
            touchTimeout = setTimeout(function() {
              clearTimeout(touchTimeout)
              touch.el && touch.el.trigger('singleTap')
              touch = {}
            }, 250)
          }
          
        } else {
          touch = {}
        }
      }
      deltaX = deltaY = 0
    }

    window.addEventListener('touchstart', down)
    window.addEventListener('touchmove', move)
    window.addEventListener('touchend', up)
    // 清除定时器与初始化数据
    window.addEventListener('touchcancel', cancel)
    // 滚动事件清除定时器与初始化数据
    window.addEventListener('scroll', cancelAll)
  }
  setup()
  document.querySelector('#tap').addEventListener('swipe', swipe, false)
  document.querySelector('#tap').addEventListener('swipeLeft', swipeLeft, false)
  document.querySelector('#tap').addEventListener('swipeRight', swipeRight, false)
  document.querySelector('#tap').addEventListener('swipeUp', swipeUp, false)
  document.querySelector('#tap').addEventListener('swipeDown', swipeDown, false)
  function swipe() {
    console.log('swipe')
  }
  function swipeLeft() {
    console.log('swipeLeft')
  }
  function swipeRight() {
    console.log('swipeRight')
  }
  function swipeUp() {
    console.log('swipeUp')
  }
  function swipeDown() {
    console.log('swipeDown')
  }
</script>
```

## 四、总结

`Zepto` 的 `touch` 模块基本都是通过 `tap` 事件基础上开始延伸的。