const Std = require('.')
const s1 = Std()
const s2 = Std()
// Direct call:
;[1, 2, 3, 4, 5].forEach(value => { s1(value) })
// or via .fit()
;[1, 2, 3, 4, 5].forEach(value => { s2.fit(value) })

console.log('Population standard deviation:', s1(), s2.value) // ~> 1.41421

const s3 = Std({ddof: 1}) // Delta degrees of freedom. The divisor used in calculations (N - ddof), where N - number of elements
;[1, 2, 3, 4, 5].forEach(value => { s3.fit(value) })

console.log('Sample std:', s3.value) // ~> 1.58114
