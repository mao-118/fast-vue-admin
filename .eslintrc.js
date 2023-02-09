module.exports = {
  env: {
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    './.eslintrc-auto-import.json',
    'standard', // standard风格
    'plugin:vue/vue3-recommended', //eslint-plugin-vue 风格规范
    'plugin:prettier/recommended', //配置prettier风格插件
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'space-before-function-paren': 0,
    camelcase: 0,
    'vue/attribute-hyphenation': 0,
    'vue/multi-word-component-names': 0,
    'vue/valid-define-emits': 0,
  },
}
