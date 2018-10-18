const babelConfig = require("./babel.config")();

module.exports = {
  module: {
    rules: [
      // Babel loader, will use your project’s .babelrc
      {
        test: /\.*sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: babelConfig.presets,
            plugins: babelConfig.plugins
          }
        }
      },
      // Other loaders that are needed for your components
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?modules"
      }
    ]
  }
};
