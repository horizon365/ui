---
description: Ein img-Element mit Fallback-und Nuxt-Image-Unterstützung.
category: element
keywords:
  - profile picture
  - user image
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Avatar.vue
---

## Bearbeiten

Der Avatar verwendet die `<NuxtImg>`-Komponente, wenn [`@nuxt/image`](https://github.com/nuxt/image) installiert ist, ansonsten fällt er auf `img` zurück.

::component-code
---
ignore:
  - src
props:
  src: 'https://github.com/benjamincanac.png'
---
::

::note
Sie können jede Eigenschaft aus dem HTML-Element `<img>` übergeben, z. B. `alt`, `loading` usw.
::

::tip
Um `@nuxt/image` zu deaktivieren, verwenden Sie die `as` prop: `:as="{ img: 'img' }"`.
::

### src Bearbeiten

Verwenden Sie die `src` prop, um die Bild-URL festzulegen.

::component-code
---
ignore:
  - loading
props:
  src: 'https://github.com/benjamincanac.png'
  loading: lazy
---
::

### Größe

Verwenden Sie die `size`-Prop, um die Größe des Avatars einzustellen.

::component-code
---
ignore:
  - src
  - loading
props:
  src: 'https://github.com/benjamincanac.png'
  size: xl
  loading: lazy
---
::

::note
Die `<img>`-Elemente `width` und `height` werden automatisch basierend auf der `size`-Prop gesetzt.
::

### Icon (nicht vorhanden)

Verwenden Sie die `icon`-Prop, um ein Fallback [Icon](/docs/components/icon) anzuzeigen.

::component-code
---
props:
  icon: 'i-lucide-image'
  size: md
---
::

### Text Übersetzung

Verwenden Sie die `text`-Prop, um einen Fallback-Text anzuzeigen.

::component-code
---
props:
  text: '+1'
  size: md
---
::

### Alt ist

Wenn kein Symbol oder Text angegeben ist, wird die **initials** der `alt` prop als Fallback verwendet.

::component-code
---
props:
  alt: 'Benjamin Canac'
  size: md
---
::

::note
Die `alt`-prop wird als `alt`-Attribut an das `img`-Element übergeben.
::

### Farbe: badgexx075x

Verwenden Sie die `color` prop, um die Farbe des Avatars zu ändern.

::component-code
---
props:
  color: primary
  alt: 'Benjamin Canac'
---
::

### Chip ist

Verwenden Sie die `chip`-Prop, um einen Chip um den Avatar herum anzuzeigen.

::component-code
---
prettier: true
ignore:
  - src
  - loading
  - chip.inset
props:
  src: 'https://github.com/benjamincanac.png'
  loading: lazy
  chip:
    inset: true
---
::

## Beispiele

### With Tooltip Übersetzung

Sie können eine [Tooltipxph09x/docs/components/tooltip)-Komponente verwenden, um einen Tooltip anzuzeigen, wenn Sie den Avatar bewegen.

:component-example{name="avatar-tooltip-example"}

### With Maske

Sie können eine CSS-Maske verwenden, um einen Avatar mit einer benutzerdefinierten Form anstelle eines einfachen Kreises anzuzeigen.

:component-example{name="avatar-mask-example"}

## API Bearbeiten

### Props (nicht)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<img>` HTML-Attribute.
::

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
