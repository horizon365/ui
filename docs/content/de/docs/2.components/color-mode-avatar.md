---
title: Der Color-Avatar
description: 'Ein Avatar mit einer anderen Quelle für den Hell-und Dunkelmodus.'
category: color-mode
links:
  - label: Der Avatar
    to: /docs/components/avatar
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeAvatar.vue
---

## Bearbeiten

Die ColorModeAvatar-Komponente erweitert die Komponente [Avatar](/docs/components/avatar), sodass Sie jede Eigenschaft wie `size`, `icon` usw. übergeben können.

Verwenden Sie die `light`-und `dark`-Requisiten, um die Quelle für den hellen und dunklen Modus zu definieren.

::component-code{prefix="color-mode"}
---
props:
  light: 'https://github.com/vuejs.png'
  dark: 'https://github.com/nuxt.png'
---
::

::note
Wechseln Sie zwischen Hell-und Dunkelmodus, um die verschiedenen Bilder zu sehen: : u-color-mode-select{size="sm"}
::

## API (Englisch)

### Props (nicht)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<img>` HTML-Attribute.
::

## Changelog (englisch)

:component-changelog{prefix="color-mode"}
