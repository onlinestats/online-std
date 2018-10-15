var Variance = require('online-variance')

module.exports = function (params) {
  var v = Variance(params)
  var n = 0
  var value

  var std = function std (x, seriesObject) {
    if (seriesObject && seriesObject.hasOwnProperty('variance') && !isNaN(seriesObject['variance'])) {
      value = Math.sqrt(seriesObject.variance)
      n = seriesObject.n
    } else {
      value = Math.sqrt(v(x))
      console.log(v.n)
      n = v.n
    }
    return value
  }

  std.fit = function (x, seriesObject) {
    std(x, seriesObject)
  }

  Object.defineProperty(std, 'value', {
    get: function () {
      return value
    }
  })

  Object.defineProperty(std, 'n', {
    get: function () {
      return n
    }
  })

  return std
}
