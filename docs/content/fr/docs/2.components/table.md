---
description: Un élément de table réactif pour afficher les données en lignes et en colonnes.
category: data
keywords:
  - data table
  - datagrid
  - data grid
links:
  - label: Table de Tanstack
    avatar:
      src: https://github.com/tanstack.png
      loading: lazy
    to: https://tanstack.com/table/v8
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Table.vue
---

## Utilisation

Le composant Table est construit sur [TanStack Table v8](https://tanstack.com/table/v8) et est alimenté par le composable [useVueTable](https://tanstack.com/table/v8/docs/framework/vue/vue-table#usevuetable) pour fournir une API flexible et entièrement sûre.

Il affiche vos données sous forme de lignes et de colonnes et prend en charge le tri, le filtrage, la pagination, la sélection de lignes, l'expansion, le regroupement, l'épinglage et la virtualisation, de sorte que vous pouvez tout créer, d'une simple table de données à une grille de données complète.

::component-example
---
source: false
name: 'table-example'
class: '!p-0'
---
::

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt/ui/tree/v4/docs/app/components/content/examples/table/TableExample.vue" aria-label="Voir le code source"}
Cet exemple illustre le cas d'utilisation le plus courant du composant `Table`. Consultez le code source sur GitHub.
::

### Données

Utilisez le prop `data` comme tableau d'objets, les colonnes seront générées en fonction des clés des objets.

::component-code
---
prettier: true
collapse: true
class: '!p-0'
ignore:
  - data
  - class
external:
  - data
props:
  data:
    - id: '4600'
      date: '2024-03-11T15:30:00'
      status: 'paid'
      email: 'james.anderson@example.com'
      amount: 594
    - id: '4599'
      date: '2024-03-11T10:10:00'
      status: 'failed'
      email: 'mia.white@example.com'
      amount: 276
    - id: '4598'
      date: '2024-03-11T08:50:00'
      status: 'refunded'
      email: 'william.brown@example.com'
      amount: 315
    - id: '4597'
      date: '2024-03-10T19:45:00'
      status: 'paid'
      email: 'emma.davis@example.com'
      amount: 529
    - id: '4596'
      date: '2024-03-10T15:55:00'
      status: 'paid'
      email: 'ethan.harris@example.com'
      amount: 639
  class: 'flex-1'
---
::

### Colonnes

Utilisez la prop `columns` comme tableau d'objets [ColumnDef](https://tanstack.com/table/v8/docs/api/core/column-def) avec des propriétés telles que:

- `accessorKey`:[La clé de l'objet row à utiliser lors de l'extraction de la valeur de la colonne.] {class="text-muted"}
- x`header`:[L'en-tête à afficher pour la colonne. Si une chaîne est passée, elle peut être utilisée comme valeur par défaut pour l'ID de colonne. Si une fonction est passée, elle sera passée à un objet props pour l'en-tête et devrait renvoyer la valeur d'en-tête rendue (le type exact dépend de l'adaptateur utilisé).] {class="text-muted"}
- [x`footer`](#with-column-footer):[Le pied de page à afficher pour la colonne. Fonctionne exactement comme l'en-tête, mais est affiché sous la table.] {class="text-muted"}
- x`cell`: Si une fonction est passée, elle sera passée à un objet props pour la cellule et devrait renvoyer la valeur de la cellule rendue (le type exact dépend de l'adaptateur utilisé).] {class="text-muted"}
- `meta`:[Propriétés supplémentaires pour la colonne.] {class="text-muted"}
  - `class`:
    - `td`:[Les classes à appliquer à l'élément `td`.] {class="text-muted"}
    - `th`:[Les classes à appliquer à l'élément `th`.] {class="text-muted"}
  - x`style`:
    - `td`:[Le style à appliquer à l'élément `td`.] {class="text-muted"}
    - `th`:[Le style à appliquer à l'élément `th`.] {class="text-muted"}
  - [`colspan`x](#with-column-spanx):
    - `td`:[L'attribut colspan à appliquer à l'élément `td`.] {class="text-muted"}
  - [`rowspan`x](#with-column-spanx):
    - `td`:[L'attribut rowspan à appliquer à l'élément `td`.] {class="text-muted"}

Pour rendre des composants ou d'autres éléments HTML, vous devez utiliser la fonctionnalité Vue [`h` ](https://vuejs.org/api/render-function.html#h) à l'intérieur des props `header` et `cell`.

::tip{to="#with-slots" aria-label="Colonne de table avec slots"}
Vous pouvez également utiliser des emplacements pour personnaliser l'en-tête et les cellules de données de la table.
::

::component-example
---
prettier: true
collapse: true
class: '!p-0'
name: 'table-columns-example'
highlights:
  - 53
  - 108
---
::

::note
Lors du rendu de composants avec `h`, vous pouvez utiliser la fonction `resolveComponent` ou importer à partir de `#components`.
::

### Méta

Utilisez la prop `meta` en tant qu 'objet ([TableMeta](https://tanstack.com/table/v8/docs/api/core/table#meta)) pour passer des propriétés comme:

- `class`:
  - `tr`:[Les classes à appliquer à l'élément `tr`.] {class="text-muted"}
- `style`:
  - `tr`:[Le style à appliquer à l'élément `tr`.] {class="text-muted"}

::component-example
---
prettier: true
collapse: true
name: 'table-meta-example'
class: '!p-0'
highlights:
  - 128
  - 140
---
::

### Chargement

Utilisez la prop `loading` pour afficher un état de chargement, la prop `loading-color` pour changer sa couleur et la prop `loading-animation` pour changer son animation.

::component-code
---
prettier: true
collapse: true
class: '!p-0'
ignore:
  - data
  - class
external:
  - data
props:
  loading: true
  loadingColor: primary
  loadingAnimation: carousel
  data:
    - id: '4600'
      date: '2024-03-11T15:30:00'
      status: 'paid'
      email: 'james.anderson@example.com'
      amount: 594
    - id: '4599'
      date: '2024-03-11T10:10:00'
      status: 'failed'
      email: 'mia.white@example.com'
      amount: 276
    - id: '4598'
      date: '2024-03-11T08:50:00'
      status: 'refunded'
      email: 'william.brown@example.com'
      amount: 315
    - id: '4597'
      date: '2024-03-10T19:45:00'
      status: 'paid'
      email: 'emma.davis@example.com'
      amount: 529
    - id: '4596'
      date: '2024-03-10T15:55:00'
      status: 'paid'
      email: 'ethan.harris@example.com'
      amount: 639
  class: 'flex-1'
---
::

::tip
L'animation de chargement est automatiquement désactivée lorsque l'utilisateur préfère un mouvement réduit, la barre est affichée comme une impulsion pleine largeur à la place.
::

### Sticky

Utilisez le prop `sticky` pour rendre l'en-tête ou le pied de page collant.

::component-code
---
prettier: true
collapse: true
class: '!p-0'
ignore:
  - data
  - class
external:
  - data
items:
  sticky:
    - true
    - false
props:
  sticky: true
  data:
    - id: '4600'
      date: '2024-03-11T15:30:00'
      status: 'paid'
      email: 'james.anderson@example.com'
      amount: 594
    - id: '4599'
      date: '2024-03-11T10:10:00'
      status: 'failed'
      email: 'mia.white@example.com'
      amount: 276
    - id: '4598'
      date: '2024-03-11T08:50:00'
      status: 'refunded'
      email: 'william.brown@example.com'
      amount: 315
    - id: '4597'
      date: '2024-03-10T19:45:00'
      status: 'paid'
      email: 'emma.davis@example.com'
      amount: 529
    - id: '4596'
      date: '2024-03-10T15:55:00'
      status: 'paid'
      email: 'ethan.harris@example.com'
      amount: 639
    - id: '4595'
      date: '2024-03-10T15:55:00'
      status: 'paid'
      email: 'ethan.harris@example.com'
      amount: 639
    - id: '4594'
      date: '2024-03-10T15:55:00'
      status: 'paid'
      email: 'ethan.harris@example.com'
      amount: 639
  class: 'flex-1 max-h-[312px]'
---
::

## exemples

### Avec actions de ligne

Vous pouvez ajouter une nouvelle colonne qui affiche un composant [DropdownMenu](/docs/components/dropdown-menu) à l'intérieur du `cell` pour afficher les actions de ligne.

::component-example
---
prettier: true
collapse: true
name: 'table-row-actions-example'
highlights:
  - 115
  - 141
class: '!p-0'
---
::

### Avec rangées expansibles

Vous pouvez ajouter une nouvelle colonne qui affiche un composant [Button](xph288) à l'intérieur du `cell` pour basculer l'état extensible d'une ligne à l'aide de la table TanStack [Expanding APIs](xph292).

::caution
Vous devez définir l'emplacement `#expanded` pour rendre le contenu développé qui recevra la ligne comme paramètre.
::

::component-example
---
prettier: true
collapse: true
name: 'table-row-expandable-example'
highlights:
  - 55
  - 72
class: '!p-0'
---
::

::tip
Vous pouvez utiliser la prop `expanded` pour contrôler l'état extensible des lignes (peut être lié avec `v-model`).
::

::note
Vous pouvez également ajouter cette action au composant [`DropdownMenu`](xph310) dans la colonne `actions`.
::

### Avec des lignes groupées

Vous pouvez regrouper des lignes en fonction d'une valeur de colonne donnée et afficher/masquer des sous-lignes via un bouton ajouté à la cellule à l'aide de la table TanStack [Grouping APIs](https://tanstack.com/table/v8/docs/api/features/grouping).

#### Pièces importantes

* Ajoutez `grouping` prop avec un tableau d'identifiants de colonne par lesquels vous souhaitez grouper.
Il doit inclure `getGroupedRowModel`, vous pouvez l'importer à partir de `@tanstack/vue-table` ou implémenter votre propre.
* Développez les lignes via la méthode `row.toggleExpanded()` sur n'importe quelle cellule de la ligne. Gardez à l'esprit qu 'il bascule également l'emplacement `#expanded`.
* Utilisez `aggregateFn` sur la définition de colonne pour définir comment agréger les lignes.
Le moteur de rendu * `agregatedCell` sur la définition de colonne ne fonctionne que s'il n'y a pas de moteur de rendu `cell`.

::component-example
---
prettier: true
collapse: true
name: 'table-grouped-rows-example'
highlights:
  - 157
  - 160
class: '!p-0'
---
::

### Avec épinglage de ligne: badge{label="4.6+" class="align-text-top"}

Vous pouvez ajouter une colonne qui affiche un composant [Button](/docs/components/button) à l'intérieur du `cell` pour basculer l'état d'épinglage d'une ligne à l'aide de la table TanStack [Row Pinning APIsxph349https://tanstack.com/table/v8/docs/api/features/row-pinning).

::component-example
---
prettier: true
collapse: true
name: 'table-row-pinning-example'
overflowHidden: true
highlights:
  - 91
  - 107
  - 160
  - 165
  - 168
class: '!p-0'
---
::

::tip
Vous pouvez utiliser le prop `row-pinning` pour contrôler l'état d'épinglage des lignes (peut être lié avec `v-model`).
::

### With sélection de ligne

Vous pouvez ajouter une nouvelle colonne qui affiche un composant [Checkbox](/docs/components/checkbox) à l'intérieur des `header` et `cell` pour sélectionner des lignes à l'aide de la sélection de lignes de la table TanStack [Row APIs](xph376).

::component-example
---
prettier: true
collapse: true
name: 'table-row-selection-example'
highlights:
  - 55
  - 72
class: '!p-0'
---
::

::tip
Vous pouvez utiliser la prop `row-selection` pour contrôler l'état de sélection des lignes (peut être lié à `v-model`).
::

### With row select événement

Vous pouvez ajouter un écouteur `@select` pour rendre les lignes cliquables avec ou sans colonne à cocher.

::note
La fonction handler reçoit les instances `Event` et `TableRow` comme premier et deuxième arguments respectivement.
::

::component-example
---
prettier: true
collapse: true
name: 'table-row-select-event-example'
highlights:
  - 124
  - 131
class: '!p-0'
---
::

::tip
Vous pouvez l'utiliser pour accéder à une page, ouvrir un modal ou même sélectionner la ligne manuellement.
::

### With row menu contextuel

Vous pouvez ajouter un écouteur `@contextmenu` pour rendre les lignes cliquables à droite et envelopper la table dans un composant [ContextMenu](/docs/components/context-menu) pour afficher les actions de ligne par exemple.

::note
La fonction handler reçoit les instances `Event` et `TableRow` comme premier et deuxième arguments respectivement.
::

::component-example
---
prettier: true
collapse: true
name: 'table-row-context-menu-event-example'
highlights:
  - 133
  - 173
class: '!p-0'
---
::

### With row hover événement

Vous pouvez ajouter un écouteur `@hover` pour rendre les lignes hoverable et utiliser un composant [Popover](/docs/components/popover) ou un composant [Tooltip](/docs/components/tooltip) pour afficher les détails de la ligne par exemple.

::note
La fonction handler reçoit les instances `Event` et `TableRow` comme premier et deuxième arguments respectivement.
::

::component-example
---
prettier: true
collapse: true
name: 'table-row-hover-event-example'
highlights:
  - 129
  - 152
class: '!p-0'
---
::

::note
Cet exemple est similaire au Popover [ avec le curseur suivant example](/docs/components/popover#with-following-cursor) et utilise un [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced) pour empêcher le Popover de s'ouvrir et de se fermer trop rapidement lors du déplacement du curseur d'une ligne à l'autre.
::

### Avec pied de colonne

Vous pouvez ajouter une propriété `footer` à la définition de la colonne pour afficher un pied de page pour la colonne.

::component-example
---
prettier: true
collapse: true
name: 'table-column-footer-example'
highlights:
  - 100
  - 112
class: '!p-0'
---
::

### With colonne étendue

Vous pouvez utiliser les propriétés `colspan` et `rowspan` dans la colonne `meta` pour fusionner des cellules. Ces propriétés acceptent une valeur statique ou une fonction qui reçoit la cellule et renvoie la valeur de la portée.

::note
Lorsque vous utilisez `rowspan`, les cellules qui sont « absorbées » par l'étendue d'une ligne précédente doivent être masquées visuellement. Utilisez la méta `class` avec une fonction qui renvoie `'hidden'` pour ces cellules.
::

::component-example
---
prettier: true
collapse: true
name: 'table-column-span-example'
class: '!p-0'
---
::

### Avec tri de colonnes

Vous pouvez mettre à jour une colonne `header` pour afficher un composant [Button](/docs/components/button) à l'intérieur du `header` afin de basculer l'état de tri à l'aide de la table TanStack [Sorting APIs](xph482).

Cela place `aria-sort` sur le `<th>` afin que les lecteurs d'écran puissent lire l'état de tri actuel de la colonne: `none`, `ascending` ou `descending`.

::component-example
---
prettier: true
collapse: true
name: 'table-column-sorting-example'
highlights:
  - 90
  - 106
class: '!p-0'
---
::

::tip
Vous pouvez utiliser le prop `sorting` pour contrôler l'état de tri des colonnes (peut être lié avec `v-model`).
::

Vous pouvez également créer un composant réutilisable pour rendre triable n'importe quel en-tête de colonne.

::component-example
---
prettier: true
collapse: true
name: 'table-column-sorting-reusable-example'
highlights:
  - 115
  - 166
class: '!p-0'
---
::

::note
Dans cet exemple, nous utilisons une fonction pour définir l'en-tête de colonne, mais vous pouvez également créer un composant réel.
::

### Avec épinglage de colonne

Vous pouvez mettre à jour une colonne `header` pour afficher un composant [Button](/docs/components/button) à l'intérieur du `header` pour basculer l'état d'épinglage à l'aide de la table TanStack [Column Pinning APIs](xph520).

::note
Lorsque vous utilisez l'épinglage de colonnes, vous devez définir des valeurs `size` explicites pour vos colonnes afin d'assurer une bonne gestion de la largeur de colonne, en particulier avec plusieurs colonnes épinglées.
::

::component-example
---
prettier: true
collapse: true
overflowHidden: true
name: 'table-column-pinning-example'
highlights:
  - 108
  - 126
class: '!p-0 overflow-clip'
---
::

::tip
Vous pouvez utiliser le prop `column-pinning` pour contrôler l'état d'épinglage des colonnes (peut être lié avec `v-model`).
::

### Avec visibilité de colonne

Vous pouvez utiliser un composant [DropdownMenu](/docs/components/dropdown-menu) pour basculer la visibilité des colonnes à l'aide de la Table TanStack [Column Visibility APIs](ph542).

::component-example
---
prettier: true
collapse: true
name: 'table-column-visibility-example'
highlights:
  - 121
  - 146
class: '!p-0'
---
::

::tip
Vous pouvez utiliser le prop `column-visibility` pour contrôler l'état de visibilité des colonnes (peut être lié à `v-model`).
::

### Avec filtres de colonne

Vous pouvez utiliser un composant [Input](/docs/components/input) pour filtrer les lignes par colonne à l'aide du filtrage de la table TanStack [Column APIs](xph562).

::component-example
---
prettier: true
collapse: true
name: 'table-column-filters-example'
highlights:
  - 123
  - 128
class: '!p-0'
---
::

::tip
Vous pouvez utiliser la prop `column-filters` pour contrôler l'état des filtres des colonnes (peut être lié à `v-model`).
::

### With filtre global

Vous pouvez utiliser un composant [Input](/docs/components/input) pour filtrer les lignes à l'aide de la table TanStack [Global Filtering APIs](xph582).

::component-example
---
prettier: true
collapse: true
name: 'table-global-filter-example'
class: '!p-0'
highlights:
  - 116
---
::

::tip
Vous pouvez utiliser la prop `global-filter` pour contrôler l'état global du filtre (peut être lié à `v-model`).
::

### Avec pagination

Vous pouvez utiliser un composant [Pagination](/docs/components/pagination) pour contrôler l'état de la pagination à l'aide de l'APIs](https://tanstack.com/table/v8/docs/api/features/pagination) de [Pagination.

Il existe différentes approches de pagination, comme expliqué dans le Guide de pagination [xhttps://tanstack.com/table/v8/docs/guide/pagination#pagination-guide). Dans cet exemple, nous utilisons la pagination côté client, nous devons donc passer manuellement la fonction `getPaginationRowModel()`{lang="ts-type"}.

::component-example
---
prettier: true
collapse: true
name: 'table-pagination-example'
class: '!p-0'
highlights:
  - 204
  - 209
---
::

::tip
Vous pouvez utiliser la prop `pagination` pour contrôler l'état de pagination (peut être lié à `v-model`).
::

### Avec données extraites

Vous pouvez récupérer des données à partir d'une API et les utiliser dans la table.

::component-example
---
prettier: true
collapse: true
name: 'table-fetch-example'
highlights:
  - 15
  - 26
class: '!p-0'
---
::

::note
Cet exemple utilise `useLazyFetch` avec `server: false` pour récupérer des données sur le client sans bloquer le rendu initial.L'état de chargement vérifie à la fois l'état de `pending` et `idle` pour afficher un indicateur de chargement avant et pendant la récupération.
::

### Avec défilement infini

Si vous utilisez la pagination côté serveur, vous pouvez utiliser le composable [`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/#useinfinitescroll) pour charger plus de données au fur et à mesure que l'utilisateur fait défiler.

::component-example
---
prettier: true
collapse: true
highlights:
  - 72
  - 83
overflowHidden: true
name: 'table-infinite-scroll-example'
class: '!p-0'
---
::

::note
Cet exemple utilise `useLazyFetch` avec `server: false` pour récupérer des données sur le client sans bloquer le rendu initial.L'état de chargement vérifie à la fois l'état `pending` et `idle` pour afficher un indicateur de chargement avant et pendant la récupération. Les pages supplémentaires sont chargées au fur et à mesure que l'utilisateur fait défiler.
::

### Avec drag and drop

Vous pouvez utiliser le composable [`useSortable`](https://vueuse.org/integrations/useSortable/) à partir de [`@vueuse/integrations`](https://vueuse.org/integrations/README.html) pour activer la fonctionnalité de glisser-déposer sur la table. Cette intégration enveloppe [Sortable.js](xph66xph6667x) pour fournir une expérience de glisser-déposer transparente.

::note
Puisque la référence de table n'expose pas l'élément tbody, ajoutez-lui une classe unique via la prop `:ui` pour le cibler avec `useSortable` (par exemple, `:ui="{ tbody: 'my-table-tbody' }"`).
::

::component-example
---
prettier: true
collapse: true
highlights:
  - 81
  - 83
name: 'table-drag-and-drop-example'
class: '!p-0'
---
::

### Avec la virtualisation: badge{label="4.1+" class="align-text-top"}

Utilisez la prop `virtualize` pour activer la virtualisation de grands ensembles de données en tant que booléen ou objet avec des options telles que `{ estimateSize: 65, overscan: 12 }`. Vous pouvez également passer d'autres options [TanStack Virtual xph688https://tanstack.com/virtual/latest/docs/api/virtualizer#optional-options) pour personnaliser le comportement de virtualisation. La prop `sticky` fonctionne en combinaison avec `virtualize` pour garder l'en-tête ou le pied de page visibles lors du défilement de grands ensembles de données

::warning
L'épinglage de ligne n'est pas pris en charge lorsque la virtualisation est activée.
::

::component-example
---
prettier: true
collapse: true
overflowHidden: true
name: 'table-virtualize-example'
class: '!p-0'
---
::

::note
Une contrainte de hauteur est requise sur la table pour que la virtualisation fonctionne correctement (par exemple, `class="h-[400px]"`).
::

### Avec élément de défilement externe: badge{label="4.10+" class="align-text-top"}

Passez une fonction `getScrollElement` dans la prop `virtualize` pour virtualiser sur un conteneur de défilement ancêtre au lieu de la propre racine de la table. Définissez `scrollMargin` sur le décalage de la table par rapport au début de l'élément de défilement (par exemple, la hauteur du contenu au-dessus de celui-ci), de sorte qu 'un en-tête et le corps de la table partagent une seule barre de défilement.

::component-example
---
prettier: true
collapse: true
overflowHidden: true
name: 'table-external-scroll-example'
class: '!p-0'
---
::

::note
Dans ce mode, le `overflow` de la racine de la table est `visible` et le conteneur externe possède un défilement sur les deux axes, donc donnez-lui `overflow-auto` (pas seulement `overflow-y-auto`) pour garder les tables larges défilables horizontalement.
::

### Avec arbre de données

Vous pouvez utiliser le prop `get-sub-rows` pour afficher des données hiérarchiques (arborescence) dans la table.
Par exemple, si vos objets de données possèdent un tableau `children`, définissez `:get-sub-rows="row => row.children"` pour activer les lignes extensibles.

::component-example
---
prettier: true
collapse: true
highlights:
  - 175
name: 'table-tree-data-example'
class: '!p-0'
---
::

### Avec slots

Vous pouvez utiliser des emplacements pour personnaliser l'en-tête et les cellules de données de la table.

Utilisez l'emplacement `#<column>-header` pour personnaliser l'en-tête d'une colonne. Vous aurez accès aux propriétés `column`, `header` et `table` dans la portée de l'emplacement.

Vous aurez accès aux propriétés `cell`, `column`, `getValue`, `renderValue`, `row` et `table` dans la portée de l'emplacement.

::component-example
---
prettier: true
collapse: true
name: 'table-slots-example'
class: '!p-0'
---
::

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table#attributes" target="_blank"}
Ce composant prend également en charge tous les attributs HTML natifs `<table>`.
::

### Slots

:component-slots

### Expose

Vous pouvez accéder à l'instance du composant typé en utilisant [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref).

```vue
<script setup lang="ts">
const table = useTemplateRef('table')
</script>

<template>
  <UTable ref="table" />
</template>
```

Cela vous donnera accès à ce qui suit:

| nom| type|
| ---- | ---- |
| `tableRef`x{lang="ts-type"}| `Ref<HTMLTableElement \| null>`x{lang="ts-type"}|
| `tableApi`x{lang="ts-type"}| xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx|

## Thème

:component-theme

## Changelog

:component-changelog
