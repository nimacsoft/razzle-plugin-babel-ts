function modify(baseConfig, { target, dev }, webpack, userOptions = {}) {
	 const config = Object.assign({}, baseConfig);
	 
  config.resolve.extensions.push(".ts", ".tsx");
  config.module.rules.push({
    // Include ts, tsx
    test: /\.(ts|js)x?$/,
    exclude: /node_modules/,
    loader: "babel-loader"
  });
  return config;
}

module.exports = modify;
