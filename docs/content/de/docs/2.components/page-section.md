---
title: Pagesection
description: 'Eine responsive Seite für Ihre Seiten.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageSection.vue
---

## Bearbeiten

Die PageSection-Komponente umhüllt Ihren Inhalt in einem [Container](/docs/components/container) und behält dabei die Flexibilität der vollen Breite bei, wodurch es einfach ist, Hintergrundfarben, Bilder oder Muster hinzuzufügen.

::code-preview

::u-page-section
---
title: 'Beautiful Vue UI components'
description: 'Nuxt UI provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt.'
headline: 'Features'
features:
  - title: 'Icons'
    description: 'Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.'
    icon: 'i-lucide-smile'
    to: '/docs/getting-started/integrations/icons'
  - title: 'Fonts'
    description: 'Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font optimization.'
    icon: 'i-lucide-a-large-small'
    to: '/docs/getting-started/integrations/fonts'
  - title: 'Color Mode'
    description: 'Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.'
    icon: 'i-lucide-sun-moon'
    to: '/docs/getting-started/integrations/color-mode'
---
::

::

Verwenden Sie es nach einer [PageHero](/docs/components/page-hero)-Komponente.

```vue {4}
<template>
  <UPageHero />

  <UPageSection />
</template>
```

### title

Verwenden Sie die `title`-Prop, um den Titel des Abschnitts festzulegen.

::component-code
---
props:
  title: 'Beautiful Vue UI components'
---
::

### Beschreibung

Verwenden Sie die `description`-Prop, um die Beschreibung des Abschnitts festzulegen.

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Beautiful Vue UI components'
  description: 'Nuxt UI provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt.'
---
::

### Überschrift

Verwenden Sie die `headline`-Prop, um die Überschrift des Abschnitts festzulegen.

::component-code
---
prettier: true
ignore:
  - title
  - description
props:
  title: 'Beautiful Vue UI components'
  description: 'Nuxt UI provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt.'
  headline: 'Features'
---
::

### Icon (englisch)

Verwenden Sie die `icon`-Prop, um das Symbol des Abschnitts festzulegen.

::component-code
---
prettier: true
ignore:
  - title
  - description
props:
  title: 'Beautiful Vue UI components'
  description: 'Nuxt UI provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt.'
  icon: 'i-lucide-rocket'
---
::

### Eigenschaften

Verwenden Sie die `features`-prop, um eine Liste von [PageFeature](/docs/components/page-feature) unter der Beschreibung als Array von Objekten mit den folgenden Eigenschaften anzuzeigen:

- `title?: string`{lang="ts-type"} (englisch)
- `description?: string`{lang="ts-type"} (englisch)
- `icon?: string`{lang="ts-type"} (nicht vorhanden)
- `orientation?: 'horizontal' | 'vertical'`{lang="ts-type"} (nicht vorhanden)

Sie können jede Eigenschaft aus der [Link](/docs/components/link#props)-Komponente übergeben, z. B. `to`, `target` usw.

::component-code
---
prettier: true
external:
  - features
externalTypes:
  - PageFeatureProps[]
ignore:
  - title
  - description
  - features
props:
  title: 'Beautiful Vue UI components'
  description: 'Nuxt UI provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt.'
  features:
    - title: 'Icons'
      description: 'Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.'
      icon: 'i-lucide-smile'
      to: '/docs/getting-started/integrations/icons'
    - title: 'Fonts'
      description: 'Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font optimization.'
      icon: 'i-lucide-a-large-small'
      to: '/docs/getting-started/integrations/fonts'
    - title: 'Color Mode'
      description: 'Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.'
      icon: 'i-lucide-sun-moon'
      to: '/docs/getting-started/integrations/color-mode'
---
::

### Links (Englisch)

Verwenden Sie die `links`-Prop, um eine Liste von [Button](/docs/components/button) unter der Beschreibung anzuzeigen.

::component-code
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
  title: 'Beautiful Vue UI components'
  description: 'Nuxt UI provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt.'
  links:
    - label: 'Get started'
      to: '/docs/getting-started'
      icon: 'i-lucide-square-play'
      color: 'neutral'
    - label: 'Explore components'
      to: '/docs/components/app'
      color: 'neutral'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
---
::

### Orientierung.

Verwenden Sie die `orientation`-Prop, um die Ausrichtung mit dem Standardslot zu ändern. Standardmäßig ist `vertical`.

::component-code
---
prettier: true
external:
  - features
  - links
externalTypes:
  - PageFeatureProps[]
  - ButtonProps[]
ignore:
  - title
  - description
  - icon
  - features
  - links
props:
  title: 'Beautiful Vue UI components'
  description: 'Nuxt UI provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt.'
  icon: 'i-lucide-rocket'
  orientation: horizontal
  features:
    - title: 'Icons'
      description: 'Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.'
      icon: 'i-lucide-smile'
      to: '/docs/getting-started/integrations/icons'
    - title: 'Fonts'
      description: 'Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font optimization.'
      icon: 'i-lucide-a-large-small'
      to: '/docs/getting-started/integrations/fonts'
    - title: 'Color Mode'
      description: 'Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.'
      icon: 'i-lucide-sun-moon'
      to: '/docs/getting-started/integrations/color-mode'
  links:
    - label: 'Explore components'
      to: '/docs/components/app'
      color: 'neutral'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <img src="https://picsum.photos/704/1294" width="352" height="647" alt="Illustration" class="w-full rounded-lg" loading="lazy" />
---

:img{src="https://picsum.photos/704/1294" width="352" height="647" alt="Illustration" class="w-full rounded-lg" loading="lazy"}
::

### Reverse (Rückwärts)

Verwenden Sie die `reverse`-Prop, um die Ausrichtung des Standardsteckplatzes umzukehren.

::component-code
---
prettier: true
external:
  - features
  - links
externalTypes:
  - PageFeatureProps[]
  - ButtonProps[]
ignore:
  - title
  - description
  - icon
  - features
  - links
props:
  title: 'Beautiful Vue UI components'
  description: 'Nuxt UI provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt.'
  icon: 'i-lucide-rocket'
  orientation: horizontal
  reverse: true
  features:
    - title: 'Icons'
      description: 'Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.'
      icon: 'i-lucide-smile'
      to: '/docs/getting-started/integrations/icons'
    - title: 'Fonts'
      description: 'Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font optimization.'
      icon: 'i-lucide-a-large-small'
      to: '/docs/getting-started/integrations/fonts'
    - title: 'Color Mode'
      description: 'Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.'
      icon: 'i-lucide-sun-moon'
      to: '/docs/getting-started/integrations/color-mode'
  links:
    - label: 'Explore components'
      to: '/docs/components/app'
      color: 'neutral'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <img src="https://picsum.photos/704/1294" width="352" height="647" alt="Illustration" class="w-full rounded-lg" loading="lazy" />
---

:img{src="https://picsum.photos/704/1294" width="352" height="647" alt="Illustration" class="w-full rounded-lg" loading="lazy"}
::

## API

### Props Bearbeiten

:component-props

### Slots Bearbeiten

:component-slots

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
