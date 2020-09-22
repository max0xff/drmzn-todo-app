module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
  },
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variableLike',
        format: ['camelCase', 'snake_case', 'PascalCase', 'UPPER_CASE'],
      },
    ],
    'no-underscore-dangle': 0,
    'no-console': 0,
    'no-restricted-globals': 0,
    '@typescript-eslint/camelcase': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/prop-types': 0,
    'max-len': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'arrow-body-style': 0,
    'padded-blocks': 1,
    'no-unneeded-ternary': 0,
    'object-curly-newline': 0,
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'airbnb-typescript',
  ],
};
