const path = require('path');
const package = require(path.join(process.cwd(), 'package.json'));
const StylelintPlugin = require('stylelint-webpack-plugin');

const defaultOptions = {
  // overrides Sass-only defaults (see JaKXz/stylelint-webpack-plugin#8)
  files: ['**/*.+(css|scss|sass|less)'],
  // temporary fix for HMR issues with style erros (see JaKXz/stylelint-webpack-plugin#24)
  failOnError: false,
};
const projectOptions = (package.config || package.config.stylelint) ? { config: package.config.stylelint } : {};

module.exports = ({ config }) => {
  config
    .plugin('stylelint')
    // let project options override default options.
    .use(StylelintPlugin, Object.assign({}, defaultOptions, projectOptions));
};
