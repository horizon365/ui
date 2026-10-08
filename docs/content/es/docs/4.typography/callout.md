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

@@pH000@@Uso del producto

Utilice la reducción de valor en la ranura predeterminada del componente `callout` para agregar un contexto llamativo a su contenido.

::component-code{slug="callout" prose}
---
Props:
  clase: 'w-full my-0'
Escondido:
  @@clase002
Los slots:
  Por defecto: Este es un `callout` con soporte completo **markdown**.
---
::

@@pH006@Icono

Utilice el prop `icon` para mostrar un icono al lado del contenido.

::component-code{slug="callout" prose}
---
Props:
  Icono: i-lucide-square-play
  clase: 'w-full my-0'
Escondido:
  @008@clase
Los slots:
  Por defecto: Se trata de un `callout` con un icono.
---
::

@000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `color` para cambiar el color de la llamada.

::component-code{slug="callout" prose}
---
Ignora:
  @@icon 12@icon
Props:
  Icono: i-lucide-info
  Categoría: Info
  clase: 'w-full my-0'
Escondido:
  @@13@clase
Los slots:
  por defecto: Este es un `callout` con un color personalizado.
---
::

@15@enlace

Puede pasar cualquier propiedad del componente [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) como `to` y `target` para hacer que la llamada sea un enlace.

::component-code{slug="callout" prose}
---
Escondido:
  @@23@clase
Ignora:
  @24@icon
  @@25000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Icono: i-lucide-square-play
  en/docs/getting-started/installation/nuxt
  Color: Neutro
  clase: 'w-full my-0'
Los slots:
  Por defecto: Aprenda cómo instalar `@nuxt/ui` en su proyecto.
---
::

@@27@@atajos

También puede utilizar los atajos `note`,`tip`,`warning` y `caution` con iconos y colores predefinidos.

::code-preview

:::div{class="flex flex-col gap-4 w-full"}

::note{class="w-full my-0"}
Aquí hay información adicional para usted.
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

#Código

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

@499000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

@500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Artículo siguienteCOMPONENTES {prose}

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes: {prose}

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Artículo principal: {prose}

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

por: component-changelog {prefix="prose"}
