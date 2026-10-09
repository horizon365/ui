---
description: Een img-element met fallback en Nuxt Image-ondersteuning.
category: element
keywords:
  - profile picture
  - user image
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Avatar.vue
---

## Gebruik

De Avatar gebruikt de `<NuxtImg>` component wanneer [`@nuxt/image`](https://github.com/nuxt/image) is geïnstalleerd, anders valt hij terug naar `img`.

::component-code
---
ignore:
  - src
props:
  src: 'https://github.com/benjamincanac.png'
---
::

::note
U kunt elke eigenschap van het HTML `<img>`-element doorgeven, zoals `alt`, `loading`, enz.
::

::tip
Als u zich wilt afmelden voor `@nuxt/image`, gebruikt u de `as` prop: `:as="{ img: 'img' }"`.
::

### Src

Gebruik de `src` prop om de afbeelding URL in te stellen.

::component-code
---
ignore:
  - loading
props:
  src: 'https://github.com/benjamincanac.png'
  loading: lazy
---
::

### Grootte

Gebruik de `size` prop om de grootte van de Avatar in te stellen.

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
De `<img>` elementen `width` en `height` worden automatisch ingesteld op basis van de `size` prop.
::

### Icoon

Gebruik de `icon` prop om een [Icon](/docs/components/icon) weer te geven.

::component-code
---
props:
  icon: 'i-lucide-image'
  size: md
---
::

### Tekst

Gebruik de `text` prop om een fallback tekst weer te geven.

::component-code
---
props:
  text: '+1'
  size: md
---
::

### Alt

Als er geen pictogram of tekst is opgegeven, wordt de **initials** van de `alt` prop gebruikt als fallback.

::component-code
---
props:
  alt: 'Benjamin Canac'
  size: md
---
::

::note
De `alt` prop wordt doorgegeven aan het `img` element als het `alt` attribuut.
::

### Kleur: badge{label="4.8+" class="align-text-top"}

Gebruik de `color` prop om de kleur van de Avatar te veranderen.

::component-code
---
props:
  color: primary
  alt: 'Benjamin Canac'
---
::

### Spaander

Gebruik de `chip` prop om een chip rond de Avatar weer te geven.

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

## Voorbeelden

### Met tooltip

U kunt een [Tooltip](/docs/components/tooltip) gebruiken om een tooltip weer te geven wanneer u met de Avatar beweegt.

:component-example{name="avatar-tooltip-example"}

### Met masker

U kunt een CSS-masker gebruiken om een Avatar met een aangepaste vorm weer te geven in plaats van een eenvoudige cirkel.

:component-example{name="avatar-mask-example"}

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes" target="_blank"}
Dit onderdeel ondersteunt ook alle native `<img>` HTML-kenmerken.
::

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog
