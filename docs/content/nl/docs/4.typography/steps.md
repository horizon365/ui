---
title: ProseSteps
description: 'Zet koppen om in genummerde stapsgewijze handleidingen en tutorials.'
category: components
navigation.title: Steps
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Steps.vue
---

## Gebruik

Wikkel uw koppen in met het onderdeel Stappen om een lijst met stappen weer te geven.

Gebruik de `level` prop om te bepalen welke kop voor de stappen zal worden gebruikt.

:::code-preview{class="[&>div]:*:w-full"}
::steps{level="4"}

#### Voeg de Nuxt UI module toe aan uw `nuxt.config.ts`

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['@nuxt/ui']
})
```

#### Tailwind CSS importeren in uw CSS

```css [app/assets/css/main.css]
@import "tailwindcss";
```

#### Start uw ontwikkelserver

```bash
npm run dev
```

::

#code

````mdc
::steps{level="4"}

#### Add the Nuxt UI module in your `nuxt.config.ts`

```ts [nuxt.config.ts]
export standaard defineNuxtConfig ({
modules: ['@ nuxt / ui']
})
```

#### Import Tailwind CSS in your CSS

```css [app/assets/css/main.css]
@ import "staartwindcss";
```

#### Start your development server

```bash
npm draaien dev
```

::
````

:::

## API

### Props

:component-props{prose}

### Slots

:component-slots{prose}

## Thema

:component-theme{prose}

## Wijzigingsgelog

:component-changelog{prefix="prose"}
