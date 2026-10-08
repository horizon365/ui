---
description: 'Un componente de error preconstruido con soporte para NuxtError.'
category: layout
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Error.vue
---

@@pH000@@Uso del producto

El componente Error representa un elemento `<main>` que trabaja junto con el componente [Header](/docs/components/header) para crear un diseño de altura completa que se extiende a la altura disponible de la ventana gráfica.

::tip{to="/docs/getting-started/theme/css-variables#header"}
El componente Error utiliza la variable CSS `--ui-header-height` para posicionarse correctamente debajo del `Header`.
::

@@008@error

Utilice el prop `error` para mostrar un mensaje de error.

::framework-only
#nuxidad
::note{to="https://nuxt.com/docs/guide/directory-structure/error" target="_blank"}
En la mayoría de los casos, usted recibirá el prop `error` en su archivo `error.vue`.
::
::

::component-code
---
Escondido:
  @12000@clase
Categoría: true
Props:
  El error:
    Categoría: 404
    statutMessage: "Page non trouvée"
    Mensaje: "La página que está buscando no existe".
  Categoría:! min-h-96
---
::

### Icono: badge{label="4.8+" class="align-text-top"}

Utilice el prop `icon` para mostrar un icono sobre el código de estado.

::component-code
---
Escondido:
  @16@clase
Categoría: true
Ignora:
  - error.statusCode (en inglés)
  - error.statusMensaje
  @@pH019@@error.mensaje
Props:
  Icono: 'i-lucide-file-x'
  El error:
    Categoría: 404
    Estado: "Página no encontrada"
    Mensaje: "La página que está buscando no existe".
  Categoría:! min-h-96
---
::

Utilice la ranura `#leading` para mostrar un elemento personalizado, como un logotipo.

::component-code
---
Escondido:
  @@21@clase
Categoría: true
Ignora:
  - error.statusCode (en inglés)
  - error.statusMensaje
  @@24@@error.mensaje
Props:
  El error:
    Categoría: 404
    Estado: "Página no encontrada"
    Mensaje: "La página que está buscando no existe".
  Categoría:! min-h-96
Los slots:
  Liderando:|

    @@ 25
---
#Liderando
Vía: img{src="https://github.com/nuxt.png" alt="Logo" class="size-10 rounded-full"}
::

@@27@clear

Utilice el prop `clear` para personalizar u ocultar el botón de borrar (con el valor `false`).

Puede pasar cualquier propiedad del componente [Button](/docs/components/button) para personalizarlo.

::component-code
---
Categoría: true
Escondido:
  @34@@clase
Ignora:
  - error.statusCode (en inglés)
  - error.statusMensaje
  @@ph037@@error.mensaje
  @@clear.color
  @clear.size (en inglés)
  @@clear.icon
  @@clear.class (en inglés)
Props:
  claro:
    Color: Neutral
    Tamaño: xl
    Icono: i-lucide-arrow-left
    Categoría:"Round-full"
  El error:
    Categoría: 404
    Estado: "Página no encontrada"
    Mensaje: "La página que está buscando no existe".
  Categoría:! min-h-96
---
::

@@42@Redirección

Utilice el prop `redirect` para redirigir al usuario a una página diferente cuando se hace clic en el botón borrar.

::component-code
---
Categoría: true
Escondido:
  @@4500@clase
Ignora:
  - error.statusCode (en inglés)
  - error.statusMensaje
  @@ph048@@error.mensaje
Props:
  redirección:'/docs/getting-started'
  El error:
    Categoría: 404
    Estado: "Página no encontrada"
    Message: "La page que vous recherchez n'existe pas".
  Categoría:! min-h-96
---
::

@@ph049@@Examples

@@pH050

Utilice el componente Error en su `error.vue`:

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
Puede obtener más información sobre cómo manejar los errores en la documentación [Nuxt ](https://nuxt.com/docs/getting-started/error-handling#error-page), pero cuando utilice `nuxt generate` se recomienda agregar `fatal: true` dentro de su llamada `createError` para asegurarse de que se muestre la página de error:

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

@@pH094

@@pH095@@Propuestas

Componentes Props

@@pH096@@espanol

Componentes de slots

@097@@Proyecto

Componente Tema

@080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Categoría: component-changelog
