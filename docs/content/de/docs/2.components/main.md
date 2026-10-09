---
description: 'Ein Hauptelement, das die verfügbare Viewport-Höhe ausfüllt.'
category: layout
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Main.vue
---

## Bearbeiten

Die Hauptkomponente rendert ein `<main>`-Element, das zusammen mit der [Header](/docs/components/header)-Komponente ein Layout in voller Höhe erstellt, das sich auf die verfügbare Höhe des Ansichtsfensters erstreckt.

::tip{to="/docs/getting-started/theme/css-variables#header"}
Die Hauptkomponente verwendet die CSS-Variable `--ui-header-height`, um sich korrekt unter der `Header` zu positionieren.
::

## Examples (Beispiele)

### Innerhalb `app.vue`

Verwenden Sie die Main-Komponente in Ihrem `app.vue` oder in einem Layout:

```vue [app.vue]{5-9}
<template>
  <UApp>
    <UHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <UFooter />
  </UApp>
</template>
```

## API (englisch)

### Props Bearbeiten

:component-props

### Slots (englisch)

:component-slots

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
