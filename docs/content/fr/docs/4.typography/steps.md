---
title: proposées
description: 'Transformez les titres en guides et tutoriels numérotés étape par étape.'
category: components
navigation.title: Steps
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Steps.vue
---

## Utilisation

Enveloppez vos en-têtes avec le composant Étapes pour afficher une liste d'étapes.

Utilisez la prop `level` pour définir le titre qui sera utilisé pour les étapes.

:::code-preview{class="[&>div]:*:w-full"}
::steps{level="4"}

#### Ajouter le module Nuxt UI dans votre `nuxt.config.ts`

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['@nuxt/ui']
})
```

#### Import CSS Tailwind dans votre CSS

```css [app/assets/css/main.css]
@import "tailwindcss";
```

#### Démarrez votre serveur de développement

```bash
npm run dev
```

::

#code

````mdc
::steps{level="4"}

#### Add the Nuxt UI module in your `nuxt.config.ts`

```ts [nuxt.config.ts]
export default définition ({
  modules: ['@ nuxt/ui']
})
```

#### Import Tailwind CSS in your CSS

```css [app/assets/css/main.css]
@ import "développeur";
```

#### Start your development server

```bash
npm run dev
```

::
````

:::

## api

### Props

:component-props{prose}

### Slots

:component-slots{prose}

## Thème

:component-theme{prose}

## Changelog

:component-changelog{prefix="prose"}
