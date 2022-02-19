const test = require('tape')

const config = require('../index.js')

test('test basic properties of config', function (t) {
  t.ok(isObject(config.parserOptions))
  t.ok(isObject(config.env))
  t.ok(isObject(config.rules))
  t.ok(isObject(config.overrides))
  t.end()
})

function isObject(object) {
  return typeof object === 'object' && object !== null
}
