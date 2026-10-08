---
title: Seitenanker
description: 'Eine Liste der Anker, die auf der Seite angezeigt werden sollen.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageAnchors.vue
---

@@@ph000@@Verwendung

Verwenden Sie die PageAnchors-Komponente , um eine Liste von Links anzuzeigen .

::component-code
---
Einsturz : wahr
Schöner : wahr
Ignoriert :
  @@@001@@links
Außen :
  @@@002@@links
Externe Typen :
  - PageAnchor [ Bearbeiten | Quelltext bearbeiten ]
Props :
  Links auf :
    - label : ' Dokumentation '
      I-Lucide - Book-Open (englisch)
      nach/docs/getting-started
    - label : ' Komponenten '
      Icon : I-Lucide - Box (englisch)
      nach :/docs/components
    - label : ' Figma Kit ' (auf Englisch)
      Icon : I-Simple - Icons-Figma (englisch)
      zwei :https://go.nuxt.com/figma-ui
      Ziel : _ blank
    - label : ' Freigaben '
      Icon : I-Simple - Icons-GitHub
      zwei :https://github.com/nuxt/ui/releases
      Ziel: _blank
---
::

@@@@@008@@Links

Verwenden Sie `links` prop als Array von Objekten mit den folgenden Eigenschaften:

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@PH0111@@@@@@@@@@PH0111@@@@@@@@@@@@PH01112 @
`icon?: string``icon?: string``icon?: string`{lang="ts-type"}`icon?: string`{lang="ts-type"}
`class?: any``class?: any`{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}PH018018@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@PH02020@@@@@@@@@PH0202020@@@@@@@@@@@PH02021 @

Sie können jede Eigenschaft von der [Link](/docs/components/link#props) Komponente wie `to`,`target`, etc. übergeben.

::component-code
---
Schöner: wahr
Ignoriert:
  @@@@@@@28@@links
Außen:
  @@@@@@@@@29@@links
Externe Personen:
  - PageAnchor [Bearbeiten | Quelltext bearbeiten]
Props:
  Linke:
    - label:'Dokumentation'
      I-Lucide-Book-Open (englisch)
      nach/docs/getting-started
    - label:'Komponenten'
      Icon: I-Lucide-Box (englisch)
      nach: /docs/components
    - label:'Figma Kit'(auf Englisch)
      Icon: I-Simple-Icons-Figma (englisch)
      zwei :https://go.nuxt.com/figma-ui
      Ziel : _ blank
    - label : ' Freigaben '
      Icon : I-Simple - Icons-GitHub
      zwei :https://github.com/nuxt/ui/releases
      Ziel : _ blank
---
::

@@ph035@@Beispiele

::note
Während diese Beispiele[Nuxt Content](https://content.nuxt.com)verwenden , können die Komponenten in jedes Content-Management - System integriert werden .
::

### Innerhalb eines Layouts

Verwenden Sie die PageAnchors-Komponente innerhalb der Komponente[PageAside](/docs/components/page-aside), um eine Liste von Links über der Navigation anzuzeigen .

```vue [layouts/docs.vue]{35}
<script setup lang="ts">
import type { PageAnchor } from '@nuxt/ui'
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<ContentNavigationItem[]>('navigation')

const links: PageAnchor[] = [{
  label: 'Documentation',
  icon: 'i-lucide-book-open',
  to: '/docs/getting-started'
}, {
  label: 'Components',
  icon: 'i-lucide-box',
  to: '/docs/components'
}, {
  label: 'Figma Kit',
  icon: 'i-simple-icons-figma',
  to: 'https://go.nuxt.com/figma-ui',
  target: '_blank'
}, {
  label: 'Releases',
  icon: 'i-lucide-rocket',
  to: 'https://github.com/nuxt/ui/releases',
  target: '_blank'
}]
</script>

<template>
  <UPage>
    <template #left>
      <UPageAside>
        <UPageAnchors :links="links" />

        <USeparator type="dashed" />

        <UContentNavigation :navigation="navigation" />
      </UPageAside>
    </template>

    <slot />
  </UPage>
</template>
```

@@@@@@899@@bmdbbb

@@@@@@@@@@@ph090@@@props

Komponenten Props

@@ph091@@slots

Die Komponenten-Slots

@@ph092@@gmail.de

Das Komponenten-Theme

@@ph093@@changelog@@changelog

Das Component-Changelog
