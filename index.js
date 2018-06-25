const Variance = require('online-variance')

module.exports = function (params) {
  const v = Variance(params)
  return function (x) {
    return Math.sqrt(v(x))
  }
}
