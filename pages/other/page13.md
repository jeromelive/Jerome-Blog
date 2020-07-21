<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhaojunyun-jk
 * @Date: 2020-07-20 19:54:41
 * @LastEditors: zhaojunyun-jk
 * @LastEditTime: 2020-07-21 10:46:13
--> 
# 了解 `Javascript` 深浅克隆

## 一、浅拷贝与深拷贝
- 浅拷贝是创建一个新的对象，把原始对象的值赋予新对象。如果属性是基本类型，拷贝的就是基本类型的值，如果属性是引用类型，拷贝的是内存的地址，所以修改新旧对象的引用类型属性的的内部值，实际上变化的是同一个值

- 深拷贝是将一个对象从内存中完整的拷贝一份出来，从对内存中开辟一个新的区域存放新对象，且修改新对象不会影响原对象

```js
let bar = {atts: {a: {}}}

let foo = shallowClone(bar) // 浅拷贝
foo.att.a === bar.att.a // true 新旧对象共享同一块内存

let noo = deepClone(bar) // 深拷贝
noo.att.a === bar.att.a // false 新对象跟原对象不共享内存
```
由此可知，浅拷贝只复制旧对象的指针，而不是复制对象本身，新旧对象还是共享同一块内存。深拷贝是新创建一个全完不相关的对象，修改新对象不会改到旧对象

## 二、浅拷贝的实现方式

1、`Object.assign()`<br>
Object.assign() 方法可以把任意多个的源对象自身的可枚举属性拷贝给目标对象，然后返回目标对象。
```js
let duck = {animal: {name: 'duck', age: .2}, sports: 'swim'}
let pig = Object.assign({}, duck)
pig.animal.name = 'pig'
pig.sports = 'eat'
console.log(duck) // {animal: {name: 'pig', age: .2}, sports: 'swim'}
console.log(pig) // {animal: {name: 'pig', age: .2}, sports: 'eat'}
```

2、`lodash.clone`方法<br>
该函数库也有提供_.clone用来做 Shallow Copy,后面我们会再介绍利用这个库实现深拷贝。
```js
let _ = require('lodash')
let duck = {animal: {name: 'duck', age: .2}, sports: 'swim'}
let pig = _.clone(duck)
console.log(duck.animal === pg.animal)
```

3、展开运算符`...`<br>
展开运算符是一个 `es6 / es2015` 特性，它提供了一种非常方便的方式来执行浅拷贝，这与 `Object.assign()`的功能相同。
```js
let duck = {animal: {name: 'duck', age: .2}, sports: 'swim'}
let pig = {...duck}
pig.animal.name = 'pig'
pig.sports = 'eat'
console.log(duck) // {animal: {name: 'pig', age: .2}, sports: 'swim'}
```

4、`Array.prototype.concat()`
```js
let ducks = [1, 2, 3, {name: 'duck'}]
let pigs = ducks.concat()
pigs[2].name = 'pig'
console.log(duck) // [1, 2, 3, {name: 'pig'}]
```

5、`Array.prototype.slice()`
```js
let ducks = [1, 2, 3, {name: 'duck'}]
let pigs = ducks.slice()
pigs[2].name = 'pig'
console.log(duck) // [1, 2, 3, {name: 'pig'}]
```


## 三、深拷贝的实现方式

1、`JSON.parse(JSON.stringify())`
```js
let duck = {animal: {name: 'duck', age: .2}, sports: 'swim'}
let pig = JSON.parse(JSON.stringify(duck))
pig.animal.name = 'pig'
pig.sports = 'eat'
console.log(duck) // {animal: {name: 'duck', age: .2}, sports: 'swim'}
console.log(pig) // {animal: {name: 'pig', age: .2}, sports: 'eat'}
```

2、`lodash.cloneDeep()` 方法<br>
该函数库也有提供_.cloneDeep用来做 Deep Copy
```js
var _ = require('lodash');
var obj1 = {
    a: 1,
    b: { f: { g: 1 } },
    c: [1, 2, 3]
};
var obj2 = _.cloneDeep(obj1);
console.log(obj1.b.f === obj2.b.f);
// false
```

3、`jQuery.extend()` 方法<br>
jquery 有提供一個`$.extend`可以用来做 `Deep Copy`
```js
var $ = require('jquery');
var obj1 = {
    a: 1,
    b: { f: { g: 1 } },
    c: [1, 2, 3]
};
var obj2 = $.extend(true, {}, obj1);
console.log(obj1.b.f === obj2.b.f); 
```

