---
description: Un elemento img con respaldo y soporte para Nuxt Image.
category: element
keywords:
  - profile picture
  - user image
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Avatar.vue
---

xph0000xUso

El Avatar utiliza el componente `<NuxtImg>` cuando [`@nuxt/image`](https://github.com/nuxt/image) está instalado, volviendo a `img` de lo contrario.

::component-code
---
ignore:
  - src
props:
  src: 'https://github.com/benjamincanac.png'
---
::

::note
Puede pasar cualquier propiedad del elemento HTML `<img>` como `alt`, `loading`, etc.
::

::tip
Para excluirse de `@nuxt/image`, use el prop `as`: `:as="{ img: 'img' }"`.
::

### Src (Edición española)

Utilice el prop `src` para configurar la URL de la imagen.

::component-code
---
ignore:
  - loading
props:
  src: 'https://github.com/benjamincanac.png'
  loading: lazy
---
::

### Tamaño

Utilice el accesorio `size` para establecer el tamaño del avatar.

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
Los valores `width` y `height` del elemento `<img>` se establecen automáticamente en función de la proposición `size`.
::

### Icon

Utilice el soporte `icon` para mostrar un respaldo [Icon](/docs/components/icon).

::component-code
---
props:
  icon: 'i-lucide-image'
  size: md
---
::

### Text (Edición española)

Utilice el prop `text` para mostrar un texto alternativo.

::component-code
---
props:
  text: '+1'
  size: md
---
::

### Alt (Edición española)

Cuando no se proporciona ningún icono o texto, el **initials** del prop `alt` se utiliza como alternativa.

::component-code
---
props:
  alt: 'Benjamin Canac'
  size: md
---
::

::note
El prop `alt` se pasa al elemento `img` como el atributo `alt`.
::

### Color: badge{label="4.8+" class="align-text-top"} (en inglés)

Utilice el accesorio `color` para cambiar el color del Avatar.

::component-code
---
props:
  color: primary
  alt: 'Benjamin Canac'
---
::

### Chip (Edición española)

Utilice el soporte `chip` para mostrar un chip alrededor del Avatar.

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

## Ejemplos

### Con herramienta

Puede usar un componente [Tooltip](/docs/components/tooltip) para mostrar una información sobre herramientas al pasar el Avatar.

:component-example{name="avatar-tooltip-example"}

### Con máscara

Puedes usar una máscara CSS para mostrar un avatar con una forma personalizada en lugar de un círculo simple.

:component-example{name="avatar-mask-example"}

## API (Edición española)

### Props (accesorios)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes" target="_blank"}
Este componente también admite todos los atributos HTML nativos de `<img>`.
::

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
