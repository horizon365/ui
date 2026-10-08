---
title: Pagetería
description: 'Componente de tarjeta prediseñado que muestra un título, descripción y enlace opcional.'
category: page
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageCard.vue
---

@@pH000@@Uso del producto

El componente PageCard proporciona una forma flexible de mostrar el contenido en una tarjeta con una ilustración en la ranura predeterminada.

::code-preview

::u-page-card
---
Archivo de la etiqueta: Tailwind CSS
La interfaz de usuario de Nuxt se integra con la última versión de Tailwind CSS, aportando mejoras significativas.
icon: 'i-simple-icons-tailwindcss'
Categoría: W-96
---

Vía: img{src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

::

::tip
Utilice los componentes [PageGrid](/docs/components/page-grid),[PageColumns](/docs/components/page-columns) o [](/docs/components/page-list) para mostrar varias PageCard.
::

@@14@Título

Utilice el prop `title` para establecer el título de la tarjeta.

::component-code
---
Escondido:
  @16@clase
Props:
  Archivo de la etiqueta: Tailwind CSS
  Categoría: W-96
---
::

@17@Descripción

Utilice el prop `description` para establecer la descripción de la tarjeta.

::component-code
---
Categoría: true
Escondido:
  @1919@clase
Ignora:
  @200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Archivo de la etiqueta: Tailwind CSS
  La interfaz de usuario de Nuxt se integra con la última versión de Tailwind CSS, aportando mejoras significativas.
  Categoría: W-96
---
::

@21@Icon

Utilice el prop `icon` para configurar el icono de la tarjeta.

::component-code
---
Categoría: true
Escondido:
  @@23@clase
Ignora:
  @24@title
  @@25@Descripción
Props:
  Archivo de la etiqueta: Tailwind CSS
  La interfaz de usuario de Nuxt se integra con la última versión de Tailwind CSS, aportando mejoras significativas.
  icon: 'i-simple-icons-tailwindcss'
  Categoría: W-96
---
::

@@26@enlace

Puede pasar cualquier propiedad del componente [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) como `to`,`target`,`rel`, etc.

::component-code
---
Categoría: true
Escondido:
  @35@clase
Ignora:
  @36@title
  @@ph037@descripción
  @@icon 38
  @39@target (en inglés)
Props:
  Archivo de la etiqueta: Tailwind CSS
  La interfaz de usuario de Nuxt se integra con la última versión de Tailwind CSS, aportando mejoras significativas.
  icon: 'i-simple-icons-tailwindcss'
  en: 'https://tailwindcss.com/blog/tailwindcss-v4'
  Nombre: _blank
  Categoría: W-96
---
::

@@P2000@Variación

Utilice el prop `variant` para cambiar el estilo de la tarjeta.

::component-code
---
Categoría: true
Escondido:
  @@42@clase
Ignora:
  @@pH043@título
  @@ph044@descripción
  @@icon 45
  @4646 @
  @47@target en Español
Props:
  Archivo de la etiqueta: Tailwind CSS
  La interfaz de usuario de Nuxt se integra con la última versión de Tailwind CSS, aportando mejoras significativas.
  icon: 'i-simple-icons-tailwindcss'
  en: 'https://tailwindcss.com/blog/tailwindcss-v4'
  Nombre: _blank
  Categoría: Soft
  Categoría: W-96
---
::

::tip
Puede aplicar la clase `light` o `dark` a la ranura `links` cuando utilice la variante `solid` para invertir los colores.
::

@@P052@@Orientación

Utilice el prop `orientation` para cambiar la orientación con la ranura por defecto.

::component-code
---
Categoría: true
Ignora:
  @@505@título
  @@pH056@descripción
  @@57@icon
Props:
  Archivo de la etiqueta: Tailwind CSS
  La interfaz de usuario de Nuxt se integra con la última versión de Tailwind CSS, aportando mejoras significativas.
  icon: 'i-simple-icons-tailwindcss'
  Orientación: Horizontal
Los slots:
  Default:|

    @@@ 58 @
---

Vía: img{src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

### reversa

Utilice el prop `reverse` para invertir la orientación de la ranura predeterminada.

::component-code
---
Categoría: true
Ignora:
  @@2006@título
  @@ph063@descripción
  @@icon 64
Props:
  Archivo de la etiqueta: Tailwind CSS
  La interfaz de usuario de Nuxt se integra con la última versión de Tailwind CSS, aportando mejoras significativas.
  icon: 'i-simple-icons-tailwindcss'
  Orientación: Horizontal
  Reverso: Verdad
Los slots:
  Default:|

    @@@ 065 @
---

Vía: img{src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

@067 @ Destacado

Utilice los props `highlight` y `highlight-color` para mostrar un borde resaltado alrededor de la tarjeta.

::component-code
---
Categoría: true
Escondido:
  @070@clase
Ignora:
  @@701@title
  @@ph072@descripción
  @073@icon
  @@700@orientación
Props:
  Archivo de la etiqueta: Tailwind CSS
  La interfaz de usuario de Nuxt se integra con la última versión de Tailwind CSS, aportando mejoras significativas.
  icon: 'i-simple-icons-tailwindcss'
  Orientación: Horizontal
  Destacado: Verdadero
  highlightColor: 'primario'
Los slots:
  Default:|

    @@@ 75 @
---

Vía: img{src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

@@777@Atención

Utilice los accesorios `spotlight` y `spotlight-color` para mostrar un efecto de foco que sigue el cursor del ratón y resalta los bordes al flotar.

::note
El efecto de foco se hará cargo de los efectos de desplazamiento cuando se utilice un `to` prop. Es mejor usarlo con la variante `outline`.
::

::component-code
---
Categoría: true
Escondido:
  @082@clase
Ignora:
  @083@title (Edición española)
  @@ph084@descripción
  @@icon 85
  @@86000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Archivo de la etiqueta: Tailwind CSS
  La interfaz de usuario de Nuxt se integra con la última versión de Tailwind CSS, aportando mejoras significativas.
  icon: 'i-simple-icons-tailwindcss'
  Orientación: Horizontal
  Categoría: True
  spotlightColor: 'primario'
Los slots:
  Default:|

    @@pf087 @
---

Vía: img{src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

::tip
También puede personalizar el color y el tamaño mediante el uso de las variables CSS `--spotlight-color` y `--spotlight-size`:

```vue
<template>
  <UPageCard spotlight class="[--spotlight-color:var(--ui-error)] [--spotlight-size:200px]" />
</template>
```
::

@@pH096@Ejemplos

### Como testimonio

Utilice el componente [User](/docs/components/user) en la ranura `header` o `footer` para que la tarjeta parezca un testimonio.

::component-example
---
Nombre: 'pagina-tarjeta-testimonio-ejemplo'
---
::

::tip{to="/docs/components/page-columns"}
Puede utilizar el componente `PageColumns` para mostrar varias PageCard en un diseño de varias columnas.
::

@@pH105

@106@106@106

Componentes Props

@107@107@107@107

Componentes de slots

@108 @@ Proyecto

Componente Tema

@109@Changelog

Categoría: component-changelog
