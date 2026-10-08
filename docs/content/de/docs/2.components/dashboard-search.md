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

@@@ph000@Verwendung

Die DashboardSearch-Komponente erweitert die Komponente [CommandPalette](/docs/components/command-palette), sodass Sie jede Eigenschaft wie `icon`,`placeholder` usw. übergeben können.

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
Sie können die CommandPalette öffnen, indem Sie: kbd{value="meta"}: kbd{value="K" class="ms-px"}, die Komponente [DashboardSearchButton](/docs/components/dashboard-search-button) oder die Direktive `v-model:open`{lang="ts"} verwenden.
::

@@ph032@shortcut @ Kurzschluss

Verwenden Sie `shortcut` prop, um die Verknüpfung zu ändern, die in [defineShortcuts](/docs/composables/define-shortcuts) verwendet wird, um die ContentSearch-Komponente zu öffnen.

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

### Farbmodus

Standardmäßig wird der Befehlspalette eine Gruppe von Befehlen hinzugefügt, so dass Sie zwischen Hell-und Dunkelmodus wechseln können. Dies wird nur wirksam, wenn das `colorMode` nicht in einer bestimmten Seite erzwungen wird, was über `definePageMeta` erreicht werden kann:

```vue [pages/index.vue]
<script setup lang="ts">
definePageMeta({
  colorMode: 'dark'
})
</script>
```

Sie können dieses Verhalten deaktivieren, indem Sie `color-mode` prop auf `false` setzen:

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

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@api

@@@@@@@@@@@ph074@@Props

Komponenten Props

### Spielautomaten

Die Komponenten-Slots

@@@ph076@@@emits

Komponenten emittieren

### Aufdecken

Beim Zugriff auf die Komponente über eine Template-Referenz können Sie Folgendes verwenden:

| Vorname| Typen|
| ---- | ---- |
| @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@|@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@|

@@@@@@@@@@@ph082@@theme

Das Komponenten-Theme

@@ph083@@changelog @@changelog

Das Component-Changelog
