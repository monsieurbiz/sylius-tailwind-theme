# sylius tailwind theme

## Install

1. You may need our Theme Companion plugin: https://github.com/monsieurbiz/SyliusThemeCompanionPlugin#readme
2. Require the theme: `composer require monsieurbiz/sylius-tailwind-theme`
3. Install Yarn dependencies: (the `package.json` is updated by flex)
   ```bash
   yarn install --force
   ```
4. Update your `webpack.config.js` to enable the compilation of your theme:
   ```diff
   - module.exports = [shopConfig, adminConfig, appShopConfig, appAdminConfig];
   + module.exports = [shopConfig, adminConfig, appShopConfig, appAdminConfig, syliusTailwindThemeConfig];
   ```
## Add your custom theme into your Sylius project

Please follow the instructions of the [Custom Theme](https://github.com/monsieurbiz/sylius-setup/tree/master/dist/sylius/themes/custom#readme) from our Sylius Setup project.

## License

Please see LICENSE.txt.
