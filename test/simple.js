
var snippet = require('../')
  , fs = require('fs')
  , assert = require('assert')

var got = snippet('foo')

var want = 'foo'

assert.equal(got, want)
