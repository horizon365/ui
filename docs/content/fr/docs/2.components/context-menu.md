---
title: Contexte Menu
description: Un menu pour afficher les actions lorsque vous faites un clic droit sur un élément.
category: overlay
keywords:
  - right click menu
links:
  - label: Contexte Menu
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/context-menu
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ContextMenu.vue
---

@@ph000@@utilisation

Utilisez tout ce que vous voulez dans l'emplacement par défaut du menu contextuel, et cliquez avec le bouton droit dessus pour afficher le menu.

::component-code
---
Étiquette: true
Collapse: vrai
ignorer:
  @@ph001@articles
  @@ph002@ui.content
Extérieure:
  @@ph003@articles
Extérieurs:
  @@@@@ContextMenuItem [][]
Props:
  items:
    - -étiquette: Apparence
        Enfants:
          - label: Système
            Icône: i-lucide-moniteur
          - label: Lumière
            Étiquette: i-lucide-sun
          - label: Noir
            Étiquette: i-lucide-moon
    - -label: Afficher la barre latérale
        kbds:
          @@ph010@méta
          @@ph011@s
      - label: Afficher la barre d'outils
        kbds:
          @@ph013@@shift
          @@ph014@méta
          @@ph015@d
      - label: Effondrement des onglets épinglés
        handicapés: vrai
    - -label: Actualiser la page
      - label: Effacer les cookies et actualiser
      - label: Effacer le cache et actualiser
      - type: séparateur
      - label: Développeur
        Enfants:
          - -label: Voir la source
              kbds:
                @@ph023@méta
                @@24@changement
                @@ph025@fr
            - label: Outils de développement
              kbds:
                @@227@option
                @@ph028@méta
                @@229@notre
            - label: Inspecter les éléments
              kbds:
                @@ph031@option
                @@ph032@méta
                @@ph033@@c
          - -label: Console JavaScript
              kbds:
                @@pH035@option
                @@ph036@méta
                @@pH037@@j
Slots:
  Default:|

    @@@ 038 @
      Clic droit ici
    @@@ 039 @
---

: div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[clic droit ici]
::

@@ph041@@articles

Utilisez le `items` prop comme un tableau d'objets avec les propriétés suivantes:

