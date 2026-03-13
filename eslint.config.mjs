import js from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

const globals = {
  React: 'readonly',
  window: 'readonly',
  document: 'readonly',
  console: 'readonly',
  setTimeout: 'readonly',
  clearTimeout: 'readonly',
  setInterval: 'readonly',
  clearInterval: 'readonly',
  fetch: 'readonly',
  process: 'readonly',
}

export default [
  js.configs.recommended,
  // JS/JSX files
  {
    files: ['**/*.{js,jsx}'],
    plugins: { react, 'react-hooks': reactHooks },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-unreachable': 'warn',
      'no-unused-vars': 'warn',
      'react/jsx-no-duplicate-props': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  // TS/TSX files
  {
    files: ['**/*.{ts,tsx}'],
    plugins: { react, 'react-hooks': reactHooks, '@typescript-eslint': tsPlugin },
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2022,
      sourceType: 'module',
      globals,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-unreachable': 'warn',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'react/jsx-no-duplicate-props': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  {
    ignores: ['.next/**', 'node_modules/**', 'public/**'],
  },
]
