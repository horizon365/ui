---
description: Une liste sélectionnable d'éléments avec recherche, virtualisation et rendu d'éléments enrichi.
category: form
keywords:
  - option list
  - picker
  - selection
links:
  - label: Listébox
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/listbox
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Listbox.vue
---

@@ph000@utilisation

Utilisez la directive `v-model` pour contrôler la valeur de la boîte de liste ou la prop `default-value` pour définir la valeur initiale lorsque vous n'avez pas besoin de contrôler son état.

::component-code
---
Collapse: vrai
Caché:
  @@ph003@classe
Ignorer:
  - modelValue.label
  - modelValue.icon
  - modelValue.valeur
  @@ph007@articles
Extérieure:
  @@ph008@articles
  - modèleValeur
Extérieurs:
  @@P0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Modélisation:
    Étiquette:"France"
    Icône: i-lucide-map-pin
    Valeur: 'FR'
  items:
    - label:« France »
      Icône: i-lucide-map-pin
      Valeur: 'FR'
    - label:'Allemagne'
      Icône: i-lucide-map-pin
      Valeur: "DE"
    - label:'Italie'
      Icône: i-lucide-map-pin
      Valeur: "IT"
    - label:'États-Unis'
      Icône: i-lucide-map-pin
      Valeur: "ES"
    - label:'France'
      Icône: i-lucide-map-pin
      Valeur: 'NL'
    - label:'Pologne'
      Icône: i-lucide-map-pin
      Valeur: PL
    - label:'Belgique'
      Icône: i-lucide-map-pin
      Valeur: "BE"
    - label:'Écosse'
      Icône: i-lucide-map-pin
      Valeur: 'PT'
    - label:'Autriche'
      Icône: i-lucide-map-pin
      Valeur: "AT"
    - label:'Suède'
      Icône: i-lucide-map-pin
      Valeur: "se"
  Catégorie: w-full
---
::

@21@@pourquoi

Utilisez le `items` prop comme un tableau d'objets avec les propriétés suivantes:

