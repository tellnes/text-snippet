var strip = require('strip')
  , summary = require('node-summary')

module.exports = function (str) {
  str = String(str || '')

  try {
    str = strip(str)
    // Yes, this is synchronous
    summary.summarize('', str, function (err, s) {
      if (err) throw err
      str = s || str.slice(0, 500)
    })
  } catch (e) {
    str = str.slice(0, 500)
  }

  str = str.trim()
  str = str.replace(/\s{1,}/g, ' ')

  return str
}
