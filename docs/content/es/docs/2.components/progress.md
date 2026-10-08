---
description: Un indicador que muestra el progreso de una tarea.
category: element
keywords:
  - progress bar
  - loading bar
  - meter
links:
  - label: El progreso
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/progress
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Progress.vue
---

@@pH000@@Uso del producto

Utilice la directiva `v-model` para controlar el valor de la Progress.

::component-code
---
Externo:
  - modelValoración
Props:
  Modelos: 50
---
::

::note
Utilice el componente [`ProgressGroup`](/docs/components/progress-group) para dividir una sola barra en varios segmentos que se suman a un total.
::

@008@008@008

Utilice el prop `max` para establecer el valor máximo del progreso.

::component-code
---
Externo:
  @@P0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Modelos: 3
  Max: cuatro
---
::

Utilice el prop `max` con una matriz de cadenas para mostrar el paso activo debajo de la barra, el valor máximo del progreso es la longitud de la matriz.

::component-code
---
Categoría: true
Ignora:
  @120000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externo:
  - modelValue (Edición española)
Props:
  Modelos: 3
  Max:
    @@pH014 @@"En espera"
    - 'Clonación...'
    - 'La migración...'
    - 'Despliegue...'
    - "¡ Ya está!"
---
::

@19@@Estado

Utilice el prop `status` para mostrar el valor de progreso actual por encima de la barra.

::component-code
---
Externo:
  - modelValue (Edición española)
Props:
  Modelos: 50
  Estado: Verdadero
---
::

::tip
El estado rastrea el final de la barra, utilice `:ui="{ status: 'w-full' }"` para que abarque todo el ancho.
::

@@23@indeterminado

Cuando no se establece `v-model` o el valor es `null`, el progreso se convierte en_indeterminate_. La barra de progreso se anima como un `carousel`, pero puede cambiarla utilizando el [`animation`](#animationprop.

::component-code
---
Externo:
  - modelValue (Edición española)
Props:
  Modalidad: NULL
---
::

@@33@animación

Utilice el prop `animation` para cambiar la animación del progreso a un carrusel inverso, una barra oscilante o una barra elástica.

::component-code
---
Props:
  Animación: Swing
---
::

::tip
La animación se deshabilita automáticamente cuando el usuario prefiere un movimiento reducido, la barra indeterminada se muestra como un pulso de ancho completo en su lugar.
::

### Orientación

Utilice el prop `orientation` para cambiar la orientación del Progress. Defaults a `horizontal`.

::component-code
---
Ignora:
  @@39@clase
Props:
  Orientación: Vertical
  Categoría: H-48
---
::

@@pH040@color

Utilice el prop `color` para cambiar el color del Progreso.

::component-code
---
Props:
  Color: Neutro
---
::

::tip
Este accesorio también acepta cualquier valor de color CSS para paletas fuera del tema.
::

@@42000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `size` para cambiar el tamaño del Progreso.

::component-code
---
Props:
  Tamaño: XL
---
::

@@444@444@4444

Utilice el prop `inverted` para invertir visualmente el progreso.

::component-code
---
Props:
  Invertido: verdadero
  Modelos: 25
---
::

@4666 @ Vía

@@40000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

@@488@4888

Componentes de slots

@499@4999

Componentes Emisiones

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componente Tema

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Categoría: component-changelog
