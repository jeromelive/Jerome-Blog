(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{393:function(t,e,s){"use strict";s.r(e);var n=s(43),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"invariant"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#invariant"}},[t._v("#")]),t._v(" invariant")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://travis-ci.org/zertosh/invariant",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://travis-ci.org/zertosh/invariant.svg?branch=master",alt:"Build Status"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("A mirror of Facebook's "),s("code",[t._v("invariant")]),t._v(" (e.g. "),s("a",{attrs:{href:"https://github.com/facebook/react/blob/v0.13.3/src/vendor/core/invariant.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("React"),s("OutboundLink")],1),t._v(", "),s("a",{attrs:{href:"https://github.com/facebook/flux/blob/2.0.2/src/invariant.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("flux"),s("OutboundLink")],1),t._v(").")]),t._v(" "),s("p",[t._v("A way to provide descriptive errors in development but generic errors in production.")]),t._v(" "),s("h2",{attrs:{id:"install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),s("p",[t._v("With "),s("a",{attrs:{href:"http://npmjs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm"),s("OutboundLink")],1),t._v(" do:")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" invariant\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"invariant-condition-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#invariant-condition-message"}},[t._v("#")]),t._v(" "),s("code",[t._v("invariant(condition, message)")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" invariant "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'invariant'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("invariant")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("someTruthyVal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'This will not throw'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// No errors")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("invariant")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("someFalseyVal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'This will throw an error with this message'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Error: Invariant Violation: This will throw an error with this message")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[s("strong",[t._v("Note:")]),t._v(" When "),s("code",[t._v("process.env.NODE_ENV")]),t._v(" is not "),s("code",[t._v("production")]),t._v(", the message is required. If omitted, "),s("code",[t._v("invariant")]),t._v(" will throw regardless of the truthiness of the condition. When "),s("code",[t._v("process.env.NODE_ENV")]),t._v(" is "),s("code",[t._v("production")]),t._v(", the message is optional – so they can be minified away.")]),t._v(" "),s("h3",{attrs:{id:"browser"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#browser"}},[t._v("#")]),t._v(" Browser")]),t._v(" "),s("p",[t._v("When used with "),s("a",{attrs:{href:"https://github.com/substack/node-browserify",target:"_blank",rel:"noopener noreferrer"}},[t._v("browserify"),s("OutboundLink")],1),t._v(", it'll use "),s("code",[t._v("browser.js")]),t._v(" (instead of "),s("code",[t._v("invariant.js")]),t._v(") and the "),s("a",{attrs:{href:"https://github.com/hughsk/envify",target:"_blank",rel:"noopener noreferrer"}},[t._v("envify"),s("OutboundLink")],1),t._v(" transform will inline the value of "),s("code",[t._v("process.env.NODE_ENV")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node"}},[t._v("#")]),t._v(" Node")]),t._v(" "),s("p",[t._v("The node version is optimized around the performance implications of accessing "),s("code",[t._v("process.env")]),t._v(". The value of "),s("code",[t._v("process.env.NODE_ENV")]),t._v(" is cached, and repeatedly used instead of reading "),s("code",[t._v("process.env")]),t._v(". See "),s("a",{attrs:{href:"https://github.com/facebook/react/issues/812",target:"_blank",rel:"noopener noreferrer"}},[t._v("Server rendering is slower with npm react #812"),s("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);