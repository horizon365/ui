---
description: 'Un header responsive para la navegación de tu sitio.'
category: layout
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Header.vue
---

xph0000xUso

The Header component renders an element `<header>`.

::tip{to="/docs/getting-started/theme/css-variables#header"}
Su altura se define a través de una variable CSS `--ui-header-height`.
::

Utilice las ranuras `left`, `default` y `right` para personalizar el encabezado y las ranuras `body` o `content` para personalizar el menú del encabezado.

::component-example
---
collapse: true
prettier: true
name: 'header-example'
class: '!px-0 !pt-0'
overflowHidden: true
props:
  class: 'w-full'
---
::

::note
En este ejemplo, usamos el componente [NavigationMenu](/docs/components/navigation-menu) para representar los enlaces de encabezado en el centro.
::

### Nombre

Utilice la prop `title` para cambiar el título del encabezado. Defaults a `Nuxt UI`.

::component-code
---
hide:
  - class
props:
  title: 'Nuxt UI'
  class: 'w-full'
class: '!px-0 !pt-0'
---
::

También puede utilizar la ranura `title` para agregar su propio logotipo.

::tip{to="#props"}
Aún debe agregar el prop `title` para reemplazar el `aria-label` predeterminado del enlace.
::

::component-code
---
prettier: true
overflowHidden: true
hide:
  - class
props:
  class: 'w-full'
slots:
  title: |

    <Logo class="h-6 w-auto" />
class: '!px-0 !pt-0'
---

#title
:logo{class="h-6 w-auto"}
::

### xxxxxxto

Utilice el prop `to` para cambiar el enlace del título. Defaults a `/`.

::component-code
---
hide:
  - class
class: '!px-0 !pt-0'
props:
  to: '/docs'
  class: 'w-full'
---
::

También puede utilizar la ranura `left` para anular el enlace por completo.

::component-code
---
prettier: true
overflowHidden: true
hide:
  - class
class: '!px-0 !pt-0'
props:
  class: 'w-full'
slots:
  left: |

    <NuxtLink to="/docs">
      <Logo class="h-6 w-auto" />
    </NuxtLink>
---

#left
::nuxt-link{to="/docs"}
:logo{class="h-6 w-auto"}
::
::

### Modo

Utilice el prop `mode` para cambiar el modo del menú de encabezado.

Utilice la ranura `body` para rellenar el cuerpo del menú (debajo del encabezado) o la ranura `content` para rellenar todo el menú.

::tip{to="#props"}
Puedes usar el prop `menu` para personalizar el menú de la cabecera, se adaptará dependiendo del modo que elijas.
::

::component-example
---
collapse: true
iframe:
  height: 300px;
iframeMobile: true
overflowHidden: true
name: 'header-menu-example'
options:
  - name: 'mode'
    label: 'mode'
    default: 'drawer'
    items:
      - modal
      - slideover
      - drawer
props:
  class: 'w-full'
---
::

xph0999xTélam

Utilice el accesorio `toggle` para personalizar el botón de alternancia que se muestra en el móvil.

Puede pasar cualquier propiedad del componente [Button](/docs/components/button) para personalizarlo.

::component-example
---
collapse: true
iframe:
  height: 300px;
iframeMobile: true
overflowHidden: true
name: 'header-toggle-example'
props:
  class: 'w-full'
---
::

### Toggle Lado

Utilice el prop `toggle-side` para cambiar el lado del botón de alternancia.

::component-example
---
collapse: true
iframe:
  height: 300px;
iframeMobile: true
overflowHidden: true
name: 'header-toggle-side-example'
props:
  class: 'w-full'
---
::

## Ejemplos

### Con toggle animado

Utilice la ranura `#toggle` para reemplazar el botón de alternancia predeterminado con un icono de hamburguesa animada personalizada utilizando [Motion Vue](https://motion.dev/docs/vue/motion-component).

::component-example
---
collapse: true
iframe:
  height: 300px;
iframeMobile: true
overflowHidden: true
name: 'header-toggle-animated-example'
props:
  class: 'w-full'
---
::

### Dentro del `app.vue`

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

## API (Edición española)

### Props (accesorios)

:component-props

### Slots

:component-slots

### Emisiones

:component-emits

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
