const { basename, extname } = require("path");

const fileNameExceptions = ["bignumber.js", "@rails/request.js"];

module.exports = {
  meta: {
    docs: {
      category: "Possible Errors",
      description: "Enforces consistent import paths",
      recommended: true,
    },
  },
  create(context) {
    return {
      ImportDeclaration: (node) => {
        const path = node.source.value;

        // Must not use extentions for JavaScript/TypeScript and their React
        // variants.
        if (!fileNameExceptions.includes(path) && path.match(/\.[jt]sx?$/i)) {
          context.report(node, "Must not include the extension");
        }

        // Must not be relative path.
        if (path.startsWith(".")) {
          context.report(node, "Must not be a relative path");
        }

        // Must not start with slash.
        if (path.startsWith("/")) {
          context.report(node, "Must not start with slash");
        }

        // Must not import index files.
        if (basename(path, extname(path)) === "index") {
          context.report(node, "Must not import the index file");
        }
      },
    };
  },
};
