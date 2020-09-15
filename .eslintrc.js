module.exports = {
    root: true,

    env: {
        node: true
    },

    extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],

    parserOptions: {
        parser: 'babel-eslint'
    },

    rules: {
        indent: ['error', 4],
        'no-console': 'off',
        'no-debugger': 'off'
    },

    'extends': [
      'plugin:vue/strongly-recommended',
      'eslint:recommended',
      '@vue/prettier'
    ]
};
