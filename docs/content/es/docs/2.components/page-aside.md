---
title: Páginas
description: 'Un lado pegajoso para mostrar la navegación de su página.'
category: page
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageAside.vue
---

xph0000xUso

El componente PageAside es un elemento adhesivo `<aside>` que solo se muestra a partir del punto de interrupción [`lg` ](https://tailwindcss.com/docs/breakpoints).

::tip{to="/docs/getting-started/theme/css-variables#header"}
El componente PageAside utiliza la variable CSS `--ui-header-height` para posicionarse correctamente debajo de la variable `Header`.
::

Úselo dentro de la ranura `left` o `right` del componente [Page](/docs/components/page):

```vue {4}
<template>
  <UPage>
    <template #left>
      <UPageAside />
    </template>
  </UPage>
</template>
```

## Ejemplos

::note
Si bien estos ejemplos utilizan [Nuxt Content](https://content.nuxt.com), los componentes se pueden integrar con cualquier sistema de gestión de contenido.
::

### Dentro de un diseño

Use the PageAside component in a layout to display the navigation:

```vue [layouts/docs.vue]{9-13}
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
En este ejemplo, usamos el componente `ContentNavigation` para mostrar la navegación inyectada en `app.vue`.
::

## API (Edición española)

### Accesorios

:component-props

### Slots (Edición española)

:component-slots

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
