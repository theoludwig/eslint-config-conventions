<h1 align="center">eslint-config-conventions</h1>

<p align="center">
  <strong><a href="https://eslint.org/docs/developer-guide/shareable-configs">ESLint shareable config</a> to enforce strict conventions and good code quality.</strong>
</p>

<p align="center">
  <a href="./CONTRIBUTING.md"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat" alt="CONTRIBUTING" /></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/licence-MIT-blue.svg" alt="Licence MIT"/></a>
  <a href="./CODE_OF_CONDUCT.md"><img src="https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg" alt="Contributor Covenant" /></a>
  <br />
  <a href="https://github.com/theoludwig/eslint-config-conventions/actions/workflows/lint.yml"><img src="https://github.com/theoludwig/eslint-config-conventions/actions/workflows/lint.yml/badge.svg?branch=develop" alt="lint action" /></a>
  <a href="https://github.com/theoludwig/eslint-config-conventions/actions/workflows/test.yml"><img src="https://github.com/theoludwig/eslint-config-conventions/actions/workflows/test.yml/badge.svg?branch=develop" alt="test action" /></a>
  <br />
  <a href="https://conventionalcommits.org"><img src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg" alt="Conventional Commits" /></a>
  <a href="https://github.com/semantic-release/semantic-release"><img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg" alt="semantic-release" /></a>
  <a href="https://www.npmjs.com/package/eslint-config-conventions"><img src="https://img.shields.io/npm/v/eslint-config-conventions.svg" alt="npm version"></a>
</p>

## 📜 About

**eslint-config-conventions** is a [ESLint](https://eslint.org) configuration to enforce strict conventions and good code quality. It supports both **JavaScript** and **TypeScript**.

This configuration is mostly **for catching bugs** and **code-quality** so it is recommended to use it with [Prettier](https://prettier.io/) for a consistent code style, it works with any `.prettierrc.json` configuration.

More information about **formatting rules** vs **code-quality rules** can be found on [Prettier vs. Linters](https://prettier.io/docs/en/comparison.html).

## ⚙️ Getting Started

### Prerequisites

[Node.js](https://nodejs.org/) >= 20.11.0

### Installation

```sh
npm install --save-dev \
  eslint@^9.12.0 \
  eslint-plugin-promise@^7.1.0 \
  eslint-plugin-unicorn@^56.0.0 \
  eslint-plugin-import-x@^4.3.1 \
  globals@^15.10.0 \
  typescript@~5.5.4 \
  typescript-eslint@^8.8.0 \
  eslint-config-conventions@latest
```

Dependencies are:

- [ESLint](https://github.com/eslint/eslint)
- [ESLint Plugins](https://eslint.org/docs/user-guide/configuring/plugins)
  - [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
  - [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
  - [eslint-plugin-import-x](https://github.com/un-ts/eslint-plugin-import-x)
- [globals](https://github.com/sindresorhus/globals)
- [TypeScript](https://github.com/Microsoft/TypeScript)
- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint): tooling which enables ESLint to support TypeScript.
- This package: `eslint-config-conventions`

### Configuration

#### `eslint.config.js`

```js
import typescriptESLint from "typescript-eslint"
import configConventions from "eslint-config-conventions"

export default typescriptESLint.config(...configConventions, {
  files: ["**/*.ts", "**/*.tsx"],
  languageOptions: {
    parser: typescriptESLint.parser,
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

#### Configuration with [Prettier](https://prettier.io/) (recommended)

```sh
npm install --save-dev prettier

# Create an empty config file to let editors and other tools know you are using Prettier
# You can personalize it with your own rules
echo "{}" > .prettierrc.json
```

That's all! No need to update the `eslint.config.js` configuration.

We discourage usage of [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) and [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier), as `eslint-config-conventions` doesn't include any stylistic rules, and including these packages has several drawbacks (listed in [Integrating with Linters](https://prettier.io/docs/en/integrating-with-linters.html)) and brings no benefits for this configuration.

#### `package.json`

```json
{
  "scripts": {
    "lint:eslint": "eslint . --max-warnings 0",
    "lint:prettier": "prettier . --check"
  }
}
```

### Usage

```sh
node --run lint:eslint
# or to apply automatic fixes to code
node --run lint:eslint -- --fix

# Validate code formatting in all supported languages by Prettier
node --run lint:prettier
```

## 💡 Contributing

Anyone can help to improve the project, submit a Feature Request, a bug report or even correct a simple spelling mistake.

The steps to contribute can be found in the [CONTRIBUTING.md](./CONTRIBUTING.md) file.

## 📄 License

[MIT](./LICENSE)
