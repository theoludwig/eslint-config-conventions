const tap = require('tap')

const config = require('../index.js')

const isObject = (object) => {
  return typeof object === 'object' && object !== null
}

tap.test('test basic properties of config', async (t) => {
  t.ok(isObject(config.parserOptions))
  t.ok(isObject(config.env))
  t.ok(isObject(config.rules))
  t.ok(isObject(config.overrides))
})
