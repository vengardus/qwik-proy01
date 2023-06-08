# First project with qwik

## Getting started

```shell
yarn create qwik

cd <project>
yarn install

yarn start
```

## Install Tailwind

```shell
yarn qwik add tailwind
```

## Developing

- Generate interfase for fecth (VsCode)
  - install extension: Paste JSON as code
  - Copy any json response to clipboard
  - In the Command Palette type: Paste JSON ... (enter)
  - Paste

- Environment variables
  - Rename .env.template por .env  

- Consulting open AI

```shell
yarn add openai
```

- Forms
  - use routeAction$
  - Validate Forms: Qwik comes integrated with the Typescript library Zod

## Deploy to Railway

- Integrated the node adapter

```shell
yarn run qwik add express
```

- Test

```shell
yarn run build
yarn run build.server
yarn run serve
```

- Modify package.json
  - (add in "scripts")
  
  ```js
  "build.all": "yarn run build && yarn run build.server"
  ```
