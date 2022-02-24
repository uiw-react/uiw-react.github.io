"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[747],{10747:function(e,n,t){t.r(n),n.default="Checkbox \u591a\u9009\u6846\n===\n\n[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-checkbox/file/README.md)\n[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-checkbox.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-checkbox)\n[![npm version](https://img.shields.io/npm/v/@uiw/react-checkbox.svg?label=@uiw/react-checkbox)](https://npmjs.com/@uiw/react-checkbox)\n\n\u4e00\u7ec4\u5907\u9009\u9879\u4e2d\u8fdb\u884c\u591a\u9009\n\n```jsx\nimport { Checkbox } from 'uiw';\n// or\nimport Checkbox from '@uiw/react-checkbox';\n```\n\n### \u57fa\u7840\u7528\u6cd5\n\n\u5355\u72ec\u4f7f\u7528\u53ef\u4ee5\u8868\u793a\u4e24\u79cd\u72b6\u6001\u4e4b\u95f4\u7684\u5207\u6362\uff0c\u534a\u9009\u4e2d\u53ea\u662f\u6837\u5f0f\u4e0a\u7684\u8868\u73b0\u3002\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e \n```jsx\nimport ReactDOM from 'react-dom';\nimport { Checkbox } from 'uiw';\n\nReactDOM.render(\n  <div>\n    <Checkbox onChange={(e) =>{\n      console.log(e.target.checked)\n      console.log(e.target)\n    }}>\u672a\u9009\u4e2d</Checkbox>\n    <Checkbox checked >\u9009\u4e2d</Checkbox>\n  </div>,\n  _mount_\n);\n```\n\n### Form \u4e2d\u4f7f\u7528 Checkbox\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e  \n```jsx\nimport ReactDOM from 'react-dom';\nimport { Form, Checkbox, Row, Col, Button, Notify } from 'uiw';\n\nconst Demo = () => (\n  <div>\n    <Form\n      onChange={({ initial, current }) => {\n        console.log('onChange~~~:::', initial, current);\n      }}\n      onSubmit={({initial, current}) => {\n        console.log('onSubmit~~~:::', initial, current)\n        Notify.success({\n          title: '\u63d0\u4ea4\u6210\u529f\uff01',\n          description: `\u9009\u9879\u4e3a\uff1a\u3010${current.checkbox}\u3011\u3010${JSON.stringify(current.checkboxGroup)}\u3011\uff0c\u63d0\u4ea4\u5b8c\u6210\uff0c\u5c06\u81ea\u52a8\u586b\u5145\u521d\u59cb\u5316\u503c\uff01`,\n        });\n      }}\n      fields={{\n        checkbox: {\n          inline: true,\n          initialValue: true,\n          label: '\u5355\u9009\u6761\u4ef6',\n          children: <Checkbox>\u56db\u5ddd\u83dc</Checkbox>,\n          validator: (value) => {\n            return !value ? '\u5fc5\u987b\u7edf\u4e00\u670d\u52a1\u6761\u6b3e' : null;\n          },\n        },\n        checkboxGroup: {\n          initialValue: ['\u56db\u5ddd\u83dc'],\n          label: '\u9009\u62e9\u4f60\u60f3\u5403\u7684\u83dc',\n          children: (\n            <Checkbox.Group>\n              <div>\u83dc\u7cfb</div>\n              <Checkbox value=\"\u56db\u5ddd\u83dc\">\u56db\u5ddd\u83dc</Checkbox>\n              <Checkbox value=\"\u6e56\u5317\u83dc\">\u6e56\u5317\u83dc</Checkbox>\n              <Checkbox value=\"\u897f\u5317\u83dc\">\u897f\u5317\u83dc</Checkbox>\n              <Checkbox disabled value=\"\u65b0\u7586\u83dc\">\u65b0\u7586\u83dc</Checkbox>\n              <Checkbox value=\"\u4e1c\u5317\u83dc\">\u4e1c\u5317\u83dc</Checkbox>\n              <div style={{ marginTop: 10 }}>\u5bb6\u5e38\u83dc</div>\n              <Checkbox value=\"\u7ea2\u70e7\u6b66\u660c\u9c7c\">\u7ea2\u70e7\u6b66\u660c\u9c7c</Checkbox>\n              <Checkbox value=\"\u9ebb\u5a46\u8c46\u8150\">\u9ebb\u5a46\u8c46\u8150</Checkbox>\n              <Checkbox value=\"\u5317\u4eac\u70e4\u9e2d\">\u5317\u4eac\u70e4\u9e2d</Checkbox>\n            </Checkbox.Group>\n          ),\n        },\n      }}\n    >\n      {({ fields, state, canSubmit }) => {\n        return (\n          <div>\n            <Row>\n              <Col>{fields.checkbox}</Col>\n            </Row>\n            <Row>\n              <Col>{fields.checkboxGroup}</Col>\n            </Row>\n            <Row>\n              <Col>\n                <Button disabled={!canSubmit()} type=\"primary\" htmlType=\"submit\">\n                  \u63d0\u4ea4\n                </Button>\n              </Col>\n            </Row>\n            <Row>\n              <Col>\n                <pre style={{ padding: 10, marginTop: 10 }}>\n                  {JSON.stringify(state.current, null, 2)}\n                </pre>\n              </Col>\n            </Row>\n          </div>\n        )\n      }}\n    </Form>\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u7981\u7528\u6837\u5f0f\n\n\u901a\u8fc7\u8bbe\u7f6e `disabled` \u5c5e\u6027\u6765\u7981\u7528\u591a\u9009\u6846\u3002\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e \n```jsx\nimport ReactDOM from 'react-dom';\nimport { Checkbox } from 'uiw';\n\nReactDOM.render(\n  <div>\n    <Checkbox disabled checked>\u672a\u9009\u4e2d\u7981\u7528</Checkbox>\n    <Checkbox disabled checked>\u9009\u4e2d\u7981\u7528</Checkbox>\n    <Checkbox disabled indeterminate>\u534a\u9009\u4e2d\u7981\u7528</Checkbox>\n  </div>,\n  _mount_\n);\n```\n\n### \u5168\u9009\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e \n```jsx\nimport ReactDOM from 'react-dom';\nimport { Checkbox, Divider } from 'uiw';\n\nconst checkedList = [ '\u56db\u5ddd\u83dc', '\u6e56\u5317\u83dc', '\u897f\u5317\u83dc', '\u65b0\u7586\u83dc', '\u4e1c\u5317\u83dc' ];\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: ['\u56db\u5ddd\u83dc', '\u65b0\u7586\u83dc'],\n      indeterminate: true,\n      checkAll: false,\n    };\n  }\n  onChange(e, list) {\n    console.log('list', list);\n    console.log('list', checkedList);\n    this.setState({\n      value: list,\n      indeterminate: !!list.length && (list.length < checkedList.length),\n      checkAll: list.length === checkedList.length,\n    });\n  }\n  onCheckAllChange(e) {\n    this.setState({\n      value: e.target.checked ? checkedList : [],\n      indeterminate: false,\n      checkAll: e.target.checked,\n    });\n  }\n  render() {\n    const { indeterminate, checkAll } = this.state;\n    return (\n      <div>\n        <Checkbox checked={checkAll} indeterminate={indeterminate} onChange={this.onCheckAllChange.bind(this)}>\u5168\u9009</Checkbox>\n        <Divider />\n        <Checkbox.Group name=\"cuisine\" value={this.state.value} onChange={this.onChange.bind(this)}>\n          {checkedList.map((item, idx) => {\n            return (\n              <Checkbox key={idx} value={item}>{item}</Checkbox>\n            )\n          })}\n        </Checkbox.Group>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u591a\u9009\u7ec4\n\n\u65b9\u4fbf\u7684\u4ece\u6570\u7ec4\u751f\u6210 `Checkbox` \u7ec4\u3002\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e \n```jsx\nimport ReactDOM from 'react-dom';\nimport { Checkbox, Divider, Button } from 'uiw';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: ['\u56db\u5ddd\u83dc', '\u65b0\u7586\u83dc'],\n    };\n  }\n  onChange(e, list) {\n    console.log('Value:--\x3e', e.target.value, list);\n    this.setState({ value: list });\n  }\n  render() {\n    return (\n      <div>\n        <Checkbox.Group name=\"cuisine\" value={this.state.value} onChange={this.onChange.bind(this)}>\n          <div>\u5ddd\u83dc</div>\n          <Checkbox value=\"\u56db\u5ddd\u83dc\">\u56db\u5ddd\u83dc</Checkbox>\n          <Checkbox value=\"\u6e56\u5317\u83dc\">\u6e56\u5317\u83dc</Checkbox>\n          <div>\u672c\u5e2e\u6c5f\u6d59\u83dc</div>\n          <Checkbox value=\"\u897f\u5317\u83dc\">\u897f\u5317\u83dc</Checkbox>\n          <Checkbox value=\"\u65b0\u7586\u83dc\">\u65b0\u7586\u83dc</Checkbox>\n          <div>\u5bb6\u5e38\u83dc</div>\n          <Checkbox value=\"\u4e1c\u5317\u83dc\">\u4e1c\u5317\u83dc</Checkbox>\n          <Checkbox value=\"\u5317\u4eac\u70e4\u9e2d\">\u5317\u4eac\u70e4\u9e2d</Checkbox>\n        </Checkbox.Group>\n        <Divider />\n        <Button\n          type=\"primary\"\n          onClick={() => {\n            // console.log('set::', ['\u4e1c\u5317\u83dc', '\u5317\u4eac\u70e4\u9e2d']);\n            this.setState({ value: ['\u4e1c\u5317\u83dc', '\u5317\u4eac\u70e4\u9e2d'] });\n          }}\n        >\n          \u9009\u4e2d\u4e24\u4e2a\n        </Button>\n      </div>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u63a7\u5236\u7ec4\u4ef6\n\n\u901a\u8fc7 `checked` \u5c5e\u6027\u6539\u53d8 `Checkbox` \u7ec4\u4ef6\u72b6\u6001\u3002\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e \n```jsx\nimport ReactDOM from 'react-dom';\nimport { Checkbox, Button } from 'uiw';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      checked: true\n    }\n  }\n  onChange(e) {\n    console.log('e.target.checked:', e.target.checked);\n    this.setState({ checked: e.target.checked });\n  }\n  render() {\n    return (\n      <div>\n        <Checkbox onChange={this.onChange.bind(this)} checked={this.state.checked} style={{ marginRight: 10 }} />\n        <Button\n          size=\"small\"\n          type=\"primary\"\n          onClick={() => {\n            this.setState({ checked: !this.state.checked });\n          }}\n        >\n          \u70b9\u51fb\u6309\u94ae\u6539\u53d8 Checkbox \u72b6\u6001\n        </Button>\n      </div>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\n\n## Checkbox\n\n| \u53c2\u6570      | \u8bf4\u660e    | \u7c7b\u578b      |  \u9ed8\u8ba4\u503c   |\n|--------- |-------- |---------- |-------- |\n| options | \u6307\u5b9a\u5f53\u524d\u662f\u5426\u9009\u4e2d | Boolean | false |\n| disabled | \u7981\u7528 | Boolean | false |\n| onChange | \u53d8\u5316\u65f6\u56de\u8c03\u51fd\u6570 | Function(e:Event, checked:Boolean) | - |\n| checked | \u6307\u5b9a\u5f53\u524d\u662f\u5426\u9009\u4e2d | Boolean | false |\n| indeterminate | \u534a\u9009\u4e2d\uff0c\u53ea\u8d1f\u8d23\u6837\u5f0f\u63a7\u5236 | Boollean | false |\n\n## Checkbox.Group\n\n| \u53c2\u6570      | \u8bf4\u660e    | \u7c7b\u578b      |  \u9ed8\u8ba4\u503c   |\n|--------- |-------- |---------- |-------- |\n| name | \u9690\u85cf\u8f93\u5165\u7684\u540d\u79f0\uff0c\u5728\u8868\u5355\u4e2d\u4f7f\u7528\u65f6\u5f88\u6709\u7528 | string | - |\n| value | \u63a7\u5236\u65f6 `select` \u7684\u503c\u5fc5\u987b\u4e0e `onChange` \u51fd\u6570\u4e00\u8d77\u4f7f\u7528\u624d\u80fd\u66f4\u65b0 `select` \u7684\u503c | Array | `[]` |\n| onChange | \u53d8\u5316\u65f6\u56de\u8c03\u51fd\u6570 | Function(e:Event, checkedValues: Array) | - |\n"}}]);
//# sourceMappingURL=747.7519f1c0.chunk.js.map