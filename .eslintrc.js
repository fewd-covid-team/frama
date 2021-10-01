// TODO: make this ok with prettier
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['prettier', 'react', '@typescript-eslint'],
  extends: [
    // 'eslint:recommended',
    // 'plugin:react/recommended',
    // 'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    quotes: 'off',
    // "@typescript-eslint/quotes": ["error"],
    // 'prettier/prettier': ['error'],
    'react/jsx-props-no-spreading': 'off',
  },
  ignorePatterns: ['**/*.bundle.js', 'webpack.config.js'],
};
