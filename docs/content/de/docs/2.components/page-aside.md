---
title: Seitenansicht
description: 'Ein Sticky zur Seite, um die Navigation Ihrer Seite anzuzeigen.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageAside.vue
---

## Bearbeiten

Die PageAside-Komponente ist ein klebriges `<aside>`-Element, das nur ab dem [`lg`-Breakpoint ](https://tailwindcss.com/docs/breakpoints) angezeigt wird.

::tip{to="/docs/getting-started/theme/css-variables#header"}
Die PageAside-Komponente verwendet die CSS-Variable `--ui-header-height`, um sich korrekt unter der `Header` zu positionieren.
::

Verwenden Sie es innerhalb des `left`-oder `right`-Steckplatzes der Komponente [Page](/docs/components/page):

```vue {4}
<template>
  <UPage>
    <template #left>
      <UPageAside />
    </template>
  </UPage>
</template>
```

## Examples (Beispiele)

::note
Während diese Beispiele [Nuxt Content](https://content.nuxt.com) verwenden, können die Komponenten in jedes Content Management System integriert werden.
::

### In einem Layout

Verwenden Sie die Komponente PageAside in einem Layout, um die Navigation anzuzeigen:

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
In diesem Beispiel verwenden wir die `ContentNavigation`-Komponente, um die in `app.vue` eingespeiste Navigation anzuzeigen.
::

## API (englisch)

### Props Bearbeiten

:component-props

### Slots Bearbeiten

:component-slots

## Theme (englisch)

:component-theme

## Changelog (englisch)

:component-changelog
