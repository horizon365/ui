---
title: Contenido
description: 'Una tabla de contenidos pegajosa con resaltado automático de enlaces de anclaje activo.'
category: content
framework: nuxt
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentToc.vue
---

::warning{to="/docs/getting-started/integrations/content"}
Este componente sólo está disponible cuando el módulo `@nuxt/content` está instalado.
::

## Servicio

Utilice el prop `links` con el `page?.body?.toc?.links`{lang="ts-type"} que se obtiene al buscar una página.

::component-example
---
name: 'content-toc-example'
props:
  class: 'w-full'
---
::

### Nombre

Utilice el prop `title` para cambiar el título de la tabla de contenidos.

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

### color (Edición española)

Utilice el prop `color` para cambiar el color de los enlaces.

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

### Resaltado

Utilice el accesorio `highlight` para mostrar un borde resaltado para el elemento activo.

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

### Highlight Color (Edición española)

Utilice el prop `highlight-color` para cambiar el color del resaltado. Por defecto, el prop `color`.

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

### Variante de resaltado: badge{label="4.6+" class="align-text-top"}

Utilice el prop `highlight-variant` para cambiar el estilo del resaltado. Predeterminados a `straight`.

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

## Ejemplos

### Dentro de una página

Utilice el componente ContentToc en una página para mostrar la tabla de contenidos:

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

## API (Versión)

### Props (accesorios)

:component-props

### Slots

:component-slots

### Emisiones

:component-emits

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog{prefix="content"}
