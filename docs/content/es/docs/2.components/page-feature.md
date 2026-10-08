---
title: Pagería
description: 'Un componente para mostrar las características clave de su aplicación.'
category: page
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageFeature.vue
---

@@pH000@@Uso del producto

El componente PageFeature es utilizado por el componente [PageSection](/docs/components/page-section) para mostrar [features](/docs/components/page-section#features).

@@pH009@@título

Utilice el prop `title` para establecer el título de la característica.

::component-code
---
Escondido:
  @@11@clase
Props:
  Título:"Tema"
  Categoría: W-96
---
::

@@pH012@Descripción

Utilice el prop `description` para establecer la descripción de la característica.

::component-code
---
Categoría: true
Escondido:
  @@clase014
Ignora:
  @@15@título
Props:
  Título:"Tema"
  Descripción: Personaliza la interfaz de usuario de Nuxt con tus propios colores, fuentes y más.
  Categoría: W-96
---
::

@16@Icon

Utilice el prop `icon` para establecer el icono de la función.

::component-code
---
Categoría: true
Escondido:
  @1800@clase
Ignora:
  @19@title
  @@ph020@descripción
Props:
  Título:"Tema"
  Descripción: Personaliza la interfaz de usuario de Nuxt con tus propios colores, fuentes y más.
  icon: 'i-lucide-swatch-book'
  Categoría: W-96
---
::

@@21@enlace

Puede pasar cualquier propiedad del componente [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) como `to`,`target`,`rel`, etc.

::component-code
---
Categoría: true
Escondido:
  @000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Ignora:
  @@301@title
  @@ph032@descripción
  @@303@icon
  @34@target
Props:
  Título:"Tema"
  Descripción: Personaliza la interfaz de usuario de Nuxt con tus propios colores, fuentes y más.
  icon: 'i-lucide-swatch-book'
  en: '/docs/getting-started/theme/design-system'
  Nombre: _blank
  Categoría: W-96
---
::

### Orientación

Utilice el prop `orientation` para cambiar la orientación de la entidad. Predeterminados a `horizontal`.

::component-code
---
Categoría: true
Escondido:
  @38@clase
Ignora:
  @@pH039@título
  @@ph040@descripción
  @@icon 41
Props:
  Categoría:"Vertical"
  Título:"Tema"
  Descripción: Personaliza la interfaz de usuario de Nuxt con tus propios colores, fuentes y más.
  icon: 'i-lucide-swatch-book'
  Categoría: W-96
---
::

@2014@@Apid

@@40000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

@@444@444@444

Componentes de slots

@450000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componente Tema

@@40000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Categoría: component-changelog
