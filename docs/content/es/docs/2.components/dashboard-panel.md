---
title: El DashboardPanel
description: 'Un panel redimensionable para mostrar en un panel de control.'
category: dashboard
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardPanel.vue
---

xph0000xUso

Su estado (tamaño, colapsado, etc.) se guardará en función de los elementos de apoyo `storage` y `storage-key` que proporcione al componente [DashboardGroup](/docs/components/dashboard-group#props).

Usarlo dentro de la ranura predeterminada del componente [DashboardGroup](/docs/components/dashboard-group), puede poner varios paneles uno al lado del otro:

```vue [pages/index.vue]{8,10}
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>

<template>
  <UDashboardPanel id="inbox-1" resizable />

  <UDashboardPanel id="inbox-2" class="hidden lg:flex" />
</template>
```

::caution
Se recomienda establecer un `id` cuando se utilizan varios paneles en diferentes páginas para evitar conflictos.
::

::warning
Este componente no tiene un solo elemento raíz cuando se usa el prop `resizable`, así que envuélvalo en un contenedor (por ejemplo, `<div class="flex flex-1">`) si usa transiciones de página o requiere una sola raíz para el diseño.
::

Utiliza las ranuras `header`, `body` y `footer` para personalizar el panel o la ranura predeterminada si no quieres un cuerpo desplazable con relleno.

::component-example
---
collapse: true
name: 'dashboard-panel-example'
class: '!p-0 !justify-start'
props:
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96 h-136'
---
::

::note
La mayoría de las veces, se utilizará el componente [`DashboardNavbar`](/docs/components/dashboard-navbar) en la ranura `header`.
::

### redimensionable

Utilice el soporte `resizable` para hacer que el panel sea redimensionable.

::component-code
---
prettier: true
hide:
  - minSize
  - defaultSize
  - maxSize
  - class
props:
  resizable: true
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96'
slots:
  body: |

    <Placeholder class="h-96" />
class: '!p-0 !justify-start'
---

#body
:placeholder{class="h-96"}
::

### Tamaño

Utilice los accesorios `min-size`, `max-size` y `default-size` para personalizar el tamaño del panel.

::component-code
---
prettier: true
ignore:
  - resizable
hide:
  - class
props:
  resizable: true
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96'
slots:
  body: |

    <Placeholder class="h-96" />
class: '!p-0 !justify-start'
---

#body
:placeholder{class="h-96"}
::

::tip{to="/docs/components/dashboard-group#props"}
Los tamaños se calculan como porcentajes de forma predeterminada. Puede cambiar esto utilizando el prop `unit` en el componente `DashboardGroup`.
::

## API (Edición española)

### Accesorios

:component-props

### Slots (Español)

:component-slots

## Temas

:component-theme

xph05xChangelog (Edición española)

:component-changelog
