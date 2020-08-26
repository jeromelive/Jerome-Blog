<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhaojunyun-jk
 * @Date: 2020-08-11 10:29:41
 * @LastEditors: zhaojunyun-jk
 * @LastEditTime: 2020-08-26 11:41:00
-->
# JsBridge：Web 和客户端双向通信

Hybrid App的本质，其实是在原生的 `App` 中，使用 `WebView` 作为容器直接承载 `Web` 页面。因此，最核心的点就是 `Native` 端 与 `H5` 端 之间的双向通讯层，其实这里也可以理解为我们需要一套跨语言通讯方案，来完成 `Native(Java/Objective-c/...)` 与 `JavaScript` 的通讯。这个方案就是我们所说的 `JSBridge`，而实现的关键便是作为容器的 `WebView`，一切的原理都是基于 `WebView` 的机制。

## 一、 JavaScript 通知 Native
基于 `WebView` 的机制和开放的 `API`, 实现这个功能有三种常见的方案：
API注入，原理其实就是 `Native` 获取 `JavaScript` 环境上下文，并直接在上面挂载对象或者方法，使 `js` 可以直接调用，`Android` 与 `IOS` 分别拥有对应的挂载方式。
`WebView` 中的 `prompt/console/alert` 拦截，通常使用 `prompt`，因为这个方法在前端中使用频率低，比较不会出现冲突；
`WebView URL Scheme` 跳转拦截；

## 二、 Native 通知 Javascript
由于 `Native` 可以算作 `H5` 的宿主，因此拥有更大的权限，上面也提到了 `Native` 可以通过 `WebView API` 直接执行 `Js` 代码。这样的权限也就让这个方向的通讯变得十分的便捷。
- `IOS: stringByEvaluatingJavaScriptFromString`
``` js
// Swift
webview.stringByEvaluatingJavaScriptFromString("alert('NativeCall')")
```

- `Android: loadUrl (4.4-)`
```js
// 调用js中的JSBridge.trigger方法
// 该方法的弊端是无法获取函数返回值；
webView.loadUrl("javascript:JSBridge.trigger('NativeCall')")
```

`Tips`: 当系统低于4.4时，`evaluateJavascript` 是无法使用的，因此单纯的使用 `loadUrl` 无法获取 JS 返回值，这时我们需要使用前面提到的 `prompt` 的方法进行兼容，让 `H5` 端 通过 `prompt` 进行数据的发送，客户端进行拦截并获取数据。
- `Android: evaluateJavascript (4.4+)`
```js
// 4.4+后使用该方法便可调用并获取函数返回值；
mWebView.evaluateJavascript（"javascript:JSBridge.trigger('NativeCall')", 	 
new ValueCallback<String>() {
    @Override
    public void onReceiveValue(String value) {
        //此处为 js 返回的结果
    }
});
```
基于上面的原理，我们已经明白 `JSBridge` 最基础的原理，并且能实现 `Native <=> H5` 的双向通讯机制了。


## 三、 JSBridge 的接入
接下来，我们来理下代码上需要的资源。实现这套方案，从上图可以看出，其实可以分为两个部分:
- `JS` 部分(bridge): 在 `JS` 环境中注入 `bridge` 的实现代码，包含了协议的拼装/发送/参数池/回调池等一些基础功能。
- `Native部分(SDK)`: 在客户端中 `bridge` 的功能映射代码，实现了URL拦截与解析/环境信息的注入/通用功能映射等功能。
我们这里的做法是，将这两部分一起封装成一个 `Native SDK`，由客户端统一引入。客户端在初始化一个 `WebView` 打开页面时，如果页面地址在白名单中，会直接在 `HTML` 的头部注入对应的 `bridge.js`。这样的做法有以下的好处：
- 双方的代码统一维护，避免出现版本分裂的情况。有更新时，只要由客户端更新 `SDK` 即可，不会出现版本兼容的问题；
- `App` 的接入十分方便，只需要按文档接入最新版本的 `SDK`，即可直接运行整套 `Hybrid` 方案，便于在多个App中快速的落地；
- `H5端`无需关注，这样有利于将 `bridge` 开放给第三方页面使用。
这里有一点需要注意的是，协议的调用，一定是需要确保执行在 `bridge.js` 成功注入后。由于客户端的注入行为属于一个附加的异步行为，从 `H5 `方很难去捕捉准确的完成时机，因此这里需要通过客户端监听页面完成后，基于上面的事件回调机制通知 `H5端`，页面中即可通过` window.addEventListener('bridgeReady', e => {})` 进行初始化。

## 四、 App中 H5 的接入方式
将 `H5` 接入 `App` 中通常有两种方式：
- (1) 在线 `H5`，这是最常见的一种方式。我们只需要将H5代码部署到服务器上，只要把对应的 URL地址 给到客户端，用 `WebView` 打开该URL，即可嵌入。该方式的好处在于:
  - 独立性强，有非常独立的开发/调试/更新/上线能力；
  - 资源放在服务器上，完全不会影响客户端的包体积；
接入成本很低，完全的热更新机制。
但相对的，这种方式也有对应的缺点:
  - 完全的网络依赖，在离线的情况下无法打开页面；
  - 首屏加载速度依赖于网络，网络较慢时，首屏加载也较慢；
通常，这种方式更适用在一些比较轻量级的页面上，例如一些帮助页、提示页、使用攻略等页面。这些页面的特点是功能性不强，不太需要复杂的功能协议，且不需要离线使用。在一些第三方页面接入上，也会使用这种方式，例如我们的页面调用微信`JS-SDK`。
- (2) 内置包 `H5`，这是一种本地化的嵌入方式，我们需要将代码进行打包后下发到客户端，并由客户端直接解压到本地储存中。通常我们运用在一些比较大和比较重要的模块上。其优点是:
  - 由于其本地化，首屏加载速度快，用户体验更为接近原生；
  - 可以不依赖网络，离线运行；
但同时，它的劣势也十分明显:
  - 开发流程/更新机制复杂化，需要客户端，甚至服务端的共同协作；
  - 会相应的增加 `App` 包体积；
这两种接入方式均有自己的优缺点，应该根据不同场景进行选择。