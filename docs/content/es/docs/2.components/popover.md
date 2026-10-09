---
description: Un diálogo no modal que flota alrededor de un elemento trigger.
category: overlay
keywords:
  - hover card
  - flyout
links:
  - label: La HoverCard
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/hover-card
  - label: popover
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/popover
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Popover.vue
---

xph0000xUso

Utilice un [Button](/docs/components/button) o cualquier otro componente en la ranura predeterminada del Popover.

A continuación, utilice la ranura `#content` para añadir el contenido que se muestra cuando el Popover está abierto.

::component-code
---
prettier: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="size-48 m-4 inline-flex" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

### Modo

Utilice el prop `mode` para cambiar el modo del Popover. Defaults a `click`.

::tip
En el modo `hover`, configure el accesorio `enable-touch` para permitir a los usuarios alternar el Popover tocando el disparador en dispositivos táctiles, o use el modo `click` para los disparadores destinados a ser tocados.
::

::component-code
---
prettier: true
items:
  mode:
    - click
    - hover
props:
  mode: 'hover'
  enableTouch: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="size-48 m-4 inline-flex" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

::note
Cuando se utiliza el modo `hover`, se utiliza el componente Reka UI [`HoverCard`](https://reka-ui.com/docs/components/hover-card) en lugar del componente [`Popover`](https://reka-ui.com/docs/components/popover).
::

### Delay (Edición española)

Al utilizar el modo `hover`, puede utilizar los accesorios `open-delay` y `close-delay` para controlar el retardo antes de que se abra o cierre el Popover.

::component-code
---
prettier: true
ignore:
  - mode
props:
  mode: 'hover'
  openDelay: 500
  closeDelay: 300
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="size-48 m-4 inline-flex" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

### Contenido

Utilice el prop `content` para controlar cómo se representa el contenido de Popover, como su `align` o `side`, por ejemplo.

::component-code
---
prettier: true
items:
  content.align:
    - start
    - center
    - end
  content.side:
    - right
    - left
    - top
    - bottom
props:
  content:
    align: center
    side: bottom
    sideOffset: 8
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="size-48 m-4 inline-flex" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

### Flecha

Utilice el soporte `arrow` para mostrar una flecha en el Popover.

::component-code
---
prettier: true
ignore:
  - arrow
props:
  arrow: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="size-48 m-4 inline-flex" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

### Modal

Utilice el prop `modal` para controlar si el Popover bloquea la interacción con el contenido externo.

::component-code
---
prettier: true
ignore:
  - title
props:
  modal: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="size-48 m-4 inline-flex" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

### Dismissible

Utilice el prop `dismissible` para controlar si el Popover es descartable al hacer clic fuera de él o presionar escape.

::note
Se emitirá un evento `close:prevent` cuando el usuario intente cerrarlo.
::

::component-example
---
name: 'popover-dismissible-example'
---
::

## Examples

### Control estado abierto

Puede controlar el estado abierto usando la prop `default-open` o la directiva `v-model:open`.

::component-example
---
name: 'popover-open-example'
---
::

::note
En este ejemplo, aprovechando [`defineShortcuts`](/docs/composables/define-shortcuts), puede alternar el Popover presionando: kbd{value="O"}.
::

### Con paleta de comandos

Puede utilizar un componente [CommandPalette](/docs/components/command-palette) dentro del contenido del Popover.

::component-example
---
collapse: true
name: 'popover-command-palette-example'
---
::

### Con el cursor siguiente

Puede hacer que el Popover siga el cursor al pasar el cursor sobre un elemento usando la prop [`reference`](https://reka-ui.com/docs/components/tooltip#trigger):

::component-example
---
name: 'popover-cursor-example'
---
::

### Con ranura de anclaje

You can use the `#anchor` slot to position the Popover against a custom element.

::warning
Esta ranura solo funciona cuando `mode` es `click`.
::

::component-example
---
collapse: true
name: 'popover-anchor-slot-example'
---
::

Xph190xAPI (Edición española)

### Props

:component-props

### Slots

:component-slots

::note
La función `close` sólo está disponible cuando `mode` está configurado en `click` porque Reka UI expone esto para [`Popover`](https://reka-ui.com/docs/components/popover#close-using-slot-props) pero no para [`HoverCard`](https://reka-ui.com/docs/components/hover-card).
::

### Emisiones

:component-emits

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
