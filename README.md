# Neutrino Stylelint middleware 
[![NPM version][npm-image]][npm-url] [![NPM downloads][npm-downloads]][npm-url]
[![Join Slack][slack-image]][slack-url]

`neutrino-preset-stylelint` is a Neutrino middleware that adds basic support
for [Stylelint][stylelint].

## Documentation

Install this middleware to your development dependencies, then set it in
`package.json`:

```json
  "neutrino": {
    "use": [
      "neutrino-middleware-stylelint",
      "neutrino-preset-web",
    ]
  },
```

The configuration will be picked up like any regular Stylelint project (see
[Styelint configuration documentation][stylelint-config-docs]). For example, it
could be added in `package.json`:

```json
  "stylelint": {
    "extends": "stylelint-config-standard"
  },
  "neutrino": {
    "use": [
      "neutrino-middleware-stylelint",
      "neutrino-preset-web",
    ]
  },
},
```

BTW, don't forget to install any stylelint configs you want to extend.

## Defaults

This middleware overrides some defaults from `stylelint-webpack-plugin`:

- `files`: set to `'**/*.+(css|scss|sass|less)'`, supporting CSS, Sass and Less
- `failOnError`: set to `false`, prevents Hot Module Replacement
  [issues][swp-hmr-issues].

You can see the other default values in [the stylelint-webpack-plugin
docs][swp-docs].

## Neutrino 4

Neutrino v4 is supported by
[neutrino-preset-stylelint][neutrino-preset-stylelint]. Please consider
updating to Neutrino 5.


[stylelint]: https://stylelint.io/
[stylelint-config-docs]: https://stylelint.io/user-guide/configuration/
[stylelint-config-standard]: https://github.com/stylelint/stylelint-config-standard
[swp-hmr-issues]: https://github.com/JaKXz/stylelint-webpack-plugin/issues/24
[swp-docs]: https://github.com/JaKXz/stylelint-webpack-plugin#options
[neutrino-preset-stylelint]: https://www.npmjs.com/package/neutrino-preset-stylelint
[npm-image]: https://img.shields.io/npm/v/neutrino-preset-stylelint.svg
[npm-downloads]: https://img.shields.io/npm/dt/neutrino-preset-stylelint.svg
[npm-url]: https://npmjs.org/package/neutrino-preset-stylelint
[slack-image]: https://neutrino-slack.herokuapp.com/badge.svg
[slack-url]: https://neutrino-slack.herokuapp.com/
