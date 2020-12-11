module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
    ],
    rules: {
        indent: [2, 4],
        'vue/html-indent': [2, 4],
        'vue/max-attributes-per-line': ['error', {
            singleline: 1,
            multiline: {
                max: 1,
                allowFirstLine: false,
            },
        }],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
            ],
            env: {
                mocha: true,
            },
        },
    ],
};
