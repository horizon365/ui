---
title: Pageheader Siguiente
description: 'Un header responsive para tus páginas.'
category: page
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageHeader.vue
---

xph0000xUso

El componente PageHeader muestra un encabezado para su página.

Úselo dentro de la ranura predeterminada del componente [Page](/docs/components/page), antes del componente [PageBody](/docs/components/page-body):

```vue {3}
<template>
  <UPage>
    <UPageHeader />

    <UPageBody />
  </UPage>
</template>
```

### Nombre

Utilice el prop `title` para mostrar un título en el encabezado.

::component-code
---
hide:
  - class
props:
  title: 'PageHeader'
  class: 'w-full'
---
::

### Descripción

Utilice el prop `description` para mostrar una descripción en el encabezado.

::component-code
---
prettier: true
ignore:
  - title
hide:
  - class
props:
  title: 'PageHeader'
  description: 'A responsive page header with title, description and actions.'
  class: 'w-full'
---
::

### Categoría

Utilice el prop `headline` para mostrar un titular en el encabezado.

::component-code
---
prettier: true
ignore:
  - title
  - description
hide:
  - class
props:
  title: 'PageHeader'
  description: 'A responsive page header with title, description and actions.'
  headline: 'Components'
  class: 'w-full'
---
::

### Enlaces

Utilice el prop `links` para mostrar una lista de [Button](/docs/components/button) en el encabezado.

::component-code
---
prettier: true
external:
  - links
externalTypes:
  - ButtonProps[]
ignore:
  - title
  - description
  - headline
  - links
hide:
  - class
props:
  title: 'PageHeader'
  description: 'A responsive page header with title, description and actions.'
  headline: 'Components'
  links:
    - label: 'GitHub'
      icon: i-simple-icons-github
      to: 'https://github.com/nuxt/ui/tree/v4/src/runtime/components/PageHeader.vue'
      target: '_blank'
  class: 'w-full'
---
::

## Ejemplos

::note
Si bien estos ejemplos utilizan [Nuxt Content](xph088), los componentes se pueden integrar con cualquier sistema de gestión de contenido.
::

### Dentro de una página

Utilice el componente PageHeader en una página para mostrar el encabezado de la página:

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

## API (Edición española)

### Props (accesorios)

:component-props

### Slots en línea

:component-slots

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
