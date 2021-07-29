(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{376:function(t,n,s){"use strict";s.r(n);var a=s(44),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"optimization-runtimechunk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#optimization-runtimechunk"}},[t._v("#")]),t._v(" optimization.runtimeChunk")]),t._v(" "),s("p",[t._v("优化持久化缓存的, "),s("code",[t._v("runtime")]),t._v(" 指的是 "),s("code",[t._v("webpack")]),t._v(" 的运行环境(具体作用就是模块解析, 加载) 和 模块信息清单, 模块信息清单在每次有模块变更("),s("code",[t._v("hash")]),t._v(" 变更)时都会变更, 所以我们想把这部分代码单独打包出来, 配合后端缓存策略, 这样就不会因为某个模块的变更导致包含模块信息的模块(通常会被包含在最后一个 "),s("code",[t._v("bundle")]),t._v(" 中)缓存失效。"),s("code",[t._v("optimization.runtimeChunk")]),t._v(" 就是告诉 "),s("code",[t._v("webpack")]),t._v(" 是否要把这部分单独打包出来。")]),t._v(" "),s("p",[t._v("将 "),s("code",[t._v("optimization.runtimeChunk")]),t._v(" 设置为 "),s("code",[t._v("true")]),t._v(" 或 "),s("code",[t._v("'multiple'")]),t._v("，会为每个只含有 "),s("code",[t._v("runtime")]),t._v(" 的入口添加一个额外 "),s("code",[t._v("chunk")]),t._v("。")]),t._v(" "),s("p",[t._v("项目有以下文件：")]),t._v(" "),s("ul",[s("li",[t._v("entry.js 文件内部import('"),s("strong",[t._v("page.js'")]),t._v("')")]),t._v(" "),s("li",[t._v("page.js")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n  optimization"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    runtimeChunk"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此处的entrypoint.name 是指 output 配置的 filename")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("entrypoint")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("runtime~")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("entrypoint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[t._v('值 "single" 会创建一个在所有生成 chunk 之间共享的运行时文件。此设置是如下设置的别名：')]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n  optimization"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    runtimeChunk"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'runtime'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("通过将 "),s("code",[t._v("optimization.runtimeChunk")]),t._v(" 设置为 "),s("code",[t._v("object")]),t._v("，对象中可以设置只有 "),s("code",[t._v("name")]),t._v(" 属性，其中属性值可以是名称或者返回名称的函数， 用于为 "),s("code",[t._v("runtime chunks")]),t._v(" 命名。")]),t._v(" "),s("p",[t._v("默认值是 "),s("code",[t._v("false")]),t._v("：每个入口 "),s("code",[t._v("chunk")]),t._v(" 中直接嵌入 "),s("code",[t._v("runtime")]),t._v("。")])])}),[],!1,null,null,null);n.default=e.exports}}]);