---
description: 'Muestra un banner en la parte superior de tu sitio web para informar a los usuarios sobre información importante.'
category: element
keywords:
  - announcement bar
  - top bar
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Banner.vue
---

xph0000xUso

### Nombre

Utilice el prop `title` para mostrar un título en el banner.

::component-code
---
prettier: true
class: '!p-0'
props:
  title: 'This is a banner with an important message.'
---
::

xf009xIcon

Utilice el accesorio `icon` para mostrar un icono en el banner.

::component-code
---
prettier: true
class: '!p-0'
ignore:
  - title
props:
  icon: i-lucide-info
  title: 'This is a banner with an icon.'
---
::

### Color (Edición)

Utilice el soporte `color` para cambiar el color de la bandera.

::component-code
---
prettier: true
class: '!p-0'
ignore:
  - icon
  - title
props:
  color: 'neutral'
  icon: i-lucide-info
  title: 'This is a banner with an icon.'
---
::

### Cerrar

Utilice el prop `close` para mostrar un [Button](/docs/components/button) para descartar el Banner.

::tip
Se emitirá un evento `close` cuando se haga clic en el botón de cierre.
::

::component-example
---
iframe:
  style: 'height: 48px;'
overflowHidden: true
name: 'banner-example'
---
#code

```vue
<template>
  <UBanner id="example" title="This is a closable banner." close />
</template>
```

::

::note
Cuando se cierra, `banner-${id}` se almacenará en el almacenamiento local para evitar que se muestre de nuevo.: br Para el ejemplo anterior, `banner-example` se almacenará en el almacenamiento local.
::

::caution
Para persistir en el estado rechazado a través de las recargas de página, debe especificar un prop. `id` Sin un `id` explícito, el banner solo se ocultará durante la sesión actual y volverá a aparecer en la recarga de página.
::

### Cerrar Icono

Utilice el prop `close-icon` para personalizar el botón de cierre [Icon](/docs/components/icon).

::component-example
---
iframe:
  style: 'height: 48px;'
overflowHidden: true
name: 'banner-example'
props:
  title: 'This is a closable banner with a custom close icon.'
  closeIcon: 'i-lucide-x-circle'
---
#code

```vue
<template>
  <UBanner
    title="This is a closable banner with a custom close icon."
    close
    close-icon="i-lucide-x-circle"
  />
</template>
```

::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono globalmente en su `app.config.ts` bajo la tecla `ui.icons.close`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su `vite.config.ts` bajo la tecla `ui.icons.close`.
:::
::

### Acciones

Utilice el prop `actions` para añadir algunas acciones [Button](/docs/components/button) al banner.

::component-code
---
prettier: true
class: '!p-0'
ignore:
  - title
  - actions
  - variant
external:
  - actions
externalTypes:
  - ButtonProps[]
props:
  title: 'This is a banner with actions.'
  actions:
    - label: Action 1
      variant: outline
    - label: Action 2
      trailingIcon: i-lucide-arrow-right
---
::

::note
Los botones de acción por defecto son `color="neutral"` y `size="xs"`. Puede personalizar estos valores pasándolos directamente a cada botón de acción.
::

Xph112xLink

Puede pasar cualquier propiedad del componente [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) como `to`, `target`, `rel`, etc.

::component-code
---
prettier: true
class: '!p-0'
overflowHidden: true
ignore:
  - title
  - target
props:
  to: 'https://nuxtlabs.com/'
  target: '_blank'
  title: 'NuxtLabs is joining Vercel!'
  color: 'primary'
---
::

::note
El componente `NuxtLink` heredará todos los demás atributos que pase al componente `User`.
::

## Ejemplos

### Dentro del `app.vue`

Utilice el componente Banner en su `app.vue` o en un diseño:

```vue [app.vue]{3}
<template>
  <UApp>
    <UBanner icon="i-lucide-construction" title="Nuxt UI v4 has been released!" />

    <UHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <UFooter />
  </UApp>
</template>
```

## API

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
