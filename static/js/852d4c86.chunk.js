(window.webpackJsonp=window.webpackJsonp||[]).push([[416],{1092:function(n,e){n.exports="SearchSelect 搜索选择器\n===\n\n\n```jsx\nimport { SearchSelect } from 'uiw';\n```\n\n## 基础示例\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { SearchSelect } from 'uiw';\n\nconst Demo = () => {\n  const [option, setOption] = React.useState([]);\n  const [loading, setLoading] = React.useState(false);\n  const [value, setValue] = React.useState(undefined);\n  function handleSearch(e) {\n    setLoading(true)\n    setTimeout(() =>  {\n      setOption([\n        { label: 'a', value: 2 },\n        { label: 'aa', value: 3 },\n        { label: 'aaa', value: 4 },\n      ]);\n      setLoading(false);\n    }, 2000);\n  }\n  return(\n    <SearchSelect\n      style={{ maxWidth: 200 }}\n      showSearch={true}\n      allowClear\n      value={value}\n      disabled={false}\n      placeholder=\"请输入选择\"\n      onSearch={handleSearch}\n      loading={loading}\n      option={option}\n      onChange={(value) => setValue(value)}\n    />\n  );\n};\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n\n### 在表单中使用\n\n在 [`<Form />`](#/components/form) 表单中应用 `<SearchSelect />` 组件。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Form, Row, Col, SearchSelect, Button, Notify } from 'uiw';\n\nconst Demo = () => {\n  const [option, setOption] = React.useState([]);\n  const [loading, setLoading] = React.useState(false);\n  function handleSearch(e) {\n    setLoading(true)\n    setTimeout(() =>  {\n      setOption([\n        { label: 'a', value: 2 },\n        { label: 'aa', value: 3 },\n        { label: 'aaa', value: 4 },\n      ]);\n      setLoading(false);\n    }, 2000);\n  }\n\n  return (\n    <div>\n      <Form\n        onSubmitError={(error) => {\n          if (error.filed) {\n            return { ...error.filed };\n          }\n          return null;\n        }}\n        onSubmit={({initial, current}) => {\n          const errorObj = {};\n          if (!current.selectField) {\n            errorObj.selectField = '默认需要选择内容，选择入内容';\n          }\n          if(Object.keys(errorObj).length > 0) {\n            const err = new Error();\n            err.filed = errorObj;\n            Notify.error({ title: '提交失败！', description: '请确认提交表单是否正确！' });\n            throw err;\n          }\n          Notify.success({\n            title: '提交成功！',\n            description: `表单提交成功，选择值为：${current.selectField}，将自动填充初始化值！`,\n          });\n        }}\n        fields={{\n          selectField: {\n            children: (\n              <SearchSelect\n                showSearch={true}\n                allowClear\n                disabled={false}\n                placeholder=\"请输入选择\"\n                onSearch={handleSearch}\n                option={option}\n                loading={loading}\n              />\n            )\n          },\n        }}\n      >\n        {({ fields, state, canSubmit }) => {\n          return (\n            <div>\n              <Row>\n                <Col fixed>{fields.selectField}</Col>\n              </Row>\n              <Row>\n                <Col fixed>\n                  <Button disabled={!canSubmit()} type=\"primary\" htmlType=\"submit\">提交</Button>\n                </Col>\n              </Row>\n            </div>\n          )\n        }}\n      </Form>\n    </div>\n  );\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n## Props\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| allowClear | 支持清除 | Boolean | `false` |\n| disabled | 禁用选择器 | Boolean | `false` |\n| defaultValue | 指定默认选中的条目 | String/Number | - |\n| value | 指定选中的条目的值 | String/Number | - |\n| placeholder | 选择框默认文字 | String | - |\n| showSearch | 使单选模式可搜索 | Boolean | - |\n| size | 选择框尺寸 | Enum{`large`, `default`, `small` } | `default` |\n| onChange | 选中 option，或 input 的 value，调用此函数 | `function(value, option:Option/Array<Option>)` | - |\n| onSearch | 文本框值变化时回调 | `function(value: String)` | - |\n| onSelect | 被选中时调用，参数为选中项的 value | `function(value: String/Number )` | - |\n| loading | 加载中状态 | Boolean | false |\n"}}]);