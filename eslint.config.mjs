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

      // Completely disable unused variables rule for better DX
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",

      // Allow arrow functions with block statements
      "arrow-body-style": "off",

      // More specific comma-dangle rule
      "comma-dangle": [
        "error",
        {
          arrays: "always-multiline",
          objects: "always-multiline",
          imports: "never",
          exports: "never",
          functions: "never",
        },
      ],

      // Allow object destructuring with spaces
      "object-curly-spacing": ["error", "always"],

      // Allow console statements (warn instead of error)
      "no-console": "warn",

      // Allow unescaped entities in JSX (common in React)
      "react/no-unescaped-entities": "off",

      // Allow empty interfaces (common in TypeScript React components)
      "@typescript-eslint/no-empty-interface": "off",
    },
  },
];
