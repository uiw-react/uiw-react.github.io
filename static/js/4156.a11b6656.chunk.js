"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4156],{4156:function(e,t,n){n.r(t),t.default={components:{18:function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}var t,o=(t=n(8133))&&t.__esModule?t:{default:t},r=n(4986);function s(e,t){if(n=e,!(null!=(o=t)&&"undefined"!==typeof Symbol&&o[Symbol.hasInstance]?o[Symbol.hasInstance](n):n instanceof o))throw new TypeError("Cannot call a class as a function");var n,o}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},u(e,t)}function a(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=l(e);if(t){var r=l(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return c(this,n)}}function c(t,n){if(n&&("object"===e(n)||"function"===typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}return function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(p,e);var t,n,c,l=a(p);function p(){var e;return s(this,p),(e=l.call(this)).state={message:""},e}return t=p,(n=[{key:"render",value:function(){var e=this;return o.default.createElement("div",null,o.default.createElement(r.CopyToClipboard,{text:"\u6211\u88ab\u4e00\u4e2a\u8fde\u63a5\u590d\u5236\u4e86\uff01",onClick:function(){e.setState({message:"\u590d\u5236\u6210\u529f\uff01\u4f60\u53ef\u4ee5\u7c98\u8d34\u4e86\u3002"},(function(){setTimeout((function(){e.setState({message:""})}),2e3)}))}},"\u70b9\u51fb\u6211\u590d\u5236"),o.default.createElement("div",{style:{color:"#28a745"}},this.state.message))}}])&&i(t.prototype,n),c&&i(t,c),Object.defineProperty(t,"prototype",{writable:!1}),p}(o.default.Component)}(),54:function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}var t,o=(t=n(8133))&&t.__esModule?t:{default:t},r=n(4986);function s(e,t){if(n=e,!(null!=(o=t)&&"undefined"!==typeof Symbol&&o[Symbol.hasInstance]?o[Symbol.hasInstance](n):n instanceof o))throw new TypeError("Cannot call a class as a function");var n,o}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},u(e,t)}function a(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=l(e);if(t){var r=l(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return c(this,n)}}function c(t,n){if(n&&("object"===e(n)||"function"===typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}return function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(p,e);var t,n,c,l=a(p);function p(e){var t;return s(this,p),(t=l.call(this,e)).state={copyText:"\u751f\u4ea6\u4f55\u6b22\uff0c\u6b7b\u4ea6\u4f55\u82e6"},t.input=o.default.createRef(),t}return t=p,(n=[{key:"onChange",value:function(e){}},{key:"render",value:function(){var e=this,t=this.state.copyText;return o.default.createElement("div",null,o.default.createElement("div",null,o.default.createElement(r.Input,{type:"text",ref:this.input,value:t,onChange:this.onChange.bind(this)})),o.default.createElement(r.CopyToClipboard,{style:{marginTop:10,display:"inline-block"},text:t,onClick:function(){e.setState({message:"\u590d\u5236\u6210\u529f\uff01\u4f60\u53ef\u4ee5\u7c98\u8d34\u4e86\u3002"},(function(){setTimeout((function(){e.setState({message:""})}),2e3)})),e.input.current.select()}},o.default.createElement(r.Button,{type:"primary"},"\u70b9\u51fb\u590d\u5236"),o.default.createElement("span",{style:{color:"#28a745"}},this.state.message)))}}])&&i(t.prototype,n),c&&i(t,c),Object.defineProperty(t,"prototype",{writable:!1}),p}(o.default.Component)}()},data:{18:{name:18,meta:{background:"#fff",codeSandbox:"true",codePen:"true"},code:'"use strict";\n\nfunction _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }\n\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\n\nvar _react = _interopRequireDefault(require("react"));\n\nvar _uiw = require("uiw");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar Demo = /*#__PURE__*/function (_React$Component) {\n  _inherits(Demo, _React$Component);\n\n  var _super = _createSuper(Demo);\n\n  function Demo() {\n    var _this;\n\n    _classCallCheck(this, Demo);\n\n    _this = _super.call(this);\n    _this.state = {\n      message: \'\'\n    };\n    return _this;\n  }\n\n  _createClass(Demo, [{\n    key: "render",\n    value: function render() {\n      var _this2 = this;\n\n      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_uiw.CopyToClipboard, {\n        text: "\\u6211\\u88AB\\u4E00\\u4E2A\\u8FDE\\u63A5\\u590D\\u5236\\u4E86\\uFF01",\n        onClick: function onClick() {\n          _this2.setState({\n            message: \'\u590d\u5236\u6210\u529f\uff01\u4f60\u53ef\u4ee5\u7c98\u8d34\u4e86\u3002\'\n          }, function () {\n            setTimeout(function () {\n              _this2.setState({\n                message: \'\'\n              });\n            }, 2000);\n          });\n        }\n      }, "\\u70B9\\u51FB\\u6211\\u590D\\u5236"), /*#__PURE__*/_react["default"].createElement("div", {\n        style: {\n          color: \'#28a745\'\n        }\n      }, this.state.message));\n    }\n  }]);\n\n  return Demo;\n}(_react["default"].Component);\n\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { CopyToClipboard } from 'uiw';\n\nclass Demo extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      message: ''\n    }\n  }\n  render() {\n    return (\n      <div>\n        <CopyToClipboard\n          text=\"\u6211\u88ab\u4e00\u4e2a\u8fde\u63a5\u590d\u5236\u4e86\uff01\"\n          onClick={() => {\n            this.setState({ message: '\u590d\u5236\u6210\u529f\uff01\u4f60\u53ef\u4ee5\u7c98\u8d34\u4e86\u3002' }, () => {\n              setTimeout(() => {\n                this.setState({ message: '' });\n              }, 2000);\n            });\n          }}\n        >\n          \u70b9\u51fb\u6211\u590d\u5236\n        </CopyToClipboard>\n        <div style={{color: '#28a745'}}>{this.state.message}</div>\n      </div>\n    )\n  }\n}\nexport default Demo"},54:{name:54,meta:{background:"#fff",codeSandbox:"true",codePen:"true"},code:'"use strict";\n\nfunction _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }\n\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\n\nvar _react = _interopRequireDefault(require("react"));\n\nvar _uiw = require("uiw");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar Demo = /*#__PURE__*/function (_React$Component) {\n  _inherits(Demo, _React$Component);\n\n  var _super = _createSuper(Demo);\n\n  function Demo(props) {\n    var _this;\n\n    _classCallCheck(this, Demo);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      copyText: "\u751f\u4ea6\u4f55\u6b22\uff0c\u6b7b\u4ea6\u4f55\u82e6"\n    };\n    _this.input = /*#__PURE__*/_react["default"].createRef();\n    return _this;\n  }\n\n  _createClass(Demo, [{\n    key: "onChange",\n    value: function onChange(e) {// this.setState({\n      //   copyText: e.target.value\n      // })\n    }\n  }, {\n    key: "render",\n    value: function render() {\n      var _this2 = this;\n\n      var copyText = this.state.copyText;\n      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_uiw.Input, {\n        type: "text",\n        ref: this.input,\n        value: copyText,\n        onChange: this.onChange.bind(this)\n      })), /*#__PURE__*/_react["default"].createElement(_uiw.CopyToClipboard, {\n        style: {\n          marginTop: 10,\n          display: \'inline-block\'\n        },\n        text: copyText,\n        onClick: function onClick() {\n          // \u590d\u5236\u63d0\u793a\n          _this2.setState({\n            message: \'\u590d\u5236\u6210\u529f\uff01\u4f60\u53ef\u4ee5\u7c98\u8d34\u4e86\u3002\'\n          }, function () {\n            setTimeout(function () {\n              _this2.setState({\n                message: \'\'\n              });\n            }, 2000);\n          });\n\n          _this2.input.current.select();\n        }\n      }, /*#__PURE__*/_react["default"].createElement(_uiw.Button, {\n        type: "primary"\n      }, "\\u70B9\\u51FB\\u590D\\u5236"), /*#__PURE__*/_react["default"].createElement("span", {\n        style: {\n          color: \'#28a745\'\n        }\n      }, this.state.message)));\n    }\n  }]);\n\n  return Demo;\n}(_react["default"].Component);\n\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { CopyToClipboard, Input, Button } from 'uiw';\n\nclass Demo extends React.Component {\n  constructor(props){\n    super(props);\n    this.state = {\n      copyText: \"\u751f\u4ea6\u4f55\u6b22\uff0c\u6b7b\u4ea6\u4f55\u82e6\"\n    };\n    this.input = React.createRef();\n  }\n  onChange(e){\n    // this.setState({\n    //   copyText: e.target.value\n    // })\n  }\n  render() {\n    const { copyText } = this.state;\n    return (\n      <div>\n        <div>\n          <Input\n            type=\"text\"\n            ref={this.input}\n            value={copyText}\n            onChange={this.onChange.bind(this)}\n          />\n        </div>\n        <CopyToClipboard \n          style={{ marginTop:10, display:'inline-block' }} \n          text={copyText}\n          onClick={() => {\n            // \u590d\u5236\u63d0\u793a\n            this.setState({ message: '\u590d\u5236\u6210\u529f\uff01\u4f60\u53ef\u4ee5\u7c98\u8d34\u4e86\u3002' }, () => {\n              setTimeout(() => {\n                this.setState({ message: '' });\n              }, 2000);\n            });\n            this.input.current.select();\n          }}\n        >\n          <Button type=\"primary\">\u70b9\u51fb\u590d\u5236</Button>\n          <span style={{color: '#28a745'}}>{this.state.message}</span>\n        </CopyToClipboard>\n      </div>\n    )\n  }\n}\nexport default Demo"}},source:"CopyToClipboard \u590d\u5236\n===\n\n[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-copy-to-clipboard/file/README.md)\n[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-copy-to-clipboard.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-copy-to-clipboard)\n[![npm version](https://img.shields.io/npm/v/@uiw/react-copy-to-clipboard.svg?label=@uiw/react-copy-to-clipboard)](https://npmjs.com/@uiw/react-copy-to-clipboard)\n\n\u5c06\u6587\u672c\u5230\u526a\u5207\u677f\uff0c\u590d\u5236\u5230\u526a\u8d34\u677f\u529f\u80fd\u53ef\u4ee5\u5e94\u7528\u4e8e\u5404\u79cd\u5143\u7d20\uff0c\u57fa\u4e8e [@uiwjs/copy-to-clipboard](https://github.com/uiwjs/copy-to-clipboard) \u5c01\u88c5\u3002\n\n```jsx\nimport { CopyToClipboard } from 'uiw';\n// or\nimport CopyToClipboard from '@uiw/react-copy-to-clipboard';\n```\n\n### \u57fa\u7840\u5b9e\u4f8b\n\n```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true\nimport React from 'react';\nimport { CopyToClipboard } from 'uiw';\n\nclass Demo extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      message: ''\n    }\n  }\n  render() {\n    return (\n      <div>\n        <CopyToClipboard\n          text=\"\u6211\u88ab\u4e00\u4e2a\u8fde\u63a5\u590d\u5236\u4e86\uff01\"\n          onClick={() => {\n            this.setState({ message: '\u590d\u5236\u6210\u529f\uff01\u4f60\u53ef\u4ee5\u7c98\u8d34\u4e86\u3002' }, () => {\n              setTimeout(() => {\n                this.setState({ message: '' });\n              }, 2000);\n            });\n          }}\n        >\n          \u70b9\u51fb\u6211\u590d\u5236\n        </CopyToClipboard>\n        <div style={{color: '#28a745'}}>{this.state.message}</div>\n      </div>\n    )\n  }\n}\nexport default Demo\n```\n\n## \u590d\u5236\u8f93\u5165\u6846\u5185\u5bb9\n\n```jsx mdx:preview&background=#fff&codeSandbox=true&codePen=true\nimport React from 'react';\nimport { CopyToClipboard, Input, Button } from 'uiw';\n\nclass Demo extends React.Component {\n  constructor(props){\n    super(props);\n    this.state = {\n      copyText: \"\u751f\u4ea6\u4f55\u6b22\uff0c\u6b7b\u4ea6\u4f55\u82e6\"\n    };\n    this.input = React.createRef();\n  }\n  onChange(e){\n    // this.setState({\n    //   copyText: e.target.value\n    // })\n  }\n  render() {\n    const { copyText } = this.state;\n    return (\n      <div>\n        <div>\n          <Input\n            type=\"text\"\n            ref={this.input}\n            value={copyText}\n            onChange={this.onChange.bind(this)}\n          />\n        </div>\n        <CopyToClipboard \n          style={{ marginTop:10, display:'inline-block' }} \n          text={copyText}\n          onClick={() => {\n            // \u590d\u5236\u63d0\u793a\n            this.setState({ message: '\u590d\u5236\u6210\u529f\uff01\u4f60\u53ef\u4ee5\u7c98\u8d34\u4e86\u3002' }, () => {\n              setTimeout(() => {\n                this.setState({ message: '' });\n              }, 2000);\n            });\n            this.input.current.select();\n          }}\n        >\n          <Button type=\"primary\">\u70b9\u51fb\u590d\u5236</Button>\n          <span style={{color: '#28a745'}}>{this.state.message}</span>\n        </CopyToClipboard>\n      </div>\n    )\n  }\n}\nexport default Demo\n```\n\n## CopyToClipboard\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| text | \u62f7\u8d1d\u7684\u6587\u672c | String | - |\n| onClick | \u70b9\u51fb\u4e8b\u4ef6 | Function(text,isCopy,event) | - |\n"}}}]);
//# sourceMappingURL=4156.a11b6656.chunk.js.map