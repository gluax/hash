# HASH.dev

## Start the backend

```
yarn serve:hash-backend
```

On first run, or if you want to reset the database to the initial mock data, 
after starting the backend run:
```
yarn seed-db
```

## Install the frontend and required remote blocks
`yarn install:demo`

## Start the frontend and required blocks
`yarn demo-sans-backend`

## Create a new block bundle from template
1. `yarn new:block <name>`
2. code in `packages/hash/blocks/<name>`

## Code quality

We use git hooks to enforce code quality. These hooks are located in the
[hooks/](./hooks) directory. You will need to manually copy these to
`.git/hooks` and enable execution with `chmod u+x .git/hooks/<HOOK NAME>`.

## Monorepo
In order to work w/ multiple packages in a single repository, they must adhere to some conventions.
The below `package.json` file outlines the minimum requirements a package has to fulfill:
```json
{
  "name": "@hashintel/<package-name>",
  "version": "0.1.0",
  "description": "<packages description>",
  "author": "<package-author>",
  "license": "TBA",
  "prettier": "@hashintel/prettier-config",
  "scripts": {
    // use script "echo n/a" where not applicable
    "format": "prettier --write './src/**/*'",
    "lint": "prettier --check './src/**/*'; eslint ./src/",
  },
  "devDependencies": {
    "@hashintel/prettier-config": "*",
    "@typescript-eslint/eslint-plugin": "4.29.0",
    "@typescript-eslint/parser": "4.29.0",
    "eslint": "7.32.0",
    "eslint-config-prettier": "8.3.0",
    "prettier": "2.3.2"
  }
}
```
The corresponding `.eslintrc.json` can be found at `packages/hash/.eslintrc.json`.