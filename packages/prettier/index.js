module.exports = {
  printWidth: 100,
  quoteProps: "as-needed",
  trailingComma: "es5",
  singleQuote: true,
  importOrder: [], // Override this for your repo. https://github.com/trivago/prettier-plugin-sort-imports
  importOrderSeparation: true, 
  importOrderSortSpecifiers: true,
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  overrides: [
    {
      files: ".firebaserc",
      options: { parser: "json" },
    },
  ],
};
