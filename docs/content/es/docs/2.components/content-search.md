---
title: Contentsearch
description: 'Un CommandPalette listo para usar para agregar a su documentación.'
category: content
framework: nuxt
links:
  - label: Comandancia
    to: /docs/components/command-palette
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentSearch.vue
---

::warning{to="/docs/getting-started/integrations/content"}
Este componente sólo está disponible cuando el módulo `@nuxt/content` está instalado.
::

@@pH001@@El uso

El componente ContentSearch extiende el [CommandPalette](/docs/components/command-palette) componente con soporte de búsqueda incorporado [`@nuxt/content`](https://content.nuxt.com), Soporta tanto el lado del cliente [Fuse.js](https://www.fusejs.io/) filtrado y el lado del servidor [FTS5 búsqueda de texto completo ](https://www.sqlite.org/fts5.html). Puede pasar cualquier propiedad CommandPalette como `icon`,`placeholder`, etc.

::component-example
---
iframe:
  Tamaño: 500px
iframeMobile: Verdad
Desconocido: true
fuente: FALSO
Nombre: 'content-search-example'
---
::

::note
Puede abrir el CommandPalette pulsando: kbd{value="meta"}: kbd{value="K" class="ms-px"}, utilizando el [ContentSearchButton](/docs/components/content-search-button) componente o utilizando el `useContentSearch` componible: `const { open } = useContentSearch()`{lang="ts"}.
::

::tip
Se recomienda envolver el `ContentSearch` componente en un [ClientOnly](https://nuxt.com/docs/api/components/client-only) componente por lo que no se representa en el servidor.
::

### Navegación

Utilice el prop `navigation` con [`queryCollectionNavigation`](https://content.nuxt.com/docs/utils/query-collection-navigation) para agrupar los resultados de la búsqueda por sección:

```vue [app.vue] {2, 9}
<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('content'))
</script>

<template>
  <UApp>
    <ClientOnly>
      <LazyUContentSearch
        :navigation="navigation"
      />
    </ClientOnly>
  </UApp>
</template>
```

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `files` con [`queryCollectionSearchSections`](https://content.nuxt.com/docs/utils/query-collection-search-sections) para cargar todas las secciones de búsqueda por adelantado y utilice el filtrado del lado del cliente [Fuse.js](https://www.fusejs.io/):

```vue [app.vue] {4-8, 16}
<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('content'))

const { data: files } = useLazyAsyncData('search', () => queryCollectionSearchSections('docs', {
  ignoredTags: ['style']
}), {
  server: false
})
</script>

<template>
  <UApp>
    <ClientOnly>
      <LazyUContentSearch
        :navigation="navigation"
        :files="files"
        :fuse="{ resultLimit: 20, fuseOptions: { threshold: 0.2 } }"
      />
    </ClientOnly>
  </UApp>
</template>
```

::tip
Utilice el `fuse` prop para configurar [useFusehttps://vueuse.org/integrations/useFuse) opciones pasadas a la subyacente [CommandPalette](/docs/components/command-palette) como `resultLimit`(por defecto `12`) y `fuseOptions.threshold`(por defecto `0.1`).
::

### Buscar: badge{label="4.8+" class="align-text-top"}

Utilice el prop `search` con [`useSearchCollection`](https://content.nuxt.com/docs/utils/use-search-collection) para la búsqueda de texto completo del lado del servidor [FTS5 ](https://www.sqlite.org/fts5.html) con fragmentos resaltados en lugar del filtrado del lado del cliente:

::warning
Requiere `@nuxt/content` v3.14 +.
::

```vue [app.vue] {4-7, 24-25}
<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('content'))

const { search, status, init } = useSearchCollection('content', {
  immediate: false,
  ignoredTags: ['style']
})

const { open } = useContentSearch()

// Defer index initialization until the user opens the palette when using `immediate: false`
watch(open, (value) => {
  if (value && status.value === 'idle') {
    init()
  }
})
</script>

<template>
  <UApp>
    <ClientOnly>
      <LazyUContentSearch
        :navigation="navigation"
        :search="search"
        :search-status="status"
      />
    </ClientOnly>
  </UApp>
</template>
```

::tip
Pase `search-status` para que el componente pueda volver a activar automáticamente la búsqueda una vez que el índice esté listo. Use `search-delay`(predeterminado `100ms`) para controlar cuánto tiempo debe pausar la escritura antes de que se inicie la búsqueda. La opción `fuse.resultLimit` limita el total de resultados devueltos en todos los grupos (resultados de búsqueda, enlaces, tema, etc.).
::

::note
Cuando se utiliza el prop `search`, no es necesario pasar `files`. El componente llama a la función de búsqueda asíncrona en cada tecla en lugar de Fuse.js. Los resultados se asignan automáticamente y se agrupan por navegación con fragmentos resaltados. A diferencia del enfoque `files` que carga todas las secciones de búsqueda por adelantado y le permite navegar por los elementos de navegación antes de escribir, El `search` prop sólo devuelve los resultados después de que se introduce una consulta.
::

@156@@atajo

Utilice el prop `shortcut` para cambiar el acceso directo utilizado en [defineShortcuts]() para abrir el componente ContentSearch. Predeterminados a `meta_k`(: kbd{value="meta"}: kbd{value="K"}).

```vue [app.vue]{5}
<template>
  <UApp>
    <ClientOnly>
      <LazyUContentSearch
        shortcut="meta_k"
      />
    </ClientOnly>
  </UApp>
</template>
```

@176@176@176

Utilice el prop `links` para añadir un grupo de enlaces de acceso rápido en la parte superior de la paleta de comandos:

```vue [app.vue] {21}
<script setup lang="ts">
const links = [{
  label: 'Docs',
  icon: 'i-lucide-book',
  to: '/docs/getting-started'
}, {
  label: 'Components',
  icon: 'i-lucide-box',
  to: '/docs/components'
}, {
  label: 'Showcase',
  icon: 'i-lucide-presentation',
  to: '/showcase'
}]
</script>

<template>
  <UApp>
    <ClientOnly>
      <LazyUContentSearch
        :links="links"
      />
    </ClientOnly>
  </UApp>
</template>
```

### Modo de color

De forma predeterminada, se agregará un grupo de comandos a la paleta de comandos para que pueda cambiar entre el modo claro y oscuro. Esto solo tendrá efecto si el `colorMode` no se fuerza en una página específica, lo que se puede lograr a través de `definePageMeta`:

```vue [pages/index.vue]
<script setup lang="ts">
definePageMeta({
  colorMode: 'dark'
})
</script>
```

Puede desactivar este comportamiento configurando el prop `color-mode` en `false`:

```vue [app.vue]{5}
<template>
  <UApp>
    <ClientOnly>
      <LazyUContentSearch
        :color-mode="false"
      />
    </ClientOnly>
  </UApp>
</template>
```

@228@2282 años

@229@229@229

Componentes Props

@@230@230@230@230@230

Componentes de slots

@231@@Emisiones

Componentes Emisiones

@@232@Exposicion

Al acceder al componente a través de una referencia de plantilla, puede utilizar lo siguiente:

| Nombre| Tipo|
| ---- | ---- |
| @@|@@234@@236|

@237 @@ Proyecto

Componente Tema

@@238@Changelog (Edición española)

por: component-changelog {prefix="content"}
