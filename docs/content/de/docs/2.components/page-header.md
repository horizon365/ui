---
title: Seitenheader
description: 'Responsive Header für Ihre Seiten'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageHeader.vue
---

@@@ph000@@Verwendung

Die PageHeader-Komponente zeigt einen Header für Ihre Seite.

Verwenden Sie es innerhalb des Standardsteckplatzes der Komponente [Page](/docs/components/page) vor der Komponente [PageBody](/docs/components/page-body)::

```vue {3}
<template>
  <UPage>
    <UPageHeader />

    <UPageBody />
  </UPage>
</template>
```

@@ph018@title

Verwenden Sie `title` prop, um einen Titel im Header anzuzeigen.

::component-code
---
Hide:
  @@ph020@@class
Props:
  Überschrift:"PageHeader"
  Klasse: "W-voll"
---
::

@@ph021@@Beschreibung

Verwenden Sie `description` prop, um eine Beschreibung im Header anzuzeigen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph023@title
Hide:
  @@ph024@gmail.de
Props:
  Überschrift:"PageHeader"
  description: 'Ein responsiver Seitenkopf mit Titel, Beschreibung und Aktionen.'
  Klasse: "W-voll"
---
::

@@ph025@Überschrift

Verwenden Sie `headline` prop, um eine Überschrift im Header anzuzeigen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph027@title
  @@ph028@beschreibung
Hide:
  @@ph029@gmail.de
Props:
  Überschrift:"PageHeader"
  description: 'Ein responsiver Seitenkopf mit Titel, Beschreibung und Aktionen.'
  Überschrift:"Komponenten"
  Klasse: "W-voll"
---
::

@@@@@@@@300@@Links

Verwenden Sie `links` prop, um eine Liste von [Button](/docs/components/button) im Header anzuzeigen.

::component-code
---
Schöner: wahr
Außen:
  @@@@@36@@links
Externe Typen:
  @@ph037@buttonprops [Bearbeiten | Quelltext bearbeiten]
Ignoriert:
  @@@@@@38@title
  @@ph039 @ Beschreibung
  @@ph040@headline @@ Überschrift
  @@@@41@@@links
Hide:
  @@ph042@gmail.de
Props:
  Überschrift:"PageHeader"
  description: 'Ein responsiver Seitenkopf mit Titel, Beschreibung und Aktionen.'
  Überschrift:"Komponenten"
  Linke:
    - label:'GitHub'(auf Englisch)
      Icon: I-Simple-Icons-GitHub
      https://github.com/nuxt/ui/tree/v4/src/runtime/components/PageHeader.vue
      Ziel: _blank
  Klasse: "W-voll"
---
::

@@ph044@@Beispiele

::note
Während diese Beispiele [Nuxt Content](https://content.nuxt.com) verwenden, können die Komponenten in jedes Content-Management-System integriert werden.
::

### Innerhalb einer Seite

Verwenden Sie die PageHeader-Komponente in einer Seite, um die Kopfzeile der Seite anzuzeigen:

```vue [pages/\[...slug\\].vue]{19-24}
<script setup lang="ts">
const route = useRoute()

definePageMeta({
  layout: 'docs'
})

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('docs').path(route.path).first()
})

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => {
  return queryCollectionItemSurroundings('content', route.path)
})
</script>

<template>
  <UPage>
    <UPageHeader
      :title="page.title"
      :description="page.description"
      :headline="page.headline"
      :links="page.links"
    />

    <UPageBody>
      <ContentRenderer :value="page" />

      <USeparator />

      <UContentSurround :surround="surround" />
    </UPageBody>

    <template #right>
      <UContentToc :links="page.body.toc.links" />
    </template>
  </UPage>
</template>
```

@@900@bpb

@@ph091@@@props

Komponenten-Props

@@ph092@@slots

Die Komponenten-Slots

@@ph093@gmail.de

Das Komponenten-Theme

@@ph094@@changelog @@changelog

Das Component-Changelog
