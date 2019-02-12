(window.webpackJsonp=window.webpackJsonp||[]).push([[348],{625:function(n,e){n.exports='Tabs 标签页\n===\n\n标签页切换组件，分隔内容上有关联但属于不同类别的数据集合。\n\n```jsx\nimport { Tabs } from \'uiw\';\n```\n\n### 基本用法\n\n基础的、简洁的卡片式标签页。\n\n\x3c!--DemoStart--\x3e \n```js\nconst styl = { backgroundColor: \'#fff\', margin: -15, padding: 10, borderRadius: \'5px 5px 0 0\' };\nclass Demo extends Component {\n  render() {\n    return (\n      <Tabs activeKey="1" style={styl} onTabClick={(tab, key, e) => {\n          console.log("=>", key, tab);\n        }}>\n        <Tabs.Pane label="用户管理" key="1">用户管理</Tabs.Pane>\n        <Tabs.Pane label="配置管理" key="2">配置管理</Tabs.Pane>\n        <Tabs.Pane sequence="fadeIn up" label="角色管理" key="3">角色管理</Tabs.Pane>\n        <Tabs.Pane label="大爷欢乐多" key="4"><div>大爷欢乐多22</div></Tabs.Pane>\n      </Tabs>\n    );\n  }\n}\n```\n\x3c!--End--\x3e\n\n### 行样式\n\n基础的、简洁的卡片式标签页。\n\n\x3c!--DemoStart--\x3e \n```js\nconst styl = { backgroundColor: \'#fff\', margin: -15, padding: 10, borderRadius: \'5px 5px 0 0\' };\nclass Demo extends Component {\n  render() {\n    return (\n      <Tabs type="line" activeKey="1" style={styl} onTabClick={(tab, key, e) => {\n          console.log("=>", key, tab);\n        }}>\n        <Tabs.Pane label="用户管理" key="1">用户管理</Tabs.Pane>\n        <Tabs.Pane disabled label="配置管理" key="2">配置管理</Tabs.Pane>\n        <Tabs.Pane sequence="fadeIn up" label="角色管理" key="3">角色管理</Tabs.Pane>\n        <Tabs.Pane label="大爷欢乐多" key="4"><div>大爷欢乐多22</div></Tabs.Pane>\n      </Tabs>\n    );\n  }\n}\n```\n\x3c!--End--\x3e\n\n### 卡片样式\n\n另一种样式的页签，不提供对应的垂直样式。\n\n\x3c!--DemoStart--\x3e \n```js\nconst styl = { backgroundColor: \'#fff\', margin: -15, padding: 10, borderRadius: \'5px 5px 0 0\' };\nclass Demo extends Component {\n  render() {\n    return (\n      <Tabs type="card" activeKey="1" style={styl} onTabClick={(tab, key, e) => {\n          console.log("=>", key, tab);\n        }}>\n        <Tabs.Pane label="用户管理" key="1">用户管理</Tabs.Pane>\n        <Tabs.Pane label="配置管理" key="2">配置管理</Tabs.Pane>\n        <Tabs.Pane disabled sequence="fadeIn up" label="角色管理" key="3">角色管理</Tabs.Pane>\n        <Tabs.Pane label="大爷欢乐多" key="4"><div>大爷欢乐多22</div></Tabs.Pane>\n      </Tabs>\n    );\n  }\n}\n```\n\x3c!--End--\x3e\n\n\n### 卡片样式\n\n另一种样式的页签，不提供对应的垂直样式。\n\n\x3c!--DemoStart--\x3e \n```js\nconst styl = { backgroundColor: \'#fff\', margin: -15, padding: 10, borderRadius: \'5px 5px 0 0\' };\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activeKey: \'1\',\n    };\n  }\n  render() {\n    const { activeKey } = this.state;\n    return (\n      <div style={styl}>\n        <Tabs\n          type="card"\n          activeKey={activeKey}\n          onTabClick={(activeKey, key, e) => {\n            this.setState({ activeKey });\n          }}\n        >\n          <Tabs.Pane label="用户管理" key="1" />\n          <Tabs.Pane label="配置管理" key="2" />\n          <Tabs.Pane disabled sequence="fadeIn up" label="角色管理" key="3" />\n          <Tabs.Pane label="大爷欢乐多" key="4" />\n        </Tabs>\n        <Divider />\n        {activeKey === \'1\' && (\n          <div>用户管理{activeKey}</div>\n        )}\n        {activeKey === \'2\' && (\n          <div>配置管理{activeKey}</div>\n        )}\n        {activeKey === \'3\' && (\n          <div>角色管理{activeKey}</div>\n        )}\n        {activeKey === \'4\' && (\n          <div>大爷欢乐多{activeKey}</div>\n        )}\n      </div>\n    );\n  }\n}\n```\n\x3c!--End--\x3e\n\n## Tabs.Porps \n\n| 参数 | 说明 | 类型 | 默认值 |\n|------ |-------- |---------- |-------- |\n| type | 页签的基本样式 | Enum{`line`、`card`、`default`} | `default` |\n| activeKey | 当前激活 `tab` 面板的 `key` | String | - |\n| onTabClick | `tab` 被点击的回调 | Function | `(item, key, e)=>{}` |\n\n## Tabs.Pane.Porps \n\n| 参数 | 说明 | 类型 | 默认值 |\n|------ |-------- |---------- |-------- |\n| label | 选项卡标题 | String,Node | - |\n| keys | 对应 activeKey | String,Node | - |\n| disabled | 标签是禁用不可点击 | Boolean | `false` |'}}]);