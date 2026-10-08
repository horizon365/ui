---
title: Changelogversión
description: 'Un artículo personalizable para mostrar en un changelog.'
category: page
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChangelogVersion.vue
---

@@pH000@@Uso del producto

El componente ChangelogVersion proporciona una forma flexible de mostrar un elemento`<article>`con contenido personalizable que incluye título , descripción , imagen , etc.

::code-preview

::u-changelog-version
---
Presentación de Nuxt UI v3
Descripción :¡ Nuxt UI v3 ya está disponible ! Después de más de 1500 commits , este importante rediseño trae una accesibilidad mejorada , soporte de Tailwind CSS y compatibilidad completa con Vue .
imagen : ' https://nuxt.com/assets/blog/nuxt-ui-v3.png '
Fecha : 2025 - 03 - 12
Autores :
  - nombre : Benjamin Canac
    Descripción : '@benjamincanac '
    El avatar :
      El src :https://github.com/benjamincanac.png
      Categoría : Lazy
    Dos :https://x.com/benjamincanac
    Nombre : _ blank
  - nombre : Sebastián Chopin
    Descripción : '@atinux '
    El avatar :
      El src :https://github.com/atinux.png
      Categoría : Lazy
    Dos :https://x.com/atinux
    Nombre : _ blank
  - nombre : Hugo Richard
    Descripción : '@hugorcd '
    El avatar :
      El src :https://github.com/hugorcd.png
      Categoría : Lazy
    Dos :https://x.com/hugorcd
    Nombre : _ blank
en : ' https://nuxt.com/blog/nuxt-ui-v3 '
Nombre : ' _ blanco '
Categoría : w-full
Contenido : ' max-w - lg '
---
::

::

::tip{to="/docs/components/changelog-versions"}
Utilice el componente`ChangelogVersions`para mostrar varias versiones del registro de cambios en una línea de tiempo con una barra indicadora a la izquierda .
::

@@pH006@title (Edición española)

Utilice el prop`title`para mostrar el título de la versión de cambio .

::component-code
---
Escondido :
  @008@clase
  @0009@jajajajajajajajajaja
  - ui.container (en inglés)
Props :
  Presentación de Nuxt UI v3
  Categoría : w-full
  Contenido : ' max-w - lg '
---
::

@@111@Descripción

Utilice el prop`description`para mostrar la descripción de la versión de cambio .

::component-code
---
Categoría : true
Escondido :
  @@13@clase
  @@pH014
  - ui.container (en inglés)
Ignora:
  @16@title
Props:
  Presentación de Nuxt UI v3
  Descripción:¡ Nuxt UI v3 ya está disponible! Después de más de 1500 commits, este importante rediseño trae una accesibilidad mejorada, soporte de Tailwind CSS y compatibilidad completa con Vue.
  Categoría: w-full
  Contenido: 'max-w-lg'
---
::

@17@fecha

Utilice el prop `date` para mostrar la fecha de la Versión del Cambio.

