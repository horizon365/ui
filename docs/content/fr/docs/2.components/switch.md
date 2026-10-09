---
description: Un contrôle qui bascule entre deux états.
category: form
keywords:
  - toggle
  - toggle switch
links:
  - label: switch
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/switch
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Switch.vue
---

## Utilisation

Utilisez la directive `v-model` pour contrôler l'état vérifié du commutateur.

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

### étiquette

Utilisez le prop `label` pour définir l'étiquette du Switch.

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

Utilisez le prop `description` pour définir la description du Switch.

::component-code
---
ignore:
  - label
props:
  label: Check me
  description: 'This is a checkbox.'
---
::

### icône

Utilisez les accessoires `checked-icon` et `unchecked-icon` pour définir les icônes du commutateur lorsqu 'elles sont cochées ou non.

::component-code
---
prettier: true
ignore:
  - label
  - defaultValue
props:
  uncheckedIcon: 'i-lucide-x'
  checkedIcon: 'i-lucide-check'
  defaultValue: true
  label: Check me
---
::

### Loading

Utilisez le prop `loading` pour afficher une icône de chargement sur le Switch.

::component-code
---
ignore:
  - label
  - defaultValue
props:
  loading: true
  defaultValue: true
  label: Check me
---
::

### Icône de chargement

Utilisez la prop `loading-icon` pour personnaliser l'icône de chargement. Par défaut, `i-lucide-loader-circle`.

::component-code
---
ignore:
  - label
  - defaultValue
props:
  loading: true
  loadingIcon: 'i-lucide-loader'
  defaultValue: true
  label: Check me
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la clé `ui.icons.loading`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.loading`.
:::
::

### Couleur

Utilisez le prop `color` pour changer la couleur du Switch.

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

### Size

Utilisez le prop `size` pour modifier la taille du commutateur.

::component-code
---
ignore:
  - label
  - defaultValue
props:
  size: xl
  defaultValue: true
  label: Check me
---
::

### Désactivé

Utilisez le prop `disabled` pour désactiver le Switch.

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

## Changelog

:component-changelog
