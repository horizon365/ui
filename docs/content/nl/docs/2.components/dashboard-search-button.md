---
title: DashboardSearchButton
description: 'Een vooraf gestileerde knop om de DashboardSearch-modal te openen.'
category: dashboard
links:
  - label: Knop
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSearchButton.vue
---

## Gebruik

De DashboardSearchButton component wordt gebruikt om de [DashboardSearch](/docs/components/dashboard-search) modaal te openen.

:component-code

Het breidt de [Button](/docs/components/button) component uit, zodat u elke eigenschap zoals `color`, `variant`, `size`, enz. Kunt doorgeven.

::component-code
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

Gebruik de `collapsed` prop om het label en [kbds](#kbds) van de knop te verbergen. Standaard `false`.

::component-code
---
prettier: true
props:
  collapsed: true
---
::

::tip{to="/docs/components/dashboard-sidebar#slots"}
Als u de knop in de **DashboardSidebar** gebruikt, gebruikt u de `collapsed` sleufprop direct.
::

### Kbds

Gebruik de `kbds` prop om toetsenbordtoetsen in de knop weer te geven. Standaard `['meta', 'K']`{lang="ts-type"} om overeen te komen met de standaard snelkoppeling van de [DashboardSearch](/docs/components/dashboard-search#shortcut) component.

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

:component-changelog
