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

## Servicio

El componente ContentSearch amplía el componente [CommandPalette](/docs/components/command-palette) con soporte de búsqueda incorporado [`@nuxt/content`](https://content.nuxt.com), Soporta tanto el filtrado del lado del cliente [Fuse.js](https://www.fusejs.io/) como el filtrado completo del lado del servidor [FTS5. texto search](https://www.sqlite.org/fts5.html). Puede pasar cualquier propiedad CommandPalette como `icon`, `placeholder`, etc.

::component-example
---
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
source: false
name: 'content-search-example'
---
::

::note
Puede abrir CommandPalette presionando: kbd{value="meta"}: kbd{value="K" class="ms-px"}, utilizando el componente [ContentSearchButton](xph033) o utilizando el componente `useContentSearch`: `const { open } = useContentSearch()`{lang="ts"}.
::

::tip
Se recomienda envolver el componente `ContentSearch` en un componente [ClientOnly](https://nuxt.com/docs/api/components/client-only) para que no sea renderizado en el servidor.
::

### Navegación

Utilice el prop `navigation` con [`queryCollectionNavigation`](https://content.nuxt.com/docs/utils/query-collection-navigation) para agrupar los resultados de búsqueda por sección:

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

### Archivos

Utilice el prop `files` con [`queryCollectionSearchSections`](https://content.nuxt.com/docs/utils/query-collection-search-sections) para cargar todas las secciones de búsqueda por adelantado y utilice el filtrado [Fuse.js](xph074) del lado del cliente:

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
Utilice el prop `fuse` para configurar las opciones [useFuse](https://vueuse.org/integrations/useFuse) pasadas al [CommandPalette](/docs/components/command-paletteph11x subyacente, como `resultLimit` (`12` predeterminado) y `fuseOptions.threshold` (`0.1` predeterminado).
::

Archivo de la etiqueta: badge### 

Use el prop `search` con [`useSearchCollection`](https://content.nuxt.com/docs/utils/use-search-collection) para la búsqueda de texto completo del lado del servidor [FTS5 ](https://www.sqlite.org/fts5.html) con fragmentos resaltados en lugar del filtrado del lado del cliente:

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
Pase `search-status` para que el componente pueda volver a activar automáticamente la búsqueda una vez que el índice esté listo. Use `search-delay` (`100ms` predeterminado) para controlar cuánto tiempo debe detenerse la escritura antes de que se active la búsqueda. La opción `fuse.resultLimit` limita el total de resultados devueltos en todos los grupos (resultados de búsqueda, enlaces, tema, etc.).
::

::note
Cuando se utiliza el prop `search`, no es necesario pasar `files`. El componente llama a la función de búsqueda asíncrona en cada tecla en lugar de Fuse.js. Los resultados se asignan automáticamente y se agrupan por navegación con fragmentos resaltados. A diferencia del enfoque `files` que carga todas las secciones de búsqueda por adelantado y le permite navegar por los elementos de navegación antes de escribir, el prop `search` solo devuelve resultados después de que se ingresa una consulta.
::

### Atajo

Utilice la prop `shortcut` para cambiar el acceso directo utilizado en [defineShortcuts](/docs/composables/define-shortcuts) para abrir el componente ContentSearch. Predeterminados a `meta_k` (: kbd{value="meta"}: kbd{value="K"}).

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

### Enlaces

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

XPH213xColor en modo

De forma predeterminada, se agregará un grupo de comandos a la paleta de comandos para que pueda cambiar entre el modo claro y oscuro. Esto solo tendrá efecto si el `colorMode` no se fuerza en una página específica que se puede lograr a través de `definePageMeta`:

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

## API (Versión)

### Props (accesorios)

:component-props

### Slots

:component-slots

### Emisiones

:component-emits

### Exposición

Al acceder al componente a través de una referencia de plantilla, puede utilizar lo siguiente:

| Nombre| Tipo|
| ---- | ---- |
| `commandPaletteRef`{lang="ts-type"} (Edición española)| `Ref<InstanceType<typeof UCommandPalette> \| null>`x{lang="ts-type"} (Edición española)|

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog{prefix="content"}
