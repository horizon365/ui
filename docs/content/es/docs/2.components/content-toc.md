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

@@pH001@@El uso

Utilice el prop `links` con el `page?.body?.toc?.links`{lang="ts-type"} que obtiene al buscar una página.

::component-example
---
Nombre: 'content-toc-ejemplo'
Props:
  Categoría: w-full
---
::

@@005@Título del artículo

Utilice el prop `title` para cambiar el título de la tabla de contenidos.

::component-code{prefix="content"}
---
Categoría: true
Colapso: Verdad
Escondido:
  @007@clase
Ignora:
  @080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externo:
  @000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externalidades:
  @@@P2010@@ContentTocLink []
Props:
  Título:"En esta página"
  Categoría: w-full
  izquierda:
  - id: el uso
    Profundidad: 2
    Categoría: Usos
    niños:
    - id: título
      Profundidad: 3
      Texto: título
    - id: el color
      Profundidad: 3
      Categoría: Color
    @@P2014@@id: resaltado
      Profundidad: 3
      Categoría: Highlight
    - id:'highlight-color'(en inglés)
      Profundidad: 3
      Categoría: Highlight Color
    - id:'variante destacada'
      Profundidad: 3
      Categoría: Highlight Variant
---
::

@17@color

Utilice el prop `color` para cambiar el color de los enlaces.

::component-code{prefix="content"}
---
Categoría: true
Colapso: Verdad
Escondido:
  @1919@clase
Ignora:
  @@20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externo:
  @@21@enlaces
Externalidades:
  @@222@@ContentTocLink []
Props:
  Categoría:"Neutral"
  Categoría: w-full
  izquierda:
    - id: el uso
      Profundidad: 2
      Categoría: Usos
      niños:
        - id: título
          Profundidad: 3
          Texto: título
        - id: el color
          Profundidad: 3
          Categoría: Color
        @@2016@@id: resaltado
          Profundidad: 3
          Categoría: Highlight
        - id:'highlight-color'(en inglés)
          Profundidad: 3
          Categoría: Highlight Color
        - id:'variante destacada'
          Profundidad: 3
          Categoría: Highlight Variant
---
::

@@29@highlight (Edición española)

Utilice el prop `highlight` para mostrar un borde resaltado para el elemento activo.

::component-code{prefix="content"}
---
Categoría: true
Colapso: Verdad
Escondido:
  @@301@clase
Ignora:
  @@2003@enlaces
Externo:
  @@33@enlaces
Externalidades:
  @@@P24@@ContentTocLink []
Props:
  Destacado: Verdadero
  Categoría: w-full
  izquierda:
    - id: el uso
      Profundidad: 2
      Categoría: Usos
      niños:
        - id: título
          Profundidad: 3
          Texto: Título
        - id: el color
          Profundidad: 3
          Categoría: Color
        @@P038@@id: resaltado
          Profundidad: 3
          Categoría: Highlight
        - id:'highlight-color'(en inglés)
          Profundidad: 3
          Categoría: Highlight Color
        - id:'variante destacada'
          Profundidad: 3
          Categoría: Highlight Variant
---
::

### Resalte el color

Utilice el `highlight-color` prop para cambiar el color del resaltado. Por defecto a la `color` prop.

::component-code{prefix="content"}
---
Categoría: true
Colapso: Verdad
Escondido:
  @444@clase
Ignora:
  @@45000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @46@highlight
Externo:
  @@47@enlaces
Externalidades:
  - ContentTocLink []
Props:
  Destacado: Verdadero
  highlightColor: "Neutral"(Edición española)
  Categoría: w-full
  izquierda:
    - id: el uso
      Profundidad: 2
      Categoría: Usos
      niños:
        - id: título
          Profundidad: 3
          Texto: Título
        - id: el color
          Profundidad: 3
          Categoría: Color
        @@P052@@id: resaltado
          Profundidad: 3
          Categoría: Highlight
        - id:'highlight-color'(en inglés)
          Profundidad: 3
          Categoría: Highlight Color
        - id:'variante destacada'
          Profundidad: 3
          Categoría: Highlight Variant
---
::

### Highlight Variante: badge{label="4.6+" class="align-text-top"}

Utilice el prop `highlight-variant` para cambiar el estilo del resaltado. Predeterminados a `straight`.

::component-code{prefix="content"}
---
Categoría: true
Colapso: Verdad
Escondido:
  @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Ignora:
  @@pH060@enlaces
  @@pH061@highlight
Externo:
  @@2006@enlaces
Externalidades:
  @@@P2006@@ContentTocLink []
Props:
  Destacado: Verdadero
  highlightColor: 'primario'
  HighlightVariant: 'circuito'
  Categoría: w-full
  izquierda:
    - id: el uso
      Profundidad: 2
      Categoría: Usos
      niños:
        - id: título
          Profundidad: 3
          Texto: título
        - id: el color
          Profundidad: 3
          Categoría: Color
        @@P067@@id: resaltado
          Profundidad: 3
          Categoría: Highlight
        - id:'highlight-color'(en inglés)
          Profundidad: 3
          Categoría: Highlight Color
        - id:'variante destacada'
          Profundidad: 3
          Categoría: Highlight Variant
    - id: ejemplos
      Profundidad: 2
      Texto: Ejemplos
      niños:
        - id: within a page
          Profundidad: 3
          Texto: Dentro de una página
    @@pH072@@id: api
      Profundidad: 2
      Categoría: API
      niños:
        @@pH073@@id: Props (Edición española)
          Profundidad: 3
          Categoría: Props
        - id: las ranuras
          Profundidad: 3
          Categoría: Slots
        - id: emisiones
          Profundidad: 3
          Categoría: Emits
    - id: el tema
      Profundidad: 2
      Texto: tema
---
::

@777@Ejemplos

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

@@pH107 @@ Español

@108@108@108@108

Componentes Props

@109@109@109

Componentes de slots

@100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Emisiones

@111 @@ Temas

Componente Tema

@112@Changelog

por: component-changelog {prefix="content"}
