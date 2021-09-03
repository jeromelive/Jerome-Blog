<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhaojunyun-jk
 * @Date: 2020-08-19 14:18:00
 * @LastEditors: zhaojunyun-jk
 * @LastEditTime: 2020-08-19 14:18:03
-->

# 节流 throttle

函数节流指的是某个函数在一定时间间隔内（例如 3 秒）只执行一次，在这 3 秒内 无视后来产生的函数调用请求，也不会延长时间间隔。3 秒间隔结束后第一次遇到新的函数调用会触发执行，然后在这新的 3 秒内依旧无视后来产生的函数调用请求，以此类推。

## 定时器版-立即执行
```js
function throttle(fn, time) {
  let timeout
  let that = this
  return function(args) {
    if(!timeout) {
      fn.apply(that, args)
      timeout = setTimeout(() => {
        clearTimeout(timeout)
        timeout = null
      }, time)
    }
  }
}
```

## 定时器版-延迟执行
```js
function throttle(fn, time) {
  let timeout
  let that = this
  return function(args) {
    if(!timeout) {
      timeout = setTimeout(() => {
        fn.apply(that, args)
        clearTimeout(timeout)
        timeout = null
      }, time)
    }
  }
}
```

## 时间戳版-只适用于立即执行
```js
function throttle(fn, time) {
  let previous = 0
  let that = this
  return function(args) {
    let now = Date.now()
    if(now - previous > time) {
      fn.apply(fn, args)
      previous = now
    }
  }
}
```

## 节流进阶版

- 配置是否需要响应事件刚开始的那次回调（ leading 参数，false 时忽略） - 时间戳
- 配置是否需要响应事件结束后的那次回调（ trailing 参数，false 时忽略）- 定时器

```js
function throttle(func, wait, options) {
  let context, timeout, remaining
  let previous = 0

  function later (args) {
    timeout = setTimeout(() => {
      previous = options.leading === false ? 0 : Date.now() 
      clearTimeout(timeout)
      timeout = null
      func.apply(context, args)
    }, remaining)
  }
  
  function throttled(args) {
    let now = Date.now()
    options = options || {}
    if(!previous && options.leading === false) previous = now

    remaining = wait - (now - previous)
    context = this

    if(remaining < 0 || remaining > wait) {
      if(timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      func.apply(context, args)
    } else if(options.trailing  !== false && !timeout) {
      later(args)
    }
  }

  throttled.cancel = function () {
    clearTimeout(timeout)
    timeout = context = null
    previous = 0
  }

  return throttled
}
```

# 防抖 debounce

防抖函数 debounce 指的是某个函数在某段时间内，无论触发了多少次回调，都只执行最后一次。假如我们设置了一个等待时间 3 秒的函数，在这 3 秒内如果遇到函数调用请求就重新计时 3 秒，直至新的 3 秒内没有函数调用请求，此时执行函数，不然就以此类推重新计时。

## 延迟执行版

```js
function debounce(fn, time) {
  let timeout
  let that = this
  return function(args) {
    timeout && clearTimeout(timeout)
    timeout = setTimeout(() => {
        fn.apply(that, args)
        timeout = null
    }, time)
  }
}
```

## 添加第一次立即执行功能

```js
function debounce(fn, time, immediate) {
  let timeout
  let that = this
  return function(args) {
    (!timeout && immediate) && fn.apply(that, args)
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      n.apply(that, args)
      timeout = null
    }, time)
  }
}
```

## wait 时间内，可以重新生成定时器，但只要 wait 的时间到了，必须给用户一个响应。
## 结合 throttle 和 debounce 代码，加强版节流函数 throttle 如下，新增逻辑在于当前触发时间和上次触发的时间差小于时间间隔时，设立一个新的定时器，相当于把 debounce 代码放在了小于时间间隔部分。
```js
function throttle(fn, wait) {
  let timeout, remaining
  let previous = 0
  const that = this
  return function(args) {
    let now = Date.now()
    if(wait < now - previous) {
      previous = now
      fn.apply(that, args)
    } else {
      timeout && clearTimeout(timeout)
      timeout = setTimeout(() => {
        previous = now
        fn.apply(that, args)
      }, wait)
    }
  }
}
```

```js
// 此处的三个参数上文都有解释
_.debounce = function(func, wait, immediate) {
  // timeout 表示定时器
  // result 表示 func 执行返回值
  var timeout, result;

  // 定时器计时结束后
  // 1、清空计时器，使之不影响下次连续事件的触发
  // 2、触发执行 func
  var later = function(context, args) {
    timeout = null;
    // if (args) 判断是为了过滤立即触发的
    // 关联在于 _.delay 和 restArguments
    if (args) result = func.apply(context, args);
  };

  // 将 debounce 处理结果当作函数返回
  var debounced = restArguments(function(args) {
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      // 第一次触发后会设置 timeout，
      // 根据 timeout 是否为空可以判断是否是首次触发
      var callNow = !timeout;
      timeout = setTimeout(later, wait);
      if (callNow) result = func.apply(this, args);
    } else {
    	// 设置定时器
      timeout = _.delay(later, wait, this, args);
    }

    return result;
  });

  // 新增 手动取消
  debounced.cancel = function() {
    clearTimeout(timeout);
    timeout = null;
  };

  return debounced;
};

// 根据给定的毫秒 wait 延迟执行函数 func
_.delay = restArguments(function(func, wait, args) {
  return setTimeout(function() {
    return func.apply(null, args);
  }, wait);
});
```