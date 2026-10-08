---
title: Commandée
description: Une palette de commandes avec recherche en texte intégral optimisée par Fuse.js pour une correspondance floue efficace.
category: navigation
keywords:
  - command menu
  - cmdk
  - spotlight
  - global search
links:
  - label: Fuse.js
    icon: i-custom-fuse-js
    to: https://fusejs.io/
    target: _blank
  - label: Listébox
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/listbox
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/CommandPalette.vue
---

@@ph000@utilisation

Utilisez la directive `v-model` pour contrôler la valeur de la CommandPalette ou la prop `default-value` pour définir la valeur initiale lorsque vous n'avez pas besoin de contrôler son état.

::component-code
---
Collapse: vrai
Caché:
  @@F003@autofocus
Ignorer:
  @@F004@groupes
  - modèleValeur
  @@ph006@classe
Extérieure:
  @@F007@groupes
  - modèleValeur
Extérieurs:
  - CommandPaletteGroup [réf. nécessaire]
classe: '! p-0'
Props:
  Modèle:{}
  Autofocus: Faux
  Groups:
    - id:'utilisateurs'
      Étiquette:"Utilisateurs"
      items:
        - label:« Benjamin Canac »
          Prénom: benjamincanac
          Avatar:
            src: 'https://github.com/benjamincanac.png'
            Étiquette: Lazy
        - label:« Hugo Richard »
          suffixe: "HugoRCD"
          Avatar:
            src: 'https://github.com/HugoRCD.png'
            Étiquette: Lazy
        - label: Sébastien Chopin
          Suffixe: Atinux
          Avatar:
            src: 'https://github.com/atinux.png'
            Étiquette: Lazy
        - label:'Romain Hamel'
          suffixe: "romhml"
          Avatar:
            src: 'https://github.com/romhml.png'
            Étiquette: Lazy
        - label:« Sandro Circi »
          suffixe: 'sandros94'
          Avatar:
            src: 'https://github.com/sandros94.png'
            Étiquette: Lazy
        - label:« Jakub Michálek »
          Suffixe: J-Michalek
          Avatar:
            src: 'https://github.com/J-Michalek.png'
            Étiquette: Lazy
        - label:"Alex"
          Suffixe: hywax
          Avatar:
            src: 'https://github.com/hywax.png'
            Étiquette: Lazy
        - label:'Maxime Pauvert'
          suffixe: "maximopvrt"
          Avatar:
            src: 'https://github.com/maximepvrt.png'
            Étiquette: Lazy
  classe: 'flex-1 h-80'
---
::

::tip{to="#control-selected-items"}
Vous pouvez également utiliser l'événement `@update:model-value` pour écouter le ou les éléments sélectionnés.
::

@@21@groupes

Le composant CommandPalette filtre les groupes et classe les commandes correspondantes selon leur pertinence selon le type de l'utilisateur. Il fournit des résultats de recherche dynamiques et instantanés pour une découverte efficace des commandes. Utilisez le prop `groups` comme un tableau d'objets avec les propriétés suivantes:

