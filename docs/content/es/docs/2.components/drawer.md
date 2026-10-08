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

@@pH000@@Uso del producto

Utilice un [Button](/docs/components/button) o cualquier otro componente en la ranura predeterminada del cajón.

A continuación, utilice la ranura `#content` para añadir el contenido que se muestra cuando el cajón está abierto.

::component-code
---
Categoría: true
Los slots:
  Default:|

    @@ 006 @

  Contenido:|

    @@@ 007 @
---

El botón {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#Contenido
por: placeholder{class="h-48 m-4"}
::

También puede utilizar las ranuras `#header`{lang="ts-type"},`#body`{lang="ts-type"} y `#footer`{lang="ts-type"} para personalizar el contenido del cajón.

@16@Título

Utilice el prop `title` para establecer el título de la cabecera del cajón.

::component-code
---
Categoría: true
Props:
  Título:"Cuchillo con título"
Los slots:
  Default:|

    @@@ 18 @

  cuerpo:|

    @@@ 19 @
---

Botón {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#Cuerpo
por placeholder{class="h-48"}
::

@@222@Descripción

Utilice el prop `description` para establecer la descripción de la cabecera del cajón.

::component-code
---
Categoría: true
Ignora:
  @24@title
Props:
  Título:"Dibujo con descripción"
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit".
Los slots:
  Default:|

    @@ 25

  cuerpo:|

    @@ 26 @
---

por: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#Cuerpo
por placeholder{class="h-48"}
::

### Cerrar: badge{label="4.10+" class="align-text-top"}

Utilice el prop `close` para mostrar un botón de cierre en el cajón. Predeterminados a `false`.

Puede pasar cualquier propiedad del componente [Button](/docs/components/button) para personalizarlo.

::component-code
---
Categoría: true
Ignora:
  @@37@título
  - close.color (en inglés)
  - close.variante
Props:
  Título:"Botón de cierre"
  Cerrado:
    Color: Primario
    Categoría: Outline
    Categoría:"Round-full"
Los slots:
  Default:|

    @@ 40 @

  cuerpo:|

    @@@ 41 @
---

Botón {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#Cuerpo
por placeholder{class="h-48"}
::

### Cerrar Icono: badge{label="4.10+" class="align-text-top"}

Utilice el prop `close-icon` para personalizar el botón de cierre [Icon](/docs/components/icon).

::component-code
---
Categoría: true
Ignora:
  @@52@título
Props:
  Título:"Botón de cierre"
  Siguiente: True
  Icono: 'i-lucide-arrow-right'
Los slots:
  Default:|

    @@@ 53 @

  cuerpo:|

    @@@ 54 @
---

by: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#Cuerpo
by placeholder{class="h-48"}
::

@057@@The Director

Utilice el prop `direction` para controlar la dirección del cajón. Predeterminados a `bottom`.

::component-code
---
Categoría: true
Props:
  The answer: "Right"
Los slots:
  Default:|

    @@@ 060 @

  Contenido:|

    by <Placeholder class="min-w-96 min-h-96 size-full m-4" />
---

El botón {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#of content
por: placeholder{class="min-w-96 min-h-96 size-full m-4"}
::

@064@@Indeed

Utilice el prop `inset` para insertar el cajón desde los bordes.

::component-code
---
Categoría: true
Props:
  Dirección:"Derecha"
  Inserción: True
Los slots:
  Default:|

    @@@ 66 @

  Contenido:|

    @@pf067 @
---

El botón {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#of content
por @ph069
::

@070000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `handle` para controlar si el cajón tiene un mango o no. Por defecto a `true`.

::component-code
---
Categoría: true
Props:
  Manejo: Falso
Los slots:
  Default:|

    @@pf073 @

  Contenido:|

    @@pf074 @
---

Botón {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#Contenido
por @ph076
::

### Sólo se maneja

Utilice el prop `handle-only` para permitir que el cajón sea arrastrado por el mango.

::component-code
---
Categoría: true
Props:
  Vía: true
Los slots:
  Default:|

    @@pf079 @

  Contenido:|

    @@ 080 @
---

Botón {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#of content
por @ph082
::

@083@@espanol

Utilice el prop `overlay` para controlar si el cajón tiene una superposición o no. Por defecto a `true`.

::component-code
---
Categoría: true
Props:
  Reseña: False
Los slots:
  Default:|

    @@@ 086 @

  Contenido:|

    @@pf087 @
---

Botón {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#Contenido
por @ph089
::

@@P2000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `modal` para controlar si el cajón bloquea la interacción con el contenido externo.

::note
Cuando `modal` se establece en `false`, la superposición se deshabilita automáticamente y el contenido externo se vuelve interactivo.
::

::component-code
---
Categoría: true
Props:
  Modalidad: Falso
Los slots:
  Default:|

    @@@ 095

  Contenido:|

    @@pf096 @
---

El botón {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#Contenido
por @ph098
::

@099@@descalificación

Utilice el prop `dismissible` para controlar si el cajón es descartable al hacer clic fuera de él o al presionar escape.

::note
Se emitirá un evento `close:prevent` cuando el usuario intente cerrarlo.
::

::tip
Puede combinar `modal: false` con `dismissible: false` para hacer que el fondo del cajón sea interactivo sin cerrarlo.
::

::component-example
---
Categoría: true
Nombre: 'desconocido-ejemplo'
---
::

### Escala de fondo

Utilice el prop `should-scale-background` para escalar el fondo cuando el cajón está abierto, creando un efecto de profundidad visual. Puede configurar el prop `set-background-color-on-scale` en `false` para evitar cambiar el color de fondo.

::component-code
---
Categoría: true
Props:
  shouldScaleBackground: verdad
  setBackgroundColorOnScale: verdad
Los slots:
  Default:|

    @@pH109 @

  Contenido:|

    @@ 110 @
---

Botón {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#of content
por @ph112 @
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

### Estado abierto de control

Puede controlar el estado abierto utilizando la directiva `default-open` o la directiva `v-model:open`.

::component-example
---
Categoría: true
Nombre: 'drawer-open-example'
---
::

::note
En este ejemplo, aprovechando [`defineShortcuts`](/docs/composables/define-shortcuts), puede alternar el cajón presionando: kbd{value="O"}.
::

::tip
Esto le permite mover el gatillo fuera del cajón o eliminarlo por completo.
::

### Caja de respuesta

Puede renderizar un componente [Modal](/docs/components/modal) en el escritorio y un cajón en el móvil, por ejemplo.

::component-example
---
Categoría: true
Nombre: 'drawer-responsive-example'
---
::

### Anidado de cajones

Puede anidar cajones uno dentro del otro utilizando el prop.`nested`.

::component-example
---
Categoría: true
Nombre: 'drawer-nided-example'
---
::

### Con ranura de pie de página

Utilice la ranura `#footer` para añadir contenido después del cuerpo del cajón.

::component-example
---
Categoría: true
Colapso: Verdad
Nombre: 'drawer-footer-slot-example'
---
::

### Con paleta de comandos

Puede utilizar un componente [CommandPalette](/docs/components/command-palette) dentro del contenido del cajón.

::component-example
---
Colapso: Verdad
Nombre: 'drawer-command-palette-example'
---
::

::note
En este ejemplo se utiliza `useLazyFetch` con `immediate: false` para obtener datos sólo cuando se abre el cajón.
::

@161

@162@2016

Componentes Props

@@163@163@163

Componentes de slots

@164@1644

Componentes Emisiones

@165 @@ Proyecto

Componente Tema

by ## Changelog

Categoría: component-changelog
