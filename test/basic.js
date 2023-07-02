const test = require('node:test')
const assert = require('node:assert/strict')

const config = require('../index.js')

/**
 * @param {unknown} object
 * @returns {boolean}
 */
const isObject = (object) => {
  return typeof object === 'object' && object !== null
}

test('test basic properties of config', async () => {
  assert.ok(isObject(config))
  assert.ok(isObject(config.parserOptions))
  assert.ok(isObject(config.env))
  assert.ok(isObject(config.rules))
  assert.ok(isObject(config.overrides))
})
