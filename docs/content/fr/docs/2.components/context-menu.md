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

## Utilisation

Utilisez tout ce que vous voulez dans l'emplacement par défaut du menu contextuel, et cliquez avec le bouton droit dessus pour afficher le menu.

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - ContextMenuItem[][]
props:
  items:
    - - label: Appearance
        children:
          - label: System
            icon: i-lucide-monitor
          - label: Light
            icon: i-lucide-sun
          - label: Dark
            icon: i-lucide-moon
    - - label: Show Sidebar
        kbds:
          - meta
          - s
      - label: Show Toolbar
        kbds:
          - shift
          - meta
          - d
      - label: Collapse Pinned Tabs
        disabled: true
    - - label: Refresh the Page
      - label: Clear Cookies and Refresh
      - label: Clear Cache and Refresh
      - type: separator
      - label: Developer
        children:
          - - label: View Source
              kbds:
                - meta
                - shift
                - u
            - label: Developer Tools
              kbds:
                - option
                - meta
                - i
            - label: Inspect Elements
              kbds:
                - option
                - meta
                - c
          - - label: JavaScript Console
              kbds:
                - option
                - meta
                - j
slots:
  default: |

    <div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">
      Right click here
    </div>
---

:div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[Right click here]
::

### Éléments

Utilisez le prop `items` comme un tableau d'objets avec les propriétés suivantes:

