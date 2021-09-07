# new 实现

## new 使用场景

```js
function Car (color) {
  this.color = color
}

Car.prototype.start = function() {
  console.log(this.color + ' car start!!!')
}

const car = new Car('red')
car.start()
```

- 访问到构造函数里的属性
- 访问到原型里的属性


## 实现一个 new

```js
function create() {
  // 1.创建一个对象
  var obj = new Object()
  // 2.获取构造函数，arguments中去除第一个参数
  var Con = [].shift.call(arguments)
  // 3.设置原型链
  obj.__proto__ = Con.prototype
  // 4.绑定 this 实现继承，obj 可以访问到构造函数中的属性
  var ret = Con.apply(obj, arguments)
  // 5.优先返回构造函数返回的对象
  return ret instanceof Object ? ret : obj
}
```