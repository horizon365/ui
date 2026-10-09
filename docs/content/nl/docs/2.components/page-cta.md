---
title: PaginaCTA
description: 'Een call-to-action-sectie om op uw pagina 's weer te geven.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageCTA.vue
---

## Gebruik

De PageCTA-component biedt een flexibele manier om een call-to-action op uw pagina 's weer te geven met een illustratie in de standaardsleuf.

::code-preview

::u-page-c-t-a
---
title: 'Trusted and supported by our amazing community'
description: 'Preview the latest Tailwind CSS and get started with Nuxt UI.'
orientation: horizontal
links:
  - label: 'Get started'
    color: 'neutral'
  - label: 'Learn more'
    color: 'neutral'
    variant: 'subtle'
    trailingIcon: 'i-lucide-arrow-right'
---

:img{src="https://picsum.photos/640/616" width="320" height="308" alt="Illustration" class="w-full rounded-lg"}
::

::

Gebruik het in een [PageSection](/docs/components/page-section) of rechtstreeks op uw pagina:

```vue {4,8-10}
<template>
  <UPageHero />

  <UPageCTA class="rounded-none" />

  <UPageSection />

  <UPageSection :ui="{ container: 'px-0' }">
    <UPageCTA class="rounded-none sm:rounded-xl" />
  </UPageSection>

  <UPageSection />
</template>
```

::tip
Gebruik de klassen `px-0` en `rounded-none` om de CTA de rand van de pagina op mobiel te laten vullen.
::

### Titel

Gebruik de `title` prop om de titel van de CTA in te stellen.

::component-code{slug="page-CTA"}
---
props:
  title: 'Trusted and supported by our amazing community'
---
::

### Beschrijving

Gebruik de `description` prop om de beschrijving van de CTA in te stellen.

::component-code{slug="page-CTA"}
---
prettier: true
ignore:
  - title
props:
  title: 'Trusted and supported by our amazing community'
  description: "We've built a strong, lasting partnership. Their trust is our driving force, propelling us towards shared success."
---
::

### Links

Gebruik de `links` prop om een lijst met [Button](/docs/components/button) onder de beschrijving weer te geven.

::component-code{slug="page-CTA"}
---
prettier: true
external:
  - links
externalTypes:
  - ButtonProps[]
ignore:
  - title
  - description
  - links
props:
  title: 'Trusted and supported by our amazing community'
  description: "We've built a strong, lasting partnership. Their trust is our driving force, propelling us towards shared success."
  links:
    - label: 'Get started'
      color: 'neutral'
    - label: 'Learn more'
      color: 'neutral'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
---
::

### Variant

Gebruik de `variant` prop om de stijl van de CTA te veranderen.

::component-code{slug="page-CTA"}
---
prettier: true
external:
  - links
externalTypes:
  - ButtonProps[]
ignore:
  - title
  - description
  - links
props:
  title: 'Trusted and supported by our amazing community'
  description: "We've built a strong, lasting partnership. Their trust is our driving force, propelling us towards shared success."
  variant: soft
  links:
    - label: 'Get started'
      color: 'neutral'
    - label: 'Learn more'
      color: 'neutral'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
---
::

::tip
U kunt de klasse `light` of `dark` toepassen op de `links`-sleuf wanneer u de `solid`-variant gebruikt om de kleuren om te keren.
::

### Oriëntatie

Gebruik de `orientation`-prop om de oriëntatie met de standaardsleuf te wijzigen. Standaard `vertical`.

::component-code{slug="page-CTA"}
---
prettier: true
external:
  - links
externalTypes:
  - ButtonProps[]
ignore:
  - title
  - description
  - links
props:
  title: 'Trusted and supported by our amazing community'
  description: "We've built a strong, lasting partnership. Their trust is our driving force, propelling us towards shared success."
  orientation: horizontal
  links:
    - label: 'Get started'
      color: 'neutral'
    - label: 'Learn more'
      color: 'neutral'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <img src="https://picsum.photos/640/728" width="320" height="364" alt="Illustration" class="w-full rounded-lg" loading="lazy" />
---

:img{src="https://picsum.photos/640/728" width="320" height="364" alt="Illustration" class="w-full rounded-lg" loading="lazy"}
::

### Omkeren

Gebruik de `reverse` prop om de oriëntatie van de standaardsleuf om te keren.

::component-code{slug="page-CTA"}
---
prettier: true
external:
  - links
externalTypes:
  - ButtonProps[]
ignore:
  - title
  - description
  - links
props:
  title: 'Trusted and supported by our amazing community'
  description: "We've built a strong, lasting partnership. Their trust is our driving force, propelling us towards shared success."
  orientation: horizontal
  reverse: true
  links:
    - label: 'Get started'
      color: 'neutral'
    - label: 'Learn more'
      color: 'neutral'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <img src="https://picsum.photos/640/728" width="320" height="364" alt="Illustration" class="w-full rounded-lg" loading="lazy" />
---

:img{src="https://picsum.photos/640/728" width="320" height="364" alt="Illustration" class="w-full rounded-lg" loading="lazy"}
::

## API

### Props

:component-props{slug="page-CTA"}

### Slots

:component-slots{slug="page-CTA"}

## Thema

:component-theme{slug="page-CTA"}

## Wijzigingsgelog

:component-changelog
