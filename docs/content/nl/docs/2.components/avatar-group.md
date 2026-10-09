---
title: AvatarGroep
description: Stapel meerdere avatars in een groep.
category: element
keywords:
  - stacked avatars
  - faces
  - members
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/AvatarGroup.vue
---

## Gebruik

Wikkel meerdere [Avatar](/docs/components/avatar) in een AvatarGroup om ze te stapelen.

::component-code
---
prettier: true
slots:
  default: |

    <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" />
    <UAvatar src="https://github.com/HugoRCD.png" alt="Hugo Richard" />
    <UAvatar src="https://github.com/atinux.png" alt="Sébastien Chopin" />
---
:u-avatar{src="https://github.com/benjamincanac.png" alt="Benjamin Canac"}
:u-avatar{src="https://github.com/HugoRCD.png" alt="Hugo Richard"}
:u-avatar{src="https://github.com/atinux.png" alt="Sébastien Chopin"}
::

### Grootte

Gebruik de `size` prop om de grootte van alle avatars te wijzigen.

::component-code
---
prettier: true
props:
  size: xl
slots:
  default: |

    <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" loading="lazy" />
    <UAvatar src="https://github.com/HugoRCD.png" alt="Hugo Richard" loading="lazy" />
    <UAvatar src="https://github.com/atinux.png" alt="Sébastien Chopin" loading="lazy" />
---
:u-avatar{src="https://github.com/benjamincanac.png" alt="Benjamin Canac" loading="lazy"}
:u-avatar{src="https://github.com/HugoRCD.png" alt="Hugo Richard" loading="lazy"}
:u-avatar{src="https://github.com/atinux.png" alt="Sébastien Chopin" loading="lazy"}
::

### Max

Gebruik de `max` prop om het aantal weergegeven avatars te beperken. De rest wordt weergegeven als een `+X` avatar.

::component-code
---
prettier: true
props:
  max: 2
slots:
  default: |

    <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" loading="lazy" />
    <UAvatar src="https://github.com/HugoRCD.png" alt="Hugo Richard" loading="lazy" />
    <UAvatar src="https://github.com/atinux.png" alt="Sébastien Chopin" loading="lazy" />
---
:u-avatar{src="https://github.com/benjamincanac.png" alt="Benjamin Canac" loading="lazy"}
:u-avatar{src="https://github.com/HugoRCD.png" alt="Hugo Richard" loading="lazy"}
:u-avatar{src="https://github.com/atinux.png" alt="Sébastien Chopin" loading="lazy"}
::

### Kleur: badge{label="4.8+" class="align-text-top"}

Gebruik de `color` prop om de kleur van alle avatars te veranderen.

::component-code
---
prettier: true
props:
  color: primary
slots:
  default: |

    <UAvatar alt="Benjamin Canac" />
    <UAvatar alt="Hugo Richard" />
    <UAvatar alt="Sébastien Chopin" />
---
:u-avatar{alt="Benjamin Canac"}
:u-avatar{alt="Hugo Richard"}
:u-avatar{alt="Sébastien Chopin"}
::

## Voorbeelden

### Met tooltip

Wikkel elke avatar in met een [Tooltip](/docs/components/tooltip) om een tooltip weer te geven bij zweven.

:component-example{name="avatar-group-tooltip-example"}

### Met chip

Wikkel elke avatar met een [Chip](/docs/components/chip) om een chip rond de avatar weer te geven.

:component-example{name="avatar-group-chip-example"}

### Met link

Wikkel elke avatar in met een [Link](/docs/components/link) om ze klikbaar te maken.

:component-example{name="avatar-group-link-example"}

### Met masker

Wikkel een avatar in met een CSS-masker om deze weer te geven met een aangepaste vorm.

:component-example{name="avatar-group-mask-example"}

::warning
De `chip` prop werkt niet goed bij het gebruik van een masker. Chips kunnen worden gesneden, afhankelijk van de vorm van het masker.
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
