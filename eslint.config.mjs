import { defineConfig, globalIgnores } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import tailwind from "eslint-plugin-tailwindcss";

const MAX_FILE_LINES = 1000;

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    ".agents/skills/**",
    "cook/**",
    "coverage/**",
    "src/components/ui/**/*",
    "commitlint.config.mjs",
    "lint-staged.config.mjs",
  ]),

  // --- Tailwind CSS ---
  {
    plugins: { tailwindcss: tailwind },
    settings: {
      tailwindcss: { cssConfigPath: "./src/app/globals.css" },
    },
    rules: {
      "tailwindcss/no-contradicting-classname": "warn",
      "tailwindcss/no-custom-classname": [
        "warn",
        { whitelist: ["custom-[a-z0-9-]+"] },
      ],
    },
  },

  // --- Custom rules ---
  {
    rules: {
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling"],
            "index",
            "object",
          ],
          "newlines-between": "always",
          pathGroups: [{ pattern: "@/**", group: "internal" }],
          pathGroupsExcludedImportTypes: ["builtin"],
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "max-lines": [
        "error",
        { max: MAX_FILE_LINES, skipBlankLines: true, skipComments: true },
      ],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { fixStyle: "inline-type-imports" },
      ],
    },
  },

  // --- Overrides ---
  {
    // The client logger is the one place allowed to use console
    files: ["src/lib/logger/**"],
    rules: { "no-console": "off" },
  },
  {
    files: ["**/*.config.{js,ts,mjs}"],
    rules: { "max-lines": "off", "import/order": "off" },
  },
  {
    files: ["**/scripts/**", "**/tests/**", "**/*.test.{ts,tsx}"],
    rules: { "max-lines": "off" },
  },

  // Must be last: turns off rules that conflict with Prettier
  eslintConfigPrettier,
]);

export default eslintConfig;