@@
@@
@@
@@
@@
[`color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral"`{lang="ts-type"}](PH0667
[`checked?: boolean`{lang="ts-type"}](#with-checkbox-items)
@@
[`slot?: string`{lang="ts-type"}](#with-custom-slot)
@@
[`onUpdateChecked?: (checked: boolean) => void`{lang="ts-type"}](#with-checkbox-items)
@@
@@
@@

Vous pouvez transmettre n'importe quelle propriété du composant [Link](/docs/components/link#props) comme `to`,`target`, etc.

::component-code
---
Étiquette: true
Collapse: vrai
ignorer:
  @@ph111@articles
  - ui.content
Extérieure:
  @@ph113@articles
Extérieurs:
  @@114@@ContextMenuItem [][]
Props:
  items:
    - -étiquette: Apparence
        Enfants:
          - label: Système
            Icône: i-lucide-moniteur
          - label: Lumière
            Étiquette: i-lucide-sun
          - label: Noir
            Étiquette: i-lucide-moon
    - -label: Afficher la barre latérale
        kbds:
          @@ph120@méta
          @@ph121
      - label: Afficher la barre d'outils
        kbds:
          @@ph123@@shift
          @@ph124@méta
          @@ph125 @
      - label: Collapse des onglets épinglés
        handicapés: vrai
    - -label: actualiser la page
      - label: Effacer les cookies et actualiser
      - label: Effacer le cache et actualiser
      - type: séparateur
      - label: Développeur
        Enfants:
          - -label: Voir la source
              kbds:
                @@ph133@méta
                @@ph134@@shift
                @@ph135@fr
            - label: Outils de développement
              kbds:
                - option
                @@ph138@méta
                @@ph139 @
            - label: Inspecter les éléments
              kbds:
                - option
                @@ph142@méta
                @@ph143@c
          - -label: Console JavaScript
              kbds:
                - option
                @@ph146@méta
                @@ph147 @
  UI:
    Contenu: 'W-48'
Slots:
  Default:|

    @@@ 148 @
      Clic droit ici
    @@@ 149 @
---

: div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[clic droit ici]
::

::note
Vous pouvez également passer un tableau de tableaux à la prop `items` pour créer des groupes d'éléments séparés.
::

::tip
Chaque élément peut prendre un tableau `children` d'objets avec les mêmes propriétés que le prop `items` pour créer un menu imbriqué qui peut être contrôlé à l'aide des propriétés `open`,`defaultOpen` et `content`.
::

### Size

Utilisez la prop `size` pour modifier la taille du menu contextuel.

::component-code
---
Étiquette: true
Collapse: vrai
Ignorer:
  @@ph159@articles
  - ui.content
Extérieure:
  @@ph161@articles
Extérieurs:
  - ContextMenuItem []
Props:
  Taille: XL
  items:
    - label: Système
      Icône: i-lucide-moniteur
    - label: Lumière
      Étiquette: i-lucide-sun
    - label: Noir
      Étiquette: i-lucide-moon
  UI:
    Contenu: 'W-48'
Slots:
  Défaut:|

    @@@ 166 @
      Clic droit ici
    @@@ 167 @
---

: div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[clic droit ici]
::

### Modal

Utilisez la prop `modal` pour contrôler si le ContextMenu bloque l'interaction avec le contenu extérieur.

::component-code
---
Étiquette: true
Collapse: vrai
ignorer:
  @@ph172@articles
  - ui.content
Extérieur:
  @@ph174@articles
Extérieurs:
  - ContextMenuItem []
Props:
  Modalité: Faux
  items:
    - label: Système
      Icône: i-lucide-moniteur
    - label: Lumière
      Étiquette: i-lucide-sun
    - label: Noir
      Étiquette: i-lucide-moon
  UI:
    Contenu: 'W-48'
Slots:
  Défaut:|

    @@@ 179 @
      Clic droit ici
    @@@ 180 @
---

: div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[clic droit ici]
::


### désactivé

Utilisez la prop `disabled` pour désactiver le menu contextuel.

::component-code
---
Étiquette: true
Collapse: vrai
ignorer:
  @@ph184@articles
  - ui.content
Extérieur:
  @@ph186@articles
Extérieurs:
  - ContextMenuItem []
Props:
  handicapés: vrai
  items:
    - label: Système
      Icône: i-lucide-moniteur
    - label: Lumière
      Étiquette: i-lucide-sun
    - label: Noir
      Étiquette: i-lucide-moon
  UI:
    Contenu: 'W-48'
Slots:
  Défaut:|

    @@@ 191 @
      Clic droit ici
    @@@ 2019 @
---

: div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[clic droit ici]
::

@@ph194@Exemples

### Avec checkbox items

Vous pouvez utiliser la propriété `type` avec `checkbox` et utiliser les propriétés `checked`/`onUpdateChecked` pour contrôler l'état vérifié de l'élément.

::component-example
---
Collapse: vrai
nom: 'context-menu-checkbox-items-example'
---
::

::note
Pour assurer la réactivité de l'état `checked` des éléments, il est recommandé d'envelopper votre `items` array dans un `computed`.
::

### Avec des éléments de couleur

Vous pouvez utiliser la propriété `color` pour mettre en surbrillance certains éléments avec une couleur.

::component-example
---
Collapse: vrai
nom: 'context-menu-color-items-exemple'
---
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
nom: 'context-menu-custom-slot-example'
---
::

::tip{to="#slots"}
Vous pouvez également utiliser les emplacements `#item`,`#item-leading`,`#item-label` et `#item-trailing` pour personnaliser tous les éléments.
::

### Extrait des raccourcis

Utilisez l'utilitaire [extractShortcuts](/docs/composables/extract-shortcuts) pour définir automatiquement des raccourcis à partir d'éléments de menu avec une propriété `kbds`. Il extrait récursivement des raccourcis et renvoie un objet compatible avec [defineShortcuts]().

```vue
<script setup lang="ts">
const items = [
  [{
    label: 'Show Sidebar',
    kbds: ['meta', 'S'],
    onSelect() {
      console.log('Show Sidebar clicked')
    }
  }, {
    label: 'Show Toolbar',
    kbds: ['shift', 'meta', 'D'],
    onSelect() {
      console.log('Show Toolbar clicked')
    }
  }, {
    label: 'Collapse Pinned Tabs',
    disabled: true
  }], [{
    label: 'Refresh the Page'
  }, {
    label: 'Clear Cookies and Refresh'
  }, {
    label: 'Clear Cache and Refresh'
  }, {
    type: 'separator' as const
  }, {
    label: 'Developer',
    children: [[{
      label: 'View Source',
      kbds: ['option', 'meta', 'U'],
      onSelect() {
        console.log('View Source clicked')
      }
    }, {
      label: 'Developer Tools',
      kbds: ['option', 'meta', 'I'],
      onSelect() {
        console.log('Developer Tools clicked')
      }
    }], [{
      label: 'Inspect Elements',
      kbds: ['option', 'meta', 'C'],
      onSelect() {
        console.log('Inspect Elements clicked')
      }
    }], [{
      label: 'JavaScript Console',
      kbds: ['option', 'meta', 'J'],
      onSelect() {
        console.log('JavaScript Console clicked')
      }
    }]]
  }]
]

defineShortcuts(extractShortcuts(items))
</script>
```

::note
Dans cet exemple,: kbd{value="meta"}: kbd{value="S" class="ms-px"},: kbd{value="shift"}: kbd{value="meta" class="ms-px"}: kbd{value="D" class="ms-px"},:{value="option"}:{value="meta" class="ms-px"}:{value="U" class="ms-px"}:{value="option"}:{value="meta" class="ms-px"}::{value="meta" class="ms-px"}:: kbd{value="I" class="ms-px"},: kbd{value="option"}: kbd{value="meta" class="ms-px"}: kbd{value="C" class="ms-px"} et: kbd{value="option"}: kbd{value="meta" class="ms-px"}: kbd{value="J" class="ms-px"} déclencherait la fonction `select` de l'élément correspondant.
::

@@ph310@api

@@ph311@@props

Composants-props

### Slots

Composants slots

### émissions

Composants émetteurs

@@ph314@thème

Composant-thème

@changement@changement@changement.com

Composant-changelog
