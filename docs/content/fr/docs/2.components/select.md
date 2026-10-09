---
description: Un élément select pour choisir parmi une liste d'options.
category: form
keywords:
  - dropdown
  - picker
links:
  - label: Sélectionnez
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/select
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Select.vue
---

## Utilisation

Utilisez la directive `v-model` pour contrôler la valeur de Select ou la prop `default-value` pour définir la valeur initiale lorsque vous n'avez pas besoin de contrôler son état.

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

- x`label?: string`x{lang="ts-type"}
Xph046xx[x`value?: string`x{lang="ts-type"}](x#value-keyx)
Xph053xxx[x`type?: "label" | "separator" | "item"`x{lang="ts-type"}x](x#with-items-typex)
Xph060xx[x`icon?: string`x{lang="ts-type"}x](x#with-icons-in-itemsx)
Xph067xx[x`avatar?: AvatarProps`x{lang="ts-type"}x](x#with-avatar-in-items)
Xph074xx[x`chip?: ChipProps`x{lang="ts-type"}x](x#with-chip-in-itemsx)
- x`disabled?: boolean`xx{lang="ts-type"}
- x`class?: any`xx{lang="ts-type"}
- xx`ui?: { label?: ClassNameValue, separator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLabel?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue }`xxx{lang="ts-type"}

::component-code
---
ignore:
  - modelValue
  - items
  - class
external:
  - items
  - modelValue
externalTypes:
  - SelectItem[]
props:
  modelValue: 'backlog'
  items:
    - label: 'Backlog'
      value: 'backlog'
    - label: 'Todo'
      value: 'todo'
    - label: 'In Progress'
      value: 'in_progress'
    - label: 'Done'
      value: 'done'
  class: 'w-48'
---
::

::caution
Lorsque vous utilisez des objets, vous devez faire référence à la propriété `value` de l'objet dans la directive `v-model` ou la prop `default-value`.
::

Vous pouvez également passer un tableau de tableaux à la prop `items` pour afficher des groupes d'éléments séparés.

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

Clé ### Value

Vous pouvez modifier la propriété qui est utilisée pour définir la valeur en utilisant la prop. `value-key`.

::component-code
---
ignore:
  - modelValue
  - valueKey
  - items
  - class
external:
  - items
  - modelValue
externalTypes:
  - SelectItem[]
props:
  modelValue: 'backlog'
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

### multiple

Use the `multiple` prop to allow multiple selections, the selected items will be separated by a comma in the trigger.

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

### Contenu

Utilisez la prop `content` pour contrôler la façon dont le contenu Select est rendu, comme son `align` ou `side` par exemple.

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

::note
Ces options s'appliquent uniquement lorsque `content.position` est `popper` (par défaut).
::

### Position: badge{label="4.7+" class="align-text-top"}

Utilisez la prop `content.position` pour contrôler le positionnement du contenu Sélectionner par rapport au déclencheur. Par défaut, `popper`, qui positionne le contenu comme les autres popovers. Définissez-le sur `item-aligned` pour aligner le contenu avec l'élément sélectionné (similaire à un menu natif de macOS).

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
  content.position:
    - item-aligned
    - popper
props:
  modelValue: 'Todo'
  content:
    position: item-aligned
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### Arrow

Utilisez la prop `arrow` pour afficher une flèche sur le bouton Sélectionner.

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

### Couleur

Utilisez le prop `color` pour changer la couleur de la bague lorsque le sélecteur est mis au point.

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

Utilisez le prop `variant` pour changer la variante du Select.

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

Utilisez le prop `size` pour modifier la taille du Select.

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

Utilisez la prop `icon` pour afficher un [Icon](/docs/components/icon) à l'intérieur du Sélectionner.

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

### Trailing Icône

Utilisez le prop `trailing-icon` pour personnaliser le [Icon](/docs/components/icon).

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

### Avatars

Utilisez la prop `avatar` pour afficher un [Avatar](/docs/components/avatar) à l'intérieur du Sélectionner.

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

### Chargement

Utilisez la prop `loading` pour afficher une icône de chargement sur le Select.

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

Utilisez le prop `loading-icon` pour personnaliser l'icône de chargement. Par défaut, `i-lucide-loader-circle`.

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

Utilisez le prop `disabled` pour désactiver la fonction Select.

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
  - SelectItem[]
props:
  modelValue: 'Apple'
  items:
    - type: 'label'
      label: 'Fruits'
    - Apple
    - Banana
    - Blueberry
    - Grapes
    - Pineapple
    - type: 'separator'
    - type: 'label'
      label: 'Vegetables'
    - Aubergine
    - Broccoli
    - Carrot
    - Courgette
    - Leek
  class: 'w-48'
---
::

### With icône dans les éléments

Vous pouvez utiliser la propriété `icon` pour afficher un [Icon](/docs/components/icon) à l'intérieur des éléments.

::component-example
---
collapse: true
name: 'select-items-icon-example'
---
::

::note
Dans cet exemple, l'icône est calculée à partir de la propriété `value` de l'élément sélectionné.
::

::tip
Vous pouvez également utiliser le slot `#leading` pour afficher l'icône sélectionnée.
::

### Avec avatar dans les éléments

Vous pouvez utiliser la propriété `avatar` pour afficher un [Avatar](/docs/components/avatar) à l'intérieur des éléments.

::component-example
---
collapse: true
name: 'select-items-avatar-example'
---
::

::note
Dans cet exemple, l'avatar est calculé à partir de la propriété `value` de l'élément sélectionné.
::

::tip
Vous pouvez également utiliser le slot `#leading` pour afficher l'avatar sélectionné.
::

### With chip dans les articles

Vous pouvez utiliser la propriété `chip` pour afficher un [Chip](/docs/components/chip) à l'intérieur des éléments.

::component-example
---
collapse: true
name: 'select-items-chip-example'
---
::

::note
Dans cet exemple, le slot `#leading` est utilisé pour afficher la puce sélectionnée.
::

### Control état ouvert

Vous pouvez contrôler l'état ouvert en utilisant la prop `default-open` ou la directive `v-model:open`.

::component-example
---
name: 'select-open-example'
---
::

::note
Dans cet exemple, en utilisant [`defineShortcuts`](/docs/composables/define-shortcuts), vous pouvez basculer le Sélectionner en appuyant sur: kbd{value="O"}.
::

### Avec icône rotative

Voici un exemple avec une icône tournante qui indique l'état ouvert du Select.

::component-example
---
name: 'select-icon-example'
---
::

### Avec les éléments récupérés

Vous pouvez récupérer des éléments à partir d'une API et les utiliser dans le Select.

::component-example
---
name: 'select-fetch-example'
collapse: true
---
::

::note
Cet exemple utilise `useLazyFetch` avec `immediate: false` pour récupérer les données uniquement lorsque le menu s'ouvre, évitant ainsi les appels d'API inutiles lors du chargement de la page.
::

### Avec scroll infini: badge{label="4.4+" class="align-text-top"}

Vous pouvez utiliser le composable [`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/) pour charger plus de données au fur et à mesure que l'utilisateur fait défiler.

::component-example
---
prettier: true
collapse: true
highlights:
  - 41
  - 51
overflowHidden: true
name: 'select-infinite-scroll-example'
---
::

::note
Cet exemple utilise `useLazyFetch` avec `immediate: false`, de sorte que les données ne sont chargées que lorsque l'utilisateur fait défiler.
::

### Avec largeur de contenu complète

Vous pouvez étendre le contenu à toute la largeur de ses éléments en ajoutant la classe `min-w-fit` sur l'emplacement `ui.content`.

::component-example
---
name: 'select-content-width-example'
collapse: true
---
::

::tip
Vous pouvez également modifier la largeur du contenu globalement dans votre `app.config.ts`:

```
export default defineAppConfig({
  ui: {
    select: {
      slots: {
        content: 'min-w-fit'
      }
    }
  }
})
```
::

## API

### Props

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

## Thème

:component-theme

## Changelog

:component-changelog
