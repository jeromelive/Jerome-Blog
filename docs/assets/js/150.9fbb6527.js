(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{381:function(e,t,a){"use strict";a.r(t);var s=a(43),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"levenary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#levenary"}},[e._v("#")]),e._v(" levenary")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/levenary",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/npm/v/levenary.svg",alt:"npm-version"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://github.com/tanhauhau/levenary/actions",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://github.com/tanhauhau/levenary/workflows/CI/badge.svg",alt:"github-actions"}}),a("OutboundLink")],1)]),e._v(" "),a("blockquote",[a("p",[e._v("Given a string, A and an array of strings XS, return the string X from XS whose Levenshtein distance from A is minimal.")])]),e._v(" "),a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[e._v("#")]),e._v(" Install")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ npm install levenary\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" levenary "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'levenary'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("levenary")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'cat'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'cow'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'dog'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'pig'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//=> 'cow'")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("h2",{attrs:{id:"why-levenary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-levenary"}},[e._v("#")]),e._v(" Why "),a("code",[e._v("levenary")]),e._v("?")]),e._v(" "),a("ol",[a("li",[e._v("Based on "),a("a",{attrs:{href:"https://github.com/sindresorhus/leven",target:"_blank",rel:"noopener noreferrer"}},[e._v("leven"),a("OutboundLink")],1),e._v(", the fastest JS implementation of the "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Levenshtein_distance",target:"_blank",rel:"noopener noreferrer"}},[e._v("Levenshtein distance algorithm"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Only 1 API. Simple and clean. If you want more, please use "),a("a",{attrs:{href:"https://www.npmjs.com/package/didyoumean2",target:"_blank",rel:"noopener noreferrer"}},[e._v("didyoumean2"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[a("a",{attrs:{href:"http://flow.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flow"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"http://typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("TypeScript"),a("OutboundLink")],1),e._v(" support.")])]),e._v(" "),a("h2",{attrs:{id:"benchmark"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#benchmark"}},[e._v("#")]),e._v(" Benchmark")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ npm run bench\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  311,915 op/s » levenary\n   74,030 op/s » didyoumean\n  141,423 op/s » didyoumean2\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);