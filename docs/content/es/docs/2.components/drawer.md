---
description: Un cajón que se desliza suavemente dentro y fuera de la pantalla.
category: overlay
keywords:
  - bottom sheet
  - action sheet
  - mobile sheet
links:
  - label: Dibujo
    icon: i-custom-reka-ui
    to: https://github.com/unovue/vaul-vue
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Drawer.vue
---

xph0000xUso

Utilice un [Button](/docs/components/button) o cualquier otro componente en la ranura predeterminada del cajón.

A continuación, utilice la ranura `#content` para añadir el contenido que se muestra cuando el cajón está abierto.

::component-code
---
prettier: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

También puede utilizar las ranuras `#header`{lang="ts-type"}, `#body`{lang="ts-type"} y `#footer`{lang="ts-type"} para personalizar el contenido del cajón.

### Nombre

Utilice el prop `title` para establecer el título de la cabecera del cajón.

::component-code
---
prettier: true
props:
  title: 'Drawer with title'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#body
:placeholder{class="h-48"}
::

### Descripción

Utilice el prop `description` para establecer la descripción de la cabecera del cajón.

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Drawer with description'
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#body
:placeholder{class="h-48"}
::

### Cerrar: badge{label="4.10+" class="align-text-top"}

Utilice el soporte `close` para mostrar un botón de cierre en el cajón.

Puede pasar cualquier propiedad del componente [Button](/docs/components/button) para personalizarlo.

::component-code
---
prettier: true
ignore:
  - title
  - close.color
  - close.variant
props:
  title: 'Drawer with close button'
  close:
    color: primary
    variant: outline
    class: 'rounded-full'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#body
:placeholder{class="h-48"}
::

### Cerrar icono: badge{label="4.10+" class="align-text-top"}

Utilice el prop `close-icon` para personalizar el botón de cierre [Icon](/docs/components/icon).

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Drawer with close button'
  close: true
  closeIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#body
:placeholder{class="h-48"}
::

### Dirección

Utilice el prop `direction` para controlar la dirección del cajón.

::component-code
---
prettier: true
props:
  direction: 'right'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="min-w-96 min-h-96 size-full m-4" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="min-w-96 min-h-96 size-full m-4"}
::

### Inset (Edición española)

Utilice el accesorio `inset` para insertar el cajón desde los bordes.

::component-code
---
prettier: true
props:
  direction: 'right'
  inset: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="min-w-96 min-h-96 size-full m-4" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="min-w-96 min-h-96 size-full m-4"}
::

### Handle (Edición española)

Utilice el accesorio `handle` para controlar si el cajón tiene un mango o no. Por defecto `true`.

::component-code
---
prettier: true
props:
  handle: false
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

### Handle sólo

Utilice el accesorio `handle-only` para permitir que el cajón sea arrastrado por el mango.

::component-code
---
prettier: true
props:
  handleOnly: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

### Superpuesto

Utilice el prop `overlay` para controlar si el cajón tiene una superposición o no. Por defecto `true`.

::component-code
---
prettier: true
props:
  overlay: false
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

### Modal (Edición española)

Utilice el prop `modal` para controlar si el cajón bloquea la interacción con el contenido externo.

::note
Cuando `modal` se establece en `false`, la superposición se deshabilita automáticamente y el contenido externo se vuelve interactivo.
::

::component-code
---
prettier: true
props:
  modal: false
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

### Dismissible

Utilice el accesorio `dismissible` para controlar si el cajón es descartable al hacer clic fuera de él o al presionar escape.

::note
Se emitirá un evento `close:prevent` cuando el usuario intente cerrarlo.
::

::tip
Puede combinar `modal: false` con `dismissible: false` para hacer que el fondo del cajón sea interactivo sin cerrarlo.
::

::component-example
---
prettier: true
name: 'drawer-dismissible-example'
---
::

### Scale en segundo plano

Utilice el accesorio `should-scale-background` para escalar el fondo cuando el cajón está abierto, creando un efecto de profundidad visual. Puede configurar el accesorio `set-background-color-on-scale` en `false` para evitar cambiar el color de fondo.

::component-code
---
prettier: true
props:
  shouldScaleBackground: true
  setBackgroundColorOnScale: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="Abiertos" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-screen m-4"}
::

::warning
Asegúrate de agregar la directiva `data-vaul-drawer-wrapper` a un elemento padre de tu aplicación para que esto funcione.

```vue [app.vue]
<template>
  <UApp>
    <div class="bg-default" data-vaul-drawer-wrapper>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </UApp>
</template>
```

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  app: {
    rootAttrs: {
      'data-vaul-drawer-wrapper': '',
      'class': 'bg-default'
    }
  }
})
```

::

## Ejemplos

### Control en estado abierto

Puede controlar el estado abierto utilizando la prop `default-open` o la directiva `v-model:open`.

::component-example
---
prettier: true
name: 'drawer-open-example'
---
::

::note
En este ejemplo, aprovechando [`defineShortcuts`](/docs/composables/define-shortcuts), puede alternar el cajón presionando: kbd{value="O"}.
::

::tip
Esto le permite mover el gatillo fuera del cajón o eliminarlo por completo.
::

### Cajón responsivo

Por ejemplo, puede renderizar un componente [Modal](/docs/components/modal) en el escritorio y un cajón en el móvil.

::component-example
---
prettier: true
name: 'drawer-responsive-example'
---
::

### Cajas anidadas

Puede anidar cajones uno dentro del otro utilizando el accesorio `nested`.

::component-example
---
prettier: true
name: 'drawer-nested-example'
---
::

### Con ranura de pie de página

Utilice la ranura `#footer` para añadir contenido después del cuerpo del cajón.

::component-example
---
prettier: true
collapse: true
name: 'drawer-footer-slot-example'
---
::

### With paleta de comandos

Puede utilizar un componente [CommandPalette](/docs/components/command-palette) dentro del contenido del cajón.

::component-example
---
collapse: true
name: 'drawer-command-palette-example'
---
::

::note
Este ejemplo utiliza `useLazyFetch` con `immediate: false` para obtener datos sólo cuando se abre el cajón.
::

## API (Edición española)

### Props

:component-props

### Slots en línea

:component-slots

### Emisiones

:component-emits

## Theme (Edición española)

:component-theme

## Changelog (Edición española)

:component-changelog
