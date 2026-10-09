---
title: PageCard
description: 'Eine vorgestylte Kartenkomponente, die einen Titel, eine Beschreibung und einen optionalen Link anzeigt.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageCard.vue
---

## Bearbeiten

Die PageCard-Komponente bietet eine flexible Möglichkeit, Inhalte auf einer Karte mit einer Abbildung im Standardsteckplatz anzuzeigen.

::code-preview

::u-page-card
---
title: 'Tailwind CSS'
description: 'Nuxt UI integrates with latest Tailwind CSS, bringing significant improvements.'
icon: 'i-simple-icons-tailwindcss'
class: 'w-96'
---

:img{src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

::

::tip
Verwenden Sie die Komponenten [PageGrid](/docs/components/page-grid), [PageColumns](/docs/components/page-columns) oder [PageList](/docs/components/page-list), um mehrere PageCard anzuzeigen.
::

xph019title Übersetzung

Verwenden Sie die `title`-Stütze, um den Titel der Karte festzulegen.

::component-code
---
hide:
  - class
props:
  title: 'Tailwind CSS'
  class: 'w-96'
---
::

### Beschreibung

Verwenden Sie die `description`-Prop, um die Beschreibung der Karte festzulegen.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
props:
  title: 'Tailwind CSS'
  description: 'Nuxt UI integrates with latest Tailwind CSS, bringing significant improvements.'
  class: 'w-96'
---
::

### Icon (Deutsche Ausgabe)

Verwenden Sie die `icon` prop, um das Symbol der Karte einzustellen.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
props:
  title: 'Tailwind CSS'
  description: 'Nuxt UI integrates with latest Tailwind CSS, bringing significant improvements.'
  icon: 'i-simple-icons-tailwindcss'
  class: 'w-96'
---
::

### Link auf

Sie können jede Eigenschaft der Komponente [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) übergeben, z. B. `to`, `target`, `rel` usw.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
  - icon
  - target
props:
  title: 'Tailwind CSS'
  description: 'Nuxt UI integrates with latest Tailwind CSS, bringing significant improvements.'
  icon: 'i-simple-icons-tailwindcss'
  to: 'https://tailwindcss.com/blog/tailwindcss-v4'
  target: _blank
  class: 'w-96'
---
::

### Variant Bearbeiten

Verwenden Sie die `variant` prop, um den Stil der Karte zu ändern.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
  - icon
  - to
  - target
props:
  title: 'Tailwind CSS'
  description: 'Nuxt UI integrates with latest Tailwind CSS, bringing significant improvements.'
  icon: 'i-simple-icons-tailwindcss'
  to: 'https://tailwindcss.com/blog/tailwindcss-v4'
  target: _blank
  variant: soft
  class: 'w-96'
---
::

::tip
Sie können die `light`-oder `dark`-Klasse auf den `links`-Steckplatz anwenden, wenn Sie die `solid`-Variante verwenden, um die Farben umzukehren.
::

xph107 Orientierung

Verwenden Sie die `orientation`-Prop, um die Ausrichtung mit dem Standardslot zu ändern. Standardmäßig `vertical`.

::component-code
---
prettier: true
ignore:
  - title
  - description
  - icon
props:
  title: 'Tailwind CSS'
  description: 'Nuxt UI integrates with latest Tailwind CSS, bringing significant improvements.'
  icon: 'i-simple-icons-tailwindcss'
  orientation: horizontal
slots:
  default: |

    <img src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full" />
---

:img{src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

### reverse (umgekehrt)

Verwenden Sie die `reverse`-Prop, um die Ausrichtung des Standardsteckplatzes umzukehren.

::component-code
---
prettier: true
ignore:
  - title
  - description
  - icon
props:
  title: 'Tailwind CSS'
  description: 'Nuxt UI integrates with latest Tailwind CSS, bringing significant improvements.'
  icon: 'i-simple-icons-tailwindcss'
  orientation: horizontal
  reverse: true
slots:
  default: |

    <img src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full" />
---

:img{src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

### Highlight (Englisch)

Verwenden Sie die `highlight`-und `highlight-color`-Requisiten, um einen hervorgehobenen Rahmen um die Karte anzuzeigen.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
  - icon
  - orientation
props:
  title: 'Tailwind CSS'
  description: 'Nuxt UI integrates with latest Tailwind CSS, bringing significant improvements.'
  icon: 'i-simple-icons-tailwindcss'
  orientation: horizontal
  highlight: true
  highlightColor: 'primary'
slots:
  default: |

    <img src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full" />
---

:img{src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

### Spotlight (englisch)

Verwenden Sie die Props `spotlight` und `spotlight-color`, um einen Spotlight-Effekt anzuzeigen, der dem Mauszeiger folgt und die Ränder beim Schweben hervorhebt.

::note
Der Spotlight-Effekt übernimmt Hover-Effekte, wenn Sie eine `to`-Prop. Es ist am besten, es mit der `outline`-Variante zu verwenden.
::

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
  - icon
  - orientation
props:
  title: 'Tailwind CSS'
  description: 'Nuxt UI integrates with latest Tailwind CSS, bringing significant improvements.'
  icon: 'i-simple-icons-tailwindcss'
  orientation: horizontal
  spotlight: true
  spotlightColor: 'primary'
slots:
  default: |

    <img src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full" />
---

:img{src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

::tip
Sie können die Farbe und Größe auch mit den CSS-Variablen `--spotlight-color` und `--spotlight-size` anpassen:

```vue
<template>
  <UPageCard spotlight class="[--spotlight-color:var(--ui-error)] [--spotlight-size:200px]" />
</template>
```
::

## Beispiele

### As ein Zeugnis

Verwenden Sie die [User](/docs/components/user)-Komponente im `header`-oder `footer`-Steckplatz, um die Karte wie ein Testimonial aussehen zu lassen.

::component-example
---
name: 'page-card-testimonial-example'
---
::

::tip{to="/docs/components/page-columns"}
Sie können die `PageColumns`-Komponente verwenden, um mehrere PageCards in einem mehrspaltigen Layout darzustellen.
::

## API (englisch)

### Props (nicht)

:component-props

### Slots Bearbeiten

:component-slots

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
