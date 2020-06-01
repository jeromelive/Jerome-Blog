<!--
 * @Author: your name
 * @Date: 2020-06-01 19:43:12
 * @LastEditTime: 2020-06-01 20:26:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Jerome-Blog\pages\other\page3.md
--> 
# 数字动态累加特效

```js
/**
 * newValue 新数字
 * oldValue 旧数字
 * point 保留的小数点后几位
 * time 累加动效时间
 */
function countUp(newValue, oldValue, point, time = 300) {
    newValue = parseFloat(newValue) || 0
    oldValue = parseFloat(oldValue) || 0
    let startTime = new Date().getTime()
    let update = () => {
      let time = new Date().getTime()
      let elapsed = (time - startTime) / time
      elapsed = elapsed > 1 ? 1 : elapsed
      let val = oldValue + (newValue - oldValue) * elapsed
      console.log(val.toFixed(point))
      return elapsed !== 1
    }
    let animate = () => {
      if (update()) {
        window.requestAnimationFrame(animate)
      }
    }
    animate()
}
```

## 主要方法介绍
> requestAnimationFrame(callback)


`requestAnimationFrame` 这个方法将在浏览器下一次重绘时调用 `callback`，执行速度大概为 `60次/秒`。后台标签页或隐藏的 `<iframe>` 会暂停被暂停调用。

`callback` 会被传入当前的时间戳，该时间戳是一个十进制数，单位毫秒，最小精度为1ms(1000μs)。同一帧内执行多个回调的时间戳相等。
