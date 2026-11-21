// OK: bare require
const { used_destructured } = require('./destructured');

// False positive: require wrapped in a type assertion
const { used_destructured_as } = require('./destructured-as') as typeof import('./destructured-as');

// False positive: require wrapped in `satisfies`
const { used_satisfies } = require('./destructured-satisfies') satisfies typeof import('./destructured-satisfies');

// OK: member access directly on a bare require
const member = require('./member').used_member;

// False positive: member access on a require wrapped in a type assertion
const memberAs = (require('./member-as') as typeof import('./member-as')).used_member_as;

console.log(used_destructured(), used_destructured_as(), used_satisfies(), member(), memberAs());
