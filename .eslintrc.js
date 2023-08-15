module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: [
        'airbnb-base',
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 15,
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['@typescript-eslint', 'import'],
    rules: {
        'no-unused-vars': 1,
        '@typescript-eslint/no-explicit-any': 1,
        'import/prefer-default-export': 0,
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js','.ts'],
                moduleDirectory: ['node_modules', 'src/'],
            },
        },
    },
};
