# call、apply

调用一个函数指定 this 和入参

## 区别

- call 参数一个一个传入
- apply 参数数组形式传入

## call 实现

```js
// 1、简单版本
Function.prototype.call2 = function(context) {
  context.fn = this
  context.fn()
  delete context.fn
}

// 2、执行函数能传入参数
Function.prototype.call2 = function(context) {
  context.fn = this
  const args = []
  for(let i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']')
  }
  // eval 中 args 会自动调用 toString 方法
  // [2,3,4,5].toString() => 2,3,4,5
  let result = eval('context.fn(' + args + ')')
  delete context.fn
}

// 3、有返回值，防止 context 传入 null 或者 undefined
Function.prototype.call2 = function(context) {
  context = context ? Object(context) : window
  context.fn = this
  const args = []
  for(let i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']')
  }
  let result = eval('context.fn(' + args + ')')
  delete context.fn
  return result
}

// es6
Function.prototype.call2 = function (context) {
  context = context ? Object(context) : window
  context.fn = this
  let args = [...arguments].slice(1)
  const result = context.fn(...args)
  delete context.fn
  return result
}
```

## apply 实现
```js
// es3
Function.prototype.apply1 = function (context, arr) {
  context = context ? Object(content) : context
  context.fn = this
  let result
  if(!arr) {
    result = context.fn()
  } else {
    let args = []
    result = eval('context.fn(' + arr + ')')
  }
  delete context.fn
  return result
}


// es6
Function.prototype.apply1 = function (context, arr) {
  context = context ? Object(context) : context
  context.fn = this
  let result
  if(!arr) {
    result = context.fn()
  } else {
    // 解构入参
    result = context.fn(...arr))
  }
  delete context.fn
  return result
}
```