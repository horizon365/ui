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

## Utilisation

Utilisez un [Button](/docs/components/button) ou tout autre composant dans l'emplacement par défaut du menu déroulant.

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
  - DropdownMenuItem[][]
props:
  items:
    - - label: Benjamin
        avatar:
          src: 'https://github.com/benjamincanac.png'
          loading: lazy
        type: label
    - - label: Profile
        icon: i-lucide-user
      - label: Billing
        icon: i-lucide-credit-card
      - label: Settings
        icon: i-lucide-cog
        kbds:
          - ','
      - label: Keyboard shortcuts
        icon: i-lucide-monitor
    - - label: Team
        icon: i-lucide-users
        filter:
          placeholder: 'Search members...'
        children:
          - - label: benjamincanac
              avatar:
                src: 'https://github.com/benjamincanac.png'
                loading: lazy
            - label: HugoRCD
              avatar:
                src: 'https://github.com/HugoRCD.png'
                loading: lazy
            - label: atinux
              avatar:
                src: 'https://github.com/atinux.png'
                loading: lazy
            - label: romhml
              avatar:
                src: 'https://github.com/romhml.png'
                loading: lazy
            - label: sandros94
              avatar:
                src: 'https://github.com/sandros94.png'
                loading: lazy
            - label: J-Michalek
              avatar:
                src: 'https://github.com/J-Michalek.png'
                loading: lazy
            - label: hywax
              avatar:
                src: 'https://github.com/hywax.png'
                loading: lazy
      - label: Invite users
        icon: i-lucide-user-plus
        children:
          - - label: Email
              icon: i-lucide-mail
            - label: Message
              icon: i-lucide-message-square
          - - label: More
              icon: i-lucide-circle-plus
              children:
                - label: Import from Slack
                  icon: i-simple-icons-slack
                  to: 'https://slack.com'
                  target: _blank
                - label: Import from Trello
                  icon: i-simple-icons-trello
                - label: Import from Asana
                  icon: i-simple-icons-asana
      - label: New team
        icon: i-lucide-plus
        kbds:
          - meta
          - n
    - - label: GitHub
        icon: i-simple-icons-github
        to: 'https://github.com/nuxt/ui'
        target: _blank
      - label: Support
        icon: i-lucide-life-buoy
        to: '/docs/components/dropdown-menu'
      - label: API
        icon: i-lucide-cloud
        disabled: true
    - - label: Logout
        icon: i-lucide-log-out
        color: error
        kbds:
          - shift
          - meta
          - q
slots:
  default: |

    <UButton icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{icon="i-lucide-menu" color="neutral" variant="outline"}
::

### Articles

Utilisez le prop `items` comme un tableau d'objets avec les propriétés suivantes:

