---
title: Scrollaire
description: Un conteneur de défilement flexible avec support de virtualisation.
category: data
keywords:
  - scrollbar
  - overflow
  - scrolling
links:
  - label: Tanstack virtuel
    avatar:
      src: https://github.com/tanstack.png
      loading: lazy
    to: https://tanstack.com/virtual/latest
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ScrollArea.vue
---

## Utilisation

Le composant ScrollArea crée des conteneurs défilables avec une virtualisation optionnelle pour les grandes listes.

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-example'
class: '!p-0'
---
::

### Éléments

Utilisez le prop `items` comme un tableau et rendre chaque élément en utilisant l'emplacement par défaut:

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-items-example'
class: '!p-0'
---
::

::tip{to="#with-default-slot"}
Vous pouvez également utiliser l'emplacement par défaut sans le prop `items` pour rendre directement le contenu défilable personnalisé.
::

### Orientation

Utilisez la prop `orientation` pour changer la direction du défilement. Par défaut, `vertical`.

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-orientation-example'
class: '!p-0'
options:
  - name: orientation
    label: orientation
    default: horizontal
    items:
      - vertical
      - horizontal
---
::

### Virtualisation

Utilisez le prop `virtualize` pour afficher uniquement les éléments actuellement visibles, ce qui augmente considérablement les performances lorsque vous travaillez avec de grands ensembles de données.

::note
Lorsque la virtualisation est **enabled**, personnalisez l'espacement via les options prop `virtualize` telles que `gap`, `paddingStart` et `paddingEnd`. Sinon, utilisez la prop `ui` pour appliquer des classes comme `gap p-4` sur l'emplacement `viewport`.
::

::tip
Si tous vos éléments ont la même hauteur ****, définissez `skipMeasurement` sur `true` dans la prop `virtualize` pour ignorer la mesure DOM par élément et utiliser `estimateSize` à la place.
::

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-virtualize-example'
class: '!p-0'
options:
  - name: orientation
    label: orientation
    default: vertical
    items:
      - vertical
      - horizontal
---
::

### Shadow: badge{label="4.9+" class="align-text-top"}

Utilisez le prop `shadow` pour afficher des ombres de fondu sur les bords défilants, indiquant que plus de contenu est disponible dans la direction du défilement. Le fondu suit automatiquement le `orientation` et n'apparaît que lorsque le contenu déborde.

::component-example
---
collapse: true
name: 'scroll-area-shadow-example'
---
::

::tip
Passez un objet à la prop `shadow` pour configurer la taille du fondu, par exemple `:shadow="{ size: 48 }"`.
::

## Exemples

### As maçonnerie layout

Utilisez le prop `virtualize` avec les options `lanes`, `gap` et `estimateSize` pour créer des mises en page de maçonnerie de style Pinterest avec des éléments de hauteur variable.

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-masonry-layout-example'
class: '!p-0'
options:
  - name: orientation
    label: orientation
    default: vertical
    items:
      - vertical
      - horizontal
  - name: lanes
    type: number
    label: lanes
    default: 3
  - name: gap
    type: number
    label: gap
    default: 16
---
::

::tip
Pour des performances optimales, réglez `estimateSize` près de la hauteur moyenne de votre élément. L'augmentation de `overscan` améliore la fluidité du défilement mais rend plus d'éléments hors écran.
::

### Avec voies réactives

Vous pouvez utiliser les composables [`useWindowSize`](https://vueuse.org/core/useWindowSize/) (pour les fenêtres de visualisation) ou [`useElementSize`xph110) (pour les conteneurs) pour rendre le `lanes` réactif.

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-responsive-lanes-example'
class: '!p-0'
---
::

### Avec élément de défilement externe: badge{label="4.10+" class="align-text-top"}

Passez une fonction `getScrollElement` dans la prop `virtualize` pour virtualiser sur un conteneur de défilement ancêtre au lieu de la propre fenêtre d'affichage du composant. Définissez `scrollMargin` sur le décalage de la liste par rapport au début de l'élément de défilement (par exemple, la hauteur du contenu au-dessus).

::component-example
---
prettier: true
collapse: true
overflowHidden: true
name: 'scroll-area-external-scroll-example'
class: '!p-0'
options:
  - name: orientation
    label: orientation
    default: vertical
    items:
      - vertical
      - horizontal
---
::

::note
Comme le conteneur est propriétaire du défilement, les boutons de recherche et de haut de la barre d'outils le font défiler directement avec `container.scrollTo`.
::

::caution
Le prop `shadow` n'a aucun effet dans ce mode, puisque la racine ne possède plus le scroll.
::

### With programmatic scroll

Vous pouvez utiliser le `virtualizer` exposé pour contrôler la position de défilement par programmation.

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-scroll-to-example'
class: '!p-0'
---
::

### Avec scroll infini

Vous pouvez utiliser le composable [`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/) pour charger plus de données au fur et à mesure que l'utilisateur fait défiler.

::component-example
---
prettier: true
collapse: true
overflowHidden: true
name: 'scroll-area-infinite-scroll-example'
class: '!p-0'
---
::

::note
Cet exemple utilise `useLazyFetch` avec `server: false` pour récupérer des données sur le client sans bloquer le rendu initial.L'état de chargement vérifie à la fois l'état de `pending` et `idle` pour afficher un indicateur de chargement avant et pendant la récupération. Les pages supplémentaires sont chargées au fur et à mesure que l'utilisateur fait défiler.
::

### With slot par défaut

Vous pouvez utiliser l'emplacement par défaut sans le prop `items` pour rendre directement le contenu défilable personnalisé.

::component-example
---
name: 'scroll-area-default-slot-example'
class: '!p-0'
---
::

## API

### Props

:component-props

### Slots

:component-slots

### Emis

:component-emits

### Expose à

Vous pouvez accéder à l'instance du composant typé à l'aide de [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref).

```vue
<script setup lang="ts">
const scrollArea = useTemplateRef('scrollArea')

// Scroll to a specific item
function scrollToItem(index: number) {
  scrollArea.value?.virtualizer?.scrollToIndex(index, { align: 'center' })
}
</script>

<template>
  <UScrollArea ref="scrollArea" :items="items" virtualize />
</template>
```

Cela vous donnera accès à ce qui suit:

| nom| type| Description|
| ---- | ---- | ----------- |
| `$el`x{lang="ts-type"}| `HTMLElement`x{lang="ts-type"}| L'élément racine du composant.|
| `virtualizer`{lang="ts-type"}| `Ref<Virtualizer> \| undefined`{lang="ts-type"}| L'instance de virtualisation [TanStack ](https://tanstack.com/virtual/latest/docs/api/virtualizer) (`undefined` si la virtualisation est désactivée).|

## Thème

:component-theme

## Changelog

:component-changelog
