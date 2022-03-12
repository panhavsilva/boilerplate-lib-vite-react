# :fire: Contributing with the project

Thank you for your interest in contributing to the project! 
We appreciate contributions via submitting Github issues and/or pull requests.

This project is open source, and as such, the maintainers give their free time to build and maintain the source code held within. They make the code freely available in the hope that it will be of use to other developers. 

Below are some guidelines to follow when contributing to this project:

* Before opening an issue in Github, check [open issues](https://github.com/panhavsilva/boilerplate-lib-vite-react-/issues) and [pull requests](https://github.com/panhavsilva/boilerplate-lib-vite-react-/pulls) for existing issues and fixes.
* If your issue has not been addressed, [open a Github issue](https://github.com/panhavsilva/boilerplate-lib-vite-react-/issues/new).
* If you know how to fix your bug, we highly encourage PR contributions.
* For feature requests and submitting major changes, [open an issue](https://github.com/panhavsilva/boilerplate-lib-vite-react-/issues/new) to discuss the feature first.
* Keep conversations friendly! Constructive criticism goes a long way.
* Have fun contributing!

## :thinking: How Can I contribute towith this project?

- Read the README carefully for more information on the project.
- To get your hands dirty, fork the project repo and issue PRs from the fork.
- PRO Tip: Create a [remote](https://git-scm.com/docs/git-remote.html) link with main repository: `git remote add upstream git://github.com/panhavsilva/boilerplate-lib-vite-react-.git`;
- Update your local repository: `git fetch upstream`;
- Create your feature branch based on `main`: `git checkout -b my-new-feature`;

## :rocket: Running

Install local modules:

```console
yarn
```

Then, you can start the webserver with the following command:

```console
yarn dev
```

When you're ready, continue with next steps:

- Make sure the code has no lint or type errors;
- If some error is displayed, execute `yarn lint:fix` to fix it;
- Add your changes: `git add .`;
- Commit your changes: `git commit -m 'Add some feature'`;
- Push to the branch: `git push origin my-new-feature`;
- Submit a pull request for `main` branch, and summon `@panhavsilva` :smile:


## :construction_worker: Build steps

> If you are sending a pull request, you shouldn't run this commands.

With the latest code version on `main` branch, execute the following steps:

On `main` branch, just run this command:

```console
npm version <version>
```

When `<version>` may be `patch`, `minor` ou `major`.

Send tags and commit to `main` branch:

```console
git push origin main
```

Then, create a new release from GitHub.

And done :wink:
