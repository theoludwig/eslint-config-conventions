const test = require("node:test")
const assert = require("node:assert/strict")

const { ESLint } = require("eslint")

const eslint = new ESLint({
  ignore: false,
  useEslintrc: false,
  overrideConfigFile: "eslintrc.json",
})

test("ensure we validate correctly JavaScript files", async () => {
  const [noErrors] = await eslint.lintFiles(
    "test/fixtures/javascript-no-errors.js",
  )
  const [withErrors] = await eslint.lintFiles(
    "test/fixtures/javascript-with-errors.js",
  )
  assert.strictEqual(noErrors?.errorCount, 0)
  assert.strictEqual(withErrors?.errorCount, 3)
})

test("ensure we do not use deprecated rules", async () => {
  const [javascriptLintResult] = await eslint.lintFiles(
    "test/fixtures/javascript-no-errors.js",
  )
  const [typescriptLintResult] = await eslint.lintFiles(
    "test/fixtures/typescript-no-errors.ts",
  )
  assert.strictEqual(javascriptLintResult.usedDeprecatedRules.length, 0)
  assert.strictEqual(typescriptLintResult.usedDeprecatedRules.length, 0)
})

test("ensure we validate correctly TypeScript files", async () => {
  const [noErrors] = await eslint.lintFiles(
    "test/fixtures/typescript-no-errors.ts",
  )
  const [withErrors] = await eslint.lintFiles(
    "test/fixtures/javascript-with-errors.js",
  )
  assert.strictEqual(noErrors?.errorCount, 0)
  assert.strictEqual(withErrors?.errorCount, 3)
})

test("ensure we allow top-level await", async () => {
  const [lintResult] = await eslint.lintFiles(
    "test/fixtures/top-level-await.mjs",
  )
  assert.strictEqual(lintResult?.errorCount, 0)
})

test("ensure we allow to ignore floating promise with void operator (@typescript-eslint/no-floating-promises)", async () => {
  const [lintResult] = await eslint.lintFiles(
    "test/fixtures/typescript-no-errors-ignore-promise.ts",
  )
  assert.strictEqual(lintResult?.errorCount, 0)
})
