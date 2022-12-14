module.exports = {
  plugins: ["@typescript-eslint", "jest", "promise"],
  extends: [
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:jest/recommended",
    "plugin:promise/recommended",
    "prettier",
  ],
  parserOptions: {
    project: "tsconfig.json",
  },
  env: {
    node: true,
    jest: true,
  },
  rules: {
    "no-prototype-builtins": "off",
    "import/extensions": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-filename-extension": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true, typedefs: true },
    ],
    "jest/expect-expect": [
      "error",
      {
        assertFunctionNames: ["expect", "request.**.expect"],
      },
    ],
    "no-param-reassign": ["error"],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "import/no-extraneous-dependencies": "off",
    "no-useless-constructor": "off",
    "no-empty-function": "off",
  },
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    jest: { version: 26 },
    "import/resolver": {
      typescript: {},
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
