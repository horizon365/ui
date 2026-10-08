---
title: Content-Umgebung
description: 'Ein paar prev und next links, um zwischen den seiten zu navigieren.'
category: content
framework: nuxt
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentSurround.vue
---

::warning{to="/docs/getting-started/integrations/content"}
Diese Komponente ist nur verfügbar, wenn das `@nuxt/content`-Modul installiert ist.
::

@@ph001@@Nutzung

Verwenden Sie `surround` prop mit dem Wert `surround`{lang="ts-type"}, den Sie beim Abrufen einer Seitenumrandung erhalten.

::component-example
---
Name: 'Content-Surround-Beispiel'
Props:
  Klasse: "W-voll"
---
::

### Prev/Nächste

Verwenden Sie die Requisiten `prev-icon` und `next-icon`, um die Schaltflächen [Icon](/docs/components/icon) anzupassen.

::component-code{prefix="content"}
---
Schöner: wahr
Einsturz: wahr
Ignoriert:
  - surround
Außen:
  - surround
Externe Personen:
  - ContentSurroundLink []
Props:
  VorschauIcon: 'i-lucide-chevron-left'
  nextIcon: 'i-lucide-chevron-right'(I-lucide-chevron-rechts) auf der rechten Seite
  Surround:
  - title: ContentSearchButton [Bearbeiten | Quelltext bearbeiten]
    path: /docs/components/content-search-button (auf Englisch)
    stem: docs/2.components/content-search-button (englisch)
    Beschreibung: Ein vorgestylter Button zum Öffnen des ContentSearch Modal.
  - title: Inhalt
    Pfad: /docs/Komponenten/content-toc
    Datei: docs/2.components/content-toc
    Beschreibung: Ein klebriges Inhaltsverzeichnis mit anpassbaren Slots.
---
::

## Beispiele

### Innerhalb einer Seite

Verwenden Sie die ContentSurround-Komponente in einer Seite, um die Links prev und next anzuzeigen:

```vue [pages/\[...slug\\].vue]{19}
<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => queryCollection('docs').path(route.path).first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <UPage v-if="page">
    <UPageHeader :title="page.title" />

    <UPageBody>
      <ContentRenderer v-if="page.body" :value="page" />

      <USeparator v-if="surround?.filter(Boolean).length" />

      <UContentSurround :surround="(surround as any)" />
    </UPageBody>

    <template v-if="page?.body?.toc?.links?.length" #right>
      <UContentToc :links="page.body.toc.links" />
    </template>
  </UPage>
</template>
```

## api

@@@@@@@@@@ph048@@props

Komponenten Props

@@ph049@gmail.de

Die Komponenten-Slots

@@ph050@gmail.de

Das Komponenten-Theme

@@ph051@@changelog @@@ changelog @@@ changelog

: component-changelog {prefix="content"}
