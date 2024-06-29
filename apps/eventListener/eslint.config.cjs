// @ts-check

const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");

module.exports = tseslint.config(
  eslintPluginPrettierRecommended,
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  { files: ["src/**/*"] },
  { ignores: ["eslint.config.cjs", "dist/**/*", "jest.config.js"] },
);
