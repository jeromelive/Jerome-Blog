<!--
 * @Author: your name
 * @Date: 2020-07-13 15:05:00
 * @LastEditTime: 2020-07-13 16:16:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Jerome-Blog\pages\vue\page2.md
--> 
# 自定义指令

## 一、概要

`Vue` 中代码的复用和抽象主要形式是组件，但是往往会出现只需要对底层 `DOM` 进行操作的场景，这时指令会是更好的选择。对于修改项目中的祖传代码，使用指令也是一种比较好的优化方式，能起来尽量减少对现有代码的修改。`Vue` 内部自带的指令有 `v-model` `v-show`。

工作有这样一个需求，优化项目所有现有的图片，未加载前添加灰色占位，使用自定义指令来优化，代码如下：

```css
.loading {
  background-color: #E6E7EB !important;
}
```

```js
Vue.directive('load', {
  bind (el, binding) {
    lazyLoadHandler(el, binding)
  },
  update(el, binding) {
    lazyLoadHandler(el, binding)
  }
})

const lazyLoadHandler = (el, binding) => {
  let image = new window.Image()
  el.classList.add('loading')
  image.onload = function () {
    // 图片下载成功
    el.classList.remove('loading')
  }
  image.onerror = function (e) {
    // 图片下载失败
  }
  image.src = el.getAttribute('src')
}

// 使用，只需要在原来的 img 标签添加 v-load 指令，修改代码更少
<img v-load src="https://cn.vuejs.org/images/logo.png">
```

## 二、钩子函数

- `bind`：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
- `inserted`：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
- `update`：所在组件的 VNode 更新时调用，**但是可能发生在其子 VNode 更新之前**。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。
- `componentUpdated`：指令所在**组件的 VNode** 及**其子 VNode** 全部更新后调用。
- `unbind`：只调用一次，指令与元素解绑时调用。

## 三、钩子函数的参数
- el：指令所绑定的元素，可以用来直接操作 DOM。
- binding：一个对象，包含以下 property：
  - name：指令名，不包括 v- 前缀。
  - value：指令的绑定值，例如：`v-my-directive="1 + 1"` 中，绑定值为 `2`。
  - oldValue：指令绑定的前一个值，仅在 `update` 和 `componentUpdated` 钩子中可用。无论值是否改变都可用。
  - expression：字符串形式的指令表达式。例如 `v-my-directive="1 + 1"` 中，表达式为 `"1 + 1"`。
  - arg：传给指令的参数，可选。例如 `v-my-directive:foo` 中，参数为 `"foo"`
  - modifiers：一个包含修饰符的对象。例如：`v-my-directive.foo.bar` 中，修饰符对象为 `{ foo: true, bar: true }`。
- vnode: Vue 编译生成的虚拟节点。移步 VNode API 来了解更多详情。
- oldVnode：上一个虚拟节点，仅在 `update` 和 `componentUpdated` 钩子中可用。

## 四、动态指令参数
指令的参数可以是动态的。例如，在 `v-mydirective:[argument]="value"` 中，`argument` 参数可以根据组件实例数据进行更新！这使得自定义指令可以在应用中被灵活使用。

## 五、函数简写

如果指令只需要关注 `bind` 和 `update` 两个钩子的执行，并且执行的代码相同，步骤一的代码可以修改如下：

```js
Vue.directive('load', lazyLoadHandler(el, binding))
```

## 六、对象字面量
如果指令需要多个值，可以传入一个 JavaScript 对象字面量。记住，指令函数能够接受所有合法的 JavaScript 表达式。