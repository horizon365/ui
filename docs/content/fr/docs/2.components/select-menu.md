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

## Utilisation

Utilisez la directive `v-model` pour contrôler la valeur du SelectMenu ou la prop `default-value` pour définir la valeur initiale lorsque vous n'avez pas besoin de contrôler son état.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - modelValue
  - items
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

::tip
Utilisez-le sur un [`Select`](/docs/components/select) pour tirer parti du composant [`Combobox`xph030https://reka-ui.com/docs/components/combobox) de Reka UI qui offre des fonctionnalités de recherche et de sélection multiple.
::

::note
Ce composant est similaire au [`InputMenu`](/docs/components/input-menu), mais il utilise une sélection au lieu d'une entrée avec la recherche dans le menu.
::

### Éléments

Utilisez la prop `items` comme tableau de chaînes, de nombres ou de booléens:

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

Vous pouvez également passer un tableau d'objets avec les propriétés suivantes:

- xx`label?: string`xx{lang="ts-type"}
- x[x`type?: "label" | "separator" | "item"`x{lang="ts-type"}x](x#with-items-typex)
- x[x`icon?: string`x{lang="ts-type"}x](x#with-icons-in-itemsx)
Xph075xx[x`avatar?: AvatarProps`x{lang="ts-type"}x](x#with-avatar-in-itemsx)
- x{lang="ts-type"}x{lang="ts-type"}x{lang="ts-type"}{lang="ts-type"}x{lang="ts-type"}x{lang="ts-type"}xxph0888xxxxxxph08888xxxx88xx88xxx88x8x8x8x8x8x8x8x8x8x8x8xx8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8
- xx`disabled?: boolean`xx{lang="ts-type"}
- xx`onSelect?: (e: Event) => void`xxx{lang="ts-type"}
- xx`class?: any`xx{lang="ts-type"}
- x`ui?: { label?: ClassNameValue, separator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLabel?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue }`x{lang="ts-type"}

::component-code
---
ignore:
  - modelValue.label
  - items
  - class
external:
  - items
  - modelValue
externalTypes:
  - SelectMenuItem[]
props:
  modelValue:
    label: 'Todo'
  items:
    - label: 'Backlog'
    - label: 'Todo'
    - label: 'In Progress'
    - label: 'Done'
  class: 'w-48'
---
::

::caution
Contrairement au composant [`Select`](/docs/components/select), le SelectMenu s'attend à ce que l'objet entier soit passé à la directive `v-model` ou à la prop `default-value` par défaut.
::

Vous pouvez également passer un tableau de tableaux au prop `items` pour afficher des groupes d'éléments séparés.

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Apple'
  items:
    - - Apple
      - Banana
      - Blueberry
      - Grapes
      - Pineapple
    - - Aubergine
      - Broccoli
      - Carrot
      - Courgette
      - Leek
  class: 'w-48'
---
::

XPH153xValue Clé

Vous pouvez choisir de lier une seule propriété de l'objet plutôt que l'objet entier en utilisant la prop. `value-key`.

::component-code
---
collapse: true
ignore:
  - modelValue
  - valueKey
  - items
  - class
external:
  - items
  - modelValue
externalTypes:
  - SelectMenuItem[]
props:
  modelValue: 'todo'
  valueKey: 'id'
  items:
    - label: 'Backlog'
      id: 'backlog'
    - label: 'Todo'
      id: 'todo'
    - label: 'In Progress'
      id: 'in_progress'
    - label: 'Done'
      id: 'done'
  class: 'w-48'
---
::

::tip
Utilisez la prop `by` pour comparer des objets par un champ au lieu de référence lorsque le `model-value` est un objet.
::

### Multiple équivalent

Utilisez la prop `multiple` pour permettre des sélections multiples, les éléments sélectionnés seront séparés par une virgule dans le déclencheur.

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
  - multiple
  - class
external:
  - items
  - modelValue
props:
  modelValue:
    - Backlog
    - Todo
  multiple: true
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

::caution
Assurez-vous de passer un tableau à la prop `default-value` ou à la directive `v-model`.
::

### Placeholder électronique

Utilisez la prop `placeholder` pour définir un texte d'espace réservé.

::component-code
---
prettier: true
ignore:
  - items
  - class
external:
  - items
props:
  placeholder: 'Select status'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### Search entrée

Utilisez la prop `search-input` pour personnaliser ou masquer l'entrée de recherche (avec la valeur `false`).

Vous pouvez passer n'importe quelle propriété du composant [Input](xph233) pour le personnaliser.

::component-code
---
prettier: true
ignore:
  - modelValue.label
  - modelValue.icon
  - items
  - class
external:
  - items
  - modelValue
externalTypes:
  - SelectMenuItem[]
props:
  modelValue:
    label: 'Backlog'
    icon: 'i-lucide-circle-help'
  searchInput:
    placeholder: 'Filter...'
    icon: 'i-lucide-search'
  items:
    - label: Backlog
      icon: 'i-lucide-circle-help'
    - label: Todo
      icon: 'i-lucide-circle-plus'
    - label: In Progress
      icon: 'i-lucide-circle-arrow-up'
    - label: Done
      icon: 'i-lucide-circle-check'
  class: 'w-48'
---
::

::tip
Vous pouvez définir le prop `search-input` sur `false` pour masquer l'entrée de recherche.
::

::note
Utilisez `:search-input="{ autofocus: false }"` pour éviter que la saisie de recherche ne soit focalisée lorsque le menu s'ouvre, par exemple pour éviter d'ouvrir le clavier virtuel sur les appareils tactiles.
::

### contenu

Use the `content` prop to control how the SelectMenu content is rendered, like its `align` or `side` for example.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
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
  modelValue: 'Backlog'
  content:
    align: center
    side: bottom
    sideOffset: 8
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### flèche

Utilisez le prop `arrow` pour afficher une flèche sur le SelectMenu.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
  - arrow
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  arrow: true
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### couleur

Utilisez le prop `color` pour changer la couleur de la bague lorsque le SelectMenu est focalisé.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  color: neutral
  highlight: true
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

::note
La prop `highlight` est utilisée ici pour afficher l'état de mise au point. Il est utilisé en interne lorsqu 'une erreur de validation se produit.
::

### Variant

Utilisez le prop `variant` pour modifier la variante du SelectMenu.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  color: neutral
  variant: subtle
  highlight: false
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### Size

Utilisez la prop `size` pour modifier la taille du SelectMenu.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  size: xl
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### Icône

Utilisez la prop `icon` pour afficher un [Icon](/docs/components/icon) à l'intérieur du SelectMenu.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  icon: 'i-lucide-search'
  size: md
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

Icône ### Trailing

Utilisez la prop `trailing-icon` pour personnaliser le [Icon](/docs/components/icon).

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  trailingIcon: 'i-lucide-arrow-down'
  size: md
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
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

### Selected Icône

Utilisez la prop `selected-icon` pour personnaliser l'icône lorsqu 'un élément est sélectionné. Par défaut, `i-lucide-check`.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  selectedIcon: 'i-lucide-flame'
  size: md
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
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

### Clear: badge{label="4.4+" class="align-text-top"}

Utilisez le prop `clear` pour afficher un bouton clair lorsqu 'une valeur est sélectionnée.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
items:
  clear:
    - true
    - false
props:
  modelValue: 'Backlog'
  clear: true
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### Clear Icône: badge{label="4.4+" class="align-text-top"}

Utilisez l'accessoire `clear-icon` pour personnaliser le bouton de nettoyage [Icon](/docs/components/icon).

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
items:
  clear:
    - true
    - false
props:
  modelValue: 'Backlog'
  clear: true
  clearIcon: 'i-lucide-trash'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.close`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.close`.
:::
::

### Avatars

Utilisez la prop `avatar` pour afficher un [Avatar](xph543) dans le SelectMenu.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
  - avatar.loading
external:
  - items
  - modelValue
props:
  modelValue: 'Nuxt'
  avatar:
    src: 'https://github.com/nuxt.png'
    loading: lazy
  items:
    - Nuxt
    - NuxtHub
    - NuxtLabs
    - Nuxt Modules
    - Nuxt Community
  class: 'w-48'
---
::

### Loading

Utilisez le prop `loading` pour afficher une icône de chargement sur le SelectMenu.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  loading: true
  trailing: false
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### Icône de chargement

Utilisez la prop `loading-icon` pour personnaliser l'icône de chargement. Par défaut, `i-lucide-loader-circle`.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  loading: true
  loadingIcon: 'i-lucide-loader'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
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

### Désactivé

Utilisez le prop `disabled` pour désactiver le SelectMenu.

::component-code
---
prettier: true
ignore:
  - items
  - placeholder
  - class
external:
  - items
props:
  disabled: true
  placeholder: 'Select status'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

## Exemples

### Avec type d'éléments

Vous pouvez utiliser la propriété `type` avec `separator` pour afficher un séparateur entre les éléments ou `label` pour afficher une étiquette.

::component-code
---
collapse: true
ignore:
  - modelValue
  - items
  - class
external:
  - items
  - modelValue
externalTypes:
  - SelectMenuItem[]
props:
  modelValue: 'Apple'
  items:
    - - type: 'label'
        label: 'Fruits'
      - Apple
      - Banana
      - Blueberry
      - Grapes
      - Pineapple
    - - type: 'label'
        label: 'Vegetables'
      - Aubergine
      - Broccoli
      - Carrot
      - Courgette
      - Leek
  class: 'w-48'
---
::

::note
Lorsque vous utilisez des éléments `label` comme en-têtes de groupe, passez un tableau de tableaux afin qu 'une étiquette soit filtrée avec son groupe lors de la recherche.
::

### With icône dans les éléments

Vous pouvez utiliser la propriété `icon` pour afficher un [Icon](/docs/components/icon) à l'intérieur des éléments.

::component-example
---
collapse: true
name: 'select-menu-items-icon-example'
---
::

::tip
Vous pouvez également utiliser le slot `#leading` pour afficher l'icône sélectionnée.
::

### Avec avatar dans les éléments

Vous pouvez utiliser la propriété `avatar` pour afficher un [Avatar](xph688) à l'intérieur des éléments.

::component-example
---
collapse: true
name: 'select-menu-items-avatar-example'
---
::

::tip
Vous pouvez également utiliser le slot `#leading` pour afficher l'avatar sélectionné.
::

### Avec puce dans les articles

Vous pouvez utiliser la propriété `chip` pour afficher un [Chip](/docs/components/chip) à l'intérieur des éléments.

::component-example
---
collapse: true
name: 'select-menu-items-chip-example'
---
::

::note
Dans cet exemple, le slot `#leading` est utilisé pour afficher la puce sélectionnée.
::

### Control État ouvert

Vous pouvez contrôler l'état ouvert en utilisant la prop `default-open` ou la directive `v-model:open`.

::component-example
---
name: 'select-menu-open-example'
---
::

::note
Dans cet exemple, en utilisant [`defineShortcuts`](/docs/composables/define-shortcuts), vous pouvez basculer le SelectMenu en appuyant sur: kbd{value="O"}.
::

### Control terme de recherche

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
name: 'select-menu-icon-example'
---
::

### With créer l'élément

Utilisez la prop `create-item` pour permettre aux utilisateurs d'ajouter des valeurs personnalisées qui ne sont pas dans les options prédéfinies.

::component-example
---
collapse: true
name: 'select-menu-create-item-example'
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
collapse: true
name: 'select-menu-fetch-example'
---
::

::note
Cet exemple utilise `useLazyFetch` avec `immediate: false` pour récupérer les données uniquement lorsque le menu s'ouvre, évitant ainsi les appels d'API inutiles lors du chargement de la page.
::

### Avec filtre ignorer

Réglez la prop `ignore-filter` sur `true` pour désactiver la recherche interne et utiliser votre propre logique de recherche.

::component-example
---
collapse: true
name: 'select-menu-ignore-filter-example'
---
::

::note
Cet exemple utilise [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced) pour déboulonner les appels de l'API. La récupération est différée avec `immediate: false` afin qu 'aucune requête ne soit effectuée avant l'ouverture du menu.
::

### Avec les champs de filtre

Utilisez le prop `filter-fields` avec un tableau de champs pour filtrer.

::component-example
---
collapse: true
name: 'select-menu-filter-fields-example'
---
::

::note
Cet exemple utilise `useLazyFetch` avec `immediate: false` pour récupérer les données uniquement lorsque le menu s'ouvre, évitant ainsi les appels d'API inutiles lors du chargement de la page.
::

### Avec virtualisation: badge{label="4.1+" class="align-text-top"}

Utilisez la prop `virtualize` pour activer la virtualisation de grandes listes en tant que booléen ou objet avec des options comme `{ estimateSize: 32, overscan: 12 }`.

::warning{to="https://github.com/unovue/reka-ui/issues/1885" target="_blank"}
Lorsqu 'il est activé, tous les groupes sont aplatis en une seule liste en raison d'une limitation de l'interface utilisateur de Reka.
::

::component-example
---
prettier: true
name: 'select-menu-virtualize-example'
---
::

### Avec défilement infini: badge{label="4.4+" class="align-text-top"}

Vous pouvez utiliser le composable [`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/) pour charger plus de données au fur et à mesure que l'utilisateur fait défiler.

::component-example
---
prettier: true
collapse: true
highlights:
  - 41
  - 51
overflowHidden: true
name: 'select-menu-infinite-scroll-example'
---
::

::note
Cet exemple utilise `useLazyFetch` avec `immediate: false`, de sorte que les données ne sont chargées que lorsque l'utilisateur fait défiler.
::

### Avec pleine largeur de contenu

Vous pouvez étendre le contenu à toute la largeur de ses éléments en ajoutant la classe `min-w-fit` sur l'emplacement `ui.content`.

::component-example
---
name: 'select-menu-content-width-example'
collapse: true
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

### As sélecteur de pays

Vous pouvez utiliser le SelectMenu comme sélecteur de pays avec un chargement paresseux. Les pays ne sont récupérés que lorsque le menu est ouvert pour la première fois.

::component-example
---
collapse: true
name: 'select-menu-countries-example'
---
::

::note
Cet exemple utilise `useLazyFetch` avec `immediate: false` pour charger uniquement les pays lorsque le menu est ouvert pour la première fois.
::

## API

### Props équipement

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Ce composant prend également en charge tous les attributs HTML natifs `<button>`.
::

### Slots

:component-slots

### Emis

:component-emits

### Exposer

Lorsque vous accédez au composant via une référence de modèle, vous pouvez utiliser les éléments suivants:

| nom| type|
| ---- | ---- |
| `triggerRef`x{lang="ts-type"}| `Ref<HTMLButtonElement \| null>`x{lang="ts-type"}|
| `viewportRef`x{lang="ts-type"}| `Ref<HTMLDivElement \| null>`x{lang="ts-type"}|

## thème

:component-theme

## Changelog écrit

:component-changelog
