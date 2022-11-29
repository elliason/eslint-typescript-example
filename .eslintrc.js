module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        node: true,
        es2022: true,
        'cypress/globals': true,
        'jest/globals': true,
    },
    extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'prettier',
    ],
    plugins: ['@typescript-eslint', 'import', 'cypress', 'testing-library', 'jest', 'react', 'react-hooks', 'jsx-a11y'],
    settings: {
        /* A map from parsers to file extension arrays. If a file extension is matched,
        the dependency parser will require and use the map key as the parser instead of the configured ESLint parser. */
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {},
        },
        // A list of file extensions that will be parsed as modules and inspected for exports.
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx', 'cjs', 'mjs'],
        // A list of regex strings that, if matched by a path, will not report the matching module if no exports are found.
        'import/ignore': ['\\.(coffee|scss|css|less|hbs|svg|json)$'],
        react: {
            version: '18',
        },
    },
    rules: {
        //'import/no-unresolved': 'off',
    },
};
