module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'vue/setup-compiler-macros': true
  },
  'extends': [
    './.eslintrc-auto-import.json',
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:vue/vue3-recommended'
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'vue'
  ],
  'rules': {
    "vue/no-multiple-template-root": "off",
    "vue/no-v-model-argument": "off",
    "vue/html-closing-bracket-newline": "off",
    "vue/first-attribute-linebreak": "off",
    'vue/multi-word-component-names': 'off',
    'vue/no-setup-props-destructure': 'off',
    "semi": ["error", "always"], //结尾使用分号
    "quotes": ["error", "single", { "avoidEscape": true }], //使用单引号
    "vue/singleline-html-element-content-newline": 0,
    "vue/html-indent": 0,
    "vue/max-attributes-per-line": ["error", {
      "singleline": {
        "max": 1
      },
      "multiline": {
        "max": 1
      }
    }],
    "no-var": "error", //禁用var
    "vue/multi-word-component-names": "off", //屏蔽组件名多个单词
    "no-await-in-loop": "error", //禁止循环中出现await
    "eqeqeq": [2, "always"],//要求使用 === 和 !==
    "max-len": [2, {  //强制一行的最大长度
      "code": 300
    }],
    "max-lines": [2, { //最大行数
      "max": 1000,
      "skipBlankLines": true,
      "skipComments": true
    }],
    "comma-dangle": [2, "never"], //末尾不适用逗号
    "array-bracket-newline": ["error", { "multiline": true }], //数组前后空格
    "space-infix-ops": "error", //操作符前后空格
    "vue/max-attributes-per-line": ["off"]
  }
};
