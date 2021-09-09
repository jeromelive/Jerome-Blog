# JavaScript 继承实现方式

js 的继承主要是通过原型链的方式去实现继承的

## 1.原型链继承
```js
function SuperType() {
  this.name = 'super'
  this.superPro = true
  this.arr = [1,2,3]
}
SuperType.prototype.getName = function() {
  console.log(this.name)
}
SuperType.prototype.getSuperPro = function() {
  console.log(this.superPro)
}

function SubType() {
  this.name = 'sub'
  this.subPro = false
}
SubType.prototype = new SuperType()
SubType.prototype.getSubPro = function() {
  console.log(this.subPro)
}

var ins1 = new SubType()
var ins2 = new SubType()
ins1.getName() // sub
ins1.getSubPro() // false
ins1.getSuperPro() // true
console.log(ins1.arr, ins2.arr) // [1,2,3] [1,2,3]
console.log(ins1.arr === ins2.arr) // true
ins1.arr.push(4)
console.log(ins1.arr, ins2.arr) // [1,2,3,4] [1,2,3,4]
console.log(ins1 instanceof SubType) // true
console.log(ins1 instanceof SuperType) // true
```

### 优点
- 父类方法可以复用

### 缺点
- 父类的引用属性会被所有的子类实例共享，多个实例对引用类型的操作会被篡改
- 子类构建实例时不能向父类传递参数

## 2.借用构造函数

```js
function SuperType(name) {
  this.name = name
  this.arr = [1,2,3]
}
SuperType.prototype.getName = function() {
  console.log(this.name)
}

function SubType(name) {
  SuperType.call(this, name)
}

var ins1 = new SubType('jerome')
var ins2 = new SubType('jack')
console.log(ins1.name) // jerome
console.log(ins2.name) // jack
console.log(ins1.arr, ins2.arr) // [1,2,3] [1,2,3]
console.log(ins1.arr === ins2.arr) // false
ins1.arr.push(4)
console.log(ins1.arr, ins2.arr) // [1,2,3,4] [1,2,3]
console.log(ins1 instanceof SubType) // true
console.log(ins1 instanceof SuperType) // false
ins1.getName() // VM17455:23 Uncaught TypeError: ins1.getName is not a function
```

### 缺点
- 只能继承父类的实例属性和方法，不能继承原型属性/方法
- 无法实现复用，每个子类都有父类实例函数的副本，影响性能


## 3.组合继承

```js
function SuperType(name) {
  this.name = name
  this.arr = [1,2,3]
}
SuperType.prototype.getName = function () {
  console.log(this.name)
}

function SubType(name, age) {
  SuperType.call(this, name)
  this.age = age
}
SubType.prototype = new SuperType()
SubType.prototype.contructor = SubType
SubType.prototype.getAge = function() {
  console.log(this.age)
}

var ins1 = new SubType('jerome', 28)
var ins2 = new SubType('jack', 30)
console.log(ins1.name) // jerome
console.log(ins2.name) // jack
console.log(ins1.arr, ins2.arr) // [1,2,3] [1,2,3]
console.log(ins1.arr === ins2.arr) // false
ins1.arr.push(4)
console.log(ins1.arr, ins2.arr) // [1,2,3,4] [1,2,3]
console.log(ins1 instanceof SubType) // true
console.log(ins1 instanceof SuperType) // true
ins1.getName() // jerome
ins1.getAge() // 28
```

### 优点
- 父类的方法可以被服用
- 父类的引用了属性不会被共享
- 子类构建实力是可以向父类传递参数

### 缺点
- 第一次调用 SuperType():给 SubType.prototype 写入两个属性 name、arr
- 第二次调用 SuperType():给 ins1 写入两个属性 name、arr

实例对象 ins1 上的两个属性屏蔽了其原型对象 SubType.prototype 的两个同名属性，所以组合模式的缺点就是在使用子类创建实例对象时，其原型中会存在两份相同的属性/方法。这样被覆盖的情况造成了性能上的浪费。


## 4.原型式继承（浅复制）相当于 Object.create() 方法

```js
function object(original) {
  function Fn() {}
  fn.prototype = original
  return new Fn()
}

let person = {
  name: "Nicholas",
  friends: ["Shelby", "Court", "Van"]
};

let anotherPerson = object(person);
anotherPerson.name = "Greg"; // 此处修改的是实例内的属性，不是原型上的 name
anotherPerson.friends.push("Rob");

let yetAnotherPerson = object(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");

console.log(anotherPerson.name) // Greg
console.log(yetAnotherPerson.name) // Linda
console.log(person.friends);   //"Shelby,Court,Van,Rob,Barbie"
```

### 优点
- 父类方法可以被复用

### 缺点
- 子类构建实例是不能向父类传递参数
- 父类的引用类型属性可以被篡改

