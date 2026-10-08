---
title: InputNúmero
description: Una entrada para valores numéricos con un rango personalizable.
category: form
keywords:
  - number field
  - spinbutton
  - counter
links:
  - label: Numberfield
    icon: i-custom-reka-ui
    to: https://www.reka-ui.com/docs/components/number-field
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputNumber.vue
---

@@pH000@@Uso del producto

Utilice la directiva `v-model` para controlar el valor del InputNumber.

::component-code
---
Ignora:
  - modelValoración
Externo:
  - modelValue (Edición española)
Props:
  Modelos: 5
---
::

Utilice la prop `default-value` para establecer el valor inicial cuando no necesite controlar su estado.

::component-code
---
Ignora:
  @@pH005@@defaultValue
Props:
  ValoresDeficientes: 5
---
::

::note
Este componente se basa en el paquete [`@internationalized/number`](https://react-spectrum.adobe.com/internationalized/number/index.html) que proporciona utilidades para formatear y analizar números en locales y sistemas de numeración.
::

@@M1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice los props `min` y `max` para establecer los valores mínimos y máximos del InputNumber.

::component-code
---
Ignora:
  - modelValue (Edición española)
Externo:
  @@P015@modelValue (Edición española)
Props:
  Modelos: 5
  Mínimo: 0
  Max: 10 años
---
::

@160000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `step` para establecer el valor de paso del InputNumber.

::component-code
---
Ignora:
  @@P018@modelValue (Edición española)
Externo:
  @@P2019@modelValue (Edición española)
Props:
  Modelos: 5
  El paso: 2
---
::

@@20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `orientation` para cambiar la orientación del InputNumber.

::component-code
---
Ignora:
  @@2222@22222@2222@2222222222222222200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externo:
  - modelValue (Edición española)
Props:
  Modelos: 5
  Orientación: Vertical
---
::

@24@240000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `placeholder` para establecer un texto de marcador de posición.

::component-code
---
Props:
  marcador de posición:'Introduzca un número'
---
::

@@26000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `color` para cambiar el color del anillo cuando el InputNumber está enfocado.

::component-code
---
Ignora:
  @@2008@modelValoración
Externo:
  @@20029@modelValoración
Props:
  Modelos: 5
  Color: Neutral
  Destacado: Verdadero
---
::

@@P200@Variante

Utilice el prop `variant` para cambiar la variante del InputNumber.

::component-code
---
Ignora:
  - modelValue (Edición española)
Externo:
  - modelValue (Edición española)
Props:
  Modelos: 5
  Variación: Sutil
  Color: Neutro
  Destacado: Falso
---
::

@@pH034@@Tamaño

Utilice el prop `size` para cambiar el tamaño del InputNumber.

::component-code
---
Ignora:
  - modelValue (Edición española)
Externo:
  - modelValue (Edición española)
Props:
  Modelos: 5
  Tamaño: xl
---
::

### Desactivado

Utilice el prop `disabled` para desactivar el InputNumber.

::component-code
---
Ignora:
  - modelValue (Edición española)
Externo:
  - modelValue (Edición española)
Props:
  Modelos: 5
  Discapacitados: Verdadero
---
::

### Incremento/decremento

Utilice los accesorios `increment` y `decrement` para personalizar los botones de incremento y decremento con cualquier accesorio [Button](/docs/components/button).

::component-code
---
Categoría: true
Ignora:
  @@P051@@modelValue (Edición española)
  - increment.size
  - increment.color
  - increment.variante
  - decrement.size (en inglés)
  - decrement.color
  - decrement.variante
Externo:
  @@P058@modelValue (Edición española)
Props:
  Modelos: 5
  Incremento:
    Color: Neutral
    Variante: Sólido
    Tamaño: XS
  decretado:
    Color: Neutral
    Variante: Sólido
    Tamaño: XS
---
::

### Iconos de incremento/decremento

Utilice los accesorios `increment-icon` y `decrement-icon` para personalizar los botones [Icon](/docs/components/icon).

::component-code
---
Categoría: true
Ignora:
  - modelValue (Edición española)
Externo:
  @@pH069@modelValue (Edición española)
Props:
  Modelos: 5
  Icono de incremento: 'i-lucide-arrow-right'
  Icono de decremento: 'i-lucide-arrow-left'
---
::

@070@Ejemplos

### Con el formato decimal

Utilice la prop `format-options` para personalizar el formato del valor.

::component-example
---
Nombre: 'input-number-decimal-example'
---
::

### Con el formato de porcentaje

Utilice el prop `format-options` con `style: 'percent'` para personalizar el formato del valor.

::component-example
---
Nombre: 'input-number-percentage-example'
---
::

### Con el formato de moneda

Utilice el prop `format-options` con `style: 'currency'` para personalizar el formato del valor.

::component-example
---
Nombre: 'input-number-currency-example'
---
::

### Sin botones

Puede utilizar los accesorios `increment` y `decrement` para controlar la visibilidad de los botones.

::component-example
---
nombre: 'input-number-without-buttons-example'
---
::

### Dentro de un campo de formato

Puede utilizar el InputNumber dentro de un componente [FormField](/docs/components/form-field) para mostrar una etiqueta, texto de ayuda, indicador requerido, etc.

::component-example
---
Nombre: 'input-number-form-field-example'
---
::

### Con ranuras

Utilice las ranuras `#increment` y `#decrement` para personalizar los botones.

::component-example
---
Nombre: 'input-number-slots-example'
---
::

@@pH090@@pH0000

@091@091@0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
Este componente también soporta todos los atributos HTML nativos `<input>`.
::

@@P093@@Esfuerzos

Componentes de slots

@@pH094@@Emisiones

Componentes Emisiones

@@P095@@Exposicion

Al acceder al componente a través de una referencia de plantilla, puede utilizar lo siguiente:

| Nombre| Tipo|
| ---- | ---- |
| @@|@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@|

@100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componente Tema

@101@Changelog

Categoría: component-changelog
