// .eslintrc.js
const typescriptEslintRecommended = require('@typescript-eslint/eslint-plugin').configs.recommended;

module.exports = {
  extends: 'airbnb',

  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
    },
  },

  env: {
    node: true,
    es6: true,
    mocha: true,
    browser: true,
  },

  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint'],
      rules: Object.assign(typescriptEslintRecommended.rules, {
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'import/prefer-default-export': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/no-named-as-default': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react-hooks/rules-of-hooks': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'react/prefer-stateless-function': 'error',
        'react/destructuring-assignment': 'off',
        'react/jsx-filename-extension': [
          0,
          { extensions: ['.jsx', '.js', '.ts', '.tsx'] },
        ],
        'jsx-a11y/label-has-associated-control': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        'max-len': [2, 150, 2],
        'no-use-before-define': 'off',
      }),
    },
  ],
};
