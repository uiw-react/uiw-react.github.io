(this["webpackJsonp@example/uiw"]=this["webpackJsonp@example/uiw"]||[]).push([[642],{1975:function(n,e,o){"use strict";o.r(e),e.default='Input \u8f93\u5165\u6846\n===\n\n\u901a\u8fc7\u9f20\u6807\u6216\u952e\u76d8\u8f93\u5165\u5185\u5bb9\uff0c\u662f\u6700\u57fa\u7840\u7684\u8868\u5355\u57df\u7684\u5305\u88c5\u3002\n\n```jsx\nimport { Input } from \'uiw\';\n```\n\n### \u57fa\u7840\u7528\u6cd5\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Input } from \'uiw\';\n\nconst Demo = () => (\n  <div>\n    <Input placeholder="\u8bf7\u8f93\u5165\u5185\u5bb9" style={{ maxWidth: 200 }} />\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u63d2\u5165\u56fe\u6807\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Input, Row, Col } from \'uiw\';\n\nconst stylItem = { margin: 20 };\nconst Demo = () => (\n  <div>\n    <Row gutter={10}>\n      <Col fixed>\n        <Input preIcon="delete" placeholder="\u8bf7\u8f93\u5165\u5185\u5bb9" />\n      </Col>\n      <Col fixed>\n        <Input preIcon="tag" placeholder="\u8bf7\u8f93\u5165\u5185\u5bb9" />\n      </Col>\n      <Col fixed>\n        <Input preIcon="picasa" placeholder="\u8bf7\u8f93\u5165\u5185\u5bb9" />\n      </Col>\n      <Col fixed>\n        <Input preIcon="like-o" placeholder="\u8bf7\u8f93\u5165\u5185\u5bb9" />\n      </Col>\n    </Row>\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u540e\u9762\u63d2\u5165\u5185\u5bb9\n\n\u5411\u540e\u9762\u63d2\u5165 [`Button`](#/components/button) \u6216\u8005 [`Tag`](#/components/tag)\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Input, Row, Col, Button, Tag } from \'uiw\';\n\nconst Demo = () => (\n  <div>\n    <Row gutter={10}>\n      <Col fixed>\n        <Input\n          preIcon="like-o"\n          placeholder="\u8bf7\u8f93\u5165\u5bc6\u7801"\n          addonAfter={<Button icon="lock" size="small" basic type="light" />}\n        />\n      </Col>\n      <Col fixed>\n        <Input\n          preIcon="tag"\n          placeholder="\u8bf7\u8f93\u5165\u5185\u5bb9"\n          addonAfter={<Tag title="1000" color="#28a745" />}\n        />\n      </Col>\n      <Col fixed>\n        <Input\n          preIcon="search"\n          placeholder="\u8bf7\u8f93\u5165\u5185\u5bb9"\n          addonAfter={<Button icon="apple" size="small" type="primary">\u6309\u94ae</Button>}\n        />\n      </Col>\n      <Col fixed>\n        <Input\n          preIcon="tag"\n          placeholder="\u8bf7\u8f93\u5165\u5185\u5bb9"\n          addonAfter={<Button size="small" type="primary">\u6309\u94ae</Button>}\n        />\n      </Col>\n    </Row>\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n\n### \u8f93\u5165\u6846\u5c3a\u5bf8\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Input, Row, Col, Tag, Button } from \'uiw\';\n\nconst Demo = () => (\n  <div>\n    <Row gutter={10} style={{ marginBottom: 10 }}>\n      <Col fixed>\n        <Input\n          preIcon="like-o"\n          size="large"\n          placeholder="\u8bf7\u8f93\u5165\u5bc6\u7801"\n          addonAfter={<Button icon="lock" basic type="light" />}\n        />\n      </Col>\n      <Col fixed>\n        <Input\n          preIcon="search"\n          placeholder="\u8bf7\u8f93\u5165\u5185\u5bb9"\n          addonAfter={<Button icon="arrow-right" basic size="small" type="light" />}\n        />\n      </Col>\n      <Col fixed>\n        <Input\n          preIcon="tag"\n          size="small"\n          placeholder="\u8bf7\u8f93\u5165\u5185\u5bb9"\n          addonAfter={<Button size="small" type="primary">\u6309\u94ae</Button>}\n        />\n      </Col>\n    </Row>\n    <Row gutter={10} style={{ marginBottom: 10 }}>\n      <Col fixed>\n        <Input\n          preIcon="like-o"\n          size="large"\n          placeholder="\u8bf7\u8f93\u5165\u5bc6\u7801"\n          addonAfter={<Tag title="1000" color="#28a745" />}\n        />\n      </Col>\n      <Col fixed>\n        <Input\n          preIcon="tag"\n          placeholder="\u8bf7\u8f93\u5165\u5185\u5bb9"\n          addonAfter={<Tag title="\u836f\u4e38" color="#1C7CEB" color="#40bf16">\u4e38</Tag>}\n        />\n      </Col>\n      <Col fixed>\n        <Input\n          preIcon="tag"\n          size="small"\n          placeholder="\u8bf7\u8f93\u5165\u5185\u5bb9"\n          addonAfter={<Tag title="1000" color="#28a745" />}\n        />\n      </Col>\n    </Row>\n    <Row gutter={10} style={{ marginBottom: 10 }}>\n      <Col fixed>\n        <Input\n          preIcon="like-o"\n          size="large"\n          placeholder="\u8bf7\u8f93\u5165\u5bc6\u7801"\n          addonAfter={<Button icon="apple" type="primary">\u6309\u94ae</Button>}\n        />\n      </Col>\n      <Col fixed>\n        <Input\n          preIcon="search"\n          placeholder="\u8bf7\u8f93\u5165\u5185\u5bb9"\n          addonAfter={<Button size="small" type="primary">\u641c\u7d22</Button>}\n        />\n      </Col>\n      <Col fixed>\n        <Input\n          preIcon="tag"\n          size="small"\n          placeholder="\u8bf7\u8f93\u5165\u5185\u5bb9"\n          addonAfter={<Button size="small" type="primary">\u6309\u94ae</Button>}\n        />\n      </Col>\n    </Row>\n    <Row gutter={10} style={{ marginBottom: 10 }}>\n      <Col fixed>\n        <Input\n          preIcon="like-o"\n          placeholder="\u8bf7\u8f93\u5165\u5bc6\u7801"\n          addonAfter={<Button size="small" type="light">\u4eae\u6309\u94ae</Button>}\n        />\n      </Col>\n      <Col fixed>\n        <Input\n          placeholder="\u8bf7\u8f93\u5165\u5185\u5bb9"\n          addonAfter={<Button size="small" type="danger">\u6309\u94ae</Button>}\n        />\n      </Col>\n      <Col fixed>\n        <Input\n          placeholder="\u8bf7\u8f93\u5165\u5185\u5bb9"\n          addonAfter={<Button size="small" type="warning">\u6309\u94ae</Button>}\n        />\n      </Col>\n    </Row>\n    <Row gutter={10}>\n      <Col fixed>\n        <Input size="small" preIcon="like-o" placeholder="\u8bf7\u8f93\u5165\u5bc6\u7801" />\n      </Col>\n      <Col fixed>\n        <Input size="small" placeholder="\u8bf7\u8f93\u5165\u5185\u5bb9" />\n      </Col>\n      <Col fixed>\n        <Input\n          size="small"\n          preIcon="like-o"\n          placeholder="\u8bf7\u8f93\u5165\u5185\u5bb9"\n          addonAfter={<Button size="small" type="warning">\u6309\u94ae</Button>}\n        />\n      </Col>\n    </Row>\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n\n### \u5bc6\u7801\u8f93\u5165\u6846\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Input, Row, Col, Button } from \'uiw\';\n\nclass Demo extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      btnIcon: \'lock\',\n    }\n  }\n  onClick() {\n    console.log(\'this.state.btnIcon:\',this.state.btnIcon);\n    this.setState({\n      btnIcon: this.state.btnIcon === \'lock\' ? \'unlock\' : \'lock\',\n    })\n  }\n  render() {\n    return (\n      <Row gutter={10}>\n        <Col fixed>\n          <Input\n            preIcon="like-o"\n            type={this.state.btnIcon === \'lock\' ? \'password\' : \'text\'}\n            placeholder="\u8bf7\u8f93\u5165\u5bc6\u7801"\n            addonAfter={<Button icon={this.state.btnIcon} onClick={this.onClick.bind(this)} size="small" basic type="light" />}\n          />\n        </Col>\n      </Row>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u8f93\u5165\u6846\u88ab\u7981\u7528\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Icon, Input, Row, Col} from \'uiw\';\n\nconst stylItem = { margin: 20 };\nconst Demo = () => (\n  <>\n    <Row gutter={10}>\n      <Col fixed>\n        <Input disabled preIcon="delete" placeholder="\u8bf7\u8f93\u5165\u5185\u5bb9" />\n      </Col>\n      <Col fixed>\n        <Input disabled preIcon="tag" placeholder="\u8bf7\u8f93\u5165\u5185\u5bb9" />\n      </Col>\n      <Col fixed>\n        <Input\n          disabled\n          preIcon="picasa"\n          placeholder="\u8bf7\u8f93\u5165\u5185\u5bb9"\n          addonAfter={\n            <Button icon="close" disabled size="small" basic type="light" />\n          }\n        />\n      </Col>\n      <Col fixed>\n        <Input disabled preIcon="like-o" placeholder="\u8bf7\u8f93\u5165\u5185\u5bb9" />\n      </Col>\n    </Row>\n  </>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n## Input\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| value | \u7ed1\u5b9a\u503c | String | - |\n| disabled | \u7981\u7528\u8f93\u5165\u6846 | Boolean | `false` |\n| preIcon | \u8f93\u5165\u6846`\u524d`\u9762\u653e\u7f6e\u56fe\u6807  | String/ReactNode | - |\n| addonAfter | \t\u5e26\u6807\u7b7e\u7684 input\uff0c\u8bbe\u7f6e\u540e\u7f6e\u6807\u7b7e | String/ReactNode | - |\n| size | \u6307\u5b9a\u8f93\u5165\u6846\u7684\u5c3a\u5bf8\uff0c\u9664\u4e86\u9ed8\u8ba4\u7684\u5927\u5c0f\u5916\uff0c\u8fd8\u63d0\u4f9b\u4e86 `large`\u3001`small` \u548c `default` \u4e09\u79cd\u5c3a\u5bf8\u3002 | String | - |'}}]);