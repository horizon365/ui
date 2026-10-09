---
description: Un élément d'entrée pour basculer entre les états vérifiés et non vérifiés.
category: form
keywords:
  - tickbox
  - check
  - boolean
links:
  - label: Checkbox à
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/checkbox
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Checkbox.vue
---

## Utilisation

Utilisez la directive `v-model` pour contrôler l'état coché de la case à cocher.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: true
---
::

Utilisez la prop `default-value` pour définir la valeur initiale lorsque vous n'avez pas besoin de contrôler son état.

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: true
---
::

### indéterminé

Utilisez la valeur `indeterminate` de la directive `v-model` ou de la prop `default-value` pour définir la case à cocher sur un state](xph023) xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: 'indeterminate'
---
::

### Icône indéterminée

Utilisez la prop `indeterminate-icon` pour personnaliser l'icône indéterminée. Par défaut, `i-lucide-minus`.

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: 'indeterminate'
  indeterminateIcon: 'i-lucide-plus'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.minus`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.minus`.
:::
::

### étiquette

Utilisez le prop `label` pour définir l'étiquette de la case à cocher.

::component-code
---
props:
  label: Check me
---
::

Lorsque vous utilisez le prop `required`, un astérisque est ajouté à côté de l'étiquette.

::component-code
---
ignore:
  - label
props:
  required: true
  label: Check me
---
::

### Description

Utilisez la prop `description` pour définir la description de la case à cocher.

::component-code
---
ignore:
  - label
props:
  label: Check me
  description: 'This is a checkbox.'
---
::

### Icône

Utilisez la prop `icon` pour définir l'icône de la case à cocher lorsqu 'elle est cochée. Par défaut `i-lucide-check`.

::component-code
---
ignore:
  - label
  - defaultValue
props:
  icon: 'i-lucide-heart'
  defaultValue: true
  label: Check me
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

### Couleur

Utilisez le prop `color` pour changer la couleur de la case à cocher.

::component-code
---
ignore:
  - label
  - defaultValue
props:
  color: neutral
  defaultValue: true
  label: Check me
---
::

### Variant

Utilisez le prop `variant` pour modifier la variante de la case à cocher.

::component-code
---
ignore:
  - label
  - defaultValue
props:
  color: 'primary'
  variant: 'card'
  defaultValue: true
  label: Check me
---
::

### Size

Utilisez le prop `size` pour modifier la taille de la case à cocher.

::component-code
---
ignore:
  - label
  - defaultValue
props:
  size: xl
  variant: list
  defaultValue: true
  label: Check me
---
::

### Indicateur

Utilisez la prop `indicator` pour modifier la position ou masquer l'indicateur. Par défaut, `start`.

::note
Lorsque `indicator` est `hidden`, l'icône est affichée au-dessus de l'étiquette à la place.
::

::component-code
---
prettier: true
ignore:
  - label
  - icon
  - defaultValue
props:
  indicator: 'hidden'
  variant: 'card'
  icon: 'i-lucide-heart'
  defaultValue: true
  label: Check me
---
::

### Désactivé

Utilisez le prop `disabled` pour désactiver la case à cocher.

::component-code
---
ignore:
  - label
props:
  disabled: true
  label: Check me
---
::

## API

### Props équipements

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Ce composant prend également en charge tous les attributs HTML natifs `<button>`.
::

### Slots

:component-slots

### Emits

:component-emits

## Thème

:component-theme

## Changelog écrit

:component-changelog
