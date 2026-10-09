---
title: PageHero ist
description: 'Ein responsive Held für Ihre Seiten.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageHero.vue
---

## Bearbeiten

Die PageHero-Komponente umhüllt Ihre Inhalte in einem [Container](/docs/components/container) und behält dabei die Flexibilität der vollen Breite bei, sodass Hintergrundfarben, Bilder oder Muster einfach hinzugefügt werden können.

::code-preview

:::u-page-hero
---
title: 'Ultimate Vue UI library'
description: 'A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.'
---

::::u-page-card{variant="subtle" class="rounded-lg"}

![App Screenshot ](/blocks/image4.png){width="960" height="540" class="rounded-sm shadow-2xl ring ring-default"}

::::

:::

::

xph014title Übersetzung

Verwenden Sie die `title` prop, um den Titel des Helden zu setzen.

::component-code
---
props:
  title: 'Ultimate Vue UI library'
---
::

### Beschreibung

Verwenden Sie die `description`-Prop, um die Beschreibung des Helden festzulegen.

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Ultimate Vue UI library'
  description: 'A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.'
---
::

### Headline Übersetzung

Verwenden Sie die `headline`-Prop, um die Überschrift des Helden zu setzen.

::component-code
---
prettier: true
ignore:
  - title
  - description
props:
  title: 'Ultimate Vue UI library'
  description: 'A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.'
  headline: 'New release'
---
::

### Links (englisch)

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
  title: 'Ultimate Vue UI library'
  description: 'A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.'
  links:
    - label: 'Get started'
      to: '/docs/getting-started'
      icon: 'i-lucide-square-play'
    - label: 'Learn more'
      to: '/docs/getting-started/theme/design-system'
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
  - links
externalTypes:
  - ButtonProps[]
ignore:
  - title
  - description
  - headline
  - links
props:
  title: 'Ultimate Vue UI library'
  description: 'A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.'
  headline: 'New release'
  orientation: horizontal
  links:
    - label: 'Get started'
      to: '/docs/getting-started'
      icon: 'i-lucide-square-play'
    - label: 'Learn more'
      to: '/docs/getting-started/theme/design-system'
      color: 'neutral'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <img src="/blocks/image4.png" alt="App screenshot" class="rounded-lg shadow-2xl ring ring-default" />
---

![App Screenshot ](/blocks/image4.png){class="rounded-lg shadow-2xl ring ring-default"}
::

### Umgekehrtes

Verwenden Sie die `reverse`-Prop, um die Ausrichtung des Standardsteckplatzes umzukehren.

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
  - headline
  - links
props:
  title: 'Ultimate Vue UI library'
  description: 'A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.'
  headline: 'New release'
  orientation: horizontal
  reverse: true
  links:
    - label: 'Get started'
      to: '/docs/getting-started'
      icon: 'i-lucide-square-play'
    - label: 'Learn more'
      to: '/docs/getting-started/theme/design-system'
      color: 'neutral'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <img src="/blocks/image4.png" alt="App screenshot" class="rounded-lg shadow-2xl ring ring-default" />
---

![App Screenshot ](/blocks/image4.png){class="rounded-lg shadow-2xl ring ring-default"}
::

## API (Englisch)

### Props Bearbeiten

:component-props

### Slots (englisch)

:component-slots

## Theme Bearbeiten

:component-theme

## Changelog Bearbeiten

:component-changelog
