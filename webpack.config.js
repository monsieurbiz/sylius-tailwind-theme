const path = require('path');
const Encore = require('@symfony/webpack-encore');

const syliusBundles = path.resolve(__dirname, '../../vendor/sylius/sylius/src/Sylius/Bundle/');
const uiBundleScripts = path.resolve(syliusBundles, 'UiBundle/Resources/private/js/');
const uiBundleResources = path.resolve(syliusBundles, 'UiBundle/Resources/private/');
const mainShopAssets = path.resolve(__dirname, '../../assets/shop/');
const themeAlias = {
  'sylius/ui': uiBundleScripts,
  'sylius/ui-resources': uiBundleResources,
  'sylius/bundle': syliusBundles,
  '@mainShopAssets': mainShopAssets,
};

Encore
  .setOutputPath('public/build/themes/sylius-tailwind')
  .setPublicPath('/build/themes/sylius-tailwind')

  .addEntry('sylius-tailwind-theme-entry', './themes/sylius-tailwind-theme/assets/entry.js')

  .disableSingleRuntimeChunk()
  .cleanupOutputBeforeBuild()
  .enablePostCssLoader()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction());

const config = Encore.getWebpackConfig();
config.name = 'sylius-tailwind-theme';
config.resolve.alias = themeAlias;

Encore.reset();

module.exports = config;
