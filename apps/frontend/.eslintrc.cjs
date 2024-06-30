const path = require("node:path");

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "plugin:prettier/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', "import"],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],

    'import/order': ['error', {
      'newlines-between': 'always',
    }],

    'import/no-duplicates': 'error',
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: path.resolve(__dirname, './tsconfig.json'),
      },
      node: true,
    }
  },
}
