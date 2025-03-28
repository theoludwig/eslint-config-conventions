import assert from "node:assert/strict"
import { describe, it } from "node:test"

import { ESLint } from "eslint"

const eslint = new ESLint()

describe("ESLint configuration", () => {
  it("should validate correctly JavaScript files", async () => {
    const [noErrors] = await eslint.lintFiles(
      "test/fixtures/javascript-no-errors.js",
    )
    const [withErrors] = await eslint.lintFiles(
      "test/fixtures/javascript-with-errors.js",
    )
    assert.strictEqual(
      noErrors?.errorCount,
      0,
      JSON.stringify(noErrors, null, 2),
    )
    assert.strictEqual(
      withErrors?.errorCount,
      3,
      JSON.stringify(withErrors, null, 2),
    )
  })

  it("should validate correctly TypeScript files", async () => {
    const [noErrors] = await eslint.lintFiles(
      "test/fixtures/typescript-no-errors.ts",
    )
    const [withErrors] = await eslint.lintFiles(
      "test/fixtures/javascript-with-errors.js",
    )
    assert.strictEqual(
      noErrors?.errorCount,
      0,
      JSON.stringify(noErrors, null, 2),
    )
    assert.strictEqual(
      withErrors?.errorCount,
      3,
      JSON.stringify(withErrors, null, 2),
    )
  })

  it("should not use deprecated rules", async () => {
    const [javascriptLintResult] = await eslint.lintFiles(
      "test/fixtures/javascript-no-errors.js",
    )
    const [typescriptLintResult] = await eslint.lintFiles(
      "test/fixtures/typescript-no-errors.ts",
    )
    assert.strictEqual(
      javascriptLintResult.usedDeprecatedRules.length,
      0,
      JSON.stringify(javascriptLintResult, null, 2),
    )
    assert.strictEqual(
      typescriptLintResult.usedDeprecatedRules.length,
      0,
      JSON.stringify(typescriptLintResult, null, 2),
    )
  })

  it("should allow top-level await", async () => {
    const [lintResult] = await eslint.lintFiles(
      "test/fixtures/top-level-await.mjs",
    )
    assert.strictEqual(
      lintResult?.errorCount,
      0,
      JSON.stringify(lintResult, null, 2),
    )
  })

  it("should allow to ignore floating promise with void operator (@typescript-eslint/no-floating-promises)", async () => {
    const [lintResult] = await eslint.lintFiles(
      "test/fixtures/typescript-no-errors-ignore-promise.ts",
    )
    assert.strictEqual(
      lintResult?.errorCount,
      0,
      JSON.stringify(lintResult, null, 2),
    )
  })
})
