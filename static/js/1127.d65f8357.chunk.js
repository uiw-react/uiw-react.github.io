"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1127],{51127:function(n,e,o){o.r(e),e.default="Color \u8272\u5f69\n===\n\n## \u4e3b\u8981\u989c\u8272\n\n\u4e3b\u8272\u4ee5\u8c61\u5f81\u5e7f\u9614\u6d77\u6d0b\u7684\u6e56\u84dd\u8272\u4f5c\u4e3a\u4e3b\u8272\u8c03\uff0c\u5b83\u7ed9\u4eba\u4ee5\u5e74\u8f7b\u3001\u9c9c\u660e\u3001\u6e05\u723d\u7684\u5f62\u8c61\u591a\u5c55\u73b0\u51fa\u6765\uff0c\u6e56\u84dd\u8272\u662f\u4e00\u79cd\u7eaf\u6d01\u7684\u989c\u8272\uff0c\u8c61\u5f81\u7740\u5927\u6d77\u3002\n\uff08 \u53d6\u8272\u542b\u4e49\uff1a\u6211\u4eec\u81f4\u529b\u4e8e\u521b\u65b0\uff0c\u79ef\u6781\u5e76\u4e14\u4e0d\u65ad\u52aa\u529b\uff0c\u8fd9\u6b63\u662f\u6211\u4eec\u56e2\u961f\u7684\u7cbe\u795e\u8ffd\u6c42\u3002\uff09\n\n\x3c!--rehype:bgWhite=true&noCode=true&bordered=false--\x3e\n```js\nconst colors = [\n  { name: 'Light Blue', cn: '\u4e3b\u8981-\u6d45\u84dd\u8272', color: '#5BB5F4', des: '\u901a\u5e38\u7528\u4e8e\u6309\u94ae\u3001\u53ca\u4efb\u4f55\u4fee\u9970\u5143\u7d20', },\n  { name: 'Blue', cn: '\u4e3b\u8981-\u84dd\u8272', color: '#2EA3F4', des: '\u901a\u5e38\u7528\u4e8e\u6309\u94ae\u3001\u53ca\u4efb\u4f55\u4fee\u9970\u5143\u7d20', },\n  { name: 'Dark Blue', cn: '\u4e3b\u8981-\u6df1\u84dd\u8272', color: '#008EF0', des: '\u901a\u5e38\u7528\u4e8e\u6309\u94ae\u3001\u53ca\u4efb\u4f55\u4fee\u9970\u5143\u7d20', },\n];\nconst styles = {\n  flex: 1, height: 63, maxWidth: 120, color: '#fff', textAlign: 'center',\n  display: 'flex', justifyContent: 'center', flexDirection: 'column',\n};\nconst Demo = () => (\n  <div style={{display: 'flex', flexWrap: 'wrap'}}>\n    {colors.map((item, idx) => {\n      return (\n        <div key={idx} style={{ background: item.color, ...styles }}>\n          <div>{item.name}</div>\n          <div>{item.color}</div>\n        </div>\n      );\n    })}\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\n## \u8f85\u52a9\u989c\u8272\n\n\u8fd9\u4e9b\u4eae\u4e3d\u7684\u8f85\u52a9\u8272\u591a\u7528\u4e8e\u6309\u94ae\uff0c\u63d0\u793a\uff0c\u8b66\u544a\u7b49\u4fee\u9970\u5143\u7d20\uff0c\u4ee5\u53ca\u4e00\u4e9b\u4fa7\u8fb9\u4fee\u9970\u7684\u5143\u7d20\u4e0a\u3002\n\n\x3c!--rehype:bgWhite=true&noCode=true&bordered=false--\x3e\n```js\nconst colors = [\n  { name: 'Green', cn: '\u6210\u529f-\u7eff\u8272', color: '#28a745' },\n  { name: 'Blue', cn: '\u4e3b\u8981-\u84dd\u8272', color: '#008EF0' },\n  { name: 'Cyan', cn: '\u4fe1\u606f-\u9752\u8272', color: '#1EABCD' },\n  { name: 'Navy', cn: '\u5bfc\u822a-\u85cf\u9752', color: '#393E48' },\n  { name: 'Yellow', cn: '\u8b66\u544a-\u9ec4\u8272', color: '#ffc107' },\n  { name: 'Orange', cn: '\u63d0\u9192-\u6a59\u8272', color: '#F95C2B' },\n  { name: 'Red', cn: '\u5371\u9669-\u7ea2\u8272', color: '#dc3545' },\n];\nconst styles = {\n  position: 'relative', minWidth: 80,\n  flex: 1, height: 83, color: '#fff', textAlign: 'center',\n  display: 'flex', flexDirection: 'column', justifyContent: 'center',\n};\nconst Demo = () => (\n  <div style={{display: 'flex', flexWrap: 'wrap'}}>\n    {colors.map((item, idx) => {\n      return (\n        <div key={idx} style={{ background: item.color, ...styles }}>\n          <div style={{position: 'absolute', top: 3, left: 5, fontSize: 12, color: 'rgba(255, 255, 255, 0.65)'}}>{item.color}</div>\n          <div>{item.name}</div>\n          <div>{item.cn}</div>\n        </div>\n      );\n    })}\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\n## \u6781\u7b80\u4e2d\u6027\u8272\n\n\u6781\u7b80\u4e2d\u6027\u8272\u662f\u767d\u8272\u4ece\u7070\u8272\u518d\u5230\u6df1\u7070\u8272\u7684\u4e00\u4e2a\u8fc7\u6e21\u989c\u8272\uff0c\u53ef\u4ee5\u642d\u914d\u6587\u5b57\u4ee5\u53ca\u4efb\u4f55\u5143\u7d20\uff0c\u4ee5\u8fd9\u79cd\u8272\u8c03\u6765\u7f13\u89e3\u89c6\u89c9\u75b2\u52b3\uff0c\u4f4e\u8c03\u5185\u655b\uff01\n\n\x3c!--rehype:bgWhite=true&noCode=true&bordered=false--\x3e\n```js\nconst colors = [\n  { name: '\u767d\u8272', color: '#FFFFFF', fontColor: '#6F6F6F' },\n  { name: '\u80cc\u666f', color: '#F6F6F6', fontColor: '#6F6F6F' },\n  { name: '\u5206\u5272\u7ebf', color: '#F2F2F2', fontColor: '#6F6F6F' },\n  { name: '\u8fb9\u6846', color: '#EEEEEE', fontColor: '#6F6F6F' },\n  { name: '\u5931\u6548', color: '#EAEAEA', fontColor: '#6F6F6F' },\n  { name: '\u8f85\u52a9', color: '#DDDDDD', fontColor: '#6F6F6F' },\n  { name: '\u6b63\u6587', color: '#C2C2C2' },\n  { name: '\u56fe\u6807', color: '#B9B9B9' },\n  { name: '\u6587\u672c', color: '#A5A5A5' },\n  { name: '\u6807\u9898', color: '#6E6E6E' },\n];\nconst Demo = () => (\n  <div style={{display: 'flex', flexWrap: 'wrap'}}>\n    {colors.map((item, idx) => {\n      const styles = {\n        flex: 1, height: 63, color: '#fff', textAlign: 'center', minWidth: 80,\n        flexDirection: 'column', display: 'flex', justifyContent: 'center',\n      }\n      if (item.fontColor) {\n        styles.color = item.fontColor;\n      }\n      return (\n        <div key={idx} style={{ background: item.color, ...styles }}>\n          <div>{item.name}</div>\n          <div>{item.color}</div>\n        </div>\n      );\n    })}\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\n## \u80cc\u666f\u8272\n\n\u8fd9\u5185\u7f6e\u7684\u51e0\u79cd\u989c\u8272\u53ef\u4ee5\u7528\u4e8e\u5404\u79cd\u5143\u7d20\u4e2d\uff0c\u6bd4\u5982\uff1a\u5bfc\u822a\uff0c\u6309\u94ae\uff0c\u5fbd\u7ae0\u7b49\u80cc\u666f\u4e2d\u3002\n\n\x3c!--rehype:bgWhite=true&noCode=true&bordered=false--\x3e\n```js\nconst colors = [\n  { name: '\u8b66\u544a-\u9ec4\u8272', backgroundColor: '#ffc107', des: 'warning', },\n  { name: '\u63d0\u9192-\u6a59\u8272', backgroundColor: '#F95C2B', des: 'remind', },\n  { name: '\u5371\u9669-\u7ea2\u8272', backgroundColor: '#dc3545', des: 'danger', },\n  { name: '\u5bfc\u822a-\u85cf\u9752', backgroundColor: '#393E48', des: 'NavMenu', },\n  { name: '\u4e3b\u8981-\u84dd\u8272', backgroundColor: '#2EA3F4', des: 'Primary', },\n  { name: '\u6210\u529f-\u7eff\u8272', backgroundColor: '#09C62C', des: 'success', },\n  { name: '\u80cc\u666f-\u4e2d\u7070', backgroundColor: '#EAEAEA', des: 'background', color: '#6F6F6F' },\n];\nconst Demo = () => (\n  <div style={{display: 'flex', flexWrap: 'wrap'}}>\n    {colors.map((item, idx) => {\n      const styles = {\n        padding: '21px 0 7px 5px', minWidth: 100,\n        position: 'relative', flex: 1, height: 63, color: '#fff',\n        flexDirection: 'column', display: 'flex', justifyContent: 'center',\n      }\n      const colorFontSty = {position: 'absolute', top: 3, left: 5, fontSize: 12, color: 'rgba(255, 255, 255, 0.65)'};\n      if (item.color) {\n        styles.color = item.color;\n        colorFontSty.color = item.color;\n      }\n      return (\n        <div key={idx} style={{ background: item.backgroundColor, ...styles }}>\n          <div style={colorFontSty}>{item.backgroundColor}</div>\n          <div>{item.name}</div>\n          <div style={{ fontSize: 12 }}>{item.des}</div>\n        </div>\n      );\n    })}\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n"}}]);
//# sourceMappingURL=1127.d65f8357.chunk.js.map