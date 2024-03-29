module.exports = {
  root: true,
  globals: {
    __dirname: true,
    module: true,
    process: true,
  },
  extends: [
    "prettier",
    "airbnb",
    "airbnb-typescript",
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier.
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    // This will display prettier errors as ESLint errors.
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.eslint.json"],
    sourceType: "module",
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  plugins: ["@typescript-eslint", "react-hooks", "react", "import"],
  settings: {
    react: {
      pragma: "React",
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    "import/resolver": {
      typescript: {},
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      alias: {
        map: [["~", "./src"]],
      },
      // "babel-module": {
      //   alias: {
      //     "~": "./src",
      //   },
      // },
    },
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "spaced-comment": [
      "error",
      "always",
      {
        line: {
          markers: ["#region", "#endregion", "region", "endregion"],
        },
      },
    ],
    // // TypeScript
    // "@typescript-eslint/no-empty-function": 0,
    // "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    // "@typescript-eslint/no-explicit-any": 0,
    // "@typescript-eslint/ban-ts-comment": 0,
    // "@typescript-eslint/explicit-module-boundary-types": 0,
    // "@typescript-eslint/no-inferrable-types": 0,
    // "@typescript-eslint/no-shadow": "off",
    // "@typescript-eslint/naming-convention": 0,
    // "@typescript-eslint/no-empty-interface": ["warn"],
    // "@typescript-eslint/no-redeclare": ["warn"],
    // "@typescript-eslint/no-unused-expressions": "off",
    // // React
    // "react/jsx-no-undef": [2, { allowGlobals: true }],
    // "react/display-name": 0,
    // "react/prop-types": "off",
    // "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],
    // "react/require-default-props": "off",
    // "react/no-array-index-key": "off",
    // "react/no-unused-prop-types": "off",
    // "react/no-direct-mutation-state": "off",
    // // React hook
    // "react-hooks/rules-of-hooks": "error",
    // "react-hooks/exhaustive-deps": ["warn"],
    // "no-useless-catch": 0,
    // "no-debugger": "off",
    // "no-shadow": "off",
    // "no-case-declarations": ["warn"],
    // "no-empty-pattern": ["warn"],
    // "no-nested-ternary": "off",
    // "no-param-reassign": "off",
    // "no-prototype-builtins": "off",
    // "no-underscore-dangle": "off",
    // Import
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "import/order": [
      1,
      {
        groups: [
          "external",
          "builtin",
          "internal",
          "sibling",
          "parent",
          "index",
        ],
      },
    ],

    "@typescript-eslint/space-before-blocks": "off",
    "@typescript-eslint/default-param-last": "off",
    "jsx-a11y/anchor-is-valid": "off",

    // // Other
    // "jsx-a11y/no-static-element-interactions": "off",
    // semi: 0,
    // "no-loss-of-precision": "off",
    // "@typescript-eslint/no-loss-of-precision": ["error"],
    // // Need fix
    // "no-empty": ["error"],
    // "no-plusplus": ["error"],
    // "no-return-assign": ["error"],
    // "default-case": ["error"],
    // "import/first": ["error"],
    // "no-use-before-define": ["error"],
    // "@typescript-eslint/no-use-before-define": ["error"],
    // "consistent-return": ["error"],
    // "react/jsx-no-bind": ["error"],
    // "no-else-return": ["error"],
    // "no-restricted-syntax": ["error"],
    // "no-useless-return": ["error"],
    // "jsx-a11y/alt-text": ["error"],
    // "no-fallthrough": ["error"],
    // "array-callback-return": ["error"],
    // "prefer-const": ["error"],
    // "react/sort-comp": ["error"],
    // "no-lonely-if": ["error"],
    // "no-lone-blocks": ["error"],
    // "react/no-did-update-set-state": ["error"],
  },
};
