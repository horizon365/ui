---
description: Un appel pour attirer l'attention de l'utilisateur.
category: element
keywords:
  - notice
  - inline notification
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Alert.vue
---

## Utilisation

### Titre

Utilisez la prop `title` pour définir le titre de l'alerte.

::component-code
---
props:
  title: 'Heads up!'
---
::

### Description

Utilisez la prop `description` pour définir la description de l'alerte.

::component-code
---
prettier: true
props:
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
---
::

### icône

Utilisez la prop `icon` pour afficher un [Icon](/docs/components/icon).

::component-code
---
prettier: true
ignore:
  - title
  - description
props:
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  icon: 'i-lucide-terminal'
---
::

### Avatars

Utilisez la prop `avatar` pour afficher un [Avatar](/docs/components/avatar).

::component-code
---
prettier: true
ignore:
  - title
  - description
props:
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  avatar.src: 'https://github.com/nuxt.png'
---
::

### Couleur

Utilisez le prop `color` pour changer la couleur de l'alerte.

::component-code
---
prettier: true
ignore:
  - title
  - description
  - icon
props:
  color: neutral
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  icon: 'i-lucide-terminal'
---
::

### Variant

Utilisez le prop `variant` pour changer la variante de l'alerte.

::component-code
---
prettier: true
ignore:
  - title
  - description
  - icon
props:
  color: neutral
  variant: subtle
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  icon: 'i-lucide-terminal'
---
::

### Fermer

Utilisez la prop `close` pour afficher un [Button](/docs/components/button) pour rejeter l'alerte.

::tip
Un événement `update:open` sera émis lorsque le bouton de fermeture est cliqué.
::

::component-code
---
prettier: true
ignore:
  - title
  - description
  - close
  - color
  - variant
props:
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  color: neutral
  variant: outline
  close: true
---
::

Vous pouvez passer n'importe quelle propriété du composant [Button](/docs/components/button) pour le personnaliser.

::component-code
---
prettier: true
ignore:
  - title
  - description
  - close.color
  - close.variant
  - color
  - variant
props:
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  color: neutral
  variant: outline
  close:
    color: primary
    variant: outline
    class: 'rounded-full'
---
::

### Fermer Icône

Utilisez la prop `close-icon` pour personnaliser le bouton de fermeture [Icon](/docs/components/icon).

::component-code
---
prettier: true
ignore:
  - title
  - description
  - close
  - color
  - variant
props:
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  color: neutral
  variant: outline
  close: true
  closeIcon: 'i-lucide-arrow-right'
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

### Actions

Utilisez la prop `actions` pour ajouter des actions [Button](/docs/components/button) à l'alerte.

::component-code
---
prettier: true
ignore:
  - title
  - actions
  - color
  - variant
props:
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  color: neutral
  variant: outline
  actions:
    - label: Action 1
    - label: Action 2
      color: neutral
      variant: subtle
---
::

### Orientation

Utilisez le prop `orientation` pour modifier l'orientation de l'alerte.

::component-code
---
prettier: true
ignore:
  - title
  - actions
  - color
  - variant
props:
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  color: neutral
  variant: outline
  orientation: horizontal
  actions:
    - label: Action 1
    - label: Action 2
      color: neutral
      variant: subtle
---
::

## Exemples

### x`class` prop

Utilisez la prop `class` pour remplacer les styles de base de l'alerte.

::component-code
---
prettier: true
ignore:
  - title
  - description
props:
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  class: 'rounded-none'
---
::

### `ui` prop

Utilisez le prop `ui` pour remplacer les styles de slots de l'alerte.

::component-code
---
prettier: true
ignore:
  - ui
  - title
  - description
  - icon
props:
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  icon: i-lucide-rocket
  ui:
    icon: 'size-11'
---
::

## API

### Props

:component-props

### Slots

:component-slots

### Emis

:component-emits

## Thème

:component-theme

## Changelog

:component-changelog
