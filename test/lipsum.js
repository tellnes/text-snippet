
var snippet = require('../')
  , fs = require('fs')
  , assert = require('assert')

var got = snippet(fs.readFileSync(__dirname + '/lipsum.txt'))

var want = 'Maecenas dolor tortor, molestie at convallis a, fermentum vel lacus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed malesuada in sem ut semper. Sed ac ipsum ut libero vestibulum rhoncus eu nec magna.'

assert.equal(got, want)
