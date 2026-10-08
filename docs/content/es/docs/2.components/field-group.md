---
title: El FieldGroup
description: Agrupa varios elementos tipo botón juntos.
category: element
keywords:
  - segmented control
  - toggle group
  - button group
  - input group
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/FieldGroup.vue
---

@@pH000@@Uso del producto

Envuelva varios [Button](/docs/components/button) dentro de un FieldGroup para agruparlos juntos.

::component-code
---
Categoría: true
Los slots:
  Default:|

    @@@ 005 @
    @@ 006 @
---
El botón {color="neutral" variant="subtle" label="Button"}
El botón {color="neutral" variant="outline" icon="i-lucide-chevron-down"}
::

@000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `size` para cambiar el tamaño de todos los botones.

::component-code
---
Categoría: true
Props:
  Tamaño: XL
Los slots:
  Default:|

    @@@ 11 @
    @@@ 12 @
---
por: u-button {color="neutral" variant="subtle" label="Button"}
por: u-button {color="neutral" variant="outline" icon="i-lucide-chevron-down"}
::

@@P015@Orientación

Utilice el prop `orientation` para cambiar la orientación de los botones. Predeterminados a `horizontal`.

::component-code
---
Categoría: true
Props:
  Orientación: Vertical
Los slots:
  Default:|

    @@@ 18 @
    @@@ 19 @
---
Botón {color="neutral" variant="subtle" label="Submit"}
Botón {color="neutral" variant="outline" label="Cancel"}
::

@222@Ejemplos

### Con información

Puede utilizar componentes como [Input](/docs/components/input),[InputMenu](),[SelectMenu/docs/components/select)[](/docs/components/select-menu), etc. dentro de un grupo de campos.

::component-code
---
Categoría: true
Los slots:
  Default:|

    @@ 40 @

    @@@ 41 @
---
por: u-input {color="neutral" variant="outline" placeholder="Enter token"}
Botón {color="neutral" variant="subtle" icon="i-lucide-clipboard"}
::

### Con información útil

Puede utilizar un [Tooltip](/docs/components/tooltip) dentro de un grupo de campos.

Ejemplo de componente {name="field-group-tooltip-example"}

### Con el menú desplegable

Puede utilizar un [DropdownMenu](/docs/components/dropdown-menu) dentro de un grupo de campos.

Ejemplo de componente {name="field-group-dropdown-example"}

### Con el logotipo

Puede utilizar un [Badge](/docs/components/badge) dentro de un grupo de campo.

Ejemplo de componente {name="field-group-badge-example"}

@@pH062

@@pH063@@Propuestas

Componentes Props

### Escenarios

Componentes de slots

@065 @@ Proyecto

Componente Tema

@666@changelog

Categoría: component-changelog
