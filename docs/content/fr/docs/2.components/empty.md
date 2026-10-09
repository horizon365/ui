---
description: 'Un composant pour afficher un état vide.'
category: data
keywords:
  - no data
  - placeholder
  - zero state
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Empty.vue
---

## Utilisation

Utilisez le composant vide pour afficher un état d'espace réservé lorsqu 'il n'y a pas de contenu à afficher.

::code-preview

:::u-empty
---
icon: i-lucide-file
title: No projects found
description: It looks like you haven't added any projects. Create one to get started.
actions:
  - icon: i-lucide-plus
    label: Create new
  - icon: i-lucide-refresh-cw
    label: Refresh
    color: neutral
    variant: subtle
---
:::

::

### Titre

Utilisez la prop `title` pour définir le titre de l'état vide.

::component-code
---
props:
  title: No projects found
---
::

### Description

Utilisez la prop `description` pour définir la description de l'état vide.

::component-code
---
prettier: true
ignore:
  - title
props:
  title: No projects found
  description: It looks like you haven't added any projects. Create one to get started.
---
::

### Icône

Utilisez le prop `icon` pour définir l'icône de l'état vide.

::component-code
---
prettier: true
ignore:
  - title
  - description
props:
  icon: i-lucide-file
  title: No projects found
  description: It looks like you haven't added any projects. Create one to get started.
---
::

### Avatars

Utilisez le prop `avatar` pour définir l'avatar de l'état vide.

::component-code
---
prettier: true
ignore:
  - icon
  - title
  - description
props:
  avatar.src: 'https://github.com/nuxt.png'
  title: No projects found
  description: It looks like you haven't added any projects. Create one to get started.
---
::

### Chargement: badge{label="4.10+" class="align-text-top"}

Utilisez la prop `loading` pour afficher une icône de chargement à la place de l'icône. La mise en page reste identique, de sorte que vous pouvez basculer entre les états de chargement et vide sans changement de mise en page.

::component-code
---
prettier: true
ignore:
  - icon
  - title
  - description
props:
  icon: i-lucide-file
  loading: true
  title: Loading projects
  description: Please wait while we fetch your projects.
---
::

### Icône de chargement: badge{label="4.10+" class="align-text-top"}

Utilisez la prop `loading-icon` pour personnaliser l'icône de chargement. Par défaut, `i-lucide-loader-circle`.

::component-code
---
prettier: true
ignore:
  - icon
  - title
  - description
  - loading
props:
  icon: i-lucide-file
  loading: true
  loadingIcon: 'i-lucide-loader'
  title: Loading projects
  description: Please wait while we fetch your projects.
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.loading`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la clé `ui.icons.loading`.
:::
::

### Actions

Utilisez la prop `actions` pour ajouter des actions [Button](/docs/components/button) à l'état vide.

::component-code
---
prettier: true
ignore:
  - icon
  - title
  - description
  - actions
props:
  icon: i-lucide-file
  title: No projects found
  description: It looks like you haven't added any projects. Create one to get started.
  actions:
    - icon: i-lucide-plus
      label: Create new
    - icon: i-lucide-refresh-cw
      label: Refresh
      color: neutral
      variant: subtle
---
::

### Variant

Utilisez le prop `variant` pour changer la variante de l'état vide.

::component-code
---
prettier: true
ignore:
  - icon
  - title
  - description
  - actions
props:
  variant: naked
  icon: i-lucide-bell
  title: No notifications
  description: You're all caught up. New notifications will appear here.
  actions:
    - icon: i-lucide-refresh-cw
      label: Refresh
      color: neutral
      variant: subtle
---
::

### Size équivalent

Utilisez la prop `size` pour modifier la taille de l'état vide.

::component-code
---
prettier: true
ignore:
  - icon
  - title
  - description
  - actions
props:
  size: xl
  icon: i-lucide-bell
  title: No notifications
  description: You're all caught up. New notifications will appear here.
  actions:
    - icon: i-lucide-refresh-cw
      label: Refresh
      color: neutral
      variant: subtle
---
::

## Exemples

### Avec slots

Utilisez les slots disponibles pour créer un état vide plus complexe.

::component-example
---
collapse: true
name: 'empty-slots-example'
---
::

## API

### Props

:component-props

### Slots

:component-slots

## Thème

:component-theme

## Changelog

:component-changelog
