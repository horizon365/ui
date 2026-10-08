---
description: 'Ein Hauptelement, das die verfügbare Viewport-Höhe ausfüllt.'
category: layout
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Main.vue
---

@@@ph000@Verwendung

Die Hauptkomponente rendert ein `<main>`-Element, das mit der Komponente [Header](/docs/components/header) zusammenarbeitet, um ein Layout in voller Höhe zu erstellen, das sich bis zur verfügbaren Höhe des Ansichtsfensters erstreckt.

::tip{to="/docs/getting-started/theme/css-variables#header"}
Die Hauptkomponente verwendet die CSS-Variable `--ui-header-height`, um sich korrekt unter der `Header` zu positionieren.
::

@@ph008 @ Beispiele

@@ph009@@@ph010@@@ph010@@@@ph010@@@@@ph010@@@@ph010@@@@@ph010 @

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

@@ph027@@api

@@@ph028@@Props

Komponenten-Props

@@ph029@@slots

Die Komponenten-Slots

@@ph030@gmail.de

Das Komponenten-Theme

@@ph031@@changelog @ changelog

Das Component-Changelog
