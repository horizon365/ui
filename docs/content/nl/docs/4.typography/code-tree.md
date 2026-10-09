---
title: ProseCodeTree
description: 'Visualiseer bestands- en mapstructuren met syntaxis-gemarkeerde code.'
category: components
navigation.title: CodeTree
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/CodeTree.vue
---

## Gebruik

Wikkel uw codeblokken met een `code-tree`-component in een bepaalde volgorde om een boomstructuur van uw bestanden weer te geven.

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
# npm
npm installeren

# pnpm
pnpm installeren

# garen
garen installeren

# broodje
broodje installeren
```

## Development server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm draaien dev

# pnpm
pnpm draaien dev

# garen
garen dev

# broodje
broodje draaien dev
```

## Production

Build the application for production:

```bash
# npm
npm run bouwen

# pnpm
pnpm run bouwen

# garen
garen bouwen

# bun
broodje bouwen
```

Locally preview production build:

```bash
# npm
npm run voorbeeld

# pnpm
pnpm run voorbeeld

# garen
garen voorbeeld

# bun
knot run voorbeeld
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
````

::

#code

::code-collapse{class="[&>div>pre]:rounded-t-none [&>div]:my-0"}

`````mdc
::code-tree{defaultValue="app/app.config.ts"}

```ts [nuxt.config.ts]
export standaard defineNuxtConfig ({
modules: ['@ nuxt / ui'],

css: ['~ / assets / css / hoofd.css']
})

```

```css [app/assets/css/main.css]
@ import "staartwindcss";
@ import "@ nuxt / ui";
```

```ts [app/app.config.ts]
export standaard defineAppConfig ({
ui: {
kleuren: {
primair: 'lucht',
kleuren: 'lei'
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
"naam": "nuxt-app",
"privé": waar,
"type": "module",
"scripts": {
"bouwen": "nuxt bouwen",
"dev": "nieuwe ontwikkelaar",
"genereren": "nuxt genereren",
"preview": "nuxt preview",
"postinstall": "nuxt voorbereiden",
"typecheck": "nieuwe typecheck"
  },
"afhankelijkheden": {
"@ iconify-json / lucide": "^1.2.0",
"@ nuxt / ui": "^4.0.0",
"nuxt": "^4.0.0"
  },
"devDependencies": {
"typoscript": "^6.0.0",
"vue-tsc": "^3.2.0"
  }
}
```

```json [tsconfig.json]
{
"breidt uit": ". / .nuxt / tsconfig.json"
}
```

````md [README.md]
# Nuxt 4 Minimale aanzet

Bekijk de [Nuxt 4 documentation](https://nuxt.com/docs/getting-started/introduction) voor meer informatie.

## Opstelling

Zorg ervoor dat u de afhankelijkheden installeert:

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

## Ontwikkelingsserver

Start de ontwikkelserver op `http://localhost:3000`:

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

## Productie

Bouw de applicatie voor productie:

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

Lokaal preview productie bouwen:

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

Bekijk de documentation](https://nuxt.com/docs/getting-started/deployment) voor meer informatie.
````

::
`````

::

::

::note{to="/docs/typography/code#code-blocks"}
Net als de `ProsePre`-component verwerkt de `CodeTree` bestandsnamen, pictogrammen en kopieerknop.
::

## API

### Props

:component-props{prose}

### Slots

:component-slots{prose}

## Thema

:component-theme{prose}

## Wijzigingsgelog

:component-changelog{prefix="prose"}
