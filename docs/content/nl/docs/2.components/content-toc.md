---
title: InhoudToc
description: 'Een kleverige inhoudsopgave met automatische actieve ankerlink-markering.'
category: content
framework: nuxt
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentToc.vue
---

::warning{to="/docs/getting-started/integrations/content"}
Dit onderdeel is alleen beschikbaar wanneer de `@nuxt/content` module is geïnstalleerd.
::

## Gebruik

Gebruik de `links` prop met de `page?.body?.toc?.links`{lang="ts-type"} die je krijgt bij het ophalen van een pagina.

::component-example
---
name: 'content-toc-example'
props:
  class: 'w-full'
---
::

### Titel

Gebruik de `title` prop om de titel van de inhoudsopgave te wijzigen.

::component-code{prefix="content"}
---
prettier: true
collapse: true
hide:
  - class
ignore:
  - links
external:
  - links
externalTypes:
  - ContentTocLink[]
props:
  title: 'On this page'
  class: 'w-full'
  links:
  - id: usage
    depth: 2
    text: Usage
    children:
    - id: title
      depth: 3
      text: Title
    - id: color
      depth: 3
      text: Color
    - id: highlight
      depth: 3
      text: Highlight
    - id: 'highlight-color'
      depth: 3
      text: Highlight Color
    - id: 'highlight-variant'
      depth: 3
      text: Highlight Variant
---
::

### Kleur

Gebruik de `color` prop om de kleur van de links te veranderen.

::component-code{prefix="content"}
---
prettier: true
collapse: true
hide:
  - class
ignore:
  - links
external:
  - links
externalTypes:
  - ContentTocLink[]
props:
  color: 'neutral'
  class: 'w-full'
  links:
    - id: usage
      depth: 2
      text: Usage
      children:
        - id: title
          depth: 3
          text: Title
        - id: color
          depth: 3
          text: Color
        - id: highlight
          depth: 3
          text: Highlight
        - id: 'highlight-color'
          depth: 3
          text: Highlight Color
        - id: 'highlight-variant'
          depth: 3
          text: Highlight Variant
---
::

### Hoogtepunt

Gebruik de `highlight` prop om een gemarkeerde rand voor het actieve item weer te geven.

::component-code{prefix="content"}
---
prettier: true
collapse: true
hide:
  - class
ignore:
  - links
external:
  - links
externalTypes:
  - ContentTocLink[]
props:
  highlight: true
  class: 'w-full'
  links:
    - id: usage
      depth: 2
      text: Usage
      children:
        - id: title
          depth: 3
          text: Title
        - id: color
          depth: 3
          text: Color
        - id: highlight
          depth: 3
          text: Highlight
        - id: 'highlight-color'
          depth: 3
          text: Highlight Color
        - id: 'highlight-variant'
          depth: 3
          text: Highlight Variant
---
::

### Highlight Kleur

Gebruik de `highlight-color` prop om de kleur van de highlight te veranderen. Standaard is dit de `color` prop.

::component-code{prefix="content"}
---
prettier: true
collapse: true
hide:
  - class
ignore:
  - links
  - highlight
external:
  - links
externalTypes:
  - ContentTocLink[]
props:
  highlight: true
  highlightColor: 'neutral'
  class: 'w-full'
  links:
    - id: usage
      depth: 2
      text: Usage
      children:
        - id: title
          depth: 3
          text: Title
        - id: color
          depth: 3
          text: Color
        - id: highlight
          depth: 3
          text: Highlight
        - id: 'highlight-color'
          depth: 3
          text: Highlight Color
        - id: 'highlight-variant'
          depth: 3
          text: Highlight Variant
---
::

### Hoogtepunt Variant: badge{label="4.6+" class="align-text-top"}

Gebruik de `highlight-variant`-prop om de stijl van het hoogtepunt te wijzigen. Standaard op `straight`.

::component-code{prefix="content"}
---
prettier: true
collapse: true
hide:
  - class
ignore:
  - links
  - highlight
external:
  - links
externalTypes:
  - ContentTocLink[]
props:
  highlight: true
  highlightColor: 'primary'
  highlightVariant: 'circuit'
  class: 'w-full'
  links:
    - id: usage
      depth: 2
      text: Usage
      children:
        - id: title
          depth: 3
          text: Title
        - id: color
          depth: 3
          text: Color
        - id: highlight
          depth: 3
          text: Highlight
        - id: 'highlight-color'
          depth: 3
          text: Highlight Color
        - id: 'highlight-variant'
          depth: 3
          text: Highlight Variant
    - id: examples
      depth: 2
      text: Examples
      children:
        - id: within-a-page
          depth: 3
          text: Within a Page
    - id: api
      depth: 2
      text: API
      children:
        - id: props
          depth: 3
          text: Props
        - id: slots
          depth: 3
          text: Slots
        - id: emits
          depth: 3
          text: Emits
    - id: theme
      depth: 2
      text: Theme
---
::

## Voorbeelden

### Binnen een pagina

Gebruik de ContentToc-component op een pagina om de inhoudsopgave weer te geven:

```vue [pages/\[...slug\\].vue]{22-24}
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

## API

### Props

:component-props

### Slots

:component-slots

### Uitzendt

:component-emits

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog{prefix="content"}
