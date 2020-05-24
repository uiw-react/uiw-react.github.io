(this["webpackJsonp@example/uiw"]=this["webpackJsonp@example/uiw"]||[]).push([[639],{1984:function(n,e,t){"use strict";t.r(e),e.default="Form \u8868\u5355\n===\n\n\u7531\u8f93\u5165\u6846\u3001\u9009\u62e9\u5668\u3001\u5355\u9009\u6846\u3001\u591a\u9009\u6846\u7b49\u63a7\u4ef6\u7ec4\u6210\uff0c\u7528\u4ee5\u6536\u96c6\u3001\u6821\u9a8c\u3001\u63d0\u4ea4\u6570\u636e\u3002\n\n```jsx\nimport { Form, FormItem } from 'uiw';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Form, Input, Row, Col, Slider, Button, Notify } from 'uiw';\n\nconst Demo = () => (\n  <div>\n    <Form\n      onChange={({ initial, current }) => {\n        console.log('onChange', initial, current);\n      }}\n      onSubmit={({initial, current}) => {\n        if(current.name === initial.name) {\n          Notify.error({\n            title: '\u63d0\u4ea4\u5931\u8d25\uff01',\n            description: `\u8868\u5355\u63d0\u4ea4\u5185\u5bb9\u4e3a\u7a7a\uff01`,\n          });\n        } else {\n          Notify.success({\n            title: '\u63d0\u4ea4\u6210\u529f\uff01',\n            description: `\u59d3\u540d\u4e3a\uff1a${current.name}\uff0c\u63d0\u4ea4\u5b8c\u6210\uff0c\u5c06\u81ea\u52a8\u586b\u5145\u521d\u59cb\u5316\u503c\uff01`,\n          });\n        }\n      }}\n      fields={{\n        name: {\n          label: '\u59d3\u540d',\n          children: <Input placeholder=\"\u8bf7\u8f93\u5165\u59d3\u540d\" />\n        },\n      }}\n    >\n      {({ fields, state, canSubmit }) => {\n        return (\n          <div>\n            <Row>\n              <Col style={{ maxWidth: 300 }}>{fields.name}</Col>\n            </Row>\n            <Row>\n              <Col>\n                <Button disabled={!canSubmit()} type=\"primary\" htmlType=\"submit\">\u63d0\u4ea4</Button>\n              </Col>\n            </Row>\n            <Row>\n              <Col>\n                {JSON.stringify(state.current)}\n              </Col>\n            </Row>\n          </div>\n        )\n      }}\n    </Form>\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u81ea\u5b9a\u4e49\u6821\u9a8c\n\n\u4e00\u822c\u6821\u9a8c\u53ef\u4e0d\u9700\u5f15\u5165\u5916\u90e8\u5305\u89e3\u51b3\uff0c\u5982\u679c\u9047\u5230\u5927\u578b\u5de5\u7a0b\u8868\u5355\u6bd4\u8f83\u591a\u7684\u5730\u65b9\u63a8\u8350\u4f7f\u7528 [jquense/yup](https://github.com/jquense/yup)\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Form, Input, Checkbox, Switch, RadioGroup, Radio, Textarea, Row, Col, Button } from 'uiw';\n\nconst Demo = () => (\n  <Form\n    onSubmit={({initial, current}) => {\n      const errorObj = {};\n      if (current.userName.startsWith('u')) {\n        errorObj.userName = `\u59d3\u540d ${current.userName} \u4e0d\u80fd\u4ee5 \u2018u\u2019 \u5f00\u5934`;\n      }\n      if (!current.checkboxOne) {\n        errorObj.checkboxOne = '\u4e00\u4e2a\u591a\u9009\u6761\u4ef6 \u4e3a\u5fc5\u586b';\n      }\n      if (!current.terms) {\n        errorObj.terms = '\u5fc5\u987b\u7edf\u4e00\u670d\u52a1\u6761\u6b3e';\n      }\n      if(Object.keys(errorObj).length > 0) {\n        const err = new Error();\n        err.filed = errorObj;\n        throw err;\n      }\n    }}\n    onSubmitError={(error) => {\n      if (error.filed) {\n        return { ...error.filed };\n      }\n      return null;\n    }}\n    fields={{\n      userName: {\n        initialValue: 'uiw',\n        label: '\u59d3\u540d',\n        help: '\u4ee5\u201cu\u201d\u5f00\u5934\u7684\u540d\u5b57\u5c06\u5728\u6b64\u5904\u663e\u793a\u9519\u8bef\u4fe1\u606f'\n      },\n      age: {\n        initialValue: '9',\n        label: '\u5e74\u9f84',\n        children: <Input type=\"number\" />\n      },\n      checkbox: {\n        initialValue: ['\u56db\u5ddd\u83dc'],\n        label: '\u9009\u62e9\u4f60\u60f3\u5403\u7684\u83dc',\n        children: (\n          <Checkbox.Group>\n            <div>\u83dc\u7cfb</div>\n            <Checkbox value=\"\u56db\u5ddd\u83dc\">\u56db\u5ddd\u83dc</Checkbox>\n            <Checkbox value=\"\u6e56\u5317\u83dc\">\u6e56\u5317\u83dc</Checkbox>\n            <Checkbox value=\"\u897f\u5317\u83dc\">\u897f\u5317\u83dc</Checkbox>\n            <Checkbox value=\"\u65b0\u7586\u83dc\">\u65b0\u7586\u83dc</Checkbox>\n            <Checkbox value=\"\u4e1c\u5317\u83dc\">\u4e1c\u5317\u83dc</Checkbox>\n            <div style={{ marginTop: 10 }}>\u5bb6\u5e38\u83dc</div>\n            <Checkbox value=\"\u7ea2\u70e7\u6b66\u660c\u9c7c\">\u7ea2\u70e7\u6b66\u660c\u9c7c</Checkbox>\n            <Checkbox value=\"\u9ebb\u5a46\u8c46\u8150\">\u9ebb\u5a46\u8c46\u8150</Checkbox>\n            <Checkbox value=\"\u5317\u4eac\u70e4\u9e2d\">\u5317\u4eac\u70e4\u9e2d</Checkbox>\n          </Checkbox.Group>\n        )\n      },\n      checkboxOne: {\n        inline: true,\n        label: '\u4e00\u4e2a\u591a\u9009\u6761\u4ef6',\n        children: <Checkbox value=\"1\">\u56db\u5ddd\u83dc</Checkbox>\n      },\n      switch: {\n        inline: true,\n        initialValue: true,\n        label: '\u5f00\u542f',\n        children: <Switch size=\"small\" />\n      },\n      radioGroup: {\n        inline: true,\n        initialValue: '\u7537',\n        label: '\u5355\u9009',\n        children: (\n          <RadioGroup name=\"other\">\n            <Radio value=\"\u7537\">\u7537</Radio>\n            <Radio value=\"\u5973\">\u5973</Radio>\n            <Radio value=\"\u4eba\u5996\" disabled>\u4eba\u5996</Radio>\n            <Radio value=\"\u672a\u77e5\">\u672a\u77e5</Radio>\n          </RadioGroup>\n        )\n      },\n      textarea: {\n        initialValue: '',\n        label: '\u591a\u884c\u6587\u672c\u8f93\u5165\u6846',\n        children: <Textarea placeholder=\"\u8bf7\u8f93\u5165\u5185\u5bb9\" />\n      },\n      terms: {\n        validator: (currentValue) => {\n          return !currentValue ? '\u5fc5\u987b\u7edf\u4e00\u670d\u52a1\u6761\u6b3e' : null;\n        },\n        style: { marginBottom: 0 },\n        children: <Checkbox value=\"1\">\u5df2\u9605\u8bfb\u5e76\u540c\u610f<a href=\"#\">\u670d\u52a1\u6761\u6b3e</a></Checkbox>\n      }\n    }}\n  >\n    {({ fields, state, canSubmit, resetForm }) => {\n      console.log('fields:--\x3e', state);\n      return (\n        <div style={{ maxWidth: 500 }}>\n          <Row gutter={10}>\n            <Col>{fields.userName}</Col>\n            <Col>{fields.age}</Col>\n          </Row>\n          <Row gutter={10}>\n            <Col>{fields.checkbox}</Col>\n            <Col>{fields.checkboxOne}</Col>\n          </Row>\n          <Row gutter={10}>\n            <Col>{fields.radioGroup}</Col>\n          </Row>\n          <Row gutter={10}>\n            <Col>{fields.switch}</Col>\n          </Row>\n          <Row gutter={10}>\n            <Col>{fields.textarea}</Col>\n          </Row>\n          <Row gutter={10}>\n            <Col style={{ padding: '5px 0 10px 0' }}>\n              {fields.terms}\n            </Col>\n          </Row>\n          <Row gutter={10}>\n            <Col fixed>\n              <Button disabled={!canSubmit()} type=\"primary\" htmlType=\"submit\">\u63d0\u4ea4</Button>\n              <Button type=\"light\" onClick={resetForm}>\u91cd\u7f6e\u8868\u5355</Button>\n            </Col>\n          </Row>\n          <Row>\n            <Col>\n              <pre style={{ padding: '10px 0 0 10px' }}>\n                {JSON.stringify(state.current, null, 2)}\n              </pre>\n            </Col>\n          </Row>\n        </div>\n      )\n    }}\n  </Form>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u6c34\u5e73\u767b\u5f55\u680f\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Form, Input, Row, Col, Notify, Button } from 'uiw';\n\nconst Demo = () => (\n  <div>\n    <Form\n      onSubmit={({initial, current}) => {\n        const errorObj = {};\n        if (!current.username) {\n          errorObj.username = '\u7528\u6237\u540d\u4e0d\u80fd\u4e3a\u7a7a\uff01';\n        }\n        if (!current.password) {\n          errorObj.password = '\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a\uff01';\n        }\n        if(Object.keys(errorObj).length > 0) {\n          const err = new Error();\n          err.filed = errorObj;\n          Notify.error({ title: '\u63d0\u4ea4\u5931\u8d25\uff01', description: '\u8bf7\u786e\u8ba4\u63d0\u4ea4\u8868\u5355\u662f\u5426\u6b63\u786e\uff01' });\n          throw err;\n        }\n        console.log('--\x3e>', initial, current);\n        Notify.success({ title: '\u63d0\u4ea4\u6210\u529f\uff01', description: '\u606d\u559c\u4f60\u767b\u5f55\u6210\u529f\uff01' });\n      }}\n      onSubmitError={(error) => {\n        if (error.filed) {\n          return { ...error.filed };\n        }\n        return null;\n      }}\n      fields={{\n        username: {\n          labelClassName: 'fieldLabel',\n          labelFor: 'username-inline',\n          children: <Input preIcon=\"user\" id=\"username-inline\" />\n        },\n        password: {\n          labelClassName: 'fieldLabel',\n          labelFor: 'password-inline',\n          children: <Input preIcon=\"lock\" id=\"password-inline\" type=\"password\" />\n        },\n      }}\n    >\n      {({ fields, state, canSubmit, resetForm }) => {\n        console.log('fields:', state);\n        return (\n          <div>\n            <Row gutter={10}>\n              <Col fixed>{fields.username}</Col>\n              <Col fixed>{fields.password}</Col>\n            </Row>\n            <Row gutter={10}>\n              <Col>\n                <Button disabled={!canSubmit()} type=\"primary\" htmlType=\"submit\">\u63d0\u4ea4</Button>\n                <Button type=\"danger\" onClick={resetForm}>\u91cd\u7f6e\u8868\u5355</Button>\n              </Col>\n            </Row>\n          </div>\n        )\n      }}\n    </Form>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n## \u767b\u5f55\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nconst Demo = () => (\n  <div>\n    <Form\n      onSubmit={({initial, current}) => {\n        console.log('--\x3e>', initial, current);\n      }}\n      fields={{\n        username: {\n          labelClassName: 'fieldLabel',\n          labelStyle: { width: 60 },\n          labelFor: 'username',\n          children: <Input preIcon=\"user\" id=\"username\" />\n        },\n        password: {\n          labelClassName: 'fieldLabel',\n          labelStyle: { width: 60 },\n          labelFor: 'password',\n          children: <Input preIcon=\"lock\" id=\"password\" type=\"password\" />\n        },\n        terms: {\n          validator: (currentValue) => !currentValue ? '\u5fc5\u987b\u7edf\u4e00\u670d\u52a1\u6761\u6b3e' : null,\n          children: <Checkbox value=\"1\">\u5df2\u9605\u8bfb\u5e76\u540c\u610f</Checkbox>\n        }\n      }}\n    >\n      {({ fields, state, canSubmit }) => {\n        console.log('fields:', state);\n        return (\n          <div>\n            <Row>\n              <Col fixed>{fields.username}</Col>\n            </Row>\n            <Row>\n              <Col fixed>{fields.password}</Col>\n            </Row>\n            <Row>\n              <Col fixed align=\"middle\">{fields.terms}</Col>\n              <Col fixed style={{ marginTop: -4 }}><a href=\"#\">\u670d\u52a1\u6761\u6b3e</a></Col>\n            </Row>\n            <Row>\n              <Col fixed>\n                <Button disabled={!canSubmit()} type=\"primary\" htmlType=\"submit\">\u63d0\u4ea4</Button>\n              </Col>\n            </Row>\n          </div>\n        )\n      }}\n    </Form>\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u8868\u5355\u63d0\u4ea4\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Form, Select, Row, Col, Button } from 'uiw';\n\nconst Demo = () => (\n  <div>\n    <Form\n      onSubmit={({initial, current}) => {\n        console.log('--\x3e>', initial, current);\n      }}\n      fields={{\n        firstName: {\n          labelClassName: 'fieldLabel',\n          labelStyle: { width: 60 },\n          inline: true,\n          label: '\u59d3\u6c0f'\n        },\n        lastName: {\n          labelClassName: 'fieldLabel',\n          labelStyle: { width: 60 },\n          initialValue: '\u5148\u751f',\n          inline: true,\n          label: '\u540d\u5b57',\n        },\n        email: {\n          labelClassName: 'fieldLabel',\n          labelStyle: { width: 60 },\n          validator: (currentValue) => {\n            return currentValue && currentValue.length < 2 ? 'Password must be 8+ characters' : null;\n          },\n          inline: true,\n          label: 'Email',\n        },\n        select: {\n          labelClassName: 'fieldLabel',\n          labelStyle: { width: 60 },\n          inline: true,\n          label: '\u9009\u62e9\u5668',\n          children: (\n            <Select>\n              <Select.Option>Choose an item...</Select.Option>\n              <Select.Option value=\"1\">One</Select.Option>\n              <Select.Option value=\"2\">Two</Select.Option>\n              <Select.Option value=\"3\">Three</Select.Option>\n              <Select.Option value=\"4\">Four</Select.Option>\n            </Select>\n          ),\n        },\n      }}\n    >\n      {({ fields, state, canSubmit }) => {\n        console.log('fields:', state);\n        return (\n          <div>\n            <Row gutter={10} style={{ marginBottom: 10 }}>\n              <Col>{fields.firstName}</Col>\n              <Col>{fields.lastName}</Col>\n            </Row>\n            <Row gutter={10}>\n              <Col>{fields.email}</Col>\n              <Col>{fields.select}</Col>\n            </Row>\n            <Row gutter={10}>\n              <Col />\n              <Col fixed align=\"bottom\"><Button disabled={!canSubmit()} type=\"primary\" htmlType=\"submit\">\u63d0\u4ea4</Button></Col>\n            </Row>\n          </div>\n        )\n      }}\n    </Form>\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n\n### \u81ea\u5b9a\u4e49\u63a7\u4ef6\u5e94\u7528\n\n\u4e0b\u9762\u5b9e\u4f8b\u662f\u5728 [`<Form />`](#/components/form) \u8868\u5355\u7ec4\u4ef6\u4e2d\uff0c\u5e94\u7528\u81ea\u5b9a\u4e49 `<CustomSelect />` \u63a7\u4ef6\u7ec4\u4ef6\u3002\n\n> \u26a0\ufe0f \u6ce8\u610f\uff0c\u81ea\u5b9a\u4e49\u63a7\u4ef6\u9700\u8981\u4e24\u4e2a\u5fc5\u8981\u7684 `props` \u53c2\u6570\uff0c`value` \u548c `onChange`\n\n- `value` \u7528\u4e8e\u503c\u4f20\u9012\uff0c\n- `onChange(value)` \u7528\u4e8e\u503c\u53d8\u66f4\u9700\u8981\u6267\u884c\u7684\u56de\u8c03\u51fd\u6570\uff0c\u56de\u8c03\u51fd\u6570\u7b2c\u4e00\u4e2a\u53c2\u6570\u5fc5\u987b\u662f `value`\u3002\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```jsx\nimport { Form, Row, Col, Dropdown, Menu, Icon, Button, Notify } from 'uiw';\n\n// \u81ea\u5b9a\u4e49\u7ec4\u4ef6\nclass CustomSelect extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: props.value,\n      isOpen: false,\n    };\n  }\n  UNSAFE_componentWillReceiveProps(nextProps) {\n    if (nextProps.value !== this.props.value) {\n      this.setState({ value: nextProps.value });\n    }\n  }\n  onVisibleChange(isOpen) {\n    this.setState({ isOpen });\n  }\n  onClick(item) {\n    const { onChange } = this.props;\n    this.setState({ value: item.value, isOpen: false }, () => {\n      onChange && onChange(item.value);\n    });\n  }\n  render() {\n    const { option } = this.props;\n    const { isOpen, value } = this.state;\n    const label = option.find(item => value === item.value);\n    return (\n      <Dropdown\n        trigger=\"click\"\n        onVisibleChange={this.onVisibleChange.bind(this)}\n        isOpen={isOpen}\n        menu={\n          <Menu bordered style={{ minWidth: 120 }}>\n            {option.map((item, idx) => {\n              const active = value === item.value;\n              return (\n                <Menu.Item active={active} key={idx} text={item.label} onClick={this.onClick.bind(this, item)}/>\n              );\n            })}\n          </Menu>\n        }\n      >\n        <Button\n          style={{\n            boxShadow: 'inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1)'\n          }}\n          type=\"link\"\n        >\n          {label.label}<Icon type={isOpen ? 'up' : 'down'} />\n        </Button>\n      </Dropdown>\n    )\n  }\n}\n\n// \u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5e94\u7528\u5b9e\u4f8b\nconst Demo = () => (\n  <div>\n    <Form\n      onSubmitError={(error) => {\n        if (error.filed) {\n          return { ...error.filed };\n        }\n        return null;\n      }}\n      onSubmit={({initial, current}) => {\n        console.log('~~~', current);\n        const errorObj = {};\n        if (!current.select) {\n          errorObj.select = '\u5185\u5bb9\u4e3a\u7a7a\uff0c\u8bf7\u8f93\u5165\u5185\u5bb9';\n        }\n        if(Object.keys(errorObj).length > 0) {\n          const err = new Error();\n          err.filed = errorObj;\n          Notify.error({ title: '\u63d0\u4ea4\u5931\u8d25\uff01', description: '\u8bf7\u786e\u8ba4\u63d0\u4ea4\u8868\u5355\u662f\u5426\u6b63\u786e\uff01' });\n          throw err;\n        }\n        Notify.success({\n          title: '\u63d0\u4ea4\u6210\u529f\uff01',\n          description: `\u8868\u5355\u63d0\u4ea4\u6210\u529f\uff0c\u5185\u5bb9\u4e3a\uff1a${current.select}\uff0c\u5c06\u81ea\u52a8\u586b\u5145\u521d\u59cb\u5316\u503c\uff01`,\n        });\n      }}\n      fields={{\n        select: {\n          initialValue: 0,\n          children: (\n            <CustomSelect option={[\n              { label: '\u8bf7\u9009\u62e9', value: 0 },\n              { label: '\u7ecf\u6d4e\u8231', value: 1 },\n              { label: '\u8c6a\u534e\u7ecf\u6d4e\u8231', value: 2 },\n              { label: '\u5546\u52a1\u8231', value: 3 },\n              { label: '\u5934\u7b49\u8231', value: 4 },\n            ]} />\n          )\n        },\n      }}\n    >\n      {({ fields, state, canSubmit }) => {\n        return (\n          <div>\n            <Row>\n              <Col style={{ maxWidth: 300 }}>{fields.select}</Col>\n            </Row>\n            <Row>\n              <Col fixed>\n                <Button disabled={!canSubmit()} type=\"primary\" htmlType=\"submit\">\u63d0\u4ea4</Button>\n              </Col>\n            </Row>\n          </div>\n        )\n      }}\n    </Form>\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### FormItem \u7ad6\u6392\n\n\u5bf9\u7ec4\u4ef6 `FormItem` \u7ad6\u6392\u5c55\u793a\u793a\u4f8b\u3002\n\n> \u26a0\ufe0f \u6ce8\u610f\uff1a\u5f53\u524d\u53ea\u5c55\u793a\u6548\u679c\uff0c`FormItem` \u7ec4\u4ef6\u53ea\u5728 `Form` \u7ec4\u4ef6\u4e2d\u4f7f\u7528\u3002\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Form, FormItem } from 'uiw';\n\nconst Demo = () => (\n  <Form>\n    <FormItem\n      label=\"\u53ef\u9009\u5b57\u6bb5\"\n      labelFor=\"basic-input\"\n      help={<span>\u5728\u4e0a\u9762\u7684\u5b57\u6bb5\u4e2d\u8f93\u5165\u4e00\u4e2a\u503c</span>}\n    >\n      <Input id=\"basic-input\" type=\"text\"/>\n    </FormItem>\n    <FormItem\n      label=\"\u7528\u6237\u540d\"\n      labelFor=\"username-input\"\n      help=\"\u7528\u6237\u540d\u957f\u5ea6\u81f3\u5c11\u4e3a8\u4e2a\u5b57\u7b26\u4e32\u3002\"\n      hasError={true}\n    >\n      <Input id=\"username-input\" type=\"text\"/>\n    </FormItem>\n  </Form>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### FormItem \u6a2a\u6392\n\n\u5bf9\u7ec4\u4ef6 `FormItem` \u6a2a\u6392\u5c55\u793a\u793a\u4f8b\u3002\n\n> \u26a0\ufe0f \u6ce8\u610f\uff1a\u5f53\u524d\u53ea\u5c55\u793a\u6548\u679c\uff0c`FormItem` \u7ec4\u4ef6\u53ea\u5728 `Form` \u7ec4\u4ef6\u4e2d\u4f7f\u7528\u3002\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Form, FormItem } from 'uiw';\n\nconst Demo = () => (\n  <Form>\n    <FormItem\n      inline={true}\n      label=\"\u53ef\u9009\u5b57\u6bb5\"\n      labelFor=\"basic-input-inline\"\n      help={<span>\u5728\u4e0a\u9762\u7684\u5b57\u6bb5\u4e2d\u8f93\u5165\u4e00\u4e2a\u503c</span>}\n      onChange={() => {\n        console.log('TEST::');\n      }}\n    >\n      <Input id=\"basic-input-inline\" type=\"text\"/>\n    </FormItem>\n    <FormItem\n      inline={true}\n      label=\"\u7528\u6237\u540d\"\n      labelFor=\"username-input-inline\"\n      labelClassName=\"username\"\n      help=\"\u7528\u6237\u540d\u957f\u5ea6\u81f3\u5c11\u4e3a8\u4e2a\u5b57\u7b26\u4e32\u3002\"\n      hasError={true}\n    >\n      <Input id=\"username-input-inline\" type=\"text\"/>\n    </FormItem>\n  </Form>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n## Form\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| fields | \u8bbe\u7f6e\u5b57\u6bb5 | object | - |\n| children | \u56de\u8c03 {`fields`, `state`, `canSubmit`, `resetForm`} | function | - |\n| onSubmit | \u5728 `onSubmit` \u4e4b\u540e\u6267\u884c  | function({ initial, current }) | - |\n| afterSubmit `@3.0.0+` | \u63d0\u4ea4\u56de\u8c03 {`initial`, `current`}  | function({ initial, current }) | - |\n| onChange | \u8868\u5355\u53d1\u751f\u6539\u53d8\u56de\u8c03\u51fd\u6570 {`initial`, `current`}  | function({ initial, current }) | - |\n| onSubmitError | \u8c03\u7528 `onSubmit` \u629b\u51fa\u7684\u4efb\u4f55\u9519\u8bef\u3002\u4ece\u5b57\u6bb5\u540d\u79f0\u8fd4\u56de\u5bf9\u8c61\u6620\u5c04\u3002  | function | - |\n| resetOnSubmit | \u5728 `onSubmit` \u6210\u529f\u540e\u5c06\u8868\u5355\u91cd\u7f6e\u4e3a\u5176\u521d\u59cb\u72b6\u6001\u3002| bool | `true` |\n\n```js\n// => fields\n{\n  firstName: {\n    initialValue: '\u738b',\n    inline: true,\n    label: '\u59d3',\n    labelClassName: 'fieldLabel',\n    labelStyle: { width: 60 },\n    validator: (currentValue) => {},\n    help: '\u5e2e\u52a9\u63d0\u793a\u4fe1\u606f\uff01',\n    children: <Input type=\"number\" />\n  },\n}\n```\n\n## FormItem\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| label | \u8868\u5355\u6807\u9898\u5c55\u793a | string | - |\n| labelClassName | \u8868\u5355\u6807\u9898\u6837\u5f0f\u540d\u79f0 | string | - |\n| labelStyle | \u8868\u5355\u6807\u9898\u6837\u5f0f | object | - |\n| labelFor | \u5217\u7684\u5bbd\u5ea6\u76f8\u5bf9\u4e8e\u540c\u4e00\u7f51\u683c\u4e2d\u5176\u4ed6\u5217\u7684\u6bd4\u7387 | number | - |\n| help | \u63d0\u793a\u4fe1\u606f | ReactNode | - |\n| hasError | \u5982\u679c\u4e3atrue\uff0c\u5219\u5e94\u7528\u9519\u8befCSS\u3002\u8f6c\u52a8\u8fb9\u6846\u5e76\u5e2e\u52a9\u6587\u5b57\u53d8\u7ea2\u3002 | number | - |"}}]);