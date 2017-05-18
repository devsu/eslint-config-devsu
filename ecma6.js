module.exports = {
  ecmaFeatures: {
    'modules': true
  },
  env: {
    'es6': true,
    'jasmine': true
  },
  rules: {
    // # Possible Errors
    // # http://eslint.org/docs/rules/#possible-errors
    'no-console': ['warn'],
    'no-cond-assign': [ 'error', 'always' ],
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty-character-class': 'error',
    'no-empty': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-obj-calls': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'use-isnan': 'error',

    // # Best Practices
    // # http://eslint.org/docs/rules/#best-practices
    'block-scoped-var': 'warn',
    'curly': 'error',
    'default-case': 'warn',
    'dot-location': ['error', 'property'],
    'dot-notation': ['error'],
    'eqeqeq': ['error'],
    'no-alert': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implied-eval': 'error',
    'no-labels': 'error',
    'no-multi-spaces': 'error',
    'no-new': ['error'],
    'no-param-reassign': 'warn',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-unmodified-loop-condition': 'warn',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-warning-comments': ['warn', { 'terms': ['todo', 'fixme', 'remove', 'when'], 'location': 'anywhere' }],
    'no-with': 'error',
    'radix': 'warn',
    'wrap-iife': ['error', 'outside'],


    // # Strict Mode
    // # http://eslint.org/docs/rules/#strict-mode
    'strict': ['off', 'global'],

    // # Variables
    // # http://eslint.org/docs/rules/#variables
    'no-undef': 'error',
    'no-undefined': 'error',
    'no-unused-vars': ['error'],
    'no-use-before-define': ['error', 'nofunc'],

    // # Node.js and CommonJS
    // # http://eslint.org/docs/rules/#nodejs-and-commonjs
    'no-mixed-requires': 'error',
    'no-new-require': 'error',
    'no-path-concat': 'error',

    // # Stylistic Issues
    // # http://eslint.org/docs/rules/#stylistic-issues
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs'],
    'camelcase': ['error', {'properties': 'always'}],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', { 'before': false, 'after': true}],
    'comma-style': ['error', 'last'],
    'eol-last': ['error', 'unix'],
    'func-call-spacing': 'error',
    'indent': ['error', 2, { 'SwitchCase': 1}],
    'key-spacing': ['error', { 'mode': 'strict'}],
    'keyword-spacing': ['error', { 'before': true, 'after': true, 'overrides': {} }],
    'max-depth': [ 'error', { 'max': 4 } ],
    'max-len': ['error', 100, 2, {'ignoreComments': true, 'ignoreUrls': true }],
    'max-lines': ['warn', {'max': 300, 'skipComments': true, 'skipBlankLines': true}],
    'max-params': ['warn', 3],
    'max-statements-per-line': [ 'error' ],
    'max-statements': ['error', 15, {'ignoreTopLevelFunctions': true}],
    'new-cap': ['error', {'capIsNewExceptionPattern': '^mongoose\\..'}],
    'new-parens': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': ['error'],
    'no-multiple-empty-lines': ['error', { 'max': 2, 'maxEOF': 1, 'maxBOF': 0}],
    'no-new-object': ['error'],
    'no-tabs': 'error',
    'no-trailing-spaces': ['error', { 'skipBlankLines': true }],
    'no-underscore-dangle': ['error', {'allow': ['__data', '_collection', '_id'], 'allowAfterThis': true}],
    'object-curly-spacing': ['error', 'never'],
    'one-var': ['error', { 'initialized': 'never', 'uninitialized': 'always' }],
    'operator-linebreak': ['error', 'after'],
    'padded-blocks': ['error', 'never'],
    'quote-props': ['error', 'always'],
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'semi-spacing': 'error',
    'semi': ['error', 'always'],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'spaced-comment': ['error', 'always', { 'exceptions': ['-']}],

    // # ECMAScript 6
    // # http://eslint.org/docs/rules/#ecmascript-6
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error', { 'before': true, 'after': true}],
    'constructor-super': 'error',
    'no-class-assign': 'error',
    'no-confusing-arrow': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    'no-new-symbol': 'error',
    'no-this-before-super': 'error',
    'no-useless-constructor': 'error',
    'no-var': 'error',
    'prefer-const': ['warn', { 'ignoreReadBeforeAssign': true}],
    'prefer-spread': 'warn',
    'prefer-template': 'error',
    'rest-spread-spacing': [ 'error', 'never' ],
    'template-curly-spacing': 'error'
  }
};