---
description: Un componente de calendario para seleccionar fechas únicas, fechas múltiples o intervalos de fechas.
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

### Tipo de identificación: badge{label="4.9+" class="align-text-top"}

Utilice el prop `type` para cambiar lo que selecciona el calendario. Predeterminados a `date`.

Al usar `date`, haga clic en el encabezado para cambiar de la vista de día a una vista de mes y luego año para una navegación rápida, luego desplácese hacia abajo para elegir una fecha.

::component-code
---
Cast:
  Categoría: DateValue
Ignora:
  @160000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @@P2017@modelValoración
Externo:
  @@P018@modelValue (Edición española)
Props:
  Tipo: Mes
  Valor de modelo: [2022, 2, 1]
---
::

Utilice `type="year"` para renderizar un selector de año independiente.

::component-code
---
Cast:
  Categoría: DateValue
Ignora:
  @200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  - modelValue (Edición española)
Externo:
  @@2222@22222@2222@2222222012
Props:
  Tipo: Año
  Valor de modelo: [2022, 1, 1]
---
::

@@20023@Multiplicación

Utilice el prop `multiple` para permitir múltiples selecciones.

::component-code
---
Categoría: true
Cast:
  Valoración: DateValue []
Ignora:
  @@25000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  - modelValue (Edición española)
Externo:
  @@P200@modelValoría27
Props:
  Multiplicación: True
  [[2022, 2, 4]],[2022, 2, 6],[2022, 2, 8]]
---
::

@@28000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `range` para seleccionar un rango de fechas.

::component-code
---
Categoría: true
Cast:
  Categoría: DateRange
Ignora:
  @@pH030@@ranges
  - modelValue.start
  - modelValue.end
Externo:
  - modelValue (Edición española)
Props:
  Rango: Verdad
  Modelación:
    Inicio: [2022, 2, 3]
    Año:[2022, 2, 20]
---
::

El prop `range` también funciona con `type="month"` y `type="year"`, lo que le permite seleccionar un rango de meses o años.

::component-code
---
Categoría: true
Cast:
  Categoría: DateRange
Ignora:
  @@pH037@tipo
  @388@@range@range.es
  - modelValue.start
  - modelValue.end
Externo:
  - modelValue (Edición española)
Props:
  Tipo: Mes
  Rango: Verdad
  Modelación:
    Inicio: [2022, 2, 1]
    Año:[2022, 6, 1]
---
::

### Número de meses

Utilice el prop `numberOfMonths` para cambiar el número de meses en el calendario.

::component-code
---
Props:
  Numero de meses: 3
---
::

### Mes de control

Utilice el prop `month-controls` para mostrar los controles de mes. Predeterminados a `true`.

::component-code
---
Props:
  Controles mensuales: Falso
---
::

Utilice los accesorios `prev-month` y `next-month` para anular los botones del mes.

::component-code
---
Categoría: true
Ignora:
  - prevMonth.color
  - prevMonth.variante
  - nextMonth.color
  - nextMonth.variante
Props:
  Prevón:
    Color: Primario
    Categoría: Soft
  nextAño:
    Color: Primario
    Categoría: Soft
---
::

### Año Controles

Utilice el prop `year-controls` para mostrar los controles de año. Predeterminados a `true`.

::component-code
---
Props:
  añoControles: falso
---
::

Utilice los props `prev-year` y `next-year` para anular los botones de año.

::component-code
---
Categoría: true
Ignora:
  - prevYear.color
  - prevYear.variante
  @@nextyear.color
  - nextYear.variante
Props:
  Prevén:
    Color: Primario
    Categoría: Soft
  nextAño:
    Color: Primario
    Categoría: Soft
---
::

### Control de visualización: badge{label="4.9+" class="align-text-top"}

Utilice el prop `view-control` para hacer que el encabezado sea un botón que cambie entre las vistas de día, mes y año.

::component-code
---
Items:
  ViewControl:
    @666@verdad
    @@fx067@false
Props:
  Control de visión: False
---
::

Configure el prop `view-control` en un objeto para anular el botón de encabezado.

::component-code
---
Categoría: true
Ignora:
  - viewControl.color (en inglés)
  - viewControl.variante
Props:
  ViewControl:
    Color: Primario
    Categoría: Soft
