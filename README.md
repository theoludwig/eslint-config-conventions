<h1 align="center">eslint-config-conventions</h1>

<p align="center">
  <strong><a href="https://eslint.org/docs/developer-guide/shareable-configs">ESLint shareable config</a> to enforce strict conventions and good code quality.</strong>
</p>

</p>

<p align="center">
  <a href="./CONTRIBUTING.md"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat" /></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/licence-MIT-blue.svg" alt="Licence MIT"/></a>
  <a href="./CODE_OF_CONDUCT.md"><img src="https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg" alt="Contributor Covenant" /></a>
  <br />
  <a href="https://github.com/theoludwig/eslint-config-conventions/actions/workflows/lint.yml"><img src="https://github.com/theoludwig/eslint-config-conventions/actions/workflows/lint.yml/badge.svg?branch=develop" /></a>
  <a href="https://github.com/theoludwig/eslint-config-conventions/actions/workflows/test.yml"><img src="https://github.com/theoludwig/eslint-config-conventions/actions/workflows/test.yml/badge.svg?branch=develop" /></a>
  <br />
  <a href="https://conventionalcommits.org"><img src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg" alt="Conventional Commits" /></a>
  <a href="https://github.com/semantic-release/semantic-release"><img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg" alt="semantic-release" /></a>
  <a href="https://www.npmjs.com/package/eslint-config-conventions"><img src="https://img.shields.io/npm/v/eslint-config-conventions.svg" alt="npm version"></a>
</p>

## 📜 About

**eslint-config-conventions** is a [ESLint](https://eslint.org) configuration to enforce strict conventions and good code quality, it is highly inspired from [eslint-config-standard-with-typescript](https://github.com/standard/eslint-config-standard-with-typescript) but it is **stricter** and with **no formatting rules**, **only code-quality rules**. It supports both **JavaScript** and **TypeScript**.

This configuration is mostly **for catching bugs** and **code-quality** so it is recommended to use it with [Prettier](https://prettier.io/) for a consistent code style, it works with any `.prettierrc.json` configuration.

More information about **formatting rules** vs **code-quality rules** can be found on [Prettier vs. Linters](https://prettier.io/docs/en/comparison.html).

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 16.0.0

### Installation

```sh
npm install --save-dev \
  eslint@^8.44.0 \
  eslint-plugin-import@^2.27.5 \
  eslint-plugin-promise@^6.1.1 \
  eslint-plugin-unicorn@^47.0.0 \
  eslint-config-conventions@latest
```

This is a large number of packages due to [a known limitation in ESLint](https://github.com/eslint/eslint/issues/3458).

This list of dependencies are:

- [ESLint](https://github.com/eslint/eslint)
- 3 [ESLint Plugins](https://eslint.org/docs/user-guide/configuring/plugins)
  - [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
  - [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
  - [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- This package: `eslint-config-conventions`

If you want to use **TypeScript**, you also need to install:

```sh
npm install --save-dev \
  typescript@^5.1.6 \
  @typescript-eslint/eslint-plugin@^6.0.0 \
  @typescript-eslint/parser@^6.0.0
```

Dependencies are:

- [TypeScript](https://github.com/Microsoft/TypeScript)
- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint): ESLint rules for TypeScript.
- [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint): ESLint parser for TypeScript.

### Configuration with [Prettier](https://prettier.io/) (recommended)

You will need to install some dependencies in addition to those required:

```sh
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier

# Create an empty config file to let editors and other tools know you are using Prettier
# You can personalize it with your own rules
echo "{}" > .prettierrc.json
```

#### `.eslintrc.json`

```json
{
  "extends": ["conventions", "prettier"],
  "plugins": ["prettier"],
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "rules": {
    "prettier/prettier": "error"
  }
}
```

**Note:** Please read some important instructions regarding the `project` option [here](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser/README.md#configuration).

`"parserOptions.project"` is only required if you use **TypeScript**.

#### `package.json`

```jsonc
{
  "scripts": {
    "lint:eslint": "eslint . --ignore-path .gitignore",
    "lint:prettier": "prettier . --check"
  }
}
```

### Usage

```sh
npm run lint:eslint
# or to apply automatic fixes to code
npm run lint:eslint -- --fix

# Validate code formatting in all supported languages by Prettier
npm run lint:prettier
```

## 💡 Contributing

Anyone can help to improve the project, submit a Feature Request, a bug report or even correct a simple spelling mistake.

The steps to contribute can be found in the [CONTRIBUTING.md](./CONTRIBUTING.md) file.

## 📄 License

[MIT](./LICENSE)
