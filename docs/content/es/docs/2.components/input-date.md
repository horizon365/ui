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

xph0000xUso

Utilice la directiva `v-model` para controlar la fecha seleccionada.

::component-code
---
cast:
  modelValue: DateValue
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: [2022, 2, 3]
---
::

Utilice el prop `default-value` para establecer el valor inicial cuando no necesite controlar su estado.

::component-code
---
cast:
  defaultValue: DateValue
ignore:
  - defaultValue
external:
  - defaultValue
props:
  defaultValue: [2022, 2, 6]
---
::

::framework-only
#nuxt
:::note{to="/docs/getting-started/integrations/i18n/nuxt#locale"}
Este componente utiliza el paquete `@internationalized/date` para el formato local. El formato de fecha está determinado por la prop `locale` del componente App.
:::

#vue
:::note{to="/docs/getting-started/integrations/i18n/vue#locale"}
Este componente utiliza el paquete `@internationalized/date` para el formato local. El formato de fecha está determinado por la prop `locale` del componente App.
:::
::

### Rango en

Utilice el prop `range` para seleccionar un rango de fechas.

::component-code
---
prettier: true
cast:
  modelValue: DateRange
ignore:
  - range
  - modelValue.start
  - modelValue.end
external:
  - modelValue
props:
  range: true
  modelValue:
    start: [2022, 2, 3]
    end: [2022, 2, 20]
---
::

### Color (Edición)

Utilice el prop `color` para cambiar el color de la fecha de entrada.

::component-code
---
props:
  color: neutral
  highlight: true
---
::

### Variante

Utilice el prop `variant` para cambiar la variante de la fecha de entrada.

::component-code
---
props:
  variant: subtle
---
::

### Tamaño

Utilice el prop `size` para cambiar el tamaño de la fecha de entrada.

::component-code
---
props:
  size: xl
---
::

### Icon

Utilice el prop `icon` para mostrar un [Icon](/docs/components/icon) dentro de la fecha de entrada.

::component-code
---
props:
  icon: 'i-lucide-calendar'
---
::

::note
Utilice los accesorios `leading` y `trailing` para establecer la posición del icono o los accesorios `leading-icon` y `trailing-icon` para establecer un icono diferente para cada posición.
::

### Separador Icono

Utilice la prop `separator-icon` para cambiar el [Icon](/docs/components/icon) del separador de rango.

::component-code
---
ignore:
  - range
props:
  range: true
  separatorIcon: 'i-lucide-arrow-right'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono de forma global en su `app.config.ts` bajo la tecla `ui.icons.minus`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su `vite.config.ts` bajo la tecla `ui.icons.minus`.
:::
::

### Avatar en Español

Utilice el prop `avatar` para mostrar un [Avatar](/docs/components/avatar) dentro de la fecha de entrada.

::component-code
---
prettier: true
ignore:
  - avatar.loading
props:
  avatar:
    src: 'https://github.com/vuejs.png'
    loading: lazy
  size: md
  variant: outline
---
::

### Desactivado

Utilice el prop `disabled` para desactivar la fecha de entrada.

::component-code
---
props:
  disabled: true
---
::

## Ejemplos

### Con fechas no disponibles

Utilice el accesorio `is-date-unavailable` con una función para marcar fechas específicas como no disponibles.

::component-example
---
name: 'input-date-unavailable-dates-example'
---
::

### Con fechas min/max

Utilice los accesorios `min-value` y `max-value` para limitar las fechas.

::component-example
---
name: 'input-date-min-max-dates-example'
---
::

### Como un selector de fechas

Utilice un componente [Calendar](/docs/components/calendar) y un componente [Popover](/docs/components/popover) para crear un selector de fecha.

::component-example
---
name: 'input-date-date-picker-example'
---
::

### As un selector de rango de fechas

Utilice un componente [Calendar](/docs/components/calendar) y un componente [Popover](/docs/components/popover) para crear un selector de rango de fechas.

::component-example
---
name: 'input-date-date-range-picker-example'
---
::

## API (Edición española)

### Props (accesorios)

:component-props

### Slots

:component-slots

### Emisiones

:component-emits

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
