---
title: DashboardBúsqueda
description: 'Un CommandPalette listo para usar para agregar a su panel de control.'
category: dashboard
links:
  - label: Comandancia
    to: /docs/components/command-palette
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSearch.vue
---

xph0000xUso

El componente DashboardSearch extiende el componente [CommandPalette](/docs/components/command-palette), de modo que puede pasar cualquier propiedad como `icon`, `placeholder`, etc.

Úselo dentro de la ranura predeterminada del componente [DashboardGroup](/docs/components/dashboard-group):

```vue [layouts/dashboard.vue]{3}
<template>
  <UDashboardGroup>
    <UDashboardSidebar>
      <UDashboardSearchButton />
    </UDashboardSidebar>

    <UDashboardSearch />

    <slot />
  </UDashboardGroup>
</template>
```

::tip
Puede abrir la CommandPalette pulsando: kbd{value="meta"}: kbd{value="K" class="ms-px"}, utilizando el componente [DashboardSearchButton](xph027) o utilizando una directiva `v-model:open`{lang="ts"}.
::

### atajo

Utilice la prop `shortcut` para cambiar el acceso directo utilizado en [defineShortcuts](/docs/composables/define-shortcuts) para abrir el componente ContentSearch. Predeterminados a `meta_k` (: kbd{value="meta"}: kbd{value="K"}).

```vue [app.vue]{4}
<template>
  <UDashboardSearch
    v-model:search-term="searchTerm"
    shortcut="meta_k"
    :groups="groups"
    :fuse="{ resultLimit: 42 }"
  />
</template>
```

### Color en el modo

De forma predeterminada, se agregará un grupo de comandos a la paleta de comandos para que pueda cambiar entre el modo claro y oscuro. Esto solo tendrá efecto si el `colorMode` no se fuerza en una página específica que se puede lograr a través de `definePageMeta`:

```vue [pages/index.vue]
<script setup lang="ts">
definePageMeta({
  colorMode: 'dark'
})
</script>
```

Puede desactivar este comportamiento estableciendo el prop `color-mode` en `false`:

```vue [app.vue]{4}
<template>
  <UDashboardSearch
    v-model:search-term="searchTerm"
    :color-mode="false"
    :groups="groups"
    :fuse="{ resultLimit: 42 }"
  />
</template>
```

## API (Edición española)

### Accesorios

:component-props

### Slots (Edición española)

:component-slots

### Emisiones

:component-emits

### Exposición

Al acceder al componente a través de una referencia de plantilla, puede utilizar lo siguiente:

| Nombre| Tipo|
| ---- | ---- |
| `commandPaletteRef`xx{lang="ts-type"} (Edición española)| `Ref<InstanceType<typeof UCommandPalette> \| null>`xx{lang="ts-type"} (Edición española)|

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
