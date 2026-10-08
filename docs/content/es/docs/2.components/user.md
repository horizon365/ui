---
description: 'Mostrar información del usuario con nombre, descripción y avatar.'
category: data
keywords:
  - profile
  - person
  - account
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/User.vue
---

@@pH000@@Uso del producto

@@pH001@Nombre

Utilice el prop `name` para mostrar un nombre para el usuario.

::component-code
---
Props:
  Nombre: John Doe
---
::

@@pH003@Descripción

Utilice el prop `description` para mostrar una descripción para el usuario.

::component-code
---
Props:
  Nombre: John Doe
  Descripción:"Ingeniero de Software"
---
::

@005@Avatara

Utilice el prop `avatar` para mostrar un componente [Avatar](/docs/components/avatar).

::component-code
---
Categoría: true
Ignora:
  @11@Nombre
  @@ph012@descripción
Props:
  Nombre: John Doe
  Descripción:"Ingeniero de Software"
  El avatar:
    src: 'https://i.pravatar.cc/150?u=john-doe'
    Categoría: Lazy
    icon: i-lucide-image
---
::

::collapsible{name="all avatar properties"}

::component-props
---
Nombre: Avatar
Ignora:
  @130000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @@pH014@como
---
::

::

@@pH015@@chipseudo

Utilice el prop `chip` para mostrar un componente [Chip](/docs/components/chip).

::component-code
---
Categoría: true
Ignora:
  @21@nombre
  @@ph022@descripción
  @@23@avatar.src
Items:
  chip.color:
    @@ph024@primary
    @@250@25 años
    @@26@@éxito
    @27@info
    @28@Advertencia
    @@29@error
    @000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  chip.position:
    -  arriba a la izquierda
    -  arriba a la derecha
    -  abajo a la izquierda
    -  abajo a la derecha
Props:
  Nombre: John Doe
  Descripción:"Ingeniero de Software"
  avatar. src: 'https://i.pravatar.cc/150?u=john-doe'
  El chip:
    Categoría:"Primary"
    Posición: Top-Right
---
::

::collapsible{name="all chip properties"}

::component-props
---
Nombre: Chip
Ignora:
  @@pH035@como
  @@36@tamaño
  @373@@autonome
---
::

::

@@380@Tamaño

Utilice el prop `size` para cambiar el tamaño del avatar del usuario y el texto.

::component-code
---
Categoría: true
Ignora:
  @@pH040@nombre
  @@ph041@descripción
  - avatar.src (en inglés)
  @@pH043@@chip (en inglés)
Props:
  Nombre: John Doe
  Descripción:"Ingeniero de Software"
  avatar. src: 'https://i.pravatar.cc/150?u=john-doe'
  Chip: Verdad
  Tamaño: xl
---
::

@@444@Dirección

Utilice el prop `orientation` para cambiar la orientación. Predeterminados a `horizontal`.

::component-code
---
Categoría: true
Ignora:
  - avatar.src (en inglés)
Props:
  Categoría:"Vertical"
  Nombre: John Doe
  Descripción:"Ingeniero de Software"
  avatar. src: 'https://i.pravatar.cc/150?u=john-doe'
---
::

@@48000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Puede pasar cualquier propiedad del componente [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) como `to`,`target`,`rel`, etc.

::component-code
---
Categoría: true
Ignora:
  @@pH057@nombre
  @@pH058@descripción
  - avatar.src (en inglés)
  @000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  en: 'https://github.com/benjamincanac'
  Nombre: '_blanco'
  Nombre: Benjamin Canac
  Descripción:"Ingeniero de Software"
  avatar. src: 'https://github.com/benjamincanac.png'
---
::

::note
El componente `NuxtLink` heredará todos los demás atributos que pase al componente `User`.
::

@@pH063

@@pH064@@Propuestas

Componentes Props

@@P065@@Escenarios

Componentes de slots

@@666@@Proyecto

Componente Tema

@@changelog

Categoría: component-changelog
