---
description: 'Een hoofdelement dat de beschikbare viewport-hoogte vult.'
category: layout
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Main.vue
---

## Gebruik

De hoofdcomponent geeft een `<main>`-element weer dat samenwerkt met de [Header](/docs/components/header) om een lay-out op volledige hoogte te creëren die zich uitstrekt tot de beschikbare hoogte van de viewport.

::tip{to="/docs/getting-started/theme/css-variables#header"}
De hoofdcomponent gebruikt de `--ui-header-height` CSS-variabele om zichzelf correct onder de `Header` te positioneren.
::

## Voorbeelden

### Binnen `app.vue`

Gebruik de hoofdcomponent in uw `app.vue` of in een lay-out:

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

## API

### Props

:component-props

### Slots

:component-slots

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog
