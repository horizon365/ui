---
title: Der ProsecodeTree
description: 'Visualisieren Sie Datei-und Ordnerstrukturen mit Syntax-hervorgehobenem Code.'
category: components
navigation.title: CodeTree
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/CodeTree.vue
---

## Bearbeiten

Wickeln Sie Ihre Codeblöcke mit einer `code-tree`-Komponente in einer bestimmten Reihenfolge ein, um eine Baumansicht Ihrer Dateien anzuzeigen.

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
# npm Bearbeiten
NPM installieren

# pnpm (englisch)
Pnpm installieren

# yarn (englisch)
Yarn installieren

# bun
Gute Installation
```

## Development server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev ausführen

# pnpm
Pnpm Run Dev Bearbeiten

# yarn ist
von YARN DEV

# bun
Lauf dev
```

## Production

Build the application for production:

```bash
# npm Bearbeiten
npm run bauen

# pnpm
pnpm run bauen

# yarn ist
Yard bauen

# bun (nicht)
Run Build erstellen
```

Locally preview production build:

```bash
# npm
npm run vorschau

# pnpm
Pnpm Run Vorschau

XPH103XYARN (englisch)
Vorschau YARN

# bun
Lauf Preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
````

::

#code

::code-collapse{class="[&>div>pre]:rounded-t-none [&>div]:my-0"}

`````mdc
::code-tree{defaultValue="app/app.config.ts"}

```ts [nuxt.config.ts]
default export defineNuxtConfig ({Dateiendung})
  Module: ['@ nuxt/ui'],

  css: ['~/assets/css/main.css']
})

```

```css [app/assets/css/main.css]
@ import "tailwindcss";
@ import "@ nuxt/ui";
```

```ts [app/app.config.ts]
default export defineAppConfig ({Dateiendung})
  siehe: {
    Farben: {
      Stichwort: „ Sky ".
      Farbe: „ Slate "
    }
  }
})
```

```vue [app/app.vue]
x122x Bearbeiten
  X123x Bearbeiten
    x124x Bearbeiten
  X125x Bearbeiten
x126x Bearbeiten
```

```json [package.json]
{
  "name":"nuxt-app",
  "privat": wahr,
  "Typ":"Modul",
  „ Schriftstücke ":
    „ build ": „ nuxt build",
    „ dev ": „ nuxt dev",
    „ Generate ": „ Nuxt Generate", „ Generieren ",
    "Vorschau":"nuxt preview",
    "postinstall":"nuxt prepare","nuxt vorbereiten",
    "Typecheck":"Nuxt Typecheck"("Typecheck")
  },
  "Abhängigkeiten":
    "@ iconify-json/lucide":"^1.2.0","@ iconify-json/lucide":"^1.2.0",
    "@ nuxt/ui":"^4.0.0","@ nuxt/ui":"^4.0.0",
    "nuxt":"^4.0.0"(auf Englisch):
  },
  "Abhängigkeiten":{
    "TypeScript":"^6.0.0",
    "vue-tsc":"^3.2.0"(auf Englisch)
  }
}
```

```json [tsconfig.json]
{
  "extends":"./.nuxt/tsconfig.json"(erweitert)
}
```

````md [README.md]
# Nuxt 4 Minimal Starter (englisch)

Schauen Sie sich die [Nuxt 4-Dokumentation ](https://nuxt.com/docs/getting-started/introduction) an, um mehr zu erfahren.

## Setup (englisch)

Stellen Sie sicher, dass Sie die Abhängigkeiten installieren:

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

## Development Server (englisch)

Starten Sie den Entwicklungsserver auf `http://localhost:3000`:

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

## Produktion

Erstellen Sie die Anwendung für die Produktion:

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

Lokale Vorschau des Produktionsbuild:

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

Weitere Informationen finden Sie in der [deployment-Dokumentation ](https://nuxt.com/docs/getting-started/deployment).
````

::
`````

::

::

::note{to="/docs/typography/code#code-blocks"}
Wie die `ProsePre`-Komponente verarbeitet die `CodeTree` Dateinamen, Symbole und Kopierschaltflächen.
::

## API Bearbeiten

### Props (englisch)

:component-props{prose}

### Slots (englisch)

:component-slots{prose}

## Theme Bearbeiten

:component-theme{prose}

## Changelog (englisch)

:component-changelog{prefix="prose"}
