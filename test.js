const test = require('tape')
const StandardDeviation = require('./index.js')

const values = [1, 3, 5, NaN, 'Bob', '6', 8]

test('Population standard deviation: NaN and Strings', (_) => {
  var std = StandardDeviation()
  values.forEach(v => { std(v) })
  console.log(std())
  _.true(std() - 2.416609194 < 0.001)
  _.end()
})

test('Sample variance: NaN and Strings', (_) => {
  var std = StandardDeviation({ddof: 1})
  values.forEach(v => { std(v) })
  console.log(std())
  _.true(std() - 2.701851217 < 0.001)
  _.end()
})
