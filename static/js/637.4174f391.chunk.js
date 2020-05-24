(this["webpackJsonp@example/uiw"]=this["webpackJsonp@example/uiw"]||[]).push([[637],{1971:function(n,e,t){"use strict";t.r(e),e.default='Dropdown \u4e0b\u62c9\u83dc\u5355\n===\n\n\u5411\u4e0b\u5f39\u51fa\u7684\u5217\u8868\u3002\n\n```jsx\nimport { Dropdown } from \'uiw\';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Dropdown, Menu, ButtonGroup, Button, Divider, Icon } from \'uiw\';\n\nconst menu = (\n  <Menu bordered style={{ minWidth: 120 }}>\n    <Menu.Item icon="reload" text="\u91cd\u65b0\u52a0\u8f7d" />\n    <Menu.Item icon="heart-on" text="\u53e6\u5b58\u4e3a" active />\n    <Menu.Item icon="appstore" text="\u5e94\u7528\u5546\u57ce" />\n    <Menu.Item icon="bar-chart" text="\u6708\u7edf\u8ba1\u62a5\u8868" />\n    <Menu.Item icon="setting" text="\u504f\u597d\u8bbe\u7f6e" />\n  </Menu>\n);\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Dropdown menu={menu}>\n          <a href="javascript:void(0)">\n            \u9f20\u6807\u7ecf\u8fc7\u51fa\u73b0\u83dc\u5355 <Icon type="down" />\n          </a>\n        </Dropdown>\n        <Dropdown trigger="click" menu={menu}>\n          <a href="javascript:void(0)">\n            \u70b9\u51fb\u6211\u51fa\u73b0\u4e0b\u62c9\u83dc\u5355 <Icon type="down" />\n          </a>\n        </Dropdown>\n        <Divider />\n        <ButtonGroup style={{ marginRight: 5, display: \'inline-block\' }}>\n          <Button icon="copy">\u70b9\u51fb\u53f3\u8fb9</Button>\n          <Dropdown trigger="click" placement="bottomRight" menu={menu}>\n            <Button icon="more" />\n          </Dropdown>\n        </ButtonGroup>\n        <Dropdown trigger="click" menu={menu}>\n          <Button basic icon="file-text" type="dark">\u6587\u4ef6<Icon type="caret-down" /></Button>\n        </Dropdown>\n      </div>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u88ab\u7981\u7528\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Dropdown, Menu, ButtonGroup, Button } from \'uiw\';\n\nconst menu = (\n  <Menu bordered style={{ maxWidth: 200 }}>\n    <Menu.Item icon="reload" text="\u91cd\u65b0\u52a0\u8f7d" />\n    <Menu.Divider />\n    <Menu.Item icon="heart-on" text="\u53e6\u5b58\u4e3a" active />\n    <Menu.Item icon="appstore" text="\u5e94\u7528\u5546\u57ce" />\n    <Menu.Item icon="bar-chart" text="\u6708\u7edf\u8ba1\u62a5\u8868\u5bfc\u51fa" />\n    <Menu.Item icon="setting" text="\u504f\u597d\u8bbe\u7f6e" />\n  </Menu>\n);\n\nReactDOM.render(\n  <div>\n    <ButtonGroup style={{ marginRight: 5, display: \'inline-block\' }}>\n      <Button disabled icon="copy">\u70b9\u51fb\u53f3\u8fb9</Button>\n      <Dropdown disabled trigger="click" placement="bottomRight" menu={menu}>\n        <Button icon="more" />\n      </Dropdown>\n    </ButtonGroup>\n    <Dropdown disabled menu={menu}>\n      <Button basic type="link"> (\u8d85\u8fde\u63a5\u6837\u5f0f)link </Button>\n    </Dropdown>\n    <Dropdown disabled menu={menu}>\n      <Button type="primary">\u4e3b\u8981\u6309\u94ae</Button>\n    </Dropdown>\n    <Dropdown disabled menu={menu}>\n      <Button type="success">\u6210\u529f\u6309\u94ae</Button>\n    </Dropdown>\n    <Dropdown disabled menu={menu}>\n      <Button type="warning">\u8b66\u544a\u6309\u94ae</Button>\n    </Dropdown>\n    <Dropdown disabled menu={menu}>\n      <Button type="danger">\u9519\u8bef\u6309\u94ae</Button>\n    </Dropdown>\n    <Dropdown disabled menu={menu}>\n      <Button type="light">\u4eae\u6309\u94ae</Button>\n    </Dropdown>\n    <Dropdown disabled menu={menu}>\n      <Button type="dark">\u6697\u6309\u94ae</Button>\n    </Dropdown>\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n### \u5f39\u51fa\u4f4d\u7f6e\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Dropdown, Menu, ButtonGroup, Button } from \'uiw\';\n\nconst menu = (\n  <Menu bordered style={{ maxWidth: 200 }}>\n    <Menu.Item icon="reload" text="\u91cd\u65b0\u52a0\u8f7d" />\n    <Menu.Divider />\n    <Menu.Item icon="heart-on" text="\u53e6\u5b58\u4e3a" active />\n    <Menu.Item icon="appstore" text="\u5e94\u7528\u5546\u57ce" />\n    <Menu.Item icon="bar-chart" text="\u6708\u7edf\u8ba1\u62a5\u8868\u5bfc\u51fa" />\n    <Menu.Item icon="setting" text="\u504f\u597d\u8bbe\u7f6e" />\n  </Menu>\n);\n\nReactDOM.render(\n  <div>\n    <ButtonGroup style={{ marginRight: 5, display: \'inline-block\' }}>\n      <Button icon="copy">top</Button>\n      <Dropdown trigger="click" placement="top" menu={menu}>\n        <Button icon="more" />\n      </Dropdown>\n    </ButtonGroup>\n    <Dropdown menu={menu} trigger="click" placement="topLeft">\n      <Button type="primary">topLeft</Button>\n    </Dropdown>\n    <Dropdown menu={menu} trigger="click" placement="topRight">\n      <Button type="success">topRight</Button>\n    </Dropdown>\n    <Divider />\n    <Dropdown menu={menu} trigger="click" placement="bottomRight">\n      <Button type="light">bottomRight</Button>\n    </Dropdown>\n    <Dropdown menu={menu} trigger="click" placement="bottom">\n      <Button type="warning">bottom</Button>\n    </Dropdown>\n    <Dropdown menu={menu} trigger="click" placement="bottomLeft">\n      <Button type="danger">bottomLeft</Button>\n    </Dropdown>\n    <Dropdown menu={menu} trigger="click" placement="right">\n      <Button type="dark">right</Button>\n    </Dropdown>\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n### \u9009\u62e9\u5668\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Dropdown, Menu, Button, Icon } from \'uiw\';\n\nclass Select extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: props.value,\n      isOpen: false,\n    };\n  }\n  UNSAFE_componentWillReceiveProps(nextProps) {\n    if (nextProps.value !== this.props.value) {\n      this.setState({ value: nextProps.value });\n    }\n  }\n  onVisibleChange(isOpen) {\n    this.setState({ isOpen });\n  }\n  onClick(item) {\n    const { onChange } = this.props;\n    this.setState({ value: item.value, isOpen: false }, () => {\n      onChange && onChange(item);\n    });\n  }\n  render() {\n    const { option } = this.props;\n    const { isOpen, value } = this.state;\n    const label = option.find(item => value === item.value);\n    return (\n      <Dropdown\n        trigger="click"\n        onVisibleChange={this.onVisibleChange.bind(this)}\n        isOpen={isOpen}\n        menu={\n          <Menu bordered style={{ minWidth: 120 }}>\n            {option.map((item, idx) => {\n              const active = value === item.value;\n              return (\n                <Menu.Item active={active} key={idx} text={item.label} onClick={this.onClick.bind(this, item)}/>\n              );\n            })}\n          </Menu>\n        }\n      >\n        <Button type="link">{label.label}<Icon type={isOpen ? \'up\' : \'down\'} /></Button>\n      </Dropdown>\n    )\n  }\n}\n\nconst option = [\n  { label: \'\u5f80\u8fd4\', value: 1 },\n  { label: \'\u5355\u7a0b\', value: 2 },\n  { label: \'\u8054\u7a0b\', value: 3 },\n  { label: \'Nomad\', value: 4 },\n];\n\nconst option2 = [\n  { label: \'\u7ecf\u6d4e\u8231\', value: 1 },\n  { label: \'\u8c6a\u534e\u7ecf\u6d4e\u8231\', value: 2 },\n  { label: \'\u5546\u52a1\u8231\', value: 3 },\n  { label: \'\u5934\u7b49\u8231\', value: 4 },\n];\n\nReactDOM.render(\n  <div>\n    <Select option={option} value={1} onChange={(item) => { console.log(\'item\', item); }} />\n    <Select option={option2} value={2} onChange={(item) => { console.log(\'item\', item); }} />\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n## Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n| -------- | -------- | -------- | -------- |\n| menu | \u83dc\u5355 | [`<Menu>`](#/components/menu) | - |\n| disabled | \u83dc\u5355\u662f\u5426\u7981\u7528 | Boolean | - |\n| trigger[`<OverlayTrigger>`](#/components/overlay-trigger) | \u60ac\u505c/\u70b9\u51fb\u5f39\u51fa\u7a97\u53e3 | Enum{`hover`, `click`, `focus`} | `hover` |\n| placement[`<OverlayTrigger>`](#/components/overlay-trigger) | \u6307\u5b9a\u5f39\u51fa\u6846\u4f4d\u7f6e\uff0c\u652f\u6301 12 \u4e2a\u8bbf\u95ee\u5c55\u793a\u83dc\u5355\u3002 | Enum{} | `bottomLeft` |\n\n\u66f4\u591a\u5c5e\u6027\u6587\u6863\u8bf7\u53c2\u8003 [OverlayTrigger](#/components/overlay-trigger)\u3002'}}]);