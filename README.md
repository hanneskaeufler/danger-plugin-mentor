# danger-plugin-mentor

[![Build Status](https://travis-ci.org/hanneskaeufler/danger-plugin-mentor.svg?branch=master)](https://travis-ci.org/hanneskaeufler/danger-plugin-mentor)
[![npm version](https://badge.fury.io/js/danger-plugin-mentor.svg)](https://badge.fury.io/js/danger-plugin-mentor)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Maintainability](https://api.codeclimate.com/v1/badges/08c3ff10e169f93aa50c/maintainability)](https://codeclimate.com/github/hanneskaeufler/danger-plugin-mentor/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/08c3ff10e169f93aa50c/test_coverage)](https://codeclimate.com/github/hanneskaeufler/danger-plugin-mentor/test_coverage) [![Greenkeeper badge](https://badges.greenkeeper.io/hanneskaeufler/danger-plugin-mentor.svg)](https://greenkeeper.io/)

> Level up your programming skills by getting bite-sized tips and tricks in your pull requests.

## Usage

Install:

```sh
yarn add danger-plugin-mentor --dev
```

At a glance:

```js
// dangerfile.js
import mentor from 'danger-plugin-mentor'

mentor()
```

![example](example.png)

You can specify an array of string tags to filter the shown tips:

```js
mentor(["testing", "agile"])
```

Should you not like or want to expand upon the default set of tips, you can pass an array of tips that you provide yourself.

```js
mentor([], myOwnListOfTips)
```

The items in `myOwnListOfTips` have to conform to the `Tip` [interface](src/tip.ts), that,
in Typescript, you can import via `import { Tip } from 'danger-plugin-mentor'`.
In Javascript, you just need to make sure that every item responds to the methods
of this interface. Of course you can mix your own tips with the included tips:

```js
import { default as mentor, defaultTips } from 'danger-plugin-mentor'

mentor([], [...defaultTips(), ...myOwnListOfTips])
```

## Changelog

See the GitHub [release history](https://github.com/hanneskaeufler/danger-plugin-mentor/releases).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).
