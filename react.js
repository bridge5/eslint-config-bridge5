"use strict";

module.exports = {
  extends: ["./index", "./lib/rules/browser", "./lib/rules/import", "./lib/rules/react", "./lib/rules/react-a11y"].map(
    require.resolve,
  ),
  parser: "babel-eslint",
  rules: {},
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
      impliedStrict: true,
      classes: true,
    },
    sourceType: "module",
  },
  env: {
    browser: true,
    jest: true,
    node: true,
  },
};
