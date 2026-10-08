---
title: NavigationMenu
description: Une liste de liens qui peuvent être affichés horizontalement ou verticalement.
category: navigation
keywords:
  - navbar
  - menubar
  - sidebar navigation
links:
  - label: NavigationMenu
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/navigation-menu
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/NavigationMenu.vue
---

@@ph000@utilisation

Utilisez le composant NavigationMenu pour afficher une liste de liens horizontalement ou verticalement.

::component-code
---
Collapse: vrai
Caché:
  @@ph001@classe
Ignorer:
  @@ph002@@articles
Extérieure:
  @@ph003@articles
Extérieurs:
  - NavigationMenuItem []
Props:
  items:
    - label: Référence
      Icône: i-lucide-book-open
      à:/docs/commencer
      Enfants:
        - label: Présentation
          Description: Composants entièrement stylisés et personnalisables pour Nuxt.
          Étiquette: i-lucide-house
        - label: Installation
          Description: Découvrez comment installer et configurer Nuxt UI dans votre application.
          icon: i-lucide-cloud-download
        - label:'Icônes'
          Icône: i-lucide-smile
          description: 'Vous n'avez rien à faire,@ nuxt/icon s'en occupera automatiquement.'
        - label:"Couleurs"
          icon: 'i-lucide-swatch-book'
          Description: 'Choisissez une couleur primaire et une couleur neutre dans votre thème CSS Tailwind.'
        - label:'Thème'
          Icône: i-lucide-cog
          Vous pouvez personnaliser les composants en utilisant les props `class`/`ui` ou dans votre app.config.ts.
    - label: Composables
      icon: i-lucide-base de données
      à/docs/composables
      Enfants:
        - label: définition des raccourcis
          Icône: i-lucide-file-text
          description: Définissez des raccourcis pour votre application.
          à/docs/composables/define-shortcuts
        - label: useOverlay
          Icône: i-lucide-file-text
          Description: Afficher un modal/slideover dans votre application.
          à:/docs/composables/use-overlay
        - label: utiliseToast
          Icône: i-lucide-file-text
          Description: Affichez un toast dans votre application.
          à:/docs/composables/use-toast
    - label: Composants
      Icône: i-lucide-box
      à/docs/composants
      Actif: vrai
      Enfants:
        - label: lien
          Icône: i-lucide-file-text
          Description: Utilisez NuxtLink avec des superpouvoirs.
          à:/docs/composants/link
        - label: Modal
          Icône: i-lucide-file-text
          Description: Affiche un modal dans votre application.
          à:/docs/components/modal
        - label: NavigationMenu
          Icône: i-lucide-file-text
          Description: Affiche une liste de liens.
          à/docs/composants/navigation-menu
        - label: pagination
          Icône: i-lucide-file-text
          Description: Affiche une liste de pages.
          à:/docs/composants/pagination
        - label: Popover
          Icône: i-lucide-file-text
          Description: Affiche une boîte de dialogue non modale qui flotte autour d'un élément trigger.
          à:/docs/components/popover
        - label: Développement
          Icône: i-lucide-file-text
          Description : Afficher une barre horizontale pour indiquer la progression de la tâche .
          à :/docs/composants/progress
    - label : GitHub
      icon : i-simple - icons-github
      Étiquette : 6K
      Deux :https://github.com/nuxt/ui
      Référence : _ blank
    - label : Aide
      Icône : i-lucide - circle-help
      handicapés : vrai
  classe : ' w-full justify-center '
---
::

@26@@pourquoi

Utilisez le`items`prop comme tableau d'objets avec les propriétés suivantes :

