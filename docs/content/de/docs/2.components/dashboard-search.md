---
title: Dashboardsuche
description: 'Eine gebrauchsfertige CommandPalette zum Hinzufügen zu Ihrem Dashboard.'
category: dashboard
links:
  - label: Kommandobrücke
    to: /docs/components/command-palette
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSearch.vue
---

## Bearbeiten

Die Komponente DashboardSearch erweitert die Komponente [CommandPalette](/docs/components/command-palette), sodass Sie jede Eigenschaft wie `icon`, `placeholder` usw. übergeben können.

Verwenden Sie es innerhalb des Standardsteckplatzes der Komponente [DashboardGroup](/docs/components/dashboard-group):

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
Sie können die CommandPalette öffnen, indem Sie: kbd{value="meta"}: kbd{value="K" class="ms-px"} drücken, die Komponente [DashboardSearchButton](/docs/components/dashboard-search-button) verwenden oder eine `v-model:open`{lang="ts"}-Direktive verwenden.
::

### shortcut (englisch)

Verwenden Sie die `shortcut`-Prop, um die Verknüpfung zu ändern, die in [defineShortcuts](/docs/composables/define-shortcuts) verwendet wird, um die ContentSearch-Komponente zu öffnen. Standardmäßig auf `meta_k` (: kbd{value="meta"}: kbd{value="K"}).

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

### Color Mode (englisch)

Standardmäßig wird der Befehlspalette eine Gruppe von Befehlen hinzugefügt, sodass Sie zwischen dem hellen und dunklen Modus wechseln können. Dies wird nur wirksam, wenn der `colorMode` nicht in einer bestimmten Seite erzwungen wird, was durch `definePageMeta` erreicht werden kann:

```vue [pages/index.vue]
<script setup lang="ts">
definePageMeta({
  colorMode: 'dark'
})
</script>
```

Sie können dieses Verhalten deaktivieren, indem Sie die `color-mode`-prop auf `false` setzen:

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

## API (englisch)

### Props (englisch)

:component-props

### Slots Bearbeiten

:component-slots

### Emits (englisch)

:component-emits

### Expose (englisch)

Beim Zugriff auf die Komponente über eine Template-Referenz können Sie Folgendes verwenden:

| Vorname| Typ|
| ---- | ---- |
| `commandPaletteRef`{lang="ts-type"} nicht| `Ref<InstanceType<typeof UCommandPalette> \| null>`{lang="ts-type"} nicht|

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
