---
description: Un composant de vue en arborescence pour afficher et interagir avec les structures de données hiérarchiques.
category: data
keywords:
  - file tree
  - hierarchy
  - folder tree
links:
  - label: arbre
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tree
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Tree.vue
---

## Utilisation

Utilisez le composant Arbre pour afficher une structure hiérarchique des éléments.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

### Éléments

Utilisez le prop `items` comme un tableau d'objets avec les propriétés suivantes:

- x`icon?: string`xx{lang="ts-type"}
- x`label?: string`x{lang="ts-type"}
- x`trailingIcon?: string`x{lang="ts-type"}
- x`defaultExpanded?: boolean`x{lang="ts-type"}
- x`disabled?: boolean`x{lang="ts-type"}
- xx`slot?: string`xx{lang="ts-type"}
- x`children?: TreeItem[]`xx{lang="ts-type"}
- xx`onToggle?: (e: TreeItemToggleEvent<TreeItem>) => void`xx{lang="ts-type"}
- x`onSelect?: (e: TreeItemSelectEvent<TreeItem>) => void`xx{lang="ts-type"}
- x`class?: any`x{lang="ts-type"}
- x`ui?: { item?: ClassNameValue, itemWithChildren?: ClassNameValue, link?: ClassNameValue, linkLeadingIcon?: ClassNameValue, linkLabel?: ClassNameValue, linkTrailing?: ClassNameValue, linkTrailingIcon?: ClassNameValue, listWithChildren?: ClassNameValue }`xx{lang="ts-type"}

::note
Un identifiant unique est requis pour chaque élément. Le composant utilisera la prop `label` comme identifiant si aucun `get-key` n'est fourni. Idéalement, vous devriez fournir une prop de fonction `get-key` pour renvoyer un identifiant unique. Vous pouvez également utiliser la prop `labelKey` pour spécifier quelle propriété utiliser comme identifiant unique.
::

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

### Multiple

Utilisez le prop `multiple` pour permettre plusieurs sélections d'éléments.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  multiple: true
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

Référence: badgexph146X

Utilisez la prop `nested` pour contrôler si l'arbre est rendu avec une structure imbriquée ou comme une liste plate.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  nested: false
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

::note{to="#with-virtualization"}
Lorsque `nested` est `false`, tous les éléments sont rendus au même niveau avec une indentation pour indiquer la hiérarchie.
::

### couleur

Utilisez le prop `color` pour changer la couleur de l'arbre.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  color: neutral
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

### Size

Utilisez le prop `size` pour modifier la taille de l'arbre.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  size: xl
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

Icône ### Trailing

Utilisez la prop `trailing-icon` pour personnaliser le [Icon](/docs/components/icon) de fin d'un nœud parent.

::note
Si une icône est spécifiée pour un élément, elle aura toujours priorité sur ces accessoires.
::

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  trailingIcon: 'i-lucide-arrow-down'
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          trailingIcon: 'i-lucide-chevron-down'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.chevronDown`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.chevronDown`.
:::
::

### Expanded Icon (Icône étendue)

Utilisez les accessoires `expanded-icon` et `collapsed-icon` pour personnaliser les icônes d'un nœud parent lorsqu 'il est développé ou réduit. Par défaut, `i-lucide-folder-open` et `i-lucide-folder` respectivement.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  expandedIcon: 'i-lucide-book-open'
  collapsedIcon: 'i-lucide-book'
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser ces icônes globalement dans votre `app.config.ts` sous les touches `ui.icons.folder` et `ui.icons.folderOpen`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser ces icônes globalement dans votre `vite.config.ts` sous les touches `ui.icons.folder` et `ui.icons.folderOpen`.
:::
::

### Disabled

Utilisez le prop `disabled` pour empêcher toute interaction de l'utilisateur avec l'arbre.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  disabled: true
  items:
    - label: 'app'
      icon: 'i-lucide-folder'
      defaultExpanded: true
      children:
        - label: 'composables'
          icon: 'i-lucide-folder'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components'
          icon: 'i-lucide-folder'
          children:
            - label: 'Home'
              icon: 'i-lucide-folder'
              children:
                - label: 'Card.vue'
                  icon: 'i-vscode-icons-file-type-vue'
                - label: 'Button.vue'
                  icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

