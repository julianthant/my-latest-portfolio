import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.url,
});

export default [
  ...compat.extends("next/core-web-vitals"),
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      // Disable quotes rule completely to allow both single and double quotes
      quotes: "off",

      // Relaxed rules for better development experience
      indent: ["error", 2],
      semi: ["error", "always"],
      "comma-dangle": ["error", "always-multiline"],

      // Allow snake_case for imported component names
      camelcase: "off",

      // Allow unused variables starting with underscore
      "no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      // Allow arrow functions with block statements
      "arrow-body-style": "off",

      // Allow object destructuring with spaces
      "object-curly-spacing": ["error", "always"],

      // Allow console statements (warn instead of error)
      "no-console": "warn",
    },
  },
];
