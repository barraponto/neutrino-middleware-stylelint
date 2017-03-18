# Neutrino Stylelint preset
[![NPM version][npm-image]][npm-url] [![NPM downloads][npm-downloads]][npm-url] [![Join Slack][slack-image]][slack-url]
`neutrino-preset-stylelint` is a Neutrino preset that adds basic support for
[Stylelint][stylelint].

## Documentation

Install this preset to your development dependencies, then set it in
`package.json`:

```json
  "config": {
    "presets": [
      "neutrino-preset-stylelint"
    ]
  },
```

Configuration can be done either through a `stylelint.config.js` file or in
`package.json` like this:

```json
"config": {
  "stylelint": {
    "extends": "stylelint-config-standard"
  },
  "presets": [
    "neutrino-preset-stylelint",
  ]
},
```

See [Styelint configuration documentation][stylelint-config-docs].
Also, don't forget to install any configs you want to extend.

## To Do

- [ ] Support Neutrino 5.

[stylelint]: https://stylelint.io/
[stylelint-config-docs]: https://stylelint.io/user-guide/configuration/
[stylelint-config-standard]: https://github.com/stylelint/stylelint-config-standard
[npm-image]: https://img.shields.io/npm/v/neutrino-preset-stylelint.svg
[npm-downloads]: https://img.shields.io/npm/dt/neutrino-preset-stylelint.svg
[npm-url]: https://npmjs.org/package/neutrino-preset-stylelint
[slack-image]: https://neutrino-slack.herokuapp.com/badge.svg
[slack-url]: https://neutrino-slack.herokuapp.com/
