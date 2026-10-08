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

@@pH000@@Uso del producto

Utilice la directiva `v-model` para controlar el valor del PinInput.

::component-code
---
Categoría: true
Ignora:
  - modelValoración
Externo:
  - modelValue (Edición española)
Props:
  Modelos: []
---
::

Utilice la prop `default-value` para establecer el valor inicial cuando no necesite controlar su estado.

::component-code
---
Categoría: true
Ignora:
  @@pH005@@defaultValue
Props:
  defaultValue: ['1 ','2','3 ']
---
::

@0006@Nombre

Utilice el prop `type` para cambiar el tipo de entrada. Predeterminados a `text`.

::component-code
---
items:
  Tipo:
    @009@texto
    @000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Tipo: 'Número'
---
::

::note
Cuando `type` se establece en `number`, sólo aceptará caracteres numéricos.
::

@@Máscara

Utilice el prop `mask` para tratar la entrada como una contraseña.

::component-code
---
Categoría: true
Ignora:
  @150000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @@pH016@defaultValue (en inglés)
Props:
  Máscara: Verdad
  defaultValue: ['1 ','2','3 ','4','5 ']
---
::

@170000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `otp` para habilitar la funcionalidad de contraseña de un solo uso. Cuando está habilitada, los dispositivos móviles pueden detectar y rellenar automáticamente los códigos OTP de los mensajes SMS o el contenido del portapapeles, con soporte de autocompletado.

::component-code
---
Props:
  OTP: Verdad
---
::

@@@P2019@Placeholder (en inglés)

Utilice el prop `placeholder` para establecer un texto de marcador de posición.

::component-code
---
Props:
  Plantilla: '○'
---
::

@@21@20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `length` para cambiar la cantidad de entradas.

::component-code
---
Ignora:
  @233@@retoño
Props:
  Longitud: 6
  Plantilla: '○'
---
::

### Separador: badge{label="4.9+" class="align-text-top"}

Utilice el prop `separator` para insertar un separador entre grupos de entradas. Pase un número para insertar uno después de cada entrada n. ª.

::component-code
---
Ignora:
  @@27@@decodificador
Props:
  Longitud: 6
  Separación: 3
  Plantilla: '○'
---
::

También puede pasar una matriz de posiciones para insertar separadores después de entradas específicas.

::component-code
---
Categoría: true
Ignora:
  @@28@@decodificador
  @@29@longuetud
  - separador
Props:
  Longitud: 7
  separador: [3, 4]
  Plantilla: '○'
---
::

@@31@color

Utilice el prop `color` para cambiar el color del anillo cuando se enfoca la PinInput.

::component-code
---
Ignora:
  @@pH033@@marcador de posición
Props:
  Color: Neutro
  Destacado: Verdadero
  Plantilla: '○'
---
::

::note
La `highlight` prop se utiliza aquí para mostrar el estado de enfoque. Se utiliza internamente cuando se produce un error de validación.
::

@@P250@Variante

Utilice el `variant` prop para cambiar la variante de la PinInput.

::component-code
---
Ignora:
  @@pH037@placeholder (en inglés)
Props:
  Color: Neutral
  Variación: Sutil
  Destacado: Falso
  Plantilla: '○'
---
::

@@380@Tamaño

Utilice el prop `size` para cambiar el tamaño de la entrada de pin.

::component-code
---
Ignora:
  @400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Tamaño: XL
  Plantilla: '○'
---
::

### Desactivado

Utilice el prop `disabled` para desactivar la entrada de pin.

::component-code
---
Ignora:
  @@pH043@@marcador de posición
Props:
  Discapacidad: Verdadero
  Plantilla: '○'
---
::

@@44@Ejemplos

### Con ranura separadora: badge{label="4.9+" class="align-text-top"}

Utilice la ranura `separator` para personalizar la apariencia del separador.

::component-example
---
Nombre: 'pin-input-separator-slot-example'
---
::

@480000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

@@40000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes de slots

@@501@@Emisiones

Componentes Emisiones

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Al acceder al componente a través de una referencia de plantilla, puede utilizar lo siguiente:

| Nombre| Tipo|
| ---- | ---- |
| @@|@@|

@@507@Proyecto

Componente Tema

@@changelog

Categoría: component-changelog
