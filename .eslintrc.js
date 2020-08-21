const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));

module.exports = {
  extends: [
    'prettier',
    'prettier/react',
    //  'react-app',
    'eslint:recommended',
    'standard',
  ],
  plugins: ['prettier', 'react', 'react-hooks', 'jsx-a11y', 'standard'],
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.eslint.json',
  },
  rules: {
    //  0 = off, 1 = warn, 2 = error
    'no-console': 2,
    'comma-dangle': [2, 'always-multiline'],
    'object-curly-newline': 0,
    eqeqeq: 2,
    camelcase: 2,
    'max-params': [2, 3],
    'max-lines-per-function': ['error', { max: 60, skipBlankLines: true, skipComments: true }],
    'max-depth': ['error', 4],
    'max-lines': ['error', 400],
    semi: [2, 'always'],
    'object-shorthand': [0, 'never'],
    quotes: [2, 'single'],
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'prettier/prettier': ['error', prettierOptions],
    'padding-line-between-statements': [
      2,
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'block' },
      { blankLine: 'always', prev: 'block', next: '*' },
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
    ],
  },
};