## 5.寄生式继承（附加一些方法）

```js
function object(original) {
  function Fn() {}
  Fn.prototype = original
  return new Fn()
}

function CreateObject(original) {
  var obj = object(original)
  obj.sayHi = function() {
    console.log('hi')
  }
  return obj
}

var person = {
  name: "jerome",
  friend: ["Shelby", "Court", "Van"]
}
var ins1 = object(person)
ins1.sayHi() // hi
```

### 优点
- 相对原型式能够附加一些属性

### 缺点
- 父类的引用类型属性还是可以被篡改


## 6.寄生组合式继承（最完美的方式）

核心是将子类构造函数的原型指向父类构造函数的拷贝，这个拷贝其实就是继承父类构造函数的一个实例

```js
function inheritProperty(Sub, Super) {
  // 方式一
  function Fn() {}
  Fn.prototype = Super.prototype
  Sub.prototype = new Fn()

  // 方式二
  Sub.prototype = Object.create(Super.prototype)


  Sub.prototype.constructor = Sub
}

function SuperType(name) {
  this.name = name
  this.superProperty = true
  this.arr = [1,2,3]
}
SuperType.prototype.getSuperProperty = function() {
  console.log(this.superProperty)
}

function SubType(name, age) {
  SuperType.call(this, name)
  this.age = age
}
inheritProperty(SubType, SuperType)
SubType.prototype.getAge = function() {
  console.log(this.age)
}

let inst1 = new SubType("Jerome", 28)
let inst2 = new SubType("Jack", 30)
console.log(inst1.name) // Jerome
console.log(inst1.age) // 28
inst1.getSuperProperty() // true
inst1.getAge() // 28
console.log(inst1 instanceof SubType)
console.log(inst1 instanceof SuperType)
console.log(inst1.arr, inst2.arr) // [1,2,3] [1,2,3]
console.log(inst1.arr === inst2.arr) // false
inst1.arr.push(4)
console.log(inst1.arr, inst2.arr) // [1,2,3,4] [1,2,3]
```

## 7.多继承

多继承是将构造函数的原型指向多个父类组合的对象

```js
function MyType() {
  SuperType.call(this)
  AnotherSuperType.call(this)
}

function SuperType() {}
function AnotherSuperType() {}
MyType.prototype = Object.create(SuperType.prototype)
Object.assign(MyType.prototype, AnotherSuperType.prototype)
MyType.prototype.constructor = MyType
```

## 8.class
```js
class a{
  constructor(y,z){
    this.y =y;
    this.z =z;
  }
  sayHi () {
  console.log('hi!')
    }
  render(){
    console.log(1)
  }
}

class b extends a{
  constructor(m,n){
    super();
    this.m=m;
    this.n=n;
  }
  
  render(){
    console.log(2);
  }
}
```

babel 转换如下

```js
"use strict";

function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }
  return _typeof(obj);
}

// 继承
function _inherits(subClass, superClass) {
  // 确保 superClass 为 function
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  // subClass.prototype的[[prototype]]关联到superClass superClass.prototype
  // 给 subClass 添加 constructor这个属性
  // 子类的原型的 __proto__ 指向父类的原型
  subClass.prototype = Object.create(
    superClass && superClass.prototype, {
    constructor: { // 给子类添加 constructor 属性 subclass.prototype.constructor === subclass
      value: subClass, writable: true, configurable: true 
    }
  });
  // 设置subclass的内置[[prototype]]与superClass相关联
  // 子类 __proto__ 指向父类
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    // 返回构造函数的原型
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      // 借用构造函数继承
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  // 设置原型上的属性
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  // 直接在构造函数上设置静态属性
  if (staticProps) _defineProperties(Constructor, staticProps);
  // 返回构造函数
  return Constructor;
}

var a = /*#__PURE__*/ (function () {
  function a(y, z) {
    // 检查 this 是不是 a 的子类，检测 class 有没有被当做方法使用
    _classCallCheck(this, a);

    this.y = y;
    this.z = z;
  }

  // 给 a 赋予属性
  _createClass(a, [
    {
      key: "sayHi",
      value: function sayHi() {
        console.log("hi!");
      }
    },
    {
      key: "render",
      value: function render() {
        console.log(1);
      }
    }
  ]);

  // 返回构造函数
  return a;
})();

var b = /*#__PURE__*/ (function (_a) {
  // 继承
  _inherits(b, _a);

  var _super = _createSuper(b);

  function b(m, n) {
    var _this;

    _classCallCheck(this, b);

    _this = _super.call(this);
    _this.m = m;
    _this.n = n;
    return _this;
  }

  _createClass(b, [
    {
      key: "render",
      value: function render() {
        console.log(2);
      }
    }
  ]);

  return b;
})(a);

```

