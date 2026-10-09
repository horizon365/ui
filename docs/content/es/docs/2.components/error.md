---
description: 'Un componente de error preconstruido con soporte para NuxtError.'
category: layout
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Error.vue
---

xph0000xUso

El componente Error representa un elemento `<main>` que trabaja junto con el componente [Header](/docs/components/header) para crear un diseño de altura completa que se extiende a la altura disponible de la ventana gráfica.

::tip{to="/docs/getting-started/theme/css-variables#header"}
El componente Error utiliza la variable CSS `--ui-header-height` para posicionarse correctamente debajo del `Header`.
::

### Error (Edición española)

Utilice el prop `error` para mostrar un mensaje de error.

::framework-only
#nuxt
::note{to="https://nuxt.com/docs/guide/directory-structure/error" target="_blank"}
En la mayoría de los casos, recibirá el prop `error` en su archivo `error.vue`.
::
::

::component-code
---
hide:
  - class
prettier: true
props:
  error:
    statusCode: 404
    statusMessage: 'Page not found'
    message: 'The page you are looking for does not exist.'
  class: '!min-h-96'
---
::

### Icono: badge{label="4.8+" class="align-text-top"}

Utilice el prop `icon` para mostrar un icono sobre el código de estado.

::component-code
---
hide:
  - class
prettier: true
ignore:
  - error.statusCode
  - error.statusMessage
  - error.message
props:
  icon: 'i-lucide-file-x'
  error:
    statusCode: 404
    statusMessage: 'Page not found'
    message: 'The page you are looking for does not exist.'
  class: '!min-h-96'
---
::

Utilice la ranura `#leading` para mostrar un elemento personalizado, como un logotipo.

::component-code
---
hide:
  - class
prettier: true
ignore:
  - error.statusCode
  - error.statusMessage
  - error.message
props:
  error:
    statusCode: 404
    statusMessage: 'Page not found'
    message: 'The page you are looking for does not exist.'
  class: '!min-h-96'
slots:
  leading: |

    <img src="https://github.com/nuxt.png" alt="Logo" class="size-10 rounded-full">
---
#leading
:img{src="https://github.com/nuxt.png" alt="Logo" class="size-10 rounded-full"}
::

### Clear (en inglés)

Utilice el accesorio `clear` para personalizar u ocultar el botón borrar (con el valor `false`).

Puede pasar cualquier propiedad del componente [Button](/docs/components/button) para personalizarlo.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - error.statusCode
  - error.statusMessage
  - error.message
  - clear.color
  - clear.size
  - clear.icon
  - clear.class
props:
  clear:
    color: neutral
    size: xl
    icon: i-lucide-arrow-left
    class: 'rounded-full'
  error:
    statusCode: 404
    statusMessage: 'Page not found'
    message: 'The page you are looking for does not exist.'
  class: '!min-h-96'
---
::

### Redirección

Utilice el prop `redirect` para redirigir al usuario a una página diferente cuando se hace clic en el botón borrar.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - error.statusCode
  - error.statusMessage
  - error.message
props:
  redirect: '/docs/getting-started'
  error:
    statusCode: 404
    statusMessage: 'Page not found'
    message: 'The page you are looking for does not exist.'
  class: '!min-h-96'
---
::

## Ejemplos

XPH113X en el XPH114X

Utilice el componente de error en su `error.vue`:

```vue [error.vue]{13}
<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()
</script>

<template>
  <UApp>
    <UHeader />

    <UError :error="error" />

    <UFooter />
  </UApp>
</template>
```

::tip
Es posible que desee replicar el código de su `app.vue` dentro de su archivo `error.vue` para tener el mismo diseño y características, aquí hay un ejemplo: <https://github.com/nuxt/ui/blob/v4/docs/app/error.vue>
::

::note
Puede obtener más información sobre cómo manejar los errores en la documentación [Nuxt ](https://nuxt.com/docs/getting-started/error-handling#error-page), pero al usar `nuxt generate` se recomienda agregar `fatal: true` dentro de su llamada `createError` para asegurarse de que se muestre la página de error:

```vue [pages/\[...slug\\].vue]
<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('docs').path(route.path).first()
})
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>
```

::

## API

### Props (accesorios)

:component-props

### Slots

:component-slots

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
