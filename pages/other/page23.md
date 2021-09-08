# bind

bind() 方法会创建一个新函数，当这个新函数被调用时，它的 this 值是传递给 bind() 的第一个参数，传入bind方法的第二个以及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数。bind返回的绑定函数也能使用 new 操作符创建对象：这种行为就像把原函数当成构造器，提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。

## bind 实现

```js
// 1.简单实现一个bind
Function.prototype.bind1 = function(context) {
  // 1.闭包保存 this，如果在返回的函数中子再获取 this 则指向 window
  const self = this
  context = context ? Object(context) : context
  return function() {
    context.fn = self
    context.fn()
  }
}

// 2.传参实现
Function.prototype.bind1 = function(context) {
  const self = this
  context = context ? Object(context) : context
  const args = [...arguments].slice(1)
  return function() {
    context.fn = self
    return context.fn(...[...args, ...arguments])
  }
}

// 3.绑定函数当做构造函数使用，new 操作符创建对象
Function.prototype.bind1= function(context) {
  const self = this
  context = context ? Object(context): context
  const args = [...arguments].slice(1)
  const fBound =  function() {
    let result
    if(this instanceof fBound) {
      this.fn = self
      result = this.fn(...[...args, ...arguments])
    } else {
      context.fn = self
      result = context.fn(...[...args, ...arguments])
    }
    return result
  }
  fBound.prototype = this.prototype
  return fBound
}
```