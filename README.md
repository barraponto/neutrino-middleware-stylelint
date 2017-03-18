# Neutrino Stylelint config
[![NPM version][npm-image]][npm-url] [![NPM downloads][npm-downloads]][npm-url] [![Join Slack][slack-image]][slack-url]

`neutrino-config-stylelint` is a Neutrino config that adds basic support for
[Stylelint][stylelint].

## Documentation

Install this config to your development dependencies, then set it in
`package.json`:

```json
  "config": {
    "configs": [
      "neutrino-config-stylelint"
      "neutrino-config-web",
    ]
  },
```

Don't forget to create `stylelint.config.js` or add stylelint configuration to
`package.json`. See [Styelint configuration documentation][stylelint-config-docs].

Also, don't forget to install any configs you want to use.

## To Do

- [ ] Create pre-configured configs for [stylelint-config-standard][stylelint-config-standard].
- [ ] Support Neutrino 5.

[stylelint]: https://stylelint.io/
[stylelint-config-docs]: https://stylelint.io/user-guide/configuration/
[stylelint-config-standard]: https://github.com/stylelint/stylelint-config-standard
[npm-image]: https://img.shields.io/npm/v/neutrino-config-stylelint.svg
[npm-downloads]: https://img.shields.io/npm/dt/neutrino-config-stylelint.svg
[npm-url]: https://npmjs.org/package/neutrino-config-stylelint
[slack-image]: https://neutrino-slack.herokuapp.com/badge.svg
[slack-url]: https://neutrino-slack.herokuapp.com/
