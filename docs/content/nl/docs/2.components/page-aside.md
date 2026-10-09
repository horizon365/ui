---
title: Pagina opzij
description: 'Een sticky opzij om uw paginanavigatie weer te geven.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageAside.vue
---

## Gebruik

Het PageAside-onderdeel is een kleverig `<aside>`-element dat alleen wordt weergegeven vanaf de [`lg` breakpoint](https://tailwindcss.com/docs/breakpoints).

::tip{to="/docs/getting-started/theme/css-variables#header"}
De PageAside-component gebruikt de `--ui-header-height` CSS-variabele om zichzelf correct onder de `Header` te positioneren.
::

Gebruik het in de `left`- of `right`-sleuf van de [Page](/docs/components/page) :

```vue {4}
<template>
  <UPage>
    <template #left>
      <UPageAside />
    </template>
  </UPage>
</template>
```

## Voorbeelden

::note
Hoewel deze voorbeelden [Nuxt Content](https://content.nuxt.com) gebruiken, kunnen de componenten worden geïntegreerd met elk contentbeheersysteem.
::

### Binnen een layout

Gebruik de PageAside-component in een lay-out om de navigatie weer te geven:

```vue [layouts/docs.vue]{9-13}
<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <UPage>
    <template #left>
      <UPageAside>
        <UContentNavigation :navigation="navigation" />
      </UPageAside>
    </template>

    <slot />
  </UPage>
</template>
```

::note
In dit voorbeeld gebruiken we de `ContentNavigation`-component om de navigatie weer te geven die in `app.vue` is geïnjecteerd.
::

## API

### Props

:component-props

### Slots

:component-slots

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog
