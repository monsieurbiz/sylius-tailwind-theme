# sylius tailwind theme

## Install

1. You may need our Theme Companion plugin: https://github.com/monsieurbiz/SyliusThemeCompanionPlugin#readme
2. Require the theme: `composer require monsieurbiz/sylius-tailwind-theme`
3. Add Yarn dependencies:
   ```bash
   yarn add daisyui@^2.50.0
   yarn add postcss-loader@^7.0.0 --dev
   ```
4. Update your `webpack.config.js`:
   ```diff
     appAdminConfig.name = 'app.admin';
     
   + // Themes config
   + const syliusTailwindThemeConfig = require('./vendor/monsieurbiz/sylius-tailwind-theme/webpack.config');
     
   - module.exports = [shopConfig, adminConfig, appShopConfig, appAdminConfig];
   + module.exports = [shopConfig, adminConfig, appShopConfig, appAdminConfig, syliusTailwindThemeConfig];
   ```


## License

Please see LICENSE.txt.