@@
@@
@@
@@
@@
[`tooltip?: TooltipProps`{lang="ts-type"}](#with-tooltip-in-items)
@@
@@
@@
@@
@@
@@
@@
[`slot?: string`{lang="ts-type"}](#with-custom-slot)
@@
@@
@@
@@

Vous pouvez transmettre n'importe quelle propriété du composant [Link](/docs/components/link#props) comme `to`,`target`, etc.

::component-code
---
Collapse: vrai
Ignorer:
  @@ph104@articles
  @@ph105@classe
Extérieur:
  @@ph106@éléments
Extérieurs:
  - NavigationMenuItem []
Props:
  items:
    - label: Référence
      Icône: i-lucide-book-open
      à:/docs/commencer
      Enfants:
        - label: Présentation
          Description: Composants entièrement stylisés et personnalisables pour Nuxt.
          Étiquette: i-lucide-house
        - label: Installation
          Description: Découvrez comment installer et configurer Nuxt UI dans votre application.
          icon: i-lucide-cloud-download
        - label:'Icônes'
          Icône: i-lucide-smile
          description: 'Vous n'avez rien à faire,@ nuxt/icon s'en occupera automatiquement.'
        - label:'Couleurs'
          icon: 'i-lucide-swatch-book'
          Description: 'Choisissez une couleur primaire et une couleur neutre dans votre thème CSS Tailwind.'
        - label:'Thème'
          Icône: i-lucide-cog
          Vous pouvez personnaliser les composants en utilisant les props `class`/`ui` ou dans votre app.config.ts.
    - label: Composables
      icon: i-lucide-base de données
      à/docs/composables
      Enfants:
        - label: définissez-les
          Icône: i-lucide-file-text
          Description: Définissez des raccourcis pour votre application.
          à/docs/composables/define-shortcuts
        - label: useOverlay
          Icône: i-lucide-file-text
          Description: Afficher un modal/slideover dans votre application.
          à:/docs/composables/use-overlay
        - label: utiliseToast
          Icône: i-lucide-file-text
          Description: Afficher un toast dans votre application.
          à:/docs/composables/use-toast
    - label: Composants
      Icône: i-lucide-box
      à/docs/composants
      Actif: vrai
      Enfants:
        - label: étiquette
          Icône: i-lucide-file-text
          Description: Utilisez NuxtLink avec des superpouvoirs.
          à:/docs/composants/link
        - label: Modèle
          Icône: i-lucide-file-text
          Description: Affiche un modal dans votre application.
          à:/docs/components/modal
        - label: NavigationMenu
          Icône: i-lucide-file-text
          Description: Affiche une liste de liens.
          à/docs/composants/navigation-menu
        - label: pagination
          Icône: i-lucide-file-text
          Description: affiche une liste de pages.
          à:/docs/composants/pagination
        - label: Popover
          Icône: i-lucide-file-text
          Description : Affiche une boîte de dialogue non modale qui flotte autour d'un élément trigger .
          à :/docs/components/popover
        - label : Développement
          Icône : i-lucide - file-text
          Description : Afficher une barre horizontale pour indiquer la progression de la tâche .
          à :/docs/composants/progress
    - label : GitHub
      icon : i-simple - icons-github
      Étiquette : 6K
      Deux :https://github.com/nuxt/ui
      Référence : _ blank
    - label : Aide
      Icône : i-lucide - circle-help
      handicapés : vrai
  classe : ' w-full justify-center '
---
::

::note
Vous pouvez également passer un tableau de tableaux à la prop`items`pour afficher des groupes d'éléments .
::

::tip
Chaque élément peut prendre un tableau`children`d'objets avec les propriétés suivantes pour créer des sous-menus :

@@
@@
@@
@@
@@

::

@@141@@Référencement

Utilisez la prop`orientation`pour modifier l'orientation du menu NavigationMenu .

::note
Lorsque l'orientation est`vertical`, un composant[Accordion](/docs/components/accordion)est utilisé pour afficher chaque groupe . Vous pouvez contrôler l'état d'ouverture de chaque élément en utilisant les propriétés`open`et`defaultOpen`et modifier le comportement en utilisant les propriétés[`collapsible`](/docs/components/accordion#collapsible)et[`type`](/docs/components/accordion#multiple).
::

::note
Lorsque l'orientation est `vertical` et que le menu n'est pas `collapsed`, les enfants sont rendus récursivement en tant qu 'éléments, donc `ui.link` les styles.`ui.childLink` s'applique uniquement au `content` affiché dans l'orientation `horizontal` et au [[#with-popover-in-items`collapsed`.
::

::component-code
---
Collapse: vrai
ignorer:
  @@ph171@articles
  @@ph172@classe
Extérieure:
  @@ph173@articles
Extérieurs:
  - NavigationMenuItem [][]
Props:
  Orientation: "Vertical"
  items:
    - -étiquette: Liens
        Type: "étiquette"
      - label: Référence
        Icône: i-lucide-book-open
        Enfants:
          - label: Présentation
            Description: Composants entièrement stylisés et personnalisables pour Nuxt.
            Étiquette: i-lucide-house
          - label: Installation
            Description: Découvrez comment installer et configurer Nuxt UI dans votre application.
            icon: i-lucide-cloud-download
          - label:'Icônes'
            Icône: i-lucide-smile
            description: 'Vous n'avez rien à faire,@ nuxt/icon s'en occupera automatiquement.'
          - label:"Couleurs"
            icon: 'i-lucide-swatch-book'
            Description: 'Choisissez une couleur primaire et une couleur neutre dans votre thème CSS Tailwind.'
          - label:'Thème'
            Icône: i-lucide-cog
            Vous pouvez personnaliser les composants en utilisant les props `class`/`ui` ou dans votre app.config.ts.
      - label: Composables
        icon: i-lucide-base de données
        Enfants:
          - label: définissez-les
            Icône: i-lucide-file-text
            Description: Définissez des raccourcis pour votre application.
            à/docs/composables/define-shortcuts
          - label: useOverlay
            Icône: i-lucide-file-text
            Description: Afficher un modal/slideover dans votre application.
            à:/docs/composables/use-overlay
          - label: utiliseToast
            Icône: i-lucide-file-text
            Description: Afficher un toast dans votre application.
            à:/docs/composables/use-toast
      - label: Composants
        Icône: i-lucide-box
        à/docs/composants
        Type: Trigger
        Actif: vrai
        Défaut: true
        Enfants:
          - label: étiquette
            Icône: i-lucide-file-text
            Description: Utilisez NuxtLink avec des superpouvoirs.
            à:/docs/composants/link
          - label: Modèle
            Icône: i-lucide-file-text
            Description: Affiche un modal dans votre application.
            à:/docs/components/modal
          - label: NavigationMenu
            Icône: i-lucide-file-text
            Description: Affiche une liste de liens.
            à/docs/composants/navigation-menu
          - label: pagination
            Icône: i-lucide-file-text
            Description: Affiche une liste de pages.
            à:/docs/composants/pagination
          - label: Popover
            Icône: i-lucide-file-text
            Description: Affiche une boîte de dialogue non modale qui flotte autour d'un élément trigger.
            à:/docs/components/popover
          - label: Développement
            Icône : i-lucide - file-text
            Description : Afficher une barre horizontale pour indiquer la progression de la tâche .
            à :/docs/composants/progress
    - - étiquette : GitHub
        icon : i-simple - icons-github
        Étiquette : 6K
        Deux :https://github.com/nuxt/ui
        Référence : _ blank
      - label : Aide
        Icône : i-lucide - circle-help
        handicapés : vrai
  class : ' data - [ orientation = vertical ] : w - 48 '
---
::

::note
Les groupes seront espacés lorsque l'orientation est`horizontal`et séparés lorsque l'orientation est`vertical`.
::

### effondré

Dans l'orientation`vertical`, utilisez la prop`collapsed`pour réduire le menu NavigationMenu , cela peut être utile dans une barre latérale par exemple .

::note
Vous pouvez utiliser les accessoires[`tooltip`](#with-tooltip-in-items)et[`popover`](#with-popover-in-items)pour afficher plus d'informations sur les éléments effondrés .
::

::component-code
---
Collapse : vrai
ignorer :
  @@ph212@articles
  - orientation
  @@ph214@classe
Extérieur :
  @@ph215@articles
Extérieurs :
  @@216@@NavigationMenuItem [ ] [ ]
items:
  Tooltip:
    @@ph217@@vrai
    @@ph218@faux
  Popour:
    @@ph219@vrai
    @220@faux
Props:
  Effondrement: vrai
  Tooltip: faux
  Popover: faux
  Orientation: "Vertical"
  items:
    - -étiquette: Liens
        Type: "étiquette"
      - label: Référence
        Icône: i-lucide-book-open
        Enfants:
          - label: Présentation
            Description: Composants entièrement stylisés et personnalisables pour Nuxt.
            Étiquette: i-lucide-house
          - label: Installation
            Description: Découvrez comment installer et configurer Nuxt UI dans votre application.
            icon: i-lucide-cloud-download
          - label:'Icônes'
            Icône: i-lucide-smile
            description: 'Vous n'avez rien à faire,@ nuxt/icon s'en occupera automatiquement.'
          - label:'Couleurs'
            icon: 'i-lucide-swatch-book'
            Description: 'Choisissez une couleur primaire et une couleur neutre dans votre thème CSS Tailwind.'
          - label:'Thème'
            Icône: i-lucide-cog
            Vous pouvez personnaliser les composants en utilisant les props `class`/`ui` ou dans votre app.config.ts.
      - label: Composables
        icon: i-lucide-base de données
        Enfants:
          - label: définissez-les
            Icône: i-lucide-file-text
            Description: Définissez des raccourcis pour votre application.
            à/docs/composables/define-shortcuts
          - label: useOverlay
            Icône: i-lucide-file-text
            Description: Afficher un modal/slideover dans votre application.
            à:/docs/composables/use-overlay
          - label: utiliseToast
            Icône: i-lucide-file-text
            Description: Afficher un toast dans votre application.
            à:/docs/composables/use-toast
      - label: Composants
        Icône: i-lucide-box
        à/docs/composants
        Actif: vrai
        Enfants:
          - label: étiquette
            Icône: i-lucide-file-text
            Description: Utilisez NuxtLink avec des superpouvoirs.
            à:/docs/composants/link
          - label: Modal
            Icône: i-lucide-file-text
            Description: Affiche un modal dans votre application.
            à:/docs/components/modal
          - label: NavigationMenu
            Icône: i-lucide-file-text
            Description: Affiche une liste de liens.
            à/docs/composants/navigation-menu
          - label: pagination
            Icône: i-lucide-file-text
            Description: Affiche une liste de pages.
            à:/docs/composants/pagination
          - label: Popover
            Icône: i-lucide-file-text
            Description: Affiche une boîte de dialogue non modale qui flotte autour d'un élément trigger.
            à:/docs/components/popover
          - label: Développement
            Icône: i-lucide-file-text
            Description : Afficher une barre horizontale pour indiquer la progression de la tâche .
            à :/docs/composants/progress
    - - étiquette : GitHub
        icon : i-simple - icons-github
        Étiquette : 6K
        Deux :https://github.com/nuxt/ui
        Référence : _ blank
      - label : Aide
        Icône : i-lucide - circle-help
        handicapés : vrai
---
::

@@ph243@@highlight

Utilisez la prop`highlight`pour afficher une bordure surlignée pour l'élément actif .

Utilisez la prop`highlight-color`pour changer la couleur de la bordure . Elle est par défaut la prop`color`.

::component-code
---
Collapse : vrai
Étiquette : true
ignorer :
  @@ph247@articles
  @@ph248@classe
Extérieure :
  @@ph249@articles
Extérieurs :
  - NavigationMenuItem [ ] [ ]
Props :
  Highlight : vrai
  highlightColor : ' primaire '
  Orientation: « horizontale »
  items:
    - -étiquette: Guide
        Icône: i-lucide-book-open
        Enfants:
          - label: Présentation
            Description: Composants entièrement stylisés et personnalisables pour Nuxt.
            Étiquette: i-lucide-house
          - label: Installation
            Description: Découvrez comment installer et configurer Nuxt UI dans votre application.
            icon: i-lucide-cloud-download
          - label:'Icônes'
            Icône: i-lucide-smile
            description: 'Vous n'avez rien à faire,@ nuxt/icon s'en occupera automatiquement.'
          - label:"Couleurs"
            icon: 'i-lucide-swatch-book'
            Description: 'Choisissez une couleur primaire et une couleur neutre dans votre thème CSS Tailwind.'
          - label:'Thème'
            Icône: i-lucide-cog
            Vous pouvez personnaliser les composants en utilisant les props `class`/`ui` ou dans votre app.config.ts.
      - label: Composables
        icon: i-lucide-base de données
        Enfants:
          - label: définir les raccourcis
            Icône: i-lucide-file-text
            description: Définissez des raccourcis pour votre application.
            à/docs/composables/define-shortcuts
          - label: useOverlay
            Icône: i-lucide-file-text
            Description: Afficher un modal/slideover dans votre application.
            à:/docs/composables/use-overlay
          - label: utiliseToast
            Icône: i-lucide-file-text
            Description: Afficher un toast dans votre application.
            à:/docs/composables/use-toast
      - label: Composants
        Icône: i-lucide-box
        à/docs/composants
        Actif: vrai
        Défaut: true
        Enfants:
          - label: lien
            Icône: i-lucide-file-text
            Description: Utilisez NuxtLink avec des superpouvoirs.
            à:/docs/composants/link
          - label: Modalité
            Icône: i-lucide-file-text
            Description: Affiche un modal dans votre application.
            à:/docs/components/modal
          - label: NavigationMenu
            Icône : i-lucide - file-text
            Description : Affiche une liste de liens .
            à/docs/composants/navigation-menu
          - label : pagination
            Icône : i-lucide - file-text
            Description : Affiche une liste de pages .
            à :/docs/composants/pagination
          - label : Popover
            Icône : i-lucide - file-text
            Description : Affiche une boîte de dialogue non modale qui flotte autour d'un élément trigger .
            à :/docs/components/popover
          - label : Développement
            Icône : i-lucide - file-text
            Description : Afficher une barre horizontale pour indiquer la progression de la tâche .
            à :/docs/composants/progress
    - - étiquette : GitHub
        icon : i-simple - icons-github
        Étiquette : 6K
        Deux :https://github.com/nuxt/ui
        Référence : _ blank
      - label : Aide
        Icône : i-lucide - circle-help
        handicapés : vrai
  class : ' données - [ orientation = horizontal ] : border-b border-default données - [ orientation = horizontal ] : w-full données - [ orientation = vertical ] : w - 48 '
---
::

::note
Dans cet exemple , la classe`border-b`est appliquée pour afficher une bordure dans l'orientation`horizontal`, ce n'est pas fait par défaut pour vous permettre d'avoir une ardoise propre pour travailler avec .
::

::caution
Dans l'orientation `vertical`, l'accessoire `highlight` ne met en évidence que la frontière des enfants actifs.
::

@276@couleur

Utilisez la prop `color` pour modifier la couleur du menu NavigationMenu.

::component-code
---
Collapse: vrai
Ignorer:
  @@ph278@articles
  @@ph279@classe
Extérieur:
  @@ph280@articles
Extérieurs:
  - NavigationMenuItem [][]
Props:
  Couleur: Neutre
  items:
    - -étiquette: Guide
        Icône: i-lucide-book-open
        à:/docs/commencer
      - label: Composables
        icon: i-lucide-base de données
        à/docs/composables
      - label: Composants
        Icône: i-lucide-box
        à/docs/composants
        Actif: vrai
    - -étiquette: GitHub
        icon : i-simple - icons-github
        Étiquette : 6K
        Deux :https://github.com/nuxt/ui
        Référence : _ blank
  Catégorie : w-full
---
::

@@ph286@@Variant

Utilisez la prop`variant`pour modifier la variante du menu NavigationMenu .

::component-code
---
Collapse : vrai
Ignorer :
  @@ph288@articles
  @@ph289@classe
Extérieur :
  @@ph290@articles
Extérieurs :
  @@291@@NavigationMenuItem [ ] [ ]
Props :
  Couleur : Neutre
  Variante : lien
  Étiquette : false
  items :
    - - étiquette : Guide
        Icône : i-lucide - book-open
        à :/docs/commencer
      - label : Composables
        icon : i-lucide - base de données
        à/docs/composables
      - label : Composants
        Icône : i-lucide - box
        à/docs/composants
        Actif : vrai
    - - étiquette : GitHub
        icon : i-simple - icons-github
        Étiquette : 6K
        Deux :https://github.com/nuxt/ui
        Référence : _ blank
  Catégorie : w-full
---
::

::note
Le prop`highlight`change le style d'objet actif de la variante`pill`. Essayez-le pour voir la différence .
::

### Trailing Icône

Utilisez la prop`trailing-icon`pour personnaliser l'icône[](/docs/components/icon)de chaque élément . Par défaut à`i-lucide-chevron-down`. Cette icône n'est affichée que lorsqu ' un élément a des enfants .

::tip
Vous pouvez également définir une icône pour un élément spécifique en utilisant la propriété`trailingIcon`dans l'objet item .
::

::component-code
---
Collapse : vrai
ignorer :
  @@ph306@articles
  @classe 307
Extérieur :
  @@ph308@articles
Extérieurs :
  - NavigationMenuItem [ ]
Props :
  trailingIcône : ' i-lucide - arrow-down '
  items:
    - label: Référence
      Icône: i-lucide-book-open
      à:/docs/commencer
      Enfants:
        - label: Présentation
          Description: Composants entièrement stylisés et personnalisables pour Nuxt.
          Étiquette: i-lucide-house
        - label: Installation
          Description: Découvrez comment installer et configurer Nuxt UI dans votre application.
          icon: i-lucide-cloud-download
        - label:'Icônes'
          Icône: i-lucide-smile
          description: 'Vous n'avez rien à faire,@ nuxt/icon s'en occupera automatiquement.'
        - label:'Couleurs'
          icon: 'i-lucide-swatch-book'
          Description: 'Choisissez une couleur primaire et une couleur neutre dans votre thème CSS Tailwind.'
        - label:'Thème'
          Icône: i-lucide-cog
          Vous pouvez personnaliser les composants en utilisant les props `class`/`ui` ou dans votre app.config.ts.
    - label: Composables
      icon: i-lucide-base de données
      à/docs/composables
      Enfants:
        - label: définition des raccourcis
          Icône: i-lucide-file-text
          description: Définissez des raccourcis pour votre application.
          à/docs/composables/define-shortcuts
        - label: useOverlay
          Icône: i-lucide-file-text
          Description: Afficher un modal/slideover dans votre application.
          à:/docs/composables/use-overlay
        - label: utiliseToast
          Icône: i-lucide-file-text
          Description: Afficher un toast dans votre application.
          à:/docs/composables/use-toast
    - label: Composants
      Icône: i-lucide-box
      à/docs/composants
      Actif: vrai
      Enfants:
        - label: étiquette
          Icône: i-lucide-file-text
          Description: Utilisez NuxtLink avec des superpouvoirs.
          à:/docs/composants/link
        - label: Modalité
          Icône: i-lucide-file-text
          Description: Affiche un modal dans votre application.
          à:/docs/components/modal
        - label: NavigationMenu
          Icône: i-lucide-file-text
          Description: Affiche une liste de liens.
          à/docs/composants/navigation-menu
        - label: pagination
          Icône: i-lucide-file-text
          Description: affiche une liste de pages.
          à:/docs/composants/pagination
        - label: Popover
          Icône: i-lucide-file-text
          Description: Affiche une boîte de dialogue non modale qui flotte autour d'un élément trigger.
          à:/docs/components/popover
        - label: Développement
          Icône: i-lucide-file-text
          Description: Afficher une barre horizontale pour indiquer la progression de la tâche.
          à:/docs/composants/progress
  classe: 'w-full justify-center'
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

@@333@@Fédération

Utilisez la prop `arrow` pour afficher une flèche sur le contenu NavigationMenu lorsque les éléments ont des enfants.

::component-code
---
Collapse: vrai
Ignorer:
  @@335@articles
  @@ph336@@flèche
  @@ph337@classe
Extérieur:
  @@338@articles
Extérieurs:
  - NavigationMenuItem []
Props:
  Arrow: vrai
  items:
    - label: Référence
      Icône: i-lucide-book-open
      à:/docs/commencer
      Enfants:
        - label: Présentation
          Description: Composants entièrement stylisés et personnalisables pour Nuxt.
          Étiquette: i-lucide-house
        - label: Installation
          Description: Découvrez comment installer et configurer Nuxt UI dans votre application.
          icon: i-lucide-cloud-download
        - label:'Icônes'
          Icône: i-lucide-smile
          description: 'Vous n'avez rien à faire,@ nuxt/icon s'en occupera automatiquement.'
        - label:"Couleurs"
          icon: 'i-lucide-swatch-book'
          Description: 'Choisissez une couleur primaire et une couleur neutre dans votre thème CSS Tailwind.'
        - label:'Thème'
          Icône: i-lucide-cog
          Vous pouvez personnaliser les composants en utilisant les props `class`/`ui` ou dans votre app.config.ts.
    - label: Composables
      icon: i-lucide-base de données
      à/docs/composables
      Enfants:
        - label: définir les raccourcis
          Icône: i-lucide-file-text
          description: Définissez des raccourcis pour votre application.
          à/docs/composables/define-shortcuts
        - label: useOverlay
          Icône: i-lucide-file-text
          Description: Afficher un modal/slideover dans votre application.
          à:/docs/composables/use-overlay
        - label: utiliseToast
          Icône: i-lucide-file-text
          Description: Afficher un toast dans votre application.
          à:/docs/composables/use-toast
    - label: Composants
      Icône: i-lucide-box
      à/docs/composants
      Actif: vrai
      Enfants:
        - label: étiquette
          Icône: i-lucide-file-text
          Description: Utilisez NuxtLink avec des superpouvoirs.
          à:/docs/composants/link
        - label: Modalité
          Icône: i-lucide-file-text
          Description: Affiche un modal dans votre application.
          à:/docs/components/modal
        - label: NavigationMenu
          Icône: i-lucide-file-text
          Description: Affiche une liste de liens.
          à/docs/composants/navigation-menu
        - label: pagination
          Icône: i-lucide-file-text
          Description: Affiche une liste de pages.
          à:/docs/composants/pagination
        - label: Popover
          Icône: i-lucide-file-text
          Description: Affiche une boîte de dialogue non modale qui flotte autour d'un élément trigger.
          à:/docs/components/popover
        - label: Développement
          Icône: i-lucide-file-text
          Description: Afficher une barre horizontale pour indiquer la progression de la tâche.
          à:/docs/composants/progress
  classe: 'w-full justify-center'
---
::

::note
La flèche est animée pour suivre l'élément actif.
::

### Référencement

Utilisez la prop `content-orientation` pour modifier l'orientation du contenu.

::warning
Cette prop ne fonctionne que lorsque `orientation` est `horizontal`.
::

::component-code
---
Collapse: vrai
ignorer:
  @@ph363@articles
  @@ph364@@flèche
  @@ph365@classe
Extérieur:
  @@ph366@articles
Extérieurs:
  - NavigationMenuItem []
Props:
  Arrow: vrai
  Présentation:"Vertical"
  items:
    - label: Référence
      Icône: i-lucide-book-open
      à:/docs/commencer
      Enfants:
        - label: Présentation
          Description: Composants entièrement stylisés et personnalisables pour Nuxt.
          Étiquette: i-lucide-house
        - label: Installation
          Description: Découvrez comment installer et configurer Nuxt UI dans votre application.
          icon: i-lucide-cloud-download
        - label:'Icônes'
          Icône: i-lucide-smile
          description: 'Vous n'avez rien à faire,@ nuxt/icon s'en occupera automatiquement.'
    - label: Composables
      icon: i-lucide-base de données
      à/docs/composables
      Enfants:
        - label: définition des raccourcis
          Icône: i-lucide-file-text
          description: Définissez des raccourcis pour votre application.
          à/docs/composables/define-shortcuts
        - label: useOverlay
          Icône: i-lucide-file-text
          Description: Afficher un modal/slideover dans votre application.
          à:/docs/composables/use-overlay
        - label: utiliseToast
          Icône: i-lucide-file-text
          Description: Afficher un toast dans votre application.
          à:/docs/composables/use-toast
    - label: Composants
      Icône: i-lucide-box
      à/docs/composants
      Actif: vrai
      Enfants:
        - label: étiquette
          Icône: i-lucide-file-text
          Description: Utilisez NuxtLink avec des superpouvoirs.
          à:/docs/composants/link
        - label: Modal
          Icône: i-lucide-file-text
          Description: Affiche un modal dans votre application.
          à:/docs/components/modal
        - label: NavigationMenu
          Icône: i-lucide-file-text
          Description: Affiche une liste de liens.
          à/docs/composants/navigation-menu
        - label: pagination
          Icône: i-lucide-file-text
          Description: affiche une liste de pages.
          à:/docs/composants/pagination
  classe: 'w-full justify-center'
---
::

### Unmount

Utilisez la prop `unmount-on-hide` pour contrôler le comportement de démontage du contenu. Par défaut à `true`.

::component-code
---
Collapse: vrai
ignorer:
  @@ph384@articles
  @@ph385@@flèche
  @@ph386@classe
Extérieur:
  @@ph387@articles
Extérieurs:
  - NavigationMenuItem []
Props:
  Défaut: False
  items:
    - label: Référence
      Icône: i-lucide-book-open
      à:/docs/commencer
      Enfants:
        - label: Présentation
          Description: Composants entièrement stylisés et personnalisables pour Nuxt.
          Étiquette: i-lucide-house
        - label: Installation
          Description: Découvrez comment installer et configurer Nuxt UI dans votre application.
          icon: i-lucide-cloud-download
        - label:'Icônes'
          Icône: i-lucide-smile
          description: 'Vous n'avez rien à faire,@ nuxt/icon s'en occupera automatiquement.'
        - label:'Couleurs'
          icon: 'i-lucide-swatch-book'
          Description: 'Choisissez une couleur primaire et une couleur neutre dans votre thème CSS Tailwind.'
        - label:'Thème'
          Icône: i-lucide-cog
          Vous pouvez personnaliser les composants en utilisant les props `class`/`ui` ou dans votre app.config.ts.
    - label: Composables
      icon: i-lucide-base de données
      à/docs/composables
      Enfants:
        - label: définir les raccourcis
          Icône: i-lucide-file-text
          description: Définissez des raccourcis pour votre application.
          à/docs/composables/define-shortcuts
        - label: useOverlay
          Icône: i-lucide-file-text
          Description: Afficher un modal/slideover dans votre application.
          à:/docs/composables/use-overlay
        - label: utiliseToast
          Icône: i-lucide-file-text
          Description: Afficher un toast dans votre application.
          à:/docs/composables/use-toast
    - label: Composants
      Icône: i-lucide-box
      à/docs/composants
      Actif: vrai
      Enfants:
        - label: étiquette
          Icône: i-lucide-file-text
          Description: Utilisez NuxtLink avec des superpouvoirs.
          à:/docs/composants/link
        - label: Modal
          Icône: i-lucide-file-text
          Description: Affiche un modal dans votre application.
          à:/docs/components/modal
        - label: NavigationMenu
          Icône: i-lucide-file-text
          Description: Affiche une liste de liens.
          à/docs/composants/navigation-menu
        - label: pagination
          Icône: i-lucide-file-text
          Description: affiche une liste de pages.
          à:/docs/composants/pagination
        - label: Popover
          Icône: i-lucide-file-text
          Description: Affiche une boîte de dialogue non modale qui flotte autour d'un élément trigger.
          à:/docs/components/popover
        - label: Développement
          Icône: i-lucide-file-text
          Description: Afficher une barre horizontale pour indiquer la progression de la tâche.
          à:/docs/composants/progress
  classe: 'w-full justify-center'
---
::

::note
Vous pouvez inspecter le DOM pour voir le contenu de chaque élément rendu.
::

@@ph408@Exemples

### Contrôle élément actif

Vous pouvez contrôler le ou les éléments actifs en utilisant la prop `default-value` ou la directive `v-model` avec le `value` de l'élément. Si aucun `value` n'est fourni, il est par défaut `item-${index}` pour les éléments de niveau supérieur ou `item-${level}-${index}` pour les éléments imbriqués.

::component-example
---
Collapse: vrai
name: 'navigation-menu-model-valeur-exemple'
---
::

::tip
Utilisez la prop `value-key` pour modifier la clé utilisée pour faire correspondre les éléments lorsqu 'un `v-model` ou `default-value` est fourni.
::

::note
Dans cet exemple, en utilisant [`defineShortcuts`](), vous pouvez changer l'élément actif en appuyant sur: kbd{value="1"},: kbd{value="2"}, ou: kbd{value="3"}.
::

### Avec info-bulle dans les éléments

Lorsque l'orientation est `vertical` et que le menu est `collapsed`, vous pouvez définir la propriété `tooltip` sur `true` pour afficher une [Tooltip](/docs/components/tooltip) autour des éléments avec leur étiquette, mais vous pouvez également utiliser la propriété `tooltip` sur chaque élément pour remplacer l'info-bulle par défaut. En utilisant la propriété `tooltip` sur chaque élément, vous pouvez afficher un [Tooltip](/docs/components/tooltip) autour des éléments.

::note
La propriété `tooltip` d'un élément affichera toujours une infobulle, quelle que soit la propriété globale `tooltip`.
::

Vous pouvez transmettre n'importe quelle propriété du composant [Tooltip](/docs/components/tooltip) globalement ou sur chaque élément.

::component-code
---
Collapse: vrai
Ignorer:
  @@ph449@articles
  @@ph450@classe
Extérieure:
  @@ph451@articles
Extérieurs:
  - NavigationMenuItem [][]
items:
  Tooltip:
    @@ph453@vrai
    @@F454@faux
Props:
  Tooltip: vrai
  Effondrement: vrai
  Orientation: "Vertical"
  items:
    - -étiquette: Liens
        Type: "étiquette"
      - label: Référence
        Icône: i-lucide-book-open
        Enfants:
          - label: Présentation
            Description: Composants entièrement stylisés et personnalisables pour Nuxt.
            Étiquette: i-lucide-house
          - label: Installation
            Description: Découvrez comment installer et configurer Nuxt UI dans votre application.
            icon: i-lucide-cloud-download
          - label:'Icônes'
            Icône: i-lucide-smile
            description: 'Vous n'avez rien à faire,@ nuxt/icon s'en occupera automatiquement.'
          - label:"Couleurs"
            icon: 'i-lucide-swatch-book'
            Description: 'Choisissez une couleur primaire et une couleur neutre dans votre thème CSS Tailwind.'
          - label:'Thème'
            Icône: i-lucide-cog
            Vous pouvez personnaliser les composants en utilisant les props `class`/`ui` ou dans votre app.config.ts.
      - label: Composables
        icon: i-lucide-base de données
        Enfants:
          - label: définition des raccourcis
            Icône: i-lucide-file-text
            description: Définissez des raccourcis pour votre application.
            à/docs/composables/define-shortcuts
          - label: useOverlay
            Icône: i-lucide-file-text
            Description: Afficher un modal/slideover dans votre application.
            à:/docs/composables/use-overlay
          - label: utiliseToast
            Icône: i-lucide-file-text
            Description: Afficher un toast dans votre application.
            à:/docs/composables/use-toast
      - label: Composants
        Icône: i-lucide-box
        à/docs/composants
        Actif: vrai
        Enfants:
          - label: étiquette
            Icône: i-lucide-file-text
            Description: Utilisez NuxtLink avec des superpouvoirs.
            à:/docs/composants/link
          - label: Modalité
            Icône: i-lucide-file-text
            Description: Affiche un modal dans votre application.
            à:/docs/components/modal
          - label: NavigationMenu
            Icône: i-lucide-file-text
            Description : Affiche une liste de liens .
            à/docs/composants/navigation-menu
          - label : pagination
            Icône : i-lucide - file-text
            Description : Affiche une liste de pages .
            à :/docs/composants/pagination
          - label : Popover
            Icône : i-lucide - file-text
            Description : Affiche une boîte de dialogue non modale qui flotte autour d'un élément trigger .
            à :/docs/components/popover
          - label : Développement
            Icône : i-lucide - file-text
            Description : Afficher une barre horizontale pour indiquer la progression de la tâche .
            à :/docs/composants/progress
    - - étiquette : GitHub
        icon : i-simple - icons-github
        Étiquette : 6K
        Deux :https://github.com/nuxt/ui
        Référence : _ blank
        Tooltip :
          text : ' Ouvert sur GitHub '
          kbds :
            @476@6k
      - label : Aide
        Icône : i-lucide - circle-help
        handicapés: vrai
---
::

### Avec popover dans les articles

Lorsque l'orientation est `vertical` et que le menu est `collapsed`, vous pouvez définir la propriété `popover` sur `true` pour afficher un [](/docs/components/popover) autour des éléments avec leurs enfants, mais vous pouvez également utiliser la propriété `popover` sur chaque élément pour remplacer le pover par défaut.

::note
La propriété `popover` d'un élément affichera toujours un popover indépendamment de la propriété globale `popover`.
::

Vous pouvez transmettre n'importe quelle propriété du composant [Popover](/docs/components/popover) globalement ou sur chaque élément.

::component-code
---
Collapse: vrai
ignorer:
  @494@éléments
  - référencement
  @@ph496@classe
Extérieure:
  @497@articles
Extérieurs:
  - NavigationMenuItem [][]
items:
  Popover:
    @@ph499@vrai
    @500@faux
Props:
  popover: vrai
  Effondrement: vrai
  Orientation: "Vertical"
  items:
    - -étiquette: Liens
        Type: "étiquette"
      - label: Référence
        Icône: i-lucide-book-open
        Enfants:
          - label: Présentation
            Description: Composants entièrement stylisés et personnalisables pour Nuxt.
            Étiquette: i-lucide-house
          - label: Installation
            Description: Découvrez comment installer et configurer Nuxt UI dans votre application.
            icon: i-lucide-cloud-download
          - label:'Icônes'
            Icône: i-lucide-smile
            description: 'Vous n'avez rien à faire,@ nuxt/icon s'en occupera automatiquement.'
          - label:'Couleurs'
            icon: 'i-lucide-swatch-book'
            Description: 'Choisissez une couleur primaire et une couleur neutre dans votre thème CSS Tailwind.'
          - label:"Thème"
            Icône: i-lucide-cog
            Vous pouvez personnaliser les composants en utilisant les props `class`/`ui` ou dans votre app.config.ts.
      - label: Composables
        icon: i-lucide-base de données
        Popover:
          Mode: « Cliquez »
        Enfants:
          - label: définissez-les
            Icône: i-lucide-file-text
            description: Définissez des raccourcis pour votre application.
            à/docs/composables/define-shortcuts
          - label: useOverlay
            Icône: i-lucide-file-text
            Description: Afficher un modal/slideover dans votre application.
            à:/docs/composables/use-overlay
          - label: utiliseToast
            Icône: i-lucide-file-text
            Description: Afficher un toast dans votre application.
            à:/docs/composables/use-toast
      - label: Composants
        Icône: i-lucide-box
        à/docs/composants
        Actif: vrai
        Enfants:
          - label: étiquette
            Icône: i-lucide-file-text
            Description: Utilisez NuxtLink avec des superpouvoirs.
            à:/docs/composants/link
          - label: Modal
            Icône: i-lucide-file-text
            Description: Affiche un modal dans votre application.
            à:/docs/components/modal
          - label: NavigationMenu
            Icône: i-lucide-file-text
            Description : Affiche une liste de liens .
            à/docs/composants/navigation-menu
          - label : pagination
            Icône : i-lucide - file-text
            Description : affiche une liste de pages .
            à :/docs/composants/pagination
          - label : Popover
            Icône : i-lucide - file-text
            Description : Affiche une boîte de dialogue non modale qui flotte autour d'un élément trigger .
            à :/docs/components/popover
          - label : Développement
            Icône : i-lucide - file-text
            Description : Afficher une barre horizontale pour indiquer la progression de la tâche .
            à :/docs/composants/progress
    - - étiquette : GitHub
        icon : i-simple - icons-github
        Étiquette : 6K
        Deux :https://github.com/nuxt/ui
        Référence : _ blank
        Tooltip :
          text : ' Ouvert sur GitHub '
          kbds :
            @522@6k
      - label : Aide
        Icône : i-lucide - circle-help
        handicapés: vrai
---
::

::tip{to="#with-content-slot"}
Vous pouvez utiliser l'emplacement `#content` pour personnaliser le contenu du popover dans l'orientation `vertical`.
::

### Avec la puce dans les articles: badge{label="4.5+" class="align-text-top"}

Utilisez la propriété `chip` pour afficher un [Chip](/docs/components/chip) autour de l'icône des éléments, vous pouvez passer n'importe lequel de ses accessoires.

::component-code
---
Collapse: vrai
Ignorer:
  @@ph533@articles
  @@ph534@classe
Extérieure:
  @@535@@éléments
Extérieurs:
  - NavigationMenuItem [][]
Props:
  Effondrement: vrai
  Orientation: "Vertical"
  items:
    - -étiquette: Guide
        Icône: i-lucide-book-open
        Chipé:
          Couleur: erreur
      - label: Composables
        icon: i-lucide-base de données
        Chipé:
          Couleur: info
          Texte: 3
      - label : Composants
        Icône : i-lucide - box
        à/docs/composants
        Actif : vrai
        Chip : vrai
    - - étiquette : GitHub
        icon : i-simple - icons-github
        Deux :https://github.com/nuxt/ui
        Référence : _ blank
      - label : Aide
        Icône : i-lucide - circle-help
        handicapés : vrai
---
::

### Avec tabulation inférieure

Utilisez le prop`ui`pour transformer le menu Navigation en une barre d'onglets inférieure de style mobile avec des icônes et de petites étiquettes , similaire à YouTube ou Instagram .

::component-example
---
Collapse : vrai
name : ' navigation-menu - bottom-tab - bar-example '
---
::

### Avec étiquettes collées

Utilisez le prop`ui`pour afficher une étiquette sous chaque icône lorsqu ' elle est rétractée .

::component-example
---
Collapse : vrai
name : ' navigation-menu - collapsed-label - exemple '
---
::

::tip
Vous pouvez également le faire globalement via le`app.config.ts`en utilisant[`compoundVariants`](/docs/getting-started/theme/components#compound-variants):

```ts [app/app.config.ts]
export default defineAppConfig({
  ui: {
    navigationMenu: {
      compoundVariants: [{
        orientation: 'vertical',
        collapsed: true,
        class: {
          link: 'flex-col',
          linkLabel: 'block text-[10px]/3 text-center'
        }
      }]
    }
  }
})
```

::

### Avec slot personnalisé

Utilisez la propriété`slot`pour personnaliser un élément spécifique .

Vous aurez accès aux slots suivants :

@@
@@
@@
@@
@@

::component-example
---
Collapse: vrai
name: 'navigation-menu-custom-slot-example'
---
::

::tip{to="#slots"}
Vous pouvez également utiliser les emplacements `#item`,`#item-leading`,`#item-label`,`#item-trailing` et `#item-content` pour personnaliser tous les articles.
::

### Avec fente de traînée

Utilisez l'emplacement `#item-trailing` ou la propriété `slot`(`#{{ item.slot }}-trailing`) pour ajouter un [DropdownMenu](/docs/components/dropdown-menu) qui apparaît en survol, similaire à Notion ou Linear.

::component-example
---
Collapse: vrai
name: 'navigation-menu-trailing-slot-example'
---
::

### Avec emplacement de contenu

Utilisez l'emplacement `#item-content` ou la propriété `slot`(`#{{ item.slot }}-content`) pour personnaliser le contenu d'un élément spécifique.

::component-example
---
Collapse: vrai
name: 'navigation-menu-content-slot-example'
---
::

::note
Dans cet exemple, nous ajoutons la classe `sm:w-(--reka-navigation-menu-viewport-width)` à la classe `viewport` pour avoir une largeur dynamique.
::

@@ph604@@api

@@ph605@@props

Composants-props

### Slots

Composants slots

@@ph607@@émissions

Composants émetteurs

@@ph608@thème

Composant-thème

@changement@changement@changement.com

Composant-changelog
