---
description: 'Un header responsive para la navegación de tu sitio.'
category: layout
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Header.vue
---

@@pH000@@Uso del producto

El componente Header representa un elemento `<header>`.

::tip{to="/docs/getting-started/theme/css-variables#header"}
Su altura se define mediante una variable CSS `--ui-header-height`.
::

Utilice las ranuras `left`,`default` y `right` para personalizar el encabezado y las ranuras `body` o `content` para personalizar el menú del encabezado.

::component-example
---
Colapso: Verdad
Categoría: true
Nombre: 'Ejemplo'
clase: '! px-0! pt-0'
Desconocido: true
Props:
  Categoría: w-full
---
::

::note
En este ejemplo, usamos el componente [NavigationMenu](/docs/components/navigation-menu) para representar los enlaces de encabezado en el centro.
::

@12@Título

Utilice el prop `title` para cambiar el título de la cabecera. Defaults a `Nuxt UI`.

::component-code
---
Escondido:
  @@15@clase
Props:
  Nombre: Nuxt UI
  Categoría: w-full
clase: '! px-0! pt-0'
---
::

También puede utilizar la ranura `title` para agregar su propio logotipo.

::tip{to="#props"}
Todavía debe agregar el prop `title` para reemplazar el `aria-label` predeterminado del enlace.
::

::component-code
---
Categoría: true
Desconocido: true
Escondido:
  @1919@clase
Props:
  Categoría: w-full
Los slots:
  Título:|

    @@ 20
clase: '! px-0! pt-0'
---

#Título
Vía: logo{class="h-6 w-auto"}
::

@222222222222222200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `to` para cambiar el enlace del título. Defaults a `/`.

::component-code
---
Escondido:
  @@25@clase
clase: '! px-0! pt-0'
Props:
  Archivo: /docs
  Categoría: w-full
---
::

También puede utilizar la ranura `left` para anular el enlace por completo.

::component-code
---
Categoría: true
Desconocido: true
Escondido:
  @27@clase
clase: '! px-0! pt-0'
Props:
  Categoría: w-full
Los slots:
  izquierda:|

    @@ 28
      @@ 29
    @@@ 30 @
---

#izquierda
::nuxt-link{to="/docs"}
Vía: logo{class="h-6 w-auto"}
::
::

@322@mode

Utilice el prop `mode` para cambiar el modo del menú de encabezado. Predeterminados a `modal`.

Utilice la ranura `body` para rellenar el cuerpo del menú (debajo del encabezado) o la ranura `content` para rellenar todo el menú.

::tip{to="#props"}
Puede utilizar el prop `menu` para personalizar el menú de la cabecera, se adaptará dependiendo del modo que elija.
::

::component-example
---
Colapso: Verdad
iframe:
  Tamaño: 300px
iframeMobile: Verdad
Desconocido: true
Nombre: 'header-menu-ejemplo'
Opciones:
  - name:'modo'(en inglés)
    Categoría:"Moda"
    por defecto: "Drawer"
    Items:
      @399@Modal
      @400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
      @@pH041@@ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
Props:
  Categoría: w-full
---
::

@@2014@Toggle

Utilice el prop `toggle` para personalizar el botón de alternancia que se muestra en el móvil.

Puede pasar cualquier propiedad del componente [Button](/docs/components/button) para personalizarlo.

::component-example
---
Colapso: Verdad
iframe:
  Tamaño: 300px
iframeMobile: Verdad
Desconocido: true
Nombre del archivo: 'header-toggle-example'
Props:
  Categoría: w-full
---
::

### Toggle Lado de la foto

Utilice el prop `toggle-side` para cambiar el lado del botón de alternancia. Predeterminados a `right`.

::component-example
---
Colapso: Verdad
iframe:
  Tamaño: 300px
iframeMobile: Verdad
Desconocido: true
Nombre: 'header-toggle-side-example'
Props:
  Categoría: w-full
---
::

@@P051@Ejemplos

### Con toggle animado

Utilice la ranura `#toggle` para reemplazar el botón de alternancia predeterminado con un icono de hamburguesa animada personalizada utilizando [Motion Vue](https://motion.dev/docs/vue/motion-component).

::component-example
---
Colapso: Verdad
iframe:
  Tamaño: 300px
iframeMobile: Verdad
Desconocido: true
Nombre del archivo: 'header-toggle-animated-example'
Props:
  Categoría: w-full
---
::

### Dentro de `app.vue`

Utilice el componente Encabezado en su `app.vue` o en un diseño:

```vue [app.vue]{28-51}
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Docs',
  to: '/docs/getting-started',
  active: route.path.startsWith('/docs/getting-started')
}, {
  label: 'Components',
  to: '/docs/components',
  active: route.path.startsWith('/docs/components')
}, {
  label: 'Figma',
  to: 'https://go.nuxt.com/figma-ui',
  target: '_blank'
}, {
  label: 'Releases',
  to: 'https://github.com/nuxt/ui/releases',
  target: '_blank'
}])
</script>

<template>
  <UApp>
    <UHeader>
      <template #title>
        <Logo class="h-6 w-auto" />
      </template>

      <UNavigationMenu :items="items" />

      <template #right>
        <UColorModeButton />

        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/ui"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </template>

      <template #body>
        <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
      </template>
    </UHeader>

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <UFooter />
  </UApp>
</template>
```

@@pH123

@124@124@124

Componentes Props

@125@125@125@125

Componentes de slots

@126@126@126

Componentes Emisiones

@127 @@ Proyecto

Componente Tema

@128@Changelog (Edición española)

Categoría: component-changelog
