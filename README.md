# Neutrino Stylelint middleware 
[![NPM version][npm-image]][npm-url] [![NPM downloads][npm-downloads]][npm-url]
[![Join Slack][slack-image]][slack-url]

`neutrino-middleware-stylelint` is a Neutrino middleware that adds basic support
for [Stylelint][stylelint].

## Installation

Installation requires a single command:

`yarn add --dev neutrino-middleware-stylelint`

If you want to extend a stylelint configuration, such as [the Stylelint
standard configuration][stylelint-config-standard], don't forget to install it
too.

`yarn add --dev stylelint-config-standard`

(Yet, if that's all you really want, use our [pre-configured
preset][neutrino-preset-stylelint-standard] instead.)

## Documentation

Using this middleware requires configuration through options. It is not
designed to be used on its own, instead it should be configured in your own
preset.

For example, in `.neutrinorc.js`, write this configuration:

```javascript
module.exports = {
  use: [
    ['neutrino-middleware-stylelint', {
      config: {
        extends: require.resolve('stylelint-config-standard'),
        rules: {
          "indentation": "tab",
          "number-leading-zero": null,
          "property-no-unknown": [true, {"ignoreProperties": ["composes"]}],
          "unit-whitelist": ["em", "rem", "s"]
        }
      }
    }]
  ],
};

```

See [neutrino advanced configuration][neutrino-advanced-configuration] for more
details.

## Options

Every [stylelint plugin option][swp-docs] can be overwritten by setting in the
middleware options.

## Defaults

This middleware overrides some defaults from `stylelint-webpack-plugin`:

- `files`: set to `'**/*.+(css|scss|sass|less)'`, supporting CSS, Sass and Less
- `failOnError`: set to `false`, prevents Hot Module Replacement
  [issues][swp-hmr-issues].

You can see the other default values in [the stylelint-webpack-plugin
docs][swp-docs].

## stylelint.config.js

`neutrino-middleware-stylelint` also provides a method for getting the
Stylelint configuration suitable for use in a `stylelint.config.js` file.
Typically this is used for providing hints or fix solutions to the development
environment, e.g. IDEs and text editors.

Create a stylelint.config.js file in the root of the project.

```javascript
// styleling.config.js
const { Neutrino } = require('neutrino');
const api = Neutrino();
module.exports = api.call('stylelintrc');
```


[stylelint]: https://stylelint.io/
[stylelint-config-docs]: https://stylelint.io/user-guide/configuration/
[stylelint-config-standard]: https://github.com/stylelint/stylelint-config-standard
[swp-hmr-issues]: https://github.com/JaKXz/stylelint-webpack-plugin/issues/24
[swp-docs]: https://github.com/JaKXz/stylelint-webpack-plugin#options
[neutrino-middleware-stylelint]: https://www.npmjs.com/package/neutrino-middleware-stylelint
[neutrino-preset-stylelint-standard]: https://www.npmjs.com/package/neutrino-preset-stylelint-standard
[npm-image]: https://img.shields.io/npm/v/neutrino-middleware-stylelint.svg
[npm-downloads]: https://img.shields.io/npm/dt/neutrino-middleware-stylelint.svg
[npm-url]: https://npmjs.org/package/neutrino-middleware-stylelint
[slack-image]: https://neutrino-slack.herokuapp.com/badge.svg
[slack-url]: https://neutrino-slack.herokuapp.com/
