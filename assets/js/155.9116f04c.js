(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{647:function(t,s,a){"use strict";a.r(s);var n=a(22),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_04-hook规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_04-hook规则"}},[t._v("#")]),t._v(" 04. Hook规则")]),t._v(" "),a("p",[t._v("Hook 本质就是 JavaScript 函数，但是在使用它时需要遵循"),a("strong",[t._v("两条规则")]),t._v("。我们提供了一个 "),a("a",{attrs:{href:"https://www.npmjs.com/package/eslint-plugin-react-hooks",target:"_blank",rel:"noopener noreferrer"}},[t._v("linter 插件"),a("OutboundLink")],1),t._v("来强制执行这些规则：")]),t._v(" "),a("h2",{attrs:{id:"只在最顶层使用-hook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#只在最顶层使用-hook"}},[t._v("#")]),t._v(" 只在最顶层使用 Hook")]),t._v(" "),a("p",[t._v("不要在循环，条件或嵌套函数中调用 Hook， 确保"),a("strong",[t._v("总是在你的 React 函数的最顶层以及任何 return 之前调用他们")]),t._v("。遵守这条规则，你就能确保 Hook 在每一次渲染中都按照同样的顺序被调用。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("React 怎么知道哪个 state 对应哪个 "),a("code",[t._v("useState")]),t._v("？答案是 React 靠的是 Hook 调用的顺序")])]),t._v(" "),a("li",[a("p",[t._v("如果我们想要有条件地执行一个 effect，可以将判断放到 Hook 的"),a("em",[t._v("内部")]),t._v("：")])])]),t._v(" "),a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("persistForm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 👍 将条件判断放置在 effect 中")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      localStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'formData'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("h2",{attrs:{id:"只在-react-函数中调用-hook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#只在-react-函数中调用-hook"}},[t._v("#")]),t._v(" 只在 React 函数中调用 Hook")]),t._v(" "),a("p",[t._v("**不要在普通的 JavaScript 函数中调用 Hook。**你可以：")]),t._v(" "),a("ul",[a("li",[t._v("✅ 在 React 的函数组件中调用 Hook")]),t._v(" "),a("li",[t._v("✅ 在自定义 Hook 中调用其他 Hook")])]),t._v(" "),a("h2",{attrs:{id:"eslint-插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eslint-插件"}},[t._v("#")]),t._v(" ESLint 插件")]),t._v(" "),a("p",[t._v("我们发布了一个名为 "),a("a",{attrs:{href:"https://www.npmjs.com/package/eslint-plugin-react-hooks",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("eslint-plugin-react-hooks")]),a("OutboundLink")],1),t._v(" 的 ESLint 插件来强制执行这两条规则。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" eslint-plugin-react-hooks --save-dev\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 你的 ESLint 配置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"plugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react-hooks"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"rules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"react-hooks/rules-of-hooks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 检查 Hook 的规则")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"react-hooks/exhaustive-deps"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"warn"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 检查 effect 的依赖")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);