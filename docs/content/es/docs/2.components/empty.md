---
description: 'Un componente para mostrar un estado vacío.'
category: data
keywords:
  - no data
  - placeholder
  - zero state
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Empty.vue
---

xph0000xUso

Utilice el componente Vacío para mostrar un estado de marcador de posición cuando no hay contenido que mostrar.

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

### Nombre

Utilice el prop `title` para establecer el título del estado vacío.

::component-code
---
props:
  title: No projects found
---
::

### Descripción

Utilice el prop `description` para establecer la descripción del estado vacío.

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

### Icon

Utilice el prop `icon` para establecer el icono del estado vacío.

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

### Avatar

Utilice el prop `avatar` para establecer el avatar del estado vacío.

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

### Cargando: badge{label="4.10+" class="align-text-top"}

Utilice el prop `loading` para mostrar un icono de carga en lugar del icono. El diseño se mantiene idéntico, por lo que puede alternar entre los estados de carga y vacío sin cambios de diseño.

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

### Icono de carga: badge{label="4.10+" class="align-text-top"}

Utilice el prop `loading-icon` para personalizar el icono de carga.

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
Puede personalizar este icono de forma global en su `app.config.ts` bajo la tecla `ui.icons.loading`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono globalmente en su `vite.config.ts` bajo la tecla `ui.icons.loading`.
:::
::

### Acciones

Utilice el prop `actions` para añadir algunas acciones [Button](/docs/components/button) al estado vacío.

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

### Variante

Utilice el prop `variant` para cambiar la variante del estado vacío.

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

### Tamaño

Utilice el prop `size` para cambiar el tamaño del estado vacío.

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

## Ejemplos

### Con ranuras

Utilice las ranuras disponibles para crear un estado vacío más complejo.

::component-example
---
collapse: true
name: 'empty-slots-example'
---
::

## API (Edición española)

### Props (accesorios)

:component-props

### Slots en línea

:component-slots

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
