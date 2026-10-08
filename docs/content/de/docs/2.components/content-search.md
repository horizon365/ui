---
title: Contentsuche
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
Diese Komponente ist nur verfügbar, wenn das `@nuxt/content`-Modul installiert ist.
::

@@ph001@@Nutzung

Die ContentSearch-Komponente erweitert die [CommandPalette](/docs/components/command-palette) Komponente mit eingebauter [`@nuxt/content`](https://content.nuxt.com) suchunterstützung, Es unterstützt sowohl clientseitige [Fuse.js](https://www.fusejs.io/) Filter als auch serverseitige [FTS5 Volltextsuche ](https://www.sqlite.org/fts5.html). Sie können jede CommandPalette-Eigenschaft wie `icon`,`placeholder`, etc. passieren.

::component-example
---
iFrame:
  Größe: 500px
iframeMobile: Richtig
Übertreibungen: wahr
Quelle: Falscher
name: 'content-search-example'(Beispiel für die Inhaltssuche)
---
::

::note
Sie können die CommandPalette öffnen, indem Sie: kbd{value="meta"}: kbd{value="K" class="ms-px"}, die Komponente [ContentSearchButton](/docs/components/content-search-button) oder die Komponente `useContentSearch` composable: `const { open } = useContentSearch()`{lang="ts"}.
::

::tip
Es wird empfohlen, die Komponente `ContentSearch` in eine Komponente [ClientOnly](https://nuxt.com/docs/api/components/client-only) zu packen, damit sie nicht auf dem Server gerendert wird.
::

@@@@35@nautismus.de

Verwenden Sie `navigation` prop mit [`queryCollectionNavigation`](https://content.nuxt.com/docs/utils/query-collection-navigation), um die Suchergebnisse nach Abschnitten zu gruppieren:

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

@@ph057@files.de

Verwenden Sie die `files` prop mit [`queryCollectionSearchSections`](), um alle Suchabschnitte im Voraus zu laden, und verwenden Sie clientseitige [Fuse.js](https://www.fusejs.io/) Filterung:

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
Verwenden Sie die `fuse` prop, um [useFuse]() Optionen zu konfigurieren, die an die zugrunde liegenden [CommandPalette](]() wie `resultLimit`(Standard `12`) und `fuseOptions.threshold`(Standard `0.1`) weitergegeben werden.
::

### Suche: badge{label="4.8+" class="align-text-top"}

Verwenden Sie `search` prop mit [`useSearchCollection`]() für serverseitige [FTS5 Volltextsuche ](https://www.sqlite.org/fts5.html) mit hervorgehobenen Ausschnitten anstelle von clientseitiger Filterung: WEB

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
Geben Sie `search-status` ein, damit die Komponente die Suche automatisch erneut auslösen kann, sobald der Index bereit ist. Verwenden Sie `search-delay`(Standard `100ms`), um zu steuern, wie lange die Eingabe angehalten werden muss, bevor die Suche ausgelöst wird. Die Option `fuse.resultLimit` begrenzt die Gesamtzahl der Ergebnisse, die über alle Gruppen (Suchergebnisse, Links, Thema usw.) zurückgegeben werden.
::

::note
Bei Verwendung von `search` prop müssen Sie `files` nicht übergeben. Die Komponente ruft bei jedem Tastendruck die asynchrone Suchfunktion anstelle von Fuse.js. Die Ergebnisse werden automatisch nach Navigation mit hervorgehobenen Snippets zugeordnet und gruppiert. Im Gegensatz zum `files`-Ansatz, der alle Suchabschnitte im Voraus lädt und Sie Navigationselemente vor der Eingabe durchsuchen lässt,`search` prop gibt nur Ergebnisse zurück, nachdem eine Abfrage eingegeben wurde.
::

### Kurzschlussfunktion

Verwenden Sie `shortcut` prop, um die Verknüpfung zu ändern, die in [defineShortcuts](/docs/composables/define-shortcuts) verwendet wird, um die ContentSearch-Komponente zu öffnen.

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

@@@@@@@176@@Links

Verwenden Sie `links` prop, um eine Gruppe von Schnellzugriffslinks oben in der Befehlspalette hinzuzufügen:

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

### Farbmodus

Standardmäßig wird der Befehlspalette eine Gruppe von Befehlen hinzugefügt, so dass Sie zwischen Hell-und Dunkelmodus wechseln können. Dies wird nur wirksam, wenn der `colorMode` nicht in einer bestimmten Seite erzwungen wird, die über erreicht werden kann `definePageMeta`:

```vue [pages/index.vue]
<script setup lang="ts">
definePageMeta({
  colorMode: 'dark'
})
</script>
```

Sie können dieses Verhalten deaktivieren, indem Sie `color-mode` prop auf `false` setzen:

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

@@228@@btw

@@@@@@@@@@ph229@@Props

Komponenten Props

@@ph230@gmail.de

Die Komponenten-Slots

@@ph231@@emits

Komponenten emittieren

### Aufdecken

Beim Zugriff auf die Komponente über eine Template-Referenz können Sie Folgendes verwenden:

| Vorname| Typ|
| ---- | ---- |
| {lang="ts-type"}|@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#############################################################################################################################|

@@ph237@@gmail.de

Das Komponenten-Theme

@@ph238@@changelog @ changelog

: component-changelog {prefix="content"}
