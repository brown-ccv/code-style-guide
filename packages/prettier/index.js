module.exports = {
  printWidth: 100,
  quoteProps: "as-needed",
  trailingComma: "es5",
  singleQuote: true,
  overrides: [
    {
      files: ".firebaserc",
      options: { parser: "json" },
    },
  ],
};
