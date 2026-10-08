---
title: CheckboxGrupo
description: Un conjunto de casillas de verificación para seleccionar varias opciones de una lista.
category: form
keywords:
  - multi select
  - checklist
links:
  - label: CheckboxGrupo
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/checkbox#group-root
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/CheckboxGroup.vue
---


@@pH000@@Uso del producto

Utilice la directiva `v-model` para controlar el valor del CheckboxGroup o la prop `default-value` para establecer el valor inicial cuando no necesite controlar su estado.

::component-code
---
Categoría: true
Ignora:
  - modelValue (Edición española)
  @@pH004@artículos
Externo:
  @@0005@artículos
  - modelValoríaModelación
Props:
  Modelación:
    - "Proyecto"
  Items:
    @@pH008 @@"Proyecto"
    - "La luz"
    @@pH010 @@"El secreto"
---
::

@@111@Artículos

Utilice el prop `items` como una matriz de cadenas o números:

::component-code
---
Categoría: true
Ignora:
  - modelValue (Edición española)
  @140000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externo:
  @150000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @@P016@modelValue (Edición española)
Props:
  Modelación:
    - "Proyecto"
  items:
    - "Proyecto"
    - "La luz"
    - 'oscuro'
---
::

También puede pasar una matriz de objetos con las siguientes propiedades:

