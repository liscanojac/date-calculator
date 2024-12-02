import vitest from '@vitest/eslint-plugin'
import * as tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

export default [
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      vitest,
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...vitest.configs.recommended.rules,
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
    },
    languageOptions: {
      parser: tsParser,
    },
  },
]
