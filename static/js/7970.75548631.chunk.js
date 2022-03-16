"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7970],{37970:function(n,e,r){r.r(e),e.default="Transfer \u53cc\u680f\u7a7f\u68ad\u9009\u62e9\u6846\u63a7\u4ef6\n===\n\n[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-transfer/file/README.md)\n[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-transfer.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-transfer)\n[![npm version](https://img.shields.io/npm/v/@uiw/react-transfer.svg?label=@uiw/react-transfer)](https://npmjs.com/@uiw/react-transfer)\n\n\u9009\u62e9\u4e00\u4e2a\u6216\u4ee5\u4e0a\u7684\u9009\u9879\u540e\uff0c\u70b9\u51fb\u5de6\u53f3\u7684\u65b9\u5411\u6309\u94ae\uff0c\u53ef\u4ee5\u628a\u9009\u4e2d\u7684\u9009\u9879\u79fb\u52a8\u5230\u53e6\u4e00\u680f\u4e3a\u9009\u4e2d\u3002\u5728 v4.14.0+ \u6dfb\u52a0\u3002\n\n## \u57fa\u7840\u7528\u6cd5\n\n\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport React from 'react';\nimport { Transfer } from 'uiw';\n\nfunction Demo() {\n\n  const options = [\n    { label: '\u6b66\u6c49\u5e02',  key: 1 },\n    { label: '\u6c49\u5357\u533a1', key: 5 },\n    { label: '\u6c49\u5357\u533a2', key: 6 },\n    { label: '\u6c49\u5357\u533a3', key: 7 },\n  ]\n\n  const [value,valueSet] = React.useState([{ label: '\u6b66\u6c49\u5e02',  key: 1 }])\n\n  return (\n    <Row style={{ flexDirection:'column' }} >\n      <Transfer\n        options={options}\n        value={value}\n        onChange={(transfer,option)=>{\n          valueSet(option)\n        }}\n      />\n    </Row>\n  );\n}\n\nReactDOM.render(<Demo />, _mount_);\n```\n\n## \u6811\u5f62\u8282\u70b9\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport React from 'react';\nimport { Transfer } from 'uiw';\n\nfunction Demo() {\nconst options = [\n    {\n      label: '\u6b66\u6c49\u5e02',\n      key: 1,\n      children: [\n        { label: '\u65b0\u6d32\u533a', key: 2, disabled: true },\n        { label: '\u6b66\u660c\u533a', key: 3 },\n        {\n          label: '\u6c49\u5357\u533a',\n          key: 4,\n          children: [\n            { label: '\u6c49\u5357\u533a1', key: 5 },\n            { label: '\u6c49\u5357\u533a2', key: 6 },\n            { label: '\u6c49\u5357\u533a3', key: 7 },\n          ]\n        },\n      ]\n    }\n  ];\n\n  const [value,valueSet] = React.useState([{ label: '\u6b66\u6c49\u5e02',  key: 1 }])\n\n  return (\n    <Row style={{ flexDirection:'column' }} >\n      <Transfer\n        options={options}\n        value={value}\n        onChange={(transfer,option)=>{\n          valueSet(option)\n        }}\n      />\n    </Row>\n  );\n}\n\nReactDOM.render(<Demo />, _mount_);\n```\n\n## \u641c\u7d22\u9009\u9879\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport React from 'react';\nimport { Transfer } from 'uiw';\n\nfunction Demo() {\nconst options = [\n    {\n      label: '\u6b66\u6c49\u5e02',\n      key: 1,\n      children: [\n        { label: '\u65b0\u6d32\u533a', key: 2, disabled: true },\n        { label: '\u6b66\u660c\u533a', key: 3 },\n        {\n          label: '\u6c49\u5357\u533a',\n          key: 4,\n          children: [\n            { label: '\u6c49\u5357\u533a1', key: 5 },\n            { label: '\u6c49\u5357\u533a2', key: 6 },\n            { label: '\u6c49\u5357\u533a3', key: 7 },\n          ]\n        },\n      ]\n    }\n  ];\n\n  const [value,valueSet] = React.useState([\n    { label: '\u6b66\u660c\u533a', key: 3 },\n    { label: '\u6c49\u5357\u533a1', key: 5 },\n    { label: '\u6c49\u5357\u533a2', key: 6 },\n  ])\n\n  return (\n    <Row style={{ flexDirection:'column' }} >\n      <Transfer\n        options={options}\n        showSearch={true}\n        placeholder=\"\u641c\u7d22\u5185\u5bb9\"\n        value={value}\n        onChange={(transfer,option)=>{\n          valueSet(option)\n        }}\n      />\n    </Row>\n  );\n}\n\nReactDOM.render(<Demo />, _mount_);\n```\n\n## Form\u4e2d\u4f7f\u7528\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport React from 'react';\nimport { Transfer, Form } from 'uiw';\n\nfunction Demo() {\n\n  const options = [\n    { label: '\u6b66\u6c49\u5e02',  key: 1 },\n    { label: '\u6c49\u5357\u533a1', key: 5 },\n    { label: '\u6c49\u5357\u533a2', key: 6 },\n    { label: '\u6c49\u5357\u533a3', key: 7 },\n  ]\n\n  const [value,valueSet] = React.useState([{ label: '\u6b66\u6c49\u5e02',  key: 1 }])\n  const form=React.useRef()\n\n  const setValue=()=>{\n    form.current.setFields({\n     transfer: [\n        { label: '\u6c49\u5357\u533a1', key: 5 },\n        { label: '\u6c49\u5357\u533a3', key: 7 },\n      ]\n    })\n  }\n\n  const resetValue=()=>{\n    form.current.resetForm()\n  }\n\n  return (\n    <Form\n        ref={form}\n        onSubmitError={(error) => {\n          if (error.filed) {\n            return { ...error.filed };\n          }\n          return null;\n        }}\n        onSubmit={({initial, current}) => {\n          const errorObj = {};\n          if (!current.searchTree) {\n            errorObj.searchTree = '\u9ed8\u8ba4\u9700\u8981\u9009\u62e9\u5185\u5bb9\uff0c\u9009\u62e9\u5165\u5185\u5bb9';\n          }\n          if(Object.keys(errorObj).length > 0) {\n            const err = new Error();\n            err.filed = errorObj;\n            Notify.error({ title: '\u63d0\u4ea4\u5931\u8d25\uff01', description: '\u8bf7\u786e\u8ba4\u63d0\u4ea4\u8868\u5355\u662f\u5426\u6b63\u786e\uff01' });\n            throw err;\n          }\n          Notify.success({\n            title: '\u63d0\u4ea4\u6210\u529f\uff01',\n            description: `\u8868\u5355\u63d0\u4ea4\u6210\u529f\uff0c\u9009\u62e9\u503c\u4e3a\uff1a${current.selectField}\uff0c\u5c06\u81ea\u52a8\u586b\u5145\u521d\u59cb\u5316\u503c\uff01`,\n          });\n        }}\n        fields={{\n          transfer: {\n            initialValue:[{ label: '\u6c49\u5357\u533a2', key: 6 },{ label: '\u6c49\u5357\u533a3', key: 7 },],\n            children: (\n              <Transfer options={options}/>\n            )\n          }\n        }}\n      >\n        {({ fields, state, canSubmit }) => {\n          return (\n            <div>\n              <Row style={{display:'flex',flexDirection:'column'}}>\n                <Col >{fields.transfer}</Col>\n              </Row>\n              <Row>\n                <Col fixed>\n                  <Button disabled={!canSubmit()} type=\"primary\" htmlType=\"submit\">\u63d0\u4ea4</Button>\n                  <Button onClick={setValue} type=\"primary\" >setValue</Button>\n                  <Button onClick={resetValue} type=\"primary\" >\u91cd\u7f6e</Button>\n                </Col>\n              </Row>\n              <Row>\n                <Col>\n                  <pre style={{ padding: 10, marginTop: 10 }}>\n                    {JSON.stringify(state.current, null, 2)}\n                  </pre>\n                </Col>\n              </Row>\n            </div>\n          )\n        }}\n      </Form>\n  );\n}\n\nReactDOM.render(<Demo />, _mount_);\n```\n\n## Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| bodyStyle | \u9009\u9879\u533a\u57df\u6837\u5f0f | Object | { height: 200px, overflow-y: auto } |\n| onChange | \u70b9\u51fb\u7a7f\u68ad\u65f6\u56de\u8c03 | (arrow, selectkeys) => void | - |\n| value | \u6307\u5b9a\u5f53\u524d\u9009\u4e2d\u7684\u6761\u76ee | [{label, key }] | - |\n| options | \u4e0b\u62c9\u6570\u636e\u6e90,\u53ef\u53c2\u8003Tree\u4e0b\u62c9\u6570\u636e\u6e90 | [{ label, key, children: [{label, key}] }] | - |\n| showSearch | \u542f\u7528\u641c\u7d22 | boolean | false |\n| placeholder | \u641c\u7d22\u8f93\u5165\u6846\u6587\u5b57 | string | - |\n| onSearch | \u641c\u7d22\u65f6\u56de\u8c03\u51fd\u6570 |  (arrow, searchValue) => void | - |\n"}}]);
//# sourceMappingURL=7970.75548631.chunk.js.map