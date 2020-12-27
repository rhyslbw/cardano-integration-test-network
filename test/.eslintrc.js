module.exports = {
  "extends": ["../.eslintrc.js"],
  "parserOptions": {
    "project": "./tsconfig.json",
    "tsconfigRootDir": __dirname
  },
  "plugins": [
    "jest"
  ],
  "globals": {
    "it": "readonly",
    "before": "readonly",
    "after": "readonly",
    "describe": "readonly",
    "beforeEach": "readonly",
    "afterEach": "readonly"
  },
  "env": {
    "jest": true
  }
}