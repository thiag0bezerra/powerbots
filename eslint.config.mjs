// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // Ignore build artifacts and generated files
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/docs/**',
      '**/*.tsbuildinfo',
      'pnpm-lock.yaml',
      '**/*.d.ts',  // Ignore generated declaration files
      '**/*.js',    // Ignore compiled JS files (in src folders)
    ],
  },

  // Apply ESLint and TypeScript-ESLint recommended rules
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,

  // Configure TypeScript parser with monorepo support
  {
    languageOptions: {
      parserOptions: {
        // Use Project Service for automatic tsconfig detection
        projectService: {
          allowDefaultProject: ['*.mjs', 'eslint.config.mjs'],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // Custom rules for professional TypeScript development
  {
    rules: {
      // TypeScript-specific rules
      '@typescript-eslint/explicit-function-return-type': [
        'warn',
        {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
        },
      ],

      // General code quality
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-var': 'error',
    },
  },
);
