---
title: inputMenu
description: Une saisie automatique avec des suggestions en temps réel.
category: form
keywords:
  - combobox
  - typeahead
  - autosuggest
links:
  - label: Combobox à
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/combobox
  - label: Autocomplétion
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/autocomplete
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputMenu.vue
---

@@ph000@@utilisation

Utilisez la directive `v-model` pour contrôler la valeur du InputMenu ou la prop `default-value` pour définir la valeur initiale lorsque vous n'avez pas besoin de contrôler son état.

::component-code
---
Étiquette: true
Ignorer:
  - modèleValeur
  @@ph004@articles
Extérieure:
  @@ph005@articles
  - modèleValeur
Props:
  Valeur: 'Backlog'
  items:
    @@007@Backlog
    @008@tout
    - En cours
    @@ph010@@fait
---
::

::tip
Utilisez ceci sur un `Input`](/docs/components/input) pour tirer parti du composant [`Combobox`](https://reka-ui.com/docs/components/combobox) de Reka UI qui offre des fonctionnalités d'autocomplétion.
::

::note
Ce composant est similaire au [`SelectMenu`](/docs/components/select-menu) mais il utilise une entrée au lieu d'un sélectionner.
::

@26@@pourquoi

Utilisez la prop `items` comme un tableau de chaînes, de nombres ou de booléens:

::component-code
---
Étiquette: true
Ignorer:
  - modèleValeur
  @@29@articles
Extérieure:
  @@ph030@articles
  - modèleValeur
Props:
  Valeur: 'Backlog'
  items:
    @@P2003@@Backlog
    @@P033@tout
    - En cours
    @@ph035@réponse
---
::

Vous pouvez également passer un tableau d'objets avec les propriétés suivantes:

@@
[`type?: "label" | "separator" | "item"`{lang="ts-type"}](#with-items-type)
[`icon?: string`{lang="ts-type"}](#with-icons-in-items)
@@
@@
@@
@@
@@
@@

::component-code
---
Ignorer:
  - modelValue.label
  @@ph080@articles
Extérieure:
  @@ph081@articles
  - modèleValeur
Extérieurs:
  @@883@@InputMenuItem [résumé]
Props:
  Modélisation:
    Étiquette:"Tout"
  items:
    - label:'Backlog'
    - label:« Tout »
    - label:« En cours »
    - label:« Réalisé »
---
::

Vous pouvez également passer un tableau de tableaux à la prop `items` pour afficher des groupes d'éléments séparés.

::component-code
---
Étiquette: true
ignorer:
  - modèleValeur
  @@ph090@articles
Extérieure:
  @@ph091@articles
  - modèleValeur
Props:
  Modèle:"Apple"
  items:
    - -Développeur
      @@ph094@banane
      @@ph095@blueberry
      @@ph096@@référencement
      @@Pineapple
    - -Aubergine
      @099@@broccoli
      - Carotte
      @101@courgette
      @@ph102@leek
---
::

### Valeur Clé

Vous pouvez choisir de lier une seule propriété de l'objet plutôt que l'objet entier en utilisant la prop.`value-key`. Par défaut à `undefined`.

::component-code
---
Collapse: vrai
Ignorer:
  - modèle
  - valueKey
  @@ph108@articles
Extérieur:
  @@ph109@articles
  - modèleValeur
Extérieurs:
  @@111@@InputMenuItem []
Props:
  Valeur: 'tout'
  valueKey: 'id'
  items:
    - label:'Backlog'
      Définition: Backlog
    - label:« Tout »
      ID: « tout »
    - label:« En cours »
      id: 'in_progress'
    - label:« Réalisé »
      ID: "fait"
---
::

::tip
Utilisez la prop `by` pour comparer des objets par un champ au lieu de référence lorsque le `model-value` est un objet.
::

@@ph118@multiple

Utilisez la prop `multiple` pour permettre des sélections multiples, les éléments sélectionnés seront affichés sous forme de balises.

::component-code
---
Étiquette: true
Ignorer:
  - modèleValeur
  @@ph121@articles
  @@ph122@multiple
Extérieur:
  @@ph123@articles
  - modèleValeur
Props:
  Modélisation:
    @@P125@@référencement
    @@ph126@tout
  Multiple: Vrai
  items:
    @127@Backlog
    @@ph128@tout
    - En cours
    @@ph130@fait
---
::

::caution
Assurez-vous de passer un tableau à la prop `default-value` ou à la directive `v-model`.
::

### Delete Icône

With `multiple`, use the `delete-icon` prop to customize the delete [Icon](/docs/components/icon) in the tags.

::component-code
---
Étiquette: true
ignorer:
  - modèleValeur
  @@ph142@articles
  @@ph143@@multiple
Extérieur:
  @@ph144@articles
  - modèleValeur
Props:
  Modèle:
    @146@référencement
    @@ph147@tout
  Multiple: vrai
  Icône:'i-lucide-trash'
  items:
    @148@référencement
    @@ph149@tout
    - En cours
    @@ph151 @ réponse
---
::

::framework-only
#numérique
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.close`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.close`.
:::
::

### Placeholder

Utilisez la prop `placeholder` pour définir un texte d'espace réservé.

::component-code
---
Étiquette: true
Ignorer:
  @@ph158@articles
Extérieur:
  @@ph159@articles
Props:
  placeholder: "Sélectionner le statut"
  items:
    @@P160@Backlog
    @@ph161@tout
    - En cours
    @@ph163@réponse
---
::

### Mode: badge

Définissez la prop `mode` sur `autocomplete` pour transformer le Menu d'entrée en une entrée de texte libre avec des suggestions. Le `modelValue` devient le texte d'entrée (`string`) au lieu d'un élément sélectionné.

::component-example
---
nom: input-menu-mode-exemple
---
::

::caution
Lorsque `mode` est `autocomplete`,`multiple`,`by`,`resetSearchTermOnSelect` et `resetModelValueOnClear` ne sont pas valables.
::

::tip
Utilisez la prop `content.hideWhenEmpty` pour masquer le menu lorsqu 'il n'y a pas de suggestions correspondantes.
::

@177@contenu

Utilisez la prop `content` pour contrôler la façon dont le contenu InputMenu est rendu, comme son `align` ou `side` par exemple.

::component-code
---
Étiquette: true
ignorer:
  @@ph181@articles
  - modèleValeur
Extérieure:
  @@ph183@articles
  - modèleValeur
items:
  content.align:
    @@ph185@départ
    @@ph186@centre
    @@ph187@fin
  content.side:
    @@ph188@réf.
    @@ph189@left
    @@ph190@top
    @@ph191@bottom
Props:
  Valeur: 'Backlog'
  contenu:
    Alignement: Centre
    Étiquette: bottom
    SideOffset: 8
  items:
    @@2019@Backlog
    @@P193@tout
    - En cours
    @@ph195@réponse
---
::

@@ph196@flèche

Utilisez la prop `arrow` pour afficher une flèche dans le menu d'entrée.

::component-code
---
Étiquette: true
Ignorer:
  @@ph198@articles
  - modelValeur
  @@ph200@@flèche
Extérieur:
  @@ph201@articles
  - modèleValeur
Props:
  Valeur: 'Backlog'
  Arrow: vrai
  items:
    @@203@Backlog
    @204@tout
    @@205@En cours
    @@206@fait
---
::

@207@couleur

Utilisez la prop `color` pour changer la couleur de l'anneau lorsque le menu d'entrée est focalisé.

::component-code
---
Étiquette: true
Ignorer:
  @@ph209@articles
  by - modelValue
Extérieure:
  @@ph211@articles
  - modèleValeur
Props:
  Valeur: 'Backlog'
  Couleur: Neutre
  Highlights: vrai
  items:
    @@2013@@Backlog
    @@ph214@tout
    @@215@En cours
    @@ph216@fait
---
::

::note
La prop `highlight` est utilisée ici pour afficher l'état de mise au point. Il est utilisé en interne lorsqu 'une erreur de validation se produit.
::

@@218@@Variant

Utilisez la prop `variant` pour modifier la variante du Menu d'entrée.

::component-code
---
Étiquette: true
ignorer:
  @220@articles
  - modèleValeur
Extérieur:
  @@222@articles
  - modèleValeur
Props:
  Valeur: 'Backlog'
  Couleur: Neutre
  Variante: subtile
  Étiquette: false
  items:
    @@224@Backlog
    @225@tout
    @@226@En cours
    @227@fait
---
::

@228@Size

Utilisez la prop `size` pour modifier la taille du menu d'entrée.

::component-code
---
Étiquette: true
ignorer:
  @@ph230@articles
  - modèleValeur
Extérieur:
  @@232@articles
  - modèleValeur
Props:
  Valeur: 'Backlog'
  Taille: XL
  items:
    @@234@Backlog
    @@P235@tout
    - En cours
    @@ph237@fait
---
::

@@ph238@@Icon

Utilisez le prop `icon` pour afficher un [Icon](/docs/components/icon) à l'intérieur du Menu d'entrée.

::component-code
---
Étiquette: true
Ignorer:
  @@ph244@articles
  - modèleValeur
Extérieur:
  @@ph246@articles
  - modelValeur
Props:
  Valeur: 'Backlog'
  icon: 'i-lucide-search'
  Étiquette: MD
  items:
    @@248@Backlog
    @@ph249@tout
    - En cours
    @@ph251@fait
---
::

### Trailing Icône

Utilisez le prop `trailing-icon` pour personnaliser le [Icon](/docs/components/icon).

::component-code
---
Étiquette: true
Ignorer:
  @@ph259@articles
  - modèleValeur
Extérieure:
  @@ph261@articles
  - modèleValeur
Props:
  Valeur: 'Backlog'
  trailingIcône:'i-lucide-arrow-down'
  Taille: MD
  items:
    @@263@Backlog
    @@ph264@tout
    - En cours
    @@ph266@réponse
---
::

::framework-only
#numérique
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.chevronDown`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.chevronDown`.
:::
::

### Icône sélectionnée

Utilisez la prop `selected-icon` pour personnaliser l'icône lorsqu 'un élément est sélectionné. Par défaut à `i-lucide-check`.

::component-code
---
Étiquette: true
Ignorer:
  @@ph274@articles
  - modèleValeur
Extérieure:
  @@ph276@articles
  - modelValeur
Props:
  Valeur: 'Backlog'
  sélectionnéIcône:'i-lucide-flame'
  Taille: MD
  items:
    @@278@référencement
    @279@tout
    - En cours
    @@ph281@fait
---
::

::framework-only
#numérique
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.check`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.check`.
:::
::

### Clear: badge

Utilisez la prop `clear` pour afficher un bouton clair lorsqu 'une valeur est sélectionnée.

::component-code
---
Étiquette: true
ignorer:
  @@ph289@articles
  - modèleValeur
Extérieur:
  @@ph291@articles
  - modèleValeur
items:
  Clair:
    @@ph293@@vrai
    @294@faux
Props:
  Valeur: 'Backlog'
  Étiquette: true
  items:
    @@295@Backlog
    @296@tout
    @@297@En cours
    @@ph298@fait
---
::

### Clear Icon: badge{label="4.4+" class="align-text-top"}

Utilisez le prop `clear-icon` pour personnaliser le bouton clair [Icon](/docs/components/icon).

::component-code
---
Étiquette: true
Ignorer:
  @@ph307@articles
  - modelValeur
Extérieure:
  @@ph309@articles
  - modèle
items:
  Clair:
    @@ph311@@true
    @@F312@faux
Props:
  Valeur: 'Backlog'
  Étiquette: true
  clearIcon: 'i-lucide-trash'
  items:
    @@313@Backlog
    @@ph314@tout
    - En cours
    @@ph316@réalisé
---
::

::framework-only
#numérique
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.close`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.close`.
:::
::

@@ph321@avatar

Utilisez la prop `avatar` pour afficher un [Avatar](/docs/components/avatar) dans le menu d'entrée.

::component-code
---
Étiquette: true
ignorer:
  @@ph327@articles
  - modèleValeur
  - avatar.chargement
Extérieure:
  @@ph330@articles
  - modèleValeur
Props:
  Valeur: 'Nuxt'
  Avatar:
    src: 'https://github.com/nuxt.png'
    Étiquette: Lazy
  items:
    - Nuxt
    - NuxtHub
    - NuxtLabs
    - Nuxt Modules
    - Nuxt Communauté
---
::

@@337@chargement

Utilisez la prop `loading` pour afficher une icône de chargement sur le Menu d'entrée.

::component-code
---
Étiquette: true
Ignorer:
  @@ph339@articles
  - modèleValeur
Extérieur:
  @@ph341@articles
  - modèleValeur
Props:
  Valeur: 'Backlog'
  Chargement: vrai
  Traînée: Faux
  items:
    @@343@@référencement
    @@P344@tout
    - En cours
    @@ph346@réalisé
---
::

### Icône de chargement

Utilisez la prop `loading-icon` pour personnaliser l'icône de chargement. Par défaut,`i-lucide-loader-circle`.

::component-code
---
Étiquette: true
Ignorer:
  @@ph350@articles
  - modèleValeur
Extérieur:
  @@ph352@articles
  - modèleValeur
Props:
  Valeur: 'Backlog'
  Chargement: vrai
  loadingIcon: 'i-lucide-loader'
  items:
    - Backlog
    @@P355@tout
    - En cours
    @@ph357@réalisé
---
::

::framework-only
#numérique
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.loading`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.loading`.
:::
::

### désactivé

Utilisez la prop `disabled` pour désactiver le menu d'entrée.

::component-code
---
Étiquette: true
ignorer:
  @@ph364@articles
  @@ph365@réservoir
Extérieure:
  @@ph366@articles
Props:
  handicapés: vrai
  placeholder: "Sélectionner le statut"
  items:
    @367@Backlog
    @@ph368@tout
    - En cours
    @@ph370@réalisé
---
::

@@ph371@@Exemples

### Avec type d'éléments

Vous pouvez utiliser la propriété `type` avec `separator` pour afficher un séparateur entre les éléments ou `label` pour afficher une étiquette.

::component-code
---
Collapse: vrai
ignorer:
  - modèleValeur
  @@ph377@articles
Extérieur:
  @@ph378@articles
  - modèleValeur
Extérieurs:
  - InputMenuItem []
Props:
  Modèle:"Apple"
  items:
    - -type: 'étiquette'
        Étiquette: Fruits
      @P382 @ Apple
      @383@bananière
      @ph384@blueberry
      @@ph385@@référencement
      @Pineapple 386@Pineapple
    - -type: 'étiquette'
        Étiquette:"Légumes"
      - Aubergine
      @389@broccoli
      - Carotte
      @391@courgette
      @392@@Lévy
---
::

::note
Lorsque vous utilisez des éléments `label` comme en-têtes de groupe, passez un tableau de tableaux afin qu 'une étiquette soit filtrée avec son groupe lors de la recherche.
::

### Avec icône dans les éléments

Vous pouvez utiliser la propriété `icon` pour afficher une [Icon](/docs/components/icon) à l'intérieur des éléments.

::component-example
---
Collapse: vrai
nom: 'input-menu-items-icon-example'
---
::

::tip
Vous pouvez également utiliser l'emplacement `#leading` pour afficher l'icône sélectionnée.
::

### Avec avatar dans les articles

Vous pouvez utiliser la propriété `avatar` pour afficher un [Avatar](/docs/components/avatar) à l'intérieur des éléments.

::component-example
---
Collapse: vrai
name: 'input-menu-items-avatar-exemple'
---
::

::tip
Vous pouvez également utiliser l'emplacement `#leading` pour afficher l'avatar sélectionné.
::

### Avec puce dans des articles

Vous pouvez utiliser la propriété `chip` pour afficher un [Chip](/docs/components/chip) à l'intérieur des éléments.

::component-example
---
Collapse: vrai
nom: 'input-menu-items-chip-example'
---
::

::note
Dans cet exemple, le slot `#leading` est utilisé pour afficher la puce sélectionnée.
::

### Control état ouvert

Vous pouvez contrôler l'état ouvert en utilisant la prop `default-open` ou la directive `v-model:open`.

::component-example
---
nom: 'input-menu-open-example'
---
::

::note
Dans cet exemple, en utilisant [`defineShortcuts`](/docs/composables/define-shortcuts), vous pouvez basculer le Menu d'entrée en appuyant sur: kbd{value="O"}.
::

### Contrôle de l'état ouvert sur le focus

Vous pouvez utiliser les accessoires `open-on-focus` ou `open-on-click` pour ouvrir le menu lorsque l'entrée est focalisée ou cliquée.

::component-example
---
nom: 'input-menu-open-focus-exemple'
---
::

### Contrôle terme de recherche

Utilisez la directive `v-model:search-term` pour contrôler le terme de recherche.

::component-example
---
nom: 'input-menu-search-term-exemple'
---
::

### Avec icône rotative

Voici un exemple avec une icône tournante qui indique l'état ouvert du Menu d'entrée.

::component-example
---
nom: 'input-menu-icon-exemple'
---
::

### Avec créer l'élément

Utilisez la prop `create-item` pour permettre aux utilisateurs d'ajouter des valeurs personnalisées qui ne figurent pas dans les options prédéfinies.

::component-example
---
Collapse: vrai
nom: 'input-menu-create-item-example'
---
::

::note
L'option create affiche quand aucune correspondance n'est trouvée par défaut. Définissez-la sur `always` pour l'afficher même lorsque des valeurs similaires existent.
::

::tip{to="#emits"}
Utilisez l'événement `@create` pour gérer la création de l'élément. Vous recevrez l'événement et l'élément en tant qu 'arguments.
::

### Avec les éléments récupérés

Vous pouvez récupérer des éléments à partir d'une API et les utiliser dans le InputMenu.

::component-example
---
Collapse: vrai
nom: 'input-menu-fetch-exemple'
---
::

::note
Cet exemple utilise `useLazyFetch` avec `immediate: false` pour récupérer les données uniquement lorsque le menu s'ouvre, évitant ainsi les appels d'API inutiles lors du chargement de la page.
::

### Avec filtre ignoré

Définissez la prop `ignore-filter` sur `true` pour désactiver la recherche interne et utiliser votre propre logique de recherche.

::component-example
---
Collapse: vrai
nom: 'input-menu-ignore-filter-example'
---
::

::note
Cet exemple utilise [`refDebounced`](PH4444) pour déboulonner les appels d'API. La récupération est différée avec `immediate: false` donc aucune demande n'est faite jusqu'à ce que le menu s'ouvre.
::

### Avec champs de filtre

Utilisez la prop `filter-fields` avec un tableau de champs pour filtrer. Defaults to `[labelKey]`.

::component-example
---
Collapse: vrai
nom: 'input-menu-filter-fields-exemple'
---
::

::note
Cet exemple utilise `useLazyFetch` avec `immediate: false` pour récupérer les données uniquement lorsque le menu s'ouvre, évitant ainsi les appels d'API inutiles lors du chargement de la page.
::

### Avec la virtualisation: badge{label="4.1+" class="align-text-top"}

Utilisez la prop `virtualize` pour activer la virtualisation de grandes listes en tant que booléen ou objet avec des options telles que `{ estimateSize: 32, overscan: 12 }`.

::warning{to="https://github.com/unovue/reka-ui/issues/1885" target="_blank"}
Lorsqu 'il est activé, tous les groupes sont aplatis en une seule liste en raison d'une limitation de l'interface utilisateur de Reka.
::

::component-example
---
Étiquette: true
nom: 'input-menu-virtualise-exemple'
---
::

### Avec défilement infini: badge{label="4.4+" class="align-text-top"}

Vous pouvez utiliser le [`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/) pour charger plus de données au fur et à mesure que l'utilisateur fait défiler.

::component-example
---
Étiquette: true
Collapse: vrai
Highlights:
  @@462 @ 41
  @@463@51
dépassement: true
nom: 'input-menu-infinite-scroll-exemple'
---
::

::note
Cet exemple utilise `useLazyFetch` avec `immediate: false`, de sorte que les données ne sont chargées que lorsque l'utilisateur fait défiler.
::

### Avec largeur de contenu complète

Vous pouvez étendre le contenu à toute la largeur de ses éléments en ajoutant la classe `min-w-fit` sur l'emplacement `ui.content`.

::component-example
---
nom: 'input-menu-content-width-example'
Collapse: vrai
---
::

::tip
Vous pouvez également modifier la largeur du contenu globalement dans votre `app.config.ts`:

```
export default defineAppConfig({
  ui: {
    inputMenu: {
      slots: {
        content: 'min-w-fit'
      }
    }
  }
})
```
::

### Comme sélecteur de pays

Vous pouvez utiliser le Menu d'entrée comme sélecteur de pays avec un chargement paresseux. Les pays ne sont récupérés que lorsque le menu est ouvert pour la première fois.

::component-example
---
Collapse: vrai
nom: 'input-menu-countries-example'
---
::

::note
Cet exemple utilise `useLazyFetch` avec `immediate: false` pour charger uniquement les pays lorsque le menu est ouvert pour la première fois.
::

@@ph484@api

@@ph485@@props

Composants-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
Ce composant prend également en charge tous les attributs HTML natifs `<input>`.
::

### Slots

Composants slots

@@ph488@@émissions

Composants émetteurs

### Exposé

Lorsque vous accédez au composant via une référence de modèle, vous pouvez utiliser les éléments suivants:

| nom| type|
| ---- | ---- |
| @@|@@|
| @@|@@|

@@ph498@thème

Composant-thème

@499@changements

Composant-changelog
