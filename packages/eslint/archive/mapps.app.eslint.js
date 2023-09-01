module.exports = {
  root: true,
  extends: ["../../.eslintrc.js"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["tsconfig.json"],
    soruceType: "module"
  },
  ignorePatterns: [
    "metro.config.js",
    ".eslintrc.js", // TODO (BNR): Should we lint this script?
    "plugins/withNativeFirebase.js"
  ],
  globals: {
    "__DEV__": true
  }
};
  