# @brown-ccv/prettier-config

This package contains Brown CCV's prettier configuration. It only sets 3 options:

1. Line length is 100
2. Quotes in objects will only use double quotes if they need to (e.g. `{ "hello-world": 1 }`)
3. Trailing comma everywhere but Typescript type definitions

To install run `npm install --save-dev @brown-ccv/prettier-config` or `yarn add -D @brown-ccv/prettier-config`.

This package has `prettier` as a peer dependency.

To use the config add the following to your `package.json` file:

```
{
  ...
  "prettier": "@brown-ccv/prettier-config",
  ...
}
```

Make sure and create a `.prettierignore` to ignore any files you don't want to format. Below is an example:

```
dist
*node_modules
```