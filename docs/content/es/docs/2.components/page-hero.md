---
title: Pagañón
description: 'Un héroe responsive para sus páginas.'
category: page
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageHero.vue
---

xph0000xUso

El componente PageHero envuelve su contenido en un [Container](/docs/components/container) mientras mantiene la flexibilidad de ancho completo, lo que facilita la adición de colores de fondo, imágenes o patrones.

::code-preview

:::u-page-hero
---
title: 'Ultimate Vue UI library'
description: 'A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.'
---

::::u-page-card{variant="subtle" class="rounded-lg"}

![xxxx](x/blocks/image4.pngx)x{width="960" height="540" class="rounded-sm shadow-2xl ring ring-default"}

::::

:::

::

### Nombre

Utilice el prop `title` para establecer el título del héroe.

::component-code
---
props:
  title: 'Ultimate Vue UI library'
---
::

### Descripción

Utilice el prop `description` para establecer la descripción del héroe.

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

### Categoría

Utilice el accesorio `headline` para establecer el titular del héroe.

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

### Enlaces

Utilice el prop `links` para mostrar una lista de [Button](/docs/components/button) debajo de la descripción.

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

### Orientación

Utilice el accesorio `orientation` para cambiar la orientación con la ranura predeterminada.

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

![xApp screenshot](x/blocks/image4.png){class="rounded-lg shadow-2xl ring ring-default"}
::

### Reverse (Edición española)

Utilice el prop `reverse` para invertir la orientación de la ranura predeterminada.

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

![xApp screenshot](/blocks/image4.png){class="rounded-lg shadow-2xl ring ring-default"}
::

## API (Versión)

### Accesorios

:component-props

### Slots

:component-slots

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
