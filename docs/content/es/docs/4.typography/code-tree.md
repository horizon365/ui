---
title: ProsecuenciaCodetree
description: 'Visualice las estructuras de archivos y carpetas con código resaltado sintáxicamente.'
category: components
navigation.title: CodeTree
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/CodeTree.vue
---

@@pH000@@Uso del producto

Envuelva los bloques de código con un componente `code-tree` en cualquier orden en particular para mostrar una vista de árbol de sus archivos.

::code-preview{class="[&>div]:*:my-0 [&>div]:*:w-full"}

::code-tree{defaultValue="app/app.config.ts"}

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['@nuxt/ui'],

  css: ['~/assets/css/main.css']
})

```

```css [app/assets/css/main.css]
@import "tailwindcss";
@import "@nuxt/ui";
```

```ts [app/app.config.ts]
export default defineAppConfig({
  ui: {
    colors: {
      primary: 'sky',
      colors: 'slate'
    }
  }
})
```

```vue [app/app.vue]
<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
```

```json [package.json]
{
  "name": "nuxt-app",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "nuxt build",
    "dev": "nuxt dev",
    "generate": "nuxt generate",
    "preview": "nuxt preview",
    "postinstall": "nuxt prepare",
    "typecheck": "nuxt typecheck"
  },
  "dependencies": {
    "@iconify-json/lucide": "^1.2.0",
    "@nuxt/ui": "^4.0.0",
    "nuxt": "^4.0.0"
  },
  "devDependencies": {
    "typescript": "^6.0.0",
    "vue-tsc": "^3.2.0"
  }
}
```

```json [tsconfig.json]
{
  "extends": "./.nuxt/tsconfig.json"
}
```

````md [README.md]
# Nuxt 4 Minimal Starter

Look at the [Nuxt 4 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
@npm000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
npm instalación

@pnpm@pnpm
Pnpm Instalación

@2007@@deals2007
irion instalacion

@@pH073@@bun
Buena instalación
```

## Development server

Start the development server on `http://localhost:3000`:

```bash
@@pH081@npm
npm run dev (en español)

@pnpm @pnpm
Pnpm y Dev

@@pH083
Yolanda Dev

@840000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Buen trabajo dev
```

## Production

Build the application for production:

```bash
@npm092@npm00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
npm run build (Edición española)

@pnpm@pnpm
Pnpm Run Build (Edición española)

@@pH094
Yarn construcción

@@pH095@@bun
Buen trabajo construir
```

Locally preview production build:

```bash
@101@npm
npm run preview (Edición española)

@pnpm @pnpm
Pnpm Run Preview (Edición española)

@300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Siguiente: Yarn Preview

@@pH104@@bun
Siguiente Run Preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
````

::

#El Código

::code-collapse{class="[&>div>pre]:rounded-t-none [&>div]:my-0"}

`````mdc
::code-tree{defaultValue="app/app.config.ts"}

```ts [nuxt.config.ts]
export default defineNuxtConfig
  módulos:['@ nuxt/ui'],

  css: ['/assets/css/main.css']
})

```

```css [app/assets/css/main.css]
@ import "cccss";
@ import "@ nuxt/ui";
```

```ts [app/app.config.ts]
export default defineAppConfig ({
  por: {
    Los colores:
      Primary: "Sky"
      Categoría:"Slate"
    }
  }
})
```

```vue [app/app.vue]
@2012
  @@@ 123
    @@ 124 @
  @@@ 125 @
@@@ 126 @
```

```json [package.json]
{
  "nombre":"nuxt-app",
  "privado": verdadero,
  "tipo":"módulo",
  "Escritos":{
    "Build":"Nuxt Build"
    "Dev":"Dev",
    "Generar":"Generar",
    "preview":"preview",
    "postinstall":"nuxt preparate",
    "typecheck":"nuxt typecheck"
  },
  "Dependencia":
    "@ iconify-json/lucide":"^1.2.0",
    "@ nuxt/ui":"^4.0.0",
    "nuxt":"^4.0.0"
  },
  "Dependencias":{
    "TYPESCRIPT":"6.0.0"
    "vue-tsc":"^3.2.0"
  }
}
```

```json [tsconfig.json]
{
  extends: "./.nuxt/tsconfig.json"
}
```

````md [README.md]
# Nuxt 4 Inicio mínimo

Consulte la documentación de [Nuxt 4 ](https://nuxt.com/docs/getting-started/introduction) para obtener más información.

@141@141

Asegúrese de instalar las dependencias:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Servidor de desarrollo

Inicie el servidor de desarrollo en `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

@170@@Producción

Crear la aplicación para la producción:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Construcción de producción previa local:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Consulte la documentación de implementación [](https://nuxt.com/docs/getting-started/deployment) para obtener más información.
````

::
`````

::

::

::note{to="/docs/typography/code#code-blocks"}
Al igual que el componente `ProsePre`, el `CodeTree` maneja nombres de archivos, iconos y botón de copia.
::

@207

@208@2000 puntos

Artículo siguienteComponentes {prose}

@@210@210@210@210

Componentes: @ph211 @

@212 @@ Temas

Artículo siguiente{prose}

@@214@Changelog (Edición española)

por: component-changelog {prefix="prose"}
