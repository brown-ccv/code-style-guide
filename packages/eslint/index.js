module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:jsdoc/recommended-typescript",
    "prettier"
  ],
  parser: "@typescript-eslint/parser",
  ignorePatterns: [
    "dist", // Ignore built files.
    "out",
    "build",
    "node_modules",
  ],
  plugins: [
    "@typescript-eslint",
    "jsdoc",
    "import",
  ],
  rules: {
    "quotes": ["error", "double"],
    "import/no-unresolved": 0,
    "indent": ["error", 2],
    "import/order": [
      "warn",
      {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
      },
    ],
  },
};