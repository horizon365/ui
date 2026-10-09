---
title: DashboardZijbalk
description: 'Een aanpasbare en opvouwbare zijbalk om in een dashboard weer te geven.'
category: dashboard
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSidebar.vue
---

## Gebruik

De DashboardSidebar-component wordt gebruikt om een zijbalk in een dashboardindeling weer te geven. Het ondersteunt slepen om het formaat te wijzigen, staat persistentie en integreert met [DashboardGroup](/docs/components/dashboard-group), [DashboardPanel](/docs/components/dashboard-panel) en [DashboardNavbar](/docs/components/dashboard-navbar).

::tip{to="/docs/components/sidebar"}
**DashboardSidebar versus Sidebar**: dit onderdeel is ontworpen voor dashboardlay-outs met slepen om het formaat te wijzigen, statuspersistentie en `DashboardGroup`-integratie.
Gebruik in plaats daarvan [Sidebar](/docs/components/sidebar) voor een eenvoudige, zelfstandige zijbalk (chatpaneel, instellingen, navigatie).
::

De status (grootte, samengevouwen, enz.) wordt opgeslagen op basis van de `storage`- en `storage-key`-rekwisieten die u aan de [DashboardGroup](/docs/components/dashboard-group#props) -component levert.

Gebruik het in de standaardsleuf van de [DashboardGroup](/docs/components/dashboard-group) component:

```vue [layouts/dashboard.vue]{3}
<template>
  <UDashboardGroup>
    <UDashboardSidebar />

    <slot />
  </UDashboardGroup>
</template>
```

::warning
Dit onderdeel heeft geen enkel root-element wanneer u de `resizable`-prop gebruikt, dus wikkel het in een container (bijv. `<div class="flex flex-1">`) als u paginaovergangen gebruikt of een 
enkele wortel voor lay-out.
::

Gebruik de `header`, `default` en `footer` slots om de zijbalk aan te passen en de `body` of `content` slots om het zijbalkmenu aan te passen.

::component-example
---
collapse: true
name: 'dashboard-sidebar-example'
class: '!p-0 !justify-start'
props:
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96 h-136'
---
::

::note
Sleep de zijbalk naar de linkerrand van het scherm om deze samen te vouwen.
::

### Aanpasbaar

Gebruik de `resizable` prop om de zijbalk aanpasbaar te maken.

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
  default: |

    <Placeholder class="h-96" />
class: '!p-0 !justify-start'
---

:placeholder{class="h-96"}
::

### Opvouwbaar

Gebruik de `collapsible` prop om de zijbalk inklapbaar te maken wanneer u naar de rand van het scherm sleept.

::warning
De [`DashboardSidebarCollapse`](/docs/components/dashboard-sidebar-collapse) heeft geen effect als de zijbalk niet **collapsible** is.
::

::component-code
---
prettier: true
ignore:
  - resizable
hide:
  - minSize
  - defaultSize
  - maxSize
  - class
props:
  resizable: true
  collapsible: true
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96'
slots:
  default: |

    <Placeholder class="h-96" />
class: '!p-0 !justify-start'
---

:placeholder{class="h-96"}
::

::tip{to="#slots"}
U kunt toegang krijgen tot de `collapsed`-status in de sleufsteunen om de inhoud van de zijbalk aan te passen wanneer deze is samengevouwen.
::

### Grootte

Gebruik de `min-size`, `max-size`, `default-size` en `collapsed-size` rekwisieten om de grootte van de zijbalk aan te passen.

::component-code
---
prettier: true
ignore:
  - resizable
  - collapsible
hide:
  - class
props:
  resizable: true
  collapsible: true
  minSize: 22
  defaultSize: 35
  maxSize: 40
  collapsedSize: 0
  class: '!min-h-96'
slots:
  default: |

    <Placeholder class="h-96" />
class: '!p-0 !justify-start'
---

:placeholder{class="h-96"}
::

::tip{to="/docs/components/dashboard-group#props"}
Maten worden standaard berekend als percentages. U kunt dit wijzigen met de `unit` prop op de `DashboardGroup` component.
::

::note
De `collapsed-size` prop is standaard ingesteld op `0`, maar de zijbalk heeft een `min-w-16` om ervoor te zorgen dat deze zichtbaar is.
::

### Zijde

Gebruik de `side` prop om de zijkant van de zijbalk te wijzigen. Standaard `left`.

::component-code
---
prettier: true
ignore:
  - resizable
  - collapsible
hide:
  - minSize
  - defaultSize
  - maxSize
  - class
props:
  side: 'right'
  resizable: true
  collapsible: true
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96'
slots:
  default: |

    <Placeholder class="h-96" />
class: '!p-0 !justify-end'
---

:placeholder{class="h-96"}
::

### Modus

Gebruik de `mode` prop om de modus van het zijbalkmenu te wijzigen. Standaard `slideover`.

Gebruik de `body`-sleuf om de menubalk (onder de kop) te vullen of de `content`-sleuf om het hele menu te vullen.

::tip{to="#props"}
U kunt de `menu` prop gebruiken om het menu van de zijbalk aan te passen, deze zal zich aanpassen afhankelijk van de modus die u kiest.
::

::component-example
---
collapse: true
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'dashboard-sidebar-mode-example'
options:
  - name: 'mode'
    label: 'mode'
    default: 'drawer'
    items:
      - modal
      - slideover
      - drawer
props:
  class: 'w-full'
---
::

::note
Deze voorbeelden bevatten de [`DashboardGroup`](/docs/components/dashboard-group), [`DashboardPanel`](/docs/components/dashboard-panel) en [`DashboardNavbar`](/docs/components/dashboard-navbar) componenten die nodig zijn om de zijbalk op mobiel te demonstreren.
::

### Toggle

Gebruik de `toggle`-prop om de [DashboardSidebarToggle](/docs/components/dashboard-sidebar-toggle) component die op mobiel wordt weergegeven aan te passen.

U kunt elke eigenschap van de [Button](/docs/components/button) component doorgeven om deze aan te passen.

::component-example
---
collapse: true
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'dashboard-sidebar-toggle-example'
props:
  class: 'w-full'
---
::

### Zijde uitschakelen

Gebruik de `toggle-side` prop om de zijkant van de schakelknop te wijzigen. Standaard `left`.

::component-example
---
collapse: true
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'dashboard-sidebar-toggle-side-example'
props:
  class: 'w-full'
---
::

## Voorbeelden

### Control open staat

U kunt de open status regelen met behulp van de `open` prop of de `v-model:open` richtlijn.

::component-example
---
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'dashboard-sidebar-open-example'
class: '!p-0 !justify-start'
---
::

::note
In dit voorbeeld kunt u, gebruikmakend van [`defineShortcuts`](/docs/composables/define-shortcuts), de open status van de DashboardSidebar omschakelen door op: kbd{value="O"} te drukken.
::

### Control samengevouwen staat

U kunt de samengevouwen status regelen met behulp van de `collapsed` prop of de `v-model:collapsed`-richtlijn.

::component-example
---
name: 'dashboard-sidebar-collapsed-example'
class: '!p-0 !justify-start'
props:
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96 h-136'
---
::

::note
In dit voorbeeld kunt u, gebruikmakend van [`defineShortcuts`](/docs/composables/define-shortcuts), de samengevouwen status van de DashboardSidebar omschakelen door op: kbd{value="C"} te drukken.
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
