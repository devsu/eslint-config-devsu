module.exports = {
  env: {
    node: true
  },
  rules: {
    // # Node.js and CommonJS
    // # http://eslint.org/docs/rules/#nodejs-and-commonjs
    'no-mixed-requires': 'error',
    'no-new-require': 'error',
    'no-path-concat': 'error'
  },
  extends: [
    'devsu/ecma6'
  ]
};