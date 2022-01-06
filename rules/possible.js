module.exports = {
  rules: {
    "array-callback-return": ["error", { allowImplicit: false }],
    "constructor-super": 2,
    "for-direction": 2,
    "getter-return": [2, { allowImplicit: false }],
    "no-async-promise-executor": 2,
    "no-await-in-loop": 2,
    "no-class-assign": 2,
    "no-compare-neg-zero": 2,
    "no-cond-assign": [2, "always"],
    "no-const-assign": 2,
    "no-constant-condition": 2,
    "no-constructor-return": 2,
    "no-control-regex": 2,
    "no-debugger": 2,
    "no-dupe-args": 2,
    "no-dupe-class-members": 2,
    "no-dupe-else-if": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-duplicate-imports": 2,
    "no-empty-character-class": 2,
    "no-empty-pattern": 2,
    "no-ex-assign": 2,
    "no-fallthrough": 2,
    "no-func-assign": 2,
    "no-import-assign": 2,
    "no-inner-declarations": [2, "both"],
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": [2, { skipComments: true }],
    "no-loss-of-precision": 2,
    "no-misleading-character-class": 2,
    "no-new-symbol": 2,
    "no-obj-calls": 2,
    "no-promise-executor-return": 2,
    "no-prototype-builtins": 0,
    "no-self-assign": [2, { props: true }],
    "no-self-compare": 2,
    "no-setter-return": 2,
    "no-sparse-arrays": 2,
    "no-template-curly-in-string": 2,
    "no-this-before-super": 2,
    "no-undef": 2,
    "no-unexpected-multiline": 2,
    "no-unreachable": 2,
    "no-unreachable-loop": 2,
    "no-unsafe-finally": 2,
    "no-unsafe-negation": [2, { enforceForOrderingRelations: true }],
    "no-unsafe-optional-chaining": [2, { disallowArithmeticOperators: true }],
    "no-unused-private-class-members": 2,
    "no-unused-vars": 2,
    "no-use-before-define": [2, "nofunc"],
    "require-atomic-updates": 2,
    "use-isnan": [2, { enforceForIndexOf: true }],
    "valid-typeof": 2,
  },
};