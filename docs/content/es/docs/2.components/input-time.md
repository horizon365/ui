---
title: Tiempo de entrada
description: 'Una entrada para seleccionar un tiempo.'
category: form
keywords:
  - time picker
  - clock
  - hour
links:
  - label: Tiempo Field
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/time-field
  - label: Timelineación
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/time-range-field
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputTime.vue
---

xph0000xUso

Utilice la directiva `v-model` para controlar el tiempo seleccionado.

::component-code
---
cast:
  modelValue: TimeValue
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: [12, 30, 0]
---
::

Utilice el prop `default-value` para establecer el valor inicial cuando no necesite controlar su estado.

::component-code
---
cast:
  defaultValue: TimeValue
ignore:
  - defaultValue
external:
  - defaultValue
props:
  defaultValue: [9, 45, 0]
---
::

::framework-only
#nuxt
:::note{to="/docs/getting-started/integrations/i18n/nuxt#locale"}
Este componente utiliza el paquete `@internationalized/date` para el formato local. El formato de tiempo está determinado por la prop `locale` del componente App.
:::

#vue
:::note{to="/docs/getting-started/integrations/i18n/vue#locale"}
Este componente utiliza el paquete `@internationalized/date` para el formato local. El formato de tiempo está determinado por la prop `locale` del componente App.
:::
::

### Rango en

Utilice el prop `range` para habilitar la selección de rango de tiempo con las horas de inicio y finalización.

::component-code
---
prettier: true
cast:
  modelValue: TimeRangeValue
ignore:
  - range
  - modelValue.start
  - modelValue.end
external:
  - modelValue
props:
  range: true
  modelValue:
    start: [9, 0, 0]
    end: [17, 30, 0]
---
::

Ciclo ### horas

Utilice el prop `hour-cycle` para cambiar el ciclo de hora del InputTime. Defaults a `12`.

::component-code
---
cast:
  defaultValue: TimeValue
ignore:
  - hourCycle
  - defaultValue
external:
  - defaultValue
props:
  hourCycle: 24
  defaultValue: [16, 30, 0]
---
::

### Color (Edición)

Utilice el accesorio `color` para cambiar el color del InputTime.

::component-code
---
props:
  color: neutral
  highlight: true
---
::

::note
El prop `highlight` se utiliza aquí para mostrar el estado de enfoque. Se utiliza internamente cuando se produce un error de validación.
::

### Variante

Utilice el prop `variant` para cambiar la variante de la InputTime.

::component-code
---
props:
  variant: subtle
---
::

### Tamaño

Utilice el prop `size` para cambiar el tamaño del InputTime.

::component-code
---
props:
  size: xl
---
::

### Icon

Utilice el prop `icon` para mostrar un [Icon](/docs/components/icon) dentro del InputTime.

::component-code
---
props:
  icon: 'i-lucide-clock'
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
Puede personalizar este icono globalmente en su `app.config.ts` bajo la tecla `ui.icons.minus`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su Xph110x bajo la tecla Xph111x.
:::
::

### Avatar en Español

Utilice el prop `avatar` para mostrar un [Avatar](/docs/components/avatar) dentro del InputTime.

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

Utilice el accesorio `disabled` para desactivar el InputTime.

::component-code
---
props:
  disabled: true
---
::

## Ejemplos

### Dentro de un campo de formulario

Puede utilizar el InputTime dentro de un componente [FormField](/docs/components/form-field) para mostrar una etiqueta, texto de ayuda, indicador requerido, etc.

::component-example
---
name: 'input-time-form-field-example'
---
::

## API (Edición española)

### Props (accesorios)

:component-props

### Slots en línea

:component-slots

### Emisiones

:component-emits

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
