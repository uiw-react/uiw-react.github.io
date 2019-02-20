(window.webpackJsonp=window.webpackJsonp||[]).push([[361],{657:function(n,i){n.exports="Split 面板分割\n===\n\n可将一块内容，分割为可以拖拽调整宽度或高度的区域。\n\n```jsx\nimport { Split } from 'uiw';\n```\n\n### 基础用法\n\n通过设置子节点的 `minWidth` 样式，即可设置拖拽最小宽度值。\n\n\x3c!--DemoStart,bgWhite--\x3e \n```js\nconst Demo = () => (\n  <Split style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3 }}>\n    <div style={{ minWidth: 30 }}>\n      Left Pane\n    </div>\n    <div style={{ minWidth: 30 }}>\n      Right Pane\n    </div>\n  </Split>\n);\n```\n\x3c!--End--\x3e\n\n### 多栏分割\n\n\x3c!--DemoStart,bgWhite--\x3e \n```js\nconst Demo = () => (\n  <Split style={{ height: 100, border: '1px solid #d5d5d5', borderRadius: 3 }}>\n    <div>\n      Left Pane\n    </div>\n    <div>\n      Center Pane\n    </div>\n    <div>\n      Center Pane\n    </div>\n    <div>\n      Right Pane\n    </div>\n  </Split>\n);\n```\n\x3c!--End--\x3e\n\n### 垂直分割\n\n\x3c!--DemoStart,bgWhite--\x3e \n```js\nconst Demo = () => (\n  <Split mode=\"vertical\" style={{ height: 200, border: '1px solid #d5d5d5', borderRadius: 3 }}>\n    <div>\n      Top Pane\n    </div>\n    <div>\n      Bottom Pane\n    </div>\n  </Split>\n);\n```\n\x3c!--End--\x3e\n\n### 嵌套使用\n\n\x3c!--DemoStart,bgWhite--\x3e \n```js\nconst Demo = () => (\n  <Split style={{ height: 200, border: '1px solid #d5d5d5', borderRadius: 3 }}>\n    <Split mode=\"vertical\">\n      <div>\n        Top Pane\n      </div>\n      <Split>\n        <div>\n          Left Pane\n        </div>\n        <div>\n          Right Pane\n        </div>\n      </Split>\n    </Split>\n    <div>\n      Right Pane\n    </div>\n  </Split>\n);\n```\n\x3c!--End--\x3e\n\n## Props\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| mode | 类型，可选值为 `horizontal` 或 `vertical` | String | `horizontal` |\n"}}]);