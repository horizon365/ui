---
description: Una ventana de diálogo que se puede utilizar para mostrar un mensaje o solicitar la entrada del usuario.
category: overlay
keywords:
  - dialog
  - popup
  - confirm
  - alert dialog
links:
  - label: El diálogo
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/dialog
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Modal.vue
---

xph0000xUso

Utilice un [Button](/docs/components/button) o cualquier otro componente en la ranura predeterminada del Modal.

A continuación, utilice la ranura `#content` para añadir el contenido que se muestra cuando el Modal está abierto.

::component-code
---
prettier: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle"}

#content
:placeholder{class="h-48 m-4"}
::

También puede utilizar las ranuras `#header`{lang="ts-type"}, `#body`{lang="ts-type"} y `#footer`{lang="ts-type"} para personalizar el contenido del Modal.

### Nombre

Utilice el prop `title` para establecer el título de la cabecera del Modal.

::component-code
---
prettier: true
props:
  title: 'Modal with title'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### Descripción

Utilice el prop `description` para establecer la descripción de la cabecera del Modal.

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Modal with description'
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### Cerrar

Utilice el prop `close` para personalizar u ocultar el botón de cierre (con el valor `false`) que se muestra en el encabezado de la Modal.

Puede pasar cualquier propiedad del componente [Button](/docs/components/button) para personalizarlo.

::component-code
---
prettier: true
ignore:
  - title
  - close.color
  - close.variant
props:
  title: 'Modal with close button'
  close:
    color: primary
    variant: outline
    class: 'rounded-full'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

::tip
El botón de cierre no se muestra si se usa la ranura `#content`, ya que es parte del encabezado.
::

### Cerrar Icono

Utilice el prop `close-icon` para personalizar el botón de cierre [Icon](/docs/components/icon).

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Modal with close button'
  closeIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono globalmente en su `app.config.ts` bajo la tecla `ui.icons.close`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su Xph115x bajo la tecla Xph116x.
:::
::

### Transición

Utilice el prop `transition` para controlar si el Modal está animado o no. Por defecto `true`.

::component-code
---
prettier: true
ignore:
  - title
props:
  transition: false
  title: 'Modal without transition'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### Superpuesto

Utilice el prop `overlay` para controlar si el Modal tiene una superposición o no. Por defecto `true`.

::component-code
---
prettier: true
ignore:
  - title
props:
  overlay: false
  title: 'Modal without overlay'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### Modalidad

Utilice el prop `modal` para controlar si el Modal bloquea la interacción con el contenido externo.

::note
Cuando `modal` se establece en `false`, la superposición se deshabilita automáticamente y el contenido externo se vuelve interactivo.
::

::component-code
---
prettier: true
ignore:
  - title
props:
  modal: false
  title: 'Modal interactive'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### Dismissible

Utilice el prop `dismissible` para controlar si el Modal es descartable al hacer clic fuera de él o al presionar escape.

::note
Se emitirá un evento `close:prevent` cuando el usuario intente cerrarlo.
::

::tip
Puede combinar `modal: false` con `dismissible: false` para hacer que el fondo del Modal sea interactivo sin cerrarlo.
::

::component-code
---
prettier: true
ignore:
  - title
props:
  dismissible: false
  modal: true
  title: 'Modal non-dismissible'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### Scrollable: badge{label="4.2+" class="align-text-top"} (en inglés)

Utilice el accesorio `scrollable` para hacer que el contenido de la Modal se pueda desplazar dentro de la superposición.

::warning
Como la superposición es necesaria para el desplazamiento, `modal: false` no es compatible y `overlay: false` sólo elimina el fondo.
::

::component-code
---
prettier: true
ignore:
  - title
props:
  scrollable: true
  overlay: true
  title: 'Modal scrollable'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle"}

#body
:placeholder{class="h-screen"}
::

::caution
Hay un problema [known e](https://reka-ui.com/docs/components/dialog#scrollable-overlay) en el que hacer clic en la barra de desplazamiento puede cerrar involuntariamente el diálogo en algunos sistemas operativos.
::

### Pantalla completa

Utilice el accesorio `fullscreen` para hacer que el Modal sea pantalla completa.

::component-code
---
prettier: true
ignore:
  - title
  - fullscreen
props:
  fullscreen: true
  title: 'Modal fullscreen'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

### Unmount: badge{label="4.10+" class="align-text-top"}

Utilice el prop `unmount-on-hide` para evitar que el contenido de la Modal se desmonte cuando está cerrada.

::component-code
---
prettier: true
ignore:
  - title
props:
  unmountOnHide: false
  title: 'Modal'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

::note
Puede inspeccionar el DOM para ver el contenido del Modal que se está renderizando incluso mientras está cerrado.
::

::tip
Cuando el prop `portal` se establece en `false`, el contenido también se representa en el servidor. Esto es útil para representar un Modal abierto durante SSR sin un flash en la carga de la página, o para exponer su contenido para SEO.
::

##  Ejemplos

### Control estado abierto

Puede controlar el estado abierto utilizando la prop `default-open` o la directiva `v-model:open`.

::component-example
---
name: 'modal-open-example'
---
::

::note
En este ejemplo, aprovechando [`defineShortcuts`](/docs/composables/define-shortcuts), puede alternar el Modal presionando: kbd{value="O"}.
::

::tip
Esto le permite mover el disparador fuera del modal o eliminarlo por completo.
::

### Uso programático

Puede usar el composable [`useOverlay`](/docs/composables/use-overlay) para abrir un Modal programáticamente.

::warning
Asegúrese de envolver su aplicación con el componente [`App`](/docs/components/app) que utiliza el componente [`OverlayProvider`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/OverlayProvider.vue).
::

En primer lugar, crear un componente modal que se abrirá por programación:

::component-example
---
prettier: true
name: 'modal-example'
preview: false
---
::

::note
Estamos emitiendo un evento `close` cuando el modal está cerrado o despedido aquí. Puede emitir cualquier dato a través del evento `close`, y esos datos se convierten en el valor resuelto de `open()`.
::

A continuación, utilízalo en tu app:

::component-example
---
name: 'modal-programmatic-example'
---
::

::tip
Se puede cerrar el modal dentro del componente modal emitiendo `emit('close')`.
::

### Modalidades anidadas

Puedes anidar modales entre sí.

::component-example
---
name: 'modal-nested-example'
---
::

### Con ranura de pie

Utilice la ranura `#footer` para añadir contenido después del cuerpo del Modal.

::component-example
---
name: 'modal-footer-slot-example'
---
::

### With paleta de comandos

Puede utilizar un componente [CommandPalette](/docs/components/command-palette) dentro del contenido del Modal.

::component-example
---
collapse: true
name: 'modal-command-palette-example'
---
::

::note
Este ejemplo usa `useLazyFetch` con `immediate: false` para obtener datos solo cuando se abre el Modal.
::

## API (Edición española)

### Props

:component-props

### Slots en línea

:component-slots

### Emisiones

:component-emits

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
