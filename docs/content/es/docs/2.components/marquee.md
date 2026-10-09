---
description: 'Un componente para crear contenido de desplazamiento infinito.'
category: data
keywords:
  - ticker
  - scroller
  - carousel
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Marquee.vue
---

xph0000xUso

Utilice la ranura predeterminada con su contenido para crear una animación de desplazamiento infinito.

::component-code
---
prettier: true
slots:
  default: |

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
---
:u-icon{name="i-simple-icons-github" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-discord" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-x" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-instagram" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-linkedin" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

::tip
La animación se deshabilita automáticamente cuando el usuario prefiere el movimiento reducido, el contenido se muestra de forma estática en su lugar.
::

### Pause en el Hover

Utilice el prop `pause-on-hover` para pausar la animación cuando el usuario pasa el cursor sobre el contenido.

::component-code
---
prettier: true
props:
  pauseOnHover: true
slots:
  default: |

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
---
:u-icon{name="i-simple-icons-github" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-discord" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-x" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-instagram" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-linkedin" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

### Reverso (Edición española)

Utilice el prop `reverse` para invertir la dirección de la animación.

::component-code
---
prettier: true
props:
  reverse: true
slots:
  default: |

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
---
:u-icon{name="i-simple-icons-github" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-discord" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-x" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-instagram" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-linkedin" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

### Orientación

Utilice el prop `orientation` para cambiar la dirección de desplazamiento.

::component-code
---
prettier: true
class: 'h-96'
props:
  orientation: 'vertical'
slots:
  default: |

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
---
:u-icon{name="i-simple-icons-github" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-discord" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-x" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-instagram" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-linkedin" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

### Repetición

Utilice el prop `repeat` para especificar cuántas veces se debe repetir el contenido en la animación.

::component-code
---
prettier: true
props:
  repeat: 6
slots:
  default: |

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
---
:u-icon{name="i-simple-icons-github" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-discord" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-x" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-instagram" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-linkedin" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

### Superpuesto

Utilice el soporte `overlay` para eliminar las superposiciones de gradiente en los bordes de la marquesina.

::component-code
---
prettier: true
props:
  overlay: false
slots:
  default: |

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
---
:u-icon{name="i-simple-icons-github" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-discord" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-x" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-instagram" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-linkedin" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

## Ejemplos

### Testimonios

Utilice el componente `Marquee` para crear una animación de desplazamiento infinito para sus testimonios.

::component-example{label="con items"}
---
prettier: true
name: 'marquee-testimonials'
collapse: true
overflowHidden: true
class: 'px-0'
---
::

### Imágenes

Utilice el componente `Marquee` para crear una animación de desplazamiento infinito para sus capturas de pantalla.

::component-example{label="con screenshots"}
---
prettier: true
name: 'marquee-screenshots'
collapse: true
overflowHidden: true
class: '!p-0'
---
::

## API (Edición española)

### Props (accesorios)

:component-props

### Slots

:component-slots

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
