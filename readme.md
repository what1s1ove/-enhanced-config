# Enhanced Config

This repository demonstrates the usage of an enhanced configuration in an application, using [ESLint](https://eslint.org/) as an example. The key elements to focus on are the "Get Changed Files" and "Lint JS with Enhanced Rules" steps in the [CI GitHub Action](./.github/workflows/ci.yml), as well as the [eslint.enhanced.config.js](./eslint.enhanced.config.js) file.

## Helpful links:

- [changed-files](https://github.com/tj-actions/changed-files) – A GitHub Action for obtaining added files. With this action, you can not only get new files but also those that have been modified, among other functionalities.
- Extends the functionality of some well-known linters:
  - [ESLint](https://eslint.org/docs/latest/use/configure/configuration-files-new#using-configurations-included-in-plugins)
  - [StyleLint](https://stylelint.io/user-guide/configure/#extends)
