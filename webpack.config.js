const { createConfig } = require("../../webpack.shared");

module.exports = createConfig({
  dirname: __dirname,
  name: "example", // must match the key the shell uses in its `remotes`
  port: 3001,
  exposes: {
    "./App": "./src/App.js",
  },
});