4、递归方法<br>
递归方法实现深度克隆原理：遍历对象、数组直到里边都是基本数据类型，然后再去复制，就是深度拷贝。
```js
function deepClone(obj) {
  if(obj === null) return obj
  if(obj instanceof Date) return new Date(obj)
  if(obj instanceof RegExp) return new RegExp(obj)
  if(typeof obj !== 'object') return obj
  let cloneObj = new obj.constructor()
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key])
    }
  }
  return cloneObj
}

let duck = {animal: {name: 'duck', age: .2}, sports: 'swim'}
let pig = deepClone(duck)
pig.animal.name = 'pig'
pig.sports = 'eat'
console.log(duck) // {animal: {name: 'duck', age: .2}, sports: 'swim'}
console.log(pig) // {animal: {name: 'pig', age: .2}, sports: 'eat'}
```

## 四、深克隆究极体
```js
const mapTag = '[object Map]';
const setTag = '[object Set]';
const arrayTag = '[object Array]';
const objectTag = '[object Object]';
const argsTag = '[object Arguments]';

const boolTag = '[object Boolean]';
const dateTag = '[object Date]';
const numberTag = '[object Number]';
const stringTag = '[object String]';
const symbolTag = '[object Symbol]';
const errorTag = '[object Error]';
const regexpTag = '[object RegExp]';
const funcTag = '[object Function]';

const deepTag = [mapTag, setTag, arrayTag, objectTag, argsTag];

function forEach(array, iteratee) {
    let index = -1;
    const length = array.length;
    while (++index < length) {
        iteratee(array[index], index);
    }
    return array;
}

function isObject(target) {
    const type = typeof target;
    return target !== null && (type === 'object' || type === 'function');
}

function getType(target) {
    return Object.prototype.toString.call(target);
}

function getInit(target) {
    const Ctor = target.constructor;
    return new Ctor();
}

function cloneSymbol(target) {
    return Object(Symbol.prototype.valueOf.call(target));
}

function cloneReg(target) {
    const reFlags = /\w*$/;
    const result = new target.constructor(target.source, reFlags.exec(target));
    result.lastIndex = target.lastIndex;
    return result;
}

function cloneFunction(func) {
    const bodyReg = /(?<={)(.|\n)+(?=})/m;
    const paramReg = /(?<=\().+(?=\)\s+{)/;
    const funcString = func.toString();
    if (func.prototype) {
        const param = paramReg.exec(funcString);
        const body = bodyReg.exec(funcString);
        if (body) {
            if (param) {
                const paramArr = param[0].split(',');
                return new Function(...paramArr, body[0]);
            } else {
                return new Function(body[0]);
            }
        } else {
            return null;
        }
    } else {
        return eval(funcString);
    }
}

function cloneOtherType(targe, type) {
    const Ctor = targe.constructor;
    switch (type) {
        case boolTag:
        case numberTag:
        case stringTag:
        case errorTag:
        case dateTag:
            return new Ctor(targe);
        case regexpTag:
            return cloneReg(targe);
        case symbolTag:
            return cloneSymbol(targe);
        case funcTag:
            return cloneFunction(targe);
        default:
            return null;
    }
}

function clone(target, map = new WeakMap()) {

    // 克隆原始类型
    if (!isObject(target)) {
        return target;
    }

    // 初始化
    const type = getType(target);
    let cloneTarget;
    if (deepTag.includes(type)) {
        cloneTarget = getInit(target, type);
    } else {
        return cloneOtherType(target, type);
    }

    // 防止循环引用
    if (map.get(target)) {
        return map.get(target);
    }
    map.set(target, cloneTarget);

    // 克隆set
    if (type === setTag) {
        target.forEach(value => {
            cloneTarget.add(clone(value, map));
        });
        return cloneTarget;
    }

    // 克隆map
    if (type === mapTag) {
        target.forEach((value, key) => {
            cloneTarget.set(key, clone(value, map));
        });
        return cloneTarget;
    }

    // 克隆对象和数组
    const keys = type === arrayTag ? undefined : Object.keys(target);
    forEach(keys || target, (value, key) => {
        if (keys) {
            key = value;
        }
        cloneTarget[key] = clone(target[key], map);
    });

    return cloneTarget;
}
```