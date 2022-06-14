- 安装依赖

```js
"eslint": "^7.19.0",
"eslint-config-prettier": "7.2.0",
"eslint-plugin-html": "6.1.1",
"eslint-plugin-vue": "^8.5.0",
"prettier": "2.2.1",
"prettier-eslint": "12.0.0", 
"stylelint": "^13.6.1",
"stylelint-config-prettier": "^8.0.2",
"stylelint-config-rational-order": "^0.1.2",
"stylelint-config-standard": "^20.0.0",
"stylelint-declaration-block-no-ignored-properties": "^2.3.0",
"stylelint-order": "^4.1.0",
  
```

- 安装插件

  第一个插件：编辑器提示报红。
  
  第二个插件：settings.json 自动保存格式化。
  
  
  
  ![image-20220614143403941](D:\Project\note\开发规范\assets\image-20220614143403941.png)



- 复制 几个配置规则文件到根文件夹里，注意要文件名改为. 开头

- 保存自动格式化

  在.vscode创建settings.json 

  ```json
  {
    "editor.tabSize": 2, // tab两个空格
    "files.trimTrailingWhitespace": true, // 自动去除多余空格
    "eslint.alwaysShowStatus": true, // 显示异常信息
    "editor.formatOnSave": true, // 保存时自动格式化
    "editor.formatOnPaste": false, // 粘贴时自动格式化
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
      "source.fixAll.stylelint": true
    },
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint",
    "[markdown]": {
      "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
    },
    "[json]": {
      "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
    },
    "[jsonc]": {
      "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
    },
    "[yml]": {
      "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
    },
    "[typescriptreact]": {
      "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
    },
    "[javascriptreact]": {
      "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
    },
    "[typescript]": {
      "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
    },
    "[javascript]": {
      "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
    },
    "[html]": {
      "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
    },
    "[vue]": {
      "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
    },
    "[css]": {
      "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
    },
    "[less]": {
      "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
    },
    "[scss]": {
      "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
    },
    "vetur.validation.template": false, // 关闭vetur的模版校验
    "eslint.validate": ["javascript", "javascriptreact", "vue", "html"], // eslint校验的范围
    "html.validate.styles": false, // vscode配置，关闭style校验防止在查看小程序**ml文件时出错
    "files.associations": {
      "*.axml": "html",
      "*.wxml": "html",
      "*.ttml": "html",
      "*.acss": "css",
      "*.wxss": "css",
      "*.ttss": "css"
    },
    "stylelint.validate": ["vue"],
    "stylelint.enable": true,
    "cSpell.words": ["alipay", "anticon", "btns", "composables", "maxlength", "navs", "popconfirm", "qualitation"],
    "typescript.tsdk": "node_modules/typescript/lib"
  }
  
  ```

  在.vscode创建extensions.json 

  ```json
  {
    "recommendations": [
      "vue.volar",
      "editorconfig.editorconfig",
      "rvest.vs-code-prettier-eslint",
      "dbaeumer.vscode-eslint",
      "stylelint.vscode-stylelint",
    ]
  }
  
  ```

  
