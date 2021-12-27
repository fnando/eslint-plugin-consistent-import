# eslint-plugin-consistent-import

[![NPM](https://img.shields.io/npm/v/@fnando/eslint-plugin-consistent-import.svg)](https://www.npmjs.com/package/@fnando/eslint-plugin-consistent-import)

Enforces consistent import paths when using `import`.

- No relative imports.
- No imports with extensions (`.[jt]sx?`).
- No absolute imports starting with `/`.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```console
$ yarn add -D @fnando/eslint-plugin-consistent-import
```

## Usage

Add `consistent-import` to the plugins section of your `.eslintrc` configuration
file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["@fnando/consistent-import"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "@fnando/consistent-import/consistent-import": "error"
  }
}
```

You can also extend the recommended configuration (defaults to `error`).

```json
{
  "plugins": ["@fnando/consistent-import"],
  "extends": ["plugin:@fnando/consistent-import/recommended"]
}
```

## License

(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the 'Software'), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
