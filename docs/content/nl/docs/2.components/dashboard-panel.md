---
title: DashboardPaneel
description: 'Een aanpasbaar paneel om weer te geven in een dashboard.'
category: dashboard
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardPanel.vue
---

## Gebruik

De DashboardPanel-component wordt gebruikt om een paneel weer te geven.
De status (grootte, samengevouwen, enz.) wordt opgeslagen op basis van de `storage` en `storage-key`-rekwisieten die u aan de [DashboardGroup](/docs/components/dashboard-group#props) -component levert.

Gebruik het in de standaardsleuf van de [DashboardGroup](/docs/components/dashboard-group) component, u kunt meerdere panelen naast elkaar plaatsen:

```vue [pages/index.vue]{8,10}
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>

<template>
  <UDashboardPanel id="inbox-1" resizable />

  <UDashboardPanel id="inbox-2" class="hidden lg:flex" />
</template>
```

::caution
Het wordt aanbevolen om een `id` in te stellen wanneer u meerdere panelen op verschillende pagina 's gebruikt om conflicten te voorkomen.
::

::warning
Dit onderdeel heeft geen enkel root-element wanneer u de `resizable`-prop gebruikt, dus wikkel het in een container (bijv. `<div class="flex flex-1">`) als u paginaovergangen gebruikt of een 
enkele wortel voor lay-out.
::

Gebruik de `header`-, `body`- en `footer`-slots om het paneel of de standaardsleuf aan te passen als u geen schuifbare behuizing met vulling wilt.

::component-example
---
collapse: true
name: 'dashboard-panel-example'
class: '!p-0 !justify-start'
props:
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96 h-136'
---
::

::note
Meestal gebruikt u de [`DashboardNavbar`](/docs/components/dashboard-navbar) component in de `header`-sleuf.
::

### Aanpasbaar

Gebruik de `resizable` prop om het paneel aanpasbaar te maken.

::component-code
---
prettier: true
hide:
  - minSize
  - defaultSize
  - maxSize
  - class
props:
  resizable: true
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96'
slots:
  body: |

    <Placeholder class="h-96" />
class: '!p-0 !justify-start'
---

#body
:placeholder{class="h-96"}
::

### Grootte

Gebruik de `min-size`, `max-size` en `default-size` rekwisieten om de grootte van het paneel aan te passen.

::component-code
---
prettier: true
ignore:
  - resizable
hide:
  - class
props:
  resizable: true
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96'
slots:
  body: |

    <Placeholder class="h-96" />
class: '!p-0 !justify-start'
---

#body
:placeholder{class="h-96"}
::

::tip{to="/docs/components/dashboard-group#props"}
Maten worden standaard berekend als percentages. U kunt dit wijzigen met de `unit` prop op de `DashboardGroup` component.
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
