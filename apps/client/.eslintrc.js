module.exports = {
  extends: ['@wepl/eslint-config/next.js', 'plugin:testing-library/react', 'plugin:jest-dom/recommended'],
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: ['simple-import-sort'],
  rules: {
    'import/no-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    'unicorn/filename-case': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
  },
};
