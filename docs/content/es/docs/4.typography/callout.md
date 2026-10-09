---
title: proselitismo
description: 'Resalta la información importante con llamativos cuadros e iconos de colores.'
category: components
navigation.title: Callout
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Callout.vue
---

xph0000xUso

Utilice el descuento en la ranura predeterminada del componente `callout` para agregar un contexto llamativo a su contenido.

::component-code{slug="callout" prose}
---
props:
  class: 'w-full my-0'
hide:
  - class
slots:
  default: This is a `callout` with full **markdown** support.
---
::

### Icon

Utilice el accesorio `icon` para mostrar un icono junto al contenido.

::component-code{slug="callout" prose}
---
props:
  icon: i-lucide-square-play
  class: 'w-full my-0'
hide:
  - class
slots:
  default: This is a `callout` with an icon.
---
::

### Color (Edición española)

Utilice el prop `color` para cambiar el color de la llamada.

::component-code{slug="callout" prose}
---
ignore:
  - icon
props:
  icon: i-lucide-info
  color: info
  class: 'w-full my-0'
hide:
  - class
slots:
  default: This is a `callout` with a custom color.
---
::

### Link (Edición española)

Puede pasar cualquier propiedad del componente [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link), como `to` y `target`, para hacer que la llamada sea un enlace.

::component-code{slug="callout" prose}
---
hide:
  - class
ignore:
  - icon
  - target
props:
  icon: i-lucide-square-play
  to: '/docs/getting-started/installation/nuxt'
  color: neutral
  class: 'w-full my-0'
slots:
  default: Learn how to install `@nuxt/ui` in your project.
---
::

## Atajos

También puede utilizar los accesos directos `note`, `tip`, `warning` y `caution` con iconos y colores predefinidos.

::code-preview

:::div{class="flex flex-col gap-4 w-full"}

::note{class="w-full my-0"}
Aquí hay alguna información adicional para usted.
::

::tip{class="w-full my-0"}
Aquí hay una sugerencia útil.
::

::warning{class="w-full my-0"}
Tenga cuidado con esta acción, ya que puede tener resultados inesperados.
::

::caution{class="w-full my-0"}
Esta acción no se puede deshacer.
::

:::

#code

```mdc
::note
Here's some additional information.
::

::tip
Here's a helpful suggestion.
::

::warning
Be careful with this action as it might have unexpected results.
::

::caution
This action cannot be undone.
::
```

::

## API (Edición española)

### Props (Edición española)

:component-props{prose}

### Slots (Edición española)

:component-slots{prose}

## Temas

:component-theme{prose}

## Changelog (Edición española)

:component-changelog{prefix="prose"}
