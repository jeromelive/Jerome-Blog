<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhaojunyun-jk
 * @Date: 2020-07-21 11:06:52
 * @LastEditors: zhaojunyun-jk
 * @LastEditTime: 2020-07-22 15:19:46
--> 
# Set 和 Map 数据结构

## Set
`Set` 类似数组，不同点是 `Set` 成员都是唯一的。`Set` 判断成员是否相同的算法，使用的是类似精确相等运算符 (`===`)，不同点是 `Set` 认为 `NaN` 等于 `NaN`。

```js
//  使用 Set 去重
let array = [1,2,3,4,5,65,6,7,7,5,4,2]
let set = new Set(array)
console.log([...set]) // [ 1, 2, 3, 4, 5, 65, 6, 7 ]

// for...of... 遍历 Set
for(let val of set) {
  console.log(val)
  // 1 
  // 2 
  // 3 
  // 4 
  // 5 
  // 65
  // 6
  // 7
}
```

### Set 的属性和方法

- `Set.prototype.constructor`：构造函数，默认就是 `Set` 函数，接受一个数组作为参数。
- `Set.prototype.size`：返回 `Set` 实例的成员总数。

`Set` 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法。
- `Set.prototype.add(value)`：添加某个值，返回 `Set` 结构本身。
- `Set.prototype.delete(value)`：删除某个值，返回一个布尔值，表示删除是否成功。
- `Set.prototype.has(value)`：返回一个布尔值，表示该值是否为Set的成员。
- `Set.prototype.clear()`：清除所有成员，没有返回值。

### Set 遍历方法
- `Set.prototype.keys()`：返回键名的遍历器
- `Set.prototype.values()`：返回键值的遍历器，由于 `Set` 结构没有键名，只有键值（或者说键名和键值是同一个值），所以 `keys` 方法和 `values` 方法的行为完全一致。
- `Set.prototype.entries()`：返回键值对的遍历器
- `Set.prototype.forEach()`：使用回调函数遍历每个成员

## WeakSet
`WeakSet` 和 `Set` 类似，不同点是 `WeakSet` 的成员都都必须是对象。`WeakSet` 是不可遍历的，因为成员对象是弱引用，随时可能无法访问。

其次，`WeakSet` 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。

这是因为垃圾回收机制依赖引用计数，如果一个值的引用次数不为 `0`，垃圾回收机制就不会释放这块内存。结束使用该值之后，有时会忘记取消引用，导致内存无法释放，进而可能会引发内存泄漏。`WeakSet` 里面的引用，都不计入垃圾回收机制，所以就不存在这个问题。因此，`WeakSet` 适合临时存放一组对象，以及存放跟对象绑定的信息。只要这些对象在外部消失，它在 WeakSet 里面的引用就会自动消失。

```js
let array = [1,2,3,4,5]
let weakset = new WeakSet(array)

// WeakSet 没有 size 和遍历方法
let example = {}
let weakset = new WeakSet()
weakset.add(example)

console.log(weakset) // WeakSet {div#example}
example = null
console.log(weakset) // WeakSet {div#example}

for(let val of weakset) { // Uncaught TypeError: weakset is not iterable
  console.log(val)
}
console.log(weakset.size) // undefined
```

### WeakSet 方法
- `WeakSet.prototype.add(value)`：向 `WeakSet` 实例添加一个新成员。
- `WeakSet.prototype.delete(value)`：清除 `WeakSet` 实例的指定成员。
- `WeakSet.prototype.has(value)`：返回一个布尔值，表示某个值是否在

## Map

`Map` 类似对象，是一种键值对集合，不同点是对象只接受字符串为键名，而 `Map` 的键名可以为任意一种类型。 

### 创建 Map
```js
let map = new Map()

// 或者传入一个键值对的数组
let map = new Map([
  ['animal': 'pig'],
  ['age': 14]
])

// 对象转换为 Map
let obj = {
  animal: 'pig',
  age: 14
}
let map = new Map(Object.entries(obj))
// Map 转换为数组
console.log(...map) // [['animal': 'pig'],['age': 14]]
```

```js
// 对象赋值
let example = document.getElementById('example')
let obj = {}
obj[example] = 'element'
obj.example // undefined
obj[example] // element
Object.prototype.toString.call(example) // [object HTMLDivElement]
obj[Object.prototype.toString.call(example)] // element

// Map 赋值
let map = new Map();

// -0,+0 键名相同
map.set(-0, 123);
map.get(+0) // 123

map.set(true, 1);
map.set('true', 2);
map.get(true) // 1

map.set(undefined, 3);
map.set(null, 4);
map.get(undefined) // 3

map.set(NaN, 123);
map.get(NaN) // 123
```

### Map 的属性和方法
- `size`：属性返回 `Map` 结构的成员总数
- `Map.prototype.set(key, value)`：设置键名key对应的键值为value，然后返回整个 Map 结构。如果key已经有值，则键值会被更新，否则就新生成该键
- `Map.prototype.get(key)`：读取key对应的键值，如果找不到key，返回undefined
- `Map.prototype.has(key)`：返回一个布尔值，表示某个键是否在当前 Map 对象之中
- `Map.prototype.delete(key)`：删除某个键，返回true。如果删除失败，返回false
- `Map.prototype.clear()`：清除所有成员，没有返回值

### Map 遍历方法
- `Map.prototype.keys()`：返回键名的遍历器
- `Map.prototype.values()`：返回键值的遍历器
- `Map.prototype.entries()`：返回所有成员的遍历器
- `Map.prototype.forEach()`：遍历 `Map` 的所有成员

## WeakMap
`WeakMap` 和 `Map` 的结构相似，都是一个键值对的集合。

其中 `WeakMap` 和 `Map` 的有两点区别：

- `WeakMap` 只接受对象作为键值，不接受其他数据类型。

```js
const map = new WeakMap();
map.set(1, 2)
// TypeError: 1 is not an object!
map.set(Symbol(), 2)
// TypeError: Invalid value used as weak map key
map.set(null, 2)
// TypeError: Invalid value used as weak map key
```

- `WeakMap` 的键引用对象是弱引用，值是正常引用（外部清除不影响），所谓的**弱引用**指 `WeakMap` 键引用的对象不在垃圾回收机制考虑的范围之内，如果其他对键值对象的引用都清除后，对象的内存就会被释放

以往开发中需要引用对象，不再需要时将所有引用的值设置为 `null`，这样对象的内存就会被释放，从而避免了内存泄漏。

```html
<div id="example">example</div>
<script>
  let wm = new WeakMap()
  let example = document.getElementById('example')
  let example1 = document.getElementById('example')
  let arr = [
    [example, 'arr1'],
    [example1, 'arr2']
  ]

  ...
  example = null
  example = null
  ...

  // 此处还要手动清除 arr 下的值，引用对象的内存才会被释放
  arr[0] = null
  arr[1] = null
  // 如果忘记手动清除就有可能导致内存泄漏
</script>
```

使用 `WeakMap` 可以有效地避免这种情况

```html
<div id="example">example</div>
<script>
  let wm = new WeakMap()
  let example = document.getElementById('example')
  wm.set(example, 'some information')
  console.log(wm.get(example)) // some information
  example = null
  console.log(wm.get(example)) // undefined
</script>
```