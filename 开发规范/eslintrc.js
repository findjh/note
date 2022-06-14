module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true,
  },
  extends: [
    'plugin:vue/vue3-recommended', // 强制执行主观社区默认设置以确保一致性的规则，高规格
    'plugin:@typescript-eslint/recommended',
    // 'prettier',
    // 'prettier/vue',
    // 'prettier/@typescript-eslint', // 如果不需要ts，去掉
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    // 需要安装 @typescript-eslint/eslint-plugin， 如果不需要ts，用babel代替，"parser": "babel-eslint",
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      tsx: true, // Allows for the parsing of JSX
      jsx: true,
    },
  },
  rules: {
    'vue/no-useless-template-attributes': 'off',
    'vue/require-valid-default-prop': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/v-on-event-hyphenation': [
      'warn',
      'always',
      {
        autofix: true,
      },
    ],
    '@typescript-eslint/no-unused-vars': ['error'],
    'lines-between-class-members': 0,
    'class-methods-use-this': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'quotes': 'off', // 先关闭默认的引号控制
    'quote-props': [1, 'consistent-as-needed'], //对象字面量中的属性名是否强制双引号
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/quotes': [1, 'single'],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    // '@typescript-eslint/no-unused-vars': 2,
    'vue/component-definition-name-casing': ['warn', 'kebab-case'], // 组件使用 kebab-case 命名，html标准
    'vue/no-v-html': 0,
    'vue/no-template-shadow': 2,
    'vue/attributes-order': [
      'warn',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT',
        ],
        alphabetical: true,
      },
    ],
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
    {
      files: ['**/*.axml', '**/*.wxml', '**/*.ttml', '**/*.html'],
      rules: { 'vue/comment-directive': 'off' },
    },
  ],
  plugins: ['html'],
  settings: {
    'html/html-extensions': ['.html', '.we'], // consider .html and .we files as HTML
  },
};
