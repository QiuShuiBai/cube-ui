webpackJsonp([21],{"8Pct":function(e,s){e.exports={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",[t("h2",{attrs:{id:"后编译"}},[t("a",{staticClass:"anchor",attrs:{href:"#cube-后编译-anchor","aria-hidden":"true"}},[t("svg",{attrs:{"aria-hidden":"true",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}})])]),e._v(" 后编译")]),e._v(" "),t("p",[e._v("后编译指的是应用依赖的 NPM 包并不需要在发布前编译，而是随着应用编译打包的时候一块编译。")]),e._v(" "),e._m(0),e._v(" "),t("h3",{attrs:{id:"背景"}},[t("a",{staticClass:"anchor",attrs:{href:"#cube-背景-anchor","aria-hidden":"true"}},[t("svg",{attrs:{"aria-hidden":"true",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}})])]),e._v(" 背景")]),e._v(" "),t("p",[e._v("使用 webpack + babel 开发应用越来越多，而且一般都是通过 NPM 进行包管理的，这样依赖包越来越多，这些依赖包也是使用的 ES2015+ 开发的，所以每个依赖包都需要编译才能发布，这样编译后代码中往往后包含很多编译代码，所以为了消除这部分冗余，推荐大家使用后编译。")]),e._v(" "),t("h3",{attrs:{id:"优缺点"}},[t("a",{staticClass:"anchor",attrs:{href:"#cube-优缺点-anchor","aria-hidden":"true"}},[t("svg",{attrs:{"aria-hidden":"true",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}})])]),e._v(" 优缺点")]),e._v(" "),t("p",[e._v("优点：")]),e._v(" "),e._m(1),e._v(" "),t("p",[e._v("缺点：")]),e._v(" "),e._m(2),e._v(" "),t("h3",{attrs:{id:"约定"}},[t("a",{staticClass:"anchor",attrs:{href:"#cube-约定-anchor","aria-hidden":"true"}},[t("svg",{attrs:{"aria-hidden":"true",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}})])]),e._v(" 约定")]),e._v(" "),t("p",[e._v("考虑到有些应用会使用后编译，有些则只能使用编译好的依赖包，为了“争夺”入口，cube-ui 做了均衡，约定：")]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),t("p",[e._v("这样，如果应用使用的是 webpack 2+，则默认走后编译，而如果使用的 webpack 1.x 则默认使用的是编译后内容；当然，这部分可以通过 webpack 的 alias 配置达到和版本无关效果。")]),e._v(" "),t("h3",{attrs:{id:"webpack配置使用"}},[t("a",{staticClass:"anchor",attrs:{href:"#cube-webpack配置使用-anchor","aria-hidden":"true"}},[t("svg",{attrs:{"aria-hidden":"true",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}})])]),e._v(" webpack 配置使用")]),e._v(" "),e._m(5),e._v(" "),t("p",[e._v("一个应用示例配置：")]),e._v(" "),e._m(6),e._v(" "),t("p",[e._v("在应用的 package.json 中增加 compileDependencies：")]),e._v(" "),e._m(7),e._v(" "),t("p",[e._v("如果说 A 还依赖 C 的话，只需要在 A 的 package.json 中指定 compileDependencies 即可：")]),e._v(" "),e._m(8)])},staticRenderFns:[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("p",[t("em",[e._v("注：")]),e._v(" 关于后编译更详细内容可参阅 "),t("a",{attrs:{href:"https://github.com/DDFE/DDFE-blog/issues/23"}},[e._v("webpack 应用编译优化之路")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ul",[t("li",[e._v("公共的依赖可以实现共用，只此一份，重要的是只编译一次，建议通过 peerDependencies 管理依赖。")]),e._v(" "),t("li",[e._v("babel 转换 API（例如 babel-plugin-transform-runtime 或者 babel-polyfill）部分的代码只有一份。")]),e._v(" "),t("li",[e._v("不用每个依赖包都需要配置编译打包环节，甚至可以直接源码级别发布。")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ul",[t("li",[e._v("主应用的 babel 配置需要能兼容依赖包的 babel 配置。")]),e._v(" "),t("li",[e._v("依赖包不能使用 alias、不能方便的使用 DefinePlugin（可以经过一次简单编译，但是不做 babel 处理）。")]),e._v(" "),t("li",[e._v("应用编译时间会变长。")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("blockquote",[t("p",[e._v("package.json 的 main 字段指向的就是编译后入口，而 module 字段指向的就是源码入口。")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("p",[t("em",[e._v("关于 "),t("a",{attrs:{href:"https://github.com/rollup/rollup/wiki/pkg.module"}},[e._v("pkg.module")])])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("p",[e._v("后编译的场景是极有可能产生嵌套的情况，而且对于每个依赖包而言应该自己管理自身需要后编译的依赖；为了解决这个问题，可以使用 "),t("a",{attrs:{href:"https://www.npmjs.com/package/webpack-post-compile-plugin"}},[e._v("webpack-post-compile-plugin")]),e._v("，只需要在应用或者 NPM 包自身的 package.json 中通过 compileDependencies 来指定自身需要后编译依赖的包名。")])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-js"}},[t("span",{attrs:{class:"hljs-comment"}},[e._v("// webpack.config.js")]),e._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[e._v("var")]),e._v(" PostCompilePlugin = "),t("span",{attrs:{class:"hljs-built_in"}},[e._v("require")]),e._v("("),t("span",{attrs:{class:"hljs-string"}},[e._v("'webpack-post-compile-plugin'")]),e._v(")\n\n"),t("span",{attrs:{class:"hljs-built_in"}},[e._v("module")]),e._v(".exports = {\n  "),t("span",{attrs:{class:"hljs-comment"}},[e._v("// ...")]),e._v("\n  "),t("span",{attrs:{class:"hljs-built_in"}},[e._v("module")]),e._v(": {\n    "),t("span",{attrs:{class:"hljs-attr"}},[e._v("rules")]),e._v(": [\n      "),t("span",{attrs:{class:"hljs-comment"}},[e._v("// ...")]),e._v("\n      {\n        "),t("span",{attrs:{class:"hljs-attr"}},[e._v("test")]),e._v(": "),t("span",{attrs:{class:"hljs-regexp"}},[e._v("/\\.js$/")]),e._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[e._v("loader")]),e._v(": "),t("span",{attrs:{class:"hljs-string"}},[e._v("'babel-loader'")]),e._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[e._v("include")]),e._v(": [\n          resolve("),t("span",{attrs:{class:"hljs-string"}},[e._v("'src'")]),e._v(")\n        ]\n      },\n      "),t("span",{attrs:{class:"hljs-comment"}},[e._v("// ...")]),e._v("\n    ]\n  },\n  "),t("span",{attrs:{class:"hljs-comment"}},[e._v("// ...")]),e._v("\n  plugins: [\n    "),t("span",{attrs:{class:"hljs-keyword"}},[e._v("new")]),e._v(" PostCompilePlugin()\n  ]\n}\n")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-json"}},[e._v("// package.json\n{\n  // ...\n  "),t("span",{attrs:{class:"hljs-attr"}},[e._v('"compileDependencies"')]),e._v(": ["),t("span",{attrs:{class:"hljs-string"}},[e._v('"A"')]),e._v(", "),t("span",{attrs:{class:"hljs-string"}},[e._v('"B"')]),e._v("]\n  // ...\n}\n")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-json"}},[e._v("// A package.json\n{\n  // ...\n  "),t("span",{attrs:{class:"hljs-attr"}},[e._v('"compileDependencies"')]),e._v(": ["),t("span",{attrs:{class:"hljs-string"}},[e._v('"C"')]),e._v("]\n  // ...\n}\n")])])}]}},Po76:function(e,s,t){var a=t("VU/8")(null,t("8Pct"),null,null,null);e.exports=a.exports},hvjf:function(e,s,t){e.exports=t("Po76")}});