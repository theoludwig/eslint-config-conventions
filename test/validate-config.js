const { ESLint } = require('eslint')
const tap = require('tap')

const eslint = new ESLint({
  ignore: false,
  useEslintrc: false,
  overrideConfigFile: 'eslintrc.json'
})

tap.test('ensure we validate correctly JavaScript files', async (t) => {
  const [noErrors] = await eslint.lintFiles(
    'test/fixtures/javascript-no-errors.js'
  )
  const [withErrors] = await eslint.lintFiles(
    'test/fixtures/javascript-with-errors.js'
  )
  t.equal(noErrors.errorCount, 0)
  t.equal(withErrors.errorCount, 3)
})

tap.test('ensure we validate correctly TypeScript files', async (t) => {
  const [noErrors] = await eslint.lintFiles(
    'test/fixtures/typescript-no-errors.ts'
  )
  const [withErrors] = await eslint.lintFiles(
    'test/fixtures/javascript-with-errors.js'
  )
  t.equal(noErrors.errorCount, 0)
  t.equal(withErrors.errorCount, 3)
})

tap.test('ensure we allow top-level await', async (t) => {
  const [lintResult] = await eslint.lintFiles(
    'test/fixtures/top-level-await.mjs'
  )
  t.equal(lintResult.errorCount, 0)
})
