# package.json

```json
{
  "name": "hello-world", // 项目名称，必填
  "version": "0.1.0", // 版本（遵守"大版本"."次要版本"."小版本"的格式），必填
  "private": true, // 私服，不可 publish
  "main": "index.js", // 指定加载的入口文件是，require('moduleName')就会加载这个文件。默认值是模块根目录下面的index.js
  "scripts": {
    "preserve": "echo here it comes!", // npm run serve 前执行
    "preinstall": "echo here it comes!",// npm install 前执行
    "postinstall": "echo there it goes!",
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
  "dependencies": { // 指定项目运行依赖的模块
    "core-js": "^3.6.5",
    "vue": "^2.6.11"
  },
  "devDependencies": { // 指定项目开发所需要的模块
    "@vue/cli-plugin-babel": "~4.5.0", // 安转 4.5.x的最新版本（不低于4.5.0）,但是不能安装4.6.x，也就是说安转时不改变大版本号和次要版本号
    "@vue/cli-plugin-eslint": "4.5.0", // 安装指定版本 4.5.0
    "@vue/cli-service": "~4.5.0",
    "babel-eslint": "^10.1.0",
    "eslint": "^6.7.2",
    "eslint-plugin-vue": "^6.2.2", // 安装 6.x.x的最新版本（不低于6.2.2），但是不安装7.x.x，也就是说安装时不改变大版本号
    "vue-template-compiler": "latest" // 安装最新版本
  },
  "eslintConfig": { // eslint 配置
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/essential",
      "eslint:recommended"
    ],
    "parserOptions": {
      "parser": "babel-eslint"
    },
    "rules": {}
  },
  "browserslist": [ // 指定项目的目标流浪器的范围
    "> 1%",
    "last 2 versions",
    "not dead"
  ],
  "config": { // 程序中通过 process.env.npm_package_config_port 可以引用 config 字段的值
    "port": "8080"
  },
  "engines": { // 指明该模块运行的平台
    "node": ">=10.13.0 <10.16.0", // 指定 node 版本
    "npm": "~1.0.20" // 指定适用的 npm 版本
  },

  // 依赖包常用的字段
  "bin": { // 主程序可以通过scripts 直接执行对应的脚本，简写了路劲
    "someTool": "./bin/smoeTool.js"
  },
  "peerDependencies": {  // 主程序 chai 必须一起安装，而且chai的版本必须是1.x。如果你的项目指定的依赖是chai的2.0版本，就会报错
    "chai": "1.x"
  },
  "files": [ // 依赖包安装时包含的目录
    "es",
    "umd"
  ]
}
```