"use strict";

const builtin = ["./lib/legacy", "./lib/rules/es6", "./lib/rules/es2020"].map(require.resolve);

module.exports = {
  extends: builtin.concat(["plugin:eggache/recommended", "plugin:jest/recommended"]),
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      classes: true,
    },
    sourceType: "module",
  },
  settings: {
    jest: {
      version: 26,
    },
  },
};
