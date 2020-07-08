(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{383:function(e,t,s){"use strict";s.r(t);var a=s(43),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview "),s("a",{attrs:{href:"https://travis-ci.org/lydell/js-tokens",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://travis-ci.org/lydell/js-tokens.svg?branch=master",alt:"Build Status"}}),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("A regex that tokenizes JavaScript.")]),e._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" jsTokens "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"js-tokens"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("default\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" jsString "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"var foo=opts.foo;\\n..."')]),e._v("\n\njsString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("match")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("jsTokens"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v('// ["var", " ", "foo", "=", "opts", ".", "foo", ";", "\\n", ...]')]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("h1",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),s("p",[s("code",[e._v("npm install js-tokens")])]),e._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" jsTokens "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"js-tokens"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// or:")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" jsTokens "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"js-tokens"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("default\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h1",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),s("h3",{attrs:{id:"jstokens"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jstokens"}},[e._v("#")]),e._v(" "),s("code",[e._v("jsTokens")])]),e._v(" "),s("p",[e._v("A regex with the "),s("code",[e._v("g")]),e._v(" flag that matches JavaScript tokens.")]),e._v(" "),s("p",[e._v("The regex "),s("em",[e._v("always")]),e._v(" matches, even invalid JavaScript and the empty string.")]),e._v(" "),s("p",[e._v("The next match is always directly after the previous.")]),e._v(" "),s("h3",{attrs:{id:"var-token-matchtotoken-match"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#var-token-matchtotoken-match"}},[e._v("#")]),e._v(" "),s("code",[e._v("var token = matchToToken(match)")])]),e._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("matchToToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"js-tokens"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// or:")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" matchToToken "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"js-tokens"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("matchToToken\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("Takes a "),s("code",[e._v("match")]),e._v(" returned by "),s("code",[e._v("jsTokens.exec(string)")]),e._v(", and returns a "),s("code",[e._v("{type: String, value: String}")]),e._v(" object. The following types are available:")]),e._v(" "),s("ul",[s("li",[e._v("string")]),e._v(" "),s("li",[e._v("comment")]),e._v(" "),s("li",[e._v("regex")]),e._v(" "),s("li",[e._v("number")]),e._v(" "),s("li",[e._v("name")]),e._v(" "),s("li",[e._v("punctuator")]),e._v(" "),s("li",[e._v("whitespace")]),e._v(" "),s("li",[e._v("invalid")])]),e._v(" "),s("p",[e._v("Multi-line comments and strings also have a "),s("code",[e._v("closed")]),e._v(" property indicating if the\ntoken was closed or not (see below).")]),e._v(" "),s("p",[e._v("Comments and strings both come in several flavors. To distinguish them, check if\nthe token starts with "),s("code",[e._v("//")]),e._v(", "),s("code",[e._v("/*")]),e._v(", "),s("code",[e._v("'")]),e._v(", "),s("code",[e._v('"')]),e._v(" or "),s("code",[e._v("`")]),e._v(".")]),e._v(" "),s("p",[e._v("Names are ECMAScript IdentifierNames, that is, including both identifiers and\nkeywords. You may use "),s("a",{attrs:{href:"https://github.com/crissdev/is-keyword-js",target:"_blank",rel:"noopener noreferrer"}},[e._v("is-keyword-js"),s("OutboundLink")],1),e._v(" to tell them apart.")]),e._v(" "),s("p",[e._v("Whitespace includes both line terminators and other whitespace.")]),e._v(" "),s("h1",{attrs:{id:"ecmascript-support"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ecmascript-support"}},[e._v("#")]),e._v(" ECMAScript support")]),e._v(" "),s("p",[e._v("The intention is to always support the latest ECMAScript version whose feature\nset has been finalized.")]),e._v(" "),s("p",[e._v("If adding support for a newer version requires changes, a new version with a\nmajor verion bump will be released.")]),e._v(" "),s("p",[e._v("Currently, ECMAScript 2018 is supported.")]),e._v(" "),s("h1",{attrs:{id:"invalid-code-handling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#invalid-code-handling"}},[e._v("#")]),e._v(" Invalid code handling")]),e._v(" "),s("p",[e._v("Unterminated strings are still matched as strings. JavaScript strings cannot\ncontain (unescaped) newlines, so unterminated strings simply end at the end of\nthe line. Unterminated template strings can contain unescaped newlines, though,\nso they go on to the end of input.")]),e._v(" "),s("p",[e._v("Unterminated multi-line comments are also still matched as comments. They\nsimply go on to the end of the input.")]),e._v(" "),s("p",[e._v("Unterminated regex literals are likely matched as division and whatever is\ninside the regex.")]),e._v(" "),s("p",[e._v("Invalid ASCII characters have their own capturing group.")]),e._v(" "),s("p",[e._v("Invalid non-ASCII characters are treated as names, to simplify the matching of\nnames (except unicode spaces which are treated as whitespace). Note: See also\nthe "),s("a",{attrs:{href:"#es2018"}},[e._v("ES2018")]),e._v(" section.")]),e._v(" "),s("p",[e._v("Regex literals may contain invalid regex syntax. They are still matched as\nregex literals. They may also contain repeated regex flags, to keep the regex\nsimple.")]),e._v(" "),s("p",[e._v("Strings may contain invalid escape sequences.")]),e._v(" "),s("h1",{attrs:{id:"limitations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#limitations"}},[e._v("#")]),e._v(" Limitations")]),e._v(" "),s("p",[e._v("Tokenizing JavaScript using regexes—in fact, "),s("em",[e._v("one single regex")]),e._v("—won’t be\nperfect. But that’s not the point either.")]),e._v(" "),s("p",[e._v("You may compare jsTokens with "),s("a",{attrs:{href:"http://esprima.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("esprima"),s("OutboundLink")],1),e._v(" by using "),s("code",[e._v("esprima-compare.js")]),e._v(".\nSee "),s("code",[e._v("npm run esprima-compare")]),e._v("!")]),e._v(" "),s("h3",{attrs:{id:"template-string-interpolation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#template-string-interpolation"}},[e._v("#")]),e._v(" Template string interpolation")]),e._v(" "),s("p",[e._v("Template strings are matched as single tokens, from the starting "),s("code",[e._v("`")]),e._v(" to the\nending "),s("code",[e._v("`")]),e._v(", including interpolations (whose tokens are not matched\nindividually).")]),e._v(" "),s("p",[e._v("Matching template string interpolations requires recursive balancing of "),s("code",[e._v("{")]),e._v(" and\n"),s("code",[e._v("}")]),e._v("—something that JavaScript regexes cannot do. Only one level of nesting is\nsupported.")]),e._v(" "),s("h3",{attrs:{id:"division-and-regex-literals-collision"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#division-and-regex-literals-collision"}},[e._v("#")]),e._v(" Division and regex literals collision")]),e._v(" "),s("p",[e._v("Consider this example:")]),e._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" g "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("9.82")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" number "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" bar "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("g\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" regex "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[e._v("/ 2/g")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("A human can easily understand that in the "),s("code",[e._v("number")]),e._v(" line we’re dealing with\ndivision, and in the "),s("code",[e._v("regex")]),e._v(" line we’re dealing with a regex literal. How come?\nBecause humans can look at the whole code to put the "),s("code",[e._v("/")]),e._v(" characters in context.\nA JavaScript regex cannot. It only sees forwards. (Well, ES2018 regexes can also\nlook backwards. See the "),s("a",{attrs:{href:"#es2018"}},[e._v("ES2018")]),e._v(" section).")]),e._v(" "),s("p",[e._v("When the "),s("code",[e._v("jsTokens")]),e._v(" regex scans throught the above, it will see the following\nat the end of both the "),s("code",[e._v("number")]),e._v(" and "),s("code",[e._v("regex")]),e._v(" rows:")]),e._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token regex"}},[e._v("/ 2/g")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("It is then impossible to know if that is a regex literal, or part of an\nexpression dealing with division.")]),e._v(" "),s("p",[e._v("Here is a similar case:")]),e._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[e._v("foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("g\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[e._v("/= 2/g")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("The first line divides the "),s("code",[e._v("foo")]),e._v(" variable with "),s("code",[e._v("2/g")]),e._v(". The second line calls the\n"),s("code",[e._v("foo")]),e._v(" function with the regex literal "),s("code",[e._v("/= 2/g")]),e._v(". Again, since "),s("code",[e._v("jsTokens")]),e._v(" only\nsees forwards, it cannot tell the two cases apart.")]),e._v(" "),s("p",[e._v("There are some cases where we "),s("em",[e._v("can")]),e._v(" tell division and regex literals apart,\nthough.")]),e._v(" "),s("p",[e._v("First off, we have the simple cases where there’s only one slash in the line:")]),e._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("g\nfoo "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("Regex literals cannot contain newlines, so the above cases are correctly\nidentified as division. Things are only problematic when there are more than\none non-comment slash in a single line.")]),e._v(" "),s("p",[e._v("Secondly, not every character is a valid regex flag.")]),e._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" number "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" bar "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("e\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("The above example is also correctly identified as division, because "),s("code",[e._v("e")]),e._v(" is not a\nvalid regex flag. I initially wanted to future-proof by allowing "),s("code",[e._v("[a-zA-Z]*")]),e._v("\n(any letter) as flags, but it is not worth it since it increases the amount of\nambigous cases. So only the standard "),s("code",[e._v("g")]),e._v(", "),s("code",[e._v("m")]),e._v(", "),s("code",[e._v("i")]),e._v(", "),s("code",[e._v("y")]),e._v(" and "),s("code",[e._v("u")]),e._v(" flags are\nallowed. This means that the above example will be identified as division as\nlong as you don’t rename the "),s("code",[e._v("e")]),e._v(" variable to some permutation of "),s("code",[e._v("gmiyus")]),e._v(" 1 to 6\ncharacters long.")]),e._v(" "),s("p",[e._v("Lastly, we can look "),s("em",[e._v("forward")]),e._v(" for information.")]),e._v(" "),s("ul",[s("li",[e._v("If the token following what looks like a regex literal is not valid after a\nregex literal, but is valid in a division expression, then the regex literal\nis treated as division instead. For example, a flagless regex cannot be\nfollowed by a string, number or name, but all of those three can be the\ndenominator of a division.")]),e._v(" "),s("li",[e._v("Generally, if what looks like a regex literal is followed by an operator, the\nregex literal is treated as division instead. This is because regexes are\nseldomly used with operators (such as "),s("code",[e._v("+")]),e._v(", "),s("code",[e._v("*")]),e._v(", "),s("code",[e._v("&&")]),e._v(" and "),s("code",[e._v("==")]),e._v("), but division\ncould likely be part of such an expression.")])]),e._v(" "),s("p",[e._v("Please consult the regex source and the test cases for precise information on\nwhen regex or division is matched (should you need to know). In short, you\ncould sum it up as:")]),e._v(" "),s("p",[e._v("If the end of a statement looks like a regex literal (even if it isn’t), it\nwill be treated as one. Otherwise it should work as expected (if you write sane\ncode).")]),e._v(" "),s("h3",{attrs:{id:"es2018"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#es2018"}},[e._v("#")]),e._v(" ES2018")]),e._v(" "),s("p",[e._v("ES2018 added some nice regex improvements to the language.")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://2ality.com/2017/07/regexp-unicode-property-escapes.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Unicode property escapes"),s("OutboundLink")],1),e._v(" should allow telling names and invalid non-ASCII\ncharacters apart without blowing up the regex size.")]),e._v(" "),s("li",[s("a",{attrs:{href:"http://2ality.com/2017/05/regexp-lookbehind-assertions.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lookbehind assertions"),s("OutboundLink")],1),e._v(" should allow matching telling division and regex\nliterals apart in more cases.")]),e._v(" "),s("li",[s("a",{attrs:{href:"http://2ality.com/2017/05/regexp-named-capture-groups.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Named capture groups"),s("OutboundLink")],1),e._v(" might simplify some things.")])]),e._v(" "),s("p",[e._v("These things would be nice to do, but are not critical. They probably have to\nwait until the oldest maintained Node.js LTS release supports those features.")]),e._v(" "),s("h1",{attrs:{id:"license"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[e._v("#")]),e._v(" License")]),e._v(" "),s("p",[s("a",{attrs:{href:"LICENSE"}},[e._v("MIT")]),e._v(".")])])}),[],!1,null,null,null);t.default=n.exports}}]);