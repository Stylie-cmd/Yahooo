module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        indent: ['off', 2],
        'no-tab': 'off',
        'no-console': 'off',
        'no-debugger': 'off'
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}