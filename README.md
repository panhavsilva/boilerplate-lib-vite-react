<h1 align="center">Welcome to boilerplate-lib-vite-react 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/panhavsilva/boilerplate-lib-vite-react#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/panhavsilva/boilerplate-lib-vite-react/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/panhavsilva/boilerplate-lib-vite-react/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/panhavsilva/boilerplate-lib-vite-react" />
  </a>
</p>

> Boilerplate to create library with Vite, Typescript and React.js

<br />

## :black_nib: Author

:bust_in_silhouette: **Pâmela Vieira da Silva - @panhavsilva**

* Github: [@panhavsilva](https://github.com/panhavsilva)

---

## Install dependencies

```sh
yarn
```
## Run the dev server
```sh
yarn dev
```
## Scripts
| Script                        | Description                                                   |
| ----------------------------- | ------------------------------------------------------------- |
| `yarn dev`                    | Run dev server                                                |
| `yarn build`                  | Generates production build                                    |
| `yarn lint`                   | Run linter                                                    |
| `yarn lint:fix`               | Fix lint errors                                               |
| `yarn type-check`             | TS typechecking                                               |
| `yarn ci`                     | Run lint, typechecking and tests (meant to be used in a CI)   |
| `yarn prepare`                | Not suposed to be manually used. It's just to configure husky |

## :rocket: Usage
  ### [Creating your token for  publish in to NPM](https://docs.npmjs.com/creating-and-viewing-access-tokens)
  1. In the upper right corner of the page, click your profile picture, then click "Access Tokens".

  <div style="text-align:center">
    <img src="./assets/access-tokens-npm.png" />
  </div>

  2. Click "Generate New Token".

  <div style="text-align:center">
    <img src="./assets/generate-new-token-npm.png" />
  </div>

  3. Name your token "NPM_TOKEN".
  4. Select the type of access token "Automation".
  5. Click "Generate Token".

  <div style="text-align:center">
    <img src="./assets/new-access-token-npm.png" />
  </div>

  6. Copy the token from the top of page to include in Github secrets.
  
  <br />

  ### Configuring your secrets on Github
  1. On GitHub, navigate to the main page of the repository.
  2. Under your repository name, click on the "Settings" tab.
  3. In the left sidebar, click "Secrets" after click "Actions".
  4. Click on button "New repositury secret" on the rigth.
  ![](assets/create-secret.png)
  5. Type NPM_TOKEN in the "Name" input box.
  6. Type the value for your secret.
  7. Click "Add secret".
  ![](assets/add-secret-name-value.png)

---
## :handshake: Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/panhavsilva/boilerplate-lib-vite-react/issues). You can also take a look at the [contributing guide](https://github.com/panhavsilva/boilerplate-lib-vite-react/blob/master/CONTRIBUTING.md).

---
## ✨ Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © current [Pâmela Vieira da Silva - @panhavsilva](https://github.com/panhavsilva).<br />
This project is [MIT](https://github.com/panhavsilva/boilerplate-lib-vite-react/blob/master/LICENSE) licensed.
