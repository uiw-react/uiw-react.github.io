(this["webpackJsonp@example/uiw"]=this["webpackJsonp@example/uiw"]||[]).push([[89],{1306:function(n,a,e){"use strict";e.r(a),a.default='Avatar \u5934\u50cf\n===\n\n\u7528\u6765\u4ee3\u8868\u7528\u6237\u6216\u4e8b\u7269\uff0c\u652f\u6301\u56fe\u7247\u3001\u56fe\u6807\u6216\u5b57\u7b26\u5c55\u793a\u3002\n\n```jsx\nimport { Avatar } from \'uiw\';\n// or\nimport Avatar from \'@uiw/react-avatar\';\n```\n\n## \u57fa\u672c\u7528\u6cd5\n\n\u5934\u50cf\u6709\u56db\u79cd\u5c3a\u5bf8\uff0c\u4e24\u79cd\u5f62\u72b6\u53ef\u9009\u3002\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Avatar, Icon } from \'uiw\';\n\nReactDOM.render(\n  <div>\n    <div style={{ paddingBottom: 20 }}>\n      <Avatar size="large" icon={<Icon type="user"/>} />\n      <Avatar icon="user" />\n      <Avatar size="small" icon="user" />\n      <Avatar size="mini" icon={<Icon type="user"/>} />\n    </div>\n    <div>\n      <Avatar shape="square" size="large" icon="user" />\n      <Avatar shape="square" icon="user" />\n      <Avatar shape="square" size="small" icon="user" />\n      <Avatar shape="square" size="mini" icon="user" />\n    </div>\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n## \u5176\u5b83\u7c7b\u578b\n\n\u652f\u6301\u4e09\u79cd\u7c7b\u578b\uff1aIcon \u4ee5\u53ca\u5b57\u7b26\uff0c\u5176\u4e2d Icon \u548c\u5b57\u7b26\u578b\u53ef\u4ee5\u81ea\u5b9a\u4e49\u56fe\u6807\u989c\u8272\u53ca\u80cc\u666f\u8272\u3002\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Avatar, Icon } from \'uiw\';\n\nReactDOM.render(\n  <div>\n    <Avatar icon={<Icon type="user"/>} />\n    <Avatar>U</Avatar>\n    <Avatar src="https://avatars2.githubusercontent.com/u/1680273?s=40&v=4" />\n    <Avatar style={{ color: \'#f56a00\', backgroundColor: \'#fde3cf\' }}>U</Avatar>\n    <Avatar style={{ backgroundColor: \'#87d068\' }} icon="user" />\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n## \u56fe\u7247\u652f\u6301\n\n\u5728\u7ec4\u4ef6\u4e0a\u4f7f\u7528`onError`\u4e8b\u4ef6\uff0c\u5904\u7406\u663e\u793a\u9519\u8bef\u7684\u56fe\u7247\u3002\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e\n```js\nimport { Avatar, Icon } from \'uiw\';\n\nconst App = () => {\n  const [src, setSrc] = React.useState(\'https://avatars2.githubusercontent.com/ua/1680273?s=40&v=4\')\n  return (\n    <div>\n      <Avatar\n        src=\'https://avatars2.githubusercontent.com/ua/1680273?s=40&v=4\'\n        onError={(e) => {\n          if (e) {\n            e.target.src = \'https://avatars2.githubusercontent.com/u/1680275?s=40&v=4\'\n          }\n          return false;\n        }}\n      />\n      <Avatar\n        src={src}\n        onError={(e) => {\n          if (e) {\n            setSrc(\'https://avatars2.githubusercontent.com/u/1680275?s=40&v=4\');\n          }\n        }}\n      />\n    </div>\n  )\n}\n\nReactDOM.render(\n  <App />\n  ,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n## \u5e26\u5fbd\u6807\u7684\u5934\u50cf\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Avatar, Badge } from \'uiw\';\n\nReactDOM.render(\n  <div>\n    <span style={{ marginRight: 24 }}>\n      <Badge count={1}><Avatar shape="square" icon="user" /></Badge>\n    </span>\n    <span>\n      <Badge dot><Avatar shape="square" icon="user" /></Badge>\n    </span>\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n## Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| icon | \u8bbe\u7f6e\u5934\u50cf\u7684\u56fe\u6807\u7c7b\u578b\uff0c\u53c2\u8003 Icon \u7ec4\u4ef6 | String\u3001ReactNode | - |\n| shape | \u6307\u5b9a\u5934\u50cf\u7684\u5f62\u72b6 `square` \u6b63\u65b9\u5f62\u6216\u8005 `circle` \u5706\t | Enum{\'`circle`\', \'`square`\' } | - |\n| size | \u8bbe\u7f6e\u5934\u50cf\u7684\u5927\u5c0f | Enum{ \'`large`\', \'`small`\',\'`mini`\', \'`default`\' } | `default` |\n| src | \u56fe\u7247\u7c7b\u5934\u50cf\u7684\u8d44\u6e90\u5730\u5740 | String | - |\n| alt | \u89c4\u5b9a\u56fe\u50cf\u7684\u66ff\u4ee3\u6587\u672c | String | - |\n| onError | \u56fe\u7247\u52a0\u8f7d\u5931\u8d25\u7684\u4e8b\u4ef6\uff0c\u8fd4\u56de false \u4f1a\u5173\u95ed\u7ec4\u4ef6\u9ed8\u8ba4\u7684 fallback \u884c\u4e3a | () => boolean | - |\n'}}]);