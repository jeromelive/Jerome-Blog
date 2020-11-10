<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhaojunyun-jk
 * @Date: 2020-11-10 16:04:23
 * @LastEditors: zhaojunyun-jk
 * @LastEditTime: 2020-11-10 17:59:46
-->
# babel 7

## `Babel` 是什么？

### `Babel` 是 `javascript` 的一个编译器

`Babel` 是一个工具链，主要用于将 `ES6` 版本的代码转换为向后兼容的 `Javscript` 语法，以便能够运载在当前和旧版本的浏览器或其他环境中。
- 语法转换
- 通过 `Polyfill` 方式在目标环境中添加缺失的特性（通过 `@babel/polyfill` 模块）
- 源码转换（`jsx` 转换成 `js`）

```js
// Babel 输入： ES2015 箭头函数
[1, 2, 3].map((n) => n + 1);

// Babel 输出： ES5 语法实现的同等功能
[1, 2, 3].map(function(n) {
  return n + 1;
});
```

## `Babel` 使用指南

```js
npm i -D @babel/core @babel/preset-env
npm i -S @babel/polyfill
```

创建一个名为 .babelrc 或 babel.config.json 的文件
```json
{
  "presets": [
    [
      "@babel/env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1",
        },
        "useBuiltIns": "usage",
      }
    ]
  ]
}
```

代码脚本中直接运行核心库 `@babel/core` 的方法编译代码
```js
import babel from "@babel/core"
babel.transform("core", optionsObject)
```

`@babel/cli` 工具允许开发者在 `terminal` 中直接运行 `babel` 编译文件
```js
npm i -D @babel/cli

./node_modules/.bin/babel src --out-dir lib
// 或者
npx babel src --out-dir lib
```

## `presets` & `plugins`

`plugins` 是 `babel` 转换代码的最小单位，可以通过自定义 `plugins` 实现想要的转换效果。比例 `@babel/plugin-transform-arrow-functions`：

```js
npm i -D @babel/plugin-transform-arrow-functions

npx babel src --out-dir lib --plugins=@babel/plugin-transform-arrow-functions
```

```js
const fn = () => 1;

// converted to

var fn = function fn() {
  return 1;
};
```

在常用的开发中往往不止箭头函数需要被转换，还会有其他的 ES6 语法需要被转换。这时就需要用上预设 `presets`

```js
npm install --save-dev @babel/preset-env

./node_modules/.bin/babel src --out-dir lib --presets=@babel/env
```

需要提供更多的配置信息，可以通过配置文件 `.babelrc` 来配置

```json
{
  "presets": [
    [
      "@babel/env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1",
        }
      }
    ]
  ]
}
```

```js
const array = [1,2,3,4]
array.includes((item) => item > 2)

// converted to

var array = [1, 2, 3, 4];
array.includes(function (item) {
  return item > 2;
})
```

注意：`const` 和 箭头函数都为语法，`includes` 这种方法为 `api`，上面例子对于语法进行了转换，但是 `Api` 并没有做任何处理。`babel` 转译后的代码如果在不支持 `includes` 这个方法的浏览器里运行，就会报错。

## `@babel/polyfill`

### `polyfill` 处理 `api`
`babel` 使用 `polyfill` 来处理 `API`，`ployfill` 包含 `core-js`，通过引入 `core-js` 对应的脚本来解决 `Api` 兼容问题。

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage"
      }
    ]
  ]
}
```

```js
const array = [1,2,3,4]
array.includes((item) => item > 2)

// converted to

require("core-js/modules/es7.array.includes");

var array = [1, 2, 3, 4];
array.includes(function (item) {
  return item > 2;
});
```

注意：`require("core-js/modules/es7.array.includes");` 是直接在 `global.Array` 上添加。对于例如 `includes` 等实例方法，直接在 `global.Array.prototype` 上添加。这样直接修改了全局变量的原型，有可能会带来意想不到的问题。这个问题在开发第三方库的时候尤其重要，因为我们开发的第三方库修改了全局变量，有可能和另一个也修改了全局变量的第三方库发生冲突，或者和使用我们的第三方库的使用者发生冲突。公认的较好的编程范式中，也不鼓励直接修改全局变量、全局变量原型。


### `babel` 转译 `syntax` 时，有时候会使用一些辅助的函数来帮忙转

```js
const array = [1,2,3,4]
array.includes((item) => item > 2)
class Person {}
typeof a

// converted to

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es7.array.includes");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var array = [1, 2, 3, 4];
array.includes(function (item) {
  return item > 2;
});

var Person = function Person() {
  _classCallCheck(this, Person);
};

typeof a === "undefined" ? "undefined" : _typeof(a);
```

`class` 语法中，`babel` 自定义了 `_classCallCheck` 这个函数来辅助；`typeof` 则是直接重写了一遍，自定义了 `_typeof` 这个函数来辅助。这些函数叫做 `helpers`。从上图中可以看到，`helper` 直接在转译后的文件里被定义了一遍。如果一个项目中有 100 个文件，其中每个文件都写了一个 `class`，那么这个项目最终打包的产物里就会存在 100 个 `_classCallCheck` 函数，他们的长相和功能一模一样，这显然不合理。

## 问题：

- 全局变量及其原型被污染
- helper 直接在转义后的文件里面被重复定义

## `@babel/plugin-transform-runtime`

`@babel/plugin-transform-runtime` 的作用就是解决上两个问题的

```js
npm i -D @babel/plugin-transform-runtime
```

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "debug": true
      }
    ]
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": 3 // 指定 runtime-corejs 的版本，目前有 2 3 两个版本
      }
    ]
  ]
}
```

```js
const array = [1,2,3,4]
array.includes((item) => item > 2)
class Person {}
typeof a

// converted to

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var array = [1, 2, 3, 4];
(0, _includes["default"])(array).call(array, function (item) {
  return item > 2;
});

var Person = function Person() {
  (0, _classCallCheck2["default"])(this, Person);
};

typeof a === "undefined" ? "undefined" : (0, _typeof2["default"])(a);
```

在引入了 `transform-runtime` 插件后：
- `api` 从之前的直接修改原型改为了从一个统一的模块中引入，避免了对全局变量及其原型的污染，解决了第一个问题
- `helpers` 从之前的原地定义改为了从一个统一的模块中引入，使得打包的结果中每个 `helper` 只会存在一个，解决了第二个问题