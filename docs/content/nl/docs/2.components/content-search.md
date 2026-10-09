---
title: InhoudZoeken
description: 'Een kant-en-klaar CommandPalette om toe te voegen aan uw documentatie.'
category: content
framework: nuxt
links:
  - label: Opdrachtpalet
    to: /docs/components/command-palette
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentSearch.vue
---

::warning{to="/docs/getting-started/integrations/content"}
Dit onderdeel is alleen beschikbaar wanneer de `@nuxt/content` module is geïnstalleerd.
::

## Gebruik

De ContentSearch-component breidt de [CommandPalette](/docs/components/command-palette) uit met ingebouwde [`@nuxt/content`](https://content.nuxt.com) zoekondersteuning, navigatiegroepering en kleurmodusopdrachten.
Het ondersteunt zowel client-side [Fuse.js](https://www.fusejs.io/) filteren en server-side [FTS5 full-text search](https://www.sqlite.org/fts5.html). U kunt elke CommandPalette-eigenschap doorgeven, zoals `icon`, `placeholder`, enz.

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
U kunt het CommandPalette openen door op: kbd{value="meta"}: kbd{value="K" class="ms-px"} te drukken, de [ContentSearchButton](/docs/components/content-search-button) component te gebruiken of de `useContentSearch` composable: `const { open } = useContentSearch()`{lang="ts"} te gebruiken.
::

::tip
Het wordt aanbevolen om de `ContentSearch`-component in een [ClientOnly](https://nuxt.com/docs/api/components/client-only) -component te wikkelen, zodat deze niet op de server wordt weergegeven.
::

### Navigatie

Gebruik de `navigation` prop met [`queryCollectionNavigation`](https://content.nuxt.com/docs/utils/query-collection-navigation) om zoekresultaten per sectie te groeperen:

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

### Bestanden

Gebruik de `files` prop met [`queryCollectionSearchSections`](https://content.nuxt.com/docs/utils/query-collection-search-sections) om alle zoeksecties vooraf te laden en gebruik client-side [Fuse.js](https://www.fusejs.io/) filtering:

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
Gebruik de `fuse` prop om [useFuse](https://vueuse.org/integrations/useFuse) opties te configureren die zijn doorgegeven aan de onderliggende [CommandPalette](/docs/components/command-palette) zoals `resultLimit` (standaard `12`) en `fuseOptions.threshold` (standaard `0.1`).
::

### Zoeken: badge{label="4.8+" class="align-text-top"}

Gebruik de `search` prop met [`useSearchCollection`](https://content.nuxt.com/docs/utils/use-search-collection) voor server-side [FTS5 full-text search](https://www.sqlite.org/fts5.html) met gemarkeerde fragmenten in plaats van client-side filtering:

::warning
Vereist `@nuxt/content` v3.14 +.
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
Geef `search-status` door, zodat de component de zoekopdracht automatisch opnieuw kan activeren zodra de index gereed is.
Gebruik `search-delay` (standaard `100ms`) om te bepalen hoe lang typen moet worden onderbroken voordat de zoekopdracht wordt gestart.
De optie `fuse.resultLimit` dekt de totale resultaten die in alle groepen zijn geretourneerd (zoekresultaten, links, thema, enz.).
::

::note
Wanneer u de `search` prop gebruikt, hoeft u `files` niet door te geven. Het onderdeel roept de asynchrone zoekfunctie op elke toetsaanslag aan in plaats van Fuse.js.
Resultaten worden automatisch in kaart gebracht en gegroepeerd door navigatie met gemarkeerde fragmenten.
In tegenstelling tot de `files`-benadering die alle zoeksecties vooraf laadt en u door navigatie-items laat bladeren voordat u typt, retourneert de `search`-prop alleen resultaten nadat een zoekopdracht is ingevoerd.
::

### Snelkoppeling

Gebruik de `shortcut`-prop om de snelkoppeling te wijzigen die wordt gebruikt in [defineShortcuts](/docs/composables/define-shortcuts) om de ContentSearch-component te openen. Standaard is `meta_k` (: kbd{value="meta"}: kbd{value="K"}).

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

### Links

Gebruik de `links` prop om een groep snel toegankelijke links toe te voegen aan de bovenkant van het opdrachtpalet:

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

:component-changelog{prefix="content"}
