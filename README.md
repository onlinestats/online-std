# online-std
Standard deviation calculation (piece-by-piece)
Based on the online Welford's algorithm for variance calculation (see `online-variance` package)

## Usage

```javascript
const Std = require('online-std')
const s = Std()
;[1, 2, 3, 4, 5].forEach(value => { s(value) })

console.log('Population standard deviation:', s()) // ~> 1.41421
```

### Population vs Sample std
Use a parameter `ddof: 1` to calculate sample standard deviation

```javascript
const Std = require('online-std')
const s = Std({ddof: 1}) // Delta degrees of freedom. The divisor used in calculations (N - ddof), where N - number of elements
;[1, 2, 3, 4, 5].forEach(value => { s(value) })

console.log('Sample std:', s()) // ~> 1.58114
```

