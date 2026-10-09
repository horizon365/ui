---
description: Ein Indikator für einen numerischen Wert oder einen Zustand.
category: element
keywords:
  - notification dot
  - status dot
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Chip.vue
---

## Bearbeiten

Wickeln Sie ein beliebiges Bauteil mit einem Chip ein, um eine Anzeige anzuzeigen.

::component-code
---
prettier: true
slots:
  default: |

    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
:u-button{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### color

Verwenden Sie die `color`-Prop, um die Farbe des Chips zu ändern.

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

### Größe

Verwenden Sie die `size`-Prop, um die Größe des Chips zu ändern.

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

### Text Bearbeiten

Verwenden Sie die `text`-Prop, um den Text des Chips festzulegen.

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

### Position Bearbeiten

Verwenden Sie die `position`-Prop, um die Position des Chips zu ändern.

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

### Inset (nicht)

Verwenden Sie die `inset` prop, um den Chip im Inneren der Komponente anzuzeigen. Dies ist nützlich, wenn es sich um abgerundete Komponenten handelt.

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

### Standalone (englisch)

Verwenden Sie die `standalone`-Prop neben der `inset`-Prop, um den Chip inline anzuzeigen.

::component-code
---
props:
  standalone: true
  inset: true
---
::

::note
Es wird auf diese Weise in den Komponenten [`CommandPalette`](](/docs/components/command-palette), [`InputMenu`](/docs/components/input-menu), [`Select`x5x/docs/components/select) oder xph0885x`SelectMenu`]() verwendet.
::

## Examples [Bearbeiten]

### Control-Sichtbarkeit

Sie können die Sichtbarkeit des Chips mit der `show`-Stütze steuern.

:component-example{name="chip-show-example"}

::note
In diesem Beispiel hat der Chip eine Farbe pro Status und wird angezeigt, wenn der Status nicht `offline` ist.
::

## API (englisch)

### Props (englisch)

:component-props

### Slots (englisch)

:component-slots

### Emits (nicht)

:component-emits

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
