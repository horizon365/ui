---
title: El AvatarGrupo
description: Apila varios avatares en un grupo.
category: element
keywords:
  - stacked avatars
  - faces
  - members
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/AvatarGroup.vue
---

@@pH000@@Uso del producto

Envuelva varios [Avatar](/docs/components/avatar) dentro de un AvatarGroup para apilarlos.

::component-code
---
Categoría: true
Los slots:
  por defecto:|

    @@@ 005 @
    @@ 006 @
    @@@ 007 @
---
por: u-avatar {src="https://github.com/benjamincanac.png" alt="Benjamin Canac"}
por: u-avatar {src="https://github.com/HugoRCD.png" alt="Hugo Richard"}
por: u-avatar {src="https://github.com/atinux.png" alt="Sébastien Chopin"}
::

@@1111@1111

Utilice el prop `size` para cambiar el tamaño de todos los avatares.

::component-code
---
Categoría: true
Props:
  Tamaño: XL
Los slots:
  Default:|

    @@@ 013
    @@@ 14 @
    @@@ 15 @
---
por: u-avatar {src="https://github.com/benjamincanac.png" alt="Benjamin Canac" loading="lazy"}
por: u-avatar {src="https://github.com/HugoRCD.png" alt="Hugo Richard" loading="lazy"}
por: u-avatar {src="https://github.com/atinux.png" alt="Sébastien Chopin" loading="lazy"}
::

@1919@1919

Utilice el prop `max` para limitar el número de avatares que se muestran. El resto se muestra como un avatar `+X`.

::component-code
---
Categoría: true
Props:
  Max: 2 años
Los slots:
  Default:|

    @22
    @@ 23 @
    @@ 24
---
por: u-avatar {src="https://github.com/benjamincanac.png" alt="Benjamin Canac" loading="lazy"}
por: u-avatar {src="https://github.com/HugoRCD.png" alt="Hugo Richard" loading="lazy"}
por: u-avatar {src="https://github.com/atinux.png" alt="Sébastien Chopin" loading="lazy"}
::

### Color: insignia @

Utilice el prop `color` para cambiar el color de todos los avatares.

::component-code
---
Categoría: true
Props:
  Color: Primario
Los slots:
  Default:|

    @@@ 31 @
    @@@ 32 @
    @@@ 33 @
---
por: u-avatar {alt="Benjamin Canac"}
Nombre: U-avatar {alt="Hugo Richard"}
por: u-avatar {alt="Sébastien Chopin"}
::

@@pH037@Ejemplos

### Con información sobre herramientas

Envuelva cada avatar con un [Tooltip](/docs/components/tooltip) para mostrar una información sobre herramientas en el hover.

Ejemplo de componente {name="avatar-group-tooltip-example"}

### Con el chip

Envuelva cada avatar con un chip [](/docs/components/chip) para mostrar un chip alrededor del avatar.

Ejemplo de componente {name="avatar-group-chip-example"}

### Con el link

Envuelva cada avatar con un [Link](/docs/components/link) para que se pueda hacer clic en ellos.

Ejemplo de componente {name="avatar-group-link-example"}

### Con máscara

Envuelva un avatar con una máscara CSS para mostrarlo con una forma personalizada.

Ejemplo de componente {name="avatar-group-mask-example"}

::warning
El `chip` prop no funciona correctamente cuando se utiliza una máscara. Las virutas pueden cortarse dependiendo de la forma de la máscara.
::

@599@@pccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc

@060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

### Escenarios

Componentes de slots

@062 @@ Proyecto

Componente Tema

@@changelog

Categoría: component-changelog
