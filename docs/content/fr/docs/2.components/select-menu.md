---
title: SélectionneMenu
description: Un élément select avancé.
category: form
keywords:
  - combobox
  - multi select
  - filterable select
links:
  - label: Combobox à
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/combobox
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/SelectMenu.vue
---

@@ph000@@utilisation

Utilisez la directive `v-model` pour contrôler la valeur du SelectMenu ou la prop `default-value` pour définir la valeur initiale lorsque vous n'avez pas besoin de contrôler son état.

::component-code
---
Étiquette: true
Caché:
  @@ph003@classe
Ignorer:
  - modèleValeur
  @@ph005@articles
  @@ph006@classe
Extérieur:
  @@ph007@articles
  - modèleValeur
Props:
  Valeur: 'Backlog'
  items:
    - Backlog
    @@ph010@tout
    - En cours
    @@ph012@@fait
  Catégorie: W-48
---
::

::tip
Utilisez ceci sur un `Select`](/docs/components/select) pour tirer parti du composant [`Combobox`https://reka-ui.com/docs/components/combobox) de Reka UI qui offre des fonctionnalités de recherche et de sélection multiple.
::

::note
Ce composant est similaire au [`InputMenu`](/docs/components/input-menu), mais il utilise un Sélectionner au lieu d'une Entrée avec la recherche dans le menu.
::

@@28@points

Utilisez la prop `items` comme un tableau de chaînes, de nombres ou de booléens:

::component-code
---
Étiquette: true
Ignorer:
  - modèleValeur
  @@ph031@articles
  @@classe 32
Extérieur:
  @@ph033@articles
  - modèleValeur
Props:
  Valeur: 'Backlog'
  items:
    @@P035@@Backlog
    @@P36@tout
    - En cours
    @@ph038@fait
  Catégorie: W-48
---
::

Vous pouvez également passer un tableau d'objets avec les propriétés suivantes:

@@
[`type?: "label" | "separator" | "item"`{lang="ts-type"}](#with-items-type)
@@
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
  @@ph083@articles
  @@ph084@classe
Extérieur:
  @@ph085@articles
  - modèleValeur
Extérieurs:
  - SelectMenuItem [réf. nécessaire]
Props:
  Modélisation:
    Étiquette:"Tout"
  items:
    - label:'Backlog'
    - label:« Tout »
    - label:« En cours »
    - label:« Réalisé »
  Catégorie: W-48
---
::

::caution
Contrairement au composant [`Select`](/docs/components/select), le SelectMenu s'attend à ce que l'objet entier soit passé à la directive `v-model` ou à la prop `default-value` par défaut.
::

Vous pouvez également passer un tableau de tableaux à la prop `items` pour afficher des groupes d'éléments séparés.

::component-code
---
Étiquette: true
Ignorer:
  - modèleValeur
  @@ph101@articles
  @@ph102@classe
Extérieure:
  @@ph103@articles
  - modèleValeur
Props:
  Modèle:"Apple"
  items:
    -  par Apple
      - Banane
      @ph107@blueberry
      @@ph108@@référencement
      @Pineapple 109 @ Pineapple
    - -Aubergine
      @111@@broccoli
      @112@carotte
      @113@courgette
      @114@114@114
  Catégorie: W-48
---
::

### Clé de valeur

Vous pouvez choisir de lier une seule propriété de l'objet plutôt que l'objet entier en utilisant la prop.`value-key`. Par défaut à `undefined`.

::component-code
---
Collapse: vrai
Ignorer:
  - modèle
  @@ph119@valueKey
  @120@120@120
  @@ph121@classe
Extérieure:
  @@ph122@articles
  - modèleValeur
Extérieurs:
  - SelectMenuItem [réf. nécessaire]
Props:
  Valeur: 'tout'
  Valeur: 'id'
  items:
    - label:« Backlog »
      Définition: Backlog
    - label:« Tout »
      ID: « tout »
    - label:« En cours »
      id: 'in_progress'
    - label:« Réalisé »
      ID: "fait"
  Catégorie: W-48
---
::

::tip
Utilisez la prop `by` pour comparer des objets par un champ au lieu de la référence lorsque le `model-value` est un objet.
::

@@ph131@@multiple

Utilisez la prop `multiple` pour permettre des sélections multiples, les éléments sélectionnés seront séparés par une virgule dans le déclencheur.

::component-code
---
Étiquette: true
ignorer:
  - modèleValeur
  @@ph134@articles
  @@ph135@@multiple
  @@ph136@classe
Extérieure:
  @@ph137@articles
  - modelValeur
Props:
  Modélisation:
    @139@Backlog
    @@P140@tout
  Multiple: vrai
  items:
    @@141@@référencement
    @@ph142@tout
    - En cours
    @@ph144@fait
  Catégorie: W-48
---
::

::caution
Assurez-vous de passer un tableau à la prop `default-value` ou à la directive `v-model`.
::

### Placeholder

Utilisez la prop `placeholder` pour définir un texte d'espace réservé.

::component-code
---
Étiquette: true
Ignorer:
  @@ph149@articles
  @@ph150@classe
Extérieure:
  @@ph151@articles
Props:
  placeholder: "Sélectionner le statut"
  items:
    @@2015@Backlog
    @@P153@tout
    - En cours
    @@ph155@réalisé
  Catégorie: W-48
---
::

### Recherche d'entrée

Utilisez la prop `search-input` pour personnaliser ou masquer l'entrée de recherche (avec la valeur `false`).

Vous pouvez passer n'importe quelle propriété du composant [Input](/docs/components/input) pour la personnaliser.

::component-code
---
Étiquette: true
Ignorer:
  - modelValue.label
  - modelValue.icon
  @@ph165@articles
  @@ph166@classe
Extérieure:
  @@ph167@articles
  - modelValeur
Extérieurs:
  - SelectMenuItem [réf. nécessaire]
Props:
  Modélisation:
    Étiquette: backlog
    icon: 'i-lucide-circle-help'
  SearchInput:
    réservé:'Filter...'
    icon: 'i-lucide-search'
  items:
    - label: Développeur
      icon: 'i-lucide-circle-help'
    - label: tout
      Icône: i-lucide-circle-plus
    - label: En cours
      icon: 'i-lucide-circle-arrow-up'
    - label: réalisé
      Icône: i-lucide-circle-check
  Catégorie: W-48
---
::

::tip
Vous pouvez définir la prop `search-input` à `false` pour masquer l'entrée de recherche.
::

::note
Utilisez `:search-input="{ autofocus: false }"` pour éviter que la saisie de recherche ne soit focalisée lorsque le menu s'ouvre, par exemple pour éviter d'ouvrir le clavier virtuel sur les appareils tactiles.
::

@177@contenu

Utilisez la prop `content` pour contrôler la façon dont le contenu SelectMenu est rendu, comme son `align` ou `side` par exemple.

::component-code
---
Étiquette: true
Ignorer:
  @@ph181@articles
  - modèleValeur
  @@ph183@classe
Extérieure:
  @@ph184@articles
  - modèleValeur
items:
  content.align:
    @@ph186@départ
    - centre
    @@ph188@fin
  content.side:
    @@ph189@droite
    @@ph190@left
    @@ph191@top
    @@ph192@bottom
Props:
  Valeur: 'Backlog'
  contenu:
    Alignement: Centre
    Étiquette: bottom
    SideOffset: 8
  items:
    @@P193@@Backlog
    @@ph194@tout
    - En cours
    @@ph196@fait
  Catégorie: W-48
---
::

### Arrivée

Utilisez la prop `arrow` pour afficher une flèche dans le SelectMenu.

::component-code
---
Étiquette: true
Ignorer:
  @@ph199@articles
  - modèleValeur
  @@ph201@classe
  @@202@@Fédération
Extérieur:
  @@ph203@articles
  - modèleValeur
Props:
  Valeur: 'Backlog'
  Arrow: vrai
  items:
    @2015@Backlog
    @206@tout
    @@207@En cours
    @208@fait
  Catégorie: W-48
---
::

@209@couleur

Utilisez la prop `color` pour changer la couleur de la bague lorsque le SelectMenu est focalisé.

::component-code
---
Étiquette: true
Ignorer:
  @@ph211@articles
  - modèleValeur
  @@ph213@classe
Extérieure:
  @@ph214@articles
  - modelValeur
Props:
  Valeur: 'Backlog'
  Couleur: Neutre
  Highlight: vrai
  items:
    @@216@Backlog
    @217@tout
    - En cours
    @@ph219@fait
  Catégorie: W-48
---
::

::note
Le `highlight` prop est utilisé ici pour afficher l'état de mise au point. Il est utilisé en interne lorsqu 'une erreur de validation se produit.
::

@@221@@Variant

Utilisez la prop `variant` pour modifier la variante du SelectMenu.

::component-code
---
Étiquette: true
Ignorer:
  @@223@articles
  - modèleValeur
  @@ph225@classe
Extérieure:
  @@226@articles
  - modèleValeur
Props:
  Valeur: 'Backlog'
  Couleur: Neutre
  Variante: subtile
  Étiquette: false
  items:
    @@228@Backlog
    @229@tout
    - En cours
    @@ph231@fait
  Catégorie: W-48
---
::

@@ph232@@Size

Utilisez la prop `size` pour modifier la taille du SelectMenu.

::component-code
---
Étiquette: true
Ignorer:
  @@ph234@articles
  - modèleValeur
  @@ph236@classe
Extérieure:
  @@ph237@articles
  - modelValeur
Props:
  Valeur: 'Backlog'
  Taille: XL
  items:
    @@239@Backlog
    @@ph240@tout
    - En cours
    @@242@réponse
  Catégorie: W-48
---
::

@@243@@Icon

Utilisez la prop `icon` pour afficher un [Icon](/docs/components/icon) dans le SelectMenu.

::component-code
---
Étiquette: true
Ignorer:
  @@ph249@articles
  - modèleValeur
  @@ph251@@classe
Extérieur:
  @@252@articles
  - modèleValeur
Props:
  Valeur: 'Backlog'
  icon: 'i-lucide-search'
  Étiquette: MD
  items:
    @@254@Backlog
    @@ph255@tout
    - En cours
    @257@fait
  Catégorie: W-48
---
::

### Trailing Icône

Utilisez le prop `trailing-icon` pour personnaliser le [Icon](/docs/components/icon).

::component-code
---
Étiquette: true
ignorer:
  @@ph265@articles
  - modelValeur
  @@ph267@classe
Extérieur:
  @@ph268@articles
  - modelValeur
Props:
  Valeur: 'Backlog'
  trailingIcône:'i-lucide-arrow-down'
  Taille: MD
  items:
    @@270@Backlog
    @@ph271@tout
    @@272@En cours
    @@ph273@réponse
  Catégorie: W-48
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
  @@ph281@articles
  - modèleValeur
  @@ph283@classe
Extérieure:
  @@ph284@articles
  - modèleValeur
Props:
  Valeur: 'Backlog'
  sélectionnéIcône:'i-lucide-flame'
  Taille: MD
  items:
    @@286@référencement
    @@ph287@tout
    - En cours
    @@ph289@fait
  Catégorie: W-48
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
Ignorer:
  @@297@articles
  - modèleValeur
  @@ph299@classe
Extérieur:
  @@ph300@articles
  - modèleValeur
items:
  Clair:
    @@ph302@vrai
    @@F303@faux
Props:
  Valeur: 'Backlog'
  Étiquette: true
  items:
    @304@Backlog
    @@P305@tout
    - En cours
    @@ph307@fait
  Catégorie: W-48
---
::

### Clear Icon: badge{label="4.4+" class="align-text-top"}

Utilisez le prop `clear-icon` pour personnaliser le bouton clair [Icon](/docs/components/icon).

::component-code
---
Étiquette: true
Ignorer:
  @@ph316@articles
  - modèle
  @@ph318@classe
Extérieure:
  @@ph319@articles
  - modèle
items:
  Clair:
    @@ph321@@vrai
    @@F322@faux
Props:
  Valeur: 'Backlog'
  Étiquette: true
  clearIcon: 'i-lucide-trash'
  items:
    @@223@@Backlog
    @@ph324@tout
    - En cours
    @@ph326@réalisé
  Catégorie: W-48
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

@331@@Avatar

Utilisez la prop `avatar` pour afficher un [Avatar](/docs/components/avatar) dans le SelectMenu.

::component-code
---
Étiquette: true
Ignorer:
  @@ph337@articles
  - modelValeur
  @@ph339@classe
  - avatar.chargement
Extérieure:
  @@ph341@articles
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
  Catégorie: W-48
---
::

### chargement

Utilisez la prop `loading` pour afficher une icône de chargement sur le SelectMenu.

::component-code
---
Étiquette: true
ignorer:
  @@ph350@articles
  - modèleValeur
  @@ph352@classe
Extérieure:
  @@ph353@articles
  - modèleValeur
Props:
  Valeur: 'Backlog'
  Chargement: vrai
  Traînée: Faux
  items:
    - Backlog
    @@P356@tout
    - En cours
    @@ph358@réalisé
  Catégorie: W-48
---
::

### Icône de chargement

Utilisez la prop `loading-icon` pour personnaliser l'icône de chargement. Par défaut,`i-lucide-loader-circle`.

::component-code
---
Étiquette: true
ignorer:
  @@ph362@articles
  - modèleValeur
  @@ph364@classe
Extérieure:
  @@ph365@articles
  - modèleValeur
Props:
  Valeur: 'Backlog'
  Chargement: vrai
  loadingIcon: 'i-lucide-loader'
  items:
    @367@Backlog
    @@ph368@tout
    - En cours
    @@ph370@réalisé
  Catégorie: W-48
---
::

::framework-only
#numérique
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.loading`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
You can customize this icon globally in your `vite.config.ts` under `ui.icons.loading` key.
:::
::

### désactivé

Utilisez la prop `disabled` pour désactiver le SelectMenu.

::component-code
---
Étiquette: true
Ignorer:
  @@ph377@articles
  @@ph378@réservoir
  @@ph379@classe
Extérieure:
  @@ph380@articles
Props:
  handicapés: vrai
  placeholder: "Sélectionner le statut"
  items:
    @381@Backlog
    @@ph382@tout
    - En cours
    @@ph384@réalisé
  Catégorie: W-48
---
::

@@ph385@exemples

### Avec le type d'éléments

Vous pouvez utiliser la propriété `type` avec `separator` pour afficher un séparateur entre les éléments ou `label` pour afficher une étiquette.

::component-code
---
Collapse: vrai
ignorer:
  - modèleValeur
  @@ph391@articles
  @@ph392@classe
Extérieur:
  @393@articles
  - modèleValeur
Extérieurs:
  - SelectMenuItem [réf. nécessaire]
Props:
  Modèle:"Apple"
  items:
    - -type: 'étiquette'
        Étiquette: fruits
      @@ph397@apple
      - Banane
      @@ph399@blueberry
      - Référencement
      @Pineapple 401 @ Pineapple
    - -type: 'étiquette'
        Étiquette:"légumes"
      - Aubergine
      @404@broccoli
      - Carotte
      @406@courgette
      @407@@Lénine
  Catégorie: W-48
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
nom: 'select-menu-items-icon-example'
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
name: 'select-menu-items-avatar-example'
---
::

::tip
Vous pouvez également utiliser l'emplacement `#leading` pour afficher l'avatar sélectionné.
::

### Avec puce dans les articles

Vous pouvez utiliser la propriété `chip` pour afficher un [Chip](/docs/components/chip) à l'intérieur des éléments.

::component-example
---
Collapse: vrai
nom: 'select-menu-items-chip-example'
---
::

::note
Dans cet exemple, le slot `#leading` est utilisé pour afficher la puce sélectionnée.
::

### Control état ouvert

Vous pouvez contrôler l'état ouvert en utilisant la prop `default-open` ou la directive `v-model:open`.

::component-example
---
nommé:'select-menu-open-example'
---
::

::note
Dans cet exemple, en utilisant [`defineShortcuts`](/docs/composables/define-shortcuts), vous pouvez basculer le SelectMenu en appuyant sur: kbd{value="O"}.
::

### Contrôle terme de recherche

Utilisez la directive `v-model:search-term` pour contrôler le terme de recherche.

::component-example
---
name: 'select-menu-search-term-example'
---
::

### Avec icône tournante

Voici un exemple avec une icône tournante qui indique l'état ouvert du SelectMenu.

::component-example
---
nom: 'select-menu-icon-exemple'
---
::

### Avec créer l'élément

Utilisez la prop `create-item` pour permettre aux utilisateurs d'ajouter des valeurs personnalisées qui ne figurent pas dans les options prédéfinies.

::component-example
---
Collapse: vrai
nom: 'select-menu-create-item-example'
---
::

::note
L'option create affiche quand aucune correspondance n'est trouvée par défaut. Définissez-la sur `always` pour l'afficher même lorsque des valeurs similaires existent.
::

::tip{to="#emits"}
Utilisez l'événement `@create` pour gérer la création de l'élément. Vous recevrez l'événement et l'élément en tant qu 'arguments.
::

### Avec les éléments récupérés

Vous pouvez récupérer des éléments à partir d'une API et les utiliser dans le SelectMenu.

::component-example
---
Collapse: vrai
nom: 'select-menu-fetch-example'
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
name: 'select-menu-ignore-filter-example'
---
::

::note
Cet exemple utilise [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced) pour déboulonner les appels d'API. La récupération est différée avec `immediate: false` donc aucune demande n'est faite jusqu'à ce que le menu s'ouvre.
::

### Avec champs de filtre

Utilisez la prop `filter-fields` avec un tableau de champs pour filtrer.

::component-example
---
Collapse: vrai
nom: 'select-menu-filter-fields-example'
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
nom: 'select-menu-virtualise-exemple'
---
::

### Avec défilement infini: badge{label="4.4+" class="align-text-top"}

Vous pouvez utiliser le [`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/) pour charger plus de données au fur et à mesure que l'utilisateur fait défiler.

::component-example
---
Étiquette: true
Collapse: vrai
Highlights:
  @474@41
  @@575 @ 51
dépassement: true
name: 'select-menu-infinite-scroll-exemple'
---
::

::note
Cet exemple utilise `useLazyFetch` avec `immediate: false` afin que les données ne soient chargées que lorsque l'utilisateur fait défiler.
::

### Avec largeur de contenu complète

Vous pouvez étendre le contenu à toute la largeur de ses éléments en ajoutant la classe `min-w-fit` sur l'emplacement `ui.content`.

::component-example
---
name: 'select-menu-content-width-example'
Collapse: vrai
---
::

::tip
Vous pouvez également modifier la largeur du contenu globalement dans votre `app.config.ts`:

```
export default defineAppConfig({
  ui: {
    selectMenu: {
      slots: {
        content: 'min-w-fit'
      }
    }
  }
})
```
::

### Comme sélecteur de pays

Vous pouvez utiliser le SelectMenu comme sélecteur de pays avec un chargement paresseux. Les pays ne sont récupérés que lorsque le menu est ouvert pour la première fois.

::component-example
---
Collapse: vrai
nom: 'select-menu-countries-exemple'
---
::

::note
Cet exemple utilise `useLazyFetch` avec `immediate: false` pour charger uniquement les pays lorsque le menu est ouvert pour la première fois.
::

@@ph496@api

@@ph497@@props

Composants-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Ce composant prend également en charge tous les attributs HTML natifs `<button>`.
::

@@ph499@@Slots

Composants slots

### émissions

Composants émetteurs

### Exposé

Lorsque vous accédez au composant via une référence de modèle, vous pouvez utiliser les éléments suivants:

| nom| type|
| ---- | ---- |
| @@|@@|
| @@|@@|

## thème

Composant-thème

@511@changements

Composant-changelog
