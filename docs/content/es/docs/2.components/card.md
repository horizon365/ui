---
description: Mostrar el contenido en una tarjeta con un encabezado, cuerpo y pie de página.
category: element
keywords:
  - panel
  - box
  - container
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Card.vue
---

xph0000xUso

Utilice las ranuras `header`, `default` y `footer` para añadir contenido a la tarjeta.

::component-code
---
prettier: true
hide:
  - class
props:
  class: 'w-full'
slots:
  header: |

    <Placeholder class="h-8" />

  default: |

    <Placeholder class="h-32" />

  footer: |

    <Placeholder class="h-8" />
---

#header
:placeholder{class="h-8"}

#default
:placeholder{class="h-32"}

#footer
:placeholder{class="h-8"}
::

Archivo de la etiqueta: badge{label="4.7+" class="align-text-top"}

Utilice el prop `title` para establecer el título de la cabecera de la tarjeta.

::component-code
---
prettier: true
ignore:
  - class
props:
  title: 'Card with title'
  class: 'w-full'
slots:
  default: |

    <Placeholder class="h-32" />
---

#default
:placeholder{class="h-32"}
::

Descripción: badge{label="4.7+" class="align-text-top"}

Utilice el prop `description` para establecer la descripción del encabezado de la tarjeta.

::component-code
---
prettier: true
ignore:
  - title
  - class
props:
  title: 'Card with description'
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  class: 'w-full'
slots:
  default: |

    <Placeholder class="h-32" />
---

#default
:placeholder{class="h-32"}
::

### Variante

Utilice el prop `variant` para cambiar la variante de la tarjeta.

::component-code
---
prettier: true
hide:
  - class
props:
  variant: subtle
  class: 'w-full'
slots:
  header: |

    <Placeholder class="h-8" />

  default: |

    <Placeholder class="h-32" />

  footer: |

    <Placeholder class="h-8" />
---

#header
:placeholder{class="h-8"}

#default
:placeholder{class="h-32"}

#footer
:placeholder{class="h-8"}
::

## API (Edición española)

### Accesorios

:component-props

### Slots

:component-slots

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
