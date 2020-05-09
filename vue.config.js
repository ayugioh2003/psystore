const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/psystore/' : '/',
  // publicPath: './',

  chainWebpack: (config) => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach((type) =>
      addStyleResource(config.module.rule('scss').oneOf(type)),
    );
  },
  configureWebpack(config) {
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
    }
  },
};

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(
          __dirname,
          './node_modules/bootstrap/scss/_functions.scss',
        ),
        path.resolve(__dirname, './src/assets/helpers/_variables.scss'),
        path.resolve(__dirname, './node_modules/bootstrap/scss/_mixins.scss'),
      ],
    });
}
