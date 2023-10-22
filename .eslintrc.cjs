module.exports = {
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended"],
  root: true,
  env: {
    node: true,
  },
  rules: {
    curly: "error",

    "one-var": ["error", "never"],
  },
}
