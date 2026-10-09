---
title: inputMenu
description: Une saisie automatique avec des suggestions en temps réel.
category: form
keywords:
  - combobox
  - typeahead
  - autosuggest
links:
  - label: Combobox à
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/combobox
  - label: Autocomplétion
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/autocomplete
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputMenu.vue
---

## Utilisation

Utilisez la directive `v-model` pour contrôler la valeur du menu d'entrée ou la prop `default-value` pour définir la valeur initiale lorsque vous n'avez pas besoin de contrôler son état.

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
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
---
::

::tip
Utilisez-le sur un [`Input`](/docs/components/input) pour tirer parti du composant [`Combobox`](https://reka-ui.com/docs/components/combobox) de Reka UI qui offre des fonctionnalités de saisie automatique.
::

::note
Ce composant est similaire au [`SelectMenu`](/docs/components/select-menu) mais il utilise une entrée au lieu d'une sélection.
::

### Éléments

Utilisez la prop `items` comme tableau de chaînes, de nombres ou de booléens:

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
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
---
::

Vous pouvez également passer un tableau d'objets avec les propriétés suivantes:

- xx`label?: string`xx{lang="ts-type"}
Xph055xx[x`type?: "label" | "separator" | "item"`x{lang="ts-type"}x](x#with-items-typex)
Xph062xx[x`icon?: string`x{lang="ts-type"}x](x#with-icons-in-itemsx)
- x[x`avatar?: AvatarProps`x{lang="ts-type"}x](x#with-avatar-in-itemsx)
Xph076xx[x`chip?: ChipProps`x{lang="ts-type"}x](x#with-chip-in-itemsx)
- x`disabled?: boolean`xx{lang="ts-type"}
- xx`onSelect?: (e: Event) => void`xxx{lang="ts-type"}
- xx`class?: any`xx{lang="ts-type"}
- xx`ui?: { tagsItem?: ClassNameValue, tagsItemText?: ClassNameValue, tagsItemDelete?: ClassNameValue, tagsItemDeleteIcon?: ClassNameValue, label?: ClassNameValue, separator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLabel?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue }`xxx{lang="ts-type"}

::component-code
---
ignore:
  - modelValue.label
  - items
external:
  - items
  - modelValue
externalTypes:
  - InputMenuItem[]
props:
  modelValue:
    label: 'Todo'
  items:
    - label: 'Backlog'
    - label: 'Todo'
    - label: 'In Progress'
    - label: 'Done'
---
::

Vous pouvez également passer un tableau de tableaux au prop `items` pour afficher des groupes d'éléments séparés.

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
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
---
::

Clé ### Value

Vous pouvez choisir de lier une propriété unique de l'objet plutôt que l'objet entier en utilisant la prop. `value-key`.

::component-code
---
collapse: true
ignore:
  - modelValue
  - valueKey
  - items
external:
  - items
  - modelValue
externalTypes:
  - InputMenuItem[]
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
---
::

::tip
Utilisez la prop `by` pour comparer des objets par un champ au lieu de la référence lorsque le `model-value` est un objet.
::

### multiple

Utilisez le prop `multiple` pour permettre des sélections multiples, les éléments sélectionnés seront affichés sous forme de balises.

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
  - multiple
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
---
::

::caution
Assurez-vous de passer un tableau à la prop `default-value` ou à la directive `v-model`.
::

### Delete Icône

Avec `multiple`, utilisez la prop `delete-icon` pour personnaliser la suppression [Icon](/docs/components/icon) dans les balises.

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
  - multiple
external:
  - items
  - modelValue
props:
  modelValue:
    - Backlog
    - Todo
  multiple: true
  deleteIcon: 'i-lucide-trash'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
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

### Placeholder électronique

Utilisez la prop `placeholder` pour définir un texte d'espace réservé.

::component-code
---
prettier: true
ignore:
  - items
external:
  - items
props:
  placeholder: 'Select status'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
---
::

### Mode: badge{label="4.8+" class="align-text-top"} (en anglais)

Définissez la prop `mode` sur `autocomplete` pour transformer le Menu d'entrée en une entrée de texte libre avec des suggestions. Le `modelValue` devient le texte d'entrée (`string`) au lieu d'un élément sélectionné.

::component-example
---
name: 'input-menu-mode-example'
---
::

::caution
Lorsque `mode` est `autocomplete`, `multiple`, `by`, `resetSearchTermOnSelect` et `resetModelValueOnClear` ne sont pas applicables.
::

::tip
Utilisez le prop `content.hideWhenEmpty` pour masquer le menu lorsqu 'il n'y a pas de suggestions correspondantes.
::

### contenu

Utilisez la prop `content` pour contrôler la façon dont le contenu InputMenu est rendu, comme son `align` ou `side` par exemple.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

### Arrow

Utilisez le prop `arrow` pour afficher une flèche dans le menu d'entrée.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

### couleur

Utilisez le prop `color` pour changer la couleur de la bague lorsque le menu d'entrée est focalisé.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

::note
La prop `highlight` est utilisée ici pour afficher l'état de mise au point. Il est utilisé en interne lorsqu 'une erreur de validation se produit.
::

### Variant équivalent

Utilisez le prop `variant` pour modifier la variante du Menu d'entrée.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

### Size

Utilisez la prop `size` pour modifier la taille du menu d'entrée.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

### icône

Utilisez la prop `icon` pour afficher un [Icon](/docs/components/icon) dans le menu d'entrée.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la clé `ui.icons.chevronDown`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.chevronDown`.
:::
::

### Selected Icône

Utilisez la prop `selected-icon` pour personnaliser l'icône lorsqu 'un élément est sélectionné. Par défaut `i-lucide-check`.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

### Clear Icône: badge{label="4.4+" class="align-text-top"}

Utilisez le prop `clear-icon` pour personnaliser le bouton de nettoyage [Icon](xph477).

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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

### Avatar and

Use the `avatar` prop to show an [Avatar](/docs/components/avatar) within the InputMenu.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

### Chargement

Utilisez le prop `loading` pour afficher une icône de chargement sur le menu d'entrée.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

### Icône de chargement

Utilisez le prop `loading-icon` pour personnaliser l'icône de chargement. Par défaut, `i-lucide-loader-circle`.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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

Utilisez le prop `disabled` pour désactiver le menu d'entrée.

::component-code
---
prettier: true
ignore:
  - items
  - placeholder
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
external:
  - items
  - modelValue
externalTypes:
  - InputMenuItem[]
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
---
::

::note
Lorsque vous utilisez des éléments `label` comme en-têtes de groupe, passez un tableau de tableaux afin qu 'une étiquette soit filtrée avec son groupe lors de la recherche.
::

### With icône dans les éléments

Vous pouvez utiliser la propriété `icon` pour afficher un [Icon](xph633) à l'intérieur des éléments.

::component-example
---
collapse: true
name: 'input-menu-items-icon-example'
---
::

::tip
Vous pouvez également utiliser le slot `#leading` pour afficher l'icône sélectionnée.
::

### Avec avatar dans les articles

Vous pouvez utiliser la propriété `avatar` pour afficher un [Avatar](/docs/components/avatar) à l'intérieur des éléments.

::component-example
---
collapse: true
name: 'input-menu-items-avatar-example'
---
::

::tip
Vous pouvez également utiliser le slot `#leading` pour afficher l'avatar sélectionné.
::

### With chip dans les articles

Vous pouvez utiliser la propriété `chip` pour afficher un [Chip](xph655) à l'intérieur des éléments.

::component-example
---
collapse: true
name: 'input-menu-items-chip-example'
---
::

::note
Dans cet exemple, le slot `#leading` est utilisé pour afficher la puce sélectionnée.
::

### Control État ouvert

Vous pouvez contrôler l'état ouvert en utilisant la prop `default-open` ou la directive `v-model:open`.

::component-example
---
name: 'input-menu-open-example'
---
::

::note
Dans cet exemple, en utilisant [`defineShortcuts`](/docs/composables/define-shortcuts), vous pouvez basculer le Menu d'entrée en appuyant sur: kbd{value="O"}.
::

### Control état ouvert sur le focus

Vous pouvez utiliser les accessoires `open-on-focus` ou `open-on-click` pour ouvrir le menu lorsque l'entrée est focalisée ou cliquée.

::component-example
---
name: 'input-menu-open-focus-example'
---
::

### Control terme de recherche

Utilisez la directive `v-model:search-term` pour contrôler les termes de recherche.

::component-example
---
name: 'input-menu-search-term-example'
---
::

### Avec icône tournante

Voici un exemple avec une icône tournante qui indique l'état ouvert du menu d'entrée.

::component-example
---
name: 'input-menu-icon-example'
---
::

### With créer un élément

Utilisez la prop `create-item` pour permettre aux utilisateurs d'ajouter des valeurs personnalisées qui ne figurent pas dans les options prédéfinies.

::component-example
---
collapse: true
name: 'input-menu-create-item-example'
---
::

::note
L'option create affiche quand aucune correspondance n'est trouvée par défaut. Définissez-la sur `always` pour l'afficher même lorsque des valeurs similaires existent.
::

::tip{to="#emits"}
Utilisez l'événement `@create` pour gérer la création de l'élément. Vous recevrez l'événement et l'élément en tant qu 'arguments.
::

### Avec les éléments récupérés

Vous pouvez récupérer des éléments à partir d'une API et les utiliser dans le InputMenu.

::component-example
---
collapse: true
name: 'input-menu-fetch-example'
---
::

::note
Cet exemple utilise `useLazyFetch` avec `immediate: false` pour récupérer les données uniquement lorsque le menu s'ouvre, évitant ainsi les appels d'API inutiles lors du chargement de la page.
::

### With ignore le filtre

Réglez la prop `ignore-filter` sur `true` pour désactiver la recherche interne et utiliser votre propre logique de recherche.

::component-example
---
collapse: true
name: 'input-menu-ignore-filter-example'
---
::

::note
Cet exemple utilise [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced) pour déboulonner les appels de l'API. La récupération est différée avec `immediate: false` afin qu 'aucune requête ne soit effectuée avant l'ouverture du menu.
::

### Avec les champs de filtre

Utilisez le prop `filter-fields` avec un tableau de champs à filtrer.

::component-example
---
collapse: true
name: 'input-menu-filter-fields-example'
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
name: 'input-menu-virtualize-example'
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
name: 'input-menu-infinite-scroll-example'
---
::

::note
Cet exemple utilise `useLazyFetch` avec `immediate: false`, de sorte que les données ne sont chargées que lorsque l'utilisateur fait défiler.
::

### Avec pleine largeur de contenu

Vous pouvez étendre le contenu à toute la largeur de ses éléments en ajoutant la classe `min-w-fit` sur l'emplacement `ui.content`.

::component-example
---
name: 'input-menu-content-width-example'
collapse: true
---
::

::tip
Vous pouvez également modifier la largeur du contenu globalement dans votre `app.config.ts`:

```
export default defineAppConfig({
  ui: {
    inputMenu: {
      slots: {
        content: 'min-w-fit'
      }
    }
  }
})
```
::

### As sélecteur de pays

Vous pouvez utiliser le Menu d'entrée comme sélecteur de pays avec un chargement paresseux. Les pays ne sont récupérés que lorsque le menu est ouvert pour la première fois.

::component-example
---
collapse: true
name: 'input-menu-countries-example'
---
::

::note
Cet exemple utilise `useLazyFetch` avec `immediate: false` pour charger uniquement les pays lorsque le menu est ouvert pour la première fois.
::

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
Ce composant prend également en charge tous les attributs HTML natifs `<input>`.
::

### Slots

:component-slots

### Emits

:component-emits

### Exposer

Lorsque vous accédez au composant via une référence de modèle, vous pouvez utiliser les éléments suivants:

| nom| type|
| ---- | ---- |
| `inputRef`x{lang="ts-type"}| `Ref<HTMLInputElement \| null>`x{lang="ts-type"}|
| `viewportRef`x{lang="ts-type"}| `Ref<HTMLDivElement \| null>`x{lang="ts-type"}|

## Thème

:component-theme

## Changelog

:component-changelog
