---
title: PageSección
description: 'Una sección responsive para tus páginas.'
category: page
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageSection.vue
---

xph0000xUso

El componente PageSection envuelve el contenido en un contenedor [Container](/docs/components/container) manteniendo la flexibilidad de ancho completo, lo que facilita la adición de colores de fondo, imágenes o patrones.

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

Úselo después de un componente [PageHero](/docs/components/page-hero):

```vue {4}
<template>
  <UPageHero />

  <UPageSection />
</template>
```

### Nombre

Utilice el prop `title` para establecer el título de la sección.

::component-code
---
props:
  title: 'Beautiful Vue UI components'
---
::

### Descripción

Utilice el prop `description` para establecer la descripción de la sección.

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

### Archivo

Utilice el prop `headline` para establecer el título de la sección.

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

### Icon

Utilice el prop `icon` para configurar el icono de la sección.

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

### Features here

Utilice el prop `features` para mostrar una lista de [PageFeature](xph078) bajo la descripción como una matriz de objetos con las siguientes propiedades:

- xx`title?: string`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- x`description?: string`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

Puede pasar cualquier propiedad del componente [Link](/docs/components/link#props) como `to`, `target`, etc.

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

### Links (Edición española)

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

### Orientación

Utilice el prop `orientation` para cambiar la orientación con la ranura predeterminada.

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

### Reverse (Edición española)

Utilice el prop `reverse` para invertir la orientación de la ranura predeterminada.

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

## API (Versión)

### Props (accesorios)

:component-props

### Slots en línea

:component-slots

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
