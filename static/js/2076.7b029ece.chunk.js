(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2076],{4934:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=4934,e.exports=t},270:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var r=n(189),o=n(3782),i=n(9534),a=n(5752),s=n(6796),c=n(6135),d=n.n(c),l=n(2029),u=n(8133),p=n(9265),f=["version","codePen","codeSandbox"],m=function(e,t){var n=(t||[]).join("|");return e.replace(/import([\s\S]*?)(?=['"])['"].*['"]( *;|;)?/gm,(function(e){return n&&new RegExp("from\\s+['\"](".concat(n,")['\"](s.+)?;?")).test(e)?e:"/** ".concat(e," **/")}))};function h(e){var t=e.version,n=e.codePen,i=e.codeSandbox,a=(0,o.Z)(e,f),c=(0,r.Z)({},a),h=(0,u.useRef)(null),v=[];if(n){var x={title:"uiw".concat(t," - demo"),js:"".concat(m(c.text||"",["uiw"]).replace("export default","const APP_Default = "),'\nReactDOM.createRoot(document.getElementById("container")).render(<APP_Default />)'),html:'<div id="container" style="padding: 24px"></div>',css_external:"https://unpkg.com/uiw@".concat(t,"/dist/uiw.min.css"),js_external:"https://unpkg.com/react@18.x/umd/react.development.js;https://unpkg.com/react-dom@18.x/umd/react-dom.development.js;https://unpkg.com/classnames@2.2.6/index.js;https://unpkg.com/uiw@".concat(t,"/dist/uiw.min.js;https://unpkg.com/@uiw/codepen-require-polyfill@1.1.3/index.js")};v.push((0,p.jsx)(d(),(0,r.Z)((0,r.Z)({},x),{},{children:(0,p.jsx)("svg",{style:{fill:"currentcolor"},viewBox:"0 0 1024 1024",width:"18",height:"18",children:(0,p.jsx)("path",{d:"M123.428571 668l344.571429 229.714286v-205.142857L277.142857 565.142857z m-35.428571-82.285714l110.285714-73.714286-110.285714-73.714286v147.428572z m468 312l344.571429-229.714286-153.714286-102.857143-190.857143 127.428572v205.142857z m-44-281.714286l155.428571-104-155.428571-104-155.428571 104zM277.142857 458.857143l190.857143-127.428572V126.285714L123.428571 356z m548.571429 53.142857l110.285714 73.714286V438.285714z m-78.857143-53.142857l153.714286-102.857143-344.571429-229.714286v205.142857z m277.142857-102.857143v312q0 23.428571-19.428571 36.571429l-468 312q-12 7.428571-24.571429 7.428571t-24.571429-7.428571L19.428571 704.571429q-19.428571-13.142857-19.428571-36.571429V356q0-23.428571 19.428571-36.571429L487.428571 7.428571q12-7.428571 24.571429-7.428571t24.571429 7.428571l468 312q19.428571 13.142857 19.428571 36.571429z","p-id":"2071"})})}),"Codepen"))}if(i){var g={files:{"sandbox.config.json":{content:'{\n            "template": "node",\n            "container": {\n              "startScript": "start",\n              "node": "14"\n            }\n          }'},"public/index.html":{content:'<div id="container"></div>'},"src/app.js":{content:c.text},"src/index.js":{content:'import React from "react";\nimport ReactClient from "react-dom/client";\nimport App from "./app";\nReactClient.createRoot(document.getElementById("container")).render(<App />);'},".kktrc.js":{content:'import lessModules from "@kkt/less-modules";\nexport default (conf, env, options) => {\nconf = lessModules(conf, env, options);\nreturn conf;\n};'},"package.json":{content:{name:"uiw-demo",description:"uiw v".concat(t," - demo"),dependencies:{react:"18.1.0","react-dom":"18.1.0",uiw:"latest"},devDependencies:{"@kkt/less-modules":"~7.1.1",kkt:"~7.1.5"},license:"MIT",scripts:{start:"kkt start",build:"kkt build",test:"kkt test --env=jsdom"},browserslist:[">0.2%","not dead","not ie <= 11","not op_mini all"]}}}};v.push((0,p.jsx)(l.Z,(0,r.Z)((0,r.Z)({},g),{},{children:(0,p.jsx)("svg",{style:{fill:"currentcolor"},viewBox:"0 0 1024 1024",width:"18",height:"18",children:(0,p.jsx)("path",{d:"M85.333333 256l446.08-256L977.493333 256 981.333333 765.866667 531.413333 1024 85.333333 768V256z m89.088 105.856v202.965333l142.72 79.36v150.016l169.472 97.962667v-352.938667L174.421333 361.856z m714.197334 0l-312.192 177.365333v352.938667l169.472-97.962667V644.266667l142.72-79.402667V361.813333zM219.050667 281.642667l311.594666 176.810666 312.32-178.346666-165.162666-93.738667-145.493334 82.986667-146.346666-83.968L219.008 281.6z","p-id":"4089"})})}),"Codesandbox"))}return(0,p.jsx)(s.Z,(0,r.Z)((0,r.Z)({},c),{},{ref:h,toolbarExtra:(0,p.jsx)(u.Fragment,{children:v})}))}var v=n(3400),x=n(2251);function g(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).path,t=(0,x.$)().t,n=/^http/.test(e||"")?e:"https://github.com/uiwjs/uiw/blob/master/".concat(e);return(0,p.jsxs)(u.Fragment,{children:[t("footer.greeting"),n&&(0,p.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",children:t("footer.greetLinkText")}),(0,p.jsx)("br",{}),(0,p.jsx)("a",{href:"https://github.com/uiwjs/uiw/issues",target:"_blank",rel:"noopener noreferrer",children:t("footer.issues")}),(0,p.jsx)(v.Divider,{type:"vertical"}),(0,p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw/issues/new",children:t("footer.bug")}),(0,p.jsx)(v.Divider,{type:"vertical"}),(0,p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw",children:t("footer.github")}),(0,p.jsx)(v.Divider,{type:"vertical"}),(0,p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/kktjs/kkt",children:t("footer.kkt")}),(0,p.jsx)(v.Divider,{type:"vertical"}),(0,p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/kktjs/kkt-ssr",children:t("footer.kkt_ssr")}),(0,p.jsx)(v.Divider,{type:"vertical"}),(0,p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"http://uiw.gitee.io",children:t("footer.io")})]})}var k={docinfo:"index_docinfo__3Vx8S",markdown:"index_markdown__hcQCp"},b=n(7946),j=n(3369),w=["node"],Z=["data-meta","data-md","noPreview","noScroll","bgWhite","noCode","codePen","codeSandboxOption","codeSandbox","bordered"];function _(e){var t=e.renderPage,n=e.path,s=(0,b.Z)(t),c=s.mdData,d=s.loading,l=a.i8||"2.0.0";return c.source?(0,p.jsxs)("div",{children:[(0,p.jsx)(v.Loader,{style:{width:"100%"},loading:d,tip:"loading...",children:(0,p.jsx)("div",{children:(0,p.jsx)(i.Z,{source:c.source,className:k.markdown,rehypeRewrite:function(e,t,n){var r;if("element"===e.type&&"pre"===e.tagName&&null!==(r=e.children[0].data)&&void 0!==r&&r.meta){var o,i=null===(o=e.children[0].data)||void 0===o?void 0:o.meta;(0,j.pN)(i)&&(e.tagName="div",e.properties||(e.properties={}),e.properties["data-md"]=i,e.properties["data-meta"]="preview")}},components:{div:function(e){var t=e.node,n=(0,o.Z)(e,w),i=n,a=i["data-meta"],s=i["data-md"],d=(i.noPreview,i.noScroll,i.bgWhite,i.noCode),u=(i.codePen,i.codeSandboxOption,i.codeSandbox,i.bordered,(0,o.Z)(i,Z));if("preview"===a){var f,m=null===(f=t.position)||void 0===f?void 0:f.start.line,v=(0,j.Mx)(a)||String(m),x=c.components[v];if(v&&"function"===typeof x){var g=c.data[v].value||"",k=(0,j.aE)(s);return(0,p.jsx)(h,{toolbar:k.title||"\u793a\u4f8b\u5c55\u793a",disableToolbar:d,codePen:k.codePen,codeSandbox:k.codeSandbox,disableCheckered:!!k.disableCheckered,background:k.background,version:l,code:(0,p.jsx)("pre",(0,r.Z)({},u)),text:g,children:(0,p.jsx)(x,{})})}}return(0,p.jsx)("div",(0,r.Z)({},n))}}})})}),(0,p.jsx)("div",{className:k.docinfo,children:(0,p.jsx)(g,{path:n})})]}):null}},7946:function(e,t,n){"use strict";n.d(t,{A:function(){return d}});var r=n(1092),o=n(7791),i=n(1026),a=n(8133),s=n(2251),c=n(3208),d=function(){var e=(0,s.$)().i18n;return e.language===c.X?"":"."+e.language};t.Z=function(e){var t=(0,a.useState)({source:"",components:{},data:{}}),n=(0,i.Z)(t,2),s=n[0],c=n[1],l=d(),u=(0,a.useState)(!1),p=(0,i.Z)(u,2),f=p[0],m=p[1];return(0,a.useEffect)((function(){var t=function(){var t=(0,o.Z)((0,r.Z)().mark((function t(){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=13;break}return m((function(){return!0})),t.prev=2,t.next=5,e(l);case 5:(n=t.sent)&&c(n),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),console.warn(t.t0);case 12:m((function(){return!1}));case 13:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[l]),{mdData:s,loading:f}}},3548:function(e,t,n){"use strict";n.r(t);var r=n(1092),o=n(7791),i=(n(8133),n(270)),a=n(9265);t.default=function(){return(0,a.jsx)(i.Z,{path:"https://github.com/uiwjs/uiw/tree/master/website/src/routes/guide/create-react-app/README.md",renderPage:(0,o.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(429).then(n.bind(n,429));case 2:return t=e.sent,e.abrupt("return",t.default||t);case 4:case"end":return e.stop()}}),e)})))})}}}]);
//# sourceMappingURL=2076.7b029ece.chunk.js.map