module.exports = {
  "root": true,
  "env": {
    "browser": true
  },
  "parserOptions": { // 设置解析器选项能帮助 ESLint 确定什么是解析错误，所有语言选项默认都是 false
    "ecmaVersion": 12, // 支持es6语法，但并不意味着同时支持新的 ES6 全局变量或类型（比如 Set 等新类型）
    "parser": "@typescript-eslint/parser"
  },
  "plugins": [ // 此插件用来识别.html 和 .vue文件中的js代码
    "prettier"
  ],
  "extends": [
    "plugin:vue/vue3-recommended",
    "airbnb-base",
    "plugin:prettier/recommended"
  ],
  "overrides": [
    {
      "files": "*.html",
      "processor": "vue/.vue"
    }
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    }
  },
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "printWidth": 120,
        "semi": false,
        "endOfLine": "auto",
        "singleQuote": true,
        "trailingComma": "none",
        "bracketSpacing": true,
        "jsxBracketSameLine": false,
        "vueIndentScriptAndStyle": false,
        "jsxBracketSameLine:": true,
        "htmlWhitespaceSensitivity": "ignore",
        "wrapAttributes": true,
        "per-const": "off",
        "overrides": [
          {
            "files": "*.html",
            "options": {
              "parser": "html"
            }
          }
        ],
        "max-len": [
          "error",
          {
            "code": 600
          }
        ]
      }
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": true
      }
    ],
    // 关闭名称校验
    // 和 vite.config.ts 一样解决 props 父子传参结构的 eslint 报错问题
    "vue/no-setup-props-destructure": "off",
    "vue/no-setup-props-reactivity-loss": "off",
    "vue/multi-word-component-names": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "no-console": "off", //不允许出现console语句
    "consistent-return": "off", //无论有没有返回值都强制要求return语句返回一个值
    "no-param-reassign": "off", //不允许重新分配函数参数"no-proto": 2, //不允许使用__proto__属性
    "new-cap": "off", //构造函数名字首字母要大写
    "no-shadow": "off", //外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
    "no-underscore-dangle": "off", //不允许标识符以下划线开头
    "no-unused-vars": "warn",
    'no-debugger': 'warn',
    "vue/no-v-html": "off",
    "no-restricted-syntax": "off",
    "guard-for-in": "off", //监视for in循环，防止出现不可预料的情况
    "import/prefer-default-export": "off",
    "eqeqeq": [ //比较的时候使用严格等于
      "off"
    ],
    "no-use-before-define": "off", //不允许在未定义之前就使用变量"indent": 2, //强制一致的缩进风格
    "no-return-await": 2 // 禁用不必要的 return await
  },
  "globals": {
    "plus": true
  }
}
