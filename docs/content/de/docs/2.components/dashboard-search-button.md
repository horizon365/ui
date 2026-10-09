---
title: Der DashboardSearchButton
description: 'Ein vordefinierter Button zum Öffnen des DashboardSearch-Modals.'
category: dashboard
links:
  - label: Der Button
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSearchButton.vue
---

## Bearbeiten

Die Komponente DashboardSearchButton wird verwendet, um das Modal [DashboardSearch](/docs/components/dashboard-search) zu öffnen.

:component-code

Es erweitert die [Button](/docs/components/button)-Komponente, sodass Sie jede Eigenschaft wie `color`, `variant`, `size` usw. übergeben können.

::component-code
---
ignore:
  - variant
props:
  variant: 'subtle'
---
::

::note{to="#collapsed"}
Die Schaltfläche ist standardmäßig auf `color="neutral"` und `variant="outline"` eingestellt, wenn sie nicht kollabiert ist, und `variant="ghost"`, wenn sie kollabiert ist.
::

### Collapsed (Überlaufen)

Verwenden Sie die `collapsed`-Prop, um die Beschriftung der Schaltfläche auszublenden, und [kbds](#kbds). Defaults to `false`.

::component-code
---
prettier: true
props:
  collapsed: true
---
::

::tip{to="/docs/components/dashboard-sidebar#slots"}
Wenn Sie die Taste in der Komponente **DashboardSidebar** verwenden, verwenden Sie direkt die `collapsed`-Schlitzstütze.
::

### Kbds (englisch)

Verwenden Sie die `kbds`-prop, um Tastaturtasten in der Taste anzuzeigen. Standardmäßig auf `['meta', 'K']`{lang="ts-type"}, um der Standardverknüpfung der Komponente [DashboardSearch](/docs/components/dashboard-search#shortcut) zu entsprechen.

::component-code
---
prettier: true
ignore:
  - kbds
props:
  collapsed: false
  kbds:
    - 'alt'
    - 'O'
---
::

## API (Englisch)

### Props (nicht)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<button>`-HTML-Attribute.
::

### Slots (englisch)

:component-slots

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
