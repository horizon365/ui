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

xph0000xUso

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
# npm (Edición española)
npm instalación

# pnpm (Edición española)
Pnpm Instalación

# yyyyyyyyy
irion instalacion

# bn (Edición española)
Buena instalación
```

## Development server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev (en español)

# pnpm (Edición española)
Pnpm y Dev

# hilado
Iñaki Dev

# bun
Buen trabajo dev
```

## Production

Build the application for production:

```bash
# npm (Edición española)
npm run build (Edición española)

# pnpm (Edición española)
Pnpm Run Build (Edición española)

# yyyyyyyyy
Yarn construcción

# bun
Buen trabajo construir
```

Locally preview production build:

```bash
# npm (Edición española)
npm run preview (Edición española)

# pnpm (Edición española)
Pnpm Run Preview (Edición española)

# Yarn (Edición española)
Siguiente: Yarn Preview

# bun (Edición española)
Siguiente Run Preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
````

::

#code

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
<template> también
  <UApp> también
    <NuxtPage /> también
  </UApp> también
</template> también
```

```json [package.json]
{
  "nombre":"nuxt-app",
  "privado": verdadero,
  "tipo":"módulo",
  "Escritos":
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

Consulte la documentación [Nuxt 4 ](https://nuxt.com/docs/getting-started/introduction) para obtener más información.

## Configuración

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

XPH170xProducción

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

Consulte la documentación de despliegue [x](https://nuxt.com/docs/getting-started/deployment) para obtener más información.
````

::
`````

::

::

::note{to="/docs/typography/code#code-blocks"}
Al igual que el componente `ProsePre`, el `CodeTree` maneja nombres de archivos, iconos y botón de copia.
::

## API (Versión)

### Props (accesorios)

:component-props{prose}

### Slots (Edición española)

:component-slots{prose}

## Temas

:component-theme{prose}

## Changelog (Edición española)

:component-changelog{prefix="prose"}
