const StylelintPlugin = require('stylelint-webpack-plugin');

const defaultOptions = {
  // overrides Sass-only defaults (see JaKXz/stylelint-webpack-plugin#8)
  files: ['**/*.+(css|scss|sass|less)'],
  // temporary fix for HMR issues with stylelint errors
  // (see JaKXz/stylelint-webpack-plugin#24)
  failOnError: false
};

module.exports = ({ config }) => {
  config
    .plugin('stylelint')
    // let project options override default options.
    .use(StylelintPlugin, [defaultOptions]);
};
