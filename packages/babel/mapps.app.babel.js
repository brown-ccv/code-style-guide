module.exports = function(api) {
  api.cache(false);

  process.env.EXPO_ROUTER_APP_ROOT = "./src/app";

  return {
    presets: ["babel-preset-expo"],
    plugins: [
      require.resolve("expo-router/babel"),
      [
        "module-resolver",
        {
          extensions: [".jsx", ".js", ".tsx", ".ts", ".ios.js", ".android.js"],
          alias: {
            "@config": "./app/config",
            "@screens": "./app/screens",
          },
        },
      ],
    ],
  };
};
