<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhaojunyun-jk
 * @Date: 2020-09-27 15:51:43
 * @LastEditors: zhaojunyun-jk
 * @LastEditTime: 2020-09-27 15:51:48
-->

# optimization.splitChunks

## 默认配置
```js
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'async', // 只拆分异步加载的文件
      minSize: 20000, // 文件大小超过20000字节才被拆分
      minRemainingSize: 0, // 
      maxSize: 0, // 拆包大小无限制
      minChunks: 1, // 引入超过1次就被拆分
      maxAsyncRequests: 30, // 异步加载的文件最多只能同时加载30个文件
      maxInitialRequests: 30, // 入口文件最多只能同时加载30个文件
      automaticNameDelimiter: '~', // 自定义分隔符
      enforceSizeThreshold: 50000, // 
      cacheGroups: { // 核心，打包策略
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
}
```

## 准备工作
```js
npm init

npm install -D @babel/core @babel/preset-react babel-loader lodash react react-dom webpack webpack-cli

// .babelrc
{
  "presets": [
    "@babel/preset-react"
  ]
}

// webpack.config.js
module.exports = {
  ...
  ...
}
```

## 默认配置打包实例1

```js
// src/entry1.jsx
import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  let Page1 = null

  import(/* webpackChunkName: "page1" */'./routes/page1').then(comp => {
    Page1 = comp
  })

  return (
    <div>
      <div>App</div>
      <Page1 />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))


// src/pages/page1.jsx
import React from 'react'
import _ from 'lodash'

const Page1 = () => {
  console.log(_)
  return (
    <div>
      <div>Page1</div>
    </div>
  )
}

export default Page1

// webpack.config.js
module.exports = {
  entry: {
    main: './src/entry1.js',
  },
  output: {
    path: path.join(__dirname, './dist'),
    chunkFilename: '[name].js',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
}
```

构建打包结果

![](/Jerome-Blog/webpack-page2-1.png)

分析：
- main.js：webpack 会把入口文件打包成一个 chunk
- page1.js：webpack 把动态加载文件打包成一个 chunk
- vendors~page1.js：optimization.splitChunks.chunks 为 'async'，webpack 会将异步加载的文件内部引用的 lodash 文件拆分后打包成另一个 chunk，默认配置中就有设计到 cacheGroups

> 问题：为什么 `react-dom` 没有被拆分出来？因为 `optimization.splitChunks.chunks` 为 `async`，只对动态加载的文件进行拆分


## chunks

chunks 的含义是拆分模块的范围

- `async`：表示只从异步加载得模块（动态加载import()）里面进行拆分
- `initial`：表示只从入口模块进行拆分
- `all`：包含以上两个

将实例1的 `optimization.splitChunks.chunks` 改为 `all`，输出文件如下：

![](/Jerome-Blog/webpack-page2-2.png)

分析：
- main.js：webpack 会把入口文件打包成一个 chunk
- page1.js：webpack 把动态加载文件打包成一个 chunk
- vendors~main.js：webpack 把入口文件 entry1.js 引用的 react-dom 拆分成一个包
- vendors~page1.js：webpack 把动态加载的 page1.js 引用的 lodash 拆分成一个包


将实例1的 `optimization.splitChunks.chunks` 改为 `initial`，输出文件如下：

![](/Jerome-Blog/webpack-page2-3.png)

分析：
`initial` 是指对入口文件执行拆包，所以相对 `all` 会少一个 `vendores~page1.js` 文件


## cacheGroups

`cacheGroups` 是拆包的核心，`splitChunks` 会根据 `cacheGroups` 进行模块拆分。默认配置就定义了两个缓存组。

```js
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'initial', // 改为从入口开始拆分
      cacheGroups: { // 核心，打包策略
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
}

// src/entry1.js
import React from 'react'
import ReactDOM from 'react-dom'
import $ from './assets/jquery'

const App = () => {
  console.log($)
  return (
    <div>
      <div>App</div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// src/entry2.js
import React from 'react'
import ReactDOM from 'react-dom'
import $ from './assets/jquery'

const App = () => {
  console.log($)
  return (
    <div>
      <div>entry2</div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
```

 `optimization.splitChunks.chunks` 改为 `initial`，输出文件如下：

