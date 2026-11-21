// OK: bare require
const { used_destructured } = require('./destructured');

// False positive: require wrapped in a type assertion
const { used_destructured_as } = require('./destructured-as') as typeof import('./destructured-as');

// False positive: require wrapped in `satisfies`
const { used_satisfies } = require('./destructured-satisfies') satisfies typeof import('./destructured-satisfies');

console.log(used_destructured(), used_destructured_as(), used_satisfies());
