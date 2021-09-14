# JavaScript 继承实现方式

## 概念

原型和实例的关系：

 > 每个构造函数(constructor)都有一个原型对象(prototype),原型对象都包含一个指向构造函数的指针,而实例(instance)都包含一个指向原型对象的内部指针.

 > 如果试图引用对象(实例instance)的某个属性,会首先在对象内部寻找该属性,直至找不到,然后才在该对象的原型(instance.prototype)里去找这个属性.


如果让原型对象指向另一个类型的实例.....有趣的事情便发生了.

即: constructor1.prototype = instance2

鉴于上述游戏规则生效,如果试图引用constructor1构造的实例instance1的某个属性p1:

- 1).首先会在instance1内部属性中找一遍;
- 
- 2).接着会在instance1.__proto__(constructor1.prototype)中找一遍,而constructor1.prototype 实际上是instance2, 也就是说在instance2中寻找该属性p1;
- 
- 3).如果instance2中还是没有,此时程序不会灰心,它会继续在instance2.__proto__(constructor2.prototype)中寻找...直至Object的原型对象


> 搜索轨迹: instance1--> instance2 --> constructor2.prototype…-->Object.prototype

这种搜索的轨迹,形似一条长链, 又因prototype在这个游戏规则中充当链接的作用,于是我们把这种实例与原型的链条称作 原型链 . 下面有个例子

```js
function Father(){
	this.property = true;
}
Father.prototype.getFatherValue = function(){
	return this.property;
}
function Son(){
	this.sonProperty = false;
}
//继承 Father
Son.prototype = new Father();//Son.prototype被重写,导致Son.prototype.constructor也一同被重写
Son.prototype.getSonVaule = function(){
	return this.sonProperty;
}
var instance = new Son();
alert(instance.getFatherValue());//true
```

instance实例通过原型链找到了Father原型中的getFatherValue方法.

注意: 此时instance.constructor指向的是Father,这是因为Son.prototype中的constructor被重写的缘故.

## 四个规则

- javascript 中一切皆对象，函数也属于对象
- 所有对象都含有 __proto__
- 只有函数才有 prototype
- 所有函数的默认原型都是 Object 的实例

```js
var o = {};
o.__proto__ === Object.prototype  //true
o instanceof Object      //true
o instanceof Function    //false

var o = Object();
o.__proto__ === Object.prototype  //true
o instanceof Object      //true
o instanceof Function    //false

var o = new Object();
o.__proto__ === Object.prototype  //true
o instanceof Object      //true
o instanceof Function    //false

function Fn(){}
var fn = new Fn();
fn.__proto__ === Fn.prototype; // true

fn instanceof Fn        //true
fn instanceof Object    //true
fn instanceof Function  //false
```

### 梳理一下几个的关系

Fn.__proto__, 
Fn.prototype.__proto__, 
Function.__proto__, 
Function.prototype.__proto__,
Object.__proto__, 
Object.prototype.__proto__

```js
function Fn() {}

// 函数是由 Function 创建
Fn.__proto__ === Function.prototype // true

// 创建函数的原型是 Object 方法
Fn.prototype.__proto__ === Object.prototype // true

// Function 是由 Function 创建
Function.__proto__ === Function.prototype // true 非常诡异

// Function 的原型也是由 Object 创建
Function.prototype.__proto__ === Object.prototype // true

// Object 函数是由 Function 创建
Object.__proto__ === Function.prototype // true

// 比较诡异，确保原型链有终点
Object.prototype.__proto__ === null // true
```

### 关系如下

![](/Jerome-Blog/other-page25-1.png)

### 思考
```js
 function fn(){}
 var o = {}
 var o1 = new Object();
 
 typeof fn     //"function"
 typeof fn.prototype   //"object"
 typeof fn.__proto__   //"function"  
 fn.prototype.__proto__ === Object.prototype  //true   所有函数的默认原型都是Object的实例
 fn.__proto__ === Function.prototype          //true   所有函数都是Function生成的
 
 fn instanceof Function  //true  fn是Function的实例
 fn instanceof Object    //true  fn也是Object的实例

 
 typeof o  //"object"
 typeof o.prototype  // "undefined"  因为只有函数才有prototype
 typeof o.__proto__  // "object"
 o.__proto__.__proto__ === null   //true
 
 o instanceof Object   // true o是Object的实例
```

## 8 中继承的方式

### 1.原型链继承
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

#### 优点
- 父类方法可以复用

#### 缺点
- 父类的引用属性会被所有的子类实例共享，多个实例对引用类型的操作会被篡改
- 子类构建实例时不能向父类传递参数

### 2.借用构造函数

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

#### 缺点
- 只能继承父类的实例属性和方法，不能继承原型属性/方法
- 无法实现复用，每个子类都有父类实例函数的副本，影响性能


### 3.组合继承

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

#### 优点
- 父类的方法可以被服用
- 父类的引用了属性不会被共享
- 子类构建实力是可以向父类传递参数

#### 缺点
- 第一次调用 SuperType():给 SubType.prototype 写入两个属性 name、arr
- 第二次调用 SuperType():给 ins1 写入两个属性 name、arr

实例对象 ins1 上的两个属性屏蔽了其原型对象 SubType.prototype 的两个同名属性，所以组合模式的缺点就是在使用子类创建实例对象时，其原型中会存在两份相同的属性/方法。这样被覆盖的情况造成了性能上的浪费。


### 4.原型式继承（浅复制）相当于 Object.create() 方法

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

#### 优点
- 父类方法可以被复用

#### 缺点
- 子类构建实例是不能向父类传递参数
- 父类的引用类型属性可以被篡改

### 5.寄生式继承（附加一些方法）

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

#### 优点
- 相对原型式能够附加一些属性

#### 缺点
- 父类的引用类型属性还是可以被篡改


### 6.寄生组合式继承（最完美的方式）

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

### 7.多继承

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

### 8.class
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

