---
title: PaginaLinks
description: 'Een lijst met links die op de pagina moeten worden weergegeven.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageLinks.vue
---

## Gebruik

Gebruik het onderdeel PageLinks om een lijst met links weer te geven.

::component-code
---
collapse: true
prettier: true
ignore:
  - links
external:
  - links
externalTypes:
  - PageLink[]
props:
  links:
    - label: 'Edit this page'
      icon: i-lucide-file-pen
      to: https://github.com/nuxt/ui/blob/v4/docs/content/docs/2.components/page-links.md
    - label: 'Star on GitHub'
      icon: i-lucide-star
      to: https://github.com/nuxt/ui
    - label: 'Releases'
      icon: i-lucide-rocket
      to: https://github.com/nuxt/ui/releases
---
::

### Links

Gebruik de `links` prop als een array van objecten met de volgende eigenschappen:

- `label: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkLeadingIcon?: ClassNameValue }`{lang="ts-type"}

U kunt elke eigenschap van de [Link](/docs/components/link#props) component zoals `to`, `target`, etc.

::component-code
---
prettier: true
ignore:
  - links
external:
  - links
externalTypes:
  - PageLink[]
props:
  links:
    - label: 'Edit this page'
      icon: i-lucide-file-pen
      to: https://github.com/nuxt/ui/blob/v4/docs/content/docs/2.components/page-links.md
    - label: 'Star on GitHub'
      icon: i-lucide-star
      to: https://github.com/nuxt/ui
    - label: 'Releases'
      icon: i-lucide-rocket
      to: https://github.com/nuxt/ui/releases
---
::

### Titel

Gebruik de `title` prop om een titel boven de links weer te geven.

::component-code
---
prettier: true
ignore:
  - links
external:
  - links
externalTypes:
  - PageLink[]
props:
  title: 'Community'
  links:
    - label: 'Edit this page'
      icon: i-lucide-file-pen
      to: https://github.com/nuxt/ui/blob/v4/docs/content/docs/2.components/page-links.md
    - label: 'Star on GitHub'
      icon: i-lucide-star
      to: https://github.com/nuxt/ui
    - label: 'Releases'
      icon: i-lucide-rocket
      to: https://github.com/nuxt/ui/releases
---
::

## Voorbeelden

::note
Hoewel deze voorbeelden [Nuxt Content](https://content.nuxt.com) gebruiken, kunnen de componenten worden geïntegreerd met elk contentbeheersysteem.
::

### Binnen een pagina

Gebruik de PageLinks-component in de `bottom`-sleuf van de ContentToc-component om een lijst met links onder de inhoudsopgave weer te geven.

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

## API

### Props

:component-props

### Slots

:component-slots

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog
