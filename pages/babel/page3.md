<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhaojunyun-jk
 * @Date: 2020-11-10 16:05:16
 * @LastEditors: zhaojunyun-jk
 * @LastEditTime: 2020-11-13 15:07:12
-->
# presets

## @babel/preset-env

Babel 7 是一系列插件的集合，不存在 Babel 6 中使用到的 es2015/es2016/es2017 等语法转换插件。

### 配置参数
- targets: 项目要支持的目标浏览器环境
  - 示例环境： chrome, opera, edge, firefox, safari, ie, ios, android, node, electron

占有率 > 0.25% 的浏览器
```json
{
  "targets": "> 0.25%, not dead"
}
```
最低环境版本支持的对象
```json
{
  "targets": {
    "chrome": "58",
    "ie": "11"
  }
}
```
- loose: 允许所有插件启用“宽松”转换
- modules: 指定输出文件的转换模块规范。一般在 webpack 项目中，将参数设置为 false，即将 module 交由 webpack 处理，而不是 babel.

"amd" | "umd" | "systemjs" | "commonjs" | "cjs" | "auto" | false, defaults to "auto"

- useBuiltIns: polyfill 的处理方式
  - usage：按需引入
  - entry：入口文件全局引入
  
- corejs: 指定 corejs 的版本，默认为 2
- configPath: 搜索配置文件的路劲，默认为 process.cwd()

## @babel/poly-fill

`@babel/poly-fill` 不仅使 `@babel/preset-env` 能够转换新的语法变为 `Ecmascript5` 的写法，还能是转换的代码兼容新的 `Api`，例如 `Array.prototype.includes` 等。引入 `@babel/poly-fill` 一般有两种方式：
- 1.在文件入口直接 `import "@babel/poly-fill"`;
- 2.配置 `@babel/preset-env` 的 `target` 和 `useBuiltint` 两个参数按需引入

## @babel/preset-env & @babel/poly-fill

@babel/preset-env & @babel/poly-fill 的关系主要是通过配置参数 `target` 和 `useBuiltint` 链接在一起

- target 支持的浏览器列表
- useBuiltint 参数有 "entry"、"usage"、false 三个值。默认值是 false，此参数决定了 babel 打包时如何处理 @babel/poly-fill 语句

"entry": 会将文件中 import "@babel/poly-fill" 语句结合 targets ，转换为一系列引入语句，去掉目标浏览器已支持的poly-fill 模块，不管代码里有没有用到，只要目标浏览器不支持都会引入对应的polyfilll 模块。

"usage": 不需要手动在代码里写 import "@babel/poly-fill" ，打包时会自动根据实际代码的使用情况，结合 targets 引入代码里实际用到 部分 poly-fill 模块

false: 对 import "@babel/poly-fill"  不作任何处理，也不会自动引入 poly-fill 模块。

> 需要注意的是在 webpack 打包文件配置的 entry 中引入的 @babel/polyfill 不会根据 useBuiltIns 配置任何转换处理。

### 两种引入方式比较

- import "@babel/poly-fill"

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "chrome": "58"
        },
        "useBuiltIns": "entry"
      }
    ]
  ]
}
```

```js
// main.js
import "@babel/polyfill"
import utils from '../utils'
utils('jerome')
const array = [1,2,3,4]
array.includes((item) => item > 2)
class Person {}
typeof a

// converted to

// compiler.js
"use strict";
require("core-js/modules/es7.array.flat-map");
require("core-js/modules/es6.array.sort");
require("core-js/modules/es7.object.define-getter");
require("core-js/modules/es7.object.define-setter");
require("core-js/modules/es7.object.lookup-getter");
require("core-js/modules/es7.object.lookup-setter");
require("core-js/modules/es7.promise.finally");
require("core-js/modules/es7.symbol.async-iterator");
require("core-js/modules/es7.string.trim-left");
require("core-js/modules/es7.string.trim-right");
require("core-js/modules/web.timers");
require("core-js/modules/web.immediate");
require("core-js/modules/web.dom.iterable");
var _utils = _interopRequireDefault(require("../utils"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
(0, _utils.default)('jerome');
const array = [1, 2, 3, 4];
array.includes(item => item > 2);
class Person {}
typeof a;
```

输出的 compiler.js 会引入目标浏览器所有不支持的 polyfill 统统引入进来，尽管代码中没有用到。

- 按需加载

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
        },
        "useBuiltIns": "usage"
      }
    ]
  ]
}
```

```js
import utils from '../utils'
utils('jerome')
const array = [1,2,3,4]
array.includes((item) => item > 2)
class Person {}
typeof a

// converted to

// compiler.js
"use strict";
require("core-js/modules/es7.symbol.async-iterator");
require("core-js/modules/es6.symbol");
require("core-js/modules/es7.array.includes");
var _utils = _interopRequireDefault(require("../utils"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(0, _utils["default"])('jerome');
var array = [1, 2, 3, 4];
array.includes(function (item) {
  return item > 2;
});
var Person = function Person() {
  _classCallCheck(this, Person);
};
typeof a === "undefined" ? "undefined" : _typeof(a);
```

输出的 compiler.js 只会引入代码中使用到的并且目标浏览器不支持的 poly-fill

## 其他的 preset

- @babel/preset-react
- @babel/preset-typescript
- @vue/babel-preset-jsx