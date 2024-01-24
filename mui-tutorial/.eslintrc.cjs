module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    // "import/namespace": "off",
    // "import/no-unresolved": "off",
    // "import/extensions": "off",
    // "import/named": "off",
    // "import/no-duplicates": "off",
    // "import/no-named-as-default": "off",
    // "import/default": "off",
    // "import/no-named-as-default-member": "off",
    // "import/order": "off",
    // // create-vite generates .jsx
    // "react/jsx-filename-extension": "off",
  },
};
