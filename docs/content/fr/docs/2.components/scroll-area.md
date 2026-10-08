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

@@ph000@@utilisation

Le composant ScrollArea crée des conteneurs défilables avec une virtualisation optionnelle pour les grandes listes.

::component-example
---
Collapse: vrai
dépassement: true
nom: 'scroll-area-example'
classe: '! p-0'
---
::

@@ph001@@éléments

Utilisez le `items` prop comme un tableau et rendre chaque élément en utilisant l'emplacement par défaut:

::component-example
---
Collapse: vrai
dépassement: true
nom: 'scroll-area-items-example'
classe: '! p-0'
---
::

::tip{to="#with-default-slot"}
Vous pouvez également utiliser l'emplacement par défaut sans l'accessoire `items` pour rendre directement le contenu défilable personnalisé.
::

### Référencement

Utilisez la prop `orientation` pour modifier la direction du défilement. Par défaut à `vertical`.

::component-example
---
Collapse: vrai
dépassement: true
nom: 'scroll-area-orientation-exemple'
classe: '! p-0'
options:
  - name: référence
    Étiquette: orientation
    Défaut: horizontal
    items:
      - Vertical
      @@ph009@horizontale
---
::

### Virtualiser

Utilisez le prop `virtualize` pour afficher uniquement les éléments actuellement visibles, ce qui augmente considérablement les performances lorsque vous travaillez avec de grands ensembles de données.

::note
Lorsque la virtualisation est **enabled**, personnalisez l'espacement via les options de prop `virtualize` comme `gap`,`paddingStart` et `paddingEnd`. Sinon, utilisez le prop `ui` pour appliquer des classes comme `gap p-4` sur le slot `viewport`.
::

::tip
Si tous vos éléments ont la **même hauteur **, définissez `skipMeasurement` à `true` dans le prop `virtualize` pour ignorer la mesure DOM par élément et utiliser `estimateSize` à la place.
::

::component-example
---
Collapse: vrai
dépassement: true
nom: 'scroll-area-virtualize-example'
classe: '! p-0'
options:
  - nom: orientation
    Étiquette: orientation
    Défaut: vertical
    items:
      @@28@Verticale
      @@229@horizontalement
---
::

### Shadow: badge{label="4.9+" class="align-text-top"}

Utilisez la prop `shadow` pour afficher des ombres de fondu sur les bords défilables, indiquant que plus de contenu est disponible dans la direction de défilement. Le fondu suit automatiquement le `orientation` et n'apparaît que lorsque le contenu déborde.

::component-example
---
Collapse: vrai
nom: 'scroll-area-shadow-example'
---
::

::tip
Passez un objet à la prop `shadow` pour configurer la taille du fondu, par exemple `:shadow="{ size: 48 }"`.
::

@@ph036@exemples

### As disposition de maçonnerie

Utilisez les options `virtualize` avec les options `lanes`,`gap` et `estimateSize` pour créer des mises en page de maçonnerie de style Pinterest avec des éléments de hauteur variable.

::component-example
---
Collapse: vrai
dépassement: true
nom: 'scroll-area-masonry-layout-example'
classe: '! p-0'
options:
  - nom: orientation
    Étiquette: orientation
    Défaut: vertical
    items:
      - Verticale
      @@ph044@horizontale
  - nom: voies
    Type: numéro
    Étiquette: LANES
    Défaut: 3
  - nom: écart
    Type: numéro
    Étiquette: Gap
    Défaut: 16
---
::

::tip
Pour des performances optimales, réglez `estimateSize` à proximité de la hauteur moyenne de votre élément. L'augmentation de `overscan` améliore la fluidité du défilement mais rend plus d'éléments hors écran
::

### Avec voies réactives

Vous pouvez utiliser les composables [`useWindowSize`](https://vueuse.org/core/useWindowSize/)`useElementSize`](https://vueuse.org/core/useElementSize/)(pour les conteneurs) pour rendre le `lanes` réactif.

::component-example
---
Collapse: vrai
dépassement: true
nom: 'scroll-area-responsive-lanes-example'
classe: '! p-0'
---
::

### Avec élément de défilement externe: badge{label="4.10+" class="align-text-top"}.

Passez une fonction `getScrollElement` dans la prop `virtualize` pour virtualiser sur un conteneur de défilement ancêtre au lieu de la propre fenêtre d'affichage du composant. Définissez `scrollMargin` sur le décalage de la liste par rapport au début de l'élément de défilement (par exemple, la hauteur du contenu au-dessus).

::component-example
---
Étiquette: true
Collapse: vrai
dépassement: true
nom: 'scroll-area-external-scroll-example'
classe: '! p-0'
options:
  - name: référence
    Étiquette: orientation
    Défaut: vertical
    items:
      - Verticale
      @@ph068@horizontale
---
::

::note
Comme le conteneur est propriétaire du défilement, les boutons de recherche et "Haut" de la barre d'outils le font défiler directement avec `container.scrollTo`.
::

::caution
Le `shadow` prop n'a aucun effet dans ce mode, puisque la racine ne possède plus le défilement.
::

### Avec défilement programmatique

Vous pouvez utiliser le `virtualizer` exposé pour contrôler la position du défilement par programmation.

::component-example
---
Collapse: vrai
dépassement: true
nom: 'scroll-area-scroll-to-example'
classe: '! p-0'
---
::

### Avec défilement infini

Vous pouvez utiliser le [`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/) pour charger plus de données au fur et à mesure que l'utilisateur fait défiler.

::component-example
---
Étiquette: true
Collapse: vrai
dépassement: true
nom: 'scroll-area-infinite-scroll-example'
classe: '! p-0'
---
::

::note
Cet exemple utilise `useLazyFetch` avec `server: false` pour récupérer des données sur le client sans bloquer le rendu initial. L'état de chargement vérifie les statuts `pending` et `idle` pour afficher un indicateur de chargement avant et pendant la récupération. Des pages supplémentaires sont chargées au fur et à mesure que l'utilisateur fait défiler.
::

### Avec slot par défaut

Vous pouvez utiliser l'emplacement par défaut sans l'accessoire `items` pour rendre directement le contenu défilable personnalisé.

::component-example
---
nom: 'scroll-area-default-slot-example'
classe: '! p-0'
---
::

@@P085 @@ référencement

@@ph086@@props

Composants-props

@@ph087@@réseaux sociaux

Composants slots

@@888@émissions

Composants émetteurs

@@ph089@@exposé

Vous pouvez accéder à l'instance du composant typé en utilisant `useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref).

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
| @@|@@| L'élément racine du composant.|
| @@|@@| L'instance du virtualiseur [TanStack Virtual](https://tanstack.com/virtual/latest/docs/api/virtualizer)(`undefined` si la virtualisation est désactivée).|

@@ph122@thématique

Composant-thème

@changement@changement123

Composant-changelog
