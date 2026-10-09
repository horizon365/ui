---
description: Een indicator van een numerieke waarde of een toestand.
category: element
keywords:
  - notification dot
  - status dot
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Chip.vue
---

## Gebruik

Wikkel elk onderdeel in met een chip om een indicator weer te geven.

::component-code
---
prettier: true
slots:
  default: |

    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
:u-button{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### Kleur

Gebruik de `color` prop om de kleur van de chip te veranderen.

::component-code
---
prettier: true
props:
  color: neutral
slots:
  default: |

    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
:u-button{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### Grootte

Gebruik de `size` prop om de grootte van de chip te wijzigen.

::component-code
---
prettier: true
props:
  size: 3xl
slots:
  default: |

    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
:u-button{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### Tekst

Gebruik de `text` prop om de tekst van de Chip in te stellen.

::component-code
---
prettier: true
props:
  text: 5
  size: 3xl
slots:
  default: |

    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
:u-button{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### Positie

Gebruik de `position` prop om de positie van de Chip te veranderen.

::component-code
---
prettier: true
props:
  position: 'bottom-left'
slots:
  default: |

    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
:u-button{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### Inzet

Gebruik de `inset` prop om de chip in het onderdeel weer te geven. Dit is handig bij het omgaan met afgeronde componenten.

::component-code
---
prettier: true
props:
  inset: true
slots:
  default: |

    <UAvatar src="https://github.com/benjamincanac.png" loading="lazy" />
---
:u-avatar{src="https://github.com/benjamincanac.png" loading="lazy"}
::

### Zelfstandig

Gebruik de `standalone` prop naast de `inset` prop om de Chip inline weer te geven.

::component-code
---
props:
  standalone: true
  inset: true
---
::

::note
Het wordt op deze manier gebruikt in de [`CommandPalette`](/docs/components/command-palette), [`InputMenu`](/docs/components/input-menu), [`Select`](/docs/components/select) of [`SelectMenu`](/docs/components/select-menu) componenten.
::

## Voorbeelden

### Controle zichtbaarheid

U kunt de zichtbaarheid van de chip regelen met de `show` prop.

:component-example{name="chip-show-example"}

::note
In dit voorbeeld heeft de chip een kleur per status en wordt weergegeven wanneer de status niet `offline` is.
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
