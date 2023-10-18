# @brown-ccv/lefthook-config

[Lefthook](https://github.com/evilmartians/lefthook) is a wrapper for [git-hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks). Lefthook simplifies the install process of different hooks. This config standardizes the hooks we use across the CCV software engineering team.

This `lefthook` config makes a few assumptions:

1. Your project is using either `npm` or `yarn` as a package manager (`yarn` classic or stable should work)
2. Your `package.json` defines a `test`, `lint`, and `format` script
3. The `lint` and `format` scripts optionally take a blob of files. This blob is used to only check the staged changes

## Installation

For yarn:

```
yarn add -D @brown-ccv/lefthook-config lefthook
```

For npm:

```
npm install --save-dev @brown-ccv/lefthook-config lefthook
```

Installing `lefthook` should create a `lefthook.yml` in your project root. You can change the format and filename to any one listed on [this documentation page](https://github.com/evilmartians/lefthook/blob/master/docs/configuration.md#config-file)

Open your `lefthook` configuration file and add the following:

```
extends:
  - "node_modules/@brown-ccv/lefthook-config/lefthook.js.yaml"
```

You're all set!
