---
description: Un diálogo que se desliza desde cualquier lado de la pantalla.
category: overlay
keywords:
  - sheet
  - side panel
  - off-canvas
links:
  - label: El diálogo
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/dialog
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Slideover.vue
---

xph0000xUso

Use a [Button](/docs/components/button) or any other component in the default slot of the Slideover.

A continuación, utilice la ranura `#content` para añadir el contenido que se muestra cuando la diapositiva está abierta.

::component-code
---
prettier: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="h-full m-4" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle"}

#content
:placeholder{class="h-full m-4"}
::

También puede utilizar las ranuras `#header`{lang="ts-type"}, `#body`{lang="ts-type"} y `#footer`{lang="ts-type"} para personalizar el contenido de la diapositiva.

### Nombre

Utilice el prop `title` para establecer el título de la cabecera de la diapositiva.

::component-code
---
prettier: true
props:
  title: 'Slideover with title'
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

### Descripción

Utilice el prop `description` para establecer la descripción del encabezado de la diapositiva.

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Slideover with description'
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
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

### Close

Utilice el prop `close` para personalizar u ocultar el botón de cierre (con el valor `false`) que se muestra en el encabezado de la diapositiva.

Puede pasar cualquier propiedad del componente [Button](/docs/components/button) para personalizarlo.

::component-code
---
prettier: true
ignore:
  - title
  - close.color
  - close.variant
props:
  title: 'Slideover with close button'
  close:
    color: primary
    variant: outline
    class: 'rounded-full'
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

::note
El botón de cierre no se muestra si se usa la ranura `#content`, ya que es parte del encabezado.
::

### Cerrar Icono

Use the `close-icon` prop to customize the close button [Icon](/docs/components/icon).

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Slideover with close button'
  closeIcon: 'i-lucide-arrow-right'
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

### Side (Edición)

Utilice el prop `side` para establecer el lado de la pantalla donde se deslizará la diapositiva de. Defaults a `right`.

::component-code
---
prettier: true
ignore:
  - title
props:
  side: 'left'
  title: 'Slideover with side'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full min-h-48" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full min-h-48"}
::

Archivo de la etiqueta: badge{label="4.3+" class="align-text-top"}

Utilice el soporte `inset` para insertar el Slideover desde los bordes.

::component-code
---
prettier: true
ignore:
  - title
props:
  side: 'right'
  inset: true
  title: 'Slideover with inset'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="min-w-96 min-h-96 size-full" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle"}

#body
:placeholder{class="min-w-96 min-h-96 size-full"}
::

### Transición

Utilice el prop `transition` para controlar si la diapositiva está animada o no. Por defecto `true`.

::component-code
---
prettier: true
ignore:
  - title
props:
  transition: false
  title: 'Slideover without transition'
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

### Superpuesto

Utilice el prop `overlay` para controlar si el Slideover tiene una superposición o no. Por defecto `true`.

::component-code
---
prettier: true
ignore:
  - title
props:
  overlay: false
  title: 'Slideover without overlay'
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

### Modalidad

Utilice el prop `modal` para controlar si el Slideover bloquea la interacción con el contenido externo.

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
  title: 'Slideover interactive'
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

### Desistible

Utilice el prop `dismissible` para controlar si el Slideover es descartable al hacer clic fuera de él o al presionar escape.

::note
Se emitirá un evento `close:prevent` cuando el usuario intente cerrarlo.
::

::tip
Puede combinar `modal: false` con `dismissible: false` para hacer que el fondo de la diapositiva sea interactivo sin cerrarlo.
::

::component-code
---
prettier: true
ignore:
  - title
props:
  dismissible: false
  modal: true
  title: 'Slideover non-dismissible'
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

### Desmontar: badge{label="4.10+" class="align-text-top"}

Utilice el prop `unmount-on-hide` para evitar que el contenido de la diapositiva se desmonte cuando se cierra.

::component-code
---
prettier: true
ignore:
  - title
props:
  unmountOnHide: false
  title: 'Slideover'
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

::note
Puede inspeccionar el DOM para ver el contenido del Slideover que se está renderizando incluso mientras está cerrado.
::

::tip
Cuando el prop `portal` se establece en `false`, el contenido también se representa en el servidor. Esto es útil para representar una presentación de diapositivas abierta durante SSR sin un flash en la carga de la página, o para exponer su contenido para SEO.
::

## Ejemplos

### Control estado abierto

Puede controlar el estado abierto usando la prop `default-open` o la directiva `v-model:open`.

::component-example
---
name: 'slideover-open-example'
---
::

::note
En este ejemplo, aprovechando [`defineShortcuts`](/docs/composables/define-shortcuts), puede alternar la diapositiva presionando: kbd{value="O"}.
::

::tip
Esto le permite mover el disparador fuera del Slideover o eliminarlo por completo.
::

### Uso programado

Puede usar el composable [`useOverlay`](/docs/composables/use-overlay) para abrir una diapositiva de forma programática.

::warning
Asegúrese de envolver su aplicación con el componente [`App`](/docs/components/app) que utiliza el componente [`OverlayProvider`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/OverlayProvider.vue).
::

En primer lugar, cree un componente de diapositiva que se abrirá mediante programación:

::component-example
---
prettier: true
name: 'slideover-example'
preview: false
---
::

::note
Estamos emitiendo un evento `close` cuando la diapositiva se cierra o se descarta aquí. Puede emitir cualquier dato a través del evento `close`, y esos datos se convierten en el valor resuelto de `open()`.
::

A continuación, utilízalo en tu app:

::component-example
---
name: 'slideover-programmatic-example'
---
::

::tip
Puede cerrar la diapositiva dentro del componente de diapositiva emitiendo `emit('close')`.
::

### Anidados deslizamientos

Pueden anidar deslizamientos entre sí.

::component-example
---
name: 'slideover-nested-example'
---
::

### Con ranura de pie

Utilice la ranura `#footer` para añadir contenido después del cuerpo de la diapositiva.

::component-example
---
name: 'slideover-footer-slot-example'
---
::

## API (Edición española)

### Props

:component-props

### Slots

:component-slots

### Emisiones

:component-emits

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
