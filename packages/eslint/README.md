# @brown-ccv/eslint-config

This repo contains an eslint config based on the different configurations we have at CCV. The eslint config assumes Typescript, but does not assume any particular frameworks (e.g. react, vue, remix). The eslint config turns style rules off. A formatter, like prettier, should be used to format the code instead of eslint.

To install run `npm install --save-dev @brown-ccv/eslint-config` or `yarn add -D @brown-ccv/eslint-config`.

Then add the following in your local eslint config:

```
{
    ...
    "extends": [...otherStuff, "@brown-ccv/eslint-config"]
    ...
}
```