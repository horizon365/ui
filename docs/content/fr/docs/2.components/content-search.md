---
title: ContentSearch
description: 'Une CommandPalette prête à l'emploi à ajouter à votre documentation.'
category: content
framework: nuxt
links:
  - label: Commandée
    to: /docs/components/command-palette
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentSearch.vue
---

::warning{to="/docs/getting-started/integrations/content"}
Ce composant est uniquement disponible lorsque le module `@nuxt/content` est installé.
::

## Utilisation

Le composant ContentSearch étend le composant [CommandPalette](/docs/components/command-palette) avec un support de recherche intégré [`@nuxt/content`](https://content.nuxt.com), Il prend en charge à la fois le filtrage côté client [Fuse.js](https://www.fusejs.io/) et le filtrage côté serveur [FTS5 full-text search](https://www.sqlite.org/fts5.html). Vous pouvez passer n'importe quelle propriété CommandPalette telle que `icon`, `placeholder`, etc.

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
Vous pouvez ouvrir la CommandPalette en appuyant sur: kbd{value="meta"}: kbd{value="K" class="ms-px"}, en utilisant le composant [ContentSearchButton](xph0333) ou en utilisant le composable `useContentSearch`: `const { open } = useContentSearch()`{lang="ts"}.
::

::tip
Il est recommandé d'envelopper le composant `ContentSearch` dans un composant [ClientOnly](https://nuxt.com/docs/api/components/client-only) afin qu 'il ne soit pas rendu sur le serveur.
::

### Navigation

Utilisez la prop `navigation` avec [`queryCollectionNavigation`](https://content.nuxt.com/docs/utils/query-collection-navigation) pour regrouper les résultats de recherche par section:

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

### Files

Utilisez la prop `files` avec [`queryCollectionSearchSections`](xhttps://content.nuxt.com/docs/utils/query-collection-search-sections) pour charger toutes les sections de recherche à l'avance et utilisez le filtrage côté client [Fuse.js](xph074):

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
Utilisez la prop `fuse` pour configurer les options [useFuse](https://vueuse.org/integrations/useFuse) passées au sous-jacent [CommandPalette](/docs/components/command-paletteph11x, telles que `resultLimit` (par défaut `12`) et `fuseOptions.threshold` (par défaut `0.1`).
::

### Recherche: badge{label="4.8+" class="align-text-top"}

Utilisez la prop `search` avec [`useSearchCollection`](https://content.nuxt.com/docs/utils/use-search-collection) pour la recherche côté serveur [FTS5 en texte intégral](xph122) avec des extraits surlignés au lieu du filtrage côté client:

::warning
Nécessite `@nuxt/content` v3.14 +.
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
Passez `search-status` pour que le composant puisse automatiquement relancer la recherche une fois que l'index est prêt. Utilisez `search-delay` (par défaut `100ms`) pour contrôler la durée de pause de la saisie avant le déclenchement de la recherche. L'option `fuse.resultLimit` plafonne le total des résultats renvoyés dans tous les groupes (résultats de recherche, liens, thème, etc.).
::

::note
Lorsque vous utilisez la prop `search`, vous n'avez pas besoin de passer `files`. Le composant appelle la fonction de recherche asynchrone sur chaque touche au lieu de Fuse.js. Les résultats sont automatiquement mappés et regroupés par navigation avec des extraits surlignés. Contrairement à l'approche `files` qui charge toutes les sections de recherche à l'avance et vous permet de parcourir les éléments de navigation avant de taper, la prop `search` ne renvoie les résultats qu 'après la saisie d'une requête.
::

### raccourci

Utilisez la prop `shortcut` pour modifier le raccourci utilisé dans [defineShortcuts](/docs/composables/define-shortcuts) pour ouvrir le composant ContentSearch. Defaults à `meta_k` (: kbd{value="meta"}: kbd{value="K"}).

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

### Liens

Utilisez la prop `links` pour ajouter un groupe de liens d'accès rapide en haut de la palette de commandes:

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

XPH213XColor mode

Par défaut, un groupe de commandes sera ajouté à la palette de commandes afin que vous puissiez basculer entre le mode clair et sombre. Cela ne prendra effet que si le `colorMode` n'est pas forcé dans une page spécifique, ce qui peut être réalisé via `definePageMeta`:

```vue [pages/index.vue]
<script setup lang="ts">
definePageMeta({
  colorMode: 'dark'
})
</script>
```

Vous pouvez désactiver ce comportement en définissant la prop `color-mode` sur `false`:

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

### Props équipement

:component-props

### Slots

:component-slots

### Emis

:component-emits

### Expose à

Lorsque vous accédez au composant via une référence de modèle, vous pouvez utiliser les éléments suivants:

| nom| type|
| ---- | ---- |
| `commandPaletteRef`{lang="ts-type"}| `Ref<InstanceType<typeof UCommandPalette> \| null>`x{lang="ts-type"}|

## Thème

:component-theme

## Changelog écrit

:component-changelog{prefix="content"}
