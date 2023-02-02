const Encore = require('@symfony/webpack-encore');

Encore
  .setOutputPath('public/build/themes/syliustailwind')
  .setPublicPath('/build/themes/syliustailwind')

  .addEntry('syliustailwind-theme-entry', './themes/syliustailwind/assets/entry.js')

  .disableSingleRuntimeChunk()
  .cleanupOutputBeforeBuild()
  .enablePostCssLoader()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction());

const config = Encore.getWebpackConfig();

config.name = 'syliustailwind-theme';

Encore.reset();

module.exports = config;