- x`label?: string`x{lang="ts-type"}
- x`icon?: string`x{lang="ts-type"}
- x`avatar?: AvatarProps`x{lang="ts-type"}
- `kbds?: string[] | KbdProps[]`x{lang="ts-type"}
- x[x`type?: "link" | "label" | "separator" | "checkbox"`x{lang="ts-type"}](x#with-checkbox-itemsx)
- x[`color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral"`x{lang="ts-type"}x](x#with-color-itemsx)
- x[x`checked?: boolean`x{lang="ts-type"}](x#with-checkbox-items)
- x`disabled?: boolean`x{lang="ts-type"}
- x[x`slot?: string`x{lang="ts-type"}](x#with-custom-slotx)
- x`onSelect?: (e: Event) => void`x{lang="ts-type"}
- x[x`onUpdateChecked?: (checked: boolean) => void`x{lang="ts-type"}](x#with-checkbox-itemsx)
- x`children?: DropdownMenuItem[] | DropdownMenuItem[][]`{lang="ts-type"}
- [x`filter?: boolean | InputProps`x{lang="ts-type"}](x#with-filter-itemsx)
- x`filterFields?: string[]`x{lang="ts-type"}
- x`ignoreFilter?: boolean`x{lang="ts-type"}
- `class?: any`x{lang="ts-type"}
- x`ui?: { item?: ClassNameValue, label?: ClassNameValue, separator?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLabel?: ClassNameValue, itemLabelExternalIcon?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue, itemTrailingKbds?: ClassNameValue, itemTrailingKbdsSize?: ClassNameValue }`x{lang="ts-type"}

Vous pouvez passer n'importe quelle propriété du composant [Link](/docs/components/link#props) telle que `to`, `target`, etc.

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
  - DropdownMenuItem[][]
props:
  items:
    - - label: Benjamin
        avatar:
          src: 'https://github.com/benjamincanac.png'
          loading: lazy
        type: label
    - - label: Profile
        icon: i-lucide-user
      - label: Billing
        icon: i-lucide-credit-card
      - label: Settings
        icon: i-lucide-cog
        kbds:
          - ','
      - label: Keyboard shortcuts
        icon: i-lucide-monitor
    - - label: Team
        icon: i-lucide-users
      - label: Invite users
        icon: i-lucide-user-plus
        children:
          - - label: Email
              icon: i-lucide-mail
            - label: Message
              icon: i-lucide-message-square
          - - label: More
              icon: i-lucide-circle-plus
              children:
                - label: Import from Slack
                  icon: i-simple-icons-slack
                  to: 'https://slack.com'
                  target: _blank
                - label: Import from Trello
                  icon: i-simple-icons-trello
                - label: Import from Asana
                  icon: i-simple-icons-asana
      - label: New team
        icon: i-lucide-plus
        kbds:
          - meta
          - n
    - - label: GitHub
        icon: i-simple-icons-github
        to: 'https://github.com/nuxt/ui'
        target: _blank
      - label: Support
        icon: i-lucide-life-buoy
        to: '/docs/components/dropdown-menu'
      - label: API
        icon: i-lucide-cloud
        disabled: true
    - - label: Logout
        icon: i-lucide-log-out
        kbds:
          - shift
          - meta
          - q
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{icon="i-lucide-menu" color="neutral" variant="outline"}
::

::note
Vous pouvez également passer un tableau de tableaux à la prop `items` pour créer des groupes d'éléments séparés.
::

::tip
Chaque élément peut prendre un tableau d'objets `children` avec les mêmes propriétés que le prop `items` pour créer un menu imbriqué qui peut être contrôlé à l'aide des propriétés `open`, `defaultOpen` et `content`.
::

### contenu

Utilisez la prop `content` pour contrôler la façon dont le contenu du menu déroulant est rendu, comme son `align` ou `side` par exemple.

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
  - DropdownMenuItem[]
items:
  content.align:
    - start
    - center
    - end
  content.side:
    - right
    - left
    - top
    - bottom
props:
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
  content:
    align: start
    side: bottom
    sideOffset: 8
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{label="ouvert" icon="i-lucide-menu" color="neutral" variant="outline"}
::

### Filter: badge{label="4.6+" class="align-text-top"}

Utilisez la prop `filter` pour afficher une entrée de filtre à l'intérieur du menu déroulant.

::note{to="#with-ignore-filter"}
Utilisez le prop `ignore-filter` pour désactiver la recherche interne et utiliser votre propre logique de recherche.
::

::note{to="#with-filter-fields"}
Utilisez la prop `filter-fields` pour spécifier les champs à filtrer. Par défaut, il utilise la prop `labelKey`.
::

Vous pouvez passer n'importe quelle propriété du composant [Input](/docs/components/input) pour le personnaliser.

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - filter.icon
  - content.align
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[]
props:
  filter:
    icon: i-lucide-search
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
    - label: Team
      icon: i-lucide-users
    - label: Invite users
      icon: i-lucide-user-plus
    - label: New team
      icon: i-lucide-plus
  content:
    align: start
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{label="ouvert" icon="i-lucide-menu" color="neutral" variant="outline"}
::

::tip{to="#with-filter-items"}
Vous pouvez également activer le filtre sur des sous-menus spécifiques en utilisant le champ `filter` sur les éléments avec `children`.
::

### Arrow équipé

Utilisez la prop `arrow` pour afficher une flèche dans le menu déroulant.

::component-code
---
prettier: true
collapse: true
ignore:
  - arrow
  - items
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[]
props:
  arrow: true
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{label="ouvert" icon="i-lucide-menu" color="neutral" variant="outline"}
::

### Size

Utilisez le prop `size` pour contrôler la taille du menu déroulant.

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - content.align
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[]
props:
  size: xl
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
  content:
    align: start
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton size="xl" label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{size="xl" label="ouvert" icon="i-lucide-menu" color="neutral" variant="outline"}
::

::warning
Le prop `size` ne sera pas associé au bouton, vous devez le configurer vous-même.
::

::note
En utilisant la même taille, les éléments du menu déroulant seront parfaitement alignés avec le bouton.
::

### Modale

Utilisez la prop `modal` pour contrôler si le menu déroulant bloque l'interaction avec le contenu extérieur.

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
  - DropdownMenuItem[]
props:
  modal: false
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{label="ouvert" icon="i-lucide-menu" color="neutral" variant="outline"}
::

### Désactivé

Utilisez la prop `disabled` pour désactiver le menu déroulant.

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
  - DropdownMenuItem[]
props:
  disabled: true
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{label="ouvert" icon="i-lucide-menu" color="neutral" variant="outline"}
::

## Exemples

### With checkbox éléments

Vous pouvez utiliser la propriété `type` avec `checkbox` et utiliser les propriétés `checked`/`onUpdateChecked` pour contrôler l'état vérifié de l'élément.

::component-example
---
collapse: true
name: 'dropdown-menu-checkbox-items-example'
---
::

::note
Pour assurer la réactivité de l'état des éléments `checked`, il est recommandé d'envelopper votre tableau `items` dans un `computed`.
::

### Avec éléments de couleur

Vous pouvez utiliser la propriété `color` pour mettre en évidence certains éléments avec une couleur.

::component-example
---
collapse: true
name: 'dropdown-menu-color-items-example'
---
::

### Avec éléments de filtre: badge{label="4.6+" class="align-text-top"}

Vous pouvez utiliser la propriété `filter` sur les éléments avec `children` pour afficher une entrée de filtre dans le sous-menu.

::component-example
---
collapse: true
name: 'dropdown-menu-filter-items-example'
---
::

### Control État ouvert

Vous pouvez contrôler l'état ouvert en utilisant la prop `default-open` ou la directive `v-model:open`.

::component-example
---
collapse: true
name: 'dropdown-menu-open-example'
---
::

::note
Dans cet exemple, en utilisant [`defineShortcuts`](/docs/composables/define-shortcuts), vous pouvez basculer le menu déroulant en appuyant sur: kbd{value="O"}.
::

### With slot personnalisé

Utilisez la propriété `slot` pour personnaliser un élément spécifique.

Vous aurez accès aux slots suivants:

- x`#{{ item.slot }}`x{lang="ts-type"}
- x`#{{ item.slot }}-leading`x{lang="ts-type"}
- x`#{{ item.slot }}-label`x{lang="ts-type"}
- x`#{{ item.slot }}-trailing`x{lang="ts-type"}

::component-example
---
collapse: true
name: 'dropdown-menu-custom-slot-example'
---
::

::tip{to="#slots"}
Vous pouvez également utiliser les emplacements `#item`, `#item-leading`, `#item-label` et `#item-trailing` pour personnaliser tous les éléments.
::

### With Switch dans les articles

Vous pouvez utiliser la propriété `slot` avec un emplacement `#{{ slot }}-trailing` pour rendre un [Switch](/docs/components/switch) à l'intérieur d'un élément.

::component-example
---
collapse: true
name: 'dropdown-menu-switch-items-example'
---
::

### Avec ignorer le filtre: badge{label="4.6+" class="align-text-top"}

Lorsque vous utilisez la prop `filter` ou le champ `filter` sur des éléments avec `children`, vous pouvez définir la prop `ignore-filter` sur `true` pour désactiver la recherche interne et utiliser votre propre logique de recherche.

::component-example
---
collapse: true
name: 'dropdown-menu-ignore-filter-example'
---
::

::note
Cet exemple utilise [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced) pour déboulonner les appels de l'API. La récupération est différée avec `immediate: false` afin qu 'aucune demande ne soit faite jusqu'à ce que le menu s'ouvre.
::

### Avec les champs de filtre: badge{label="4.6+" class="align-text-top"}

Lorsque vous utilisez la prop `filter` ou le champ `filter` sur des éléments avec `children`, vous pouvez définir la prop `filter-fields` avec un tableau de champs à filtrer.

::component-example
---
collapse: true
name: 'dropdown-menu-filter-fields-example'
---
::

### Avec largeur de contenu de déclenchement

Vous pouvez développer le contenu sur toute la largeur de son bouton en ajoutant la classe `w-(--reka-dropdown-menu-trigger-width)` sur l'emplacement `ui.content`.

::component-example
---
collapse: true
name: 'dropdown-menu-content-width-example'
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

### Extract raccourcis

Utilisez l'utilitaire [extractShortcuts](/docs/composables/extract-shortcuts) pour définir automatiquement des raccourcis à partir d'éléments de menu avec une propriété `kbds`. Il extrait récursivement des raccourcis et renvoie un objet compatible avec [defineShortcuts](xph619).

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
Dans cet exemple,: kbd{value="meta"}: kbd{value="E" class="ms-px"},: kbd{value="meta"}: kbd{value="I" class="ms-px"} et: kbd{value="meta"}: kbd{value="N" class="ms-px"} déclencheraient la fonction `select` de l'élément correspondant.
::

## API and

### Props équipements

:component-props

### Slots

:component-slots

### Emis

:component-emits

## Thème

:component-theme

## Changelog

:component-changelog
