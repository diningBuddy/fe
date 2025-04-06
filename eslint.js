module.exports = {
  root: true,
  env: {
    node: true,
    "react-native/react-native": true,
  },
  overrides: [
    {
      files: ["*.config.js", "metro.config.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-native/all",
    "prettier",
  ],
  plugins: ["unused-imports", "import", "@typescript-eslint", "prettier", "react-native"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  settings: {
    react: {
      version: "18.2.0",
    },
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    curly: "error",

    "react-native/no-unused-styles": "warn",

    "no-nested-ternary": "off", //추후 error로
    "react/destructuring-assignment": "off", //추후 warn로
    "@typescript-eslint/no-explicit-any": "warn", // 추후 error로

    // TODO : 인라인 스타일 제한해제(추후 논의 후 수정)
    "react-native/no-inline-styles": "off",

    // styled-components 걷어낸 뒤 제거 //
    "react-native/no-color-literals": "off",
    "react-native/sort-styles": "off",
    "react-native/no-raw-text": "off",
    ///////////////////////////////////

    // unused-imports rules
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],

    // import ordering
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", ["parent", "sibling", "index", "object", "type"]],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
      },
    ],
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/prefer-default-export": "off",
    "import/no-useless-path-segments": ["error", { noUselessIndex: true }],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "const", next: "*" },
      { blankLine: "any", prev: "const", next: "const" },
    ],
  },
};
