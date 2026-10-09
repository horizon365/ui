---
description: Een pop-up die informatie onthult wanneer u over een element beweegt.
category: overlay
keywords:
  - hint
links:
  - label: Tooltip
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tooltip
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Tooltip.vue
---

## Gebruik

Gebruik een [Button](/docs/components/button) of een ander onderdeel in de standaardsleuf van de tooltip.

::component-code
---
prettier: true
ignore:
  - text
props:
  text: 'Open on GitHub'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="Open" color="neutral" variant="subtle"}
::

::warning
Zorg ervoor dat u uw app omhult met de [`App`](/docs/components/app) -component die de [`TooltipProvider`](https://reka-ui.com/docs/components/tooltip#provider) -component van Reka UI gebruikt.
::

::tip{to="/docs/components/app#props"}
U kunt de `App` component `tooltip` prop controleren om te zien hoe u de tooltip globaal configureert.
::

### Tekst

Gebruik de `text` prop om de inhoud van de Tooltip in te stellen.

::component-code
---
prettier: true
props:
  text: 'Open on GitHub'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="Open" color="neutral" variant="subtle"}
::

### Kbds

Gebruik de `kbds` prop om [Kbd](/docs/components/kbd) componenten in de Tooltip weer te geven.

::component-code
---
prettier: true
ignore:
  - text
  - kbds
props:
  text: 'Open on GitHub'
  kbds:
    - meta
    - G
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="Open" color="neutral" variant="subtle"}
::

::tip
U kunt speciale toetsen gebruiken zoals `meta` die wordt weergegeven als `⌘` op macOS en `Ctrl` op andere platforms.
::

### Vertraging

Gebruik de `delay-duration` prop om de vertraging te wijzigen voordat de Tooltip verschijnt. U kunt het bijvoorbeeld direct laten verschijnen door het in te stellen op `0`.

::component-code
---
prettier: true
ignore:
  - text
props:
  delayDuration: 0
  text: 'Open on GitHub'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="Open" color="neutral" variant="subtle"}
::

::tip
Dit kan globaal worden geconfigureerd via de optie `tooltip.delayDuration` in de [`App`](/docs/components/app) component.
::

### Inhoud

Gebruik de `content`-prop om te bepalen hoe de Tooltip-inhoud wordt weergegeven, zoals bijvoorbeeld `align` of `side`.

::tip
Dit kan globaal worden geconfigureerd via de optie `tooltip.content` in de [`App`](/docs/components/app) component.
::

::component-code
---
prettier: true
ignore:
  - text
items:
  content.align:
    - start
    - center
    - end
  content.side:
    - right
    - left
    - top
    - bottom
props:
  content:
    align: center
    side: bottom
    sideOffset: 8
  text: 'Open on GitHub'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="Open" color="neutral" variant="subtle"}
::

### Pijl

Gebruik de `arrow` prop om een pijl op de Tooltip weer te geven.

::component-code
---
prettier: true
ignore:
  - text
  - arrow
props:
  arrow: true
  text: 'Open on GitHub'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="Open" color="neutral" variant="subtle"}
::

### Uitgeschakeld

Gebruik de `disabled` prop om de Tooltip uit te schakelen.

::component-code
---
prettier: true
ignore:
  - text
props:
  disabled: true
  text: 'Open on GitHub'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="Open" color="neutral" variant="subtle"}
::

## Voorbeelden

### Controle open staat

U kunt de open status regelen met behulp van de `default-open` prop of de `v-model:open`-richtlijn.

::component-example
---
name: 'tooltip-open-example'
---
::

::note
In dit voorbeeld, gebruikmakend van [`defineShortcuts`](/docs/composables/define-shortcuts), kunt u de Tooltip omschakelen door op: kbd{value="O"} te drukken.
::

### Met volgende cursor

U kunt de tooltip de cursor laten volgen wanneer u met de [`reference`](https://reka-ui.com/docs/components/tooltip#trigger) over een element beweegt:

::component-example
---
name: 'tooltip-cursor-example'
---
::

## API

### Props

:component-props

### Slots

:component-slots

### Uitzendt

:component-emits

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog
