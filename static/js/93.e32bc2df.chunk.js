(this["webpackJsonp@example/uiw"]=this["webpackJsonp@example/uiw"]||[]).push([[93],{1326:function(t,n,o){"use strict";o.r(n),n.default='Button \u6309\u94ae\n===\n\n\u6309\u94ae\u7528\u4e8e\u5f00\u59cb\u4e00\u4e2a\u5373\u65f6\u64cd\u4f5c\uff0c\u89e6\u53d1\u4e1a\u52a1\u903b\u8f91\u65f6\u4f7f\u7528\u3002\n\n```jsx\nimport { Button, ButtonGroup } from \'uiw\';\n// or\nimport Button from \'@uiw/react-button\';\nimport ButtonGroup from \'@uiw/react-button-group\';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Button, Divider, Icon } from \'uiw\';\n\nReactDOM.render(\n  <div>\n    <Button type="primary">\u4e3b\u8981\u6309\u94ae</Button>\n    <Button type="success">\u6210\u529f\u6309\u94ae</Button>\n    <Button type="warning">\u8b66\u544a\u6309\u94ae</Button>\n    <Button type="danger">\u9519\u8bef\u6309\u94ae</Button>\n    <Button type="light">\u4eae\u6309\u94ae</Button>\n    <Button type="dark">\u6697\u6309\u94ae</Button>\n    <Divider />\n    <Button basic type="primary">\u4e3b\u8981\u6309\u94ae</Button>\n    <Button basic type="success">\u6210\u529f\u6309\u94ae</Button>\n    <Button basic type="warning">\u8b66\u544a\u6309\u94ae</Button>\n    <Button basic type="danger">\u9519\u8bef\u6309\u94ae</Button>\n    <Button basic type="light">\u4eae\u6309\u94ae</Button>\n    <Button basic type="dark">\u6697\u6309\u94ae</Button>\n    <Divider />\n    <Button>Normal</Button>\n    <Button disabled>Disabled</Button>\n    <Button type="primary" active>Button</Button>\n    <Button type="primary" size="small">more <Icon type="down" /></Button>\n    <Button type="link"> (\u8d85\u8fde\u63a5\u6837\u5f0f)link </Button>\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n### \u6309\u94ae\u7ec4\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Button, Divider, ButtonGroup } from \'uiw\';\n\nReactDOM.render(\n  <div>\n    <ButtonGroup>\n      <Button type="primary">\u4e3b\u8981\u6309\u94ae</Button>\n      <Button type="success">\u6210\u529f\u6309\u94ae</Button>\n      <Button type="warning">\u8b66\u544a\u6309\u94ae</Button>\n      <Button type="danger">\u9519\u8bef\u6309\u94ae</Button>\n      <Button type="light">\u4eae\u6309\u94ae</Button>\n      <Button type="dark">\u6697\u6309\u94ae</Button>\n    </ButtonGroup>\n    <ButtonGroup style={{ marginTop: 5 }}>\n      <Button size="small" type="primary">\u6309\u94ae</Button>\n      <Button size="small" type="primary">\u6309\u94ae</Button>\n      <Button size="small" type="primary">\u6309\u94ae</Button>\n      <Button size="small" type="primary">\u6309\u94ae</Button>\n    </ButtonGroup>\n    <ButtonGroup style={{ marginTop: 5 }}>\n      <Button type="light">\u6309\u94ae</Button>\n      <Button type="light">\u6309\u94ae</Button>\n      <Button type="light">\u6309\u94ae</Button>\n      <Button type="light">\u6309\u94ae</Button>\n    </ButtonGroup>\n    <Divider style={{ maxWidth: 220 }}>\u6dfb\u52a0\u56fe\u6807</Divider>\n    <ButtonGroup>\n      <Button icon="copy" type="primary">\u590d\u5236</Button>\n      <Button icon="delete" type="success">\u5220\u9664</Button>\n      <Button icon="file-add" type="warning">\u6dfb\u52a0\u6587\u4ef6</Button>\n      <Button icon="map" type="danger">\u5730\u56fe</Button>\n      <Button icon="linux" type="light">Linux</Button>\n      <Button icon="apple" type="dark">Apple</Button>\n    </ButtonGroup>\n    <ButtonGroup style={{ marginTop: 5 }}>\n      <Button icon="copy" type="primary">\u590d\u5236</Button>\n      <Button icon="delete" type="primary">\u5220\u9664</Button>\n      <Button icon="file-add" type="primary">\u6dfb\u52a0\u6587\u4ef6</Button>\n      <Button icon="map" type="primary">\u5730\u56fe</Button>\n      <Button icon="linux" type="primary">Linux</Button>\n      <Button icon="apple" type="primary">Apple</Button>\n    </ButtonGroup>\n    <ButtonGroup style={{ marginTop: 5 }}>\n      <Button icon="copy">\u590d\u5236</Button>\n      <Button icon="delete">\u5220\u9664</Button>\n      <Button icon="file-add">\u6dfb\u52a0\u6587\u4ef6</Button>\n      <Button icon="map">\u5730\u56fe</Button>\n      <Button icon="linux">Linux</Button>\n      <Button icon="apple">Apple</Button>\n    </ButtonGroup>\n    <ButtonGroup style={{ marginTop: 5 }}>\n      <Button icon="copy" />\n      <Button icon="delete" />\n      <Button icon="file-add" />\n      <Button icon="map" />\n      <Button icon="linux" />\n      <Button icon="apple" />\n    </ButtonGroup>\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n### \u56fe\u6807\u6309\u94ae\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Button, Icon, Divider } from \'uiw\';\n\nconst chat = <svg width="20" height="20" viewBox="0 0 20 20"> <path d="M19 0H7c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h5.59l3.71 3.71c.17.18.42.29.7.29.55 0 1-.45 1-1v-3h1c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM7 13c-1.1 0-2-.9-2-2V4H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h1v3a1.003 1.003 0 0 0 1.71.71L7.41 16H13c.55 0 1-.45 1-1v-.17L12.17 13H7z" fillRule="evenodd" /> </svg>;\nconst open = <svg width="12" height="16" style={{ height: 16 }}> <path fillRule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z" /> </svg>;\nconst merged = <svg width="12" height="16" viewBox="0 0 12 16" style={{ height: 16 }}> <path fillRule="evenodd" d="M10 7c-.73 0-1.38.41-1.73 1.02V8C7.22 7.98 6 7.64 5.14 6.98c-.75-.58-1.5-1.61-1.89-2.44A1.993 1.993 0 0 0 2 .99C.89.99 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2a1.993 1.993 0 0 0 1-3.72V7.67c.67.7 1.44 1.27 2.3 1.69.86.42 2.03.63 2.97.64v-.02c.36.61 1 1.02 1.73 1.02 1.11 0 2-.89 2-2 0-1.11-.89-2-2-2zm-6.8 6c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm8 6c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z" /> </svg>;\nconst closed = <svg viewBox="0 0 16 16" width="16" height="16"> <path fillRule="evenodd" d="M7 10h2v2H7v-2zm2-6H7v5h2V4zm1.5 1.5l-1 1L12 9l4-4.5-1-1L12 7l-1.5-1.5zM8 13.7A5.71 5.71 0 0 1 2.3 8c0-3.14 2.56-5.7 5.7-5.7 1.83 0 3.45.88 4.5 2.2l.92-.92A6.947 6.947 0 0 0 8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7l-1.52 1.52c-.66 2.41-2.86 4.19-5.48 4.19v-.01z" /> </svg>;\n\nReactDOM.render(\n  <div>\n    <Button icon="weibo" type="primary">\u4e3b\u8981\u6309\u94ae</Button>\n    <Button icon="chrome" type="success">\u6210\u529f\u6309\u94ae</Button>\n    <Button icon="taobao" type="warning">\u8b66\u544a\u6309\u94ae</Button>\n    <Button icon="weibo" type="danger" />\n    <Button type="danger">\n      <Icon type="reload" spin={true} />\n      <span>\u9519\u8bef<span>\u6309\u94ae</span></span>\n      <Icon type="weibo" />\n    </Button>\n    <Button icon="chrome" type="light">\u4eae\u6309\u94ae</Button>\n    <Button icon="apple" type="dark">\u6697\u6309\u94ae</Button>\n    <Button icon={chat} type="dark">\u6697\u6309\u94ae</Button>\n    <Divider style={{ maxWidth: 220 }}>GitHub</Divider>\n    <Button icon={open} type="success">Open</Button>\n    <Button icon={merged} type="light" style={{ backgroundColor: \'#6f42c1\', color: \'#fff\' }}>Merged</Button>\n    <Button icon={closed} type="danger">Closed</Button>\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n### \u6309\u94ae\u52a0\u8f7d\u72b6\u6001\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Button, Icon, Divider } from \'uiw\';\n\nReactDOM.render(\n  <div>\n    <Button type="danger">\n      <Icon type="reload" spin={true} />\n      <span>\u9519\u8bef<span>\u6309\u94ae</span></span>\n      <Icon type="weibo" />\n    </Button>\n    <Button loading type="primary">\u4e3b\u8981\u6309\u94ae</Button>\n    <Button loading type="success">\u6210\u529f\u6309\u94ae</Button>\n    <Button loading type="warning">\u8b66\u544a\u6309\u94ae</Button>\n    <Button loading type="danger">\u9519\u8bef\u6309\u94ae</Button>\n    <Button loading type="light">\u4eae\u6309\u94ae</Button>\n    <Button loading type="dark">\u6697\u6309\u94ae</Button>\n    <Button loading type="danger">\u4eae\u6309\u94ae</Button>\n    <Divider style={{ maxWidth: 220 }}>Size</Divider>\n    <Button loading size="small" type="primary">\u4e3b\u8981\u6309\u94ae</Button>\n    <Button loading size="default" type="success">\u6210\u529f\u6309\u94ae</Button>\n    <Button loading size="large" type="warning">\u8b66\u544a\u6309\u94ae</Button>\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n### \u7981\u7528\u6309\u94ae\u7ec4\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Button, ButtonGroup, Divider } from \'uiw\';\n\nReactDOM.render(\n  <div>\n    <ButtonGroup>\n      <Button disabled type="primary">\u4e3b\u8981\u6309\u94ae</Button>\n      <Button disabled type="success">\u6210\u529f\u6309\u94ae</Button>\n      <Button disabled type="warning">\u8b66\u544a\u6309\u94ae</Button>\n      <Button disabled type="danger">\u9519\u8bef\u6309\u94ae</Button>\n      <Button disabled type="light">\u4eae\u6309\u94ae</Button>\n      <Button disabled type="dark">\u6697\u6309\u94ae</Button>\n    </ButtonGroup>\n    <ButtonGroup style={{ marginTop: 5 }}>\n      <Button disabled type="primary">\u6309\u94ae</Button>\n      <Button disabled type="primary">\u6309\u94ae</Button>\n      <Button disabled type="primary">\u6309\u94ae</Button>\n      <Button disabled type="primary">\u6309\u94ae</Button>\n    </ButtonGroup>\n    <ButtonGroup style={{ marginTop: 5 }}>\n      <Button disabled type="light">\u6309\u94ae</Button>\n      <Button disabled type="light">\u6309\u94ae</Button>\n      <Button type="light">\u6309\u94ae</Button>\n      <Button disabled type="light">\u6309\u94ae</Button>\n    </ButtonGroup>\n    <Divider style={{ maxWidth: 220 }}>\u6dfb\u52a0\u56fe\u6807</Divider>\n    <ButtonGroup>\n      <Button disabled icon="copy" type="primary">\u590d\u5236</Button>\n      <Button disabled icon="delete" type="success">\u5220\u9664</Button>\n      <Button disabled icon="file-add" type="warning">\u6dfb\u52a0\u6587\u4ef6</Button>\n      <Button disabled icon="map" type="danger">\u5730\u56fe</Button>\n      <Button disabled icon="linux" type="light">Linux</Button>\n      <Button disabled icon="apple" type="dark">Apple</Button>\n    </ButtonGroup>\n    <ButtonGroup style={{ marginTop: 5 }}>\n      <Button disabled icon="copy" type="primary">\u590d\u5236</Button>\n      <Button disabled icon="delete" type="primary">\u5220\u9664</Button>\n      <Button icon="file-add" type="primary">\u6dfb\u52a0\u6587\u4ef6</Button>\n      <Button disabled icon="map" type="primary">\u5730\u56fe</Button>\n      <Button disabled icon="linux" type="primary">Linux</Button>\n      <Button disabled icon="apple" type="primary">Apple</Button>\n    </ButtonGroup>\n    <ButtonGroup style={{ marginTop: 5 }}>\n      <Button disabled icon="copy">\u590d\u5236</Button>\n      <Button disabled icon="delete">\u5220\u9664</Button>\n      <Button disabled icon="file-add">\u6dfb\u52a0\u6587\u4ef6</Button>\n      <Button disabled icon="map">\u5730\u56fe</Button>\n      <Button disabled icon="linux">Linux</Button>\n      <Button disabled icon="apple">Apple</Button>\n    </ButtonGroup>\n    <div style={{ marginTop: 5 }}>\n      <Button disabled icon="weibo" basic type="primary" />\n      <Button disabled icon="chrome" basic type="success" />\n      <Button disabled icon="taobao" basic type="warning" />\n      <Button disabled icon="apple" basic type="danger" />\n      <Button disabled icon="weibo" basic type="dark" />\n    </div>\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n### \u5782\u76f4\u6309\u94ae\u7ec4\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Button, ButtonGroup, Row, Col } from \'uiw\';\n\nReactDOM.render(\n  <Row gutter={10}>\n    <Col style={{ maxWidth: 120 }}>\n      <ButtonGroup vertical>\n        <Button type="primary">\u6309\u94ae</Button>\n        <Button type="primary">\u6309\u94ae</Button>\n        <Button type="primary">\u6309\u94ae</Button>\n        <Button type="primary">\u6309\u94ae</Button>\n      </ButtonGroup>\n    </Col>\n    <Col style={{ maxWidth: 120 }}>\n      <ButtonGroup vertical>\n        <Button type="success">\u6309\u94ae</Button>\n        <Button disabled type="success">\u6309\u94ae</Button>\n        <Button type="success">\u6309\u94ae</Button>\n        <Button type="success">\u6309\u94ae</Button>\n      </ButtonGroup>\n    </Col>\n    <Col style={{ maxWidth: 120 }}>\n      <ButtonGroup vertical>\n        <Button type="light">\u6309\u94ae</Button>\n        <Button type="light">\u6309\u94ae</Button>\n        <Button type="light">\u6309\u94ae</Button>\n        <Button type="light">\u6309\u94ae</Button>\n      </ButtonGroup>\n    </Col>\n    <Col style={{ maxWidth: 120 }}>\n      <ButtonGroup vertical>\n        <Button type="primary">\u4e3b\u8981\u6309\u94ae</Button>\n        <Button type="success">\u6210\u529f\u6309\u94ae</Button>\n        <Button type="warning">\u8b66\u544a\u6309\u94ae</Button>\n        <Button type="danger">\u9519\u8bef\u6309\u94ae</Button>\n        <Button type="light">\u4eae\u6309\u94ae</Button>\n        <Button type="dark">\u6697\u6309\u94ae</Button>\n      </ButtonGroup>\n    </Col>\n  </Row>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n### \u57fa\u672c\u6309\u94ae\n\n\u8bbe\u7f6e `basic=true` \u5373\u53ef\u83b7\u5f97\u57fa\u672c\u6309\u94ae\uff0c\u6ca1\u6709\u80cc\u666f\u989c\u8272\u7684\u72b6\u6001\u6309\u94ae\u3002\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Button, Divider } from \'uiw\';\n\nReactDOM.render(\n  <div>\n    <Button basic type="primary">\u4e3b\u8981\u6309\u94ae</Button>\n    <Button basic type="success">\u6210\u529f\u6309\u94ae</Button>\n    <Button basic type="warning">\u8b66\u544a\u6309\u94ae</Button>\n    <Button basic type="danger">\u9519\u8bef\u6309\u94ae</Button>\n    <Button basic type="light">\u4eae\u6309\u94ae</Button>\n    <Button basic type="dark">\u6697\u6309\u94ae</Button>\n    <Divider style={{ maxWidth: 220 }}>\u6fc0\u6d3b</Divider>\n    <Button basic active type="primary">\u4e3b\u8981\u6309\u94ae</Button>\n    <Button basic active type="success">\u6210\u529f\u6309\u94ae</Button>\n    <Button basic active type="warning">\u8b66\u544a\u6309\u94ae</Button>\n    <Button basic active type="danger">\u9519\u8bef\u6309\u94ae</Button>\n    <Button basic active type="light">\u4eae\u6309\u94ae</Button>\n    <Button basic active type="dark">\u6697\u6309\u94ae</Button>\n    <Divider style={{ maxWidth: 220 }}>\u7981\u7528</Divider>\n    <Button basic disabled type="primary">\u4e3b\u8981\u6309\u94ae</Button>\n    <Button basic disabled type="success">\u6210\u529f\u6309\u94ae</Button>\n    <Button basic disabled type="warning">\u8b66\u544a\u6309\u94ae</Button>\n    <Button basic disabled type="danger">\u9519\u8bef\u6309\u94ae</Button>\n    <Button basic disabled type="light">\u4eae\u6309\u94ae</Button>\n    <Button basic disabled type="dark">\u6697\u6309\u94ae</Button>\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n### \u57fa\u7840\u6309\u94ae\u6dfb\u52a0\u56fe\u6807\n\n\u8bbe\u7f6e `basic=true` \u5373\u53ef\u83b7\u5f97\u57fa\u672c\u6309\u94ae\uff0c\u6ca1\u6709\u80cc\u666f\u989c\u8272\u7684\u72b6\u6001\u6309\u94ae\u3002\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Button, Divider } from \'uiw\';\n\nconst chat = (\n  <svg width="20" height="20" viewBox="0 0 20 20">\n    <path d="M19 0H7c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h5.59l3.71 3.71c.17.18.42.29.7.29.55 0 1-.45 1-1v-3h1c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM7 13c-1.1 0-2-.9-2-2V4H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h1v3a1.003 1.003 0 0 0 1.71.71L7.41 16H13c.55 0 1-.45 1-1v-.17L12.17 13H7z" fillRule="evenodd" />\n  </svg>\n)\n\nReactDOM.render(\n  <div>\n    <Button icon="weibo" basic type="primary">\u4e3b\u8981\u6309\u94ae</Button>\n    <Button icon="chrome" basic type="success">\u6210\u529f\u6309\u94ae</Button>\n    <Button icon="taobao" basic type="warning">\u8b66\u544a\u6309\u94ae</Button>\n    <Button icon="apple" basic type="danger">\u9519\u8bef\u6309\u94ae</Button>\n    <Button icon="weibo" basic type="dark">\u6697\u6309\u94ae</Button>\n    <Divider />\n    <Button icon="weibo" basic type="primary" />\n    <Button icon="chrome" basic type="success" />\n    <Button icon="taobao" basic type="warning" />\n    <Button icon="apple" basic type="danger" />\n    <Button icon="weibo" basic type="dark" />\n    <Button icon="weibo" basic type="dark" />\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n### \u6fc0\u6d3b\u6309\u94ae\u6837\u5f0f\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Button } from \'uiw\';\n\nReactDOM.render(\n  <div>\n    <Button active type="primary">\u4e3b\u8981\u6309\u94ae</Button>\n    <Button active type="success">\u6210\u529f\u6309\u94ae</Button>\n    <Button active type="warning">\u8b66\u544a\u6309\u94ae</Button>\n    <Button active type="danger">\u9519\u8bef\u6309\u94ae</Button>\n    <Button active type="light">\u4eae\u6309\u94ae</Button>\n    <Button active type="dark">\u6697\u6309\u94ae</Button>\n    <Button active type="link"> (\u8d85\u8fde\u63a5\u6837\u5f0f)link </Button>\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n### \u7981\u7528\u6309\u94ae\u6837\u5f0f\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Button } from \'uiw\';\n\nReactDOM.render(\n  <div>\n    <Button disabled type="primary">\u4e3b\u8981\u6309\u94ae</Button>\n    <Button disabled type="success">\u6210\u529f\u6309\u94ae</Button>\n    <Button disabled type="warning">\u8b66\u544a\u6309\u94ae</Button>\n    <Button disabled type="danger">\u9519\u8bef\u6309\u94ae</Button>\n    <Button disabled type="light">\u4eae\u6309\u94ae</Button>\n    <Button disabled type="dark">\u6697\u6309\u94ae</Button>\n    <Button disabled type="link"> (\u8d85\u8fde\u63a5\u6837\u5f0f)link </Button>\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n\n### block\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Button, Row, Col } from \'uiw\';\n\nReactDOM.render(\n  <Row gutter={10}>\n    <Col style={{ maxWidth: 320 }}>\n      <Button block type="primary">\u4e3b\u8981\u6309\u94ae</Button>\n      <Button block type="success">\u6210\u529f\u6309\u94ae</Button>\n      <Button block type="warning">\u8b66\u544a\u6309\u94ae</Button>\n      <Button block type="danger">\u9519\u8bef\u6309\u94ae</Button>\n      <Button block type="light">\u4eae\u6309\u94ae</Button>\n      <Button block type="dark">\u6697\u6309\u94ae</Button>\n    </Col>\n  </Row>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n### size\u5927\u5c0f\n\n`size` \u5728 `Button.Group`\u4e0b\u9762\u4e0d\u652f\u6301\u3002\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Button, Divider } from \'uiw\';\n\nReactDOM.render(\n  <div>\n    <Button size="small" type="primary">\u4e3b\u8981\u6309\u94ae</Button>\n    <Button size="default" type="success">\u6210\u529f\u6309\u94ae</Button>\n    <Button size="large" type="warning">\u8b66\u544a\u6309\u94ae</Button>\n    <Button size="small" type="danger">\u9519\u8bef\u6309\u94ae</Button>\n    <Button size="default" type="light">\u4eae\u6309\u94ae</Button>\n    <Button size="large" type="dark">\u6697\u6309\u94ae</Button>\n    <Divider />\n    <Button icon="weibo" size="small" type="primary">\u5fae\u535a</Button>\n    <Button icon="chrome" size="small" type="success">\u8c37\u6b4c\u6d4f\u89c8\u5668</Button>\n    <Button icon="chrome" type="success">\u8c37\u6b4c\u6d4f\u89c8\u5668</Button>\n    <Button icon="apple" size="large" type="warning">\u6dd8\u5b9d</Button>\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n## Props\n\n### Button\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n| -------- | -------- | -------- | -------- |\n| size | \u6309\u94ae\u5c3a\u5bf8 | Enum{`large`, `default`, `small`} | `default` |\n| type | \u6309\u94ae\u72b6\u6001\u7c7b\u578b\u9644\u5e26\u989c\u8272 | Enum{`primary`, `success`, `warning`, `danger`, `light`, `dark`, `link`} | `light` |\n| htmlType | \u8bbe\u7f6e `button` \u539f\u751f\u7684 `type` \u503c\uff0c\u53ef\u9009\u503c\u8bf7\u53c2\u8003 [HTML \u6807\u51c6](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | String | `button` |\n| icon | \u8bbe\u7f6e\u6309\u94ae\u7684\u56fe\u6807\u7c7b\u578b | String/ReactNode | - |\n| block | \u901a\u8fc7\u8bbe\u7f6e\u5c5e\u6027 `block` \u53ef\u5c06\u6309\u94ae\u5bbd\u5ea6\u8bbe\u7f6e\u4e3a 100%\uff0c\uff08\u5757\u7ea7\u5143\u7d20\uff09\uff0c\u5e38\u7528\u4e8e\u5f39\u7a97\u5185\u64cd\u4f5c\u6309\u94ae\u3002 | Boolean | false |\n| disabled | \u7981\u7528\u72b6\u6001 | Boolean | false |\n| active | \u6fc0\u6d3b\u72b6\u6001\uff0c\u5176\u8868\u73b0\u4e3a\u88ab\u6309\u538b\u4e0b\u53bb\uff08\u5e95\u8272\u66f4\u6df1\u3001\u8fb9\u6846\u591c\u8272\u66f4\u6df1\u3001\u5411\u5185\u6295\u5c04\u9634\u5f71\uff09\u3002 | Boolean | false |\n| loading | \u52a0\u8f7d\u4e2d\u72b6\u6001 | Boolean | false |\n\n### Button.Group\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n| -------- | -------- | -------- | -------- |\n| vertical | \u7ad6\u6392\u5217 | Boolean | `false` |'}}]);