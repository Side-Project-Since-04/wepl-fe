module.exports = {
  extends: ["@wepl/eslint-config/next.js"],
  parserOptions: {
    project: "./tsconfig.json",
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  rules: {
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "unicorn/filename-case": "off",
  },
};
