---
description: 'Een rasterlay-out voor uw pagina 's met linker- en rechterkolommen.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Page.vue
---

## Gebruik

Het onderdeel Pagina helpt u lay-outs te maken met optionele linker- en rechterkolommen. Het is perfect voor het bouwen van documentatiesites en andere inhoudsgerichte pagina 's.

```vue {2,6}
<template>
  <UPage>
    <template #left />

    <template #right />
  </UPage>
</template>
```

::tip
De pagina wordt weergegeven als een gecentreerde lay-out met één kolom als er geen slots zijn opgegeven.
::

## Voorbeelden

::note
Hoewel deze voorbeelden [Nuxt Content](https://content.nuxt.com) gebruiken, kunnen de componenten worden geïntegreerd met elk contentbeheersysteem.
::

### Binnen een layout

Gebruik het onderdeel Pagina in een lay-out met de `left`-sleuf om een navigatie weer te geven:

```vue [layouts/docs.vue] {9-13}
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

### Binnen een pagina

Gebruik het onderdeel Pagina in een pagina met de `right`-sleuf om een inhoudsopgave weer te geven:

```vue [pages/\[...slug\\].vue]{29-31}
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
    <UPageHeader :title="page.title" :description="page.description" />

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

::note
In dit voorbeeld gebruiken we de `ContentToc`-component om de inhoudsopgave weer te geven.
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
