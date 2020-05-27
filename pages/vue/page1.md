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

### publicPath
默认情况下输出的 index.html 内部的静态资源链接是不带路径的，即默认请求根目录，如果部署在
https://jeromelive.github.io/Jerome-Blog/
，则设置 `publicPath` 为 `'/Jerome-Blog/'`

