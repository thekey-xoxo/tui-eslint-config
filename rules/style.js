module.exports = {
    rules: {
        //Stylistic Issues
        "array-bracket-spacing": [2, "never"],
        "block-spacing": [2, "never"],
        "brace-style": [2, "1tbs", {"allowSingleLine": false}],
        "camelcase": 2,
        "capitalized-comments": 0,
        "comma-dangle": [2, "never"],
        "comma-spacing": [2, {"before": false, "after": true}],
        "comma-style": [2, "last"],
        "computed-property-spacing": [2, "never"],
        "consistent-this": [2, "self"],
        "eol-last": 2,
        "func-name-matching": [2, "always", {"includeCommonJSModuleExports": false}],
        "func-names": 0,
        "func-style": 0,
        "func-call-spacing": [2, "never"],
        "id-length": 0,
        "id-match": 0,
        "indent": [2, 4, {"SwitchCase": 1}],
        "jsx-quotes": [2, "prefer-double"],
        "key-spacing": [2, {"beforeColon": false, "afterColon": true}],
        "keyword-spacing": 2,
        "linebreak-style": [2, "unix"],
        "line-comment-position": 0,
        "lines-around-comment": 0,
        "lines-around-directive": 2,
        "max-depth": [2, 3],
        "max-len": [2, {"code": 120, "tabWidth": 4, "ignoreStrings": true, "ignoreComments": true, "ignoreRegExpLiterals": true}],
        "max-nested-callbacks": [2, 3],
        "max-params": [2, 5],
        "max-statements": 0,
        "multiline-ternary": [2, "never"],
        "new-cap": 2,
        "new-parens": 2,
        "newline-after-var": 0,
        "no-array-constructor": 0,
        "no-bitwise": 0,
        "no-continue": 0,
        "no-inline-comments": 0,
        "no-lonely-if": 2,
        "no-mixed-operators": [2, {"allowSamePrecedence": true}],
        "no-mixed-spaces-and-tabs": [2, "smart-tabs"],
        "no-multiple-empty-lines": [2, {"max": 1}],
        "no-nested-ternary": 2,
        "no-new-object": 2,
        "no-plusplus": 2,
        "no-restricted-syntax": [2, "WithStatement"],
        "no-spaced-func": 2,
        "no-tabs": 2,
        "no-ternary": 0,
        "no-trailing-spaces": 2,
        "no-underscore-dangle": 0,
        "no-unneeded-ternary": 2,
        "nonblock-statement-body-position": 0,
        "object-curly-newline": 0,
        "object-curly-spacing": [2, "never"],
        "object-property-newline": [2, {"allowMultiplePropertiesPerLine": false}],
        "one-var": 0,
        "operator-assignment": 0,
        "operator-linebreak": 0,
        "padded-blocks": [2, "never"],
        "quote-props": 0,
        "quotes": [2, "single", {"avoidEscape": true, "allowTemplateLiterals": true}],
        "require-jsdoc": 1,
        "semi-spacing": [2, {"before": false, "after": true}],
        "semi": 2,
        "sort-keys": 0,
        "sort-vars": 0,
        "space-before-blocks": 2,
        "space-before-function-paren": [2, {"anonymous": "never", "named": "never", "asyncArrow": "always"}],
        "space-in-parens": [2, "never"],
        "space-infix-ops": 2,
        "space-unary-ops": [2, {"words": true, "nonwords": false}],
        "spaced-comment": [2, "always", {
            "block": {
                "markers": ["*"],
                "exceptions": ["*"]
            }
        }],
        "wrap-regex": 0,
        "newline-before-return": 1,
        "max-statements-per-line": [2, {"max": 1}],
        "unicode-bom": [2, "never"]
    }
}
