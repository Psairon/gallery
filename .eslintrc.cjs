/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:prettier/recommended'
  ],
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: true,
        tabWidth: 2,
        useTabs: false
      }
    ],
    semi: ['error', 'always'],
    indent: ['error', 2]
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
};
