# @babel/cli

Babel内置CLI，可用于从命令行编译文件

## 安装

```js
npm i -D @babel/core @babel/cli
```

安装 @babel/cli 后会在 /node_modules/bin 生成 babel 与 babel.cm 文件，babel.cm 文件是 Windows 命令脚本文件，常用的是 babel 这个文件。

```sh
#!/bin/sh
basedir=$(dirname "$(echo "$0" | sed -e 's,\\,/,g')")

case `uname` in
    *CYGWIN*) basedir=`cygpath -w "$basedir"`;;
esac

if [ -x "$basedir/node" ]; then
  "$basedir/node"  "$basedir/../@babel/cli/bin/babel.js" "$@"
  ret=$?
else 
  node  "$basedir/../@babel/cli/bin/babel.js" "$@"
  ret=$?
fi
exit $ret
```

## 使用 babel 编译文件
```js
// package.json
"scripts": {
  "start": "babel script.js"
}

// command
npx babel script.js
./node_modules/.bin/babel script.js

// command 带参数
npx babel script.js --out-file script-compiled.js
```

## 参数
| 参数 | 缩写 | 备注 | 代码 |
| ---- | ---- | ---- | ---- |
| --out-file | -o | 输出文件 | `npx babel script.js --out-file script-compiled.js` |
| --out-dir | -d | 输出文件夹 | `npx babel src --out-dir lib` |
| --watch | -w | 监听文件变化 | `npx babel script.js --watch --out-file script-compiled.js` |
| --source-maps | -s | 输出 source-map | `npx babel script.js --out-file script-compiled.js --source-maps` |
| --source-maps inline | -s inline | 输出内联 source-map | `npx babel script.js --out-file script-compiled.js --source-maps` |
| --ignore |  | 忽略文件 | `npx babel src --out-dir lib --ignore "src/**/*.spec.js","src/**/*.test.js"`  |
| --copy-files |  | 复制没有被编译的文件 | `npx babel src --out-dir lib --copy-files` |
| --plugins |  | 插件 | `npx babel script.js --out-file script-compiled.js --plugins=@babel/proposal-class-properties,@babel/transform-modules-amd` |
| --presets |  | 预设 | `npx babel script.js --out-file script-compiled.js --presets=@babel/preset-env,@babel/flow` |
| --no-babelrc |  | 忽略 .babelrc 文件 | `npx babel --no-babelrc script.js --out-file script-compiled.js --presets=es2015,react` |
| --extensions |  | 文件后缀 | `npx babel script.js --out-file script-compiled.js --extensions \".ts,.tsx\"` |