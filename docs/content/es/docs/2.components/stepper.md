---
description: Un conjunto de pasos que se utilizan para indicar el progreso a través de un proceso de varios pasos.
category: navigation
keywords:
  - wizard
links:
  - label: El Stepper
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/stepper
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Stepper.vue
---

@@pH000@@Uso del producto

Utilice el componente Stepper para mostrar una lista de elementos en un stepper.

::component-code
---
Colapso: Verdad
Escondido:
  @001@clase
Ignora:
  @@2002@artículos
  @003@clase
Externo:
  @@pH004@artículos
Externalidades:
  @@@P2005@@P2005 [en línea]
Props:
  items:
    - title:'Dirección'
      Descripción:"Añadir su dirección aquí"
      Archivo de la etiqueta: i-lucide-house
    - title:'El transporte marítimo'
      Descripción:'Configure su método de envío preferido'
      icono: 'i-lucide-truck'
    - title:"El pago"
      Descripción:"Confirme su pedido"
  Categoría: w-full
---
::

@0009@Artículos

Utilice el prop `items` como una matriz de objetos con las siguientes propiedades:

@@
@@
@@
@@
@@
@@
@@
@@
@@

::component-code
---
Ignora:
  @@42@puntos
  @@43@clase
Externo:
  @@444@puntos
Externalidades:
  @@45@@4500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  items:
    - title:'Dirección'
      Descripción:"Añadir su dirección aquí"
      Archivo de la etiqueta: i-lucide-house
    - title:'El transporte marítimo'
      Descripción:'Configura tu método de envío preferido'
      icono: 'i-lucide-truck'
    - title:"El pago"
      Descripción:"Confirme su pedido"
  Categoría: w-full
---
::

::note
Haga clic en los elementos para navegar por los pasos.
::

@49@color

Utilice el prop `color` para cambiar el color del Stepper.

::component-code
---
Ignora:
  @@501@contenido
  @@502@artículos
  @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externo:
  @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externalidades:
  @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Color: Neutral
  Items:
    - title:'Dirección'
      Descripción:"Añadir su dirección aquí"
      Archivo de la etiqueta: i-lucide-house
    - title:'El transporte marítimo'
      Descripción:'Configura tu método de envío preferido'
      icono: 'i-lucide-truck'
    - title:"El pago"
      Descripción:"Confirme su pedido"
  Categoría: w-full
---
::

@599@599

Utilice el prop `size` para cambiar el tamaño del Stepper.

::component-code
---
Ignora:
  @@pH061@contenido
  @@pH062@artículos
  @063 @ clase
Externo:
  @@pH064@artículos
Externalidades:
  @@@P2005 @@P2005 [en línea]
Props:
  Tamaño: xl
  Items:
    - title:'Dirección'
      Descripción:"Añadir su dirección aquí"
      Archivo de la etiqueta: i-lucide-house
    - title:'El transporte marítimo'
      Descripción:'Configure su método de envío preferido'
      icono: 'i-lucide-truck'
    - title:"El pago"
      Descripción:"Confirme su pedido"
  Categoría: w-full
---
::

### Dirección

Utilice el prop `orientation` para cambiar la orientación del Stepper. Defaults a `horizontal`.

::component-code
---
Ignora:
  @@2007@contenido
  @073@artículos
  @074@clase
Externo:
  @@75 @ puntos
Externalidades:
  @@776@@@eleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
Props:
  Orientación: Vertical
  Items:
    - title:'Dirección'
      Descripción:"Añadir su dirección aquí"
      Archivo de la etiqueta: i-lucide-house
    - title:'El transporte marítimo'
      Descripción:'Configure su método de envío preferido'
      icono: 'i-lucide-truck'
    - title:"El pago"
      Descripción:"Confirme su pedido"
  Categoría: w-full
---
::

### Desactivado

Utilice el prop `disabled` para desactivar la navegación a través de los pasos.

::component-code
---
Ignora:
  @@2008@contenido
  @083@artículos
  @084@clase
Externo:
  @085 @ artículos
Externalidades:
  @@86@@8600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Discapacidad: Verdadero
  items:
    - title:'Dirección'
      Descripción:"Añadir su dirección aquí"
      Archivo de la etiqueta: i-lucide-house
    - title:'El transporte marítimo'
      Descripción:'Configure su método de envío preferido'
      icono: 'i-lucide-truck'
    - title:"El pago"
      Descripción:"Confirme su pedido"
---
::

::note{to="#with-controls"}
Esto puede ser útil cuando se desea forzar la navegación con controles.
::

@@pH090@Ejemplos

### Con los controles

Puede agregar controles adicionales para el paso a paso usando botones.

Ejemplo de componente {name="stepper-with-controls-example"}

### Control elemento activo

Puede controlar el elemento activo mediante el prop `default-value` o la directiva `v-model` con el `value` del elemento.

Ejemplo de componente {name="stepper-model-value-example"}

::tip
Utilice el prop `value-key` para cambiar la clave utilizada para hacer coincidir los elementos cuando se proporciona un `v-model` o `default-value`.
::

### Con ranura de contenido

Utilice la ranura `#content` para personalizar el contenido de cada elemento.

Ejemplo de componente {name="stepper-content-slot-example"}

### Con slot personalizado

Utilice la propiedad `slot` para personalizar un elemento específico.

Tendrás acceso a los siguientes slots:

@@@ph107@@@ph108@@ph109 @

Ejemplo de componente {name="stepper-custom-slot-example"}

@111

@112@112@112

Componentes Props

@@113@113@113

Componentes de slots

@114@114@114

Componentes Emisiones

@@115@115@115

Puede acceder a la instancia de componente escrito utilizando [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref).

```vue
<script setup lang="ts">
const stepper = useTemplateRef('stepper')
</script>

<template>
  <UStepper ref="stepper" />
</template>
```

Esto le dará acceso a lo siguiente:

| Nombre| Tipo|
| ---- | ---- |
| @130 @@ 132 @|@131 @@@ 133 @|
| @@pH134 @|@135 @@ 137 @|
| @138 @@ 140 @|@139 @@ 141 @|
| @142 @@@ 144 @|@@pH143 @|

@146 @@ Proyecto

Componente Tema

@147@Changelog (Edición española)

Categoría: component-changelog
