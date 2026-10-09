---
description: Un mensaje breve para proporcionar información o retroalimentación al usuario.
category: overlay
keywords:
  - notification
  - snackbar
  - flash message
links:
  - label: El brindis
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/toast
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Toast.vue
---

xph0000xUso

Utilice el componente [useToast](/docs/composables/use-toast) para mostrar un brindis en su aplicación.

::component-example
---
collapse: true
prettier: true
name: 'toast-example'
---
::

::warning
Asegúrese de envolver su aplicación con el componente [`App`](/docs/components/app) que utiliza nuestro componente [`Toaster`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/Toaster.vue) que utiliza el componente [`ToastProvider`](https://reka-ui.com/docs/components/toast#provider) de Reka UI.
::

::tip{to="/docs/components/app#props"}
Puede consultar el componente `App` prop `toaster` para ver cómo configurar la tostadora globalmente.
::

### Nombre

Pasa un campo `title` al método `toast.add` para mostrar un título.

::component-example
---
options:
  - name: 'title'
    label: 'title'
    default: 'Uh oh! Something went wrong.'
name: 'toast-title-example'
---
::

### Descripción

Pase un campo `description` al método `toast.add` para mostrar una descripción.

::component-example
---
options:
  - name: 'title'
    label: 'title'
    default: 'Uh oh! Something went wrong.'
  - name: 'description'
    label: 'description'
    default: 'There was a problem with your request.'
name: 'toast-description-example'
---
::

### Icon

Pase un campo `icon` al método `toast.add` para mostrar un [Icon](/docs/components/icon).

::component-example
---
options:
  - name: 'icon'
    label: 'icon'
    default: 'i-lucide-wifi'
name: 'toast-icon-example'
---
::

### Avatar en Español

Pase un campo `avatar` al método `toast.add` para mostrar un [Avatar](/docs/components/avatar).

::component-example
---
options:
  - name: 'avatar.src'
    alias: 'avatar'
    label: 'avatar.src'
    default:
      src: 'https://github.com/benjamincanac.png'
name: 'toast-avatar-example'
---
::

### Color (Edición)

Pasa un campo `color` al método `toast.add` para cambiar el color de la tostada.

::component-example
---
options:
  - name: 'color'
    label: 'color'
    default: neutral
    items:
      - primary
      - secondary
      - success
      - info
      - warning
      - error
      - neutral
name: 'toast-color-example'
---
::

### Cerrado

Pase un campo `close` para personalizar u ocultar el cierre [Button](/docs/components/button) (con el valor `false`).

::component-example
---
name: 'toast-close-example'
---
::

### Cerrar Icono

Pase un campo `closeIcon` para personalizar el botón de cierre [Icon](/docs/components/icon).

::component-example
---
options:
  - name: 'closeIcon'
    label: 'closeIcon'
    default: 'i-lucide-arrow-right'
name: 'toast-close-icon-example'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono globalmente en su `app.config.ts` bajo la tecla `ui.icons.close`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono globalmente en su `vite.config.ts` bajo la tecla `ui.icons.close`.
:::
::

### Acción

Pase un campo `actions` para agregar algunas acciones [Button](/docs/components/button) a la Tostada.

::component-example
---
options:
  - name: 'description'
    label: 'description'
    default: 'There was a problem with your request.'
name: 'toast-actions-example'
---
::

### Duración

Pase un campo `duration` al método `toast.add` para cambiar el tiempo que permanece visible la Tostada (en milisegundos).

::tip
Configure el campo `duration` en `0` para mantener abierta la Tostada hasta que se cierre manualmente.
::

::component-example
---
options:
  - name: 'duration'
    label: 'duration'
    default: 0
    items:
      - 0
      - 1000
      - 3000
      - 5000
name: 'toast-duration-example'
---
::

### Progress (Edición española)

Pase un campo `progress` para personalizar u ocultar la barra [Progress](/docs/components/progress) (con el valor `false`).

::tip
La barra de progreso hereda el color Toast de forma predeterminada, pero puede anularlo utilizando el campo `progress.color`.
::

::component-example
---
name: 'toast-progress-example'
---
::

### Orientación

Pase un campo `orientation` al método `toast.add` para cambiar la orientación de la Tostada.

::component-example
---
options:
  - name: 'orientation'
    label: 'orientation'
    default: 'horizontal'
    items:
      - horizontal
      - vertical
name: 'toast-orientation-example'
---
::

## Ejemplos

::note{to="/docs/components/app"}
La interfaz de usuario de Nuxt proporciona un componente **App** que envuelve su aplicación para proporcionar configuraciones globales.
::

### Cambiar la posición global

Cambie el soporte `toaster.position` en el componente [App](xph188) para cambiar la posición de las tostadas.

```vue [app.vue]
<script setup lang="ts">
const toaster = { position: 'bottom-right' }
</script>

<template>
  <UApp :toaster="toaster">
    <NuxtPage />
  </UApp>
</template>
```

::component-example
---
prettier: true
name: 'toast-example'
---

#options
:toaster-position-example
::


### Cambiar la duración global

Cambie el prop `toaster.duration` en el componente [App](/docs/components/app#props) para cambiar la duración de las tostadas.

```vue [app.vue]
<script setup lang="ts">
const toaster = { duration: 5000 }
</script>

<template>
  <UApp :toaster="toaster">
    <NuxtPage />
  </UApp>
</template>
```

::component-example
---
prettier: true
name: 'toast-example'
---

#options
:toaster-duration-example
::


### Change global máx.: badge{label="4.1+" class="align-text-top"}

Cambie el prop `toaster.max` en el componente [App](/docs/components/app#props) para cambiar el número máximo de tostadas que se muestran a la vez.

```vue [app.vue]
<script setup lang="ts">
const toaster = { max: 3 }
</script>

<template>
  <UApp :toaster="toaster">
    <NuxtPage />
  </UApp>
</template>
```

::component-example
---
prettier: true
name: 'toast-example'
---

#options
:toaster-max-example
::


### Stacked tostadas

Configure el prop `toaster.expand` en `false` en el componente [App](/docs/components/app#props) para mostrar tostadas apiladas (inspirado en [Sonner](https://sonner.emilkowal.ski/)).

```vue [app.vue]
<script setup lang="ts">
const toaster = { expand: true }
</script>

<template>
  <UApp :toaster="toaster">
    <NuxtPage />
  </UApp>
</template>
```

::tip
Puede pasar el cursor sobre las tostadas para expandirlas. Esto también pausará el temporizador de las tostadas.
::

::component-example
---
prettier: true
name: 'toast-example'
---

#options
:toaster-expand-example
::


### Tostados desduplicados: badge{label="4.5+" class="align-text-top"}

Al llamar a `toast.add` con un `id` que ya existe, el tostado existente pulsará en lugar de crear un duplicado.

::component-example
---
collapse: true
name: 'toast-duplicate-example'
---
::

### Con callback

Pase un campo `onUpdateOpen` para ejecutar una devolución de llamada cuando se cierre el toast (ya sea por vencimiento o por despido del usuario).

::component-example
---
collapse: true
name: 'toast-callback-example'
---
::

### Con contenido HTML

Utilice la función de renderizado [`h()` ](https://vuejs.org/api/render-function.html#h) en los campos `title` o `description` para renderizar elementos HTML o componentes de Vue con un estilo personalizado.

::component-example
---
collapse: true
name: 'toast-html-example'
---
::

## API (Edición española)

### Props (Edición española)

:component-props

### Slots

:component-slots

### Emisiones

:component-emits

### Exposición

Al acceder al componente a través de una referencia de plantilla, puede utilizar lo siguiente:

| Nombre| Tipo|
| ---- | ---- |
| `height`x{lang="ts-type"}| `Ref<number>`x{lang="ts-type"}|

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