---
::

### Semanas fijas

Utilice el prop `fixed-weeks` para mostrar el calendario con semanas fijas.

::component-code
---
Props:
  Fijaciones: Falso
---
::

### Números de la semana: badge{label="4.4+" class="align-text-top"}

Utilice el prop `week-numbers` para mostrar los números de la semana en el calendario.

::component-code
---
Props:
  Semanario: Verdad
  Fijación: true
---
::

@766@color

Utilice el prop `color` para cambiar el color del calendario.

::component-code
---
Cast:
  Valoración: DateRange
Escondido:
  @788@@range@range.es
  @@pH079@defaultValue (en inglés)
  @@ph080@@defaultValue.start
  - defaultValue.end
Props:
  Color: Neutral
  Rango: Verdad
  Valoración Default:
    Inicio: [2022, 2, 3]
    Año:[2022, 2, 20]
---
::

@@2008@Variación

Utilice el prop `variant` para cambiar la variante del calendario.

::component-code
---
Cast:
  Nombre: DateRange
Escondido:
  @@84000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @@pH085@@defaultValue
  - defaultValue.start
  - defaultValue.end
Props:
  Variación: Sutil
  Rango: Verdad
  Valoración Default:
    Inicio: [2022, 2, 3]
    Año:[2022, 2, 20]
---
::

@@888@Nombre

Utilice el prop `size` para cambiar el tamaño del calendario.

::component-code
---
Props:
  Tamaño: XL
---
::

### Desactivado

Utilice el prop `disabled` para desactivar el calendario.

::component-code
---
Props:
  Discapacidad: Verdadero
---
::

@@pH092@Ejemplos

### Con eventos de chip

Utilice el componente [Chip](/docs/components/chip) para agregar eventos a días específicos.

::component-example
---
Nombre: 'calendario-eventos-ejemplo'
---
::

### Con fechas deshabilitadas

Utilice el prop `is-date-disabled` con una función para marcar fechas específicas como deshabilitadas. Cuando utilice `type="month"` o `type="year"`, utilice el prop `is-month-disabled` o `is-year-disabled` en su lugar.

::component-example
---
Nombre: 'calendar-disabled-date-example'
---
::

### Con fechas no disponibles

Utilice el prop `is-date-unavailable` con una función para marcar fechas específicas como no disponibles. Cuando utilice `type="month"` o `type="year"`, utilice el prop `is-month-unavailable` o `is-year-unavailable` en su lugar.

::component-example
---
Nombre: 'calendar-unavailable-date-example'
---
::

### Con fechas min/max

Utilice los props `min-value` y `max-value` para limitar las fechas.

::component-example
---
Name: 'calendar-min-max-dates-example'
---
::

### Con otros sistemas de calendario

You can use other calendars from `@internationalized/date` to implement a different calendar system.

::component-example
---
nombre: 'calendario-otro-sistema-ejemplo'
---
::

::note{to="https://react-spectrum.adobe.com/internationalized/date/Calendar.html#implementations"}
Puedes consultar todos los calendarios disponibles en `@internationalized/date` docs.
::

### Con control externo

Puede controlar el calendario con controles externos mediante la manipulación de la fecha pasada en el `v-model`.

::component-example
---
Nombre: 'calendario-externo-controls-ejemplo'
---
::

### Con fecha de hoy

Utilice la función `today` de `@internationalized/date` con `getLocalTimeZone` para establecer el valor a la fecha actual.

::component-example
---
Nombre: 'calendario-hoy-ejemplo'
---
::

### Como selector de fecha

Utilice un [Button](/docs/components/button) y un [Popover](/docs/components/popover) para crear un selector de fecha.

::component-example
---
Nombre: 'calendar-date-picker-ejemplo'
---
::

### Como selector de rango de fechas

Utilice un componente [Button](/docs/components/button) y un componente [Popover](/docs/components/popover) para crear un selector de rango de fechas con rangos preestablecidos.

::component-example
---
Nombre del archivo: 'calendar-date-range-picker-example'
---
::

@@pH140

@141@141@141

Componentes Props

@@ph142@@esencias

Componentes de slots

@@143@143@143

Componentes Emisiones

@144 @@ Proyecto

Componente Tema

@145@Changelog (Edición española)

Categoría: component-changelog
