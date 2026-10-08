---
title: El DashboardPanel
description: 'Un panel redimensionable para mostrar en un panel de control.'
category: dashboard
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardPanel.vue
---

@@pH000@@Uso del producto

El componente DashboardPanel se utiliza para mostrar un panel. Su estado (tamaño, colapsado, etc.) se guardará en función de los accesorios `storage` y `storage-key` que proporcione al componente [DashboardGroup](/docs/components/dashboard-group#props).

Utilícelo dentro de la ranura predeterminada del componente [DashboardGroup](/docs/components/dashboard-group), puede colocar varios paneles uno al lado del otro:

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
Se recomienda establecer un `id` cuando se utilicen varios paneles en diferentes páginas para evitar conflictos.
::

::warning
Este componente no tiene un solo elemento raíz cuando se utiliza el prop `resizable`, así que envuélvalo en un contenedor (por ejemplo,`<div class="flex flex-1">`) si utiliza transiciones de página o requiere una sola raíz para el diseño.
::

Utilice las ranuras `header`,`body` y `footer` para personalizar el panel o la ranura por defecto si no desea un cuerpo desplazable con relleno.

::component-example
---
Colapso: Verdad
Nombre: 'dashboard-panel-ejemplo'
clase: '! p-0! justify-start'
Props:
  Tamaño: 22
  Deficiencias: 35
  Tamaño: 40
  clase: '! min-h-96 h-136'
---
::

::note
La mayoría de las veces, se utilizará el componente [`DashboardNavbar`](/docs/components/dashboard-navbar) en la ranura `header`.
::

### redimensionable

Utilice el prop `resizable` para hacer que el panel sea redimensionable.

::component-code
---
Categoría: true
Escondido:
  @38@minSize (Edición española)
  @@pH039@@defaltSize
  @400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @@401@clase
Props:
  Tamaño: true
  Tamaño: 22
  Deficiencias: 35
  Tamaño: 40
  Categoría:! min-h-96
Los slots:
  cuerpo:|

    @@ 42 @
clase: '! p-0! justify-start'
---

#cuerpo
por placeholder{class="h-96"}
::

@444@@Tamaño

Utilice los accesorios `min-size`,`max-size` y `default-size` para personalizar el tamaño del panel.

::component-code
---
Categoría: true
Ignora:
  @@48@@redimensionable
Escondido:
  @494@clase
Props:
  Tamaño: true
  Tamaño: 22
  Deficiencias: 35
  Tamaño máximo: 40
  Categoría:! min-h-96
Los slots:
  cuerpo:|

    @@ 500 @
clase: '! p-0! justify-start'
---

#Cuerpo
por {class="h-96"}
::

::tip{to="/docs/components/dashboard-group#props"}
Los tamaños se calculan como porcentajes por defecto. Puede cambiar esto usando el prop `unit` en el componente `DashboardGroup`.
::

@@pH054

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes de slots

@@507@Proyecto

Componente Tema

@@changelog

Categoría: component-changelog
