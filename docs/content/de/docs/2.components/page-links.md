---
title: Seitenlinks
description: 'Eine Liste von Links, die auf der Seite angezeigt werden sollen.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageLinks.vue
---

@@@ph000@@Verwendung

Verwenden Sie die Komponente PageLinks , um eine Liste von Links anzuzeigen .

::component-code
---
Einsturz : wahr
Schöner : wahr
Ignoriert :
  @@@001@@links
Außen :
  @@@002@@links
Externe Typen :
  @@ph003@pagelink [ Bearbeiten | Quelltext bearbeiten ]
Props :
  Links auf :
    - label : ' Diese Seite bearbeiten '
      I-Lucide - File-Pen (englisch)
      zwei :https://github.com/nuxt/ui/blob/v4/docs/content/docs/2.components/page-links.md
    - label : ' Stern auf GitHub '
      Bildnachweis : i-Lucide - Star
      zwei :https://github.com/nuxt/ui
    - label : ' Freigaben '
      I-Lucide - Rakete
      zwei :https://github.com/nuxt/ui/releases
---
::

@@@@@@007@Links

Verwenden Sie`links`prop als Array von Objekten mit den folgenden Eigenschaften :

`label: string``label: string`PH0111@@
`icon?: string``icon?: string``icon?: string`{lang="ts-type"}
`class?: any``class?: any``class?: any`{lang="ts-type"}{lang="ts-type"}`class?: any``class?: any``class?: any`
`ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkLeadingIcon?: ClassNameValue }``ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkLeadingIcon?: ClassNameValue }`PH02020

Sie können jede Eigenschaft von der[Link](/docs/components/link#props)Komponente wie`to`,`target`, etc. übergeben .

::component-code
---
Schöner : wahr
Ignoriert :
  @@@@@@27@@@links
Außen :
  @@@@@@@28@@links
Externe Personen :
  @@ph029@@PageLink [ ]
Props :
  Linke :
    - label : ' Diese Seite bearbeiten '
      I-Lucide - File-Pen (englisch)
      zwei :https://github.com/nuxt/ui/blob/v4/docs/content/docs/2.components/page-links.md
    - label : ' Stern auf GitHub '
      Bildnachweis : i-Lucide - Star
      zwei :https://github.com/nuxt/ui
    - label : ' Freigaben '
      Bezeichnung : i-Lucide - Rocket
      zwei :https://github.com/nuxt/ui/releases
---
::

@@ph033@title

Verwenden Sie die`title`prop , um einen Titel über den Links anzuzeigen .

::component-code
---
Schöner : wahr
Ignoriert :
  @@@@@35@@links
Außen :
  @@@@@36@@links
Externe Typen :
  - PageLink [ Bearbeiten | Quelltext bearbeiten ]
Props :
  Titel : " Gemeinschaft "
  Links auf :
    - label : ' Diese Seite bearbeiten '
      I-Lucide - File-Pen (englisch)
      zwei :https://github.com/nuxt/ui/blob/v4/docs/content/docs/2.components/page-links.md
    - label : ' Stern auf GitHub '
      Bildnachweis : i-Lucide - Star
      zwei :https://github.com/nuxt/ui
    - label : ' Freigaben '
      I-Lucide - Rakete
      zwei :https://github.com/nuxt/ui/releases
---
::

## Beispiele

::note
Während diese Beispiele[Nuxt Content](https://content.nuxt.com)verwenden , können die Komponenten in jedes Content-Management - System integriert werden .
::

### Innerhalb einer Seite

Verwenden Sie die PageLinks-Komponente im`bottom`- Slot der ContentToc-Komponente , um eine Liste von Links unterhalb des Inhaltsverzeichnisses anzuzeigen .

```vue [pages/\[...slug\\].vue]{48-52}
<script setup lang="ts">
import type { PageLink } from '@nuxt/ui'

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

const links = computed<PageLink[]>(() => [{
  icon: 'i-lucide-file-pen',
  label: 'Edit this page',
  to: `https://github.com/nuxt/ui/edit/v4/docs/content/${page?.value?.stem}.md`,
  target: '_blank'
}, {
  icon: 'i-lucide-star',
  label: 'Star on GitHub',
  to: 'https://github.com/nuxt/ui',
  target: '_blank'
}, {
  label: 'Releases',
  icon: 'i-lucide-rocket',
  to: 'https://github.com/nuxt/ui/releases'
}])
</script>

<template>
  <UPage>
    <UPageHeader :title="page.title" :description="page.description" />

    <UPageBody>
      <ContentRenderer :value="page" />

      <USeparator />

      <UContentSurround :surround="surround" />
    </UPageBody>

    <template #right>
      <UContentToc :links="page.body.toc.links">
        <template #bottom>
          <USeparator type="dashed" />

          <UPageLinks title="Community" :links="links" />
        </template>
      </UContentToc>
    </template>
  </UPage>
</template>
```

@@107@bpb

@@@@@@@@@@@@@@@ph108@@props

Komponenten Props

### Spielautomaten

Die Komponenten-Slots

@@ph110@gmail.de

Das Komponenten-Theme

@@ph111@changelog @@changelog @ changelog

Das Component-Changelog
