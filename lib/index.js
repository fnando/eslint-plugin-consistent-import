module.exports = {
  rules: {
    "consistent-import": require("./rules/consistent-import"),
  },
  configs: {
    recommended: {
      rules: {
        "@fnando/consistent-import/consistent-import": "error",
      },
    },
  },
};
