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

## Utilisation

Utilisez la directive `v-model` pour contrôler la valeur de la CommandPalette ou la prop `default-value` pour définir la valeur initiale lorsque vous n'avez pas besoin de contrôler son état.

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - groups
  - modelValue
  - class
external:
  - groups
  - modelValue
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  modelValue: {}
  autofocus: false
  groups:
    - id: 'users'
      label: 'Users'
      items:
        - label: 'Benjamin Canac'
          suffix: 'benjamincanac'
          avatar:
            src: 'https://github.com/benjamincanac.png'
            loading: lazy
        - label: 'Hugo Richard'
          suffix: 'HugoRCD'
          avatar:
            src: 'https://github.com/HugoRCD.png'
            loading: lazy
        - label: 'Sébastien Chopin'
          suffix: 'atinux'
          avatar:
            src: 'https://github.com/atinux.png'
            loading: lazy
        - label: 'Romain Hamel'
          suffix: 'romhml'
          avatar:
            src: 'https://github.com/romhml.png'
            loading: lazy
        - label: 'Sandro Circi'
          suffix: 'sandros94'
          avatar:
            src: 'https://github.com/sandros94.png'
            loading: lazy
        - label: 'Jakub Michálek'
          suffix: 'J-Michalek'
          avatar:
            src: 'https://github.com/J-Michalek.png'
            loading: lazy
        - label: 'Alex'
          suffix: 'hywax'
          avatar:
            src: 'https://github.com/hywax.png'
            loading: lazy
        - label: 'Maxime Pauvert'
          suffix: 'maximepvrt'
          avatar:
            src: 'https://github.com/maximepvrt.png'
            loading: lazy
  class: 'flex-1 h-80'
---
::

::tip{to="#control-selected-items"}
Vous pouvez également utiliser l'événement `@update:model-value` pour écouter le ou les éléments sélectionnés.
::

### Groupes

Le composant CommandPalette filtre les groupes et classe les commandes correspondantes en fonction de leur pertinence au fur et à mesure que les utilisateurs tapent. Il fournit des résultats de recherche dynamiques et instantanés pour une découverte efficace des commandes. Utilisez le prop `groups` comme un tableau d'objets avec les propriétés suivantes:

