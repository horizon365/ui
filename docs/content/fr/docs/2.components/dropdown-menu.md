---
title: dropdownmenu
description: Un menu pour afficher les actions lorsque vous cliquez sur un élément.
category: overlay
keywords:
  - menu
  - context menu
  - actions
links:
  - label: dropdownmenu
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/dropdown-menu
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DropdownMenu.vue
---

@@ph000@utilisation

Utilisez un [Button](/docs/components/button) ou tout autre composant dans l'emplacement par défaut du menu déroulant.

::component-code
---
Étiquette: true
Collapse: vrai
Ignorer:
  @@ph005@articles
  @@ph006@ui.content
Extérieur:
  @@ph007@articles
Extérieurs:
  @@@P008@@@DropdownMenuItem [][]
Props:
  items:
    - -étiquette: Benjamin
        Avatar:
          src: 'https://github.com/benjamincanac.png'
          Étiquette: Lazy
        Type: étiquette
    - -étiquette: Profil
        Icône: i-lucide-user
      - label: Facturation
        icon: i-lucide-carte de crédit
      - label: Réglages
        Icône: i-lucide-cog
        kbds:
          @@ph013 @@','
      - label: Raccourcis clavier
        Icône: i-lucide-moniteur
    - -étiquette: Équipe
        icon: i-lucide-utilisateurs
        filtre:
          placeholder: 'Rechercher des membres...'
        Enfants:
          - -étiquette: benjamincanac
              Avatar:
                src: 'https://github.com/benjamincanac.png'
                Étiquette: Lazy
            - étiquette: HugoRCD
              Avatar:
                src: 'https://github.com/HugoRCD.png'
                Étiquette: Lazy
            - label: étiquette
              Avatar:
                src: 'https://github.com/atinux.png'
                Étiquette: Lazy
            - label: romhml
              Avatar:
                src: 'https://github.com/romhml.png'
                Étiquette: Lazy
            - label: sandros94
              Avatar :
                src : ' https://github.com/sandros94.png '
                Étiquette : Lazy
            - label : J-Michalek
              Avatar :
                src : ' https://github.com/J-Michalek.png '
                Étiquette : Lazy
            - label : hywax
              Avatar :
                src : ' https://github.com/hywax.png '
                Étiquette : Lazy
      - label : Inviter les utilisateurs
        Icône : i-lucide - user-plus
        Enfants :
          - - étiquette : Email
              Icône : i-lucide - mail
            - label : message
              Icône : i-lucide - message-square
          - - étiquette : Plus
              Icône : i-lucide - circle-plus
              Enfants :
                - label : Importer depuis Slack
                  Icône : i-simple - icons-slack
                  à : ' https://slack.com'
                  Référence : _ blank
                - label: Importer depuis Trello
                  Icône: i-simple-icons-trello
                - label: Importer depuis Asana
                  Icône: i-simple-icons-asana
      - label: Nouvelle équipe
        Étiquette: i-lucide-plus
        kbds:
          @@ph031@méta
          @@ph032@n
    - -étiquette: GitHub
        icon: i-simple-icons-github
        à l'adresse:'https://github.com/nuxt/ui'
        Référence:_blank
      - label: Aide à l'emploi
        Icône: i-lucide-life-buoy
        à:'/docs/components/menu déroulant'
      - label: api
        Étiquette: i-lucide-cloud
        handicapés: vrai
    - -étiquette: Déconnexion
        Icône: i-lucide-log-out
        Couleur: erreur
        kbds:
          @@ph037@shift
          @@ph038@méta
          @@pH039@@q
Slots:
  Défaut:|

    @@@ 040 @
---

Référence: u-button {icon="i-lucide-menu" color="neutral" variant="outline"}
::

@@ph042@référencement

Utilisez le `items` prop comme un tableau d'objets avec les propriétés suivantes:

