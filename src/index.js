const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = ({ config }) => {
  config
    .plugin('stylelint')
    .use(StylelintPlugin, {
      // overrides Sass-only defaults (see JaKXz/stylelint-webpack-plugin#8)
      files: ['**/*.+(css|scss|sass|less)'],
      // temporary fix for HMR issues with style erros (see JaKXz/stylelint-webpack-plugin#24)
      failOnError: false,
    });
};