- x`id: string`x{lang="ts-type"}
- x`label?: string`xx{lang="ts-type"}
- xx`slot?: string`xxxph0777x
- xx`items?: CommandPaletteItem[]`xx{lang="ts-type"}
Xph081xx[x`ignoreFilter?: boolean`x{lang="ts-type"}x](x#with-ignore-filterx)
Xph088xx[x`postFilter?: (searchTerm: string, items: T[]) => T[]`x{lang="ts-type"}x](x#with-post-filtered-itemsx)
- xx`highlightedIcon?: string`xx{lang="ts-type"}

::caution
Vous devez fournir un `id` pour chaque groupe sinon le groupe sera ignoré.
::

Chaque groupe contient un tableau `items` d'objets qui définissent les commandes. Chaque élément peut avoir les propriétés suivantes:

- x`prefix?: string`x{lang="ts-type"}
- x`label?: string`x{lang="ts-type"}
- x`suffix?: string`x{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- x`avatar?: AvatarProps`x{lang="ts-type"}
- x`chip?: ChipProps`x{lang="ts-type"}
- x`kbds?: string[] | KbdProps[]`x{lang="ts-type"}
- `active?: boolean`x{lang="ts-type"}
- x`loading?: boolean`x{lang="ts-type"}
- x`disabled?: boolean`x{lang="ts-type"}
- x[x`slot?: string`x{lang="ts-type"}x](#with-custom-slotx)
- x`placeholder?: string`x{lang="ts-type"}
- x`children?: CommandPaletteItem[]`x{lang="ts-type"}
- x`onSelect?: (e: Event) => void`x{lang="ts-type"}
- x`class?: any`x{lang="ts-type"}
- x`ui?: { item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLabel?: ClassNameValue, itemLabelPrefix?: ClassNameValue, itemLabelBase?: ClassNameValue, itemLabelSuffix?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingKbds?: ClassNameValue, itemTrailingKbdsSize?: ClassNameValue, itemTrailingHighlightedIcon?: ClassNameValue, itemTrailingIcon?: ClassNameValue }`x{lang="ts-type"}

Vous pouvez passer n'importe quelle propriété du composant [Link](/docs/components/link#props) telle que `to`, `target`, etc.

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - groups
  - modelValue
  - class
external:
  - groups
  - modelValue
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  modelValue: {}
  autofocus: false
  groups:
    - id: 'users'
      label: 'Users'
      items:
        - label: 'Benjamin Canac'
          suffix: 'benjamincanac'
          avatar:
            src: 'https://github.com/benjamincanac.png'
            loading: lazy
        - label: 'Hugo Richard'
          suffix: 'HugoRCD'
          avatar:
            src: 'https://github.com/HugoRCD.png'
            loading: lazy
        - label: 'Sébastien Chopin'
          suffix: 'atinux'
          avatar:
            src: 'https://github.com/atinux.png'
            loading: lazy
        - label: 'Romain Hamel'
          suffix: 'romhml'
          avatar:
            src: 'https://github.com/romhml.png'
            loading: lazy
        - label: 'Sandro Circi'
          suffix: 'sandros94'
          avatar:
            src: 'https://github.com/sandros94.png'
            loading: lazy
        - label: 'Jakub Michálek'
          suffix: 'J-Michalek'
          avatar:
            src: 'https://github.com/J-Michalek.png'
            loading: lazy
        - label: 'Alex'
          suffix: 'hywax'
          avatar:
            src: 'https://github.com/hywax.png'
            loading: lazy
        - label: 'Maxime Pauvert'
          suffix: 'maximepvrt'
          avatar:
            src: 'https://github.com/maximepvrt.png'
            loading: lazy
  class: 'flex-1'
---
::

::tip{to="#with-children-in-items"}
Chaque élément peut prendre un tableau d'objets `children` avec les propriétés suivantes pour créer des sous-menus:
::

### Multiple

Utilisez le prop `multiple` pour permettre plusieurs sélections.

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - groups
  - modelValue
  - multiple
  - class
external:
  - groups
  - modelValue
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  multiple: true
  autofocus: false
  modelValue: []
  groups:
    - id: 'users'
      label: 'Users'
      items:
        - label: 'Benjamin Canac'
          suffix: 'benjamincanac'
          avatar:
            src: 'https://github.com/benjamincanac.png'
            loading: lazy
        - label: 'Hugo Richard'
          suffix: 'HugoRCD'
          avatar:
            src: 'https://github.com/HugoRCD.png'
            loading: lazy
        - label: 'Sébastien Chopin'
          suffix: 'atinux'
          avatar:
            src: 'https://github.com/atinux.png'
            loading: lazy
        - label: 'Romain Hamel'
          suffix: 'romhml'
          avatar:
            src: 'https://github.com/romhml.png'
            loading: lazy
        - label: 'Sandro Circi'
          suffix: 'sandros94'
          avatar:
            src: 'https://github.com/sandros94.png'
            loading: lazy
        - label: 'Jakub Michálek'
          suffix: 'J-Michalek'
          avatar:
            src: 'https://github.com/J-Michalek.png'
            loading: lazy
        - label: 'Alex'
          suffix: 'hywax'
          avatar:
            src: 'https://github.com/hywax.png'
            loading: lazy
        - label: 'Maxime Pauvert'
          suffix: 'maximepvrt'
          avatar:
            src: 'https://github.com/maximepvrt.png'
            loading: lazy
  class: 'flex-1'
---
::

::caution
Assurez-vous de passer un tableau à la prop `default-value` ou à la directive `v-model`.
::

### Placeholder électronique

Utilisez la prop `placeholder` pour modifier le texte de l'espace réservé.

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  placeholder: 'Search an app...'
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

### Taille: badge{label="4.4+" class="align-text-top"}

Utilisez la prop `size` pour modifier la taille de la CommandPalette.

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  size: 'xl'
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

### Icône

Utilisez la prop `icon` pour personnaliser l'entrée [Icon](xph353).

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  icon: 'i-lucide-box'
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la clé `ui.icons.search`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.search`.
:::
::

### Selected Icône sélectionné

Utilisez la prop `selected-icon` pour personnaliser l'élément sélectionné [Icon](/docs/components/icon). Par défaut à `i-lucide-check`.

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - groups
  - modelValue
  - multiple
  - class
external:
  - groups
  - modelValue
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  multiple: true
  autofocus: false
  modelValue:
    - label: 'Benjamin Canac'
      suffix: 'benjamincanac'
      avatar:
        src: 'https://github.com/benjamincanac.png'
        loading: lazy
  selectedIcon: 'i-lucide-circle-check'
  groups:
    - id: 'users'
      label: 'Users'
      items:
        - label: 'Benjamin Canac'
          suffix: 'benjamincanac'
          avatar:
            src: 'https://github.com/benjamincanac.png'
            loading: lazy
        - label: 'Hugo Richard'
          suffix: 'HugoRCD'
          avatar:
            src: 'https://github.com/HugoRCD.png'
            loading: lazy
        - label: 'Sébastien Chopin'
          suffix: 'atinux'
          avatar:
            src: 'https://github.com/atinux.png'
            loading: lazy
        - label: 'Romain Hamel'
          suffix: 'romhml'
          avatar:
            src: 'https://github.com/romhml.png'
            loading: lazy
        - label: 'Sandro Circi'
          suffix: 'sandros94'
          avatar:
            src: 'https://github.com/sandros94.png'
            loading: lazy
        - label: 'Jakub Michálek'
          suffix: 'J-Michalek'
          avatar:
            src: 'https://github.com/J-Michalek.png'
            loading: lazy
        - label: 'Alex'
          suffix: 'hywax'
          avatar:
            src: 'https://github.com/hywax.png'
            loading: lazy
        - label: 'Maxime Pauvert'
          suffix: 'maximepvrt'
          avatar:
            src: 'https://github.com/maximepvrt.png'
            loading: lazy
  class: 'flex-1'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.check`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.check`.
:::
::

Icône ### Trailing

Use the `trailing-icon` prop to customize the trailing [Icon](/docs/components/icon) when an item has children.

::component-code
---
collapse: true
prettier: true
hide:
  - autofocus
ignore:
  - groups
  - class
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  trailingIcon: 'i-lucide-arrow-right'
  groups:
    - id: 'actions'
      items:
        - label: 'Share'
          icon: 'i-lucide-share'
          children:
            - label: 'Email'
              icon: 'i-lucide-mail'
            - label: 'Copy'
              icon: 'i-lucide-copy'
            - label: 'Link'
              icon: 'i-lucide-link'
  class: 'flex-1'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.chevronRight`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la clé `ui.icons.chevronRight`.
:::
::

### Chargement

Utilisez le prop `loading` pour afficher une icône de chargement sur la CommandPalette.

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  loading: true
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

### Chargement Icône

Utilisez la prop `loading-icon` pour personnaliser l'icône de chargement. Par défaut, `i-lucide-loader-circle`.

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  loading: true
  loadingIcon: 'i-lucide-loader'
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.loading`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.loading`.
:::
::

### Fermer

Utilisez la prop `close` pour afficher un [Button](/docs/components/button) pour supprimer la CommandPalette.

::tip
Un événement `update:open` sera émis lorsque le bouton Fermer est cliqué.
::

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
  - close
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  close: true
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

Vous pouvez passer n'importe quelle propriété du composant [Button](/docs/components/button) pour le personnaliser.

::component-code
---
collapse: true
prettier: true
hide:
  - autofocus
ignore:
  - close.color
  - close.variant
  - groups
  - class
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  close:
    color: primary
    variant: outline
    class: 'rounded-full'
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

### Fermer l'icône

Use the `close-icon` prop to customize the close button [Icon](/docs/components/icon).

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
  - close
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  close: true
  closeIcon: 'i-lucide-arrow-right'
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
You can customize this icon globally in your `app.config.ts` under `ui.icons.close` key.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
You can customize this icon globally in your `vite.config.ts` under `ui.icons.close` key.
:::
::

### Retour

Utilisez la prop `back` pour personnaliser ou masquer le bouton retour (avec la valeur `false`) affiché lors de la navigation dans un sous-menu.

Vous pouvez passer n'importe quelle propriété du composant [Button](/docs/components/button) pour la personnaliser.

::component-code
---
collapse: true
prettier: true
hide:
  - autofocus
ignore:
  - back.color
  - groups
  - class
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  back:
    color: primary
  groups:
    - id: 'actions'
      items:
        - label: 'Share'
          icon: 'i-lucide-share'
          children:
            - label: 'Email'
              icon: 'i-lucide-mail'
            - label: 'Copy'
              icon: 'i-lucide-copy'
            - label: 'Link'
              icon: 'i-lucide-link'
  class: 'flex-1'
---
::

### Back Icône

Utilisez le prop `back-icon` pour personnaliser le bouton retour [Icon](/docs/components/icon). Par défaut, `i-lucide-arrow-left`.

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
  - back
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  back: true
  backIcon: 'i-lucide-house'
  groups:
    - id: 'actions'
      items:
        - label: 'Share'
          icon: 'i-lucide-share'
          children:
            - label: 'Email'
              icon: 'i-lucide-mail'
            - label: 'Copy'
              icon: 'i-lucide-copy'
            - label: 'Link'
              icon: 'i-lucide-link'
  class: 'flex-1'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.arrowLeft`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.arrowLeft`.
:::
::

### Désactivé

Utilisez la prop `disabled` pour désactiver la CommandPalette.

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - groups
  - class
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  disabled: true
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

## Exemples

### Control élément sélectionné (s)

Vous pouvez contrôler le ou les éléments sélectionnés en utilisant la prop `default-value` ou la directive `v-model`, en utilisant le champ `onSelect` sur chaque élément ou en utilisant l'événement `@update:model-value`.

::component-example
---
collapse: true
name: 'command-palette-select-example'
class: '!p-0'
props:
  autofocus: false
---
::

::tip
Utilisez la prop `value-key` pour sélectionner un champ d'un élément à utiliser comme valeur au lieu de l'objet lui-même. Utilisez la prop `by` pour comparer des objets par un champ au lieu de référence.
::

### Control terme de recherche

Utilisez la directive `v-model:search-term` pour contrôler le terme de recherche.

::component-example
---
collapse: true
name: 'command-palette-search-term-example'
class: '!p-0'
props:
  autofocus: false
---
::

::note
Cet exemple utilise l'événement `@update:model-value` pour réinitialiser le terme de recherche lorsqu 'un élément est sélectionné.
::

### Avec les enfants dans les articles

Vous pouvez créer des menus hiérarchiques à l'aide de la propriété `children` dans les éléments. Lorsqu 'un élément a des enfants, il affiche automatiquement une icône de chevron et permet la navigation dans un sous-menu.

::component-example
---
collapse: true
prettier: true
name: 'command-palette-items-children-example'
class: '!p-0'
props:
  autofocus: false
---
::

::note
Lorsque vous naviguez dans un sous-menu:
- Le terme de recherche est réinitialisé
Le bouton retour - A apparaît dans l'entrée
- Vous pouvez revenir au groupe précédent en appuyant sur: kbd{value="backspace"} touche
::

### Avec les éléments récupérés

Vous pouvez récupérer des éléments à partir d'une API et les utiliser dans la CommandPalette.

::component-example
---
collapse: true
name: 'command-palette-fetch-example'
class: '!p-0'
props:
  autofocus: false
---
::

::note
Cet exemple utilise `useLazyFetch` avec `server: false` pour récupérer des données sur le client sans bloquer le rendu initial.L'état de chargement vérifie à la fois l'état `pending` et `idle` pour afficher un indicateur de chargement avant et pendant la récupération.
::

### Avec filtre ignorer

Vous pouvez définir le champ `ignoreFilter` sur `true` sur un groupe pour désactiver la recherche interne et utiliser votre propre logique de recherche.

::component-example
---
collapse: true
name: 'command-palette-ignore-filter-example'
class: '!p-0'
props:
  autofocus: false
---
::

::note
Cet exemple utilise [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced) pour déboulonner les appels de l'API. L'état de chargement vérifie à la fois l'état `pending` et `idle` pour afficher un indicateur de chargement avant et pendant la récupération.
::

### Avec éléments post-filtrés

Vous pouvez utiliser le champ `postFilter` sur un groupe pour filtrer les éléments après la recherche.

::component-example
---
collapse: true
name: 'command-palette-post-filter-example'
class: '!p-0'
props:
  autofocus: false
---
::

::note
Commencez à taper pour voir apparaître les éléments de niveau supérieur.
::

### Avec recherche de fusible personnalisée

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
Les `fuseOptions` sont les options de [Fuse.js](https://www.fusejs.io/), les `resultLimit` sont le nombre maximum de résultats à renvoyer et les `matchAllWhenSearchEmpty` sont un booléen pour faire correspondre tous les éléments lorsque le terme de recherche est vide.
::

Vous pouvez par exemple définir `{ fuseOptions: { includeMatches: true } }`{lang="ts-type"} pour mettre en évidence le terme de recherche dans les éléments.

::component-example
---
collapse: true
name: 'command-palette-fuse-example'
class: '!p-0'
props:
  autofocus: false
---
::

### Avec virtualisation: badge{label="4.1+" class="align-text-top"}

Utilisez la prop `virtualize` pour activer la virtualisation de grandes listes en tant que booléen ou objet avec des options telles que `{ estimateSize: 32, overscan: 12 }`.

::warning{to="https://github.com/unovue/reka-ui/issues/1885" target="_blank"}
Lorsqu 'il est activé, tous les groupes sont aplatis en une seule liste en raison d'une limitation de l'interface utilisateur de Reka.
::

::component-example
---
collapse: true
name: 'command-palette-virtualize-example'
class: '!p-0'
props:
  autofocus: false
---
::

### Dans un Popover

Vous pouvez utiliser le composant CommandPalette dans le contenu d'un [Popover](/docs/components/popover).

::component-example
---
collapse: true
name: 'popover-command-palette-example'
props:
  autofocus: false
---
::

### Dans un Modal

Vous pouvez utiliser le composant CommandPalette dans le contenu d'un [Modal](/docs/components/modal).

::component-example
---
collapse: true
name: 'modal-command-palette-example'
props:
  autofocus: false
---
::

::note
Cet exemple utilise `useLazyFetch` avec `immediate: false` pour récupérer des données uniquement lorsque le Modal s'ouvre.
::

### Dans une armoire

Vous pouvez utiliser le composant CommandPalette dans le contenu d'un [Drawer](/docs/components/drawer).

::component-example
---
collapse: true
name: 'drawer-command-palette-example'
props:
  autofocus: false
---
::

::note
Cet exemple utilise `useLazyFetch` avec `immediate: false` pour récupérer des données uniquement lorsque le tiroir s'ouvre.
::

### Listen ouvert

Lors de l'utilisation du prop `close`, vous pouvez écouter l'événement `update:open` lorsque vous cliquez sur le bouton.

::component-example
---
collapse: true
name: 'command-palette-open-example'
props:
  autofocus: false
---
::

::note
Cela peut être utile lorsque vous utilisez la CommandPalette à l'intérieur d'un [`Modal`](/docs/components/modal) par exemple.
::

### Avec slot de pied de page

Utilisez l'emplacement `#footer` pour ajouter du contenu personnalisé en bas de la palette de commandes, comme l'aide aux raccourcis clavier ou des actions supplémentaires.

::component-example
---
collapse: true
name: 'command-palette-footer-slot-example'
class: '!p-0'
props:
  autofocus: false
---
::

### With slot personnalisé

Utilisez la propriété `slot` pour personnaliser un élément ou un groupe spécifique.

Vous aurez accès aux slots suivants:

- x`#{{ item.slot }}`x{lang="ts-type"}
- x`#{{ item.slot }}-leading`x{lang="ts-type"}
- x`#{{ item.slot }}-label`x{lang="ts-type"}
- x`#{{ item.slot }}-trailing`x{lang="ts-type"}

- x`#{{ group.slot }}`x{lang="ts-type"}
- x`#{{ group.slot }}-leading`x{lang="ts-type"}
- x`#{{ group.slot }}-label`x{lang="ts-type"}
- x`#{{ group.slot }}-trailing`x{lang="ts-type"}

::component-example
---
collapse: true
name: 'command-palette-custom-slot-example'
class: '!p-0'
props:
  autofocus: false
---
::

::tip{to="#slots"}
Vous pouvez également utiliser les emplacements `#item`, `#item-leading`, `#item-label` et `#item-trailing` pour personnaliser tous les éléments.
::

## API

### Props and

:component-props

### Slots

:component-slots

### Emis

:component-emits

## Thème

:component-theme

## Changelog écrit

:component-changelog
