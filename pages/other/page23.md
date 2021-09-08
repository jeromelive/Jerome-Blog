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

// 4.防止直接修改 fBound.prototype 直接修改 this.prototype
Function.prototype.bind1= function(context) {
  const self = this
  context = context ? Object(context): context
  const args = [...arguments].slice(1)
  function fNop () {}
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

  // 实现继承方式1
  function fNop () {}
  fNop.prototype = this.prototype
  fBound.prototype = new fNop()

  // 实现继承方式2
  // fBound.prototype = Object.create(this.prototype)

  return fBound
}

// 5.调用 bind 的不是函数，抛出异常
Function.prototype.bind1= function(context) {
  if(typeof this !== 'function') {
    throw new Error('Function.prototype.bind - what is trying to be bound is not callable')
  }

  const self = this
  context = context ? Object(context): context
  const args = [...arguments].slice(1)
  function fNop () {}
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

  // 实现继承方式1
  function fNop () {}
  fNop.prototype = this.prototype
  fBound.prototype = new fNop()

  // 实现继承方式2
  // fBound.prototype = Object.create(this.prototype)

  return fBound
}
```

### 测试
```js
// 方案1
// 测试用例
var value = 2;
var foo = {
    value: 1
};

function bar() {
	return this.value;
}

var bindFoo = bar.bind2(foo);

bindFoo(); // 1






// 方案2
// 测试用例
var value = 2;

var foo = {
    value: 1
};

function bar(name, age) {
    return {
		value: this.value,
		name: name,
		age: age
    }
};

var bindFoo = bar.bind2(foo, "Jack");
bindFoo(20);
// {value: 1, name: "Jack", age: 20}






// 方案3
var value = 2;
var foo = {
    value: 1
};
function bar(name, age) {
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}
bar.prototype.friend = 'kevin';

var bindFoo = bar.bind(foo, 'Jack');
var obj = new bindFoo(20);
// undefined
// Jack
// 20

obj.habit;
// shopping

obj.friend;
// kevin






// 方案4
// 测试用例
var value = 2;
var foo = {
    value: 1
};
function bar(name, age) {
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}
bar.prototype.friend = 'kevin';

var bindFoo = bar.bind2(foo, 'Jack'); // bind2
var obj = new bindFoo(20); // 返回正确
// undefined
// Jack
// 20

obj.habit; // 返回正确
// shopping

obj.friend; // 返回正确
// kevin

obj.__proto__.friend = "Kitty"; // 修改原型

bar.prototype.friend; // 返回错误，这里被修改了
// Kitty
```