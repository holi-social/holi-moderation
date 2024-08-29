// @ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactRefresh from 'eslint-plugin-react-refresh'
import importPlugin from 'eslint-plugin-import'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import jest from 'eslint-plugin-jest'

const internalToolingRules = {
  // any is okay
  '@typescript-eslint/no-unsafe-member-access': 'off',
  '@typescript-eslint/no-unsafe-assignment': 'off',
  '@typescript-eslint/no-unsafe-call': 'off',
  '@typescript-eslint/no-unsafe-argument': 'off',

  // we are sure things are here
  '@typescript-eslint/no-unnecessary-type-assertion': 'off',
  '@typescript-eslint/no-extra-non-null-assertion': 'off',
  'no-undef': 'off',

  // things are equal enough
  '@typescript-eslint/ no-unsafe-enum-comparison': 'off',
}

export default tseslint.config(
  {
    ignores: [
      'dist/',
      'jest.config.js',
      'vite.config.ts',
      'eslint.config.mjs',
      'tsconfig.json',
      'apps/backend/migrations/*',
      '**/generated',
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    files: ['**/*.test.ts'],
    ...jest.configs['flat/recommended'],
    rules: {
      ...jest.configs['flat/recommended'].rules,
      '@typescript-eslint/unbound-method': 'off',
      'jest/unbound-method': 'error',
      '@typescript-eslint/no-floating-promises': 'off',
    },
  },
  {
    plugins: {
      'react-refresh': reactRefresh,
      import: importPlugin,
    },
  },
  {
    languageOptions: {
      globals: {
        console: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
        },
      ],
      'import/no-duplicates': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      /* added for compatibility, todo review @gregor */
      '@typescript-eslint/no-empty-object-type': 'warn',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-misused-promises': 'warn',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/no-redundant-type-constituents': 'warn',
      '@typescript-eslint/require-await': 'warn',
      'no-empty': 'warn',
      'no-undef': 'warn',
    },
  },
  {
    files: ['*mprocs*.ts'],
    rules: {
      ...internalToolingRules,
    },
  },
  prettierRecommended,
)
