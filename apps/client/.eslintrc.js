module.exports = {
  extends: ["@wepl/eslint-config/next.js"],
  parserOptions: {
    project: "./tsconfig.json",
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
};
