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

@@pH000@@Uso del producto

Utilice el [useToast](/docs/composables/use-toast) composable para mostrar un brindis en su aplicación.

::component-example
---
Colapso: Verdad
Categoría: true
Nombre: 'Tosta-ejemplo'
---
::

::warning
Asegúrese de envolver su aplicación con el `App`](/docs/components/app) componente que utiliza nuestro [`Toaster`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/Toaster.vue) componente que utiliza el [](https://reka-ui.com/docs/components/toast#provider) componente que utiliza el [https://reka-ui.com/docs/components/toast#provider)Componente de Reka UI.
::

::tip{to="/docs/components/app#props"}
Puede consultar el componente `App``toaster` prop para ver cómo configurar la tostadora globalmente.
::

@@222@Título del artículo

Pase un campo `title` al método `toast.add` para mostrar un título.

::component-example
---
Opciones:
  - nombre:'título'
    Etiqueta: "Título"
    Por defecto: 'Uh oh, algo salió mal'.
Nombre: 'toast-título-ejemplo'
---
::

@@260000 Descripción

Pase un campo `description` al método `toast.add` para mostrar una descripción.

::component-example
---
Opciones:
  - name:'título'
    Etiqueta: 'Título'
    Por defecto: 'Uh oh, algo salió mal'.
  - name:'descripción'
    Etiqueta: "Descripción"
    Por defecto: "Ha habido un problema con su solicitud".
nombre: 'toast-description-example'
---
::

@@pH031@@Icon

Pase un campo `icon` al método `toast.add` para mostrar un [Icon](/docs/components/icon).

::component-example
---
Opciones:
  - nombre:'icono'(en inglés)
    Categoría:'Icon'
    por defecto: i-lucide-wifi
Nombre: 'toast-icon-ejemplo'
---
::

### Avatar en Español

Pase un campo `avatar` al método `toast.add` para mostrar un [Avatar](/docs/components/avatar).

::component-example
---
Opciones:
  - name:'avatar. src'
    Nombre: "Avatar"
    Nombre del archivo: 'avatar. src'
    Default:
      src: 'https://github.com/benjamincanac.png'
Nombre: 'toast-avatar-ejemplo'
---
::

@47@color

Pasa un campo `color` al método `toast.add` para cambiar el color de la tostada.

::component-example
---
Opciones:
  - name:'color'(en inglés)
    Categoría:"Color"
    por defecto: Neutral
    items:
      @@P051@primary
      @@500@25 años
      @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
      @@500@info
      @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
      @@56@error
      @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Nombre: 'toast-color-ejemplo'
---
::

@58@@Cerrar

Pase un campo `close` para personalizar u ocultar el botón de cierre [](/docs/components/button)(con el valor de `false`).

::component-example
---
Nombre: 'toast-close-example'
---
::

### Cerrar Icono

Pase un campo `closeIcon` para personalizar el botón de cierre [Icon](/docs/components/icon).

::component-example
---
Opciones:
  - name:'Icono de cierre'
    Categoría: CloseIcon
    por defecto: i-lucide-arrow-right
Nombre: 'toast-close-icon-example'
---
::

::framework-only
#Nuxidad
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono a nivel mundial en su `app.config.ts` bajo la tecla `ui.icons.close`.
:::

#vista
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono a nivel mundial en su `vite.config.ts` bajo la tecla `ui.icons.close`.
:::
::

@@777@Acciones

Pase un campo `actions` para agregar algunas acciones de [Button](/docs/components/button) al Toast.

::component-example
---
Opciones:
  - name:'descripción'
    Etiqueta: "Descripción"
    Por defecto: "Ha habido un problema con su solicitud".
nombre: 'toast-acciones-ejemplo'
---
::

@084@duracion

Pase un campo `duration` al método `toast.add` para cambiar el tiempo que permanece visible la Tostada (en milisegundos).

::tip
Configure el campo `duration` en `0` para mantener la Tostada abierta hasta que se cierre manualmente.
::

::component-example
---
Opciones:
  - name:'duración'
    Etiqueta: 'duración'
    por defecto: 0
    Items:
      @0091@0
      @2000@1000
      @3000 @ 3000
      @5000 @ 5000
nombre: 'toast-duration-example'
---
::

@095@Proyecto

Pase un campo `progress` para personalizar u ocultar la barra [Progress](/docs/components/progress)(con el valor de `false`).

::tip
La barra de progreso hereda el color Toast de forma predeterminada, pero puede anularlo utilizando el campo `progress.color`.
::

::component-example
---
Nombre: 'Tosta-progreso-ejemplo'
---
::

### Orientación

Pase un campo `orientation` al método `toast.add` para cambiar la orientación de la Tostada.

::component-example
---
Opciones:
  - name:'orientación'
    Etiqueta: "Orientación"
    por defecto: "Horizontal"
    Items:
      - horizontal
      - vertical
nombre: 'toast-orientation-example'
---
::

@@pH109@Ejemplos

::note{to="/docs/components/app"}
Nuxt UI proporciona un componente **App** que envuelve su aplicación para proporcionar configuraciones globales.
::

### Cambio de posición global

Cambie el prop `toaster.position` en el componente [App](/docs/components/app#props) para cambiar la posición de las tostadas.

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
Categoría: true
Nombre: 'Tosta-ejemplo'
---

#Opciones
: toaster-posición-ejemplo
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
Categoría: true
Nombre: 'Tostas-ejemplo'
---

#Opciones
: duración-tostadora-ejemplo
::


### Cambiar el máximo global: badge{label="4.1+" class="align-text-top"}

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
Categoría: true
Nombre: 'Tosta-ejemplo'
---

#Opciones
Toaster-Max-ejemplo
::


### Tostadas apiladas

Establezca el `toaster.expand` prop a `false` en el [App](/docs/components/app#props) componente para mostrar tostadas apiladas (inspirado en [Sonner](https://sonner.emilkowal.ski/)).

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
Categoría: true
Nombre: 'Tostas-ejemplo'
---

#Opciones
: toaster-expand-ejemplo
::


### brindis desduplicados: badge{label="4.5+" class="align-text-top"}

Al llamar a `toast.add` con un `id` que ya existe, el tostado existente pulsará en lugar de crear un duplicado.

::component-example
---
Colapso: Verdad
Nombre: 'toast-duplicado-ejemplo'
---
::

### With callback

Pase un campo `onUpdateOpen` para ejecutar una devolución de llamada cuando se cierre la tostada (ya sea por vencimiento o por despido del usuario).

::component-example
---
Colapso: Verdad
Nombre: 'toast-callback-example'
---
::

### Con contenido HTML

Utilice la función de renderizado [`h()`](https://vuejs.org/api/render-function.html#h) en los campos `title` o `description` para renderizar elementos HTML o componentes de Vue con un estilo personalizado.

::component-example
---
Colapso: Verdad
Nombre: 'toast-html-example'
---
::

@200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

@@201@Propuestas

Componentes Props

@@202@202020

Componentes de slots

@@203@203@203@2013

Componentes Emisiones

@@204@@Exposicion

Al acceder al componente a través de una referencia de plantilla, puede utilizar lo siguiente:

| Nombre| Tipo|
| ---- | ---- |
| @@205@@207| @206@208|

@209 @@ Temas

Componente Tema

@2010@Changelog

Categoría: component-changelog
