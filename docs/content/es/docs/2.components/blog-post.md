---
title: El blogpost
description: 'Un artículo personalizable para mostrar en una página de blog.'
category: page
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/BlogPost.vue
---

@@pH000@@Uso del producto

El componente BlogPost proporciona una forma flexible de mostrar un elemento`<article>`con contenido personalizable que incluye título , descripción , imagen , etc.

::code-preview

::u-blog-post
---
Introducción a Nuxt Icon v1
Descubre Nuxt Icon v1 : una solución de iconos moderna , versátil y personalizable para tus proyectos de Nuxt .
imagen : ' https://nuxt.com/assets/blog/nuxt-icon/cover.png '
Fecha : 2024 - 11 - 25
Autores :
  - nombre : Anthony Fu
    Categoría : antfu7
    El avatar :
      El src :https://github.com/antfu.png
      Categoría : Lazy
    Dos :https://github.com/antfu
    Nombre : _ blank
en : ' https://nuxt.com/blog/nuxt-icon-v1-0 '
Nombre : ' _ blanco '
Categoría : W - 96
---
::

::

::tip{to="/docs/components/blog-posts"}
Utilice el componente`BlogPosts`para mostrar varias entradas de blog en un diseño de cuadrícula sensible .
::

@@pH004@@Nombre

Utilice el prop`title`para mostrar el título del BlogPost .

::component-code
---
Categoría : true
Escondido :
  @06@clase
Props :
  Introducción a Nuxt Icon v1
  Categoría: W-96
---
::

@@pH007@Descripción

Utilice el prop `description` para mostrar la descripción del BlogPost.

::component-code
---
Categoría: true
Escondido:
  @009@clase
Ignora:
  @@10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Presentación de Nuxt Icon v1
  Descubre Nuxt Icon v1: una solución de iconos moderna, versátil y personalizable para tus proyectos de Nuxt.
  Categoría: W-96
---
::

@111@fecha

Utilice el prop `date` para mostrar la fecha del BlogPost.

