---
title: Prosécurité CodeTree
description: 'Visualisez les structures de fichiers et de dossiers avec du code syntaxé.'
category: components
navigation.title: CodeTree
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/CodeTree.vue
---

@@ph000@@utilisation

Enveloppez vos blocs de code avec un composant `code-tree` dans un ordre particulier pour afficher une arborescence de vos fichiers.

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
@@nf070@nfp
NPM pour installer

@@pnpm@pnpm
Pnpm installé

@@722@@électricité
Yannick Installer

@@pH073@@bun
Bonne installation
```

## Development server

Start the development server on `http://localhost:3000`:

```bash
@@ph081@npm
npm run dev

@@pnpm@pnpm
Pnpm développeur

@@pH083@@raccourci
Yannick Dev

@@pH084@bun
Bonne route dev
```

## Production

Build the application for production:

```bash
@npm092@npm00000
npm run build

@@pnpm@pnpm
Pnpm run build (en anglais)

@@ph094 @@ électricité
Yannick construit

@@ph095@@bun
Bon course à construire
```

Locally preview production build:

```bash
@@ph101@npm
npm run prévisualisation

@@pnpm@pnpm
Pnpm run preview

@@pha103
Présentation de Yarn Preview

@@ph104@bun
Bon courant de prévisualisation
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
````

::

#code

::code-collapse{class="[&>div>pre]:rounded-t-none [&>div]:my-0"}

`````mdc
::code-tree{defaultValue="app/app.config.ts"}

```ts [nuxt.config.ts]
export default définition ({
  modules: ['@ nuxt/ui'],

  css: ['/assets/css/main.css']
})

```

```css [app/assets/css/main.css]
@ import "développeur";
@ import "@ nuxt/ui";
```

```ts [app/app.config.ts]
export default définition ({
  à:{
    Couleurs: {
      Prénom:"Sky"
      Couleur: Slate
    }
  }
})
```

```vue [app/app.vue]
@@@ 222 @
  @@@ 123 @
    @@@ 124 @
  @@@ 125 @
@@@ 126 @
```

```json [package.json]
{
  "nom":"nuxt-app",
  "privé": vrai,
  "type":"module",
  "écrits":
    "build":"nuxt build",
    "dev":"nuxt dev",
    "générer":"nuxt générer",
    "preview":"nuxt preview",
    "postinstall":"nuxt prepare",
    "typecheck":"nuxt typecheck"
  },
  "dépendance":
    "@ iconify-json/lucide":"^1.2.0",
    "@ nuxt/ui":"^4.0.0",
    "nuxt":"^4.0.0"
  },
  "dépendances":{
    "typescript":"^6.0.0",
    "vue-tsc":"^3.2.0"
  }
}
```

```json [tsconfig.json]
{
  extends: ./.nuxt/tsconfig.json
}
```

````md [README.md]
# Nuxt 4 Démarreur minimal

Consultez la documentation [Nuxt 4 ](https://nuxt.com/docs/getting-started/introduction) pour en savoir plus.

@@ph141@réseau

Assurez-vous d'installer les dépendances:

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

## Serveur de développement

Démarrez le serveur de développement sur `http://localhost:3000`:

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

## Production

Créer l'application pour la production:

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

Prévisualisation de la production locale:

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

Consultez la documentation de déploiement [](https://nuxt.com/docs/getting-started/deployment) pour plus d'informations.
````

::
`````

::

::

::note{to="/docs/typography/code#code-blocks"}
Comme le composant `ProsePre`, le `CodeTree` gère les noms de fichiers, les icônes et le bouton de copie.
::

@207@@écrit

@@ph208@props

: composants {prose}

@@ph210@@Slots

: composant {prose}

@@ph212@thème

: composant {prose}

@@changelog

: composant-changelog {prefix="prose"}
