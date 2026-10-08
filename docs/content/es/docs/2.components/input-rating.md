---
title: inputación
description: Un componente para mostrar y recopilar calificaciones de los usuarios.
category: form
keywords:
  - star rating
  - stars
links:
  - label: Calificación
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/rating
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputRating.vue
---

@@pH000@@Uso del producto

Utilice la directiva `v-model` para controlar el valor de clasificación del componente InputRating.

::component-code
---
Externo:
  - modelValoración
Props:
  Modelos: 3
---
::

Utilice la prop `default-value` para establecer el valor inicial cuando no necesite controlar su estado.

::component-code
---
Ignora:
  @@pH004@@defaultValue
Props:
  Valoración: 3
---
::

@0005@@paso

Utilice el prop `step` para controlar la granularidad de cada estrella. Póngalo en `0.5` para permitir calificaciones de media estrella.

::component-code
---
Ignora:
  @@pH008@defaultValue (en inglés)
Props:
  Escalón: 0.5
  Valoración: 3.5
---
::

@0009@0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `length` para establecer el número de estrellas. Predeterminados a `5`.

::component-code
---
Ignora:
  @@pH012@defaultValue (en inglés)
Props:
  longitud: 10
  Escalón: 0.5
  Valor por defecto: 7.5
---
::

@@13000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `clearable` para permitir a los usuarios borrar la calificación haciendo clic en el valor seleccionado actualmente.

::component-code
---
Ignora:
  @@pH016@defaultValue (en inglés)
Props:
  Aclaración: True
  Valoración: 3
---
::

@17000@170000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `hoverable` para controlar si la calificación previsualiza el valor cuando se cierne sobre las estrellas.

::component-code
---
Ignora:
  @@pH020@@defaultValue (en inglés)
Props:
  Hovable: Verdad
  Valoración: 3
---
::

@21@Icono

Utilice el prop `icon` para personalizar el icono utilizado para las estrellas.

::component-code
---
Ignora:
  @@pH024@@defaultValue
Props:
  Icono: 'i-lucide-heart'(en inglés)
  Valoración: 4
---
::

::framework-only
#nuxidad
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar el icono de estrella predeterminado a nivel mundial en su `app.config.ts` bajo la tecla `ui.icons.star`.
:::

#vista
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar el icono de estrella predeterminado a nivel mundial en su `vite.config.ts` bajo la tecla `ui.icons.star`.
:::
::

### Empty Icon (Edición española)

Utilice el prop `empty-icon` para personalizar el icono utilizado para las estrellas vacías. Si no se proporciona, utilice el mismo icono que `icon`.

::component-code
---
Ignora:
  @@pH032@defaultValue (en inglés)
Props:
  emptyIcon: 'i-lucide-circle'
  Icono: 'i-lucide-circle-check'
  Valoración: 3
---
::

@333@color

Utilice el prop `color` para cambiar el color de las estrellas llenas.

::component-code
---
Ignora:
  @@pH035@@defaultValue
Props:
  Color: Neutral
  Valoración: 4
---
::

@366@366.

Utilice el prop `size` para cambiar el tamaño de las estrellas.

::component-code
---
Ignora:
  @@pH038@defaultValue (en inglés)
Items:
  Tamaño:
    @@pH039 @@
    @400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    @@pH041
    @42@lgr
    @@43@xl
Props:
  Tamaño: xl
  Valoración: 4
---
::

@@444@Dirección

Utilice el prop `orientation` para cambiar la orientación de la clasificación. Predeterminados a `horizontal`.

::component-code
---
Ignora:
  @@pH047@defaultValue (en inglés)
Props:
  Orientación: Vertical
  Valoración: 4
---
::

### Desactivado

Utilice el prop `disabled` para desactivar el componente InputRating. Cuando está desactivado, el componente ha reducido la opacidad (75%) y muestra un cursor `not-allowed` para indicar que no es interactivo.

::component-code
---
Ignora:
  @@pH051@@defaultValue
Props:
  Discapacidad: Verdadero
  Valoración: 3
---
::

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `readonly` para mostrar una calificación sin permitir la interacción del usuario. A diferencia de `disabled`, mantiene la apariencia normal (opacidad completa, cursor predeterminado). Úselo cuando desee mostrar una calificación que no se puede cambiar pero que debe verse normal.

::component-code
---
Ignora:
  @@pH055@@defaultValue
Props:
  Reseña: True
  Valoración: 4.5
---
::

@@pH056

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

@@508@5000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes de slots

@@509@Emitir

Componentes Emisiones

@060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componente Tema

@@changelog

Categoría: component-changelog
