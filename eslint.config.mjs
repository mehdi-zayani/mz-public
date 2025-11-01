// ESLint configuration for MZ WebApp Public (Lite) Version
// ---------------------------------------------------------
// This configuration ensures consistent code quality and best practices
// across the entire Next.js TypeScript project. It combines Next.js core rules,
// TypeScript support, and custom linting for backend and utility scripts.

import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  // Base Next.js ESLint rules for React, accessibility, and performance.
  ...nextVitals,

  // TypeScript support for better static analysis and type checking.
  ...nextTs,

  // Additional configuration for backend and utility scripts.
  {
    files: ["scripts/**/*.ts", "src/lib/**/*.ts", "src/models/**/*.ts"],
    languageOptions: {
      sourceType: "module",
      parserOptions: {
        ecmaVersion: "latest",
      },
    },
    rules: {
      // Allow flexible imports without enforcing file extensions.
      "import/extensions": "off",

      // Disable React rules no longer required in Next.js 13+.
      "react/react-in-jsx-scope": "off",
      "react/no-unescaped-entities": "off",
    },
  },

  // Global ignore patterns to exclude build and environment artifacts.
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "dist/**",
    "coverage/**",
    "node_modules/**",
    "next-env.d.ts",
  ]),
]);
