const RuleTester = require("eslint").RuleTester;
const rule = require("./lib/rules/consistent-import");
const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module",
    parser: require.resolve("babel-eslint"),
  },
});

const mustNotBeRelative = "Must not be a relative path";
const mustNotStartWithSlash = "Must not start with slash";
const mustNotIncludeExtension = "Must not include the extension";
const mustNotImportIndex = "Must not import the index file";

const valid = (code) => ({ code });

const invalid = (code, message) => ({
  code,
  errors: [{ message }],
});

ruleTester.run("consistent-import", rule, {
  valid: [
    valid(`import "file"`),
    valid(`import * as all from "file"`),
    valid(`import { mod } from "another/file"`),
    valid(`import BigNumber from "bignumber.js"`),
  ],
  invalid: [
    invalid(`import "../file"`, mustNotBeRelative),
    invalid(`import "./file"`, mustNotBeRelative),
    invalid(`import "/file"`, mustNotStartWithSlash),
    invalid(`import "file.ts"`, mustNotIncludeExtension),
    invalid(`import "file.js"`, mustNotIncludeExtension),
    invalid(`import "file.tsx"`, mustNotIncludeExtension),
    invalid(`import "file.jsx"`, mustNotIncludeExtension),
    invalid(`import "dir/index"`, mustNotImportIndex),
  ],
});
