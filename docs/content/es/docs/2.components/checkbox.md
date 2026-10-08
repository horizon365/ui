---
description: Un elemento de entrada para alternar entre los estados comprobados y no comprobados.
category: form
keywords:
  - tickbox
  - check
  - boolean
links:
  - label: Checkbox por
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/checkbox
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Checkbox.vue
---

@@pH000@@Uso del producto

Utilice la directiva `v-model` para controlar el estado marcado de la casilla de verificación.

::component-code
---
Ignora:
  - modelValoración
Externo:
  - modelValue (Edición española)
Props:
  Valoración: true
---
::

Utilice la prop `default-value` para establecer el valor inicial cuando no necesite controlar su estado.

::component-code
---
Ignora:
  @@pH005@@defaultValue
Props:
  Valoración: True
---
::

### Indeterminado

Utilice el valor `indeterminate` en la directiva `v-model` o `default-value` para establecer la casilla de verificación en un estado indeterminado ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes).

::component-code
---
Ignora:
  @@pH014@defaultValue (en inglés)
Props:
  defaultValue: 'indeterminado'
---
::

### Icono indeterminado

Utilice el prop `indeterminate-icon` para personalizar el icono indeterminado. Predeterminados a `i-lucide-minus`.

::component-code
---
Ignora:
  @@pH018@defaultValue (en inglés)
Props:
  defaultValue: 'indeterminado'
  indeterminadoIcono: 'i-lucide-plus'
---
::

::framework-only
#Nuxidad
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono a nivel mundial en su `app.config.ts` bajo la tecla `ui.icons.minus`.
:::

#vista
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su `vite.config.ts` bajo la tecla `ui.icons.minus`.
:::
::

@@23@etiqueta

Utilice el prop `label` para establecer la etiqueta de la casilla de verificación.

::component-code
---
Props:
  Archivo de la etiqueta: check me
---
::

Cuando se utiliza el prop `required`, se añade un asterisco junto a la etiqueta.

::component-code
---
Ignora:
  @@26@etiqueta
Props:
  Requerido: Verdadero
  Archivo de la etiqueta: check me
---
::

@27@Descripción

Utilice la `description` prop para establecer la descripción de la casilla de verificación.

::component-code
---
Ignora:
  @@29@etiqueta
Props:
  Archivo de la etiqueta: check me
  Descripción:"Esto es una casilla de verificación".
---
::

@@pH030@Icon

Use the `icon` prop to set the icon of the checkbox when it is checked.

::component-code
---
Ignora:
  @@pH033@etiqueta
  @@pH034@defaultValue (en inglés)
Props:
  Icono: 'i-lucide-heart'(en inglés)
  Valoración: true
  Archivo de la etiqueta: check me
---
::

::framework-only
#Nuxidad
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono de forma global en su `app.config.ts` bajo la tecla `ui.icons.check`.
:::

#vista
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su `vite.config.ts` bajo la tecla `ui.icons.check`.
:::
::

@@pH039@color

Utilice el prop `color` para cambiar el color de la casilla de verificación.

::component-code
---
Ignora:
  @@pH041@etiqueta
  @@pH042@defaultValue (en inglés)
Props:
  Color: Neutral
  Valoración: true
  Archivo de la etiqueta: check me
---
::

@@43@Variante

Utilice el prop `variant` para cambiar la variante de la casilla de verificación.

::component-code
---
Ignora:
  @@pH045@etiqueta
  @@pH046@defaultValue (en inglés)
Props:
  Categoría:"Primary"
  Variación:"tarjeta"
  Valoración: True
  Archivo de la etiqueta: check me
---
::

@477@477

Utilice el prop `size` para cambiar el tamaño de la casilla de verificación.

::component-code
---
Ignora:
  @@pH049@etiqueta
  @@pH050@@defaultValue
Props:
  Tamaño: XL
  Variación: Listado
  Valoración: true
  Archivo de la etiqueta: check me
---
::

@@501@Indicador

Utilice el prop `indicator` para cambiar la posición u ocultar el indicador. Predeterminados a `start`.

::note
Cuando `indicator` es `hidden`, el icono se muestra encima de la etiqueta en su lugar.
::

::component-code
---
Categoría: true
Ignora:
  @@pH056@etiqueta
  @@57@icon
  @@pH058@@defaultValue
Props:
  Categoría:"Hidden"
  Variación:"tarjeta"
  Icono: 'i-lucide-heart'(en inglés)
  Valoración: true
  Archivo de la etiqueta: check me
---
::

@@59@@desactivado

Utilice el prop `disabled` para desactivar la casilla de verificación.

::component-code
---
Ignora:
  @@pH061@etiqueta
Props:
  Discapacidad: Verdadero
  Archivo de la etiqueta: check me
---
::

@@pH062

@@pH063@@Propuestas

Componentes Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Este componente también soporta todos los atributos HTML nativos `<button>`.
::

@@P065@@Escenarios

Componentes de slots

@666@@Emisiones

Componentes Emisiones

@067@@Proyecto

Componente Tema

@@changelog

Categoría: component-changelog
