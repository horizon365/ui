---
title: DashboardZoeken
description: 'Een kant-en-klaar CommandPalette om toe te voegen aan uw dashboard.'
category: dashboard
links:
  - label: Opdrachtpalet
    to: /docs/components/command-palette
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSearch.vue
---

## Gebruik

De DashboardSearch-component breidt de [CommandPalette](/docs/components/command-palette) -component uit, zodat u elke eigenschap zoals `icon`, `placeholder`, enz. Kunt doorgeven.

Gebruik het in de standaardsleuf van de [DashboardGroup](/docs/components/dashboard-group) component:

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
U kunt het CommandPalette openen door op: kbd{value="meta"}: kbd{value="K" class="ms-px"} te drukken, de [DashboardSearchButton](/docs/components/dashboard-search-button) component te gebruiken of een `v-model:open`{lang="ts"} richtlijn te gebruiken.
::

### Sneltoets

Gebruik de `shortcut`-prop om de snelkoppeling te wijzigen die wordt gebruikt in [defineShortcuts](/docs/composables/define-shortcuts) om de ContentSearch-component te openen. Standaard is `meta_k` (: kbd{value="meta"}: kbd{value="K"}).

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

### Kleurmodus

Standaard wordt een groep commando 's toegevoegd aan het opdrachtpalet, zodat u kunt schakelen tussen de lichte en donkere modus.
Dit wordt alleen van kracht als de `colorMode` niet wordt geforceerd op een specifieke pagina die kan worden bereikt via `definePageMeta`:

```vue [pages/index.vue]
<script setup lang="ts">
definePageMeta({
  colorMode: 'dark'
})
</script>
```

U kunt dit gedrag uitschakelen door de `color-mode` prop op `false` te zetten:

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

## API

### Props

:component-props

### Slots

:component-slots

### Uitzendt

:component-emits

### Expose

Wanneer u de component opent via een sjabloonref, kunt u het volgende gebruiken:

| Naam | Type |
| ---- | ---- |
| `commandPaletteRef`{lang="ts-type"} | `Ref<InstanceType<typeof UCommandPalette> \| null>`{lang="ts-type"} |

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog
