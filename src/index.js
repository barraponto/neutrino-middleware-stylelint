const merge = require('deepmerge');
const StylelintPlugin = require('stylelint-webpack-plugin');


module.exports = (neutrino, options = {}) => {
  // eslint-disable-next-line no-param-reassign
  neutrino.stylelintrc = () => neutrino.config.plugin('stylelint')
    .get('args')[0].config;

  const defaultOptions = {
    // disable regular postcss configuration loading
    config: {},
    // overrides Sass-only defaults (see JaKXz/stylelint-webpack-plugin#8)
    files: ['**/*.+(css|scss|sass|less)'],
    // only process source files (see barraponto/neutrino-preset-stylelint-standard/pull/1)
    context: neutrino.options.source,
    // temporary fix for HMR issues with stylelint errors
    // (see JaKXz/stylelint-webpack-plugin#24)
    failOnError: false
  };

  neutrino.config
    .plugin('stylelint')
    // let project options override default options.
    .use(StylelintPlugin, [merge(defaultOptions, options)]);
};