- x`label?: string`xx{lang="ts-type"}
- x`icon?: string`x{lang="ts-type"}
- x`avatar?: AvatarProps`x{lang="ts-type"}
- xx`kbds?: string[] | KbdProps[]`xx{lang="ts-type"}
Xph079xx[x`type?: "link" | "label" | "separator" | "checkbox"`x{lang="ts-type"}x](x#with-checkbox-itemsx)
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- x`disabled?: boolean`x{lang="ts-type"}
- x[x`slot?: string`x{lang="ts-type"}x](x#with-custom-slotx)
- x`onSelect?: (e: Event) => void`{lang="ts-type"}
Xph113xx[x`onUpdateChecked?: (checked: boolean) => void`x{lang="ts-type"}x](x#with-checkbox-itemsx)
- `children?: ContextMenuItem[] | ContextMenuItem[][]`{lang="ts-type"}
- x`class?: any`x{lang="ts-type"}
- x`ui?: { item?: ClassNameValue, label?: ClassNameValue, separator?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLabel?: ClassNameValue, itemLabelExternalIcon?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue, itemTrailingKbds?: ClassNameValue, itemTrailingKbdsSize?: ClassNameValue }`x{lang="ts-type"}

Vous pouvez passer n'importe quelle propriété du composant [Link](xph133) telle que `to`, `target`, etc.

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - ContextMenuItem[][]
props:
  items:
    - - label: Appearance
        children:
          - label: System
            icon: i-lucide-monitor
          - label: Light
            icon: i-lucide-sun
          - label: Dark
            icon: i-lucide-moon
    - - label: Show Sidebar
        kbds:
          - meta
          - s
      - label: Show Toolbar
        kbds:
          - shift
          - meta
          - d
      - label: Collapse Pinned Tabs
        disabled: true
    - - label: Refresh the Page
      - label: Clear Cookies and Refresh
      - label: Clear Cache and Refresh
      - type: separator
      - label: Developer
        children:
          - - label: View Source
              kbds:
                - meta
                - shift
                - u
            - label: Developer Tools
              kbds:
                - option
                - meta
                - i
            - label: Inspect Elements
              kbds:
                - option
                - meta
                - c
          - - label: JavaScript Console
              kbds:
                - option
                - meta
                - j
  ui:
    content: 'w-48'
slots:
  default: |

    <div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">
      Right click here
    </div>
---

:div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[Right click here]
::

::note
Vous pouvez également passer un tableau de tableaux à la prop `items` pour créer des groupes d'éléments séparés.
::

::tip
Chaque élément peut prendre un tableau d'objets `children` avec les mêmes propriétés que le prop `items` pour créer un menu imbriqué qui peut être contrôlé à l'aide des propriétés `open`, `defaultOpen` et `content`.
::

### Size

Utilisez la prop `size` pour modifier la taille du menu contextuel.

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - ContextMenuItem[]
props:
  size: xl
  items:
    - label: System
      icon: i-lucide-monitor
    - label: Light
      icon: i-lucide-sun
    - label: Dark
      icon: i-lucide-moon
  ui:
    content: 'w-48'
slots:
  default: |

    <div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">
      Right click here
    </div>
---

:div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[Right click here]
::

### Modale

Utilisez la prop `modal` pour contrôler si le ContextMenu bloque l'interaction avec le contenu extérieur.

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - ContextMenuItem[]
props:
  modal: false
  items:
    - label: System
      icon: i-lucide-monitor
    - label: Light
      icon: i-lucide-sun
    - label: Dark
      icon: i-lucide-moon
  ui:
    content: 'w-48'
slots:
  default: |

    <div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">
      Right click here
    </div>
---

:div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[Right click here]
::


### Désactivé

Utilisez la prop `disabled` pour désactiver le Menu contextuel.

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - ContextMenuItem[]
props:
  disabled: true
  items:
    - label: System
      icon: i-lucide-monitor
    - label: Light
      icon: i-lucide-sun
    - label: Dark
      icon: i-lucide-moon
  ui:
    content: 'w-48'
slots:
  default: |

    <div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">
      Right click here
    </div>
---

:div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[Right click here]
::

## exemples

### With checkbox éléments

Vous pouvez utiliser la propriété `type` avec `checkbox` et utiliser les propriétés `checked`/`onUpdateChecked` pour contrôler l'état vérifié de l'élément.

::component-example
---
collapse: true
name: 'context-menu-checkbox-items-example'
---
::

::note
Pour assurer la réactivité de l'état des éléments `checked`, il est recommandé d'envelopper votre baie `items` dans un `computed`.
::

### Avec éléments de couleur

Vous pouvez utiliser la propriété `color` pour mettre en évidence certains éléments avec une couleur.

::component-example
---
collapse: true
name: 'context-menu-color-items-example'
---
::

### With slot personnalisé

Utilisez la propriété `slot` pour personnaliser un élément spécifique.

Vous aurez accès aux slots suivants:

- x`#{{ item.slot }}`{lang="ts-type"}
- x`#{{ item.slot }}-leading`x{lang="ts-type"}
- x`#{{ item.slot }}-label`x{lang="ts-type"}
- x`#{{ item.slot }}-trailing`x{lang="ts-type"}

::component-example
---
collapse: true
name: 'context-menu-custom-slot-example'
---
::

::tip{to="#slots"}
Vous pouvez également utiliser les emplacements `#item`, `#item-leading`, `#item-label` et `#item-trailing` pour personnaliser tous les éléments.
::

### Extract Raccourcis

Utilisez l'utilitaire [extractShortcuts](/docs/composables/extract-shortcuts) pour définir automatiquement des raccourcis à partir d'éléments de menu avec une propriété `kbds`. Il extrait récursivement les raccourcis et renvoie un objet compatible avec [defineShortcuts](xph347).

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
Dans cet exemple,: kbd{value="meta"}: kbd{value="S" class="ms-px"},: kbd{value="shift"}: kbd{value="meta" class="ms-px"}: kbd{value="D" class="ms-px"},: kbd{value="option"}: kbd{value="meta" class="ms-px"}: kbd{value="U" class="ms-px"},: kbd{value="option"}: kbd{value="meta" class="ms-px"}: kbd{value="I" class="ms-px"},: kbd{value="option"}: kbd{value="meta" class="ms-px"}: kbd{value="C" class="ms-px"} et: kbd{value="option"}: kbd{value="meta" class="ms-px"}: kbd{value="J" class="ms-px"} déclencherait la fonction `select` de l'élément correspondant.
::

## API

### Props équipements

:component-props

### Slots

:component-slots

### Emis

:component-emits

## Thème

:component-theme

## Changelog écrit

:component-changelog
