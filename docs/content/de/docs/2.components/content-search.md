---
title: Content-Suche
description: 'Eine gebrauchsfertige CommandPalette zum Hinzufügen zu Ihrer Dokumentation.'
category: content
framework: nuxt
links:
  - label: Kommandobrücke
    to: /docs/components/command-palette
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentSearch.vue
---

::warning{to="/docs/getting-started/integrations/content"}
Diese Komponente ist nur verfügbar, wenn das Modul `@nuxt/content` installiert ist.
::

## Usage (Verwendung)

Die ContentSearch-Komponente erweitert die [CommandPalette](/docs/components/command-palette)-Komponente um die integrierte [`@nuxt/content`](https://content.nuxt.comxph01x)-Suchunterstützung, Es unterstützt sowohl die clientseitige [Fuse.js](https://www.fusejs.io/)-Filterung als auch die serverseitige [FTS5-Full-Filter. Text search](https://www.sqlite.org/fts5.html). Sie können jede CommandPalette-Eigenschaft wie `icon`, `placeholder` usw. übergeben.

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
Sie können die CommandPalette öffnen, indem Sie kbd{value="meta"}: kbd{value="K" class="ms-px"} drücken, die Komponente [ContentSearchButton](/docs/components/content-search-button) verwenden oder die Komponente `useContentSearch` composable: `const { open } = useContentSearch()`{lang="ts"} verwenden.
::

::tip
Es wird empfohlen, die `ContentSearch`-Komponente in eine [ClientOnly](https://nuxt.com/docs/api/components/client-only)-Komponente zu packen, damit sie nicht auf dem Server gerendert wird.
::

### Navigation (englisch)

Verwenden Sie die `navigation`-Prop mit [`queryCollectionNavigation`](https://content.nuxt.com/docs/utils/query-collection-navigation), um Suchergebnisse nach Abschnitten zu gruppieren:

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

### Files Bearbeiten

Verwenden Sie die `files`-Prop mit [`queryCollectionSearchSections`](https://content.nuxt.com/docs/utils/query-collection-search-sections), um alle Suchabschnitte im Voraus zu laden, und verwenden Sie die clientseitige [Fuse. js](https://www.fusejs.io/)-Filterung:

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
Verwenden Sie die `fuse`-Prop, um die [useFuse](https://vueuse.org/integrations/useFuse)-Optionen zu konfigurieren, die an die zugrunde liegende [CommandPalette](/docs/components/command-palette) übergeben werden, z. B. `resultLimit` (Standard `12`) und `fuseOptions.threshold` (Standard `0.1`).
::

### Search: badge{label="4.8+" class="align-text-top"} [Bearbeiten | Quelltext bearbeiten]

Verwenden Sie die `search`-Prop mit [`useSearchCollection`](https://content.nuxt.com/docs/utils/use-search-collection) für serverseitige [FTS5-Volltextsuche ](https://www.sqlite.org/fts5.html) mit hervorgehobenen Snippets anstelle von clientseitiger Filterung:

::warning
Erfordert `@nuxt/content` v3.14 +.
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
Übergeben Sie `search-status`, damit die Komponente die Suche automatisch erneut auslösen kann, sobald der Index bereit ist. Verwenden Sie `search-delay` (Standard `100ms`), um zu steuern, wie lange die Eingabe angehalten werden muss, bevor die Suche ausgelöst wird. Die `fuse.resultLimit`-Option begrenzt die Gesamtzahl der Ergebnisse, die über alle Gruppen (Suchergebnisse, Links, Thema usw.) zurückgegeben werden.
::

::note
Wenn Sie die `search`-prop verwenden, müssen Sie `files` nicht übergeben. Die Komponente ruft die asynchrone Suchfunktion bei jedem Tastenanschlag anstelle von Fuse.js. Ergebnisse werden automatisch nach Navigation mit hervorgehobenen Snippets zugeordnet und gruppiert. Im Gegensatz zum `files`-Ansatz, bei dem alle Suchabschnitte im Voraus geladen werden und Sie Navigationselemente vor der Eingabe durchsuchen können, gibt die `search`-prop nur Ergebnisse zurück, nachdem eine Abfrage eingegeben wurde.
::

### Shortcut (englisch)

Verwenden Sie die `shortcut`-prop, um die Verknüpfung zu ändern, die in [defineShortcuts](/docs/composables/define-shortcuts) verwendet wird, um die ContentSearch-Komponente zu öffnen. Standardmäßig ist `meta_k` (: kbd{value="meta"}: kbd{value="K"}).

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

### Links (englisch)

Verwenden Sie die `links`-prop, um eine Gruppe von Schnellzugriffslinks oben in der Befehlspalette hinzuzufügen:

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

Der XPH213XColor Mode

Standardmäßig wird der Befehlspalette eine Gruppe von Befehlen hinzugefügt, sodass Sie zwischen dem hellen und dunklen Modus wechseln können. Dies wird nur wirksam, wenn der `colorMode` nicht in einer bestimmten Seite erzwungen wird, was durch `definePageMeta` erreicht werden kann:

```vue [pages/index.vue]
<script setup lang="ts">
definePageMeta({
  colorMode: 'dark'
})
</script>
```

Sie können dieses Verhalten deaktivieren, indem Sie die `color-mode`-prop auf `false` setzen:

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

## API

### Props Bearbeiten

:component-props

### Slots Bearbeiten

:component-slots

### Emits (englisch)

:component-emits

### Expose Bearbeiten

Beim Zugriff auf die Komponente über eine Template-Referenz können Sie Folgendes verwenden:

| Vorname| Typen|
| ---- | ---- |
| `commandPaletteRef`{lang="ts-type"} (englisch)| `Ref<InstanceType<typeof UCommandPalette> \| null>`{lang="ts-type"} (englisch)|

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog{prefix="content"}
