---
title: Pageón
description: 'Componente de tarjeta prediseñado que muestra un título, descripción y enlace opcional.'
category: page
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageCard.vue
---

xph0000xUso

El componente PageCard proporciona una forma flexible de mostrar el contenido en una tarjeta con una ilustración en la ranura predeterminada.

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
Utilice los componentes [PageGrid](/docs/components/page-grid), [PageColumns](/docs/components/page-columns) o [PageList](/docs/components/page-list) para mostrar varias PageCard.
::

### Nombre

Utilice el prop `title` para establecer el título de la tarjeta.

::component-code
---
hide:
  - class
props:
  title: 'Tailwind CSS'
  class: 'w-96'
---
::

### Descripción

Utilice el prop `description` para establecer la descripción de la tarjeta.

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

### Icono

Utilice el accesorio `icon` para configurar el icono de la tarjeta.

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

### Link (en inglés)

Puede pasar cualquier propiedad del componente [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) como `to`, `target`, `rel`, etc.

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

### Variante

Utilice el accesorio `variant` para cambiar el estilo de la tarjeta.

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
Puede aplicar la clase `light` o `dark` a la ranura `links` cuando se utiliza la variante `solid` para invertir los colores.
::

### Orientación

Utilice el prop `orientation` para cambiar la orientación con la ranura predeterminada.

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

### Reverse (Edición española)

Utilice el prop `reverse` para invertir la orientación de la ranura predeterminada.

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

### Highlight (Edición española)

Utilice los accesorios `highlight` y `highlight-color` para mostrar un borde resaltado alrededor de la tarjeta.

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

### Spotlight (Edición española)

Utilice los accesorios `spotlight` y `spotlight-color` para mostrar un efecto de foco que sigue el cursor del ratón y resalta los bordes al flotar.

::note
El efecto de foco se hará cargo de los efectos de desplazamiento cuando se use un accesorio `to`.
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
También puede personalizar el color y el tamaño mediante el uso de las variables CSS `--spotlight-color` y `--spotlight-size`:

```vue
<template>
  <UPageCard spotlight class="[--spotlight-color:var(--ui-error)] [--spotlight-size:200px]" />
</template>
```
::

## Ejemplos

### Como un testimonio

Utilice el componente [User](/docs/components/user) en la ranura `header` o `footer` para que la tarjeta se vea como un testimonio.

::component-example
---
name: 'page-card-testimonial-example'
---
::

::tip{to="/docs/components/page-columns"}
Puede utilizar el componente `PageColumns` para mostrar varias PageCard en un diseño de varias columnas.
::

## API

### Props (accesorios)

:component-props

### Slots

:component-slots

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