::tip
La fecha se formatea automáticamente a la [current locale](/docs/getting-started/integrations/i18n/nuxt#locale). Puede pasar un objeto `Date` o una cadena.
::

::component-code
---
Categoría: true
Escondido:
  @1800@clase
Ignora:
  @19@title
  @@ph020@descripción
Props:
  Presentación de Nuxt Icon v1
  Descubre Nuxt Icon v1: una solución de iconos moderna, versátil y personalizable para tus proyectos de Nuxt.
  Fecha: 2024 - 11 - 25
  Categoría: W-96
---
::

@@21@badge

Utilice el prop `badge` para mostrar un [Badge](/docs/components/badge) en el BlogPost.

::component-code
---
Categoría: true
Escondido:
  @27@clase
Ignora:
  @28@title
  @@ph029@descripción
Props:
  Presentación de Nuxt Icon v1
  Descubre Nuxt Icon v1: una solución de iconos moderna, versátil y personalizable para tus proyectos de Nuxt.
  Tags: "liberación"
  Categoría: W-96
---
::

Puede pasar cualquier propiedad del componente [Badge](/docs/components/badge#props) para personalizarlo.

::component-code
---
Categoría: true
Escondido:
  @34@@clase
Ignora:
  @@35@título
  @@ph036@descripción
  @badge.label @badge.label
  - badge.color (en inglés)
  - badge.variante
Props:
  Presentación de Nuxt Icon v1
  Descubre Nuxt Icon v1: una solución de iconos moderna, versátil y personalizable para tus proyectos de Nuxt.
  El Badge:
    Etiqueta: "liberación"
    Color: Primario
    Variante: Sólido
  Categoría: W-96
---
::

@@pH040@imagen

Utilice el prop `image` para mostrar una imagen en el BlogPost.

::note
Si [`@nuxt/image`](https://image.nuxt.com/get-started/installation) está instalado, se utilizará el componente `<NuxtImg>` en lugar de la etiqueta nativa `img`.
::

::component-code
---
Categoría: true
Escondido:
  @494@clase
Ignora:
  @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @@ph051@descripción
  @@2005@fecha
Props:
  Presentación de Nuxt Icon v1
  Descubre Nuxt Icon v1: una solución de iconos moderna, versátil y personalizable para tus proyectos de Nuxt.
  imagen: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png'
  Fecha: 2024 - 11 - 25
  Categoría: W-96
---
::

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `authors` para mostrar una lista de [User](/docs/components/user) en el BlogPost como una matriz de objetos con las siguientes propiedades:

@@
@@
@@
@@@ph068@@@ph069@@@ph070
@@
@@

Puede pasar cualquier propiedad del componente [Link](/docs/components/link#props) como `to`,`target`, etc.

::component-code
---
Categoría: true
Escondido:
  @083@clase
Externo:
  @084@Artículos
Externalidades:
  @@@P085@@UserProps [en inglés]
Ignora:
  @86@title
  @@ph087@descripción
  @888@fecha
  @@pH089@imagen
  @090000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Presentación de Nuxt Icon v1
  Descubre Nuxt Icon v1: una solución de iconos moderna, versátil y personalizable para tus proyectos de Nuxt.
  imagen: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png'
  Fecha: 2024 - 11 - 25
  Autores :
    - nombre : Anthony Fu
      Categoría : antfu7
      El avatar :
        El src :https://github.com/antfu.png
        Categoría : Lazy
      Dos :https://github.com/antfu
      Nombre : _ blank
  Categoría : W - 96
---
::

Cuando el prop`authors`tiene más de un elemento , se utiliza el componente[AvatarGroup](/docs/components/avatar-group).

::component-code
---
Categoría : true
Escondido :
  @097@clase
Externo :
  @098@Artículos
Externalidades :
  @@P299@@UserProps (en inglés)
Ignora :
  @@F100@título
  @@ph101@descripción
  @2010@fecha
  @@pH103@imagen
  @104@autores
Props :
  Presentación de Nuxt Icon v1
  Descubre Nuxt Icon v1 : una solución de iconos moderna , versátil y personalizable para tus proyectos de Nuxt .
  imagen : ' https://nuxt.com/assets/blog/nuxt-icon/cover.png '
  Fecha : 2024 - 11 - 25
  Autores :
    - nombre : Anthony Fu
      Categoría : antfu7
      El avatar :
        El src :https://github.com/antfu.png
        Categoría : Lazy
      Dos :https://github.com/antfu
      Nombre : _ blank
    - nombre : Benjamin Canac
      Categoría : benjamincanac
      El avatar :
        El src :https://github.com/benjamincanac.png
        Categoría : Lazy
      Dos :https://github.com/benjamincanac
      Nombre : _ blank
  Categoría : W - 96
---
::

@107@enlace

Puede pasar cualquier propiedad del componente[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)como`to`,`target`,`rel`, etc.

::component-code
---
Categoría : true
Escondido :
  @116@clase
Ignora :
  @117@título
  @@ph118@descripción
  @119@fecha
  @@pH120@imagen
  @121 @ objetivo
Props:
  Presentación de Nuxt Icon v1
  Descubre Nuxt Icon v1: una solución de iconos moderna, versátil y personalizable para tus proyectos de Nuxt.
  imagen: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png'
  Fecha: 2024 - 11 - 25
  en: 'https://nuxt.com/blog/nuxt-icon-v1-0'
  Nombre: _blank
  Categoría: W-96
---
::

@@222@Variante

Utilice el prop `variant` para cambiar el estilo de la entrada de blog.

::component-code
---
Categoría: true
Escondido:
  @124 @ clase
Ignora:
  @125 @ Título
  @@ph126@descripción
  @127 @ fecha
  @@pH128@imagen
  @129 @
  @P130 @ objetivo
Props:
  Presentación de Nuxt Icon v1
  Descubre Nuxt Icon v1: una solución de iconos moderna, versátil y personalizable para tus proyectos de Nuxt.
  imagen: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png'
  Fecha: 2024 - 11 - 25
  en: 'https://nuxt.com/blog/nuxt-icon-v1-0'
  Nombre: _blank
  Categoría: Desnudo
  Categoría: W-96
---
::

::note
El estilo será diferente ya sea que proporcione un `to` prop o un `image`.
::

@@333@Orientación

Utilice el prop `orientation` para cambiar la orientación de BlogPost. Predeterminados a `vertical`.

::component-code
---
Categoría: true
Escondido:
  @136 @ clase
Ignora:
  @137 @ Título
  @@ph138@descripción
  @139 @ fecha
  @@pH140@imagen
  @141
  @2014@objetivo
Props:
  Presentación de Nuxt Icon v1
  Descubre Nuxt Icon v1: una solución de iconos moderna, versátil y personalizable para tus proyectos de Nuxt.
  imagen: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png'
  Fecha: 2024 - 11 - 25
  en: 'https://nuxt.com/blog/nuxt-icon-v1-0'
  Nombre: _blank
  Orientación: Horizontal
  Categoría: Outline
---
::

@@pH143

@@40000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

@145@@espanol

Componentes de slots

@146 @@ Proyecto

Componente Tema

@147@Changelog (Edición española)

Categoría: component-changelog
