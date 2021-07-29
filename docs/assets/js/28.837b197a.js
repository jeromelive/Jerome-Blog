(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{401:function(e,a,t){"use strict";t.r(a);var s=t(44),v=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"jsbridge-web-和客户端双向通信"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jsbridge-web-和客户端双向通信"}},[e._v("#")]),e._v(" JsBridge：Web 和客户端双向通信")]),e._v(" "),t("p",[e._v("Hybrid App的本质，其实是在原生的 "),t("code",[e._v("App")]),e._v(" 中，使用 "),t("code",[e._v("WebView")]),e._v(" 作为容器直接承载 "),t("code",[e._v("Web")]),e._v(" 页面。因此，最核心的点就是 "),t("code",[e._v("Native")]),e._v(" 端 与 "),t("code",[e._v("H5")]),e._v(" 端 之间的双向通讯层，其实这里也可以理解为我们需要一套跨语言通讯方案，来完成 "),t("code",[e._v("Native(Java/Objective-c/...)")]),e._v(" 与 "),t("code",[e._v("JavaScript")]),e._v(" 的通讯。这个方案就是我们所说的 "),t("code",[e._v("JSBridge")]),e._v("，而实现的关键便是作为容器的 "),t("code",[e._v("WebView")]),e._v("，一切的原理都是基于 "),t("code",[e._v("WebView")]),e._v(" 的机制。")]),e._v(" "),t("h2",{attrs:{id:"一、-javascript-通知-native"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、-javascript-通知-native"}},[e._v("#")]),e._v(" 一、 JavaScript 通知 Native")]),e._v(" "),t("p",[e._v("基于 "),t("code",[e._v("WebView")]),e._v(" 的机制和开放的 "),t("code",[e._v("API")]),e._v(", 实现这个功能有三种常见的方案：\nAPI注入，原理其实就是 "),t("code",[e._v("Native")]),e._v(" 获取 "),t("code",[e._v("JavaScript")]),e._v(" 环境上下文，并直接在上面挂载对象或者方法，使 "),t("code",[e._v("js")]),e._v(" 可以直接调用，"),t("code",[e._v("Android")]),e._v(" 与 "),t("code",[e._v("IOS")]),e._v(" 分别拥有对应的挂载方式。\n"),t("code",[e._v("WebView")]),e._v(" 中的 "),t("code",[e._v("prompt/console/alert")]),e._v(" 拦截，通常使用 "),t("code",[e._v("prompt")]),e._v("，因为这个方法在前端中使用频率低，比较不会出现冲突；\n"),t("code",[e._v("WebView URL Scheme")]),e._v(" 跳转拦截；")]),e._v(" "),t("h2",{attrs:{id:"二、-native-通知-javascript"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、-native-通知-javascript"}},[e._v("#")]),e._v(" 二、 Native 通知 Javascript")]),e._v(" "),t("p",[e._v("由于 "),t("code",[e._v("Native")]),e._v(" 可以算作 "),t("code",[e._v("H5")]),e._v(" 的宿主，因此拥有更大的权限，上面也提到了 "),t("code",[e._v("Native")]),e._v(" 可以通过 "),t("code",[e._v("WebView API")]),e._v(" 直接执行 "),t("code",[e._v("Js")]),e._v(" 代码。这样的权限也就让这个方向的通讯变得十分的便捷。")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("IOS: stringByEvaluatingJavaScriptFromString")])])]),e._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Swift")]),e._v("\nwebview"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("stringByEvaluatingJavaScriptFromString")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("\"alert('NativeCall')\"")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("ul",[t("li",[t("code",[e._v("Android: loadUrl (4.4-)")])])]),e._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 调用js中的JSBridge.trigger方法")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 该方法的弊端是无法获取函数返回值；")]),e._v("\nwebView"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("loadUrl")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("\"javascript:JSBridge.trigger('NativeCall')\"")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[t("code",[e._v("Tips")]),e._v(": 当系统低于4.4时，"),t("code",[e._v("evaluateJavascript")]),e._v(" 是无法使用的，因此单纯的使用 "),t("code",[e._v("loadUrl")]),e._v(" 无法获取 JS 返回值，这时我们需要使用前面提到的 "),t("code",[e._v("prompt")]),e._v(" 的方法进行兼容，让 "),t("code",[e._v("H5")]),e._v(" 端 通过 "),t("code",[e._v("prompt")]),e._v(" 进行数据的发送，客户端进行拦截并获取数据。")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("Android: evaluateJavascript (4.4+)")])])]),e._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 4.4+后使用该方法便可调用并获取函数返回值；")]),e._v("\nmWebView"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("evaluateJavascript（"),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("\"javascript:JSBridge.trigger('NativeCall')\"")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" \t \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ValueCallback")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("String"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    @Override\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("void")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("onReceiveValue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("String value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//此处为 js 返回的结果")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br")])]),t("p",[e._v("基于上面的原理，我们已经明白 "),t("code",[e._v("JSBridge")]),e._v(" 最基础的原理，并且能实现 "),t("code",[e._v("Native <=> H5")]),e._v(" 的双向通讯机制了。")]),e._v(" "),t("h2",{attrs:{id:"三、-jsbridge-的接入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、-jsbridge-的接入"}},[e._v("#")]),e._v(" 三、 JSBridge 的接入")]),e._v(" "),t("p",[e._v("接下来，我们来理下代码上需要的资源。实现这套方案，从上图可以看出，其实可以分为两个部分:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("JS")]),e._v(" 部分(bridge): 在 "),t("code",[e._v("JS")]),e._v(" 环境中注入 "),t("code",[e._v("bridge")]),e._v(" 的实现代码，包含了协议的拼装/发送/参数池/回调池等一些基础功能。")]),e._v(" "),t("li",[t("code",[e._v("Native部分(SDK)")]),e._v(": 在客户端中 "),t("code",[e._v("bridge")]),e._v(" 的功能映射代码，实现了URL拦截与解析/环境信息的注入/通用功能映射等功能。\n我们这里的做法是，将这两部分一起封装成一个 "),t("code",[e._v("Native SDK")]),e._v("，由客户端统一引入。客户端在初始化一个 "),t("code",[e._v("WebView")]),e._v(" 打开页面时，如果页面地址在白名单中，会直接在 "),t("code",[e._v("HTML")]),e._v(" 的头部注入对应的 "),t("code",[e._v("bridge.js")]),e._v("。这样的做法有以下的好处：")]),e._v(" "),t("li",[e._v("双方的代码统一维护，避免出现版本分裂的情况。有更新时，只要由客户端更新 "),t("code",[e._v("SDK")]),e._v(" 即可，不会出现版本兼容的问题；")]),e._v(" "),t("li",[t("code",[e._v("App")]),e._v(" 的接入十分方便，只需要按文档接入最新版本的 "),t("code",[e._v("SDK")]),e._v("，即可直接运行整套 "),t("code",[e._v("Hybrid")]),e._v(" 方案，便于在多个App中快速的落地；")]),e._v(" "),t("li",[t("code",[e._v("H5端")]),e._v("无需关注，这样有利于将 "),t("code",[e._v("bridge")]),e._v(" 开放给第三方页面使用。\n这里有一点需要注意的是，协议的调用，一定是需要确保执行在 "),t("code",[e._v("bridge.js")]),e._v(" 成功注入后。由于客户端的注入行为属于一个附加的异步行为，从 "),t("code",[e._v("H5")]),e._v("方很难去捕捉准确的完成时机，因此这里需要通过客户端监听页面完成后，基于上面的事件回调机制通知 "),t("code",[e._v("H5端")]),e._v("，页面中即可通过"),t("code",[e._v("window.addEventListener('bridgeReady', e => {})")]),e._v(" 进行初始化。")])]),e._v(" "),t("h2",{attrs:{id:"四、-app中-h5-的接入方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、-app中-h5-的接入方式"}},[e._v("#")]),e._v(" 四、 App中 H5 的接入方式")]),e._v(" "),t("p",[e._v("将 "),t("code",[e._v("H5")]),e._v(" 接入 "),t("code",[e._v("App")]),e._v(" 中通常有两种方式：")]),e._v(" "),t("ul",[t("li",[e._v("(1) 在线 "),t("code",[e._v("H5")]),e._v("，这是最常见的一种方式。我们只需要将H5代码部署到服务器上，只要把对应的 URL地址 给到客户端，用 "),t("code",[e._v("WebView")]),e._v(" 打开该URL，即可嵌入。该方式的好处在于:\n"),t("ul",[t("li",[e._v("独立性强，有非常独立的开发/调试/更新/上线能力；")]),e._v(" "),t("li",[e._v("资源放在服务器上，完全不会影响客户端的包体积；\n接入成本很低，完全的热更新机制。\n但相对的，这种方式也有对应的缺点:")]),e._v(" "),t("li",[e._v("完全的网络依赖，在离线的情况下无法打开页面；")]),e._v(" "),t("li",[e._v("首屏加载速度依赖于网络，网络较慢时，首屏加载也较慢；\n通常，这种方式更适用在一些比较轻量级的页面上，例如一些帮助页、提示页、使用攻略等页面。这些页面的特点是功能性不强，不太需要复杂的功能协议，且不需要离线使用。在一些第三方页面接入上，也会使用这种方式，例如我们的页面调用微信"),t("code",[e._v("JS-SDK")]),e._v("。")])])]),e._v(" "),t("li",[e._v("(2) 内置包 "),t("code",[e._v("H5")]),e._v("，这是一种本地化的嵌入方式，我们需要将代码进行打包后下发到客户端，并由客户端直接解压到本地储存中。通常我们运用在一些比较大和比较重要的模块上。其优点是:\n"),t("ul",[t("li",[e._v("由于其本地化，首屏加载速度快，用户体验更为接近原生；")]),e._v(" "),t("li",[e._v("可以不依赖网络，离线运行；\n但同时，它的劣势也十分明显:")]),e._v(" "),t("li",[e._v("开发流程/更新机制复杂化，需要客户端，甚至服务端的共同协作；")]),e._v(" "),t("li",[e._v("会相应的增加 "),t("code",[e._v("App")]),e._v(" 包体积；\n这两种接入方式均有自己的优缺点，应该根据不同场景进行选择。")])])])])])}),[],!1,null,null,null);a.default=v.exports}}]);