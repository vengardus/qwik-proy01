# First project with qwik

## Requirements

- node v.18.
- vscode
- yarn 1.22

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

- Add project in Railway (dashboard) from Github repo (select myProjectjectQwik)

- Config project in Railway
  - Go Settings
    - Modify Build - Build command: yarn run build.all
    - Modify Deploy - Start command: yarn run serve
  - Wait for deploying
  - Go Settings - Environment
    - Domains: Generate Domain
    - Click url (Ready!!!)
  - Solution error : Cross-site POST (if exist)
    - Copy url project : fpr example : qwik-proy01-production.up.railway.app
    - Modify package.json
      - modify script "serve"
        "serve": "ORIGIN httpś://qwik-proy01-production.up.railway.app node server/entry.express"




## Ayuda memoria

### Get Fetch

- Obtener el Json del get response y copiar al portapapel
- Crear un archivo para definir la interface (src/interface)
  - Ejm: src/interface/spacexListResponse.ts
- En el archivo creado ejecutar de la paleta de comandos: Paste JSON as Code (indicar nombre para la interface)
  - Ejm: export interface ISpacexListResponse
- Opcionalmente se puede crear una interface reducida, con los datos que se utilizarán
- Crear un componente en src/helpers que haga el fetch y devuelva el response. Si se creó una interface reducida
crearla a partir de un map del response data.
- Desde el route correspondiente crear una función routeLoader$ que llame al componente, el cual devuelve una señal
-

## Express Server

This app has a minimal [Express server](https://expressjs.com/) implementation. After running a full build, you can preview the build using the command:

```
yarn serve
```

Then visit [http://localhost:8080/](http://localhost:8080/)
