# plugins

## sass
sass sass-loader css-loader style-loader

## extract-text-webpack-plugin
css 代码抽离

## mini-css-extract-plugin
css 代码抽离，代替 extract-text-webpack-plugin

## optimize-css-assets-webpack-plugin
webapck构建过程中优化及压缩css资源文件，使用的是 cssnano 压缩，体积会相对少一点点，常与 mini-css-extract-plugin 优化 css 资源文件

## uglifyjs-webpack-plugin
js 代码压缩

## terser-webpack-plugin
js 代码压缩，能识别 es6

## html-webpack-plugin
创建一个html文件

## clean-webpack-plugin
清除指定目录内的文件

## hard-source-webpack-plugin
使用缓存，加快打包速度

## happypack
多进程打包

## postcss-pxtorem、autoprefixer
px转rem，补充前置

## babel-plugin-lodash、lodash-webpack-plugin
lodash 按需加载，减少 lodash 体积

## babel-plugin-import

## webpack-bundle-analyzer
webpack 打包分析工具

## fork-ts-checker-webpack-plugin

## @babel/plugin-proposal-decorators
解析装饰器插件，必须在 @babel/plugin/proposal-class-properties 前面是用
## @babel/plugin-proposal-class-properties
解析类的插件

## vue-class-component
## vue-property-decorator
## vue-tsx-support
vue-typescript 模式 class style
