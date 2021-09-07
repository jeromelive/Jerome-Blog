# bind

绑定一个函数的 this

## bind 实现

```js
Function.prototype.bind1 = function(context) {
  context = context ? Object(context) : context
  context.fn = this
  return context.fn
}
```