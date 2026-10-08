---
title: Inputación
description: 'Un componente de entrada para la selección de fechas.'
category: form
keywords:
  - date picker
  - datepicker
  - calendar input
links:
  - label: Datafield
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/date-field
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputDate.vue
---

@@pH000@@Uso del producto

Utilice la directiva `v-model` para controlar la fecha seleccionada.

::component-code
---
Cast:
  Categoría: DateValue
Ignora:
  - modelValoración
Externo:
  - modelValue (Edición española)
Props:
  Valor de la imagen: [2022, 2, 3]
---
::

Utilice la prop `default-value` para establecer el valor inicial cuando no necesite controlar su estado.

::component-code
---
Cast:
  Valoración: DateValue
Ignora:
  @@pH005@@defaultValue
Externo:
  @@pH006@defaultValue (en inglés)
Props:
  defaultValue: [2022, 2, 6]
---
::

::framework-only
#Nuxidad
:::note{to="/docs/getting-started/integrations/i18n/nuxt#locale"}
Este componente utiliza el paquete `@internationalized/date` para el formato local. El formato de fecha está determinado por la prop `locale` del componente App.
:::

#vista
:::note{to="/docs/getting-started/integrations/i18n/vue#locale"}
Este componente utiliza el paquete `@internationalized/date` para el formato local. El formato de fecha está determinado por la prop `locale` del componente App.
:::
::

@111@1111

Utilice el prop `range` para seleccionar un rango de fechas.

::component-code
---
Categoría: true
Cast:
  Categoría: DateRange
Ignora:
  @@13000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  - modelValue.start
  - modelValue.end
Externo:
  @@P016@modelValue (Edición española)
Props:
  Rango: Verdad
  Modelación:
    Inicio: [2022, 2, 3]
    Año:[2022, 2, 20]
---
::

@17@color

Utilice el prop `color` para cambiar el color de la fecha de entrada.

::component-code
---
Props:
  Color: Neutral
  Destacado: Verdadero
---
::

@19@Variación

Utilice el prop `variant` para cambiar la variante de la fecha de entrada.

::component-code
---
Props:
  Variación: Sutil
---
::

@@21@2012

Utilice el prop `size` para cambiar el tamaño de la fecha de entrada.

::component-code
---
Props:
  Tamaño: xl
---
::

@@23@Icon

Utilice el prop `icon` para mostrar un [Icon](/docs/components/icon) dentro de la fecha de entrada.

::component-code
---
Props:
  icono: 'i-lucide-calendar'
---
::

::note
Utilice los accesorios `leading` y `trailing` para establecer la posición del icono o los accesorios `leading-icon` y `trailing-icon` para establecer un icono diferente para cada posición.
::

### Separador Icono

Utilice el prop `separator-icon` para cambiar el [Icon](/docs/components/icon) del separador de rango.

::component-code
---
Ignora:
  @@40000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Rango: Verdad
  separatorIcono: 'i-lucide-arrow-right'
---
::

::framework-only
#Nuxidad
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono de forma global en su `app.config.ts` bajo la tecla `ui.icons.minus`.
:::

#vista
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su `vite.config.ts` bajo la tecla `ui.icons.minus`.
:::
::

@@40000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `avatar` para mostrar un [Avatar](/docs/components/avatar) dentro de la fecha de entrada.

::component-code
---
Categoría: true
Ignora:
  - avatar.carga
Props:
  El avatar:
    src: 'https://github.com/vuejs.png'
    Categoría: Lazy
  Tamaño: MD
  Categoría: Outline
---
::

### Desactivado

Utilice el prop `disabled` para desactivar la fecha de entrada.

::component-code
---
Props:
  Discapacidad: Verdadero
---
::

@@P054@Ejemplos

### Con fecha no disponible

Utilice el prop `is-date-unavailable` con una función para marcar fechas específicas como no disponibles.

::component-example
---
Nombre: 'input-date-unavailable-dates-example'
---
::

### Con fechas min/max

Utilice los props `min-value` y `max-value` para limitar las fechas.

::component-example
---
Nombre: 'input-date-min-max-dates-ejemplo'
---
::

### Como selector de fecha

Utilice un [Calendar](/docs/components/calendar) y un [Popover](/docs/components/popover) para crear un selector de fechas.

::component-example
---
Nombre: 'input-date-date-picker-example'
---
::

### Como un selector de rango de fecha

Utilice un [Calendar](/docs/components/calendar) y un [Popover](/docs/components/popover) para crear un selector de rango de fechas.

::component-example
---
Nombre: 'input-date-date-range-picker-example'
---
::

@@78800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

@@70000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

@800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes de slots

@081@081@081

Componentes Emisiones

@082@@Proyecto

Componente Tema

@083@Changelog (Edición española)

Categoría: component-changelog