@@
@@
@@
@@
[`avatar?: AvatarProps`{lang="ts-type"}](#with-avatar-in-items)
@@
@@
@@
@@
@@

::component-code
---
Collapse: vrai
Caché:
  @@ph073@classe
ignorer:
  @@ph074@articles
Extérieure:
  @@75@éléments
Extérieurs:
  @@776@@listboxItem [réf. nécessaire]
Props:
  items:
    - label:'France'
      Titre: "L'Hexagone"
      Icône: i-lucide-map-pin
      Valeur: 'FR'
    - label:'Allemagne'
      Description: "République fédérale"
      Icône: i-lucide-map-pin
      Valeur: 'DE'
    - label:'Italie'
      Description: Le bateau
      Icône: i-lucide-map-pin
      Valeur: "IT"
    - label:'France'
      Titre: La peau de taureau
      Icône: i-lucide-map-pin
      Valeur: "ES"
  Catégorie: w-full
---
::

Vous pouvez également passer un tableau de tableaux à la prop `items` pour afficher des groupes d'éléments séparés.

::component-code
---
Collapse: vrai
Caché:
  @@ph082@classe
ignorer:
  @@ph083@articles
Extérieur:
  @@ph084@articles
Extérieurs:
  @@885@885 [][]
Props:
  items:
    - -étiquette:'France'
        Icône: i-lucide-map-pin
        Valeur: 'FR'
      - label:'Allemagne'
        Icône: i-lucide-map-pin
        Valeur: 'DE'
      - label:'Italie'
        Icône: i-lucide-map-pin
        Valeur: "IT"
    - -étiquette:'Brésil'
        Icône: i-lucide-map-pin
        Valeur: "BR"
      - label:« Argentine »
        Icône: i-lucide-map-pin
        Valeur: 'AR'
  Catégorie: w-full
---
::

@@ph091@@multiple

Utilisez la prop `multiple` pour permettre la sélection de plusieurs éléments. Lorsqu 'elle est activée, la prop `v-model` sera un tableau.

::component-code
---
Collapse: vrai
Caché:
  @@ph094@classe
ignorer:
  @@@ph095@articles
  @@ph096@multiple
Extérieure:
  @@ph097@articles
Extérieurs:
  @@P098@@ListboxItem []
Props:
  Multiple: Vrai
  items:
    - label:'France'
      Icône: i-lucide-map-pin
      Valeur: 'FR'
    - label:'Allemagne'
      Icône: i-lucide-map-pin
      Valeur: 'DE'
    - label:'Italie'
      Icône: i-lucide-map-pin
      Valeur: "IT"
    - label:« France »
      Icône: i-lucide-map-pin
      Valeur: "ES"
  Catégorie: w-full
---
::

### Clé de valeur

Vous pouvez choisir de lier une seule propriété de l'objet plutôt que l'objet entier en utilisant la prop.`value-key`. Par défaut à `undefined`.

::component-code
---
Collapse: vrai
Ignorer:
  - modèle
  - valueKey
  @@ph108@articles
  @@ph109@classe
Extérieur:
  @@ph110@articles
  - modèleValeur
Extérieurs:
  @@112@listboxItem []
Props:
  Modèle:'FR'
  valueKey: 'valeur'
  items:
    - label:« France »
      Icône: i-lucide-map-pin
      Valeur: 'FR'
    - label:'Allemagne'
      Icône: i-lucide-map-pin
      Valeur: 'DE'
    - label:'Italie'
      Icône: i-lucide-map-pin
      Valeur: "IT"
    - label:'États-Unis'
      Icône: i-lucide-map-pin
      Valeur: "ES"
  Catégorie: w-full
---
::

@117@Filtrer

Utilisez le prop `filter` pour afficher une entrée de filtre ou passer un objet pour personnaliser le composant [Input](/docs/components/input).

::component-code
---
Collapse: vrai
Caché:
  @@ph124@classe
Ignorer:
  @@ph125@articles
Extérieure:
  @@ph126@articles
Extérieurs:
  @@ph127@@listboxItem []
Props:
  filtre:
    réservé:'Filter...'
    icon: 'i-lucide-search'
  items:
    - label:« France »
      Icône: i-lucide-map-pin
      Valeur: 'FR'
    - label:'Allemagne'
      Icône: i-lucide-map-pin
      Valeur: "DE"
    - label:'Italie'
      Icône: i-lucide-map-pin
      Valeur: "IT"
    - label:'États-Unis'
      Icône: i-lucide-map-pin
      Valeur: "ES"
    - label:'France'
      Icône: i-lucide-map-pin
      Valeur: 'NL'
    - label:'Pologne'
      Icône: i-lucide-map-pin
      Valeur: PL
  Catégorie: w-full
---
::

### Icône sélectionnée

Utilisez la prop `selected-icon` pour personnaliser l'icône lorsqu 'un élément est sélectionné. Par défaut à `i-lucide-check`.

::component-code
---
Collapse: vrai
Ignorer:
  @@ph137@articles
  - modelValeur
  @@ph139@@valueKey
  @@ph140@classe
Extérieur:
  @@ph141@articles
  - modèleValeur
Extérieurs:
  @@ph143@@listboxItem []
Props:
  Modèle:'FR'
  sélectionnéIcône:'i-lucide-flame'
  valueKey: 'valeur'
  items:
    - label:'France'
      Icône: i-lucide-map-pin
      Valeur: 'FR'
    - label:'Allemagne'
      Icône: i-lucide-map-pin
      Valeur: 'DE'
    - label:'Italie'
      Icône: i-lucide-map-pin
      Valeur: "IT"
    - label:'France'
      Icône: i-lucide-map-pin
      Valeur: "ES"
  Catégorie: w-full
---
::

@@ph148@@Size

Utilisez la prop `size` pour modifier la taille de la boîte de liste.

::component-code
---
Collapse: vrai
Caché:
  @@ph150@classe
ignorer:
  @@ph151@articles
Extérieure:
  @@ph152@articles
Extérieurs:
  @@P153@@ListboxItem [réf. nécessaire]
Props:
  Taille: XL
  items:
    - label:'France'
      Icône: i-lucide-map-pin
      Valeur: 'FR'
    - label:'Allemagne'
      Icône: i-lucide-map-pin
      Valeur: 'DE'
    - label:'Italie'
      Icône: i-lucide-map-pin
      Valeur: "IT"
    - label:'États-Unis'
      Icône: i-lucide-map-pin
      Valeur: "ES"
  Catégorie: w-full
---
::

### Chargement

Utilisez la prop `loading` pour afficher un indicateur de chargement. Utilisez la prop `loading-icon` pour personnaliser l'icône.

::component-code
---
Collapse: vrai
Caché:
  @@ph161@classe
Ignorer:
  @@ph162@articles
Extérieur:
  @@ph163@articles
Extérieurs:
  @@ph164@@listboxItem []
Props:
  Chargement: vrai
  items:
    - label:'France'
      Icône: i-lucide-map-pin
      Valeur: 'FR'
    - label:'Allemagne'
      Icône: i-lucide-map-pin
      Valeur: "DE"
  Catégorie: w-full
---
::

### désactivé

Utilisez la prop `disabled` pour empêcher toute interaction de l'utilisateur avec la boîte de liste.

::component-code
---
Collapse: vrai
Caché:
  @@ph169@classe
ignorer:
  @@ph170@articles
Extérieure:
  @@ph171@articles
Extérieurs:
  @@2017@listboxItem []
Props:
  handicapés: vrai
  items:
    - label:« France »
      Icône: i-lucide-map-pin
      Valeur: 'FR'
    - label:'Allemagne'
      Icône: i-lucide-map-pin
      Valeur: "DE"
    - label:'Italie'
      Icône: i-lucide-map-pin
      Valeur: "IT"
    - label:'États-Unis'
      Icône: i-lucide-map-pin
      Valeur: "ES"
  Catégorie: w-full
---
::

## Exemples

### Avec type d'éléments

Vous pouvez utiliser la propriété `type` avec `separator` pour afficher un séparateur entre les éléments ou `label` pour afficher une étiquette.

::component-code
---
Collapse: vrai
Caché:
  @@ph182@classe
ignorer:
  @@ph183@articles
Extérieure:
  @@ph184@articles
Extérieurs:
  @@185@@listboxItem [][]
Props:
  items:
    - -type: 'étiquette'
        Étiquette: fruits
      - label:« Apple »
      - label:« Banane »
      - label:« Blueberry »
      - label:"Les raisins"
      - label:« Pineapple »
    - -type: 'étiquette'
        Étiquette:"légumes"
      - label:'Aubergine'
      - label:« Broccoli »
      - label:« Carotte »
      - label:'Courgette'
      - label:« Leek »
  Catégorie: w-full
---
::

::note
Lorsque vous utilisez des éléments `label` comme en-têtes de groupe, passez un tableau de tableaux de sorte qu 'une étiquette soit filtrée avec son groupe lors de la recherche.
::

### Avec icône dans les éléments

Vous pouvez utiliser la propriété `icon` pour afficher une [Icon](/docs/components/icon) à l'intérieur des éléments.

::component-code
---
Collapse: vrai
Caché:
  @@ph205@classe
ignorer:
  @@ph206@articles
Extérieure:
  @@207@articles
Extérieurs:
  @@208@listboxItem []
Props:
  items:
    - label:'Backlog'
      icon: 'i-lucide-circle-help'
      Valeur: Backlog
    - label:« Tout »
      Icône: i-lucide-circle-plus
      Valeur: 'tout'
    - label:« En cours »
      icon: 'i-lucide-circle-arrow-up'
      valeur: 'in_progress'
    - label:« Réalisé »
      Icône: i-lucide-circle-check
      Valeur: "Done"
  Catégorie: w-full
---
::

### Avec avatar dans les articles

Vous pouvez utiliser la propriété `avatar` pour afficher un [Avatar](/docs/components/avatar) à l'intérieur des éléments.

::component-code
---
Collapse: vrai
Caché:
  @@ph219@classe
Ignorer:
  @220@articles
Extérieur:
  @@221@articles
Extérieurs:
  @222@222@222@2222@2222@2222@2222@2222@2222@22222@22222@222222@222222222222@222222222222222222@2222@222222@222222222222@22222222@2222222222@22222222222@222222222@2222222222@222222222222@222222222222@2222222222222@22222222222222222222@22222222222222222
Props:
  items:
    - label:« benjamincanac »
      Avatar:
        src: 'https://github.com/benjamincanac.png'
    - label:'HugoRCD'
      Avatar:
        src: 'https://github.com/HugoRCD.png'
    - label:'étiquette'
      Avatar:
        src: 'https://github.com/atinux.png'
    - label:'romhml'
      Avatar:
        src: 'https://github.com/romhml.png'
  Catégorie: w-full
---
::

### Avec puce dans les articles

Vous pouvez utiliser la propriété `chip` pour afficher un [Chip](/docs/components/chip) à l'intérieur des éléments.

::component-code
---
Collapse: vrai
Caché:
  @@ph233@classe
Ignorer:
  @@ph234@articles
Extérieure:
  @@ph235@articles
Extérieurs:
  @@236@@ListboxItem []
Props:
  items:
    - label:'bug'
      Chipé:
        Couleur: "Erreur"
    - label:'caractéristique'
      Chipé:
        Couleur: "Succès"
    - label:'amélioration'
      Chipé:
        Couleur: "info"
  Catégorie: w-full
---
::

### Avec description dans les éléments

Vous pouvez utiliser la propriété `description` pour afficher du texte supplémentaire sous l'étiquette.

::component-code
---
Collapse: vrai
Caché:
  @@ph242@classe
ignorer:
  @@ph243@articles
Extérieur:
  @@ph244@articles
Extérieurs:
  @@245@@listboxItem []
Props:
  items:
    - label:'France'
      Titre: "L'Hexagone"
      Icône: i-lucide-map-pin
      Valeur: 'FR'
    - label:'Allemagne'
      Description: "République fédérale"
      Icône: i-lucide-map-pin
      Valeur: "DE"
    - label:'Italie'
      Description: Le bateau
      Icône: i-lucide-map-pin
      Valeur: "IT"
    - label:'États-Unis'
      Titre: La peau de taureau
      Icône: i-lucide-map-pin
      Valeur: "ES"
  Catégorie: w-full
---
::

### Contrôle élément (s) sélectionné (s)

Vous pouvez contrôler l'élément sélectionné à l'aide de la prop `default-value` ou de la directive `v-model`.

::component-example
---
nom: 'listbox-modèle-valeur-exemple'
Collapse: vrai
---
::

### Contrôle terme de recherche

Utilisez la directive `v-model:search-term` pour contrôler le terme de recherche.

::component-example
---
nom: 'listbox-search-term-exemple'
---
::

### Avec filtre ignoré

Définissez la prop `ignore-filter` sur `true` pour désactiver la recherche interne et utiliser votre propre logique de recherche.

::component-example
---
Collapse: vrai
nom: 'listbox-ignore-filter-example'
---
::

::note
Cet exemple utilise [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced) pour déboulonner les appels d'API.
::

### Avec champs de filtre

Utilisez la prop `filter-fields` avec un tableau de champs pour filtrer. Defaults to `[labelKey]`.

::component-example
---
Collapse: vrai
nom: 'listbox-filter-fields-example'
---
::

### Avec la virtualisation

Utilisez la prop `virtualize` pour activer la virtualisation de grandes listes en tant que booléen ou objet avec des options telles que `{ estimateSize: 32, overscan: 12 }`.

::component-example
---
nom: 'listbox-virtualize-example'
Collapse: vrai
---
::

### En tant que liste de transfert

Vous pouvez composer deux composants Listbox avec [Button](/docs/components/button) pour créer un modèle de liste de transfert.

::component-example
---
nom: 'listbox-transfer-list-exemple'
Collapse: vrai
---
::

@@ph274@api

@275@propriétés

Composants-props

@@ph276@@Slots

Composants slots

@@277@émissions

Composants émetteurs

@278@thème

Composant-thème

@279@changements

Composant-changelog
