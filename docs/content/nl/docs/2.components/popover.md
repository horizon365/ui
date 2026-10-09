---
description: Een niet-modaal dialoogvenster dat rond een triggerelement zweeft.
category: overlay
keywords:
  - hover card
  - flyout
links:
  - label: HoverKaart
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/hover-card
  - label: Popover
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/popover
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Popover.vue
---

## Gebruik

Gebruik een [Button](/docs/components/button) of een ander onderdeel in de standaardsleuf van de Popover.

Gebruik vervolgens de `#content`-sleuf om de inhoud toe te voegen die wordt weergegeven wanneer de Popover is geopend.

::component-code
---
prettier: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="size-48 m-4 inline-flex" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

### Modus

Gebruik de `mode` prop om de modus van de Popover te wijzigen. Standaard is `click`.

::tip
Stel in de `hover`-modus de `enable-touch`-prop zo in dat gebruikers de Popover kunnen wisselen door op de trigger op aanraakapparaten te tikken, of gebruik de `click`-modus voor triggers die bedoeld zijn om te tikken.
::

::component-code
---
prettier: true
items:
  mode:
    - click
    - hover
props:
  mode: 'hover'
  enableTouch: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="size-48 m-4 inline-flex" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

::note
Bij gebruik van de `hover` modus wordt de Reka UI [`HoverCard`](https://reka-ui.com/docs/components/hover-card) component gebruikt in plaats van de [`Popover`](https://reka-ui.com/docs/components/popover).
::

### Vertraging

Wanneer u de modus `hover` gebruikt, kunt u de `open-delay`- en `close-delay`-rekwisieten gebruiken om de vertraging te regelen voordat de Popover wordt geopend of gesloten.

::component-code
---
prettier: true
ignore:
  - mode
props:
  mode: 'hover'
  openDelay: 500
  closeDelay: 300
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="size-48 m-4 inline-flex" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

### Inhoud

Gebruik de `content`-prop om te bepalen hoe de Popover-inhoud wordt weergegeven, zoals bijvoorbeeld `align` of `side`.

::component-code
---
prettier: true
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
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="size-48 m-4 inline-flex" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

### Pijl

Gebruik de `arrow` prop om een pijl op de Popover weer te geven.

::component-code
---
prettier: true
ignore:
  - arrow
props:
  arrow: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="size-48 m-4 inline-flex" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

### Modaal

Gebruik de `modal`-prop om te bepalen of de Popover interactie met externe inhoud blokkeert. Standaard `false`.

::component-code
---
prettier: true
ignore:
  - title
props:
  modal: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="size-48 m-4 inline-flex" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

### Ontvankelijk

Gebruik de `dismissible`-prop om te bepalen of de Popover kan worden afgewezen wanneer u erbuiten klikt of op escape drukt. Standaard `true`.

::note
Een `close:prevent`-gebeurtenis wordt uitgezonden wanneer de gebruiker deze probeert te sluiten.
::

::component-example
---
name: 'popover-dismissible-example'
---
::

## Voorbeelden

### Controle open staat

U kunt de open status regelen met behulp van de `default-open` prop of de `v-model:open`-richtlijn.

::component-example
---
name: 'popover-open-example'
---
::

::note
In dit voorbeeld kunt u, gebruikmakend van [`defineShortcuts`](/docs/composables/define-shortcuts), de Popover omschakelen door op: kbd{value="O"} te drukken.
::

### Met opdrachtpalet

U kunt een [CommandPalette](/docs/components/command-palette) -component gebruiken in de inhoud van de Popover.

::component-example
---
collapse: true
name: 'popover-command-palette-example'
---
::

### Met volgende cursor

Je kunt de Popover de cursor laten volgen wanneer je met de [`reference`](https://reka-ui.com/docs/components/tooltip#trigger) over een element beweegt:

::component-example
---
name: 'popover-cursor-example'
---
::

### Met ankersleuf

U kunt de `#anchor`-sleuf gebruiken om de Popover tegen een aangepast element te plaatsen.

::warning
Dit slot werkt alleen als `mode` `click` is.
::

::component-example
---
collapse: true
name: 'popover-anchor-slot-example'
---
::

## API

### Props

:component-props

### Slots

:component-slots

::note
De `close` functie is alleen beschikbaar wanneer `mode` is ingesteld op `click` omdat Reka UI dit voor [`Popover`](https://reka-ui.com/docs/components/popover#close-using-slot-props) maar niet voor [`HoverCard`](https://reka-ui.com/docs/components/hover-card).
::

### Uitzendt

:component-emits

## Thema

:component-theme

## Changelog

:component-changelog