@@
@@
@@
@@
@@
[`postFilter?: (searchTerm: string, items: T[]) => T[]`{lang="ts-type"}](#with-post-filtered-items)
@@

::caution
Vous devez fournir un `id` pour chaque groupe, sinon le groupe sera ignoré.
::

Chaque groupe contient un tableau `items` d'objets qui définissent les commandes. Chaque élément peut avoir les propriétés suivantes:

@@
@@
@@
@@
@@
@@
@@
@@
@@
@@
[`slot?: string`{lang="ts-type"}](PH0888)
@@
@@
@@
@@
@@

Vous pouvez transmettre n'importe quelle propriété du composant [Link](/docs/components/link#props) comme `to`,`target`, etc.

::component-code
---
Collapse: vrai
Caché:
  - autofocus
ignorer:
  @@113@groupes
  - modèleValeur
  @@classe 115
Extérieure:
  @@116@groupes
  - modèleValeur
Extérieurs:
  - CommandPaletteGroup [réf. nécessaire]
classe: '! p-0'
Props:
  Modèle:{}
  Autofocus: faux
  groupes:
    - id:'utilisateurs'
      Étiquette:"Utilisateurs"
      items:
        - label:« Benjamin Canac »
          Prénom: benjamincanac
          Avatar:
            src: 'https://github.com/benjamincanac.png'
            Étiquette: Lazy
        - label:« Hugo Richard »
          suffixe: "HugoRCD"
          Avatar:
            src: 'https://github.com/HugoRCD.png'
            Étiquette: Lazy
        - label: Sébastien Chopin
          Suffixe: Atinux
          Avatar:
            src: 'https://github.com/atinux.png'
            Étiquette: Lazy
        - label:'Romain Hamel'
          suffixe: "romhml"
          Avatar:
            src: 'https://github.com/romhml.png'
            Étiquette: Lazy
        - label:« Sandro Circi »
          suffixe: 'sandros94'
          Avatar:
            src: 'https://github.com/sandros94.png'
            Étiquette: Lazy
        - label:« Jakub Michálek »
          Suffixe: J-Michalek
          Avatar:
            src: 'https://github.com/J-Michalek.png'
            Étiquette: Lazy
        - label:« Alex »
          Suffixe: hywax
          Avatar:
            src: 'https://github.com/hywax.png'
            Étiquette: Lazy
        - label:"Maxime Pauvert"
          suffixe: "maximopvrt"
          Avatar:
            src: 'https://github.com/maximepvrt.png'
            Étiquette: Lazy
  Classe: Flex-1
---
::

::tip{to="#with-children-in-items"}
Chaque élément peut prendre un tableau d'objets `children` avec les propriétés suivantes pour créer des sous-menus:
::

@@P130@@multiple

Utilisez la prop `multiple` pour permettre plusieurs sélections.

::component-code
---
Collapse: vrai
Caché:
  - autofocus
Ignorer:
  - groupes
  - modèleValeur
  @@ph135@@multiple
  @@ph136@classe
Extérieure:
  @@ph137@groupes
  - modelValeur
Extérieurs:
  - CommandPaletteGroup [réf. nécessaire]
classe: '! p-0'
Props:
  Multiple: Vrai
  Autofocus: faux
  Modèle:[]
  groupes:
    - id:'utilisateurs'
      Étiquette:"Utilisateurs"
      items:
        - label:« Benjamin Canac »
          Prénom: benjamincanac
          Avatar:
            src: 'https://github.com/benjamincanac.png'
            Étiquette: Lazy
        - label:« Hugo Richard »
          suffixe: "HugoRCD"
          Avatar:
            src: 'https://github.com/HugoRCD.png'
            Étiquette: Lazy
        - label: Sébastien Chopin
          Suffixe: Atinux
          Avatar:
            src: 'https://github.com/atinux.png'
            Étiquette: Lazy
        - label:'Romain Hamel'
          suffixe: "romhml"
          Avatar:
            src: 'https://github.com/romhml.png'
            Étiquette: Lazy
        - label:« Sandro Circi »
          suffixe: 'sandros94'
          Avatar:
            src: 'https://github.com/sandros94.png'
            Étiquette: Lazy
        - label:« Jakub Michálek »
          Suffixe: J-Michalek
          Avatar:
            src: 'https://github.com/J-Michalek.png'
            Étiquette: Lazy
        - label:« Alex »
          Suffixe: hywax
          Avatar:
            src: 'https://github.com/hywax.png'
            Étiquette: Lazy
        - label:'Maxime Pauvert'
          suffixe: "maximopvrt"
          Avatar:
            src: 'https://github.com/maximepvrt.png'
            Étiquette: Lazy
  Classe: Flex-1
---
::

::caution
Assurez-vous de passer un tableau à la prop `default-value` ou à la directive `v-model`.
::

### Placeholder

Utilisez la prop `placeholder` pour modifier le texte de l'espace réservé.

::component-code
---
Collapse: vrai
Caché:
  - autofocus
ignorer:
  @@ph154@classe
  - groupes
Extérieure:
  - groupes
Extérieurs:
  - CommandPaletteGroup [réf. nécessaire]
classe: '! p-0'
Props:
  Autofocus: faux
  placeholder: "Rechercher une application..."
  groupes:
    - id:'applications'
      items:
        - label:'Calendrier'
          icon: 'i-lucide-calendrier'
        - label:"Musique"
          icon: 'i-lucide-musique'
        - label:« Cartes »
          Icône:'i-lucide-map'
  Classe: Flex-1
---
::

### Taille: badge{label="4.4+" class="align-text-top"}

Utilisez la prop `size` pour modifier la taille de la CommandPalette.

::component-code
---
Collapse: vrai
Caché:
  - autofocus
ignorer:
  @@ph166@classe
  @@ph167@groupes
Extérieur:
  @@ph168@groupes
Extérieurs:
  - CommandPaletteGroup [réf. nécessaire]
classe: '! p-0'
Props:
  Autofocus: Faux
  Taille: "XL"
  groupes:
    - id:'applications'
      items:
        - label:'Calendrier'
          icon: 'i-lucide-calendrier'
        - label:"Musique"
          icon: 'i-lucide-musique'
        - label:« Cartes »
          Icône:'i-lucide-map'
  Classe: Flex-1
---
::

@@P174 @ Icon

Utilisez le prop `icon` pour personnaliser l'entrée [Icon](/docs/components/icon).

::component-code
---
Collapse: vrai
Caché:
  - autofocus
ignorer:
  @@ph182@classe
  @@ph183@groupes
Extérieure:
  @@ph184@groupes
Extérieurs:
  - CommandPaletteGroup [réf. nécessaire]
classe: '! p-0'
Props:
  Autofocus: faux
  Icône: i-lucide-box
  groupes:
    - id:'applications'
      items:
        - label:'Calendrier'
          icon: 'i-lucide-calendrier'
        - label:"Musique"
          icon: 'i-lucide-musique'
        - label:« Cartes »
          Icône:'i-lucide-map'
  Classe: Flex-1
---
::

::framework-only
#numérique
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.search`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.search`.
:::
::

### Icône sélectionnée

Utilisez la prop `selected-icon` pour personnaliser l'élément sélectionné [Icon](/docs/components/icon).

::component-code
---
Collapse: vrai
Caché:
  - autofocus
Ignorer:
  @202@groupes
  - modèle
  @@ph204@multiple
  @@ph205@classe
Extérieur:
  @206@groupes
  - modelValeur
Extérieurs:
  - CommandPaletteGroup [réf. nécessaire]
classe: '! p-0'
Props:
  Multiple: Vrai
  Autofocus: Faux
  Modèle:
    - label:'Benjamin Canac'
      Prénom: benjamincanac
      Avatar:
        src: 'https://github.com/benjamincanac.png'
        Étiquette: Lazy
  sélectionnéIcône:'i-lucide-circle-check'
  groupes:
    - id:'utilisateurs'
      Étiquette:"Utilisateurs"
      items:
        - label:« Benjamin Canac »
          Prénom: benjamincanac
          Avatar:
            src: 'https://github.com/benjamincanac.png'
            Étiquette: Lazy
        - label:« Hugo Richard »
          suffixe: "HugoRCD"
          Avatar:
            src: 'https://github.com/HugoRCD.png'
            Étiquette: Lazy
        - label: Sébastien Chopin
          Suffixe: Atinux
          Avatar:
            src: 'https://github.com/atinux.png'
            Étiquette: Lazy
        - label:'Romain Hamel'
          suffixe: "romhml"
          Avatar:
            src: 'https://github.com/romhml.png'
            Étiquette: Lazy
        - label:« Sandro Circi »
          suffixe: 'sandros94'
          Avatar:
            src: 'https://github.com/sandros94.png'
            Étiquette: Lazy
        - label:« Jakub Michálek »
          Suffixe: J-Michalek
          Avatar:
            src: 'https://github.com/J-Michalek.png'
            Étiquette: Lazy
        - label:« Alex »
          Suffixe: hywax
          Avatar:
            src: 'https://github.com/hywax.png'
            Étiquette: Lazy
        - label:'Maxime Pauvert'
          suffixe: "maximopvrt"
          Avatar:
            src: 'https://github.com/maximepvrt.png'
            Étiquette: Lazy
  Classe: Flex-1
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

### Trailing Icône

Utilisez la prop `trailing-icon` pour personnaliser la [Icon](/docs/components/icon) lorsqu 'un élément a des enfants. Par défaut à `i-lucide-chevron-right`.

::component-code
---
Collapse: vrai
Étiquette: true
Caché:
  - autofocus
Ignorer:
  @@231@groupes
  @@ph232@classe
Extérieure:
  @@233@groupes
Extérieurs:
  - CommandPaletteGroup [réf. nécessaire]
classe: '! p-0'
Props:
  Autofocus: faux
  trailingIcône:'i-lucide-arrow-right'
  groupes:
    - id:'actions'
      items:
        - label:'Partager'
          Icône: i-lucide-share
          Enfants:
            - label:« Email »
              icon: 'i-lucide-mail'
            - label:« Copier »
              Icône: i-lucide-copy
            - label:« Lien »
              Icône:'i-lucide-link'
  Classe: Flex-1
---
::

::framework-only
#numérique
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.chevronRight`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.chevronRight`.
:::
::

@244@chargement

Utilisez la prop `loading` pour afficher une icône de chargement sur la CommandPalette.

::component-code
---
Collapse: vrai
Caché:
  - autofocus
Ignorer:
  @@ph247@classe
  @248@groupes
Extérieur:
  @@249@groupes
Extérieurs:
  - CommandPaletteGroup [réf. nécessaire]
classe: '! p-0'
Props:
  Autofocus: faux
  Chargement: vrai
  groupes:
    - id:'applications'
      items:
        - label:'Calendrier'
          icon: 'i-lucide-calendrier'
        - label:"Musique"
          icon: 'i-lucide-musique'
        - label:« Cartes »
          Icône:'i-lucide-map'
  Classe: Flex-1
---
::

### Icône de chargement

Utilisez la prop `loading-icon` pour personnaliser l'icône de chargement. Par défaut,`i-lucide-loader-circle`.

::component-code
---
Collapse: vrai
Caché:
  - autofocus
Ignorer:
  @@ph259@classe
  @@260@groupes
Extérieur:
  @@ph261@groupes
Extérieurs:
  - CommandPaletteGroup [réf. nécessaire]
classe: '! p-0'
Props:
  Autofocus: Faux
  Chargement: vrai
  loadingIcon: 'i-lucide-loader'
  groupes:
    - id:'applications'
      items:
        - label:'Calendrier'
          icon: 'i-lucide-calendrier'
        - label:"Musique"
          icon: 'i-lucide-musique'
        - label:« Cartes »
          Icône:'i-lucide-map'
  Classe: Flex-1
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

@@ph271@@Fermer

Utilisez le prop `close` pour afficher un bouton [](/docs/components/button) pour rejeter la palette de commandes.

::tip
Un événement `update:open` sera émis lorsque le bouton de fermeture est cliqué.
::

::component-code
---
Collapse: vrai
Caché:
  - autofocus
Ignorer:
  @@ph279@classe
  @280@groupes
  @@ph281@fermer
Extérieure:
  @282@groupes
Extérieurs:
  - CommandPaletteGroup [réf. nécessaire]
classe: '! p-0'
Props:
  Autofocus: faux
  Clôture: vrai
  groupes:
    - id:'applications'
      items:
        - label:'Calendrier'
          icon: 'i-lucide-calendrier'
        - label:"Musique"
          icon: 'i-lucide-musique'
        - label:« Cartes »
          Icône:'i-lucide-map'
  Classe: Flex-1
---
::

Vous pouvez passer n'importe quelle propriété du composant [Button](/docs/components/button) pour le personnaliser.

::component-code
---
Collapse: vrai
Étiquette: true
Caché:
  - autofocus
Ignorer:
  - close.color
  - close.variant
  @@295@groupes
  @@ph296@classe
Extérieur:
  @297@groupes
Extérieurs:
  - CommandPaletteGroup [réf. nécessaire]
classe: '! p-0'
Props:
  Autofocus: faux
  proche:
    Couleur: Primaire
    Étiquette: Outline
    Catégorie:"round-full"
  groupes:
    - id:'applications'
      items:
        - label:'Calendrier'
          icon: 'i-lucide-calendrier'
        - label:"Musique"
          icon: 'i-lucide-musique'
        - label:« Cartes »
          Icône:'i-lucide-map'
  Classe: Flex-1
---
::

### Fermer l'icône

Utilisez le prop `close-icon` pour personnaliser le bouton de fermeture [Icon](/docs/components/icon).

::component-code
---
Collapse: vrai
Caché:
  - autofocus
ignorer:
  @@ph311@classe
  - groupes
  @@ph313@fermer
Extérieur:
  - groupes
Extérieurs:
  - CommandPaletteGroup [réf. nécessaire]
classe: '! p-0'
Props:
  Autofocus: faux
  Clôture: vrai
  closeIcône:'i-lucide-arrow-right'
  groupes:
    - id:'applications'
      items:
        - label:'Calendrier'
          icon: 'i-lucide-calendrier'
        - label:"Musique"
          icon: 'i-lucide-musique'
        - label:« Cartes »
          Icône:'i-lucide-map'
  Classe: Flex-1
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

@@P324@Rétrospective

Utilisez la prop `back` pour personnaliser ou masquer le bouton retour (avec la valeur `false`) affiché lors de la navigation dans un sous-menu.

Vous pouvez passer n'importe quelle propriété du composant [Button](/docs/components/button) pour le personnaliser.

::component-code
---
Collapse: vrai
Étiquette: true
Caché:
  - autofocus
ignorer:
  - back.couleur
  @@333@groupes
  @@ph334@classe
Extérieure:
  @@335@groupes
Extérieurs:
  - CommandPaletteGroup [réf. nécessaire]
classe: '! p-0'
Props:
  Autofocus: Faux
  Retour:
    Couleur: Primaire
  groupes:
    - id:'actions'
      items:
        - label:« Partager »
          Icône: i-lucide-share
          Enfants:
            - label:« Email »
              icon: 'i-lucide-mail'
            - label:« Copier »
              Icône: i-lucide-copy
            - label:« Lien »
              Icône:'i-lucide-link'
  Classe: Flex-1
---
::

### Retour Icône

Utilisez le prop `back-icon` pour personnaliser le bouton retour [Icon](/docs/components/icon).

::component-code
---
Collapse: vrai
Caché:
  - autofocus
Ignorer:
  @@ph350@classe
  - groupes
  @@P352@retour
Extérieure:
  @@353@groupes
Extérieurs:
  - CommandPaletteGroup [réf. nécessaire]
classe: '! p-0'
Props:
  Autofocus: Faux
  Retour: vrai
  backIcon: 'i-lucide-house'
  groupes:
    - id:'actions'
      items:
        - label:'Partager'
          Icône: i-lucide-share
          Enfants:
            - label:« Email »
              icon: 'i-lucide-mail'
            - label:« Copier »
              Icône: i-lucide-copy
            - label:« Lien »
              Icône:'i-lucide-link'
  Classe: Flex-1
---
::

::framework-only
#numérique
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.arrowLeft`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.arrowLeft`.
:::
::

### désactivé

Utilisez la prop `disabled` pour désactiver la CommandPalette.

::component-code
---
Collapse: vrai
Caché:
  - autofocus
ignorer:
  @367@groupes
  @@ph368@classe
Extérieur:
  @@ph369@groupes
Extérieurs:
  - CommandPaletteGroup [réf. nécessaire]
classe: '! p-0'
Props:
  Autofocus: Faux
  handicapés: vrai
  groupes:
    - id:'applications'
      items:
        - label:'Calendrier'
          icon: 'i-lucide-calendrier'
        - label:"Musique"
          icon: 'i-lucide-musique'
        - label:« Cartes »
          Icône:'i-lucide-map'
  Classe: Flex-1
---
::

@@ph375@exemples

### Contrôle élément (s) sélectionné (s)

Vous pouvez contrôler le ou les éléments sélectionnés en utilisant la prop `default-value` ou la directive `v-model`, en utilisant le champ `onSelect` sur chaque élément ou en utilisant l'événement `@update:model-value`.

::component-example
---
Collapse: vrai
nom: 'commande-palette-sélectionne-exemple'
classe: '! p-0'
Props:
  Autofocus: faux
---
::

::tip
Utilisez la prop `value-key` pour sélectionner un champ d'un élément à utiliser comme valeur au lieu de l'objet lui-même. Utilisez la prop `by` pour comparer des objets par un champ au lieu de référence.
::

### Contrôle terme de recherche

Utilisez la directive `v-model:search-term` pour contrôler le terme de recherche.

::component-example
---
Collapse: vrai
nom: 'command-palette-search-term-example'
classe: '! p-0'
Props:
  Autofocus: faux
---
::

::note
Cet exemple utilise l'événement `@update:model-value` pour réinitialiser le terme de recherche lorsqu 'un élément est sélectionné.
::

### Avec des enfants dans les articles

Vous pouvez créer des menus hiérarchiques à l'aide de la propriété `children` dans les éléments. Lorsqu 'un élément a des enfants, il affiche automatiquement une icône de chevron et permet la navigation dans un sous-menu.

::component-example
---
Collapse: vrai
Étiquette: true
nom: 'command-palette-items-enfants-exemple'
classe: '! p-0'
Props:
  Autofocus: faux
---
::

::note
Lorsque vous naviguez dans un sous-menu:
- Le terme de recherche est réinitialisé
- Un bouton retour apparaît dans l'entrée
- Vous pouvez revenir au groupe précédent en appuyant sur la touche: kbd{value="backspace"}
::

### Avec les éléments récupérés

Vous pouvez récupérer des éléments à partir d'une API et les utiliser dans la CommandPalette.

::component-example
---
Collapse: vrai
nom: 'commande-palette-exemple'
classe: '! p-0'
Props:
  Autofocus: Faux
---
::

::note
Cet exemple utilise `useLazyFetch` avec `server: false` pour récupérer des données sur le client sans bloquer le rendu initial. L'état de chargement vérifie à la fois les états `pending` et `idle` pour afficher un indicateur de chargement avant et pendant la récupération.
::

### Avec ignorer le filtre

Vous pouvez définir le champ `ignoreFilter` à `true` sur un groupe pour désactiver la recherche interne et utiliser votre propre logique de recherche.

::component-example
---
Collapse: vrai
nom: 'command-palette-ignore-filter-example'
classe: '! p-0'
Props:
  Autofocus: faux
---
::

::note
Cet exemple utilise [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced) pour déboulonner les appels d'API. L'état de chargement vérifie à la fois les statuts `pending` et `idle` pour afficher un indicateur de chargement avant et pendant la récupération.
::

### Avec éléments post-filtrés

Vous pouvez utiliser le champ `postFilter` sur un groupe pour filtrer les éléments après la recherche.

::component-example
---
Collapse: vrai
nom: 'command-palette-post-filter-example'
classe: '! p-0'
Props:
  Autofocus: faux
---
::

::note
Commencez à taper pour voir les éléments de niveau supérieur apparaître.
::

### Avec recherche de fusibles personnalisée

Vous pouvez utiliser la prop `fuse` pour remplacer les options de [useFuse](https://vueuse.org/integrations/useFuse) qui sont par défaut:

```ts
{
  fuseOptions: {
    ignoreLocation: true,
    threshold: 0.1,
    keys: ['label', 'description', 'suffix']
  },
  resultLimit: 12,
  matchAllWhenSearchEmpty: true
}
```

::tip
Les `fuseOptions` sont les options de [Fuse.js](https://www.fusejs.io/), le `resultLimit` est le nombre maximum de résultats à retourner et le `matchAllWhenSearchEmpty` est un booléen pour faire correspondre tous les éléments lorsque le terme de recherche est vide.
::

Vous pouvez par exemple définir `{ fuseOptions: { includeMatches: true } }`{lang="ts-type"} pour mettre en évidence le terme de recherche dans les éléments.

::component-example
---
Collapse: vrai
nom: 'commande-palette-fuse-exemple'
classe: '! p-0'
Props:
  Autofocus: faux
---
::

### Avec la virtualisation: badge{label="4.1+" class="align-text-top"}

Utilisez la prop `virtualize` pour activer la virtualisation de grandes listes en tant que booléen ou objet avec des options telles que `{ estimateSize: 32, overscan: 12 }`.

::warning{to="https://github.com/unovue/reka-ui/issues/1885" target="_blank"}
Lorsqu 'il est activé, tous les groupes sont aplatis en une seule liste en raison d'une limitation de l'interface utilisateur de Reka.
::

::component-example
---
Collapse: vrai
nom: 'command-palette-virtualise-exemple'
classe: '! p-0'
Props:
  Autofocus: faux
---
::

### Dans un Popover

Vous pouvez utiliser le composant CommandPalette dans le contenu d'un [Popover](/docs/components/popover).

::component-example
---
Collapse: vrai
nom: 'popover-command-palette-exemple'
Props:
  Autofocus: faux
---
::

### Dans un Modal

Vous pouvez utiliser le composant CommandPalette à l'intérieur du contenu d'un [Modal](/docs/components/modal).

::component-example
---
Collapse: vrai
nom: 'modal-command-palette-exemple'
Props:
  Autofocus: faux
---
::

::note
Cet exemple utilise `useLazyFetch` avec `immediate: false` pour récupérer des données uniquement lorsque le Modal s'ouvre.
::

### Dans un tiroir

Vous pouvez utiliser le composant CommandPalette dans le contenu d'un [Drawer](/docs/components/drawer).

::component-example
---
Collapse: vrai
nom: 'drawer-command-palette-exemple'
Props:
  Autofocus: Faux
---
::

::note
Cet exemple utilise `useLazyFetch` avec `immediate: false` pour récupérer les données uniquement lorsque le tiroir s'ouvre.
::

### Listen état ouvert

Lorsque vous utilisez le prop `close`, vous pouvez écouter l'événement `update:open` lorsque vous cliquez sur le bouton.

::component-example
---
Collapse: vrai
nom: 'commande-palette-open-exemple'
Props:
  Autofocus: faux
---
::

::note
Cela peut être utile lorsque vous utilisez la CommandPalette à l'intérieur d'un `Modal`](/docs/components/modal) par exemple.
::

### Avec emplacement de pied de page

Utilisez l'emplacement `#footer` pour ajouter du contenu personnalisé en bas de la palette de commandes, comme l'aide aux raccourcis clavier ou des actions supplémentaires.

::component-example
---
Collapse: vrai
nom: 'command-palette-footer-slot-example'
classe: '! p-0'
Props:
  Autofocus: Faux
---
::

### Avec emplacement personnalisé

Utilisez la propriété `slot` pour personnaliser un élément ou un groupe spécifique.

Vous aurez accès aux slots suivants:

@@
@@
@@
@@

@@
@@
@@
@@

::component-example
---
Collapse: vrai
nom: 'command-palette-custom-slot-example'
classe: '! p-0'
Props:
  Autofocus: Faux
---
::

::tip{to="#slots"}
Vous pouvez également utiliser les emplacements `#item`,`#item-leading`,`#item-label` et `#item-trailing` pour personnaliser tous les éléments.
::

@@ph498@api

@@ph499@@props

Composants-props

### Slots

Composants slots

### Emits

Composants émetteurs

@502@thème

Composant-thème

@503@changements

Composant-changelog
