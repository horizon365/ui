---
description: 'Eine Komponente, die einen leeren Zustand anzeigt.'
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

## Bearbeiten

Verwenden Sie die Komponente Leer, um einen Platzhalterstatus anzuzeigen, wenn kein Inhalt angezeigt werden soll.

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

Verwenden Sie die prop `title`, um den Titel des leeren Status festzulegen.

::component-code
---
props:
  title: No projects found
---
::

### Beschreibung

Verwenden Sie die `description`-prop, um die Beschreibung des leeren Zustands festzulegen.

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

### Icon (englisch)

Verwenden Sie die `icon`-prop, um das Symbol des leeren Zustands festzulegen.

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

### Avatar (englisch)

Verwenden Sie die prop `avatar`, um den Avatar des leeren Zustands einzustellen.

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

### Loading: badge{label="4.10+" class="align-text-top"} wird geladen

Verwenden Sie die `loading` prop, um ein Ladesymbol anstelle des Symbols anzuzeigen. Das Layout bleibt identisch, sodass Sie ohne Layoutverschiebungen zwischen Lade-und Leerzustand wechseln können.

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

### Ladesymbol: badge{label="4.10+" class="align-text-top"}

Verwenden Sie die `loading-icon`-Prop, um das Ladesymbol anzupassen. Standardmäßig `i-lucide-loader-circle`.

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
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.loading` Schlüssel anpassen.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter der `ui.icons.loading`-Taste.
:::
::

### Actions Bearbeiten

Verwenden Sie die `actions`-Prop, um einige [Button](/docs/components/button)-Aktionen in den leeren Zustand einzufügen.

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

### Variant Bearbeiten

Verwenden Sie die `variant` prop, um die Variante des leeren Zustands zu ändern.

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

### Size ist

Verwenden Sie die `size`-prop, um die Größe des leeren Zustands zu ändern.

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

## Beispiele

### Mit Steckplätzen

Verwenden Sie die verfügbaren Slots, um einen komplexeren leeren Zustand zu erstellen.

::component-example
---
collapse: true
name: 'empty-slots-example'
---
::

## API ist

### Props (nicht)

:component-props

### Slots (englisch)

:component-slots

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
