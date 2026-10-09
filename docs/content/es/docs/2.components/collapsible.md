---
description: Un elemento plegable para alternar la visibilidad de su contenido.
category: element
keywords:
  - disclosure
  - expand
links:
  - label: El Collapsible
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/collapsible
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Collapsible.vue
---

xph0000xUso

Utilice un [Button](/docs/components/button) o cualquier otro componente en la ranura predeterminada del Collapsible.

A continuación, utilice la ranura `#content` para añadir el contenido que se muestra cuando el Collapsible está abierto.

::component-code
---
prettier: true
ignore:
  - class
props:
  class: 'flex flex-col gap-2 w-48'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block />

  content: |

    <Placeholder class="h-48" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block}

#content
:placeholder{class="h-48"}
::

### Unmount (Edición española)

Utilice el prop `unmount-on-hide` para evitar que el contenido se desmonte cuando se colapsa el Collapsible.

::component-code
---
prettier: true
ignore:
  - class
props:
  unmountOnHide: false
  class: 'flex flex-col gap-2 w-48'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block />

  content: |

    <Placeholder class="h-48" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block}

#content
:placeholder{class="h-48"}
::

::note
Puede inspeccionar el DOM para ver el contenido que se representa.
::

### Desactivado

Utilice el accesorio `disabled` para desactivar el Colapsible.

::component-code
---
prettier: true
ignore:
  - class
props:
  class: 'flex flex-col gap-2 w-48'
  disabled: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block />

  content: |

    <Placeholder class="h-48" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block}

#content
:placeholder{class="h-48"}
::

## Ejemplos

### Control Estado abierto

Puede controlar el estado abierto usando la prop `default-open` o la directiva `v-model:open`.

::component-example
---
name: 'collapsible-open-example'
---
::

::note
En este ejemplo, aprovechando [`defineShortcuts`](/docs/composables/define-shortcuts), puede alternar el desplegable presionando: kbd{value="O"}.
::

::tip
Esto le permite mover el disparador fuera del Collapsible o eliminarlo por completo.
::

### Con icono giratorio

Aquí hay un ejemplo con un icono giratorio en el botón que indica el estado abierto del Collapsible.

::component-example
---
name: 'collapsible-icon-example'
---
::

## API (Edición española)

### Accesorios

:component-props

### Slots (Edición española)

:component-slots

### Emisiones

:component-emits

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
