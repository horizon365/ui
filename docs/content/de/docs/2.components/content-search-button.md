---
title: Der ContentSearchButton
description: 'Ein vordefinierter Button zum Öffnen des ContentSearch-Modals.'
category: content
framework: nuxt
links:
  - label: Der Button
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentSearchButton.vue
---

::warning{to="/docs/getting-started/integrations/content"}
Diese Komponente ist nur verfügbar, wenn das Modul `@nuxt/content` installiert ist.
::

## Usage (Verwendung)

Die Komponente ContentSearchButton wird verwendet, um das Modal [ContentSearch](/docs/components/content-search) zu öffnen.

:component-code{prefix="content"}

Es erweitert die Komponente [Button](/docs/components/button), so dass Sie jede Eigenschaft wie `color`, `variant`, `size` usw. übergeben können.

::component-code{prefix="content"}
---
ignore:
  - variant
props:
  variant: 'subtle'
---
::

::note{to="#collapsed"}
Die Schaltfläche ist standardmäßig auf `color="neutral"` und `variant="outline"` eingestellt, wenn sie nicht zusammengeklappt ist, und `variant="ghost"`, wenn sie zusammengeklappt ist.
::

### Abgebrochen

Verwenden Sie die `collapsed`-Prop, um die Beschriftung der Schaltfläche anzuzeigen, und [kbds](#kbds). Standardmäßig `true`.

::component-code{prefix="content"}
---
prettier: true
props:
  collapsed: false
---
::

### kbds (nicht)

Verwenden Sie die `kbds`-prop, um Tastaturtasten in der Schaltfläche anzuzeigen. Standardmäßig auf `['meta', 'K']`{lang="ts-type"}, um der Standardverknüpfung der Komponente [ContentSearch](/docs/components/content-search#shortcut) zu entsprechen.

::component-code{prefix="content"}
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

## API (englisch)

### Props (nicht)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<button>`-HTML-Attribute.
::

### Slots Bearbeiten

:component-slots

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog{prefix="content"}
