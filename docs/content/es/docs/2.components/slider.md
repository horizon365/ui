---
description: Una entrada para seleccionar un valor numérico dentro de un rango.
category: form
keywords:
  - range slider
links:
  - label: El slider
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/slider
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Slider.vue
---

@@pH000@@Uso del producto

Utilice la directiva `v-model` para controlar el valor del deslizador.

::component-code
---
Externo:
  - modelValoración
Props:
  Modelos: 50
---
::

Utilice la prop `default-value` para establecer el valor inicial cuando no necesite controlar su estado.

::component-code
---
Ignora:
  @@pH004@@defaultValue
Props:
  Deficiencias: 50
---
::

::tip
Utilice `aria-label` o `aria-labelledby` para nombrar un solo deslizador de pulgar, se reenvían al pulgar que es el elemento con el rol `slider`.

Los pulgares de un deslizador de múltiples pulgares se nombran por su posición para que puedan ser separados,`Minimum`/`Maximum` para dos pulgares y `Value n of m` para tres o más. Esos nombres se mantienen, y un `aria-label` nombra al deslizador como un todo a través de un rol `group` en la raíz en lugar de repetirse en cada pulgar.
::

@@M13@Min/Max (en español)

Utilice los props `min` y `max` para establecer los valores mínimos y máximos del deslizador. Predeterminados a `0` y `100`.

::component-code
---
Ignora:
  @@pH018@defaultValue (en inglés)
Props:
  Mínimo: 0
  Cantidad: 50
  Deficiencias: 50
---
::

@19190@@paso

Utilice la prop `step` para establecer el valor de incremento del Slider. Defaults a `1`.

::component-code
---
Ignora:
  @@222@@ValoridadDeficiente
Props:
  Pasos: 10
  Deficiencias: 50
---
::

@@20023@Multiplicación

Utilice la directiva `v-model` o la prop `default-value` con una matriz de valores para crear un deslizador de rango.

::component-code
---
Ignora:
  - modelValue (Edición española)
Externo:
  @@P200@modelValoría27
Props:
  El modelo [25, 75]
---
::

Utilice el prop `min-steps-between-thumbs` para limitar la distancia mínima entre los pulgares.

::component-code
---
Ignora:
  @@20029@modelValoración
Externo:
  - modelValue (Edición española)
Props:
  Valor de los modelos: [25, 50, 75]
  minStepsBetweenThumbs: 10 puntos
---
::

### Orientación

Utilice el prop `orientation` para cambiar la orientación del Slider. Defaults a `horizontal`.

::component-code
---
Ignora:
  @@pH034@defaultValue (en inglés)
  @35@clase
Props:
  Orientación: Vertical
  Deficiencias: 50
  Categoría: H-48
---
::

@36@color

Utilice el prop `color` para cambiar el color del deslizador.

::component-code
---
Ignora:
  @@pH038@defaultValue (en inglés)
Props:
  Color: Neutro
  Deficiencias: 50
---
::

@@pH039@@Tamaño

Utilice el prop `size` para cambiar el tamaño del deslizador.

::component-code
---
Ignora:
  @@pH041@@defaultValue
Props:
  Tamaño: xl
  Deficiencias: 50
---
::

@42@ToolTip

Utilice el prop `tooltip` para mostrar un [Tooltip](/docs/components/tooltip) alrededor de los pulgares del deslizador con el valor actual. Puede configurarlo en `true` para el comportamiento predeterminado o pasar un objeto para personalizarlo con cualquier propiedad del componente [tipTool](/docs/components/tooltip#props).

::component-code
---
Ignora:
  @@pH053@@defaultValue
  @@pH054@tooltip (en inglés)
Props:
  Deficiencias: 50
  tooltip: Verdad
---
::

@@5000@@desactivado

Utilice el prop `disabled` para desactivar el deslizador.

::component-code
---
Ignora:
  @@pH057@defaultValue (en inglés)
Props:
  Discapacidad: Verdadero
  Deficiencias: 50
---
::

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `inverted` para invertir visualmente el deslizador.

::component-code
---
Ignora:
  @@pH060@defaultValue (en inglés)
Props:
  Invertido: verdadero
  Deficiencias: 25
---
::

@@pH061

@@pH062@@Propuestas

Componentes Props

@@pH063@@Emisiones

Componentes Emisiones

@064 @@ Proyecto

Componente Tema

@@changelog

Categoría: component-changelog
