---
description: Una ventana emergente que revela información al pasar el cursor sobre un elemento.
category: overlay
keywords:
  - hint
links:
  - label: ToolTip
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tooltip
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Tooltip.vue
---

xph0000xUso

Utilice un [Button](/docs/components/button) o cualquier otro componente en la ranura predeterminada de la información sobre herramientas.

::component-code
---
prettier: true
ignore:
  - text
props:
  text: 'Open on GitHub'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle"}
::

::warning
Asegúrese de envolver su aplicación con el componente [`App`](/docs/components/app) que utiliza el componente [`TooltipProvider`](https://reka-ui.com/docs/components/tooltip#provider) de Reka UI.
::

::tip{to="/docs/components/app#props"}
Puede consultar el componente `App` prop `tooltip` para ver cómo configurar la información sobre herramientas a nivel mundial.
::

### Text (Edición española)

Utilice el prop `text` para establecer el contenido de la información sobre herramientas.

::component-code
---
prettier: true
props:
  text: 'Open on GitHub'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle"}
::

### kbds (Edición española)

Utilice el prop `kbds` para representar los componentes [Kbd](/docs/components/kbd) en la información sobre herramientas.

::component-code
---
prettier: true
ignore:
  - text
  - kbds
props:
  text: 'Open on GitHub'
  kbds:
    - meta
    - G
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle"}
::

::tip
Puedes usar teclas especiales como `meta` que se muestra como `⌘` en macOS y `Ctrl` en otras plataformas.
::

### Delay (Edición española)

Utilice el prop `delay-duration` para cambiar el retardo antes de que aparezca la información sobre herramientas. Por ejemplo, puede hacer que aparezca instantáneamente configurándolo en `0`.

::component-code
---
prettier: true
ignore:
  - text
props:
  delayDuration: 0
  text: 'Open on GitHub'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle"}
::

::tip
Esto se puede configurar globalmente a través de la opción `tooltip.delayDuration` en el componente [`App`](/docs/components/app).
::

### Contenido

Utilice el prop `content` para controlar cómo se representa el contenido de la información de herramientas, como su `align` o `side`, por ejemplo.

::tip
Esto se puede configurar globalmente a través de la opción `tooltip.content` en el componente [`App`](/docs/components/app).
::

::component-code
---
prettier: true
ignore:
  - text
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
  text: 'Open on GitHub'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle"}
::

### Flecha

Utilice el accesorio `arrow` para mostrar una flecha en la información sobre herramientas.

::component-code
---
prettier: true
ignore:
  - text
  - arrow
props:
  arrow: true
  text: 'Open on GitHub'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle"}
::

### Desactivado

Utilice el prop `disabled` para desactivar la información sobre herramientas.

::component-code
---
prettier: true
ignore:
  - text
props:
  disabled: true
  text: 'Open on GitHub'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle"}
::

##  Ejemplos

### Control estado abierto

Puede controlar el estado abierto usando la prop `default-open` o la directiva `v-model:open`.

::component-example
---
name: 'tooltip-open-example'
---
::

::note
En este ejemplo, aprovechando [`defineShortcuts`](/docs/composables/define-shortcuts), puede alternar la información sobre herramientas presionando: kbd{value="O"}.
::

### Con el cursor siguiente

Puede hacer que la información sobre herramientas siga el cursor al pasar el cursor sobre un elemento utilizando la prop [`reference`](https://reka-ui.com/docs/components/tooltip#trigger):

::component-example
---
name: 'tooltip-cursor-example'
---
::

## API

### Props (accesorios)

:component-props

### Slots (Edición española)

:component-slots

### Emisiones

:component-emits

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
