# knip: `require()` behind a TypeScript type assertion

Minimal reproduction for a false positive in knip 6.47.0.

```sh
npm install
npx knip
```

`index.ts` consumes one export from each module through `require()`:

| Module | How it is required | Result |
| --- | --- | --- |
| `destructured.ts` | `const { x } = require('./m')` | OK |
| `destructured-as.ts` | `const { x } = require('./m') as typeof import('./m')` | `x` reported as unused |
| `destructured-satisfies.ts` | `const { x } = require('./m') satisfies typeof import('./m')` | `x` reported as unused |
| `member.ts` | `require('./m').x` | OK |
| `member-as.ts` | `(require('./m') as typeof import('./m')).x` | `x` reported as unused |

Actual output:

```
Unused exports (3)
used_destructured_as  destructured-as.ts:1:14
used_satisfies        destructured-satisfies.ts:1:14
used_member_as        member-as.ts:1:14
```

Expected output: no issues.