::tip
La fecha se formatea automáticamente a la [current locale](/docs/getting-started/integrations/i18n/nuxt#locale). Puede pasar un objeto `Date` o una cadena.
::

::component-code
---
Categoría: true
Escondido:
  @@24@clase
  @250@@uy
  - ui.container (en inglés)
Ignora:
  @27@title
  @@ph028@descripción
Props:
  Presentación de Nuxt UI v3
  Descripción:¡ Nuxt UI v3 ya está disponible! Después de más de 1500 commits, este importante rediseño trae una accesibilidad mejorada, soporte de Tailwind CSS y compatibilidad completa con Vue.
  Fecha: 2025 - 03 - 12
  Categoría: w-full
  Contenido: 'max-w-lg'
---
::

@@29@badge

Utilice el prop `badge` para mostrar un [Badge](/docs/components/badge) en la Versión de Cambio.

::component-code
---
Categoría: true
Escondido:
  @35@clase
  @@pH036
  - ui.container (en inglés)
Ignora:
  @38@title
  @@ph039@descripción
  @@pH040@fecha
Props:
  Presentación de Nuxt UI v3
  Descripción:¡ Nuxt UI v3 ya está disponible! Después de más de 1500 commits, este importante rediseño trae una accesibilidad mejorada, soporte de Tailwind CSS y compatibilidad completa con Vue.
  Fecha: 2025 - 03 - 12
  Tags: "liberación"
  Categoría: w-full
  Contenido: 'max-w-lg'
---
::

Puede pasar cualquier propiedad del componente [Badge](/docs/components/badge#props) para personalizarlo.

::component-code
---
Categoría: true
Escondido:
  @@4500@clase
  @466@@jajajajajajajajajaja
  - ui.container (en inglés)
Ignora:
  @@48000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @@ph049@descripción
  @@F050@fecha
  - badge.label
  - badge.color (en inglés)
  - badge.variante
Props:
  Presentación de Nuxt UI v3
  Descripción:¡ Nuxt UI v3 ya está disponible! Después de más de 1500 commits, este importante rediseño trae una accesibilidad mejorada, soporte de Tailwind CSS y compatibilidad completa con Vue.
  Fecha: 2025 - 03 - 12
  El Badge:
    Etiqueta: "liberación"
    Color: Primario
    Categoría: Outline
  Categoría: w-full
  Contenido: 'max-w-lg'
---
::

@@pH054@imagen

Utilice el prop `image` para mostrar una imagen en el BlogPost.

::note
Si [`@nuxt/image`](https://image.nuxt.com/get-started/installation) está instalado, el componente `<NuxtImg>` se utilizará en lugar de la etiqueta nativa `img`.
::

::component-code
---
Categoría: true
Escondido:
  @063 @ clase
  @@pH064
  - ui.container (en inglés)
Ignora:
  @@666@title (Edición española)
  @@ph067@descripción
  @068@fecha
Props:
  Presentación de Nuxt UI v3
  Descripción:¡ Nuxt UI v3 ya está disponible! Después de más de 1500 commits, este importante rediseño trae una accesibilidad mejorada, soporte de Tailwind CSS y compatibilidad completa con Vue.
  Fecha: 2025 - 03 - 12
  imagen: 'https://nuxt.com/assets/blog/nuxt-ui-v3.png'
  Categoría: w-full
  Contenido: 'max-w-lg'
---
::

@@P069@Artículos

Utilice el prop `authors` para mostrar una lista de [User](/docs/components/user) en el ChangelogVersion como una matriz de objetos con las siguientes propiedades:

@@
@@ph078@@@ph079@@@ph080
@@
@@
@@
@@@ph090@@@ph091@@@ph092

Puede pasar cualquier propiedad del componente [Link](/docs/components/link#props) como `to`,`target`, etc.

::component-code
---
Categoría: true
Escondido:
  @099 @ clase
  @@pH100@uy
  - ui.container (en inglés)
Externo:
  @2010@autores
Externalidades :
  @@P103@@UserProps [ en inglés ]
Ignora :
  @@F104@título
  @@P105@Descripción
  by- date
  @@pH107@imagen
  @108@Artículos
Props :
  Presentación de Nuxt UI v3
  Descripción :¡ Nuxt UI v3 ya está disponible ! Después de más de 1500 commits , este importante rediseño trae una accesibilidad mejorada , soporte de Tailwind CSS y compatibilidad completa con Vue .
  Fecha : 2025 - 03 - 12
  imagen : ' https://nuxt.com/assets/blog/nuxt-ui-v3.png '
  Autores :
    - nombre : Benjamin Canac
      Descripción : '@benjamincanac '
      El avatar :
        El src :https://github.com/benjamincanac.png
        Categoría : Lazy
      Dos :https://x.com/benjamincanac
      Nombre : _ blank
    Archivo de la etiqueta : Sebastien Chopin
      Descripción : '@atinux '
      El avatar :
        El src :https://github.com/atinux.png
        Categoría : Lazy
      Dos :https://x.com/atinux
      Nombre : _ blank
    - nombre : Hugo Richard
      Descripción : '@hugorcd '
      El avatar :
        El src :https://github.com/hugorcd.png
        Categoría : Lazy
      Dos :https://x.com/hugorcd
      Nombre : _ blank
  Categoría : w-full
  Contenido : ' max-w - lg '
---
::

@112@enlace

Puede pasar cualquier propiedad del componente[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)como`to`,`target`,`rel`, etc.

::component-code
---
Categoría : true
Escondido :
  @121@clase
  @@222@uy
  - ui.container (en inglés)
Ignora :
  @124@Título
  @@ph125@descripción
  @126@fecha
  @@pH127@imagen
  @128@objetivo
Props:
  Presentación de Nuxt UI v3
  Descripción:¡ Nuxt UI v3 ya está disponible! Después de más de 1500 commits, este importante rediseño trae una accesibilidad mejorada, soporte de Tailwind CSS y compatibilidad completa con Vue.
  Fecha: 2025 - 03 - 12
  imagen: 'https://nuxt.com/assets/blog/nuxt-ui-v3.png'
  en: 'https://nuxt.com/blog/nuxt-ui-v3'
  Nombre: _blank
  Categoría: w-full
  Contenido: 'max-w-lg'
---
::

@@pH129@Indicador

Utilice el prop `indicator` para ocultar el punto indicador a la izquierda. Predeterminados a `true`.

::component-code
---
Categoría: true
Escondido:
  @@2013@clase
  @333@uy
  - ui.container (en inglés)
Ignora:
  @135 @ Título
  @@ph136@descripción
  @137 @ fecha
  @@pH138@imagen
Props:
  Presentación de Nuxt UI v3
  Descripción:¡ Nuxt UI v3 ya está disponible! Después de más de 1500 commits, este importante rediseño trae una accesibilidad mejorada, soporte de Tailwind CSS y compatibilidad completa con Vue.
  Fecha: 2025 - 03 - 12
  imagen: 'https://nuxt.com/assets/blog/nuxt-ui-v3.png'
  Indicador: Falso
  Categoría: w-full
  Contenido: 'max-w-lg'
---
::

::note
Cuando el prop `indicator` es `false`, la fecha se mostrará sobre el título.
::

@141@Ejemplos

### Con ranura para el cuerpo

Puede usar la ranura `body` para mostrar contenido personalizado entre la imagen y los autores con:

- el [Markdown](https://comark.dev/rendering/vue) componente de `@comark/vue` para mostrar un poco de rebajas.
- el componente [ContentRenderer](https://content.nuxt.com/docs/components/content-renderer) de `@nuxt/content` para renderizar el contenido de la página o lista.
- o utilice el componente `:u-changelog-version` directamente en su contenido con un descuento dentro de la ranura `body`, ya que Nuxt UI proporciona componentes de prosa prediseñados.

::component-example
---
Categoría: true
Nombre del archivo: 'changelog-version-markdown-example'
Colapso: Verdad
---
::

@@pH159

@160000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

@161@161@161

Componentes de slots

@162 @@ Proyecto

Componente Tema

@163@Changelog (Edición española)

Categoría: component-changelog
