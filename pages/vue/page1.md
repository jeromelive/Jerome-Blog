[[toc]]
# Vue-cli@3.0

## 安装
```js
  npm install -g @vue/cli
  OR
  yarn global add @vue/cli
```

## 安装是否正确
```js
  vue --version
```

## 创建项目
```js
  vue create hello-world
```

## Vue.config.js 配置参数
在项目更目录下创建名为 `Vue.config.js` 的文件
```js
module.default {
  publicPath: '/Jerome-Blog/'
}
```

### publicPath
Type: `String`

默认情况下输出的 index.html 内部的静态资源链接是不带路径的，即默认请求根目录，如果部署在
https://jeromelive.github.io/Jerome-Blog/
，则设置 `publicPath` 为 `'/Jerome-Blog/'`

### configureWebpack
Type: `Object | Function`

添加 loader 和 plugins 可以使用这个参数

如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。

如果这个值是一个函数，则会接收被解析的配置作为参数。该函数既可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。


## vscode 代码格式化配置 Vue-cli3 + eslint + vscode + vutur

### eslint 格式修改
初始化项目是配置信息设置在 `package.json` 在 `eslintConfig` 下修改即可，否则 `eslint.js` 设置 `root` 为 `true`，方便对不同项目进行不一样的代码格式化


### `vscode` 相关配置

- eslint插件，用以编辑器代码报错提示，方便一边开发一边看代码是否完整
- Vetur插件，vue项目的代码高亮工具
- 配置参数如下
```json
// 保存文件时自动格式化
"editor.formatOnSave": true,
// 用eslint的规则检测文件
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
},
"eslint.format.enable": true,
//autoFix默认开启，只需输入字符串数组即可
"eslint.validate": [ // 检测vue、js、html文件
    "javascript",
    "vue",
    "html",
    "typescript"
],
// 对于.vue文件,关闭prettier,交给eslint fix。如果有其他工具也需要关闭
"vetur.format.defaultFormatter.css": "none",
"vetur.format.defaultFormatter.html": "none",
"vetur.format.defaultFormatter.js": "none",
"vetur.format.defaultFormatter.less": "none",
"vetur.format.defaultFormatter.postcss": "none",
"vetur.format.defaultFormatter.scss": "none",
"vetur.format.defaultFormatter.stylus": "none",
"vetur.format.defaultFormatter.ts": "none",
```