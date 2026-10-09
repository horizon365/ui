---
description: 'Een component om oneindig veel scrollende inhoud te creëren.'
category: data
keywords:
  - ticker
  - scroller
  - carousel
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Marquee.vue
---

## Gebruik

Gebruik de standaardsleuf met uw inhoud om een oneindig scrollende animatie te maken.

::component-code
---
prettier: true
slots:
  default: |

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
---
:u-icon{name="i-simple-icons-github" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-discord" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-x" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-instagram" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-linkedin" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

::tip
De animatie wordt automatisch uitgeschakeld wanneer de gebruiker de voorkeur geeft aan verminderde beweging, de inhoud wordt in plaats daarvan statisch weergegeven.
::

### Pauze op Hover

Gebruik de `pause-on-hover`-prop om de animatie te pauzeren wanneer de gebruiker met de muis over de inhoud beweegt.

::component-code
---
prettier: true
props:
  pauseOnHover: true
slots:
  default: |

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
---
:u-icon{name="i-simple-icons-github" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-discord" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-x" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-instagram" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-linkedin" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

### Omkeren

Gebruik de `reverse` prop om de richting van de animatie om te keren.

::component-code
---
prettier: true
props:
  reverse: true
slots:
  default: |

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
---
:u-icon{name="i-simple-icons-github" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-discord" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-x" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-instagram" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-linkedin" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

### Oriëntatie

Gebruik de `orientation` prop om de schuifrichting te wijzigen.

::component-code
---
prettier: true
class: 'h-96'
props:
  orientation: 'vertical'
slots:
  default: |

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
---
:u-icon{name="i-simple-icons-github" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-discord" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-x" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-instagram" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-linkedin" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

### Herhalen

Gebruik de `repeat`-prop om op te geven hoe vaak de inhoud in de animatie moet worden herhaald.

::component-code
---
prettier: true
props:
  repeat: 6
slots:
  default: |

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
---
:u-icon{name="i-simple-icons-github" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-discord" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-x" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-instagram" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-linkedin" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

### Overlay

Gebruik de `overlay` prop om de verloopoverlays aan de randen van de partytent te verwijderen.

::component-code
---
prettier: true
props:
  overlay: false
slots:
  default: |

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
---
:u-icon{name="i-simple-icons-github" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-discord" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-x" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-instagram" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-linkedin" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

## Voorbeelden

### Getuigenissen

Gebruik de `Marquee`-component om een oneindig scrollende animatie te maken voor uw getuigenissen.

::component-example{label="Met Artikelen"}
---
prettier: true
name: 'marquee-testimonials'
collapse: true
overflowHidden: true
class: 'px-0'
---
::

### Schermafbeeldingen

Gebruik de `Marquee`-component om een oneindig scrollende animatie voor uw screenshots te maken.

::component-example{label="Met Screenshots"}
---
prettier: true
name: 'marquee-screenshots'
collapse: true
overflowHidden: true
class: '!p-0'
---
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
