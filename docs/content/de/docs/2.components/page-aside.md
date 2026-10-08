---
title: Seitenansicht
description: 'Ein Sticky zur Seite, um die Navigation Ihrer Seite anzuzeigen.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageAside.vue
---

@@@ph000@Verwendung

Die PageAside-Komponente ist ein klebriges `<aside>`-Element, das nur ab dem [`lg` breakpoint](https://tailwindcss.com/docs/breakpoints) angezeigt wird.

::tip{to="/docs/getting-started/theme/css-variables#header"}
Die PageAside-Komponente verwendet die CSS-Variable `--ui-header-height`, um sich korrekt unter `Header` zu positionieren.
::

Verwenden Sie es innerhalb des `left` oder `right` Steckplatz der [Page](/docs/components/page) Komponente:

```vue {4}
<template>
  <UPage>
    <template #left>
      <UPageAside />
    </template>
  </UPage>
</template>
```

@@ph024@Beispiele

::note
Während in diesen Beispielen [Nuxt Content](https://content.nuxt.com) verwendet wird, können die Komponenten in jedes Content-Management-System integriert werden.
::

### Innerhalb eines Layouts

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
In diesem Beispiel verwenden wir die Komponente `ContentNavigation`, um die in `app.vue` eingefügte Navigation anzuzeigen.
::

@@@@@@@511@@@bpb

@@ph052@@@props

Komponenten-Props

@@ph053@gmail.de

Die Komponenten-Slots

@@ph054@gmail.de

Das Komponenten-Theme

@@ph055@@changelog @@@ changelog

Das Component-Changelog
