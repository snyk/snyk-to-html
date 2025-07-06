import { defineConfig } from "eslint/config";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-plugin-prettier";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{
    extends: compat.extends(
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
    ),

    plugins: {
        "@typescript-eslint": typescriptEslint,
        prettier,
    },

    languageOptions: {
        globals: {
            ...globals.node,
            ...globals.jest,
        },

        parser: tsParser,
    },

    rules: {
        "prettier/prettier": "error",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-empty-function": "warn",
        "@typescript-eslint/no-non-null-assertion": "warn",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-unused-vars": "error",
        "no-prototype-builtins": "off",
        "require-atomic-updates": "off",
        "no-buffer-constructor": "error",
    },
}, {
    files: ["**/*.ts"],

    rules: {
        "id-blacklist": ["error", "exports"],
    },
}]);
