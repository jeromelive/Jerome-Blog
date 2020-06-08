<!--
 * @Author: your name
 * @Date: 2020-06-08 21:06:29
 * @LastEditTime: 2020-06-08 22:01:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Jerome-Blog\pages\other\page8.md
--> 
# 实现 IOS 下拉弹性效果与背景颜色

## -webkit-overflow-scrolling
`-webkit-overflow-scrolling` 属性控制元素在移动设备上是否使用滚动回弹效果.
> `auto`：使用普通滚动, 当手指从触摸屏上移开，滚动会立即停止
>
> `touch`：使用具有回弹效果的滚动, 当手指从触摸屏上移开，内容会继续保持一段时间的滚动效果。继续滚动的速度和持续的时间和滚动手势的强烈程度成正比。同时也会创建一个新的堆栈上下文

移动端开发中，使用 `overflow:scroll` 的元素，滚动时会出现不够顺畅的情况，这时候使用 `-webkit-overflow-scrolling:touch` 能解决不顺畅问题

## header、main、footer 布局，safari 滚动不顺畅问题解决方案

`main` 部分内容超过屏幕尺寸，出现滚动效果，但在低版本的 ios 中，safari 内滚动会出现不卡顿问题，体验十分不好。

![](/Jerome-Blog/other-page8-1.jpg)

```html
  <div class="about">
    <div class="header">
      <h1>header</h1>
    </div>
    <div class="main">
      <h1 v-for="(item, index) in arr" :key="index">main{{index}}</h1>
    </div>
    <div class="footer">
      <h1>footer</h1>
    </div>
  </div>
```

```js
  data () {
    return {
      arr: new Array(50)
    }
  }
```

```scss
html, body, #app {
  overflow: hidden;
  height: 100%;
}
.about {
  height: 100%;
  overflow: scroll;
  padding: 2rem 0;
  .header, .footer {
    position: fixed;
    left: 0;
    width: 100%;
    height: 2rem;
    background: #FF5A5A;
    z-index: 1;
    color: #ffffff;
    line-height: 2rem;
  }
  .header {
    top: 0;
  }
  .footer {
    bottom: 0;
  }
  .main {
  }
}
```

css 代码如下修改能修复该问题，`main` 添加了独立的滚动条
```scss
.about {
  height: 100%;
  .header, .footer {
    position: fixed;
    left: 0;
    width: 100%;
    height: 2rem;
    background: #FF5A5A;
    z-index: 1;
    color: #ffffff;
    line-height: 2rem;
  }
  .header {
    top: 0;
  }
  .footer {
    bottom: 0;
  }
  .main {
    height: 100%;
    overflow: scroll;
    padding: 2rem 0;
    -webkit-overflow-scrolling: touch;
  }
}
```

### 实现 IOS 下拉弹性效果与背景颜色

![](/Jerome-Blog/other-page8-2.jpg)

```html
<div class="home-wrap">
    <div class="home">
      <div class="home-fill"></div>
      <img v-for="(item, index) in imgs" :key="index" src="../assets/logo.png" />
    </div>

    <div class="modal-outer">
      <div class="modal-inner">
        <div class="modal-content">
          <p v-for="(item, index) in txtes" :key="index">{{index}}</p>
        </div>
      </div>
    </div>
  </div>
```

```js
const MIN_DISTANCE = 10

function getDirection (x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal'
  }

  if (y > x && y > MIN_DISTANCE) {
    return 'vertical'
  }

  return ''
}

export default {
  name: 'Home',
  data() {
    return {
      imgs: new Array(10),
      txtes: new Array(20)
    }
  },
  methods: {
    touchstart (event) {
      this.resetTouchStatus()
      this.startX = event.touches[0].clientX
      this.startY = event.touches[0].clientY
    },
    resetTouchStatus () {
      this.direction = ''
      this.deltaX = 0
      this.deltaY = 0
      this.offsetX = 0
      this.offsetY = 0
    },
    touchMove (event) {
      const touch = event.touches[0]
      this.deltaX = touch.clientX - this.startX
      this.deltaY = touch.clientY - this.startY
      this.offsetX = Math.abs(this.deltaX)
      this.offsetY = Math.abs(this.deltaY)
      this.direction =
        this.direction || getDirection(this.offsetX, this.offsetY)
    },
    onTouchMove (event) {
      this.touchMove(event)
      const el = this.getScrollEventTarget(event.target)
      const { scrollHeight, offsetHeight, scrollTop } = el
      let status = '11'
      /* istanbul ignore next */
      if (scrollTop === 0) {
        status = offsetHeight >= scrollHeight ? '00' : '01'
      } else if (scrollTop + offsetHeight >= scrollHeight) {
        // ios 弹性滚动式会出现
        status = '10'
      }
      // 垂直滚动，滚动条在顶部下拉时和或者 currentTarget 为 window 时阻止默认事件触发
      if (this.deltaY > 0 && (status === '01' || status === '11')) {
        this.preventDefault(event, true)
      }
    },
    getScrollEventTarget (element, rootParent = window) {
      const overflowScrollReg = /scroll|auto/i
      let node = element
      while (
        node &&
        node.tagName !== 'HTML' &&
        node.nodeType === 1 &&
        node !== rootParent
      ) {
        const { overflowY } = window.getComputedStyle(node)
        if (overflowScrollReg.test(overflowY)) {
          if (node.tagName !== 'BODY') {
            return node
          }
          const { overflowY: htmlOverflowY } = window.getComputedStyle(node.parentNode)
          if (overflowScrollReg.test(htmlOverflowY)) {
            return node
          }
        }
        node = node.parentNode
      }
      return rootParent
    },
    preventDefault (event, isStopPropagation) {
      /* istanbul ignore else */
      // ios 较新版本 scrollTop = 0 时，event.cancelable = false 下拉能触发弹性效果
      if (typeof event.cancelable !== 'boolean' || event.cancelable) {
        event.preventDefault()
      }

      if (isStopPropagation) {
        this.stopPropagation(event)
      }
    },
    stopPropagation (event) {
      event.stopPropagation()
    }
  },
  mounted () {
    document.addEventListener('touchstart', this.touchstart)
    document.addEventListener('touchmove', this.onTouchMove)

    document.addEventListener('touchmove', (event) => {
      const el = this.getScrollEventTarget(event.target)
      if (el === window) {
        this.preventDefault(event, true)
      }
    })
  },
  destroyed () {
    document.removeEventListener('touchstart', this.touchstart)
    document.removeEventListener('touchmove', this.onTouchMove)
    document.removeEventListener('touchmove', this.windowPrevent)
  }
}
```

```scss
.home-wrap {
  height: 100%;
  & > div.home {
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 1.95rem;
    height: calc(100% + 600px);
    position: relative;
    top: -600px;

    .home-fill {
      background: #09212B;
      width: 100%;
      height: 600px;
    }
  }
  & > div.modal-outer {
    position: fixed;
    width: 100%;
    top: 0;
    bottom: 0;
    background: rgba(0,0,0,.5);
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    -webkit-justify-content: center;
    align-items: center;
    -webkit-align-items: center;
    & > div.modal-inner {
      padding: 1rem 0;
      width: 80%;
      background: #fff;
      border-radius: .08rem;
      & > div.modal-content {
        overflow:auto;
        height: 5rem;
        -webkit-overflow-scrolling: touch;
        &> p {
          font-size: .5rem;
        }
      }
    }
  }
}
```