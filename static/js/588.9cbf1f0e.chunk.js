(this["webpackJsonp@example/uiw"]=this["webpackJsonp@example/uiw"]||[]).push([[588],{1331:function(e,t,n){!function(e){"use strict";function t(e){for(var t={},n=0;n<e.length;n++)t[e[n]]=!0;return t}var n=t(["_","var","let","class","enum","extension","import","protocol","struct","func","typealias","associatedtype","open","public","internal","fileprivate","private","deinit","init","new","override","self","subscript","super","convenience","dynamic","final","indirect","lazy","required","static","unowned","unowned(safe)","unowned(unsafe)","weak","as","is","break","case","continue","default","else","fallthrough","for","guard","if","in","repeat","switch","where","while","defer","return","inout","mutating","nonmutating","catch","do","rethrows","throw","throws","try","didSet","get","set","willSet","assignment","associativity","infix","left","none","operator","postfix","precedence","precedencegroup","prefix","right","Any","AnyObject","Type","dynamicType","Self","Protocol","__COLUMN__","__FILE__","__FUNCTION__","__LINE__"]),r=t(["var","let","class","enum","extension","import","protocol","struct","func","typealias","associatedtype","for"]),i=t(["true","false","nil","self","super","_"]),o=t(["Array","Bool","Character","Dictionary","Double","Float","Int","Int8","Int16","Int32","Int64","Never","Optional","Set","String","UInt8","UInt16","UInt32","UInt64","Void"]),a=/^\-?0b[01][01_]*/,u=/^\-?0o[0-7][0-7_]*/,c=/^\-?0x[\dA-Fa-f][\dA-Fa-f_]*(?:(?:\.[\dA-Fa-f][\dA-Fa-f_]*)?[Pp]\-?\d[\d_]*)?/,f=/^\-?\d[\d_]*(?:\.\d[\d_]*)?(?:[Ee]\-?\d[\d_]*)?/,s=/^\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1/,p=/^\.(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/,l=/^\#[A-Za-z]+/,d=/^@(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/;function h(e,t,h){if(e.sol()&&(t.indented=e.indentation()),e.eatSpace())return null;var m,x=e.peek();if("/"==x){if(e.match("//"))return e.skipToEnd(),"comment";if(e.match("/*"))return t.tokenize.push(_),_(e,t)}if(e.match(l))return"builtin";if(e.match(d))return"attribute";if(e.match(a))return"number";if(e.match(u))return"number";if(e.match(c))return"number";if(e.match(f))return"number";if(e.match(p))return"property";if("+-/*%=|&<>~^?!".indexOf(x)>-1)return e.next(),"operator";if(":;,.(){}[]".indexOf(x)>-1)return e.next(),e.match(".."),"punctuation";if(m=e.match(/("""|"|')/)){var k=v.bind(null,m[0]);return t.tokenize.push(k),k(e,t)}if(e.match(s)){var w=e.current();return o.hasOwnProperty(w)?"variable-2":i.hasOwnProperty(w)?"atom":n.hasOwnProperty(w)?(r.hasOwnProperty(w)&&(t.prev="define"),"keyword"):"define"==h?"def":"variable"}return e.next(),null}function m(){var e=0;return function(t,n,r){var i=h(t,n,r);if("punctuation"==i)if("("==t.current())++e;else if(")"==t.current()){if(0==e)return t.backUp(1),n.tokenize.pop(),n.tokenize[n.tokenize.length-1](t,n);--e}return i}}function v(e,t,n){for(var r,i=1==e.length,o=!1;r=t.peek();)if(o){if(t.next(),"("==r)return n.tokenize.push(m()),"string";o=!1}else{if(t.match(e))return n.tokenize.pop(),"string";t.next(),o="\\"==r}return i&&n.tokenize.pop(),"string"}function _(e,t){for(var n;e.match(/^[^/*]+/,!0),n=e.next();)"/"===n&&e.eat("*")?t.tokenize.push(_):"*"===n&&e.eat("/")&&t.tokenize.pop();return"comment"}function x(e,t,n){this.prev=e,this.align=t,this.indented=n}function k(e,t){var n=t.match(/^\s*($|\/[\/\*])/,!1)?null:t.column()+1;e.context=new x(e.context,n,e.indented)}function w(e){e.context&&(e.indented=e.context.indented,e.context=e.context.prev)}e.defineMode("swift",(function(e){return{startState:function(){return{prev:null,context:null,indented:0,tokenize:[]}},token:function(e,t){var n=t.prev;t.prev=null;var r=(t.tokenize[t.tokenize.length-1]||h)(e,t,n);if(r&&"comment"!=r?t.prev||(t.prev=r):t.prev=n,"punctuation"==r){var i=/[\(\[\{]|([\]\)\}])/.exec(e.current());i&&(i[1]?w:k)(t,e)}return r},indent:function(t,n){var r=t.context;if(!r)return 0;var i=/^[\]\}\)]/.test(n);return null!=r.align?r.align-(i?1:0):r.indented+(i?0:e.indentUnit)},electricInput:/^\s*[\)\}\]]$/,lineComment:"//",blockCommentStart:"/*",blockCommentEnd:"*/",fold:"brace",closeBrackets:"()[]{}''\"\"``"}})),e.defineMIME("text/x-swift","swift")}(n(807))}}]);