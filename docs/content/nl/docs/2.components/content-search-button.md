---
title: InhoudZoekenButton
description: 'Een vooraf gestileerde knop om de ContentSearch-modaal te openen.'
category: content
framework: nuxt
links:
  - label: Knop
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentSearchButton.vue
---

::warning{to="/docs/getting-started/integrations/content"}
Dit onderdeel is alleen beschikbaar wanneer de `@nuxt/content` module is geïnstalleerd.
::

## Gebruik

De ContentSearchButton-component wordt gebruikt om de [ContentSearch](/docs/components/content-search) te openen.

:component-code{prefix="content"}

Het breidt de [Button](/docs/components/button) component uit, zodat u elke eigenschap zoals `color`, `variant`, `size`, enz. Kunt doorgeven.

::component-code{prefix="content"}
---
ignore:
  - variant
props:
  variant: 'subtle'
---
::

::note{to="#collapsed"}
De knop is standaard ingesteld op `color="neutral"` en `variant="outline"` wanneer deze niet is samengevouwen, `variant="ghost"` wanneer deze is samengevouwen.
::

### Ingeklapt

Gebruik de `collapsed` prop om het label en [kbds](#kbds) van de knop te tonen. Standaard `true`.

::component-code{prefix="content"}
---
prettier: true
props:
  collapsed: false
---
::

### Kbds

Gebruik de `kbds` prop om toetsenbordtoetsen in de knop weer te geven. Standaard `['meta', 'K']`{lang="ts-type"} om overeen te komen met de standaard snelkoppeling van de [ContentSearch](/docs/components/content-search#shortcut) component.

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

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Dit onderdeel ondersteunt ook alle native `<button>` HTML-kenmerken.
::

### Slots

:component-slots

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog{prefix="content"}