![](/Jerome-Blog/webpack-page2-4.png)

分析：

- default~entry1~entry2.js：jquery.js 文件
- vendors~entry1~entry2.js：react-dom

## maxInitialRequests

`maxInitialRequests` 允许入口并行加载的最大文件数量，主要是为了不让文件拆分的太细，导致请求个数太多。

- 入口文件本身算一个请求
- 如果入口里面有动态加载得模块这个不算在内
- 通过runtimeChunk拆分出的runtime不算在内
- 只算js文件的请求，css不算在内
- 如果同时又两个模块满足cacheGroup的规则要进行拆分，但是maxInitialRequests的值只能允许再拆分一个模块，那尺寸更大的模块会被拆分出来

 `optimization.splitChunks.maxInitialRequests` 改为 `2`
 ```js
 module.exports = {
  entry: {
    entry1: './src/entry1.js',
    entry2: './src/entry2.js',
    entry3: './src/entry3.js'
  },
  output: {
    path: path.join(__dirname, './dist'),
    chunkFilename: '[name].js',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },

  optimization: {
    splitChunks: {
      chunks: 'initial',
      maxInitialRequests: 2,
      cacheGroups: { // 核心，打包策略
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
}

// src/entry1.js
import React from 'react'
import ReactDOM from 'react-dom'
import $ from './assets/jquery'
import OrgChart from './assets/orgchart'

const App = () => {
  OrgChart()
  console.log($)
  return (
    <div>
      <div>App</div>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))

// src/entry2.js
import React from 'react'
import ReactDOM from 'react-dom'
import $ from './assets/jquery'

const App = () => {
  console.log($)
  return (
    <div>
      <div>entry2</div>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))

// src/entry3.js
import React from 'react'
import ReactDOM from 'react-dom'
import OrgChart from './assets/orgchart'

const App = () => {
  OrgChart()
  return (
    <div>
      <div>App</div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
 ```

输出文件如下：

![](/Jerome-Blog/webpack-page2-5.png)

分析：
- entry1.js：入口文件
- entry2.js：入口文件
- entry3.js：入口文件
- vendor-entry1-entry2-entry3.js：maxInitialRequests 为 2 并且 cacheGroups.defaultVendors.priority 比 cacheGroups.default.priority 优先级高，所以文件内容为 react-dom。文件内引入的 jquery 和 orgchart 并没有被拆分出来，任然在各个入口文件 chunk 内。

修改 cacheGroups.default.priority 比 cacheGroups.defaultVendors.priority 优先级更高

```js
 module.exports = {
  ...
  optimization: {
    splitChunks: {
      chunks: 'initial',
      maxInitialRequests: 2,
      cacheGroups: { // 核心，打包策略
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -30,
          reuseExistingChunk: true
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
  ...
}
```

输出文件如下：

![](/Jerome-Blog/webpack-page2-6.png)

修改优先级文件输出内容不变

`optimization.splitChunks.maxInitialRequests` 改为 `3`

![](/Jerome-Blog/webpack-page2-7.png)

`optimization.splitChunks.maxInitialRequests` 改为 `4`

 ![](/Jerome-Blog/webpack-page2-8.png)

可以看到公共文件被逐渐拆分出来

## maxAsyncRequests

`maxAsyncRequests` 和 `maxInitialRequests `有相似之处，它俩都是用来限制拆分数量的，`maxInitialRequests` 是用来限制入口的拆分数量而 `maxAsyncRequests `是用来限制异步模块内部的并行最大请求数的，说白了你可以理解为是每个 `import()` 它里面的最大并行请求数量。

- import()文件本身算一个请求
- 并不算js以外的公共资源请求比如css
- 如果同时有两个模块满足cacheGroup的规则要进行拆分，但是maxInitialRequests的值只能允许再拆分一个模块，那尺寸更大的模块会被拆分出来