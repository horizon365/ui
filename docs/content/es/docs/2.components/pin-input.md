---
title: Pininput
description: Un elemento de entrada para introducir un pin.
category: form
keywords:
  - otp
  - one-time password
  - verification code
links:
  - label: Pininput
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/pin-input
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PinInput.vue
---

xph0000xUso

Utilice la directiva `v-model` para controlar el valor del PinInput.

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: []
---
::

Utilice el prop `default-value` para establecer el valor inicial cuando no necesite controlar su estado.

::component-code
---
prettier: true
ignore:
  - defaultValue
props:
  defaultValue: ['1','2','3']
---
::

### Tipo

Utilice la prop `type` para cambiar el tipo de entrada. Predeterminados a `text`.

::component-code
---
items:
  type:
    - text
    - number
props:
  type: 'number'
---
::

::note
Cuando `type` se establece en `number`, sólo aceptará caracteres numéricos.
::

### Máscara

Utilice el prop `mask` para tratar la entrada como una contraseña.

::component-code
---
prettier: true
ignore:
  - placeholder
  - defaultValue
props:
  mask: true
  defaultValue: ['1','2','3','4','5']
---
::

### OTP (Edición española)

Utilice el prop `otp` para habilitar la funcionalidad de contraseña de un solo uso. Cuando está habilitada, los dispositivos móviles pueden detectar y rellenar automáticamente los códigos OTP de los mensajes SMS o el contenido del portapapeles, con soporte de autocompletado.

::component-code
---
props:
  otp: true
---
::

### Placeholder (Edición española)

Utilice el prop `placeholder` para establecer un texto de marcador de posición.

::component-code
---
props:
  placeholder: '○'
---
::

### Longitud

Utilice el prop `length` para cambiar la cantidad de entradas.

::component-code
---
ignore:
  - placeholder
props:
  length: 6
  placeholder: '○'
---
::

### Separador: badge{label="4.9+" class="align-text-top"}

Utilice el prop `separator` para insertar un separador entre grupos de entradas. Pase un número para insertar uno después de cada entrada n. ª.

::component-code
---
ignore:
  - placeholder
props:
  length: 6
  separator: 3
  placeholder: '○'
---
::

También puede pasar una matriz de posiciones para insertar separadores después de entradas específicas.

::component-code
---
prettier: true
ignore:
  - placeholder
  - length
  - separator
props:
  length: 7
  separator: [3, 4]
  placeholder: '○'
---
::

### Color (Edición española)

Utilice el accesorio `color` para cambiar el color del anillo cuando se enfoca la entrada de pin.

::component-code
---
ignore:
  - placeholder
props:
  color: neutral
  highlight: true
  placeholder: '○'
---
::

::note
El prop `highlight` se utiliza aquí para mostrar el estado de enfoque. Se utiliza internamente cuando se produce un error de validación.
::

### Variante

Utilice el prop `variant` para cambiar la variante del PinInput.

::component-code
---
ignore:
  - placeholder
props:
  color: neutral
  variant: subtle
  highlight: false
  placeholder: '○'
---
::

### Tamaño

Utilice el prop `size` para cambiar el tamaño de la entrada PinInput.

::component-code
---
ignore:
  - placeholder
props:
  size: xl
  placeholder: '○'
---
::

### Desactivado

Utilice el prop `disabled` para desactivar la entrada de pin.

::component-code
---
ignore:
  - placeholder
props:
  disabled: true
  placeholder: '○'
---
::

## Ejemplos

### Con ranura separadora: badge{label="4.9+" class="align-text-top"}

Utilice la ranura `separator` para personalizar la apariencia del separador.

::component-example
---
name: 'pin-input-separator-slot-example'
---
::

## API (Edición española)

### Props (accesorios)

:component-props

### Slots

:component-slots

### Emisiones

:component-emits

### Exposición

Al acceder al componente a través de una referencia de plantilla, puede utilizar lo siguiente:

| Nombre| Tipo|
| ---- | ---- |
| `inputsRef`x{lang="ts-type"} (Edición española)| `Ref<ComponentPublicInstance[]>`x{lang="ts-type"}|

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
