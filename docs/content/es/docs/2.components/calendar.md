---
description: Un componente de calendario para seleccionar fechas únicas, fechas múltiples o rangos de fechas.
category: element
keywords:
  - date picker
  - datepicker
  - schedule
links:
  - label: calendario
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/calendar
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Calendar.vue
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

Nombre del usuario: badge{label="4.9+" class="align-text-top"}

Utilice el prop `type` para cambiar lo que el calendario selecciona. Predeterminados a `date`.

Al usar `date`, haga clic en el encabezado para cambiar de la vista de día a una vista de mes y luego de año para una navegación rápida, luego desplácese hacia abajo para elegir una fecha.

::component-code
---
cast:
  modelValue: DateValue
ignore:
  - type
  - modelValue
external:
  - modelValue
props:
  type: month
  modelValue: [2022, 2, 1]
---
::

Use `type="year"` para renderizar un selector de año independiente.

::component-code
---
cast:
  modelValue: DateValue
ignore:
  - type
  - modelValue
external:
  - modelValue
props:
  type: year
  modelValue: [2022, 1, 1]
---
::

### Multiplicación.

Utilice el prop `multiple` para permitir múltiples selecciones.

::component-code
---
prettier: true
cast:
  modelValue: DateValue[]
ignore:
  - multiple
  - modelValue
external:
  - modelValue
props:
  multiple: true
  modelValue: [[2022, 2, 4], [2022, 2, 6], [2022, 2, 8]]
---
::

### Rango

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

El prop `range` también funciona con `type="month"` y `type="year"`, lo que le permite seleccionar un rango de meses o años.

::component-code
---
prettier: true
cast:
  modelValue: DateRange
ignore:
  - type
  - range
  - modelValue.start
  - modelValue.end
external:
  - modelValue
props:
  type: month
  range: true
  modelValue:
    start: [2022, 2, 1]
    end: [2022, 6, 1]
---
::

### Número de meses

Utilice el prop `numberOfMonths` para cambiar el número de meses en el calendario.

::component-code
---
props:
  numberOfMonths: 3
---
::

Controles XPH117XMonth

Utilice el prop `month-controls` para mostrar los controles del mes.

::component-code
---
props:
  monthControls: false
---
::

Utilice los accesorios `prev-month` y `next-month` para anular los botones de mes.

::component-code
---
prettier: true
ignore:
  - prevMonth.color
  - prevMonth.variant
  - nextMonth.color
  - nextMonth.variant
props:
  prevMonth:
    color: primary
    variant: soft
  nextMonth:
    color: primary
    variant: soft
---
::

Controles XPH141XYear

Utilice el prop `year-controls` para mostrar los controles de año.

::component-code
---
props:
  yearControls: false
---
::

Utilice los accesorios `prev-year` y `next-year` para anular los botones de año.

::component-code
---
prettier: true
ignore:
  - prevYear.color
  - prevYear.variant
  - nextYear.color
  - nextYear.variant
props:
  prevYear:
    color: primary
    variant: soft
  nextYear:
    color: primary
    variant: soft
---
::

Control de vista ### View: badge{label="4.9+" class="align-text-top"}

Utilice el prop `view-control` para hacer que el encabezado sea un botón que cambie entre las vistas de día, mes y año.

::component-code
---
items:
  viewControl:
    - true
    - false
props:
  viewControl: false
---
::

Configure el accesorio `view-control` en un objeto para anular el botón de encabezado.

::component-code
---
prettier: true
ignore:
  - viewControl.color
  - viewControl.variant
props:
  viewControl:
    color: primary
    variant: soft
---
::

### Semanas fijas

Utilice el accesorio `fixed-weeks` para mostrar el calendario con semanas fijas.

::component-code
---
props:
  fixedWeeks: false
---
::

Números de la semana ### : badge{label="4.4+" class="align-text-top"}

Utilice el accesorio `week-numbers` para mostrar los números de la semana en el calendario.

::component-code
---
props:
  weekNumbers: true
  fixedWeeks: true
---
::

### Color (Edición)

Utilice el accesorio `color` para cambiar el color del calendario.

::component-code
---
cast:
  defaultValue: DateRange
hide:
  - range
  - defaultValue
  - defaultValue.start
  - defaultValue.end
props:
  color: neutral
  range: true
  defaultValue:
    start: [2022, 2, 3]
    end: [2022, 2, 20]
---
::

### Variante (Versión)

Utilice el accesorio `variant` para cambiar la variante del calendario.

::component-code
---
cast:
  defaultValue: DateRange
hide:
  - range
  - defaultValue
  - defaultValue.start
  - defaultValue.end
props:
  variant: subtle
  range: true
  defaultValue:
    start: [2022, 2, 3]
    end: [2022, 2, 20]
---
::

### Tamaño

Utilice el prop `size` para cambiar el tamaño del calendario.

::component-code
---
props:
  size: xl
---
::

### Desactivado

Utilice el accesorio `disabled` para desactivar el calendario.

::component-code
---
props:
  disabled: true
---
::

## Ejemplos

### Con eventos de chip

Utilice el componente [Chip](/docs/components/chip) para agregar eventos a días específicos.

::component-example
---
name: 'calendar-events-example'
---
::

### Con fechas desactivadas

Utilice el accesorio `is-date-disabled` con una función para marcar fechas específicas como deshabilitadas. Cuando utilice `type="month"` o `type="year"`, utilice el accesorio `is-month-disabled` o `is-year-disabled` en su lugar.

::component-example
---
name: 'calendar-disabled-dates-example'
---
::

### Con fechas no disponibles

Utilice el accesorio `is-date-unavailable` con una función para marcar fechas específicas como no disponibles. Cuando utilice `type="month"` o `type="year"`, utilice el accesorio `is-month-unavailable` o `is-year-unavailable` en su lugar.

::component-example
---
name: 'calendar-unavailable-dates-example'
---
::

### Con fechas min/max

Utilice los accesorios `min-value` y `max-value` para limitar las fechas.

::component-example
---
name: 'calendar-min-max-dates-example'
---
::

###  Con otros sistemas de calendario

Puede utilizar otros calendarios de `@internationalized/date` para implementar un sistema de calendario diferente.

::component-example
---
name: 'calendar-other-system-example'
---
::

::note{to="https://react-spectrum.adobe.com/internationalized/date/Calendar.html#implementations"}
Puede consultar todos los calendarios disponibles en `@internationalized/date` docs.
::

### Con controles externos

Puede controlar el calendario con controles externos mediante la manipulación de la fecha pasada en el `v-model`.

::component-example
---
name: 'calendar-external-controls-example'
---
::

### Con la fecha de hoy

Utilice la función `today` de `@internationalized/date` con `getLocalTimeZone` para establecer el valor a la fecha actual.

::component-example
---
name: 'calendar-today-example'
---
::

### As un selector de fechas

Utilice un componente [Button](/docs/components/button) y un componente [Popover](/docs/components/popover) para crear un selector de fecha.

::component-example
---
name: 'calendar-date-picker-example'
---
::

### As un selector de rango de fechas

Utilice un componente [Button](/docs/components/button) y un componente [Popover](/docs/components/popover) para crear un selector de rango de fechas con rangos preestablecidos.

::component-example
---
name: 'calendar-date-range-picker-example'
---
::

## API (Edición española)

### Props (Edición española)

:component-props

### Slots en línea

:component-slots

### Emisiones

:component-emits

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
