---
description: 'Een component om een lege toestand weer te geven.'
category: data
keywords:
  - no data
  - placeholder
  - zero state
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Empty.vue
---

## Gebruik

Gebruik de lege component om een tijdelijke aanduiding weer te geven wanneer er geen inhoud wordt weergegeven.

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

### Titel

Gebruik de `title` prop om de titel van de lege status in te stellen.

::component-code
---
props:
  title: No projects found
---
::

### Beschrijving

Gebruik de `description` prop om de beschrijving van de lege toestand in te stellen.

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

### Icoon

Gebruik de `icon` prop om het pictogram van de lege status in te stellen.

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

### Avatar [bewerken]

Gebruik de `avatar` prop om de avatar van de lege status in te stellen.

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

### Laden: badge{label="4.10+" class="align-text-top"}

Gebruik de `loading`-prop om een laadpictogram te tonen in plaats van het pictogram. De lay-out blijft identiek, dus u kunt schakelen tussen laad- en lege staten zonder lay-outverschuivingen.

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

### Icoon aan het laden: badge{label="4.10+" class="align-text-top"}

Gebruik de `loading-icon` prop om het laadpictogram aan te passen. Standaard `i-lucide-loader-circle`.

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
U kunt dit pictogram globaal aanpassen in uw `app.config.ts` onder `ui.icons.loading`-sleutel.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
U kunt dit pictogram globaal aanpassen in uw `vite.config.ts` onder `ui.icons.loading`-sleutel.
:::
::

### Acties

Gebruik de `actions` prop om enkele [Button](/docs/components/button) acties toe te voegen aan de lege status.

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

Gebruik de `variant` prop om de variant van de lege toestand te wijzigen.

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

### Grootte

Gebruik de `size` prop om de grootte van de lege toestand te wijzigen.

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

## Voorbeelden

### Met sleuven

Gebruik de beschikbare slots om een complexere lege toestand te creëren.

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

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog
