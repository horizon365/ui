---
title: zufrieden
description: 'Ein klebriges Inhaltsverzeichnis mit automatischer Hervorhebung aktiver Ankerlinks.'
category: content
framework: nuxt
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentToc.vue
---

::warning{to="/docs/getting-started/integrations/content"}
Diese Komponente ist nur verfügbar, wenn das Modul `@nuxt/content` installiert ist.
::

## Usage (Verwendung)

Verwenden Sie die `links`-Prop mit der `page?.body?.toc?.links`{lang="ts-type"}, die Sie beim Abrufen einer Seite erhalten.

::component-example
---
name: 'content-toc-example'
props:
  class: 'w-full'
---
::

### Titel

Verwenden Sie die `title`-prop, um den Titel des Inhaltsverzeichnisses zu ändern.

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

### Farbe

Verwenden Sie die `color`-Prop, um die Farbe der Links zu ändern.

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

### Highlight (Englisch)

Verwenden Sie die `highlight`-Stütze, um einen hervorgehobenen Rahmen für das aktive Element anzuzeigen.

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

### Highlight Color (Deutsche Ausgabe)

Verwenden Sie die `highlight-color`-prop, um die Farbe der Markierung zu ändern. Es wird standardmäßig die `color`-prop verwendet.

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

### Highlight-Variante: badge{label="4.6+" class="align-text-top"}

Verwenden Sie die `highlight-variant`-prop, um den Stil des highlights zu ändern. Standardmäßig auf `straight`.

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

## Examples (Beispiele)

### innerhalb einer Seite

Verwenden Sie die ContentToc-Komponente in einer Seite, um das Inhaltsverzeichnis anzuzeigen:

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

### Props Bearbeiten

:component-props

### Slots Bearbeiten

:component-slots

### Emits (englisch)

:component-emits

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog{prefix="content"}
