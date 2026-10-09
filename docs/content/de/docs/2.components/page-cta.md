---
title: Seite
description: 'Ein Call-to-Action-Abschnitt, der auf Ihren Seiten angezeigt werden soll.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageCTA.vue
---

## Bearbeiten

Die PageCTA-Komponente bietet eine flexible Möglichkeit, einen Aufruf zum Handeln in Ihren Seiten mit einer Illustration im Standard-Slot anzuzeigen.

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

Verwenden Sie es in einer [PageSection](/docs/components/page-section)-Komponente oder direkt auf Ihrer Seite:

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
Verwenden Sie die Klassen `px-0` und `rounded-none`, damit der CTA den Rand der Seite auf dem Handy ausfüllt.
::

### title

Verwenden Sie die `title`-Prop, um den Titel des CTA festzulegen.

::component-code{slug="page-CTA"}
---
props:
  title: 'Trusted and supported by our amazing community'
---
::

### Beschreibung

Verwenden Sie die `description`-Prop, um die Beschreibung des CTA festzulegen.

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

### Links (englisch)

Verwenden Sie die `links`-Prop, um eine Liste von [Button](/docs/components/button) unter der Beschreibung anzuzeigen.

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

### Variant Übersetzung

Verwenden Sie die `variant` prop, um den Stil des CTA zu ändern.

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
Sie können die `light`-oder `dark`-Klasse auf den `links`-Steckplatz anwenden, wenn Sie die `solid`-Variante verwenden, um die Farben umzukehren.
::

### Orientierung

Verwenden Sie die `orientation`-Prop, um die Ausrichtung mit dem Standardslot zu ändern. Standardmäßig ist `vertical`.

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

### Reverse (Rückwärtsgang)

Verwenden Sie die `reverse`-Prop, um die Ausrichtung des Standardsteckplatzes umzukehren.

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

## API (Englisch)

### Props (englisch)

:component-props{slug="page-CTA"}

### Slots Bearbeiten

:component-slots{slug="page-CTA"}

## Theme Bearbeiten

:component-theme{slug="page-CTA"}

## Changelog (englisch)

:component-changelog
