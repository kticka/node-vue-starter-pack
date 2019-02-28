const {VueLoaderPlugin} = require('vue-loader');

const server_config = {
  port: 80
};

const browsersync_config = {
  open:  false,
  port:  3000,
  proxy: 'localhost:' + server_config.port
};

const webpack_config = {
  mode:    'development',
  watch:   false,
  entry:   './app/js/app.js',
  module:  {
    rules: [
      {
        test:    /\.vue$/,
        loader:  'vue-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};

module.exports = {
  server_config:      server_config,
  browsersync_config: browsersync_config,
  webpack_config:     webpack_config
};