---
title: ProgresiónGrupo
description: Una barra de progreso dividida en varios segmentos que se suman a un total.
category: element
navigation.badge: New
keywords:
  - meter
  - meter group
  - segmented progress
  - stacked bar
  - breakdown
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ProgressGroup.vue
---

@@pH000@@Uso del producto

Utilice el componente ProgressGroup para mostrar varios valores como segmentos de una sola barra de progreso.

::component-code
---
Colapso: Verdad
Ignora:
  @0001@artículos
  @2000@Max
  @003@clase
Externo:
  @0004@artículos
Externalidades:
  @@P005@@Grupo de Trabajo []
Props:
  Categoría: 128
  items:
    - label:'El sistema'
      Valoración: 24
      Categoría:"Neutral"
      icono: 'i-lucide-cog'
    - label:'Aplicaciones'
      Valoración: 8
      Categoría:"Error"
      icono: 'i-lucide-app-window'
    - label:'Artículos'
      Valoración: 12
      Color: "Advertencia"
      icono: 'i-lucide-file'
    - label:'Multimedia'(Edición española)
      Valoración: 42
      Categoría:"Éxito"
      icon: 'i-lucide-film'
  Categoría: W-96
---
::

@100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `items` como una matriz de objetos con las siguientes propiedades:

@@
@@
@@
@@
@@
@@
@@

::component-code
---
Colapso: Verdad
Ignora:
  @373@artículos
  @38@clase
Externo:
  @@pH039@artículos
Externalidades:
  - ProgressGroupItem (en inglés)
Props:
  Items:
    - label:'Computación'
      Valoración: 42
      Categoría:"Primary"
    - label:'Almacenamiento'
      Valoración: 18
      Categoría:'info'
    - label:'Ancho de banda'
      Valoración: 9
      Color: "Advertencia"
  Categoría: W-96
---
::

::note
Los elementos sin `icon` obtienen un punto de color en la lista.
::

@450000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice la prop `max` para establecer el valor que todos los elementos suman.

::component-code
---
Colapso: Verdad
Ignora:
  @@48000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @494@clase
Externo:
  @500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externalidades:
  - ProgressGroupItem (en inglés)
Props:
  Categoría: 512
  Items:
    - label:'Usado'
      Cantidad: 128
      Categoría:"Primary"
    - label:'Reservado'
      Valoración: 64
      Categoría:"Neutral"
  Categoría: W-96
---
::

::note
Los valores están sujetos entre `0` y `max`, y los segmentos que suman más de `max` comparten la pista proporcionalmente.
::

@@ph057@status

Utilice el prop `status` para mostrar el valor sumado por encima de la barra.

::component-code
---
Colapso: Verdad
Ignora:
  @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @060@clase
Externo:
  @061 @ artículos
Externalidades:
  - ProgressGroupItem (en inglés)
Props:
  Estado: Verdadero
  Categoría: 128
  items:
    - label:'El sistema'
      Valoración: 24
      Categoría:"Neutral"
    - label:'Aplicaciones'
      Valoración: 8
      Categoría:"Error"
    - label:'Multimedia'(Edición española)
      Valoración: 42
      Categoría:"Éxito"
  Categoría: W-96
---
::

::tip
El estado rastrea el final de la barra, utilice `:ui="{ status: 'w-full' }"` para que abarque todo el ancho.
::

@@pH067@color

Utilice el prop `color` para cambiar el color de cada segmento que no establece su propio color.

::component-code
---
Colapso: Verdad
Ignora:
  @@pH069@artículos
  @070@clase
Externo:
  @071@artículos
Externalidades:
  - ProgressGroupItem (en inglés)
Props:
  Color: Neutro
  Items:
    - label:'Leer'(en inglés)
      Valoración: 42
    - label:'Escribir'
      Valoración: 18
  Categoría: W-96
---
::

::tip
Tanto este accesorio como el `color` de cada elemento aceptan cualquier valor de color CSS, lo cual es útil para paletas fuera del tema.
::

@766@766.

Utilice la prop `size` para cambiar el tamaño del ProgressGroup.

::component-code
---
Colapso: Verdad
Ignora:
  @788@artículos
  @079@clase
Externo:
  @080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externalidades:
  - ProgressGroupItem (en inglés)
Props:
  Tamaño: XL
  Items:
    - label:'Leer'(en inglés)
      Valoración: 42
      Categoría:"Primary"
    - label:'Escribir'
      Valoración: 18
      Categoría:'info'
  Categoría: W-96
---
::

@084@Orientación

Utilice el prop `orientation` para cambiar la orientación del ProgressGroup. Defaults a `horizontal`.

::component-code
---
Colapso: Verdad
Ignora:
  @087 @ Artículos
  @888@clase
Externo:
  @089 @ artículos
Externalidades:
  - ProgressGroupItem (en inglés)
Props:
  Orientación: Vertical
  Items:
    - label:'Leer'(en inglés)
      Valoración: 42
      Categoría:"Primary"
    - label:'Escribir'
      Valoración: 18
      Categoría:"info"
  Categoría: H-48
---
::

@@pH093@Ejemplos

### Con ranura de estado

Utilice la ranura `#status` para reemplazar el porcentaje sumado con su propio contenido.

::component-example
---
Colapso: Verdad
Nombre: progreso-grupo-estado-ejemplo
---
::

### Con ranuras de artículos

Utilice los `#item-label` y `#item-trailing` ranuras para cambiar lo que cada entrada muestra. Ambos reciben el `item`, su `index` y su `percent`.

::component-example
---
Colapso: Verdad
Nombre: progreso-grupo-ítemo-ejemplo
---
::

### Con colores personalizados

Dale a cada elemento un color CSS para crear un desglose fuera de la paleta de temas.

::component-example
---
Colapso: Verdad
Nombre: progress-group-custom-color-example
---
::

@@pH103

@104@104@104

Componentes Props

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes de slots

@106 @@ Proyecto

Componente Tema

@107@Changelog

Categoría: component-changelog