@@
@@
@@
@@
@@
@@
- [`checked?: boolean`{lang="ts-type"}](#with-checkbox-items)
@@
@@
@@
- [`onUpdateChecked?: (checked: boolean) => void`{lang="ts-type"}](#with-checkbox-items)
@@
- [`filter?: boolean | InputProps`{lang="ts-type"}](#with-filter-items)
@@
@@
@@
@@

Vous pouvez passer n'importe quelle propriété du composant [Link](/docs/components/link#props) comme `to`,`target`, etc.

::component-code
---
Étiquette: true
Collapse: vrai
ignorer:
  @@ph125@articles
  - ui.content
Extérieure:
  @@ph127@articles
Extérieurs:
  - DropdownMenuItem [][]
Props:
  items:
    - -étiquette: Benjamin
        Avatar:
          src: 'https://github.com/benjamincanac.png'
          Étiquette: Lazy
        Type: étiquette
    - -étiquette: Profil
        Icône: i-lucide-user
      - label: Facturation
        icon: i-lucide-carte de crédit
      - label: Réglages
        Icône: i-lucide-cog
        kbds:
          @@ph133 @','
      - label: Raccourcis clavier
        Icône : i-lucide - moniteur
    - - étiquette : Équipe
        icon : i-lucide - utilisateurs
      - label : Inviter des utilisateurs
        Icône : i-lucide - user-plus
        Enfants :
          - - étiquette : Email
              Icône : i-lucide - mail
            - label : Réponse
              Icône : i-lucide - message-square
          - - label : Plus d'informations
              Icône : i-lucide - circle-plus
              Enfants :
                - label : Importer depuis Slack
                  Icône : i-simple - icons-slack
                  à : ' https://slack.com'
                  Référence : _ blank
                - label : Importer depuis Trello
                  Icône : i-simple - icons-trello
                - label : Importer depuis Asana
                  Icône : i-simple - icons-asana
      - label : Nouvelle équipe
        Icône : i-lucide - plus
        kbds :
          @@ph144@méta
          @@ph145@n
    - -étiquette: GitHub
        icon: i-simple-icons-github
        à l'adresse:'https://github.com/nuxt/ui'
        Référence:_blank
      - label: Aide à l'emploi
        Icône: i-lucide-life-buoy
        à:'/docs/components/menu déroulant'
      - label: api
        Étiquette: i-lucide-cloud
        handicapés: vrai
    - -étiquette: Déconnexion
        Icône: i-lucide-log-out
        kbds:
          @@ph150@shift
          @@ph151@méta
          @@ph152 @
  UI:
    Contenu: 'W-48'
Slots:
  Défaut:|

    @@@ 153 @
---

Référence: u-button {icon="i-lucide-menu" color="neutral" variant="outline"}
::

::note
Vous pouvez également passer un tableau de tableaux à la prop `items` pour créer des groupes d'éléments séparés.
::

::tip
Chaque élément peut prendre un tableau `children` d'objets avec les mêmes propriétés que le prop `items` pour créer un menu imbriqué qui peut être contrôlé à l'aide des propriétés `open`,`defaultOpen` et `content`.
::

@@ph161@contenu

Utilisez la prop `content` pour contrôler la façon dont le contenu du menu déroulant est rendu, comme son `align` ou `side` par exemple.

::component-code
---
Étiquette: true
Collapse: vrai
ignorer:
  @@ph165@articles
  - ui.content
Extérieur:
  @@ph167@articles
Extérieurs:
  - DropdownMenuItem []
items:
  content.align:
    @@ph169@départ
    @@P170@réseau
    @@ph171@fin
  content.side:
    @@ph172@droite
    @@ph173@left
    @@ph174@top
    @@ph175@réduit
Props:
  items:
    - label: Profil
      Icône: i-lucide-user
    - label: Facturation
      icon: i-lucide-carte de crédit
    - label: Réglages
      Icône: i-lucide-cog
  contenu:
    Alignement: départ
    Étiquette: bottom
    Décalage: 8
  UI:
    Contenu: 'W-48'
Slots:
  Default:|

    @@@ 179 @
---

Le bouton {label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

### Filtre: badge{label="4.6+" class="align-text-top"}

Utilisez la prop `filter` pour afficher une entrée de filtre dans le menu déroulant. Par défaut à `false`.

::note{to="#with-ignore-filter"}
Utilisez la prop `ignore-filter` pour désactiver la recherche interne et utiliser votre propre logique de recherche.
::

::note{to="#with-filter-fields"}
Utilisez la prop `filter-fields` pour spécifier les champs à filtrer. Par défaut, il utilise la prop `labelKey`.
::

Vous pouvez passer n'importe quelle propriété du composant [Input](/docs/components/input) pour la personnaliser.

::component-code
---
Étiquette: true
Collapse: vrai
ignorer:
  @@ph192@articles
  - filter.icon
  - content.align
  - ui.content
Extérieur:
  @@ph196@articles
Extérieurs:
  - DropdownMenuItem []
Props:
  filtre:
    Icône: i-lucide-search
  items:
    - label: Profil
      Icône: i-lucide-user
    - label: Facturation
      icon: i-lucide-carte de crédit
    - label: Réglages
      Icône: i-lucide-cog
    - label: Équipe
      icon: i-lucide-utilisateurs
    - label: Inviter des utilisateurs
      Icône: i-lucide-user-plus
    - label: Nouvelle équipe
      Icône: i-lucide-plus
  contenu:
    Alignement: départ
  UI:
    Contenu: 'W-48'
Slots:
  Défaut:|

    @@@ 204 @
---

Référence: u-button {label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

::tip{to="#with-filter-items"}
Vous pouvez également activer le filtre sur des sous-menus spécifiques en utilisant le champ `filter` sur les éléments avec `children`.
::

@208@@Fédération

Utilisez la prop `arrow` pour afficher une flèche dans le menu déroulant.

::component-code
---
Étiquette: true
Collapse: vrai
ignorer:
  @@ph210@@flèche
  @@ph211@articles
  - ui.content
Extérieure:
  @@ph213@articles
Extérieurs:
  - DropdownMenuItem []
Props:
  Arrow: vrai
  items:
    - label: Profil
      Icône: i-lucide-user
    - label: Facturation
      icon: i-lucide-carte de crédit
    - label: Réglages
      Icône: i-lucide-cog
  UI:
    Contenu: 'W-48'
Slots:
  Default:|

    @@@ 218 @
---

Référence: u-button {label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

@220@Size

Utilisez la prop `size` pour contrôler la taille du menu déroulant.

::component-code
---
Étiquette: true
Collapse: vrai
Ignorer:
  @@222@articles
  - content.align
  - ui.content
Extérieur:
  @@225@articles
Extérieurs:
  @@226@@DropdownMenuItem []
Props:
  Taille: XL
  items:
    - label: Profil
      Icône: i-lucide-user
    - label: Facturation
      icon: i-lucide-carte de crédit
    - label: Réglages
      Icône: i-lucide-cog
  contenu:
    Alignement: départ
  UI:
    Contenu: 'W-48'
Slots:
  Default:|

    @@@ 230 @
---

Référence: u-button {size="xl" label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

::warning
Le prop `size` ne sera pas associé au bouton, vous devez le définir vous-même.
::

::note
En utilisant la même taille, les éléments du menu déroulant seront parfaitement alignés avec le bouton.
::

@@ph233@@mode

Utilisez la prop `modal` pour contrôler si le menu déroulant bloque l'interaction avec le contenu extérieur.

::component-code
---
Étiquette: true
Collapse: vrai
ignorer:
  @@ph236@articles
  - ui.content
Extérieure:
  @@ph238@articles
Extérieurs:
  - DropdownMenuItem []
Props:
  Modalité: Faux
  items:
    - label: Profil
      Icône: i-lucide-user
    - label: Facturation
      icon: i-lucide-carte de crédit
    - label: Réglages
      Icône: i-lucide-cog
  UI:
    Contenu: 'W-48'
Slots:
  Default:|

    @@@ 243 @
---

Référence: u-button {label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

### désactivé

Utilisez la prop `disabled` pour désactiver le menu déroulant.

::component-code
---
Étiquette: true
Collapse: vrai
ignorer:
  @@ph247@articles
  - ui.content
Extérieur:
  @@ph249@articles
Extérieurs:
  - DropdownMenuItem []
Props:
  handicapés: vrai
  items:
    - label: Profil
      Icône: i-lucide-user
    - label: Facturation
      icon: i-lucide-carte de crédit
    - label: Réglages
      Icône: i-lucide-cog
  UI:
    Contenu: 'W-48'
Slots:
  Défaut:|

    @@@ 254 @
---

Référence: u-button {label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

@@ph256@exemple

### Avec checkbox items

Vous pouvez utiliser la propriété `type` avec `checkbox` et utiliser les propriétés `checked`/`onUpdateChecked` pour contrôler l'état vérifié de l'élément.

::component-example
---
Collapse: vrai
name: 'menu déroulant-checkbox-items-exemple'
---
::

::note
Pour assurer la réactivité de l'état `checked` des éléments, il est recommandé d'envelopper votre tableau `items` dans un `computed`.
::

### Avec les éléments de couleur

Vous pouvez utiliser la propriété `color` pour mettre en surbrillance certains éléments avec une couleur.

::component-example
---
Collapse: vrai
nom: 'drop-menu-color-items-exemple'
---
::

### Avec éléments de filtre: badge{label="4.6+" class="align-text-top"}

Vous pouvez utiliser la propriété `filter` sur les éléments contenant `children` pour afficher une entrée de filtre dans le sous-menu.

::component-example
---
Collapse: vrai
name: 'menu déroulant-filtre-items-exemple'
---
::

### Contrôle état ouvert

Vous pouvez contrôler l'état ouvert en utilisant la prop `default-open` ou la directive `v-model:open`.

::component-example
---
Collapse: vrai
nommé:'drop-menu-open-exemple'
---
::

::note
Dans cet exemple, en utilisant [`defineShortcuts`](/docs/composables/define-shortcuts), vous pouvez basculer le menu déroulant en appuyant sur: kbd{value="O"}.
::

### Avec slot custom

Utilisez la propriété `slot` pour personnaliser un élément spécifique.

Vous aurez accès aux slots suivants:

@@
@@
@@
@@

::component-example
---
Collapse: vrai
nom: 'drop-menu-custom-slot-example'
---
::

::tip{to="#slots"}
Vous pouvez également utiliser les emplacements `#item`,`#item-leading`,`#item-label` et `#item-trailing` pour personnaliser tous les articles.
::

### Avec commutateur dans les articles

Vous pouvez utiliser la propriété `slot` avec un emplacement `#{{ slot }}-trailing` pour rendre un [Switch](/docs/components/switch) à l'intérieur d'un élément.

::component-example
---
Collapse: vrai
name: 'menu déroulant-itements-exemple'
---
::

### Avec ignorer le filtre: badge{label="4.6+" class="align-text-top"}

Lorsque vous utilisez le champ `filter` ou le champ `filter` sur des éléments contenant `children`, vous pouvez définir le champ `ignore-filter` sur `true` pour désactiver la recherche interne et utiliser votre propre logique de recherche.

::component-example
---
Collapse: vrai
name: 'menu-déroulant-ignore-filtre-exemple'
---
::

::note
Cet exemple utilise [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced) pour déboulonner les appels d'API. La récupération est différée avec `immediate: false` donc aucune demande n'est faite jusqu'à ce que le menu s'ouvre.
::

### Avec les champs de filtre: badge{label="4.6+" class="align-text-top"}

Lorsque vous utilisez la prop `filter` ou le champ `filter` sur des éléments avec `children`, vous pouvez définir la prop `filter-fields` avec un tableau de champs à filtrer.

::component-example
---
Collapse: vrai
name: 'menu déroulant-filtre-champs-exemple'
---
::

### Avec largeur de contenu de déclencheur

Vous pouvez développer le contenu sur toute la largeur de son bouton en ajoutant la classe `w-(--reka-dropdown-menu-trigger-width)` sur l'emplacement `ui.content`.

::component-example
---
Collapse: vrai
nom: 'dropdown-menu-content-width-example'
---
::

::tip
Vous pouvez également modifier la largeur du contenu globalement dans votre `app.config.ts`:

```
export default defineAppConfig({
  ui: {
    dropdownMenu: {
      slots: {
        content: 'w-(--reka-dropdown-menu-trigger-width)'
      }
    }
  }
})
```
::

### Extrait des raccourcis

Utilisez l'utilitaire [extractShortcuts](/docs/composables/extract-shortcuts) pour définir automatiquement des raccourcis à partir d'éléments de menu avec une propriété `kbds`. Il extrait récursivement des raccourcis et renvoie un objet compatible avec [defineShortcuts](/docs/composables/define-shortcuts).

```vue
<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const items: DropdownMenuItem[] = [{
  label: 'Invite users',
  icon: 'i-lucide-user-plus',
  children: [{
    label: 'Invite by email',
    icon: 'i-lucide-send-horizontal',
    kbds: ['meta', 'e'],
    onSelect() {
      console.log('Invite by email clicked')
    }
  }, {
    label: 'Invite by link',
    icon: 'i-lucide-link',
    kbds: ['meta', 'i'],
    onSelect() {
      console.log('Invite by link clicked')
    }
  }]
}, {
  label: 'New team',
  icon: 'i-lucide-plus',
  kbds: ['meta', 'n'],
  onSelect() {
    console.log('New team clicked')
  }
}]

defineShortcuts(extractShortcuts(items))
</script>
```

::note
Dans cet exemple,: kbd{value="meta"}: kbd{value="E" class="ms-px"},: kbd{value="meta"}: kbd{value="I" class="ms-px"} et: kbd{value="meta"}: kbd{value="N" class="ms-px"} déclencherait la fonction `select` de l'élément correspondant.
::

@@ph391@@api

@@ph392@@props

Composants-props

@@ph393@@Slots

Composants slots

@394@émissions

Composants émetteurs

@@P395@thème

Composant-thème

@396@changements

Composant-changelog
