---
description: Un conjunto de paneles de pestañas que se muestran de uno en uno.
category: navigation
keywords:
  - tabbed
  - panels
  - sections
links:
  - label: tabs
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tabs
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Tabs.vue
---

@@pH000@@Uso del producto

Utilice el componente Tabs para mostrar una lista de elementos en pestañas.

::component-example
---
Colapso: Verdad
Categoría: true
Nombre: 'tabs-ejemplo'
Props:
  Categoría: w-full
---
::

@0001@Artículos

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
@@

::component-code
---
Ignora:
  @373@artículos
  @38@clase
Externo:
  @@pH039@artículos
Externalidades:
  @400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  items:
    - label: cuenta
      icono: 'i-lucide-usuario'
      contenido: "Este es el contenido de la cuenta."
    - label: contraseña
      Icono: 'i-lucide-lock'
      contenido: "Este es el contenido de la contraseña."
  Categoría: w-full
---
::

@@pH043@Contenido

Establezca el `content` prop a `false` para representar los disparadores sin ningún panel.

::component-code
---
Ignora:
  @@47@contenido
  @@48000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @494@clase
Externo:
  @500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externalidades:
  @@501@5000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Contenido: FALSO
  items:
    - label: cuenta
      icono: 'i-lucide-usuario'
      contenido: "Este es el contenido de la cuenta."
    - label: contraseña
      Icono: 'i-lucide-lock'
      contenido: "Este es el contenido de la contraseña."
  Categoría: w-full
---
::

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `unmount-on-hide` para evitar que el contenido se desmonte cuando se colapsan las pestañas.

::component-code
---
Ignora:
  @@507@contenido
  @@508@artículos
  @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externo:
  @060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externalidades:
  @@P061@@P061 [en línea]
Props:
  Desconocido: Falso
  Items:
    - label: cuenta
      icono: 'i-lucide-usuario'
      contenido: "Este es el contenido de la cuenta."
    - label: contraseña
      Icono: 'i-lucide-lock'
      contenido: "Este es el contenido de la contraseña."
  Categoría: w-full
---
::

::note
Puede inspeccionar el DOM para ver el contenido de cada elemento que se representa.
::

@@pH064@color

Utilice el prop `color` para cambiar el color de las pestañas.

::component-code
---
Ignora:
  @@66@contenido
  @067 @ Artículos
  @068@clase
Externo:
  @@pH069@artículos
Externalidades:
  @070000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Color: Neutro
  Contenido: FALSO
  items:
    - label: cuenta
    - label: contraseña
  Categoría: w-full
---
::

@@73@Variación

Utilice el prop `variant` para cambiar la variante de las pestañas.

::component-code
---
Ignora:
  @@75 @ contenido
  @766@puntos
  @777@clase
Externo:
  @788@artículos
Externalidades:
  @@779@079@079@079@079@079@079@079@079@079@079@079@079@079@000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Color: Neutral
  Variación: Link
  Contenido: FALSO
  items:
    - label: cuenta
    - label: contraseña
  Categoría: w-full
---
::

@082 @ Tamaño

Utilice el prop `size` para cambiar el tamaño de las pestañas.

::component-code
---
Ignora:
  @084@contenido
  @085 @ artículos
  @086 @ clase
Externo:
  @087 @ Artículos
Externalidades:
  @@8888@@Tablero [editar]
Props:
  Tamaño: MD
  Variante: Píldora
  Contenido: FALSO
  Items:
    - label: cuenta
    - label: contraseña
  Categoría: w-full
---
::

### Orientación

Utilice el prop `orientation` para cambiar la orientación de las pestañas. Predeterminados a `horizontal`.

::component-code
---
Ignora:
  @@pH094@contenido
  @095 @@ Artículos
  @096@clase
Externo:
  @097@artículos
Externalidades:
  @098@098@098@098@098@098@098@098@098@098@098@098@0998@0998@00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Orientación: Vertical
  Variante: Píldora
  Contenido: FALSO
  items:
    - label: cuenta
    - label: contraseña
  Categoría: w-full
---
::

@101@Ejemplos

### Control elemento activo

Puede controlar el elemento activo mediante el prop `default-value` o la directiva `v-model` con el `value` del elemento. Si no se proporciona `value`, el valor predeterminado es el índice **como una cadena **.

Ejemplo de componente {name="tabs-model-value-example"}

::tip
Utilice el prop `value-key` para cambiar la clave utilizada para hacer coincidir los elementos cuando se proporciona un `v-model` o `default-value`.
::

### Con consulta de ruta

Puede controlar el elemento activo mediante un parámetro de consulta de URL, utilizando `route.query.tab` como el `value` del elemento.

Ejemplo de componente {name="tabs-route-query-example"}

### Con ranura de contenido

Utilice la ranura `#content` para personalizar el contenido de cada elemento.

Ejemplo de componente {name="tabs-content-slot-example"}

### Con la barra de pestañas inferior

Utiliza el prop `ui` para transformar las pestañas en una barra de pestañas inferior de estilo móvil con iconos y etiquetas pequeñas, similar a YouTube o Instagram.

::component-example
---
Colapso: Verdad
Nombre del archivo: 'tabs-bottom-tab-bar-example'
---
::

### Con ranura personalizada

Utilice la propiedad `slot` para personalizar un elemento específico.

Tendrás acceso a las siguientes slots:

@124@@125@126

::component-example
---
Colapso: Verdad
Nombre: 'tabs-custom-slot-example'
---
::

@@pH127 @@ Español

@128@128@128

Componentes Props

@129@129@129

Componentes de slots

@130@@Emisiones

Componentes Emisiones

@@131@131@131

Al acceder al componente a través de una referencia de plantilla, puede utilizar lo siguiente:

| Nombre| Tipo|
| ---- | ---- |
| @132 @@@ 134 @|@@pH133 @|

@136 @@ Proyecto

Componente Tema

@137@Changelog (Edición española)

Categoría: component-changelog
