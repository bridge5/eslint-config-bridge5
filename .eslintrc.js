module.exports = {
  extends: [
    "airbnb",
    "prettier",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "prettier/react",
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      impliedStrict: true,
      classes: true,
    },
  },
  env: {
    browser: true,
    node: true,
    jquery: true,
    jest: true,
  },
  plugins: ["html", "prettier", "react-hooks"],
  rules: {
    "no-debugger": 0,
    "no-alert": 0,
    "no-await-in-loop": 0,
    "no-return-assign": ["error", "except-parens"],
    "no-unused-vars": [
      1,
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: "res|next|^err",
      },
    ],
    "no-unused-expressions": [
      2,
      {
        allowTaggedTemplates: true,
      },
    ],
    "no-param-reassign": [
      2,
      {
        props: false,
      },
    ],
    "no-shadow": [
      2,
      {
        hoist: "all",
        allow: ["resolve", "reject", "done", "next", "err", "error"],
      },
    ],
    "no-console": 0,
    "prefer-const": [
      "error",
      {
        destructuring: "all",
      },
    ],
    "no-underscore-dangle": "off",
    "arrow-body-style": [2, "as-needed"],
    "consistent-return": "off",
    "import/extensions": "off",
    "import/no-dynamic-require": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-named-as-default": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "newline-per-chained-call": "off",
    "no-confusing-arrow": "off",
    "no-use-before-define": "off",
    "no-nested-ternary": "off",
    "func-names": 0,
    "comma-dangle": 0,
    "space-before-function-paren": 0,
    "max-len": 0,
    "prefer-template": "error",
    "require-yield": "off",
    quotes: [
      2,
      "double",
      {
        avoidEscape: false,
        allowTemplateLiterals: true,
      },
    ],
    "prettier/prettier": [
      "error",
      {
        trailingComma: "all",
        singleQuote: false,
        printWidth: 100,
      },
    ],
    "jsx-a11y/label-has-for": [
      "warn",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
    "jsx-a11y/href-no-hash": "off",
    "react/forbid-prop-types": "off",
    "react/forbid-foreign-prop-types": "off",
    "react/display-name": "off",
    "react/no-array-index-key": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-no-target-blank": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-fragments": ["warn", "element"],
    "react/jsx-sort-props": "off",
    "react/require-extension": "off",
    "react/sort-prop-types": [
      "warn",
      {
        callbacksLast: true,
        ignoreCase: true,
        requiredFirst: false,
        sortShapeProp: true,
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};
