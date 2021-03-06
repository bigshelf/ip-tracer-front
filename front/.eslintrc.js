module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    extends: [
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        'linebreak-style': 0,
        'import/prefer-default-export': 0,
        '@typescript-eslint/no-unused-vars': 1,
        'prettier/prettier': 0,
        'import/extensions': 0,
        'import/no-unresolved': 0,
        'no-shadow': 0,
        "import/order": ["error", {"groups": ["index", "sibling", "parent", "internal", "external", "builtin", "object", "type"].reverse()}],
        '@typescript-eslint/no-empty-function': 0,
    },
};
