/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  root: true,
  extends: [
    "plugin:import/recommended",
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "@remix-run/eslint-config/jest-testing-library",
    "prettier",
  ],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "warn",
    // Prevent issues with prettier/prettier (known bug)
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",

    // Custom rules
    "import/order": [
      "warn",
      {
        groups: ["external", "builtin", "internal", "parent", "sibling", "index"],
        pathGroups: [
          { pattern: "app", group: "internal" },
          { pattern: "app/components", group: "internal" },
          { pattern: "app/models", group: "internal" },
          { pattern: "app/routes", group: "internal" },
          { pattern: "app/types", group: "internal" },
        ],
      },
    ],
    "@typescript-eslint/no-unused-vars": "warn",
  },
  // We're using vitest which has a very similar API to jest
  // (so the linting plugins work nicely), but we have to
  // set the jest version explicitly.
  settings: {
    jest: {
      version: 28,
    },
  },
};

