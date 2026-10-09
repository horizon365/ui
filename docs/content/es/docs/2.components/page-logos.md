---
title: Pagelógos
description: 'Una lista de logotipos o imágenes para mostrar en sus páginas.'
category: page
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageLogos.vue
---

xph0000xUso

El componente PageLogos proporciona una forma flexible de mostrar una lista de logotipos o imágenes en sus páginas.

::component-code
---
collapse: true
prettier: true
hide:
  - class
ignore:
  - items
props:
  items:
    - i-simple-icons-github
    - i-simple-icons-discord
    - i-simple-icons-x
    - i-simple-icons-instagram
    - i-simple-icons-linkedin
    - i-simple-icons-facebook
  class: 'mb-10'
---
::

### Nombre

Utilice el prop `title` para establecer el título por encima de los logotipos.

::component-code
---
prettier: true
ignore:
  - items
hide:
  - class
props:
  title: 'Trusted by the best front-end teams'
  items:
    - i-simple-icons-github
    - i-simple-icons-discord
    - i-simple-icons-x
    - i-simple-icons-instagram
    - i-simple-icons-linkedin
    - i-simple-icons-facebook
  class: 'my-10'
---
::

### Artículos

Puede mostrar los logotipos de dos maneras:

1. Usando el prop `items` para proporcionar una lista de logotipos. Cada elemento puede ser:
  - Un nombre de icono (por ejemplo, `i-simple-icons-github`)
  - Un objeto que contiene las propiedades `src` y `alt` para imágenes, que se utilizará en un componente `UAvatar`
2. Usar la ranura predeterminada para tener un control completo sobre el contenido

::tabs{class="gap-0"}

::component-example{label="con items"}
---
name: 'page-logos-with-items'
class: '[&>div]:my-10'
---
::

::component-example{label="con ranura"}
---
name: 'page-logos-with-slot'
class: '[&>div]:my-10'
---
::

::

### Marquee (Edición española)

Utilice el soporte `marquee` para habilitar un efecto de marquesina para los logotipos.

::component-code
---
prettier: true
ignore:
  - items
  - marquee
hide:
  - class
props:
  title: 'Trusted by the best front-end teams'
  marquee: true
  items:
    - i-simple-icons-github
    - i-simple-icons-discord
    - i-simple-icons-x
    - i-simple-icons-instagram
    - i-simple-icons-linkedin
    - i-simple-icons-facebook
  class: 'my-10'
---
::

::note{to="/docs/components/marquee"}
Cuando utiliza el modo `marquee`, puede personalizar su comportamiento pasando props. Para obtener más información, consulte el componente `Marquee`.
::

Xph080xAPI (Edición española)

### Accesorios

:component-props

### Slots (Edición española)

:component-slots

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
