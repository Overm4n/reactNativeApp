module.exports = function (api) {
    api.cache(true);
    return {
      presets: ["babel-preset-expo"],
      plugins: [
        [
          require.resolve("babel-plugin-module-resolver"),
          {
            extensions: [".ts"],
            alias: {
              configs: "./configs",
            },
          },
        ],
      ],
    };
  };
  