::note
Vous pouvez également désactiver des éléments individuels en utilisant `item.disabled`.
::

## exemples

### Control élément sélectionné (s)

Vous pouvez contrôler le ou les éléments sélectionnés en utilisant la prop `default-value` ou la directive `v-model`.

::component-example
---
name: 'tree-model-value-example'
collapse: true
props:
  class: 'w-60'
---
::

::tip
Utilisez la prop `get-key` pour modifier la fonction utilisée pour obtenir la clé unique de chaque élément lorsqu 'un `v-model` ou `default-value` est fourni.
::

Si vous souhaitez empêcher la sélection d'un élément, vous pouvez utiliser la propriété `item.onSelect()`{lang="ts-type"} ou l'événement global `select`:

::component-example
---
name: 'tree-on-select-example'
collapse: true
props:
  class: 'w-60'
---
::

::note
Cela vous permet d'étendre ou de réduire un élément parent sans le sélectionner.
::

### Control éléments étendus

Vous pouvez contrôler les éléments développés à l'aide de la prop `default-expanded` ou de la directive `v-model`.

::component-example
---
name: 'tree-expanded-example'
collapse: true
props:
  class: 'w-60'
---
::

Si vous souhaitez empêcher l'extension d'un élément, vous pouvez utiliser la propriété `item.onToggle()`{lang="ts-type"} ou l'événement global `toggle`:

::component-example
---
name: 'tree-on-toggle-example'
collapse: true
props:
  class: 'w-60'
---
::

::note
Cela vous permet de sélectionner un élément parent sans développer ni réduire ses enfants.
::

### Avec case à cocher dans les éléments: badge{label="4.1+" class="align-text-top"}

Vous pouvez utiliser l'emplacement `item-leading` pour ajouter un [Checkbox](/docs/components/checkbox) aux éléments. Utilisez les accessoires `multiple`, `propagate-select` et `bubble-select` pour activer la sélection multiple avec relation parent-enfant et les événements `select` et `toggle` pour contrôler l'état sélectionné et étendu des éléments.

::component-example
---
name: 'tree-checkbox-items-example'
collapse: true
props:
  class: 'w-60'
---
::

::note
Cet exemple utilise la prop `as` pour changer les éléments de `button` à `div` car le [`Checkbox`](/docs/components/checkbox) est également rendu en tant que `button`.
::

### Avec glisser-déposer: badge{label="4.1+" class="align-text-top"}

Utilisez le composable [`useSortable`](https://vueuse.org/integrations/useSortable/) de [`@vueuse/integrations`](https://vueuse.org/integrations/README.html) pour activer la fonctionnalité de glisser-déposer sur l'arbre. Cette intégration enveloppe [Sortable.js](https://sortablejs.github.io/Sortable/) pour fournir une expérience de glisser-déposer transparente.

::component-example
---
prettier: true
collapse: true
name: 'tree-drag-and-drop-example'
---
::

::note
Cet exemple définit la prop `nested` à `false` pour avoir une liste plate d'éléments afin que les éléments puissent être glissés et déposés.
::

### Avec virtualisation: badge{label="4.1+" class="align-text-top"}

Utilisez la prop `virtualize` pour activer la virtualisation de grandes listes en tant que booléen ou objet avec des options telles que `{ estimateSize: 32, overscan: 12 }`.

::warning
Lorsque la virtualisation est activée, la structure de l'arborescence est aplatie, de la même façon que pour définir la prop `nested` sur `false`.
::

::component-example
---
prettier: true
name: 'tree-virtualize-example'
props:
  class: 'w-60'
---
::

### Avec slot personnalisé

Utilisez la propriété `slot` pour personnaliser un élément spécifique.

Vous aurez accès aux slots suivants:

- x`#{{ item.slot }}-wrapper`x{lang="ts-type"}
- x`#{{ item.slot }}`x{lang="ts-type"}
- x`#{{ item.slot }}-leading`x{lang="ts-type"}
- x`#{{ item.slot }}-label`{lang="ts-type"}
- x`#{{ item.slot }}-trailing`x{lang="ts-type"}

::component-example
---
name: 'tree-custom-slot-example'
collapse: true
props:
  class: 'w-60'
---
::

## API

### Props

:component-props

### Slots

:component-slots

### Emits

:component-emits

## Thème

:component-theme

## Changelog écrit

:component-changelog
