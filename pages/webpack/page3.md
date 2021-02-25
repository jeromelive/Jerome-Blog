<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhaojunyun-jk
 * @Date: 2020-09-28 10:24:26
 * @LastEditors: zhaojunyun-jk
 * @LastEditTime: 2020-09-28 10:24:32
-->
# optimization.runtimeChunk

优化持久化缓存的, `runtime` 指的是 `webpack` 的运行环境(具体作用就是模块解析, 加载) 和 模块信息清单, 模块信息清单在每次有模块变更(`hash` 变更)时都会变更, 所以我们想把这部分代码单独打包出来, 配合后端缓存策略, 这样就不会因为某个模块的变更导致包含模块信息的模块(通常会被包含在最后一个 `bundle` 中)缓存失效。`optimization.runtimeChunk` 就是告诉 `webpack` 是否要把这部分单独打包出来。

将 `optimization.runtimeChunk` 设置为 `true` 或 `'multiple'`，会为每个只含有 `runtime` 的入口添加一个额外 `chunk`。

项目有以下文件：
- entry.js 文件内部import('**page.js'**') 
- page.js

```js
module.exports = {
  //...
  optimization: {
    runtimeChunk: {
      // 此处的entrypoint.name 是指 output 配置的 filename
      name: entrypoint => `runtime~${entrypoint.name}`
    }
  }
};
```

值 "single" 会创建一个在所有生成 chunk 之间共享的运行时文件。此设置是如下设置的别名：
```js
module.exports = {
  //...
  optimization: {
    runtimeChunk: {
      name: 'runtime'
    }
  }
};
```

通过将 `optimization.runtimeChunk` 设置为 `object`，对象中可以设置只有 `name` 属性，其中属性值可以是名称或者返回名称的函数， 用于为 `runtime chunks` 命名。

默认值是 `false`：每个入口 `chunk` 中直接嵌入 `runtime`。