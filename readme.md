# eslint-config-bridge5

Node Style Guide for bridge5.

## Install

```bash
$ npm i eslint eslint-config-bridge5 --save-dev
```

## Usage

- `.eslintrc.js`

```js
module.exports = {
  extends: "bridge5",
};
```

### Use with Experimental Features

If you want to use eslint-config-bridge5 with experimental features such as `async function`, you should use `babel-eslint` parser:

- `package.json`

```json
{
  "devDependencies": {
    "eslint-config-bridge5": "0.1.0",
    "eslint": "^7.10.0",
    "prettier": "^2.1.2",
    "babel-eslint": "^10.1.0"
  }
}
```

- `.eslintrc.js`

```js
module.exports = {
  extends: "eslint-config-bridge5",
  parser: "babel-eslint",
  rules: {
    // see https://github.com/eslint/eslint/issues/6274
    "generator-star-spacing": "off",
    "babel/generator-star-spacing": "off",
  },
};
```
