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

xph0000xUso

Utilice la directiva `v-model` para controlar el valor del InputNumber.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
---
::

Utilice el prop `default-value` para establecer el valor inicial cuando no necesite controlar su estado.

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: 5
---
::

::note
Este componente se basa en el paquete [`@internationalized/number`](https://react-spectrum.adobe.com/internationalized/number/index.html) que proporciona utilidades para formatear y analizar números a través de locales y sistemas de numeración.
::

### Min/Max (Edición española)

Utilice los props `min` y `max` para establecer los valores mínimos y máximos del InputNumber.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  min: 0
  max: 10
---
::

### Step (Edición española)

Utilice el prop `step` para establecer el valor de paso del InputNumber.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  step: 2
---
::

### Orientación

Utilice el prop `orientation` para cambiar la orientación del InputNumber.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  orientation: vertical
---
::

### Placeholder (Edición española)

Utilice el prop `placeholder` para establecer un texto de marcador de posición.

::component-code
---
props:
  placeholder: 'Enter a number'
---
::

### Color (Edición española)

Utilice el accesorio `color` para cambiar el color del anillo cuando el InputNumber está enfocado.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  color: neutral
  highlight: true
---
::

### Variante

Utilice el prop `variant` para cambiar la variante del InputNumber.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  variant: subtle
  color: neutral
  highlight: false
---
::

### Tamaño

Utilice el prop `size` para cambiar el tamaño del InputNumber.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  size: xl
---
::

### Desactivado

Utilice el prop `disabled` para desactivar el InputNumber.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  disabled: true
---
::

### Incremento/decremento

Utilice los props `increment` y `decrement` para personalizar los botones de incremento y decremento con cualquier prop [Button](/docs/components/button).

::component-code
---
prettier: true
ignore:
  - modelValue
  - increment.size
  - increment.color
  - increment.variant
  - decrement.size
  - decrement.color
  - decrement.variant
external:
  - modelValue
props:
  modelValue: 5
  increment:
    color: neutral
    variant: solid
    size: xs
  decrement:
    color: neutral
    variant: solid
    size: xs
---
::

### Iconos de incremento/decremento

Utilice los accesorios `increment-icon` y `decrement-icon` para personalizar los botones [Icon](/docs/components/icon).

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  incrementIcon: 'i-lucide-arrow-right'
  decrementIcon: 'i-lucide-arrow-left'
---
::

## Ejemplos

### Con formato decimal

Utilice el prop `format-options` para personalizar el formato del valor.

::component-example
---
name: 'input-number-decimal-example'
---
::

### Con formato de porcentaje

Utilice la prop `format-options` con `style: 'percent'` para personalizar el formato del valor.

::component-example
---
name: 'input-number-percentage-example'
---
::

### Con el formato de moneda

Utilice el prop `format-options` con `style: 'currency'` para personalizar el formato del valor.

::component-example
---
name: 'input-number-currency-example'
---
::

### Sin botones

Puede utilizar los accesorios `increment` y `decrement` para controlar la visibilidad de los botones.

::component-example
---
name: 'input-number-without-buttons-example'
---
::

### Dentro de un campo de formato

Puede utilizar el InputNumber dentro de un componente [FormField](/docs/components/form-field) para mostrar una etiqueta, texto de ayuda, indicador requerido, etc.

::component-example
---
name: 'input-number-form-field-example'
---
::

### Con ranuras

Utilice las ranuras `#increment` y `#decrement` para personalizar los botones.

::component-example
---
name: 'input-number-slots-example'
---
::

## API (Edición española)

### Props (accesorios)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
Este componente también admite todos los atributos HTML nativos de `<input>`.
::

### Slots

:component-slots

### Emisiones

:component-emits

### Exposición

Al acceder al componente a través de una referencia de plantilla, puede utilizar lo siguiente:

| Nombre| Tipo|
| ---- | ---- |
| `inputRef`x{lang="ts-type"}| `Ref<HTMLInputElement \| null>`x{lang="ts-type"}|

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
