---
title: El radiogrupo
description: Un conjunto de botones de radio para seleccionar una sola opción de una lista.
category: form
keywords:
  - radio buttons
  - single choice
links:
  - label: El radiogrupo
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/radio-group
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/RadioGroup.vue
---

@@pH000@@Uso del producto

Utilice la directiva `v-model` para controlar el valor del RadioGroup o la prop `default-value` para establecer el valor inicial cuando no necesite controlar su estado.

::component-code
---
Categoría: true
Ignora:
  - modelValue (Edición española)
  @@pH004@artículos
Externo:
  @@0005@artículos
  - modelValue (Edición española)
Props:
  Categoría:"Sistema"
  items:
    - "Proyecto"
    - "La luz"
    @0009 @@"La verdad"
---
::

@100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `items` como una matriz de cadenas o números:

::component-code
---
Categoría: true
Ignora:
  @@P2012@modelValue (Edición española)
  @@13000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externo:
  @140000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @@P015@modelValue (Edición española)
Props:
  Categoría:"Sistema"
  Items:
    - "Proyecto"
    - "La luz"
    - "El sueño"
---
::

También puede pasar una matriz de objetos con las siguientes propiedades:

@@
@@
@@
@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@
@@

::component-code
---
Ignora:
  - modelValue (Edición española)
  @494@artículos
Externo:
  @500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @@P051@@modelValue (Edición española)
Externalidades:
  @@R2005@R2005 [en línea]
Props:
  Categoría:'Sistema'
  Items:
    - label:'El sistema'
      Descripción:'Coincide con la configuración de su dispositivo.'
      Categoría:"Sistema"
    - label:"La luz"
      Descripción:"Utiliza siempre el tema de la luz".
      Categoría:'Light'
    - label:"Oscuridad"
      Descripción:"Siempre usa el tema oscuro".
      Categoría:"Dark"
---
::

::caution
Cuando se utilizan objetos, es necesario hacer referencia a la propiedad `value` del objeto en la directiva `v-model` o en la prop.
::

### Clave de valor

Puede cambiar la propiedad que se utiliza para establecer el valor utilizando la prop.`value-key`.

::component-code
---
Ignora:
  @@pH062@modelValue (Edición española)
  @@pH063@artículos
  @@pH064@valueKey
Externo:
  @065 @ artículos
  @@pH066@modelValue (Edición española)
Externalidades:
  @@@RF067@RF067 [en]
Props:
  Categoría:'Light'
  ValueKey: 'id'
  items:
    - label:'El sistema'
      Descripción:'Coincide con la configuración de su dispositivo.'
      Nombre: "Sistema"
    - label:"La luz"
      Descripción:"Utiliza siempre el tema de la luz".
      Nombre: "Light"
    - label:"La oscuridad"
      Descripción:"Utiliza siempre el tema oscuro".
      Categoría:"Dark"
---
::

@71@@leyenda

Utilice el prop `legend` para establecer la leyenda del RadioGroup.

::component-code
---
Categoría: true
Ignora:
  @@pH073@defaultValue (en inglés)
  @@70000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externo:
  @@75 @ puntos
Props:
  Categoría:"Tema"
  Valoración:'Sistema'
  items:
    - "Proyecto"
    - "La luz"
    - 'oscuro'
---
::

@@79@color

Utilice el prop `color` para cambiar el color del RadioGroup.

::component-code
---
Categoría: true
Ignora:
  @@pH081@@defaultValue (en inglés)
  @082@artículos
Externo:
  @083@artículos
Props:
  Color: Neutral
  Valoración:'Sistema'
  items:
    - "Proyecto"
    - "La luz"
    - 'oscuro'
---
::

@@708@Variante

Utilice la prop `variant` para cambiar la variante del RadioGroup.

::component-code
---
Categoría: true
Ignora:
  @@pH089@defaultValue (en inglés)
  @090000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externo:
  @091@artículos
Externalidades:
  @@R2002 @R2000 [en línea]
Props:
  Categoría:"Primary"
  Variación:"tarjeta"
  defaultValue: 'sistema'
  Items:
    - label:'El sistema'
      Categoría:"Sistema"
      Descripción:'Coincide con la configuración de su dispositivo.'
    - label:"La luz"
      Categoría:'Light'
      Descripción:"Utiliza siempre el tema de la luz".
    - label:"La oscuridad"
      Categoría:"Dark"
      Descripción:"Siempre usa el tema oscuro".
---
::

@096 @@ Tamaño

Utilice la prop `size` para cambiar el tamaño del RadioGroup.

::component-code
---
Categoría: true
Ignora:
  @@pH098@defaultValue (en inglés)
  @099 @ artículos
Externo:
  @100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Tamaño:"XL"
  Variación:"lista"
  Valoración:'Sistema'
  Items:
    - "Proyecto"
    - "La luz"
    - "El secreto"
---
::

### Orientación

Utilice el prop `orientation` para cambiar la orientación del RadioGroup. Defaults a `vertical`.

::component-code
---
Categoría: true
Ignora:
  @@pH107@defaultValue (en inglés)
  @108@artículos
Externo:
  @109 @ artículos
Props:
  Categoría:"Horizontal"
  Variación:"lista"
  Valoración:'Sistema'
  Items:
    - "Proyecto"
    - "La luz"
    - 'El sueño'
---
::

### Indicador

Utilice el prop `indicator` para cambiar la posición u ocultar el indicador. Predeterminados a `start`.

::note
El `icon` de un artículo solo se muestra cuando el `indicator` es `hidden`, encima de la etiqueta, ya que una radio no tiene icono dentro de su indicador.
::

::component-code
---
Categoría: true
Ignora:
  @@pH119@@defaultValue
  @120@artículos
Externo:
  @121@artículos
Externalidades:
  - RadioGroupItem (en inglés)
items:
  Indicador:
    @123 @ Inicio
    @F124 @@ Inicio
    @125 @ oculto
  Variante:
    @126 @@ Proyecto
    @127 @@ Dirección
    @128@Tablero
Props:
  Categoría:"Hidden"
  Categoría:"Horizontal"
  Categoría:"Mesa"
  Valoración:'Sistema'
  Items:
    - label:'El sistema'
      Icono: 'i-lucide-monitor'
      Categoría:"Sistema"
      Categoría: W-20
    - label:'Luz'(Edición española)
      icono: 'i-lucide-sun'
      Categoría:"Light"
      Categoría: W-20
    - label:"La oscuridad"
      Icono: 'i-lucide-moon'
      Categoría:"Dark"
      Categoría: W-20
---
::

### Desactivado

Utilice el prop `disabled` para desactivar el RadioGroup.

::component-code
---
Categoría: true
Ignora:
  @@pH134@@defaultValue
  @135 @ puntos
Externo:
  @136@artículos
Props:
  Discapacitados: Verdadero
  Valoración:'Sistema'
  Items:
    - "Proyecto"
    - 'La luz'
    - "El secreto"
---
::

@@pH140

@141@141@141

Componentes Props

@@ph142@@esencias

Componentes de slots

@@143@143@143

Componentes Emisiones

@144 @@ Proyecto

Componente Tema

@145@Changelog (Edición española)

Categoría: component-changelog
