import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  // Use import.meta.dirname for Node.js v20.11.0+, fallback to current approach for older versions
  baseDirectory: import.meta.dirname || import.meta.url,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals"],
    rules: {
      // Disable quotes rule completely to allow both single and double quotes
      quotes: "off",

      // Relaxed rules for better development experience
      indent: "off",
      semi: ["error", "always"],

      // Allow snake_case for imported component names
      camelcase: "off",

      // Completely disable unused variables rule for better DX
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",

      // Allow arrow functions with block statements
      "arrow-body-style": "off",

      // Completely disable comma-dangle rule to avoid conflicts
      "comma-dangle": "off",

      // Allow object destructuring with spaces
      "object-curly-spacing": ["error", "always"],

      // Allow console statements (warn instead of error)
      "no-console": "warn",

      // Allow unescaped entities in JSX (common in React)
      "react/no-unescaped-entities": "off",

      // Allow empty interfaces (common in TypeScript React components)
      "@typescript-eslint/no-empty-interface": "off",
    },
  }),
];

export default eslintConfig;
