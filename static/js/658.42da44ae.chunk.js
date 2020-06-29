(this["webpackJsonp@example/uiw"]=this["webpackJsonp@example/uiw"]||[]).push([[658],{1320:function(n,e,t){"use strict";t.r(e),e.default='Tag \u6807\u7b7e\n===\n\n\u8fdb\u884c\u6807\u8bb0\u548c\u5206\u7c7b\u7684\u5c0f\u6807\u7b7e\u3002\n\n```jsx\nimport { Tag } from \'uiw\';\n// or\nimport Tag from \'@uiw/react-tag\';\n```\n\n### \u57fa\u7840\u7528\u6cd5\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Tag, Divider } from \'uiw\';\n\nconst Demo = () => (\n  <div>\n    <Tag title="\u6210\u529f-\u7eff\u8272" color="#28a745" />\n    <Tag title="\u4e3b\u8981-\u84dd\u8272" color="#008EF0" />\n    <Tag title="\u4fe1\u606f-\u9752\u8272" color="#1EABCD" />\n    <Tag title="\u5bfc\u822a-\u85cf\u9752" color="#393E48" />\n    <Divider />\n    <Tag color="#ffc107">\u8b66\u544a-\u9ec4\u8272</Tag>\n    <Tag color="#F95C2B">\u63d0\u9192-\u6a59\u8272</Tag>\n    <Tag color="#dc3545">\u5371\u9669-\u7ea2\u8272</Tag>\n    <Tag>\u9ed8\u8ba4\u989c\u8272</Tag>\n    <Divider />\n    <Tag light color="#28a745">\u6210\u529f-\u7eff\u8272</Tag>\n    <Tag light color="#008EF0">\u4e3b\u8981-\u84dd\u8272</Tag>\n    <Tag light color="#1EABCD">\u4fe1\u606f-\u9752\u8272</Tag>\n    <Tag light color="#393E48">\u5bfc\u822a-\u85cf\u9752</Tag>\n    <Divider />\n    <Tag light color="#ffc107">\u8b66\u544a-\u9ec4\u8272</Tag>\n    <Tag light color="#F95C2B">\u63d0\u9192-\u6a59\u8272</Tag>\n    <Tag light color="#dc3545">\u5371\u9669-\u7ea2\u8272</Tag>\n    <Tag light>\u9ed8\u8ba4\u989c\u8272</Tag>\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u6807\u7b7e\u7981\u7528\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Tag, Divider } from \'uiw\';\n\nconst Demo = () => (\n  <div>\n    <Tag disabled title="\u6210\u529f-\u7eff\u8272" color="#28a745" />\n    <Tag disabled title="\u4e3b\u8981-\u84dd\u8272" color="#008EF0" />\n    <Tag disabled title="\u4fe1\u606f-\u9752\u8272" color="#1EABCD" />\n    <Tag disabled title="\u5bfc\u822a-\u85cf\u9752" color="#393E48" />\n    <Tag disabled color="#ffc107">\u8b66\u544a-\u9ec4\u8272</Tag>\n    <Tag disabled color="#F95C2B">\u63d0\u9192-\u6a59\u8272</Tag>\n    <Tag disabled color="#dc3545">\u5371\u9669-\u7ea2\u8272</Tag>\n    <Tag disabled>\u9ed8\u8ba4\u989c\u8272</Tag>\n    <Divider />\n    <Tag light disabled color="#28a745">\u6210\u529f-\u7eff\u8272</Tag>\n    <Tag light disabled color="#008EF0">\u4e3b\u8981-\u84dd\u8272</Tag>\n    <Tag light disabled color="#1EABCD">\u4fe1\u606f-\u9752\u8272</Tag>\n    <Tag light disabled color="#393E48">\u5bfc\u822a-\u85cf\u9752</Tag>\n    <Tag light disabled color="#ffc107">\u8b66\u544a-\u9ec4\u8272</Tag>\n    <Tag light disabled color="#F95C2B">\u63d0\u9192-\u6a59\u8272</Tag>\n    <Tag light disabled color="#dc3545">\u5371\u9669-\u7ea2\u8272</Tag>\n    <Tag light disabled>\u9ed8\u8ba4\u989c\u8272</Tag>\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u6dfb\u52a0\u56fe\u6807\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Tag, Divider } from \'uiw\';\n\nconst Demo = () => (\n  <div>\n    <Tag title={(\n      <>\n        <Icon type="heart-on" verticalAlign="baseline" /> \u6210\u529f-\u7eff\u8272\n      </>\n    )} color="#28a745" />\n    <Tag color="#1C7CEB"><Icon type="heart-on" verticalAlign="baseline" /> \u9650\u8d2d\u4e00\u4efd</Tag>\n    <Tag color="red"><Icon type="heart-on" verticalAlign="baseline" /> \u80f6\u56ca</Tag>\n    <Divider />\n    <Tag light color="#28a745"><Icon type="heart-on" verticalAlign="baseline" /> \u6210\u529f-\u7eff\u8272</Tag>\n    <Tag light color="#008EF0"><Icon type="heart-on" verticalAlign="baseline" /> \u4e3b\u8981-\u84dd\u8272</Tag>\n    <Tag light color="#dc3545"><Icon type="heart-on" verticalAlign="baseline" /> \u4fe1\u606f-\u7ea2\u8272</Tag>\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u63a7\u5236\u5173\u95ed\u6807\u7b7e\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Tag, Icon } from \'uiw\';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      visible: true,\n      visible1: true,\n    }\n  }\n  onClose(type) {\n    this.setState({\n      [type]: !this.state[type],\n    });\n  }\n  render() { \n    return (\n      <div>\n        <Tag\n          closable\n          onClose={this.onClose.bind(this, \'visible\')}\n          visible={this.state.visible}\n          color="#F95C2B">\u63d0\u9192-\u6a59\u8272</Tag>\n        <Tag\n          closable\n          light\n          visible={this.state.visible1}\n          color="#dc3545"\n          onClose={this.onClose.bind(this, \'visible1\')}\n        >\n            <Icon type="heart-on" verticalAlign="baseline" /> \u4fe1\u606f-\u7ea2\u8272\n        </Tag>\n      </div>\n    );\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u6807\u7b7e\u7ec4\u52a8\u6001\u5220\u9664\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Tag, Button, Icon } from \'uiw\';\n\nlet num = 3;\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      dataTags: [\n        { label: \'\u6a58\u5b50\', value: 1, color: \'#28a745\' },\n        { label: \'\u82f9\u679c\', value: 2, color: \'#F95C2B\' },\n        { label: \'\u6a58\u5b50\', value: 3, color: \'#008EF0\' },\n      ]\n    }\n  }\n  onClose(data) {\n    const dataTags = this.state.dataTags.filter(item => item.value !== data.value);\n    this.setState({ dataTags });\n  }\n  addTag() {\n    const { dataTags } = this.state;\n    num += 1;\n    dataTags.push({\n      label: `\u6a58\u5b50${num}`, value: num, color: \'#28a745\'\n    });\n    this.setState({ dataTags });\n  }\n  render() { \n    const { dataTags } = this.state;\n    return (\n      <div>\n        {dataTags.map((item, idx) => {\n          return (\n            <Tag\n              key={idx}\n              closable\n              onClose={this.onClose.bind(this, item)}\n              visible={this.state.visible}\n              color={item.color}>\n              {item.label}\n            </Tag>\n          )\n        })}\n        <Button style={{ marginLeft: 5, minHeight: 20, padding: 0 }} size="small" onClick={this.addTag.bind(this)}> <Icon type="plus" /> </Button>\n      </div>\n    );\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u70ed\u95e8\u6807\u7b7e\n\n\u9009\u62e9\u4f60\u611f\u5174\u8da3\u7684\u8bdd\u9898\uff0c\u4e0b\u9762\u5b9e\u4f8b\u7c7b\u4f3c CheckBox \u591a\u9009\u3002\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Tag } from \'uiw\';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      dataTags: [\n        { label: \'\u6a58\u5b50\', value: 1, color: \'#008EF0\' },\n        { label: \'\u82f9\u679c\', value: 2, color: \'#008EF0\' },\n        { label: \'\u6a58\u5b50\', value: 3, color: \'#008EF0\' },\n        { label: \'\u5ddd\u83dc\', value: 4, color: \'#008EF0\' },\n      ],\n      values: [1, 2, 3],\n    }\n  }\n  onTagChecked(data) {\n    let { values } = this.state;\n    const isChecked = values.indexOf(data.value) === -1;\n    if(isChecked) {\n      values.push(data.value);\n    } else {\n      values = values.filter(item => item !== data.value);\n    }\n    this.setState({ values });\n  }\n  render() { \n    const { dataTags, values } = this.state;\n    return (\n      <div>\n        {dataTags.map((item, idx) => {\n          const isChecked = values.indexOf(item.value) === -1;\n          return (\n            <Tag\n              onClick={this.onTagChecked.bind(this, item)}\n              key={idx}\n              light={isChecked}\n              bordered={false}\n              color="#008EF0"\n            >\n              {item.label}\n            </Tag>\n          )\n        })}\n      </div>\n    );\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u9009\u62e9\u5668\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```jsx\nimport { Dropdown, Menu, Button, Icon, Input, Checkbox, Tag, Row, Col } from \'uiw\';\n\nclass SelectTag extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: props.value,\n      option: props.option,\n      selectOption: [],\n      isOpen: false,\n    };\n  }\n  componentDidMount() {\n    const { value, option } = this.state;\n    const selectOption = value.map(val => option.find(item => val === item.value)).filter(item => !!item);\n    this.setState({ selectOption });\n  }\n  UNSAFE_componentWillReceiveProps(nextProps) {\n    if (nextProps.value !== this.props.value) {\n      this.setState({ value: nextProps.value });\n    }\n    if (nextProps.option !== this.props.option) {\n      this.setState({ option: nextProps.option });\n    }\n  }\n  onVisibleChange(isOpen) {\n    this.setState({ isOpen });\n  }\n  onClick(item) {\n    this.modifyValue(item.value, item);\n  }\n  modifyValue(itemVal, item) {\n    const { onChange } = this.props;\n    let { value, selectOption } = this.state;\n    const checked = value.includes(itemVal);\n    // let values = [...value];\n    if(!checked) {\n      value.push(itemVal);\n      selectOption.push(item);\n    } else {\n      value = value.filter(v => itemVal !== v);\n      selectOption = selectOption.filter(v => item.value !== v.value);\n    }\n    this.setState({ value: value, selectOption, isOpen: false }, () => {\n      onChange && onChange(value);\n    });\n  }\n  onClose(item, e) {\n    e.stopPropagation();\n    this.modifyValue(item.value, item);\n  }\n  onChange(item, e) {\n    this.modifyValue(item.value);\n  }\n  onSearch(e) {\n    let option = this.state.option;\n    const options = this.props.option.filter(item => item.label.indexOf(e.target.value) > -1);\n    this.setState({ option: options  });\n  }\n  render() {\n    const { placeholder = \'\u8bf7\u9009\u62e9\' } = this.props;\n    const { isOpen, value, option, selectOption } = this.state;\n    return (\n      <Dropdown\n        trigger="click"\n        onVisibleChange={this.onVisibleChange.bind(this)}\n        isOpen={isOpen}\n        menu={\n          <Menu bordered style={{ minWidth: 220, height: 210, overflow: \'auto\' }}>\n            <Menu.Divider\n              title={\n                <Input placeholder="\u8bf7\u8f93\u5165\u5185\u5bb9" onChange={this.onSearch.bind(this)} />\n              }\n            />\n            {option.map((item, idx) => {\n              const active = value.includes(item.value);\n              return (\n                <Menu.Item\n                  key={idx}\n                  text={\n                    <Row gutter={10} justify="space-between">\n                      <Col>\n                        <span style={{ verticalAlign: \'middle\' }}>{item.label}</span>\n                      </Col>\n                      <Col fixed>\n                        {active && <Checkbox checked={active} onChange={this.onChange.bind(this, item)} />}\n                      </Col>\n                    </Row>\n                  }\n                  onClick={this.onClick.bind(this, item)}\n                />\n              );\n            })}\n          </Menu>\n        }\n      >\n        <div style={{ minWidth: 120, maxWidth: 320, padding: 5, border: \'1px solid #c7c8ca\', borderRadius: 3 }}>\n          {selectOption.length === 0 && (\n            <span style={{\n              lineHeight: \'23px\',\n              padding: \'0 4px\',\n            }}>{placeholder}</span>\n          )}\n          {selectOption.map((item, idx) => {\n            const { label, ...itemProps } = item;\n            const props = {\n              style: { margin: 2 },\n              onClose: this.onClose.bind(this, item),\n              key: idx,\n              ...itemProps,\n            }\n            return (\n              <Tag light closable {...props}>{label}</Tag>\n            );\n          })}\n        </div>\n      </Dropdown>\n    )\n  }\n}\n\nconst option = [\n  { label: \'\u53f0\u5317\u5e02, \u4e2d\u56fd\u53f0\u6e7e\', value: 1 },\n  { label: \'\u6d77\u53c2\u5d34, \u4fc4\u7f57\u65af\', value: 2 },\n  { label: \'\u4e09\u4e9a\u5e02, \u4e2d\u56fd\', value: 3, color: \'#dc3545\' },\n  { label: \'\u6210\u90fd\u5e02, \u4e2d\u56fd\', value: 4, color: \'#dc3545\' },\n  { label: \'\u5e03\u62c9\u683c, \u6377\u514b\', value: 5 },\n  { label: \'\u5e03\u62c9\u8fea\u65af\u62c9\u53d1, \u65af\u6d1b\u4f10\u514b\', value: 6 },\n  { label: \'LAX \u6d1b\u6749\u77f6, \u7f8e\u56fd\', value: 7 },\n  { label: \'\u9ec4\u5188\u5e02, \u4e2d\u56fd\', value: 8, color: \'#dc3545\' },\n];\n\nReactDOM.render(\n  <div>\n    <SelectTag placeholder="\u9009\u62e9\u57ce\u5e02" option={option} value={[2, 8]} onChange={(item) => { console.log(\'item\', item); }} />\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n## Tag\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| title | \u6807\u9898\uff0c\u548c `children` \u51e0\u4e4e\u662f\u4e00\u6837\u7684 | String/ReactNode | - |\n| color | \u989c\u8272 | String | `#1C7CEB` |\n| disabled | \u7981\u7528 | Boolean | `false` |\n| light | \u6709\u8fb9\u6846\u7684\u6807\u7b7e | Boolean | `false` |\n| bordered | \u5f53\u8bbe\u7f6e `light={ture}` \u65f6\uff0c\u8d77\u4f5c\u7528\uff0c\u8bbe\u7f6e\u4e3a `false` \u4e0d\u5c55\u793a\u8fb9\u6846\u6837\u5f0f | Boolean | `true` |\n| closable | \u663e\u793a\u5173\u95ed\u6309\u94ae | Boolean | `false` |\n| visible | \u662f\u5426\u663e\u793a\u6807\u7b7e | Boolean | `true` |\n| onClose | \u5173\u95ed\u65f6\u7684\u56de\u8c03 | Function | - |\n'}}]);