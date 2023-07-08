# Primer proyecto Qwik

url: https://qwik-proy01-production.up.railway.app

## Requerimientos

- node v.18.
- vscode
- yarn 1.22

## Creando Proyecto

```shell
yarn create qwik

cd <project>
yarn install

yarn start
```

## Instalando Tailwind

```shell
yarn qwik add tailwind
```

## Desarrollando

- Generar Interface para data obtenida por fetch (VSCode)
  - instalar extension: Paste JSON as code
  - Copy el json response al portapapeles
  - Enel comando Palette type: Paste JSON ... (enter)
  - Paste

- Variables de entorno
  - Rename .env.template por .env  

- Consulting open AI

```shell
yarn add openai
```

- Formularios
  - use routeAction$
  - Validate Forms: Qwik viene integrado con la libreria Typescript Zod

- Supabase
  yarn add @supabase/supabase-js supabase-auth-helpers-qwik

## Deploy a Railway

- Integrar node adapter

```shell
yarn run qwik add express
```

- Test

```shell
yarn run build
yarn run build.server
yarn run serve
```

- Modificar package.json
  - (agregar en "scripts")

  ```js
  "build.all": "yarn run build && yarn run build.server"
  ```

- Agrear proyecto en Railway (dashboard) desde Github repo (select myProjectjectQwik)

- Configurar proyecto en Railway
  - ir a Settings
    - Modify Build - Build command: yarn run build.all
    - Modify Deploy - Start command: yarn run serve
  - Esperar por deploying
  - Ir a  Settings - Environment
    - Domains: Generate Domain
    - Click url (Ready!!!)
  - Solución a posible error : Cross-site POST (if exist)
    - Copiar url project : por ejemplo : qwik-proy01-production.up.railway.app
    - Modificar package.json
      - modificar script "serve"
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
