(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{433:function(e,t,a){"use strict";a.r(t);var s=a(43),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"caniuse-lite"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#caniuse-lite"}},[e._v("#")]),e._v(" caniuse-lite")]),e._v(" "),a("blockquote",[a("p",[e._v("A smaller version of caniuse-db, with only the essentials!")])]),e._v(" "),a("h2",{attrs:{id:"why"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why"}},[e._v("#")]),e._v(" Why?")]),e._v(" "),a("p",[e._v("The full data behind "),a("a",{attrs:{href:"http://caniuse.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Can I use"),a("OutboundLink")],1),e._v(" is incredibly useful for any front end\ndeveloper, and on the website all of the details from the database are displayed\nto the user. However in automated tools, "),a("a",{attrs:{href:"https://github.com/Fyrd/caniuse/issues/1827",target:"_blank",rel:"noopener noreferrer"}},[e._v("many of these fields go unused"),a("OutboundLink")],1),e._v(";\nit's not a problem for server side consumption but client side, the less\nJavaScript that we send to the end user the better.")]),e._v(" "),a("p",[e._v("caniuse-lite then, is a smaller dataset that keeps essential parts of the data\nin a compact format. It does this in multiple ways, such as converting "),a("code",[e._v("null")]),e._v("\narray entries into empty strings, representing support data as an integer rather\nthan a string, and using base62 references instead of longer human-readable\nkeys.")]),e._v(" "),a("p",[e._v("This packed data is then reassembled (via functions exposed by this module) into\na larger format which is mostly compatible with caniuse-db, and so it can be\nused as an almost drop-in replacement for caniuse-db for contexts where size on\ndisk is important; for example, usage in web browsers. The API differences are\nvery small and are detailed in the section below.")]),e._v(" "),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[e._v("#")]),e._v(" API")]),e._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("as")]),e._v(" lite "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'caniuse-lite'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"lite-agents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lite-agents"}},[e._v("#")]),e._v(" "),a("code",[e._v("lite.agents")])]),e._v(" "),a("p",[e._v("caniuse-db provides a full "),a("code",[e._v("data.json")]),e._v(" file which contains all of the features\ndata. Instead of this large file, caniuse-lite provides this data subset\ninstead, which has the "),a("code",[e._v("browser")]),e._v(", "),a("code",[e._v("prefix")]),e._v(", "),a("code",[e._v("prefix_exceptions")]),e._v(", "),a("code",[e._v("usage_global")]),e._v("\nand "),a("code",[e._v("versions")]),e._v(" keys from the original.")]),e._v(" "),a("p",[e._v("In addition, the subset contains the "),a("code",[e._v("release_date")]),e._v(" key with release dates (as timestamps) for each version:")]),e._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"release_date"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"6"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("998870400")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"7"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1161129600")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"8"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1237420800")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"9"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1300060800")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"10"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1346716800")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"11"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1381968000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"5.5"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("962323200")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br")])]),a("h3",{attrs:{id:"lite-feature-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lite-feature-js"}},[e._v("#")]),e._v(" "),a("code",[e._v("lite.feature(js)")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("feature")]),e._v(" method takes a file from "),a("code",[e._v("data/features")]),e._v(" and converts it into\nsomething that more closely represents the "),a("code",[e._v("caniuse-db")]),e._v(" format. Note that only\nthe "),a("code",[e._v("title")]),e._v(", "),a("code",[e._v("stats")]),e._v(" and "),a("code",[e._v("status")]),e._v(" keys are kept from the original data.")]),e._v(" "),a("h3",{attrs:{id:"lite-features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lite-features"}},[e._v("#")]),e._v(" "),a("code",[e._v("lite.features")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("features")]),e._v(" index is provided as a way to query all of the features that\nare listed in the "),a("code",[e._v("caniuse-db")]),e._v(" dataset. Note that you will need to use the\n"),a("code",[e._v("feature")]),e._v(" method on values from this index to get a human-readable format.")]),e._v(" "),a("h3",{attrs:{id:"lite-region-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lite-region-js"}},[e._v("#")]),e._v(" "),a("code",[e._v("lite.region(js)")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("region")]),e._v(" method takes a file from "),a("code",[e._v("data/regions")]),e._v(" and converts it into\nsomething that more closely represents the "),a("code",[e._v("caniuse-db")]),e._v(" format. Note that "),a("em",[e._v("only")]),e._v("\nthe usage data is exposed here (the "),a("code",[e._v("data")]),e._v(" key in the original files).")]),e._v(" "),a("h2",{attrs:{id:"contributors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contributors"}},[e._v("#")]),e._v(" Contributors")]),e._v(" "),a("p",[e._v("Thanks goes to these wonderful people ("),a("a",{attrs:{href:"https://github.com/kentcdodds/all-contributors#emoji-key",target:"_blank",rel:"noopener noreferrer"}},[e._v("emoji key"),a("OutboundLink")],1),e._v("):")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"http://beneb.info",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://avatars.githubusercontent.com/u/1282980?v=3",width:"100px;"}}),a("br"),a("sub",[a("b",[e._v("Ben Briggs")])]),a("OutboundLink")],1),a("br"),a("a",{attrs:{href:"https://github.com/ben-eb/caniuse-lite/commits?author=ben-eb",title:"Code",target:"_blank",rel:"noopener noreferrer"}},[e._v("💻"),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://github.com/ben-eb/caniuse-lite/commits?author=ben-eb",title:"Documentation",target:"_blank",rel:"noopener noreferrer"}},[e._v("📖"),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"#review-ben-eb",title:"Reviewed Pull Requests"}},[e._v("👀")]),e._v(" "),a("a",{attrs:{href:"https://github.com/ben-eb/caniuse-lite/commits?author=ben-eb",title:"Tests",target:"_blank",rel:"noopener noreferrer"}},[e._v("⚠️"),a("OutboundLink")],1)]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"https://github.com/andyjansson",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://avatars.githubusercontent.com/u/1737375?v=3",width:"100px;"}}),a("br"),a("sub",[a("b",[e._v("Andy Jansson")])]),a("OutboundLink")],1),a("br"),a("a",{attrs:{href:"https://github.com/ben-eb/caniuse-lite/commits?author=andyjansson",title:"Code",target:"_blank",rel:"noopener noreferrer"}},[e._v("💻"),a("OutboundLink")],1)]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"http://twitter.com/sitnikcode",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://avatars1.githubusercontent.com/u/19343?v=4",width:"100px;"}}),a("br"),a("sub",[a("b",[e._v("Andrey Sitnik")])]),a("OutboundLink")],1),a("br"),a("a",{attrs:{href:"https://github.com/ben-eb/caniuse-lite/commits?author=ai",title:"Code",target:"_blank",rel:"noopener noreferrer"}},[e._v("💻"),a("OutboundLink")],1)]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:"https://avatars2.githubusercontent.com/u/947326?v=4",width:"100px;"}}),a("br"),a("sub",[a("b",[e._v("Igor Deryabin")])]),a("br"),a("a",{attrs:{href:"https://github.com/ben-eb/caniuse-lite/commits?author=rodweb",title:"Code",target:"_blank",rel:"noopener noreferrer"}},[e._v("💻"),a("OutboundLink")],1)])])]),e._v(" "),a("tbody")]),e._v(" "),a("p",[e._v("This project follows the "),a("a",{attrs:{href:"https://github.com/kentcdodds/all-contributors",target:"_blank",rel:"noopener noreferrer"}},[e._v("all-contributors"),a("OutboundLink")],1),e._v(" specification. Contributions of any kind welcome!")]),e._v(" "),a("img",{attrs:{src:"https://opensource.nyc3.digitaloceanspaces.com/attribution/assets/SVG/DO_Logo_icon_blue.svg",alt:"Digital Ocean logo",width:"40",align:"left"}}),e._v(" "),a("p",[e._v("Big thanks to "),a("a",{attrs:{href:"https://www.digitalocean.com/?utm_source=opensource&utm_campaign=caniuse-lite",target:"_blank",rel:"noopener noreferrer"}},[e._v("DigitalOcean"),a("OutboundLink")],1),e._v(" for supporting this project by providing their great infrastructure for us.")]),e._v(" "),a("h2",{attrs:{id:"license"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[e._v("#")]),e._v(" License")]),e._v(" "),a("p",[e._v("The data in this repo is available for use under a CC BY 4.0 license\n(http://creativecommons.org/licenses/by/4.0/). For attribution just mention\nsomewhere that the source is caniuse.com. If you have any questions about using\nthe data for your project please contact me here: http://a.deveria.com/contact")]),e._v(" "),a("h2",{attrs:{id:"security-contact-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security-contact-information"}},[e._v("#")]),e._v(" Security contact information")]),e._v(" "),a("p",[e._v("To report a security vulnerability, please use the\n"),a("a",{attrs:{href:"https://tidelift.com/security",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tidelift security contact"),a("OutboundLink")],1),e._v(".\nTidelift will coordinate the fix and disclosure.")])])}),[],!1,null,null,null);t.default=r.exports}}]);