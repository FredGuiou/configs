export default {
  // See: https://eslint.org/docs/rules/init-declarations
  "init-declarations": "off",

  // See: https://eslint.org/docs/rules/no-delete-var
  "no-delete-var": "error",

  // See: https://eslint.org/docs/rules/no-label-var
  "no-label-var": "error",

  // See: https://eslint.org/docs/rules/no-restricted-globals
  "no-restricted-globals": "off",

  // See: https://eslint.org/docs/rules/no-shadow
  "no-shadow": "off",

  // See: https://eslint.org/docs/rules/no-shadow-restricted-names
  "no-shadow-restricted-names": "off",

  // See: https://eslint.org/docs/rules/no-undef
  "no-undef": "error",

  // See: https://eslint.org/docs/rules/no-undef-init
  "no-undef-init": "warn",

  // See: https://eslint.org/docs/rules/no-undefined
  "no-undefined": "off",

  // See: https://eslint.org/docs/rules/no-unused-vars
  "no-unused-vars": ["error", {
    args: "all",
    argsIgnorePattern: "^_",
    caughtErrors: "all",
    caughtErrorsIgnorePattern: "^_",
    destructuredArrayIgnorePattern: "^_",
    varsIgnorePattern: "^_",
    ignoreRestSiblings: true
  }]
};
