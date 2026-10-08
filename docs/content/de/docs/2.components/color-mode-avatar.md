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

@@@ph000@@Verwendung

Die ColorModeAvatar-Komponente erweitert die Komponente [Avatar](/docs/components/avatar), so dass Sie jede Eigenschaft wie `size`,`icon` usw. übergeben können.

Verwenden Sie die `light` und `dark` props, um die Quelle für den hellen und dunklen Modus zu definieren.

::component-code{prefix="color-mode"}
---
Props:
  light: 'https:/github.com/vuejs.png'(https://github.com/vuejs.png)
  dark: 'https://github.com/nuxt.png'
---
::

::note
Wechseln Sie zwischen Hell-und Dunkelmodus, um die verschiedenen Bilder zu sehen: : u-color-mode-select {size="sm"}
::

@@1010@bmw

@@ph011@@@props

Komponenten-Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<img>` HTML-Attribute.
::

@@ph013@@changelog @ changelog

: component-changelog {prefix="color-mode"}
