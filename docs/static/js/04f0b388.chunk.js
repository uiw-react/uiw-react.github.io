(window.webpackJsonp=window.webpackJsonp||[]).push([[408],{659:function(n,e){n.exports='Radio 单选框\n===\n\n单选框，在一组备选项中进行单选。\n\n```jsx\nimport { Radio, RadioGroup } from \'uiw\';\n```\n\n### 基础用法\n\n适用广泛的基础最简单的用法，展示各种状态下的样式。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Radio } from \'uiw\';\n\nconst Demo = () => (\n  <div>\n    <Radio value="1">Radio</Radio>\n    <Radio value="2" checked>选中</Radio>\n    <Radio value="3" disabled>禁用</Radio>\n    <Radio value="4" checked disabled>选中并禁用</Radio>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 单选\n\n适用广泛的基础最简单的用法。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Radio, RadioGroup } from \'uiw\';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { value: \'未知\' };\n  }\n  onChange(e) {\n    this.setState({ value: e.target.value });\n  }\n  render() {\n    return (\n      <div>\n        <RadioGroup name="sexs" value={this.state.value} onChange={this.onChange.bind(this)}>\n          <Radio value="man">男</Radio>\n          <Radio value="girl">女</Radio>\n          <Radio value="shemale" disabled>人妖</Radio>\n          <Radio value="unknown" disabled>未知</Radio>\n        </RadioGroup>\n      </div>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 单选组\n\n设置单选初始值\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Radio, RadioGroup, Divider, Button } from \'uiw\';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { value: \'未知\' };\n  }\n  onChange(e) {\n    this.setState({ value: e.target.value });\n  }\n  render() {\n    return (\n      <div>\n        <RadioGroup name="other" value={this.state.value} onChange={this.onChange.bind(this)}>\n          <div>Group 1</div>\n          <Radio value="男">男</Radio>\n          <Radio value="女">女</Radio>\n          <div>Group 2</div>\n          <Radio value="人妖" disabled>人妖</Radio>\n          <Radio value="未知">未知</Radio>\n          <div>Group 3</div>\n          <Radio value="E" style={{ display: \'block\' }}>Item E</Radio>\n          <Radio value="F" style={{ display: \'block\' }}>Item F</Radio>\n        </RadioGroup>\n        <Divider />\n        <Button\n          type="primary"\n          onClick={() => {\n            // console.log(\'set::\', [\'东北菜\', \'北京烤鸭\']);\n            this.setState({ value: \'女\' });\n          }}\n        >\n          点击按钮选"女"\n        </Button>\n      </div>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n## Radio\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| value | 根据 value 进行比较，判断是否选中 | String/Number/Boolean | - |\n| name | 用于表单对应的名称 | String | - |\n| checked | Radio是否被选中 | Boolean | `false` |\n| disabled | 是否禁用 | Boolean | `false` |\n| onChange | 数值改变时的回调，返回当前值 | Funtcion(e:Even) | - |\n\n## RadioGroup \n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| value | 根据 value 进行比较，判断是否选中 | String/Number/Boolean | - |\n| name | 用于表单对应的名称 | String | - |\n| onChange | 数值改变时的回调，返回当前值 | Funtcion(e:Even) | - |\n'}}]);