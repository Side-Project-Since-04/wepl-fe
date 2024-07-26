module.exports = {
  extends: ['@wepl/eslint-config/next.js', 'plugin:testing-library/react', 'plugin:jest-dom/recommended'],
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  rules: {},
};
