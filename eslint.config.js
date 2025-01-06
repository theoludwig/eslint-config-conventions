import promise from "eslint-plugin-promise"
import unicorn from "eslint-plugin-unicorn"
import importX from "eslint-plugin-import-x"
import globals from "globals"
import typescriptESLint from "typescript-eslint"

export default typescriptESLint.config(
  {
    name: "eslint-config-conventions",
    plugins: {
      promise,
      unicorn,
      "import-x": importX,
    },
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "constructor-super": "error",
      "for-direction": "error",
      "getter-return": "error",
      "no-async-promise-executor": "error",
      "no-class-assign": "error",
      "no-compare-neg-zero": "error",
      "no-cond-assign": "error",
      "no-const-assign": "error",
      "no-constant-binary-expression": "error",
      "no-constant-condition": "error",
      "no-constructor-return": "error",
      "no-control-regex": "error",
      "no-debugger": "error",
      "no-dupe-args": "error",
      "no-dupe-class-members": "error",
      "no-dupe-else-if": "error",
      "no-dupe-keys": "error",
      "no-duplicate-case": "error",
      "no-duplicate-imports": "error",
      "no-empty-character-class": "error",
      "no-empty-pattern": "error",
      "no-ex-assign": "error",
      "no-fallthrough": "error",
      "no-func-assign": "error",
      "no-import-assign": "error",
      "no-invalid-regexp": "error",
      "no-irregular-whitespace": "error",
      "no-loss-of-precision": "error",
      "no-misleading-character-class": "error",
      "no-new-native-nonconstructor": "error",
      "no-obj-calls": "error",
      "no-promise-executor-return": "error",
      "no-prototype-builtins": "error",
      "no-self-assign": "error",
      "no-self-compare": "error",
      "no-setter-return": "error",
      "no-sparse-arrays": "error",
      "no-this-before-super": "error",
      "no-undef": "error",
      "no-unexpected-multiline": "error",
      "no-unmodified-loop-condition": "error",
      "no-unreachable": "error",
      "no-unreachable-loop": "error",
      "no-unsafe-finally": "error",
      "no-unsafe-negation": "error",
      "no-unsafe-optional-chaining": "error",
      "no-unused-private-class-members": "error",
      "no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "no-use-before-define": [
        "error",
        {
          functions: false,
          classes: false,
          variables: false,
        },
      ],
      "no-useless-backreference": "error",
      "use-isnan": [
        "error",
        {
          enforceForSwitchCase: true,
          enforceForIndexOf: true,
        },
      ],
      "valid-typeof": [
        "error",
        {
          requireStringLiterals: true,
        },
      ],
      "consistent-this": "error",
      "default-param-last": "error",
      "default-case-last": "error",
      eqeqeq: [
        "error",
        "always",
        {
          null: "ignore",
        },
      ],
      "grouped-accessor-pairs": "error",
      "new-cap": [
        "error",
        {
          newIsCap: true,
          capIsNew: false,
          properties: true,
        },
      ],
      "no-array-constructor": "error",
      "no-caller": "error",
      "no-delete-var": "error",
      "no-empty": [
        "error",
        {
          allowEmptyCatch: true,
        },
      ],
      "no-empty-static-block": "error",
      "no-eval": "error",
      "no-global-assign": "error",
      "no-implied-eval": "error",
      "no-multi-str": "error",
      "no-new-func": "error",
      "no-object-constructor": "error",
      "no-octal": "error",
      "no-octal-escape": "error",
      "no-proto": "error",
      "no-redeclare": [
        "error",
        {
          builtinGlobals: false,
        },
      ],
      "no-regex-spaces": "error",
      "no-shadow-restricted-names": "error",
      "no-throw-literal": "error",
      "no-undef-init": "error",
      "no-unused-expressions": [
        "error",
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true,
        },
      ],
      "no-useless-call": "error",
      "no-useless-concat": "error",
      "no-useless-computed-key": "error",
      "no-useless-constructor": "error",
      "no-useless-escape": "error",
      "no-useless-rename": "error",
      "no-useless-return": "error",
      "no-else-return": [
        "error",
        {
          allowElseIf: false,
        },
      ],
      "no-var": "error",
      "no-void": [
        "error",
        {
          allowAsStatement: true,
        },
      ],
      "no-with": "error",
      "object-shorthand": ["error", "properties"],
      "one-var": [
        "error",
        {
          initialized: "never",
        },
      ],
      "prefer-const": [
        "error",
        {
          destructuring: "all",
        },
      ],
      "prefer-object-has-own": "error",
      "prefer-promise-reject-errors": "error",
      "prefer-regex-literals": [
        "error",
        {
          disallowRedundantWrapping: true,
        },
      ],
      radix: "error",
      yoda: ["error", "never"],
      curly: ["error", "all"],
      "func-style": ["error", "expression"],
      "prefer-arrow-callback": "error",
      "arrow-body-style": ["error", "always"],

      "promise/param-names": "error",
      "promise/no-new-statics": "error",
      "promise/no-multiple-resolved": "error",
      "promise/no-nesting": "error",

      "unicorn/better-regex": "error",
      "unicorn/catch-error-name": "error",
      "unicorn/custom-error-definition": "error",
      "unicorn/error-message": "error",
      "unicorn/escape-case": "error",
      "unicorn/explicit-length-check": "error",
      "unicorn/new-for-builtins": "error",
      "unicorn/no-array-callback-reference": "error",
      "unicorn/no-array-for-each": "error",
      "unicorn/no-array-method-this-argument": "error",
      "unicorn/no-document-cookie": "error",
      "unicorn/no-empty-file": "error",
      "unicorn/no-hex-escape": "error",
      "unicorn/no-instanceof-array": "error",
      "unicorn/no-new-array": "error",
      "unicorn/no-new-buffer": "error",
      "unicorn/no-this-assignment": "error",
      "unicorn/no-zero-fractions": "error",
      "unicorn/number-literal-case": "error",
      "unicorn/prefer-node-protocol": "error",
      "unicorn/throw-new-error": "error",
      "unicorn/no-typeof-undefined": "error",
      "unicorn/require-array-join-separator": "error",
      "unicorn/prefer-number-properties": "error",
      "unicorn/prefer-modern-math-apis": "error",
      "unicorn/prefer-structured-clone": "error",
      "unicorn/template-indent": "error",

      "import-x/no-absolute-path": "error",
      "import-x/no-webpack-loader-syntax": "error",
      "import-x/no-self-import": "error",
      "import-x/no-useless-path-segments": "error",
      "import-x/export": "error",
      "import-x/no-duplicates": "error",
      "import-x/no-named-default": "error",
      "import-x/no-empty-named-blocks": "error",
      "import-x/no-anonymous-default-export": "error",
      "import-x/consistent-type-specifier-style": ["error", "prefer-top-level"],
    },
  },
  {
    name: "eslint-config-conventions/typescript",
    files: ["**/*.ts", "**/*.tsx"],

    plugins: {
      "@typescript-eslint": typescriptESLint.plugin,
    },

    languageOptions: {
      parser: typescriptESLint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },

    rules: {
      "no-undef": "off",

      "no-dupe-class-members": "off",
      "@typescript-eslint/no-dupe-class-members": "error",

      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],

      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": [
        "error",
        {
          functions: false,
          classes: false,
          enums: false,
          variables: false,
          typedefs: false,
        },
      ],

      "default-param-last": "off",
      "@typescript-eslint/default-param-last": "error",

      "no-array-constructor": "off",
      "@typescript-eslint/no-array-constructor": "error",

      "no-implied-eval": "off",
      "@typescript-eslint/no-implied-eval": "error",

      "no-redeclare": "off",
      "@typescript-eslint/no-redeclare": [
        "error",
        {
          builtinGlobals: false,
        },
      ],

      "no-throw-literal": "off",
      "@typescript-eslint/only-throw-error": "error",

      "no-unused-expressions": "off",
      "@typescript-eslint/no-unused-expressions": [
        "error",
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true,
        },
      ],

      "no-useless-constructor": "off",
      "@typescript-eslint/no-useless-constructor": "error",

      "@typescript-eslint/no-unnecessary-template-expression": "error",
      "@typescript-eslint/adjacent-overload-signatures": "error",

      "@typescript-eslint/no-unsafe-function-type": "error",
      "@typescript-eslint/no-wrapper-object-types": "error",
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],

      "no-duplicate-imports": "off",
      "@typescript-eslint/consistent-type-imports": "error",

      "@typescript-eslint/explicit-member-accessibility": "error",
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        {
          allowExpressions: true,
          allowHigherOrderFunctions: true,
          allowTypedFunctionExpressions: true,
          allowDirectConstAssertionInArrowFunctions: true,
        },
      ],

      "@typescript-eslint/method-signature-style": "error",
      "@typescript-eslint/unbound-method": "error",

      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "variableLike",
          leadingUnderscore: "allow",
          trailingUnderscore: "allow",
          format: ["camelCase", "PascalCase", "UPPER_CASE"],
        },
      ],

      "@typescript-eslint/no-base-to-string": "error",
      "@typescript-eslint/no-deprecated": "error",
      "@typescript-eslint/no-dynamic-delete": "error",
      "@typescript-eslint/no-extra-non-null-assertion": "error",
      "@typescript-eslint/no-redundant-type-constituents": "error",

      "@typescript-eslint/no-extraneous-class": [
        "error",
        {
          allowWithDecorator: true,
        },
      ],

      "@typescript-eslint/no-floating-promises": [
        "error",
        {
          allowForKnownSafeCalls: [
            {
              from: "package",
              name: ["it", "describe"],
              package: "node:test",
            },
          ],
        },
      ],

      "@typescript-eslint/no-for-in-array": "error",
      "@typescript-eslint/no-invalid-void-type": "error",
      "@typescript-eslint/no-misused-new": "error",
      "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
      "@typescript-eslint/no-non-null-assertion": "error",

      "@typescript-eslint/no-this-alias": [
        "error",
        {
          allowDestructuring: true,
        },
      ],

      "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
      "@typescript-eslint/no-unnecessary-type-assertion": "error",
      "@typescript-eslint/no-require-imports": "error",
      "@typescript-eslint/no-unsafe-unary-minus": "error",
      "@typescript-eslint/no-unsafe-declaration-merging": "error",
      "@typescript-eslint/no-array-delete": "error",
      "@typescript-eslint/prefer-as-const": "error",
      "@typescript-eslint/prefer-function-type": "error",
      "@typescript-eslint/prefer-find": "error",
      "@typescript-eslint/prefer-includes": "error",

      "@typescript-eslint/prefer-nullish-coalescing": [
        "error",
        {
          ignoreTernaryTests: true,
          ignoreConditionalTests: false,
          ignoreMixedLogicalExpressions: false,
        },
      ],

      "@typescript-eslint/prefer-readonly": "error",
      "@typescript-eslint/prefer-reduce-type-parameter": "error",
      "@typescript-eslint/prefer-return-this-type": "error",
      "@typescript-eslint/promise-function-async": "error",

      "prefer-promise-reject-errors": "off",
      "@typescript-eslint/prefer-promise-reject-errors": "error",

      "@typescript-eslint/require-array-sort-compare": [
        "error",
        {
          ignoreStringArrays: true,
        },
      ],

      "@typescript-eslint/restrict-plus-operands": [
        "error",
        {
          skipCompoundAssignments: true,
        },
      ],

      "@typescript-eslint/restrict-template-expressions": [
        "error",
        {
          allowNumber: true,
        },
      ],

      "@typescript-eslint/strict-boolean-expressions": [
        "error",
        {
          allowString: false,
          allowNumber: false,
          allowNullableObject: false,
          allowNullableBoolean: false,
          allowNullableString: false,
          allowNullableNumber: false,
          allowAny: false,
        },
      ],
    },
  },
)
