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

@@pH000@@Uso del producto

Utilice la directiva `v-model` para controlar la hora seleccionada.

::component-code
---
Cast:
  Categoría: TimeValue
Ignora:
  - modelValoración
Externo:
  - modelValue (Edición española)
Props:
  Valoración:[12, 30, 0]
---
::

Utilice la prop `default-value` para establecer el valor inicial cuando no necesite controlar su estado.

::component-code
---
Cast:
  Valor por defecto: TimeValue
Ignora:
  @@pH005@@defaultValue
Externo:
  @@pH006@defaultValue (en inglés)
Props:
  Valor por defecto: [9, 45, 0]
---
::

::framework-only
#Nuxidad
:::note{to="/docs/getting-started/integrations/i18n/nuxt#locale"}
Este componente utiliza el paquete `@internationalized/date` para el formato local. El formato de tiempo está determinado por el prop `locale` del componente App.
:::

#vista
:::note{to="/docs/getting-started/integrations/i18n/vue#locale"}
Este componente utiliza el paquete `@internationalized/date` para el formato local. El formato de tiempo está determinado por el prop `locale` del componente App.
:::
::

@111@1111

Utilice el prop `range` para habilitar la selección de rango de tiempo con las horas de inicio y finalización.

::component-code
---
Categoría: true
Cast:
  Categoría: TimeRangeValue
Ignora:
  @@13000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  - modelValue.start
  - modelValue.end
Externo:
  @@P016@modelValue (Edición española)
Props:
  Rango: Verdad
  Modelación:
    Inicio: [9, 0, 0]
    por ejemplo: [17, 30, 0]
---
::

### Ciclo de la hora

Utilice el prop `hour-cycle` para cambiar el ciclo de horas de la InputTime. Defaults a `12`.

::component-code
---
Cast:
  Valor por defecto: TimeValue
Ignora:
  @200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @@pH021@@defaultValue
Externo:
  @@222@@ValoridadDeficiente
Props:
  Horario: 24
  Valor por defecto: [16, 30, 0]
---
::

@@23@color

Utilice el prop `color` para cambiar el color de la InputTime.

::component-code
---
Props:
  Color: Neutro
  Destacado: Verdadero
---
::

::note
El `highlight` prop se utiliza aquí para mostrar el estado de enfoque. Se utiliza internamente cuando se produce un error de validación.
::

@@26@Variación

Utilice el prop `variant` para cambiar la variante de la InputTime.

::component-code
---
Props:
  Variación: Sutil
---
::

@@28000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `size` para cambiar el tamaño de la InputTime.

::component-code
---
Props:
  Tamaño: xl
---
::

@@pH030@Icon

Utilice el prop `icon` para mostrar un [Icon](/docs/components/icon) dentro del InputTime.

::component-code
---
Props:
  Icono: 'i-lucide-clock'(reloj)
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
  @474@@range47
Props:
  Rango: Verdad
  separatorIcono: 'i-lucide-arrow-right'
---
::

::framework-only
#nuxidad
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono de forma global en su `app.config.ts` bajo la tecla `ui.icons.minus`.
:::

#vista
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su `vite.config.ts` bajo la tecla `ui.icons.minus`.
:::
::

@@2015@Avatar

Utilice el prop `avatar` para mostrar un [Avatar](/docs/components/avatar) dentro del InputTime.

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

@@59@@desactivado

Utilice el prop `disabled` para desactivar el InputTime.

::component-code
---
Props:
  Discapacitados: Verdadero
---
::

@@ph061@@Ejemplos

### Dentro de un campo de formato

Puede utilizar el InputTime dentro de un componente [FormField](/docs/components/form-field) para mostrar una etiqueta, texto de ayuda, indicador requerido, etc.

::component-example
---
Nombre: 'input-time-form-field-example'
---
::

@@pH067

@068@068@068

Componentes Props

@@pH069@@espanol

Componentes de slots

@070000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Emisiones

@71@@tema

Componente Tema

@2017@Changelog

Categoría: component-changelog
