"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9188],{49188:function(e,n,t){t.r(n),n.default="Progress \u8fdb\u5ea6\u6761\n===\n\n[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-progress/file/README.md)\n[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-progress.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-progress)\n[![npm version](https://img.shields.io/npm/v/@uiw/react-progress.svg?label=@uiw/react-progress)](https://npmjs.com/@uiw/react-progress)\n\n\u7528\u4e8e\u5c55\u793a\u64cd\u4f5c\u8fdb\u5ea6\uff0c\u544a\u77e5\u7528\u6237\u5f53\u524d\u72b6\u6001\u548c\u9884\u671f\u3002\n\n```jsx\nimport { Progress } from 'uiw';\nconst { Line, Circle } = Progress;\n// or\nimport Progress from '@uiw/react-progress'; \n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { Progress } from 'uiw';\n\nconst { Line } = Progress;\nconst sty = {marginBottom:10}\nconst Demo = () => (\n  <div>\n    <Progress.Line style={sty} percent={30} />\n    <Line style={sty} percent={50} status=\"active\" />\n    <Line style={sty} percent={70} status=\"exception\" />\n    <Line style={sty} percent={100} />\n    <Line style={sty} percent={50} showText={false} />\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u8fdb\u5ea6\u6761\u5927\u5c0f\u8bbe\u7f6e\n\n\u8bbe\u7f6e\u53c2\u6570`strokeWidth`\u5373\u53ef\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { Progress } from 'uiw';\n\nconst { Line } = Progress;\nconst sty = {marginBottom:10}\nconst Demo = () => (\n  <div>\n    <Progress.Line style={sty} strokeWidth={6} percent={30} />\n    <Line style={sty} strokeWidth={14} percent={50} status=\"active\" />\n    <Line style={sty} strokeWidth={18} percent={70} status=\"exception\" />\n    <Line style={sty} strokeWidth={12} percent={100} />\n    <Line style={sty} strokeWidth={14} percent={50} showText={false} />\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u5706\u5708\u8fdb\u5ea6\u6761\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { Progress } from 'uiw';\n\nconst { Circle } = Progress;\nconst sty = {marginBottom:10}\nconst Demo = () => (\n  <div>\n    <Progress.Circle style={sty} percent={30} />\n    <Circle style={sty} percent={75} />\n    <Circle style={sty} percent={70} status=\"exception\" />\n    <Circle style={sty} percent={100} />\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u4e0d\u540c\u5c3a\u5bf8\u5706\u5708\u8fdb\u5ea6\u6761\n\n\u901a\u8fc7`strokeWidth`\u8bbe\u7f6e\u5706\u5708\u8fdb\u5ea6\u5bbd\u5e26\uff0c\u901a\u8fc7`width`\uff08`type=\"circle\"`\u6709\u6548\uff09\u8bbe\u7f6e\u5706\u5708\u5927\u5c0f\uff0c\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { Progress } from 'uiw';\n\nlet sty = {marginRight:15}\nconst Demo = () => (\n  <div>\n    <Progress.Circle style={sty} width={80} strokeWidth={2} percent={30} />\n    <Progress.Circle style={sty} width={100} strokeWidth={10} percent={75} />\n    <Progress.Circle style={sty} percent={70} status=\"exception\" />\n    <Progress.Circle style={sty} width={100} strokeWidth={3} percent={75} />\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u52a8\u6001\u5c55\u793a\n\n\u8fdb\u5ea6\u6761\u52a8\u6001\u5c55\u793a\u66f4\u76f4\u89c2\u3002\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport { Progress } from 'uiw';\n\nclass Demo extends React.Component {\n  constructor(props){\n    super(props);\n    this.state = {\n      percent: 50,\n    }\n  }\n  increase(){\n    let percent = this.state.percent + 10;\n    if (percent > 100) {\n      percent = 100;\n    }\n    this.setState({ percent });\n  }\n  decline(){\n    let percent = this.state.percent - 10;\n    if (percent < 0) {\n      percent = 0;\n    }\n    this.setState({ percent });\n  }\n  render() {\n    let sty = {marginRight:15}\n    return (\n      <div style={{maxWidth:400}}>\n        <Progress.Line percent={this.state.percent} />\n        <Progress.Circle percent={this.state.percent} />\n        <div>\n          <button onClick={this.decline.bind(this)}>minus -</button>\n          <button onClick={this.increase.bind(this)}>plus +</button>\n        </div>\n      </div>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\n## \u81ea\u5b9a\u4e49\u6587\u5b57\u683c\u5f0f\n\n`format` \u5c5e\u6027\u6307\u5b9a\u683c\u5f0f\u3002\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport { Progress } from 'uiw';\n\nconst sty = {marginRight:10}\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Progress.Circle style={sty} percent={80} type=\"circle\" format={percent => (\n            <span>\n              {`${percent} %`}\n              <div style={{padding:\"10px 0 0 0\",fontSize:21}}>\u5df2\u5b8c\u6210</div>\n            </span>\n          )}/>\n        <Progress.Circle style={sty} percent={70} status=\"exception\" type=\"circle\" format={percent => (\n          <span>\n            {`${percent} %`}\n            <div style={{padding:\"10px 0 0 0\",fontSize:21}}>\u5df2\u5173\u95ed</div>\n          </span>\n        )}/>\n        <Progress.Circle style={sty} percent={100} type=\"circle\" format={percent => `\u5df2\u5b8c\u6210`}/>\n        <Progress.Line style={sty} percent={70} format={percent => `${percent}\u2103`}/>\n      </div>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\n\n## API\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|------ |-------- |---------- |-------- |\n| percent | \u767e\u5206\u6bd4 | Number | `0` |\n| showText | \u662f\u5426\u663e\u793a\u8fdb\u5ea6\u6761\u6587\u5b57\u5185\u5bb9 | Boolean | `true` |\n| format | \u5185\u5bb9\u7684\u6a21\u677f\u51fd\u6570\uff0c\u81ea\u5b9a\u4e49\u6587\u5b57\u683c\u5f0f\u3002 | Function | - |\n| strokeWidth | \u8fdb\u5ea6\u6761\u7ebf\u7684\u5bbd\u5ea6 | Number | `6` |\n| width  | \u5706\u5f62\u8fdb\u5ea6\u6761\u753b\u5e03\u5bbd\u5ea6\uff0c\u5355\u4f4d px ,`type=\"circle\"`\u6709\u6548| Number | `126` |\n| status | \u72b6\u6001\uff0c\u53ef\u9009\uff1a`success` `exception` `active` | Enum{'`success`', '`exception`'} | - |\n"}}]);
//# sourceMappingURL=9188.636af533.chunk.js.map