@@
@@
[`value?: string`{lang="ts-type"}#value-key)
@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@
@@

::component-code
---
Ignora:
  @@P5000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @@501@artículos
Externo:
  @@502@artículos
  - modelValue (Edición española)
Externalidades:
  - CheckboxGroupItem (en inglés)
Props:
  Modelación:
    - "Proyecto"
  Items:
    - label:'El sistema'
      Descripción:'Coincide con la configuración de su dispositivo.'
      Categoría:"Sistema"
    - label:'Luz'
      Descripción:"Utiliza siempre el tema de la luz".
      Categoría:"Light"
    - label:"Oscuridad"
      Descripción:"Utiliza siempre el tema oscuro".
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
  - modelValue (Edición española)
  @666@puntos
  @@pH067@valueKey
Externo:
  @068@artículos
  @@pH069@modelValue (Edición española)
Externalidades:
  @@CH070@@CheckboxGroupItem (en inglés)
Props:
  Modelación:
    - 'luz'
  ValueKey: 'id'
  items:
    - label:'El sistema'
      Descripción:'Coincide con la configuración de su dispositivo.'
      Nombre: "Sistema"
    - label:"La luz"
      Descripción:"Utiliza siempre el tema de la luz".
      Nombre: "Light"
    - label:"La oscuridad"
      Descripción:"Siempre usa el tema oscuro".
      Categoría:"Dark"
---
::

@750@leyenda

Utilice el prop `legend` para establecer la leyenda del Grupo de control.

::component-code
---
Categoría: true
Ignora:
  @@777@@defaltValue
  @788@artículos
Externo:
  @799@artículos
Props:
  Categoría:"Tema"
  Valoración Default:
    - "Proyecto"
  items:
    - "Proyecto"
    - "La luz"
    - 'oscuro'
---
::

@084@color en español

Utilice el prop `color` para cambiar el color del grupo de casillas de verificación.

::component-code
---
Categoría: true
Ignora:
  @@pH086@defaultValue (en inglés)
  @087 @ Artículos
Externo:
  @@888@artículos
Items:
  Color:
    @89@primary
    @@pH090@secondary
    @091@éxito
    @@pH092 @ información
    @@pH093@advertencia
    @@pH094@error
    @095@neutralización
Props:
  Color: Neutral
  Valoración Default:
    - "Proyecto"
  items:
    - "Proyecto"
    - "La luz"
    @@pH099 @@"El secreto"
---
::

@@P100@Variación

Utilice la prop `variant` para cambiar la variante del CheckboxGroup.

::component-code
---
Categoría: true
Ignora:
  @@P102 @ Valoración por defecto
  @303@artículos
Externo:
  @104@104@104
Externalidades:
  @@@CHEW105@@CheckboxGroupItem (en inglés)
items:
  Color:
    @@106@primary
    @@707@secondary
    @@80000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    @@pH109 @ información
    @110@Advertencia
    @@111@error
    @@ph112@neutralización
  Variante:
    @113
    @114 @@ tarjeta
    @115 @@ Dirección
Props:
  Categoría:"Primary"
  Variación:"tarjeta"
  Valoración Default:
    - "Proyecto"
  items:
    - label:'El sistema'
      Categoría:"Sistema"
      Descripción:'Coincide con la configuración de su dispositivo.'
    - label:'Luz'(Edición española)
      Categoría:"Light"
      Descripción:"Utiliza siempre el tema de la luz".
    - label:"La oscuridad"
      Categoría:"Dark"
      Descripción:"Siempre usa el tema oscuro".
---
::

@120 @ Tamaño

Utilice la prop `size` para cambiar el tamaño del Grupo de cajas de verificación.

::component-code
---
Categoría: true
Ignora:
  @@pH122@@defaultValue
  @123@artículos
Externo:
  @124 @ artículos
Items:
  Variante:
    @125
    @126
    @127@Tablero
Props:
  Tamaño:'XL'
  Variación:"lista"
  Valoración Default:
    - "Proyecto"
  Items:
    - "Proyecto"
    - 'La luz'
    - "El sueño"
---
::

@132@Orientación

Utilice el prop `orientation` para cambiar la orientación del CheckboxGroup. Defaults a `vertical`.

::component-code
---
Categoría: true
Ignora:
  @@pH135@@defaultValue
  @136@artículos
Externo:
  @137 @ artículos
Items:
  Variante:
    @138
    @@pH139@@tarjeta
    @140000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Categoría:"Horizontal"
  Variación:"lista"
  Valoración Default:
    - "Proyecto"
  Items:
    - "Proyecto"
    - 'La luz'
    - 'oscuro'
---
::

### Indicador

Utilice el prop `indicator` para cambiar la posición u ocultar el indicador. Predeterminados a `start`.

::note
El `icon` de un artículo reemplaza la marca de verificación mientras el indicador está visible, y se muestra encima de la etiqueta cuando está `hidden`.
::

::component-code
---
Categoría: true
Ignora:
  @@pH150@@defaultValue
  @151 @ artículos
Externo:
  @252@artículos
Externalidades:
  - CheckboxGroupItem (en inglés)
items:
  Indicador:
    @154 @ Inicio
    @@F155 @ el
    @156@esquela
  Variante:
    @157
    @158
    @159 @@ Dirección
Props:
  Categoría:"Hidden"
  Categoría:"Horizontal"
  Categoría:"Mesa"
  Valoración Default:
    - "Proyecto"
  Items:
    - label:'El sistema'
      Icono: 'i-lucide-monitor'
      Categoría:"Sistema"
      Categoría: W-20
    - label:'Luz'(Edición española)
      icono: 'i-lucide-sun'
      Categoría: W-20
      Categoría:"Light"
    - label:"La oscuridad"
      Icono: 'i-lucide-moon'
      Categoría: W-20
      Categoría:"Dark"
---
::

### Desactivado

Utilice la prop `disabled` para desactivar el CheckboxGroup.

::component-code
---
Categoría: true
Ignora:
  @@pH166@@defaultValue
  @167@artículos
Externo:
  @168@artículos
Props:
  Discapacidad: Verdadero
  Valoración Default:
    - "Proyecto"
  items:
    - "Proyecto"
    - 'Luz'
    - 'oscuro'
---
::

@@pH173 @@ Vía

@174@174@174

Componentes Props

@175@175@175

Componentes de slots

@176@1766

Componentes Emisiones

@177 @@ Proyecto

Componente Tema

@178@Changelog en Español

Categoría: component-changelog
