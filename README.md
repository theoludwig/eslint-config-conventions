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

[Node.js](https://nodejs.org/) >= 18.0.0

### Installation

```sh
npm install --save-dev \
  eslint@^8.57.0 \
  eslint-plugin-promise@^7.0.0 \
  eslint-plugin-unicorn@^55.0.0 \
  eslint-config-conventions@latest
```

Dependencies are:

- [ESLint](https://github.com/eslint/eslint)
- [ESLint Plugins](https://eslint.org/docs/user-guide/configuring/plugins)
  - [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
  - [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- This package: `eslint-config-conventions`

#### Installation with TypeScript

If you want to use **TypeScript**, you also need to install:

```sh
npm install --save-dev \
  "typescript@^5.6.2" \
  "@typescript-eslint/eslint-plugin@^8.0.0" \
  "@typescript-eslint/parser@^8.0.0"
```

Dependencies are:

- [TypeScript](https://github.com/Microsoft/TypeScript)
- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint): ESLint rules for TypeScript.
- [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint): ESLint parser for TypeScript.

### Configuration

#### `.eslintrc.json` (JavaScript)

```json
{
  "root": true,
  "extends": ["conventions"],
  "plugins": ["promise", "unicorn"]
}
```

#### `.eslintrc.json` (TypeScript)

```json
{
  "root": true,
  "extends": ["conventions"],
  "plugins": ["promise", "unicorn"],
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "parser": "@typescript-eslint/parser",
      "plugins": ["@typescript-eslint"],
      "parserOptions": {
        "projectService": true
      }
    }
  ]
}
```

#### Configuration with [Prettier](https://prettier.io/) (recommended)

```sh
npm install --save-dev prettier

# Create an empty config file to let editors and other tools know you are using Prettier
# You can personalize it with your own rules
echo "{}" > .prettierrc.json
```

That's all! No need to update the `.eslintrc.json` configuration.

We discourage usage of [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) and [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier), as `eslint-config-conventions` doesn't include any stylistic rules, and including these packages has several drawbacks (listed in [Integrating with Linters](https://prettier.io/docs/en/integrating-with-linters.html)) and brings no benefits for this configuration.

#### `package.json`

```json
{
  "scripts": {
    "lint:eslint": "eslint . --max-warnings 0 --report-unused-disable-directives --ignore-path .gitignore",
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
