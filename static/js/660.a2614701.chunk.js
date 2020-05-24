(this["webpackJsonp@example/uiw"]=this["webpackJsonp@example/uiw"]||[]).push([[660],{1982:function(n,e,t){"use strict";t.r(e),e.default="Slider \u6ed1\u5757\u8f93\u5165\u6761\n===\n\n\u901a\u8fc7\u62d6\u52a8\u6ed1\u5757\u5728\u4e00\u4e2a\u56fa\u5b9a\u533a\u95f4\u5185\u8fdb\u884c\u9009\u62e9\uff0c\u6548\u679c\u6bd4 [`input`](https://www.w3.org/wiki/HTML/Elements/input/range) \u7c7b\u578b\u4e3a [`range`](https://www.w3.org/wiki/HTML/Elements/input/range) \u7684\u529f\u80fd\u4e30\u5bcc\u3002\n\n### \u57fa\u672c\u7528\u6cd5\n\n\u6309\u94ae\u6837\u5f0f\u7684\u5355\u9009\u7ec4\u5408\u3002\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```jsx\nimport { Slider, Divider } from 'uiw';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: 20,\n      value2: -5,\n      value3: [10, 50],\n    };\n  }\n  render() {\n    return (\n      <div>\n        <Slider\n          value={this.state.value}\n          style={{ maxWidth: 360 }}\n          onChange={(value)=> {\n            this.setState({ value });\n          }}\n        />\n        <div>\u8bbe\u7f6e progress \u503c\u4e3a <b>\"false\"</b> \u4e0d\u663e\u793a\u8fdb\u5ea6\u6761</div>\n        <Slider\n          progress={false}\n          value={this.state.value}\n          style={{ maxWidth: 360, marginTop: 30 }}\n          onChange={(value)=> {\n            this.setState({ value });\n          }}\n        />\n        <div>\u8bbe\u7f6e progress \u503c\u4e3a <b>\"#dc3545\"</b> \u8fd9\u662f\u4e00\u4e2a\u989c\u8272\u503c\uff0c\u8bbe\u7f6e\u8fdb\u5ea6\u6761\u989c\u8272</div>\n        <Slider\n          // progress={false}\n          progress=\"#dc3545\"\n          value={this.state.value}\n          style={{ maxWidth: 360, marginTop: 30 }}\n          onChange={(value)=> {\n            this.setState({ value });\n          }}\n        />\n        <div>\u5f53\u524d\u503c\uff1a<b>{this.state.value}</b></div>\n        <Divider />\n        <Slider\n          min={-10}\n          max={30}\n          value={this.state.value2}\n          style={{ maxWidth: 260 }}\n          onChange={(value2)=> {\n            this.setState({ value2 });\n          }}\n        />\n        <div>\u53ef\u9009 -10~30\u503c\u8303\u56f4\uff1a<b>{this.state.value2}</b></div>\n        <Divider />\n        <Slider value={this.state.value3} style={{ maxWidth: 260 }}\n          onChange={(value3)=> {\n            this.setState({ value3 });\n          }}\n        />\n        <div>\u53d6\u503c\u8303\u56f4\uff1a<b>{this.state.value3[0]} ~ {this.state.value3[1]}</b></div>\n      </div>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u5728\u8868\u5355\u4e2d\u4f7f\u7528\n\n\u5728 [`<Form />`](#/components/form) \u8868\u5355\u4e2d\u5e94\u7528 [`<Slider />`](#/components/slider) \u7ec4\u4ef6\uff0c\u9700\u8981\u8bbe\u7f6e `initialValue` \u521d\u59cb\u503c\u3002\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```jsx\nimport { Form, Row, Col, Slider, Button, Notify } from 'uiw';\n\nconst Demo = () => (\n  <div>\n    <Form\n      onSubmit={({initial, current}) => {\n        if(current.age === initial.age) {\n          Notify.error({\n            title: '\u63d0\u4ea4\u5931\u8d25\uff01',\n            description: `\u8868\u5355\u63d0\u4ea4\u5e74\u9f84\u5931\u8d25\uff0c\u5e74\u9f84\u4e3a\uff1a${current.age}\uff0c\u4e0e\u521d\u59cb\u5316\u503c\u662f\u4e00\u6837\u6ef4\uff01`,\n          });\n        } else {\n          Notify.success({\n            title: '\u63d0\u4ea4\u6210\u529f\uff01',\n            description: `\u8868\u5355\u63d0\u4ea4\u5e74\u9f84\u6210\u529f\uff0c\u5e74\u9f84\u4e3a\uff1a${current.age}\uff0c\u5c06\u81ea\u52a8\u586b\u5145\u521d\u59cb\u5316\u503c\uff01`,\n          });\n        }\n      }}\n      fields={{\n        age: {\n          initialValue: 0,\n          inline: true,\n          label: '\u5e74\u9f84',\n          children: <Slider />\n        },\n      }}\n    >\n      {({ fields, state, canSubmit }) => {\n        return (\n          <div>\n            <Row gutter={10}>\n              <Col style={{ maxWidth: 300 }}>{fields.age}</Col>\n              <Col>{state.current.age}</Col>\n            </Row>\n            <Row>\n              <Col fixed>\n                <Button disabled={!canSubmit()} type=\"primary\" htmlType=\"submit\">\u63d0\u4ea4</Button>\n              </Col>\n            </Row>\n          </div>\n        )\n      }}\n    </Form>\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u63a7\u5236\u63d0\u793a\u663e\u793a\n\n\u901a\u8fc7\u8bbe\u7f6e `tooltip` \u7684\u503c\uff0c\u6765\u63a7\u5236\u63d0\u793a\u7684\u663e\u793a\u3002\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```jsx\nimport { Slider, Divider} from 'uiw';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <div>\u8bbe\u7f6e tooltip \u503c\u4e3a <b>true</b>\uff0c\u63d0\u793a\u5c06\u59cb\u7ec8\u663e\u793a\u3002</div>\n        <Slider value={25} style={{ maxWidth: 260 }} tooltip />\n        <Divider />\n        <div>\u8bbe\u7f6e tooltip \u503c\u4e3a <b>null</b>\uff0c\u63d0\u793a\u5c06\u59cb\u7ec8\u4e0d\u663e\u793a\u3002</div>\n        <Slider value={25} style={{ maxWidth: 260 }} tooltip={null} />\n        <Divider />\n        <div>\u8bbe\u7f6e tooltip \u503c\u4e3a <b>false</b>\uff0c\u9f20\u6807\u7ecf\u8fc7\u663e\u793a\u63d0\u793a\u3002</div>\n        <Slider value={25} style={{ maxWidth: 260 }} tooltip={false} />\n      </div>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u523b\u5ea6\n\n\u901a\u8fc7 `step` \u8bbe\u7f6e\u6216\u8fd4\u56de\u6bcf\u6b21\u62d6\u52a8\u6ed1\u5757\u63a7\u4ef6\u65f6\u7684\u9012\u589e\u91cf\u3002\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e\n```jsx\nimport { Slider, Divider} from 'uiw';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: 20,\n      value2: 1.5,\n      value3: 20,\n      value4: [10, 40],\n    };\n  }\n  render() {\n    return (\n      <div>\n        <div>\u523b\u5ea6 <b>step=10</b> \u5f53\u524d\u503c\uff1a<b>{this.state.value}</b></div>\n        <Slider\n          step={10}\n          max={200}\n          dots\n          value={this.state.value}\n          style={{ maxWidth: 460 }}\n          onChange={(value)=> {\n            this.setState({ value });\n          }}\n        />\n        <Divider />\n        <div>\u523b\u5ea6 <b>step=0.5</b> \u5f53\u524d\u503c\uff1a<b>{this.state.value2}</b></div>\n        <Slider\n          min={0}\n          max={2}\n          step={0.5}\n          dots\n          value={this.state.value2}\n          style={{ maxWidth: 460 }}\n          onChange={(value2)=> {\n            this.setState({ value2 });\n          }}\n        />\n        <Divider />\n        <div>\u523b\u5ea6 <b>step=3</b>\uff0c\u8bbe\u7f6e <b>dots=false</b> \u4e0d\u663e\u793a\u523b\u5ea6 \u5f53\u524d\u503c\uff1a<b>{this.state.value3}</b></div>\n        <Slider\n          value={26}\n          min={20}\n          max={40}\n          step={2}\n          value={this.state.value3}\n          style={{ maxWidth: 260 }}\n          onChange={(value3)=> {\n            this.setState({ value3 });\n          }}\n        />\n        <Divider />\n        <div>\u503c <b>value=[10, 40]</b> \uff0c\u5fc5\u987b\u8bbe\u7f6e<b>range=true</b>\uff0c\u53d6\u503c\u8303\u56f4\uff1a<b>{this.state.value4[0]} ~ {this.state.value4[1]}</b></div>\n        <Slider value={this.state.value4} style={{ maxWidth: 260 }}\n          onChange={(value4)=> {\n            this.setState({ value4 });\n          }}\n        />\n      </div>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u6807\u8bb0\u523b\u5ea6\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e\n```jsx\nimport { Slider, Divider} from 'uiw';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: 20,\n      value2: 1.5,\n      value3: 20,\n    };\n  }\n  render() {\n    return (\n      <div>\n        <div>\u523b\u5ea6 <b>step=2</b> \u5f53\u524d\u503c\uff1a<b>{this.state.value}</b></div>\n        <Slider\n          min={-10}\n          max={30}\n          step={2}\n          dots\n          value={this.state.value}\n          marks={{\n            [-10]: '-10\xb0C',\n            [-2]: '-2\xb0C',\n            0: {\n              style: { color: '#af00ff' },\n            },\n            30: {\n              style: { color: '#ff7c00' },\n              label: <strong>30\xb0C</strong>,\n            }\n          }}\n          renderMarks={(mark) => `${mark}\xb0C`}\n          onChange={(value)=> {\n            this.setState({ value });\n          }}\n        />\n        <div>\u523b\u5ea6 <b>step=0.5</b> \u5f53\u524d\u503c\uff1a<b>{this.state.value2}</b></div>\n        <Slider\n          min={0}\n          max={2}\n          step={0.5}\n          dots\n          marks\n          value={this.state.value2}\n          style={{ maxWidth: 460 }}\n          onChange={(value2)=> {\n            this.setState({ value2 });\n          }}\n        />\n        <div>\u523b\u5ea6 <b>step=3</b> \u5f53\u524d\u503c\uff1a<b>{this.state.value3}</b></div>\n        <Slider\n          value={26}\n          min={20}\n          max={44}\n          step={2}\n          dots\n          marks\n          value={this.state.value3}\n          style={{ maxWidth: 260 }}\n          onChange={(value3)=> {\n            console.log('value5:', value3);\n            this.setState({ value3 });\n          }}\n        />\n      </div>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u7981\u7528\u6837\u5f0f\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e\n```jsx\nimport { Slider, Divider} from 'uiw';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Slider value={25} disabled style={{ maxWidth: 260 }} />\n        <Divider />\n        <Slider\n          step={10}\n          disabled\n          dots\n          value={50}\n          style={{ maxWidth: 260 }}\n        />\n        <Divider />\n        <Slider disabled step={2} value={26} min={20} max={44} dots marks />\n      </div>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u5782\u76f4\u65b9\u5411\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e\n```jsx\nimport { Row, Col, Slider } from 'uiw';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <Row>\n        <Col fixed style={{ width: 70 }}>\n          <Slider\n            vertical\n            min={-10}\n            max={30}\n            step={2}\n            dots\n            value={20}\n            marks={{\n              [-10]: '-10\xb0C',\n              [-2]: '-2\xb0C',\n              0: ' ',\n              2: {\n                style: { color: '#af00ff' },\n              },\n              30: {\n                style: { color: '#ff7c00' },\n                label: <strong>30\xb0C</strong>,\n              }\n            }}\n            style={{ height: 260 }}\n            renderMarks={(mark) => `${mark}\xb0C`}\n          />\n        </Col>\n        <Col fixed>\n          <Slider vertical value={25} style={{ height: 260 }} />\n        </Col>\n        <Col fixed>\n          <Slider vertical value={62} progress={false} tooltip style={{ height: 260 }} />\n        </Col>\n        <Col fixed>\n          <Slider vertical value={50} step={10} dots style={{ height: 260 }} />\n        </Col>\n        <Col fixed>\n          <Slider vertical step={2} value={[26, 40]} min={20} max={44} dots marks style={{ height: 260 }} />\n        </Col>\n      </Row>\n    );\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n## Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| value | \u9009\u62e9\u7684\u6570\u503c\uff0c\u4e3a\u6570\u7ec4\u65f6\u5373\u53ef\u5f00\u542f\u8303\u56f4\u9009\u62e9\uff0c\u5e76\u4e14\u6307\u5b9a\u8303\u56f4\uff0c`@3.0.0+` \u901a\u8fc7\u5224\u65ad\u662f\u5426\u4e3a\u6570\u7ec4\uff0c\u5c55\u793a\u53cc\u6ed1\u5757 | Number/Number[] | `0` |\n| min | \u6700\u5c0f\u503c | Number | `0` |\n| max | \u6700\u5927\u503c | Number | `100` |\n| dots | \u663e\u793a `step` \u95f4\u65ad\u70b9\uff0c\u5efa\u8bae\u5728 `step` \u95f4\u9694\u4e0d\u5bc6\u96c6\u65f6\u4f7f\u7528 | Number | `false` |\n| marks | \u523b\u5ea6\u6807\u8bb0\uff0c`key` \u7684\u7c7b\u578b\u5fc5\u987b\u4e3a `number` \u4e14\u53d6\u503c\u5728\u95ed\u533a\u95f4 `min`, `max` \u5185\uff0c\u6bcf\u4e2a\u6807\u7b7e\u53ef\u4ee5\u5355\u72ec\u8bbe\u7f6e\u6837\u5f0f\uff0c\u5f53\u503c\u4e3a `Boolean` \u503c\u65f6\u8868\u793a\u662f\u5426\u663e\u793a\u523b\u5ea6 | Object/Boolean | - |\n| renderMarks | \u523b\u5ea6\u6807\u8bb0\u6e32\u67d3 | Function(mark) => String | - | \n| step | \u8bbe\u7f6e\u6216\u8fd4\u56de\u6bcf\u6b21\u62d6\u52a8\u6ed1\u5757\u63a7\u4ef6\u65f6\u7684\u9012\u589e\u91cf\uff0c\u89c4\u5b9a\u5408\u6cd5\u6570\u5b57\u95f4\u9694\uff08\u5982\u679c `step={3}`\uff0c\u5219\u5408\u6cd5\u6570\u5b57\u662f `0`,`3`,`6`\uff0c\u4ee5\u6b64\u7c7b\u63a8\uff09 | Number | `1` |\n| ~~range~~ | \u26a0\ufe0f(`@3.0.0+` \u79fb\u9664\u4e86\u6b64\u5c5e\u6027) \u5f53 range \u4e3a true \u65f6\uff0c\u6e32\u67d3\u4e3a\u53cc\u6ed1\u5757, `2.x` \u7248\u672c\u652f\u6301\uff0c\u65b0\u7248\u672c\u901a\u8fc7\u5224\u65ad `value` \u662f\u5426\u4e3a\u6570\u7ec4\u6765\u652f\u6301\u53cc\u6ed1\u5757 | Boolean | `false` |\n| disabled | \u662f\u5426\u7981\u7528 | Boolean | `false` |\n| progress | \u663e\u793a\u6ed1\u52a8\u7684\u8fdb\u5ea6\u6761\uff0c\u8bbe\u4e3a `false` \u4e0d\u663e\u793a\u8fdb\u5ea6\u6761\uff0c\u8bbe\u4e3a\u4e3a\u989c\u8272\u503c\uff0c\u5c06\u8fdb\u5ea6\u6761\u8bbe\u4e3a\u4e0d\u540c\u7684\u989c\u8272 | Boolean/String | `true` |\n| vertical | \u503c\u4e3a `true` \u65f6\uff0c`Slider` \u4e3a\u5782\u76f4\u65b9\u5411\u3002 | Boolean | `false` |\n| tooltip | \u662f\u5426\u663e\u793a\u63d0\u793a\uff0c\u82e5\u8bbe\u7f6e\u4e3a `true` \u63d0\u793a\u59cb\u7ec8\u663e\u793a\uff0c\u82e5\u8bbe\u7f6e\u4e3a `null` \u5c06\u59cb\u7ec8\u4e0d\u663e\u793a\u63d0\u793a\u3002 | Boolean | `false` |\n| onChange | \u503c\u6539\u53d8\u65f6\u89e6\u53d1 | Function(value) | - |"}}]);