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

@@@ph000@@Verwendung

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
@@070@npm
NPM installieren

# pnpm
Pnpm installieren

@@@ph072@garn
Yarn installieren

@@@@@@bun
Gute Installation
```

## Development server

Start the development server on `http://localhost:3000`:

```bash
@@81@@npm
npm Run Dev Bearbeiten

@@@@@@pnpm
Pnpm Run Dev Bearbeiten

@@@@@@@@@@ph083@@garn
von Yarn Dev

@@@@@@84@bun
Lauf dev
```

## Production

Build the application for production:

```bash
@@@92@npm
npm run erstellen

@@@pnpm@pnpm
pnpm run bauen

@@ph094@@gmail.de
Yarn bauen

@@95@bun
Run Build erstellen
```

Locally preview production build:

```bash
@@101@npm
npm run vorschau

@@102@pnpm
Pnpm Run Vorschau

@@ph103@@gmail.de
Vorschau YARN

@@104@bun
Vorschau Run Preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
````

::

#Der Code

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
@@@@@@122 @
  @@@@123
    @@@@@@@124
  @@@@125
@@@@126
```

```json [package.json]
{
  "name":"nuxt-app",
  „ privat ": wahr,
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
# Nuxt 4 Minimal Starter

Schauen Sie sich die [Nuxt 4 documentation](https://nuxt.com/docs/getting-started/introduction) an, um mehr zu erfahren.

@@141@Einbaustrahler

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

## Entwicklungsserver

Starten Sie den Entwicklungsserver unter `http://localhost:3000`:

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

Weitere Informationen finden Sie in der [deployment](https://nuxt.com/docs/getting-started/deployment).
````

::
`````

::

::

::note{to="/docs/typography/code#code-blocks"}
Wie die Komponente `ProsePre` behandelt die Komponente `CodeTree` Dateinamen, Symbole und Kopierknopf.
::

@@207@btw

@@@@@@@@ph208@@props

: component-props {prose}

### Spielautomaten

: component-slots {prose}

@@ph212@@gmail.de

: component-theme {prose}

@@ph214@@changelog (auf Englisch)

: component-changelog {prefix="prose"}
