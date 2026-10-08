---
description: Indicador de un valor numérico o de un estado.
category: element
keywords:
  - notification dot
  - status dot
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Chip.vue
---

@@pH000@@Uso del producto

Envuelva cualquier componente con un chip para mostrar un indicador.

::component-code
---
Categoría: true
Los slots:
  Default:|

    @@ 001 @
---
Botón {icon="i-lucide-mail" color="neutral" variant="subtle"}
::

@000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `color` para cambiar el color del chip.

::component-code
---
Categoría: true
Props:
  Color: Neutral
Los slots:
  Default:|

    @@@ 005 @
---
El botón {icon="i-lucide-mail" color="neutral" variant="subtle"}
::

@0007@Nombre

Utilice el prop `size` para cambiar el tamaño del chip.

::component-code
---
Categoría: true
Props:
  Tamaño: 3XL
Los slots:
  Default:|

    @@ 009 @
---
Botón {icon="i-lucide-mail" color="neutral" variant="subtle"}
::

@111@Texto

Utilice el `text` prop para establecer el texto del chip.

::component-code
---
Categoría: true
Props:
  El texto: 5
  Tamaño: 3XL
Los slots:
  Default:|

    @@@ 013
---
por: u-button {icon="i-lucide-mail" color="neutral" variant="subtle"}
::

@@P015@@Posición

Utilice el prop `position` para cambiar la posición del chip.

::component-code
---
Categoría: true
Props:
  Posición:"izquierda"
Los slots:
  Default:|

    @@@ 17 @
---
por: u-button {icon="i-lucide-mail" color="neutral" variant="subtle"}
::

@1919@@Indeed

Utilice el prop `inset` para mostrar el chip dentro del componente. Esto es útil cuando se trata de componentes redondeados.

::component-code
---
Categoría: true
Props:
  Inserción: True
Los slots:
  Default:|

    @@ 21
---
por: u-avatar {src="https://github.com/benjamincanac.png" loading="lazy"}
::

@230@@independiente.

Utilice el prop `standalone` junto al prop `inset` para mostrar el chip en línea.

::component-code
---
Props:
  Categoría: True
  Inserción: True
---
::

::note
Se utiliza de esta manera en el [`CommandPalette`](/docs/components/command-palette),[`InputMenu`](/docs/components/input-menu),[`Select`](/docs/components/select) o [`SelectMenu`](/docs/components/select-menu) por ejemplo.
::

@@pH046@@Ejemplos

### Visibilidad de control

Puede controlar la visibilidad del chip utilizando el `show` prop.

Ejemplo de componente {name="chip-show-example"}

::note
En este ejemplo, el chip tiene un color por estado y se muestra cuando el estado no es `offline`.
::

@@pH051@@pH051

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes de slots

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Emisiones

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componente Tema

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Categoría: component-changelog
