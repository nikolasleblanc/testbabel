const babelConfig = require("./../packages/_build/babel.config")();
const webpackConfig = require("./../webpack.config.js");

const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  // Extend defaultConfig as you need.

  // For example, add typescript loader:
  defaultConfig.module.rules.push({
    test: /\.tsx?$/,
    use: [require.resolve("react-docgen-typescript-loader")]
  });
  defaultConfig.module.rules.push(webpackConfig.module.rules[0]);
  defaultConfig.resolve.extensions.push(".ts", ".tsx");

  return defaultConfig;
};
