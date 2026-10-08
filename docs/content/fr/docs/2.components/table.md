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

@@ph000@@utilisation

Le composant Table est construit sur[TanStack Table v8](https://tanstack.com/table/v8)et est alimenté par le[useVueTable](https://tanstack.com/table/v8/docs/framework/vue/vue-table#usevuetable)composable pour fournir une API flexible et entièrement sûre .

Il affiche vos données sous forme de lignes et de colonnes et prend en charge le tri , le filtrage , la pagination , la sélection de lignes , l'expansion , le regroupement , l'épinglage et la virtualisation , de sorte que vous pouvez tout créer , d'une simple table de données à une grille de données complète .

::component-example
---
Source : faux
nom : ' exemple de tableau '
classe : ' ! p - 0 '
---
::

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt/ui/tree/v4/docs/app/components/content/examples/table/TableExample.vue" aria-label="Voir le code source"}
Cet exemple illustre le cas d'utilisation le plus courant du composant`Table`. Consultez le code source sur GitHub .
::

@@ph011@@données

Utilisez le prop`data`comme un tableau d'objets , les colonnes seront générées en fonction des clés des objets .

::component-code
---
Étiquette : true
Collapse : vrai
classe : ' ! p - 0 '
Ignorer :
  @@pH013@@données
  @@classe
Extérieure :
  @@pH015@@données
Props :
  données :
    - id : « 4600 »
      Date du jour : ' 2024 - 03 - 11T15 : 30 : 00 '
      Statut : " Payé "
      par courriel : James Anderson@example.com'
      Nombre : 594
    - id : ' 4599 ' écrit :
      Date du jour : ' 2024 - 03 - 11T10 : 00 '
      État : " échoué "
      E-mail : « White@example.com'
      Nombre : 276
    - id : ' 4598 ' écrit :
      Date du jour : ' 2024 - 03 - 11T08 : 50 : 00 '
      État : " Remboursé "
      par courriel : ' william . brown@example.com'
      Nombre : 315
    - id : ' 4597 ' écrit :
      Date du jour : ' 2024 - 03 - 10T19 : 45 : 00 '
      Statut : " payé "
      par courriel : ' emma . davis@example.com'
      Nombre : 529
    - id : ' 4596 ' écrit :
      Date du jour : ' 2024 - 03 - 10T15 : 55 : 00 '
      Statut : " payé "
      par courriel : ' ethan . harris@example.com'
      Nombre : 639
  Classe : Flex - 1
---
::

@@21@colonnes

Utilisez le prop`columns`comme un tableau d'objets[ColumnDef](https://tanstack.com/table/v8/docs/api/core/column-def)avec des propriétés comme :

- `accessorKey`: [ La clé de l'objet ligne à utiliser lors de l'extraction de la valeur de la colonne . ]{class="text-muted"}
- `header`: [ L'en-tête à afficher pour la colonne . Si une chaîne est passée , elle peut être utilisée par défaut pour l'ID de colonne . Si une fonction est passée , elle sera passée à un objet props pour l'en-tête et devrait renvoyer la valeur d'en-tête rendue (le type exact dépend de l'adaptateur utilisé) . ]{class="text-muted"}
- [`footer`](#with-column-footer): [ Le pied de page à afficher pour la colonne . Fonctionne exactement comme l'en-tête , mais est affiché sous la table . ]{class="text-muted"}
- `cell`:[La cellule pour afficher chaque ligne de la colonne. Si une fonction est passée, elle sera passée à un objet props pour la cellule et devrait renvoyer la valeur de la cellule rendue (le type exact dépend de l'adaptateur utilisé).]{class="text-muted"}
- `meta`:[Propriétés supplémentaires pour la colonne.]{class="text-muted"}
  @@:
    - `td`:[Les classes à appliquer à l'élément `td`.]{class="text-muted"}
    - `th`:[Les classes à appliquer à l'élément `th`.]{class="text-muted"}
  @@
    - `td`:[Le style à appliquer à l'élément `td`.]{class="text-muted"}
    - `th`:[Le style à appliquer à l'élément `th`.]{class="text-muted"}
  - [`colspan`](#with-column-span):
    - `td`:[L'attribut colspan à appliquer à l'élément `td`.]{class="text-muted"}
  - [`rowspan`](#with-column-span):
    - `td`:[L'attribut rowspan à appliquer à l'élément `td`.]{class="text-muted"}

Pour rendre des composants ou d'autres éléments HTML, vous devez utiliser la fonction Vue [`h` à l'intérieur des props `header` et `cell`. Ceci est différent des autres composants qui utilisent des emplacements, mais permet plus de flexibilité.

::tip{to="#with-slots" aria-label="Colonne de table avec slots"}
Vous pouvez également utiliser des emplacements pour personnaliser l'en-tête et les cellules de données de la table.
::

::component-example
---
Étiquette: true
Collapse: vrai
classe: '! p-0'
nom: 'table-colonnes-exemple'
Highlights:
  @@ph094@@53
  @@095@108
---
::

::note
Lors du rendu des composants avec `h`, vous pouvez utiliser la fonction `resolveComponent` ou importer depuis `#components`.
::

@@ph099@méta

Utilisez la prop `meta` comme objet ([TableMeta](https://tanstack.com/table/v8/docs/api/core/table#meta)) pour transmettre des propriétés comme:

@@
  - `tr`:[Les classes à appliquer à l'élément `tr`.]{class="text-muted"}
@@ph111 @@ ph112
  - `tr`:[Le style à appliquer à l'élément `tr`.]{class="text-muted"}

::component-example
---
Étiquette: true
Collapse: vrai
nom: 'table-meta-exemple'
classe: '! p-0'
Highlights:
  @117 @ 128
  @@118@140
---
::

@119@chargement

Utilisez la prop `loading` pour afficher un état de chargement, la prop `loading-color` pour changer sa couleur et la prop `loading-animation` pour changer son animation.

::component-code
---
Étiquette: true
Collapse: vrai
classe: '! p-0'
ignorer:
  - données
  @@ph124@classe
Extérieur:
  - données
Props:
  Chargement: vrai
  couleur: primaire
  Étiquette: Carusel
  données:
    - id : « 4600 »
      Date du jour : ' 2024 - 03 - 11T15 : 30 : 00 '
      Statut : " payé "
      par courriel : James Anderson@example.com'
      Nombre : 594
    - id : ' 4599 ' écrit :
      Date du jour : ' 2024 - 03 - 11T10 : 00 '
      État : " échoué "
      E-mail : « White@example.com'
      Nombre : 276
    - id : ' 4598 ' écrit :
      Date du jour : ' 2024 - 03 - 11T08 : 50 : 00 '
      État : " Remboursé "
      par courriel : ' william . brown@example.com'
      Nombre : 315
    - id : ' 4597 ' écrit :
      Date du jour : ' 2024 - 03 - 10T19 : 45 : 00 '
      Statut : " Payé "
      par courriel : ' emma . davis@example.com'
      Nombre : 529
    - id : ' 4596 ' écrit :
      Date du jour : ' 2024 - 03 - 10T15 : 55 : 00 '
      Statut : " Payé "
      par courriel : ' ethan . harris@example.com'
      Nombre : 639
  Classe : Flex - 1
---
::

::tip
L'animation de chargement est automatiquement désactivée lorsque l'utilisateur préfère un mouvement réduit , la barre est affichée comme une impulsion pleine largeur à la place .
::

@131@@sticky

Utilisez la prop`sticky`pour rendre l'en-tête ou le pied de page collant .

::component-code
---
Étiquette : true
Collapse : vrai
classe : ' ! p - 0 '
Ignorer :
  @@ph133@données
  @@ph134@classe
Extérieure :
  - données
items :
  Sticky :
    @@ph136@vrai
    @@F137@faux
Props :
  sticky : vrai
  données :
    - id : « 4600 »
      Date du jour : ' 2024 - 03 - 11T15 : 30 : 00 '
      Statut : " payé "
      par courriel : James Anderson@example.com'
      Nombre : 594
    - id : ' 4599 ' écrit :
      Date du jour : ' 2024 - 03 - 11T10 : 00 '
      État : " échoué "
      E-mail : « White@»example.com'
      Nombre : 276
    - id : ' 4598 ' écrit :
      Date du jour : ' 2024 - 03 - 11T08 : 50 : 00 '
      État : " Remboursé "
      par courriel : ' william . brown@example.com'
      Nombre : 315
    - id : ' 4597 ' écrit :
      Date du jour : ' 2024 - 03 - 10T19 : 45 : 00 '
      Statut : " Payé "
      par courriel : ' emma . davis@example.com'
      Nombre : 529
    - id : ' 4596 ' écrit :
      Date du jour : ' 2024 - 03 - 10T15 : 55 : 00 '
      Statut : " Payé "
      par courriel : ' ethan . harris@example.com'
      Nombre : 639
    - id : ' 4595 ' écrit :
      Date du jour : ' 2024 - 03 - 10T15 : 55 : 00 '
      Statut : " payé "
      par courriel : ' ethan . harris@example.com'
      Nombre : 639
    - id : ' 4594 ' écrit :
      Date du jour : ' 2024 - 03 - 10T15 : 55 : 00 '
      Statut : " payé "
      par courriel : ' ethan . harris@example.com'
      Nombre : 639
  classe : ' flex - 1 max-h - [ 312px ] '
---
::

@@ph145@exemples

### Avec des actions de ligne

Vous pouvez ajouter une nouvelle colonne qui affiche un[DropdownMenu](/docs/components/dropdown-menu)à l'intérieur du`cell`pour afficher les actions de ligne .

::component-example
---
Étiquette : true
Collapse : vrai
nom : ' table-row - actions-exemple '
Highlights :
  @@152@115
  @@153@141
classe : ' ! p - 0 '
---
::

### Avec lignes extensibles

Vous pouvez ajouter une nouvelle colonne qui rend un[Button](/docs/components/button)composant à l'intérieur du`cell`pour basculer l'état extensible d'une ligne à l'aide de la table TanStack[Expanding APIs](https://tanstack.com/table/v8/docs/api/features/expanding).

::caution
Vous devez définir l'emplacement`#expanded`pour rendre le contenu développé qui recevra la ligne comme paramètre .
::

::component-example
---
Étiquette : true
Collapse : vrai
nom : ' table-row - exemple '
Highlights :
  @@@55@55
  @@166@72
classe : ' ! p - 0 '
---
::

::tip
Vous pouvez utiliser la prop `expanded` pour contrôler l'état extensible des lignes (peut être lié avec `v-model`).
::

::note
Vous pouvez également ajouter cette action au composant [`DropdownMenu`](/docs/components/dropdown-menu) dans la colonne `actions`.
::

### Avec des lignes groupées

Vous pouvez regrouper des lignes en fonction d'une valeur de colonne donnée et afficher/masquer des sous-lignes via un bouton ajouté à la cellule en utilisant la table TanStack [Groupement APIs](https://tanstack.com/table/v8/docs/api/features/grouping).

#### Pièces importantes

* Ajouter `grouping` prop avec un tableau d'identifiants de colonne que vous souhaitez regrouper.
* Ajouter `grouping-options` prop. Il doit inclure `getGroupedRowModel`, vous pouvez l'importer depuis `@tanstack/vue-table` ou implémenter le vôtre.
* Développez les lignes via la méthode `row.toggleExpanded()` sur n'importe quelle cellule de la ligne. Gardez à l'esprit qu 'il bascule également l'emplacement `#expanded`.
* Utilisez `aggregateFn` dans la définition de colonne pour définir comment agréger les lignes.
Le moteur de rendu * `agregatedCell` sur la définition de colonne ne fonctionne que s'il n'y a pas de moteur de rendu `cell`.

::component-example
---
Étiquette: true
Collapse: vrai
nom: 'table-groupé-rows-exemple'
Highlights:
  @@195@157
  @@196@160
classe: '! p-0'
---
::

### Avec épinglage de ligne: badge{label="4.6+" class="align-text-top"}

Vous pouvez ajouter une colonne qui rend un [Button](/docs/components/button) composant à l'intérieur du `cell` pour basculer l'état d'épinglage d'une ligne à l'aide de la table TanStack [Row Pinning APIs](https://tanstack.com/table/v8/docs/api/features/row-pinning). Les lignes épinglées resteront en haut ou en bas de la table indépendamment du tri ou du filtrage.

::component-example
---
Étiquette: true
Collapse: vrai
nom: 'table-row-pinning-exemple'
dépassement: true
Highlights:
  @208@91
  @209@107
  @@210@160
  @@111@165
  @212@168
classe: '! p-0'
---
::

::tip
Vous pouvez utiliser la prop `row-pinning` pour contrôler l'état d'épinglage des lignes (peut être lié avec `v-model`).
::

### Avec sélection de ligne

Vous pouvez ajouter une nouvelle colonne qui rend un [Checkbox]() à l'intérieur du composant `header` et `cell` pour sélectionner des lignes à l'aide de la table TanStack [Row Selection APIs](https://tanstack.com/table/v8/docs/api/features/row-selection).

::component-example
---
Étiquette: true
Collapse: vrai
nom: 'table-row-selection-example'
Highlights:
  @226@55
  @227@72
classe: '! p-0'
---
::

::tip
Vous pouvez utiliser la prop `row-selection` pour contrôler l'état de sélection des lignes (peut être lié avec `v-model`).
::

### Avec l'événement row select

Vous pouvez ajouter un écouteur `@select` pour rendre les lignes cliquables avec ou sans colonne de case à cocher.

::note
La fonction handler reçoit les instances `Event` et `TableRow` comme premier et deuxième arguments respectivement.
::

::component-example
---
Étiquette: true
Collapse: vrai
nom: 'table-row-select-event-example'
Highlights:
  @@234@122
  @@235 @ 131
classe: '! p-0'
---
::

::tip
Vous pouvez l'utiliser pour accéder à une page, ouvrir un modal ou même sélectionner la ligne manuellement.
::

### With row menu contextuel événement

Vous pouvez ajouter un écouteur `@contextmenu` pour rendre les lignes cliquables à droite et envelopper la table dans un composant [ContextMenu](/docs/components/context-menu) pour afficher les actions de ligne par exemple.

::note
La fonction handler reçoit les instances `Event` et `TableRow` comme premier et deuxième arguments respectivement.
::

::component-example
---
Étiquette: true
Collapse: vrai
nom: 'table-row-context-menu-event-example'
Highlights:
  @@244@134
  @@245@175
classe: '! p-0'
---
::

### With row hover événement

Vous pouvez ajouter un écouteur `@hover` pour rendre les lignes hoverables et utiliser un composant [Popover](/docs/components/popover) ou un [Tooltip](/docs/components/tooltip) pour afficher les détails des lignes par exemple.

::note
La fonction handler reçoit les instances `Event` et `TableRow` comme premier et deuxième arguments respectivement.
::

::component-example
---
Étiquette: true
Collapse: vrai
nom: 'table-row-hover-event-example'
Highlights:
  @@258@129
  @259@159
classe: '! p-0'
---
::

::note
Cet exemple est similaire au Popover [avec le curseur suivant exemple ](/docs/components/popover#with-following-cursor) et utilise un [`refDebounced`]() pour empêcher le Popover d'ouvrir et de fermer trop rapidement lors du déplacement du curseur d'une ligne à l'autre.
::

### Avec pied de colonne

Vous pouvez ajouter une propriété `footer` à la définition de la colonne pour afficher un pied de page pour la colonne.

::component-example
---
Étiquette: true
Collapse: vrai
nom: 'table-colonne-foot-exemple'
Highlights:
  @@271@100
  @272@112
classe: '! p-0'
---
::

### Avec colonne

Vous pouvez utiliser les propriétés `colspan` et `rowspan` dans la colonne `meta` pour fusionner des cellules. Ces propriétés acceptent une valeur statique ou une fonction qui reçoit la cellule et renvoie la valeur de l'étendue.

::note
Lorsque vous utilisez `rowspan`, les cellules qui sont "absorbées" par l'étendue d'une ligne précédente doivent être visuellement masquées. Utilisez la méta `class` avec une fonction qui renvoie `'hidden'` pour ces cellules.
::

::component-example
---
Étiquette: true
Collapse: vrai
nom: 'table-colonne-span-exemple'
classe: '! p-0'
---
::

### Avec tri de colonnes

Vous pouvez mettre à jour une colonne `header` pour rendre un [Button](/docs/components/button) à l'intérieur du `header` pour basculer l'état de tri à l'aide de la table TanStack [Sorting APIs](https://tanstack.com/table/v8/docs/api/features/sorting).

Définissez `enableSorting: true` sur ces colonnes aussi. Ceci place `aria-sort` sur le `<th>` afin que les lecteurs d'écran puissent lire l'état de tri actuel de la colonne: `none`,`ascending` ou `descending`. Le `Button` reste le contrôle qui le modifie.

::component-example
---
Étiquette: true
Collapse: vrai
nom: 'table-colonne-exemple'
Highlights:
  @298@298
  @299@106
classe: '! p-0'
---
::

::tip
Vous pouvez utiliser la prop `sorting` pour contrôler l'état de tri des colonnes (peut être lié avec `v-model`).
::

Vous pouvez également créer un composant réutilisable pour rendre n'importe quel en-tête de colonne triable.

::component-example
---
Étiquette: true
Collapse: vrai
name: 'table-colonne-réutiliser-exemple'
Highlights:
  @@201@115
  @303@166
classe: '! p-0'
---
::

::note
Dans cet exemple, nous utilisons une fonction pour définir l'en-tête de colonne, mais vous pouvez également créer un composant réel.
::

### Avec épinglage de colonnes

Vous pouvez mettre à jour une colonne `header` pour rendre un [Button](/docs/components/button) composant à l'intérieur du `header` pour basculer l'état d'épinglage en utilisant la table TanStack [Column Pinning APIs](https://tanstack.com/table/v8/docs/api/features/column-pinning).

::note
Une colonne épinglée deviendra collante sur le côté gauche ou droit de la table. Lorsque vous utilisez l'épinglage de colonne, vous devez définir des valeurs `size` explicites pour vos colonnes afin d'assurer une bonne gestion de la largeur de colonne, en particulier avec plusieurs colonnes épinglées.
::

::component-example
---
Étiquette: true
Collapse: vrai
dépassement: true
nom: 'table-colonne-exemple'
Highlights:
  @@108 @ 108
  @@126 @ 127
classe: '! p-0 overflow-clip'
---
::

::tip
Vous pouvez utiliser la prop `column-pinning` pour contrôler l'état d'épinglage des colonnes (peut être lié avec `v-model`).
::

### Avec visibilité de colonne

Vous pouvez utiliser un composant [DropdownMenu](/docs/components/dropdown-menu) pour basculer la visibilité des colonnes à l'aide de la table TanStack [Column Visibility APIs](https://tanstack.com/table/v8/docs/api/features/column-visibility).

::component-example
---
Étiquette: true
Collapse: vrai
name: 'table-colonne-visibilité-exemple'
Highlights:
  @@29@121
  @@330 @ 146
classe: '! p-0'
---
::

::tip
Vous pouvez utiliser la prop `column-visibility` pour contrôler l'état de visibilité des colonnes (peut être lié à `v-model`).
::

### Avec filtres de colonne

Vous pouvez utiliser un composant [Input](/docs/components/input) pour filtrer les lignes par colonne à l'aide de la table TanStack [Column Filtering APIs](https://tanstack.com/table/v8/docs/api/features/column-filtering).

::component-example
---
Étiquette: true
Collapse: vrai
nom: 'table-colonne-filtre-exemple'
Highlights:
  @@342 @ 123
  @@343@128
classe: '! p-0'
---
::

::tip
Vous pouvez utiliser la prop `column-filters` pour contrôler l'état des filtres des colonnes (peut être lié avec `v-model`).
::

### avec filtre global

Vous pouvez utiliser un composant [Input](/docs/components/input) pour filtrer les lignes à l'aide de la table TanStack [Global Filtering APIs](https://tanstack.com/table/v8/docs/api/features/global-filtering).

::component-example
---
Étiquette: true
Collapse: vrai
nom: 'table-global-filtre-exemple'
classe: '! p-0'
Highlights:
  @@5@116
---
::

::tip
Vous pouvez utiliser la prop `global-filter` pour contrôler l'état global du filtre (peut être lié à `v-model`).
::

### Avec pagination

Vous pouvez utiliser un composant [Pagination](/docs/components/pagination) pour contrôler l'état de pagination à l'aide du [Pagination APIs](https://tanstack.com/table/v8/docs/api/features/pagination).

Il existe différentes approches de pagination, comme expliqué dans le Guide de pagination [](https://tanstack.com/table/v8/docs/guide/pagination#pagination-guide). Dans cet exemple, nous utilisons la pagination côté client, nous devons donc passer manuellement la fonction `getPaginationRowModel()`{lang="ts-type"}.

::component-example
---
Étiquette: true
Collapse: vrai
nom: 'table-pagination-exemple'
classe: '! p-0'
Highlights:
  @@203@204
  @@209 à @209
---
::

::tip
Vous pouvez utiliser la prop `pagination` pour contrôler l'état de la pagination (peut être lié à `v-model`).
::

### Avec données extraites

Vous pouvez récupérer des données à partir d'une API et les utiliser dans la table.

::component-example
---
Étiquette: true
Collapse: vrai
nom: 'table-fetch-exemple'
Highlights:
  @@ph378@15
  @@ph379@26
classe: '! p-0'
---
::

::note
Cet exemple utilise `useLazyFetch` avec `server: false` pour récupérer des données sur le client sans bloquer le rendu initial. L'état de chargement vérifie à la fois les statuts `pending` et `idle` pour afficher un indicateur de chargement avant et pendant la récupération.
::

### Avec défilement infini

Si vous utilisez la pagination côté serveur, vous pouvez utiliser le composable [`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/#useinfinitescroll) pour charger plus de données au fur et à mesure que l'utilisateur fait défiler.

::component-example
---
Étiquette: true
Collapse: vrai
Highlights:
  @@390@72
  @@391 @ 83
dépassement: true
nom: 'table-infinite-scroll-example'
classe: '! p-0'
---
::

::note
Cet exemple utilise `useLazyFetch` avec `server: false` pour récupérer des données sur le client sans bloquer le rendu initial. L'état de chargement vérifie à la fois les statuts `pending` et `idle` pour afficher un indicateur de chargement avant et pendant la récupération. Des pages supplémentaires sont chargées au fur et à mesure que l'utilisateur fait défiler.
::

### Avec drag and drop

Vous pouvez utiliser le [`useSortable`](https://vueuse.org/integrations/useSortable/) composable à partir de [](https://vueuse.org/integrations/README.html) pour activer la fonctionnalité de glisser-déposer sur la table. Cette intégration enveloppe [Sortable.js](https://sortablejs.github.io/Sortable/) pour fournir une expérience drag and drop sans faille.

::note
Puisque la référence de la table n'expose pas l'élément tbody, ajoutez-lui une classe unique via la prop `:ui` pour le cibler avec `useSortable`(par exemple `:ui="{ tbody: 'my-table-tbody' }"`).
::

::component-example
---
Étiquette: true
Collapse: vrai
Highlights:
  @@414 @ 81
  @@415 @ 83
nom: 'table-drag-and-drop-exemple'
classe: '! p-0'
---
::

### Avec la virtualisation: badge{label="4.1+" class="align-text-top"}

Utilisez le prop `virtualize` pour activer la virtualisation de grands ensembles de données en tant que booléen ou objet avec des options telles que `{ estimateSize: 65, overscan: 12 }`. Vous pouvez également passer d'autres options virtuelles ](https://tanstack.com/virtual/latest/docs/api/virtualizer#optional-options) pour personnaliser le comportement de virtualisation. Le prop `sticky` fonctionne en combinaison avec `virtualize` pour garder l'en-tête ou le pied de page visible lors du défilement de grands ensembles de données.

::warning
L'épinglage de ligne n'est pas pris en charge lorsque la virtualisation est activée.
::

::component-example
---
Étiquette: true
Collapse: vrai
dépassement: true
nom: 'table-virtualise-exemple'
classe: '! p-0'
---
::

::note
Une contrainte de hauteur est nécessaire sur la table pour que la virtualisation fonctionne correctement (par exemple `class="h-[400px]"`).
::

### Avec élément de défilement externe: badge{label="4.10+" class="align-text-top"}

Passez une fonction `getScrollElement` dans la prop `virtualize` pour virtualiser sur un conteneur de défilement ancêtre au lieu de la propre racine de la table. Définissez `scrollMargin` sur le décalage de la table par rapport au début de l'élément de défilement (par exemple, la hauteur du contenu au-dessus de celui-ci), de sorte qu 'un en-tête et le corps de la table partagent une seule barre de défilement.

::component-example
---
Étiquette: true
Collapse: vrai
dépassement: true
nom: 'table-external-scroll-example'
classe: '! p-0'
---
::

::note
Dans ce mode, le `overflow` de la racine de la table est `visible` et le conteneur externe possède un défilement sur les deux axes, donc donnez-lui `overflow-auto`(pas seulement `overflow-y-auto`) pour garder les tables larges défilables horizontalement.
::

### Avec données d'arbre

Vous pouvez utiliser la prop `get-sub-rows` pour afficher des données hiérarchiques (arborescence) dans la table.
Par exemple, si vos objets de données possèdent un tableau `children`, définissez `:get-sub-rows="row => row.children"` pour activer les lignes extensibles.

::component-example
---
Étiquette: true
Collapse: vrai
Highlights:
  @@441@175
nom: 'table-arbre-data-exemple'
classe: '! p-0'
---
::

### Avec slots

Vous pouvez utiliser des emplacements pour personnaliser l'en-tête et les cellules de données de la table.

Utilisez l'emplacement `#<column>-header` pour personnaliser l'en-tête d'une colonne. Vous aurez accès aux propriétés `column`,`header` et `table` dans la portée de l'emplacement.

Utilisez l'emplacement `#<column>-cell` pour personnaliser la cellule d'une colonne. Vous aurez accès aux propriétés `cell`,`column`,`getValue`,`renderValue`,`row` et `table` dans la portée de l'emplacement.

::component-example
---
Étiquette: true
Collapse: vrai
nom: 'table-slots-exemple'
classe: '! p-0'
---
::

@@ph454@api

@@ph455@@props

Composants-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table#attributes" target="_blank"}
Ce composant prend également en charge tous les attributs HTML natifs `<table>`.
::

### Slots

Composants slots

### Exposé

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
| @@|@@|
| @@ph477@@@ph483 @|@@@@@@@@PH488{lang="ts-type"}](https://tanstack.com/table/v8/docs/api/core/table#table-api)|

@@ph485@thème

Composant-thème

@changement486

Composant-changelog
