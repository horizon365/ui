---
title: Comandancia
description: Una paleta de comandos con búsqueda de texto completo impulsada por Fuse.js para una coincidencia difusa eficiente.
category: navigation
keywords:
  - command menu
  - cmdk
  - spotlight
  - global search
links:
  - label: Fuse.js
    icon: i-custom-fuse-js
    to: https://fusejs.io/
    target: _blank
  - label: Listado de box
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/listbox
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/CommandPalette.vue
---

@@pH000@@Uso del producto

Utilice la directiva `v-model` para controlar el valor de la CommandPalette o la prop `default-value` para establecer el valor inicial cuando no necesite controlar su estado.

::component-code
---
Colapso: Verdad
Escondido:
  @@autofocus
Ignora:
  @@F004@grupos
  - modelValue (Edición española)
  @06@clase
Externo:
  @@0007@grupos
  - modelValue (Edición española)
Externalidades:
  @@@P2009@@CommandPaletteGroup []
Categoría:! p-0
Props:
  Categoría:{}
  Autoenfoque: Falso
  Grupos:
    - id:'usuarios'
      Etiqueta: "Usuarios"
      items:
        - label:'Benjamin Canac'(Edición española)
          Nombre: benjamincanac
          El avatar:
            src: 'https://github.com/benjamincanac.png'
            Categoría: Lazy
        - label:'Hugo Richard'(Edición española)
          Sufijo: "HugoRCD"
          El avatar:
            src: 'https://github.com/HugoRCD.png'
            Categoría: Lazy
        - label:'Sébastien Chopin'
          Sufijo: "Atinux"
          El avatar:
            src: 'https://github.com/atinux.png'
            Categoría: Lazy
        - label:'Romain Hamel'(Edición española)
          Sufijo: "Romhml"
          El avatar:
            src: 'https://github.com/romhml.png'
            Categoría: Lazy
        Archivo de la etiqueta: Sandro Circi
          Sufijo: 'sandros94'
          El avatar:
            src: 'https://github.com/sandros94.png'
            Categoría: Lazy
        - label:'Jakub Michálek'(en español)
          Archivo de la etiqueta: J-Michalek
          El avatar:
            src: 'https://github.com/J-Michalek.png'
            Categoría: Lazy
        - label:'Alex'(Edición española)
          Sufijo: "hywax"
          El avatar:
            src: 'https://github.com/hywax.png'
            Categoría: Lazy
        - label:'Maxime Pauvert'(Edición española)
          Sufijo: "MaximePvrt"
          El avatar:
            src: 'https://github.com/maximepvrt.png'
            Categoría: Lazy
  Clase: 'flex-1 h-80'
---
::

::tip{to="#control-selected-items"}
También puede utilizar el evento `@update:model-value` para escuchar el (los) elemento (s) seleccionado (s).
::

@@21@Grupos

El componente CommandPalette filtra los grupos y clasifica los comandos coincidentes por relevancia a medida que los usuarios escriben. Proporciona resultados de búsqueda dinámicos e instantáneos para un descubrimiento eficiente de comandos. Utilice el prop `groups` como una matriz de objetos con las siguientes propiedades:

@@
@@
@@
@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@
@@

::caution
Debe proporcionar un `id` para cada grupo, de lo contrario, el grupo será ignorado.
::

Cada grupo contiene un array de objetos que definen los comandos. Cada elemento puede tener las siguientes propiedades:

@@
@@
@@@ph060@@@ph061@@@ph062
@@
@@
@@@ph069@@@ph070@@@ph071
@@
@@
@@ph078@@@ph079@@@ph080
@@
@@@ph084@@@@ph086@@@@ph085@@@ph090@@@ph087@@@@ph0888@@@@ph089
@@
@@
@@
@100@@101@102
@@@ph103@@@ph104

Puede pasar cualquier propiedad del componente [Link](/docs/components/link#props) como `to`,`target`, etc.

::component-code
---
Colapso: Verdad
Escondido:
  - autofocus
Ignora:
  @@113@grupos
  @114 @ Modelo
  @115 @ clase
Externo:
  @@116@grupos
  @117@117@117
Externalidades:
  - CommandPaletteGroup [en inglés]
Categoría:! p-0
Props:
  Categoría:{}
  Autoenfoque: Falso
  Grupos:
    - id:'usuarios'
      Etiqueta: "Usuarios"
      Items:
        - label:'Benjamin Canac'(Edición española)
          Nombre: benjamincanac
          El avatar:
            src: 'https://github.com/benjamincanac.png'
            Categoría: Lazy
        - label:'Hugo Richard'(Edición española)
          Sufijo: "HugoRCD"
          El avatar:
            src: 'https://github.com/HugoRCD.png'
            Categoría: Lazy
        - label:'Sébastien Chopin'
          Sufijo: "Atinux"
          El avatar:
            src: 'https://github.com/atinux.png'
            Categoría: Lazy
        - label:'Romain Hamel'(Edición española)
          Sufijo: "Romhml"
          El avatar:
            src: 'https://github.com/romhml.png'
            Categoría: Lazy
        Artículo siguiente- : Sandro Circi
          Sufijo: 'sandros94'
          El avatar:
            src: 'https://github.com/sandros94.png'
            Categoría: Lazy
        - label:'Jakub Michálek'(Edición española)
          Archivo de la etiqueta: J-Michalek
          El avatar:
            src: 'https://github.com/J-Michalek.png'
            Categoría: Lazy
        - label:'Alex'(Edición española)
          Sufijo: "hywax"
          El avatar:
            src: 'https://github.com/hywax.png'
            Categoría: Lazy
        - label:'Maxime Pauvert'
          Sufijo: "MaximePvrt"
          El avatar:
            src: 'https://github.com/maximepvrt.png'
            Categoría: Lazy
  Categoría: flex-1
---
::

::tip{to="#with-children-in-items"}
Cada elemento puede tomar un array de objetos con las siguientes propiedades para crear submenús:
::

@130@1300 años

Utilice el prop `multiple` para permitir múltiples selecciones.

::component-code
---
Colapso: Verdad
Escondido:
  - autofocus (Edición española)
Ignora:
  @@313@grupos
  - modelValue (Edición española)
  @135 @@ Multiplicación
  @136 @ clase
Externo:
  @137 @ Grupos
  - modelValue (Edición española)
Externalidades:
  - CommandPaletteGroup [en inglés]
Categoría:! p-0
Props:
  Multiplicación: True
  Autoenfoque: Falso
  Modelos: []
  Grupos:
    - id:'usuarios'
      Etiqueta: "Usuarios"
      items:
        - label:'Benjamin Canac'(Edición española)
          Nombre: benjamincanac
          El avatar:
            src: 'https://github.com/benjamincanac.png'
            Categoría: Lazy
        Archivo de la etiqueta: 'Hugo Richard'
          Sufijo: "HugoRCD"
          El avatar:
            src: 'https://github.com/HugoRCD.png'
            Categoría: Lazy
        - label:'Sébastien Chopin'
          Sufijo: "Atinux"
          El avatar:
            src: 'https://github.com/atinux.png'
            Categoría: Lazy
        - label:'Romain Hamel'(Edición española)
          Sufijo: "Romhml"
          El avatar:
            src: 'https://github.com/romhml.png'
            Categoría: Lazy
        Artículo siguiente- : Sandro Circi
          Sufijo: 'sandros94'
          El avatar:
            src: 'https://github.com/sandros94.png'
            Categoría: Lazy
        - label:'Jakub Michálek'(Edición española)
          Archivo de la etiqueta: J-Michalek
          El avatar:
            src: 'https://github.com/J-Michalek.png'
            Categoría: Lazy
        - label:'Alex'(Edición española)
          Sufijo: "hywax"
          El avatar:
            src: 'https://github.com/hywax.png'
            Categoría: Lazy
        Archivo de la etiqueta: Maxime Pauvert
          Sufijo: "MaximePvrt"
          El avatar:
            src: 'https://github.com/maximepvrt.png'
            Categoría: Lazy
  Categoría: Flex-1
---
::

::caution
Asegúrese de pasar un array a la directiva `default-value` o a la directiva `v-model`.
::

### Placeholder (Edición española)

Utilice el prop `placeholder` para cambiar el texto del marcador de posición.

::component-code
---
Colapso: Verdad
Escondido:
  - autofocus
Ignora:
  @154 @ clase
  @155 @ Grupos
Externo:
  @156 @ Grupos
Externalidades:
  - CommandPaletteGroup (en inglés)
Categoría:! p-0
Props:
  Autoenfoque: Falso
  marcador de posición:'Buscar una app...'
  Grupos:
    - id:'aplicaciones'
      Items:
        - label:'Calendario'
          icono: 'i-lucide-calendar'
        - label:'Música'
          icon: 'i-lucide-music'
        - label:"Los mapas"
          icono: 'i-lucide-map'
  Categoría: Flex-1
---
::

### Tamaño: badge{label="4.4+" class="align-text-top"}

Utilice el prop `size` para cambiar el tamaño de la CommandPalette.

::component-code
---
Colapso: Verdad
Escondido:
  - autofocus
Ignora:
  @166 @ clase
  @@167@grupos
Externo:
  @168 @ Grupos
Externalidades:
  - CommandPaletteGroup [en inglés]
Categoría:! p-0
Props:
  Autoenfoque: Falso
  Tamaño:"XL"
  Grupos:
    - id:'aplicaciones'
      Items:
        - label:'Calendario'
          icono: 'i-lucide-calendar'
        - label:'Música'
          icon: 'i-lucide-music'
        - label:'Mapas'(Edición española)
          icono: 'i-lucide-map'
  Categoría: flex-1
---
::

@174 @ Icono

Utilice el prop `icon` para personalizar la entrada [Icon](/docs/components/icon).

::component-code
---
Colapso: Verdad
Escondido:
  - autofocus
Ignora:
  @2018@clase
  @@1833@grupos
Externo:
  @@184@grupos
Externalidades:
  - CommandPaletteGroup [en inglés]
Categoría:! p-0
Props:
  Autoenfoque: Falso
  Icono: 'i-lucide-box'
  Grupos:
    - id:'aplicaciones'
      Items:
        - label:'Calendario'
          icono: 'i-lucide-calendar'
        - label:"La música"
          icon: 'i-lucide-music'
        - label:'Mapas'(Edición española)
          icono: 'i-lucide-map'
  Categoría: Flex-1
---
::

::framework-only
#nuxidad
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono de forma global en su `app.config.ts` bajo la tecla `ui.icons.search`.
:::

#vista
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su `vite.config.ts` bajo la tecla `ui.icons.search`.
:::
::

### Icono seleccionado

Utilice el prop `selected-icon` para personalizar el elemento seleccionado [Icon](/docs/components/icon).

::component-code
---
Colapso: Verdad
Escondido:
  - autofocus
Ignora:
  @@202@grupos
  @@pH203@modelValue (Edición española)
  @@204@multiple
  @205@clase
Externo:
  @206@grupos
  @2017@modelValoración
Externalidades:
  @208@208@2008 [en línea]
Categoría:! p-0
Props:
  Multiplicación: True
  Autoenfoque: Falso
  Modelación:
    - label:'Benjamin Canac'(Edición española)
      Nombre: benjamincanac
      El avatar:
        src: 'https://github.com/benjamincanac.png'
        Categoría: Lazy
  Icono seleccionado: 'i-lucide-circle-check'
  Grupos:
    - id:'usuarios'
      Etiqueta: "Usuarios"
      Items:
        - label:'Benjamin Canac'(Edición española)
          Nombre: benjamincanac
          El avatar:
            src: 'https://github.com/benjamincanac.png'
            Categoría: Lazy
        - label:'Hugo Richard'(Edición española)
          Sufijo: "HugoRCD"
          El avatar:
            src: 'https://github.com/HugoRCD.png'
            Categoría: Lazy
        - label:'Sébastien Chopin'
          Sufijo: "Atinux"
          El avatar:
            src: 'https://github.com/atinux.png'
            Categoría: Lazy
        - label:'Romain Hamel'(Edición española)
          Sufijo: "Romhml"
          El avatar:
            src: 'https://github.com/romhml.png'
            Categoría: Lazy
        Archivo de la etiqueta: Sandro Circi
          Sufijo: 'sandros94'
          El avatar:
            src: 'https://github.com/sandros94.png'
            Categoría: Lazy
        - label:'Jakub Michálek'(Edición española)
          Archivo de la etiqueta: J-Michalek
          El avatar:
            src: 'https://github.com/J-Michalek.png'
            Categoría: Lazy
        - label:'Alex'(Edición española)
          Sufijo: "hywax"
          El avatar:
            src: 'https://github.com/hywax.png'
            Categoría: Lazy
        - label:'Maxime Pauvert'(Edición española)
          Sufijo: "MaximePvrt"
          El avatar:
            src: 'https://github.com/maximepvrt.png'
            Categoría: Lazy
  Categoría: Flex-1
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

### Trailing Icon (Edición española)

Utilice el prop `trailing-icon` para personalizar el [Icon](/docs/components/icon) cuando un elemento tiene hijos.

::component-code
---
Colapso: Verdad
Categoría: true
Escondido:
  - autofocus
Ignora:
  @@231@grupos
  @232@clase
Externo:
  @@2333@grupos
Externalidades:
  @234@@CommandPaletteGroup (en inglés)
Categoría:! p-0
Props:
  Autoenfoque: Falso
  Icono: 'i-lucide-arrow-right'
  Grupos:
    - id:'acciones'
      Items:
        - label:'Compartir'.
          icono: 'i-lucide-share'
          niños:
            - label:'Correo electrónico'
              icon: 'i-lucide-mail'
            - label:'Copiar'(Edición española)
              Icono: 'i-lucide-copy'
            - label:'Enlace'
              icono: 'i-lucide-link'
  Categoría: flex-1
---
::

::framework-only
#nuxidad
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono de forma global en su `app.config.ts` bajo la tecla `ui.icons.chevronRight`.
:::

#vista
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su `vite.config.ts` bajo la tecla `ui.icons.chevronRight`.
:::
::

@@2444@@Cargando

Utilice el prop `loading` para mostrar un icono de carga en el CommandPalette.

::component-code
---
Colapso: Verdad
Escondido:
  - autofocus
Ignora:
  @247 @ clase
  @@248@grupos
Externo:
  @@249@grupos
Externalidades:
  - CommandPaletteGroup [en inglés]
Categoría:! p-0
Props:
  Autoenfoque: Falso
  Carga: Verdad
  Grupos:
    - id:'aplicaciones'
      Items:
        - label:'Calendario'
          icono: 'i-lucide-calendar'
        - label:"La música"
          icon: 'i-lucide-music'
        - label:"Los mapas"
          icono: 'i-lucide-map'
  Categoría: flex-1
---
::

### Loading Icon

Use the `loading-icon` prop to customize the loading icon. Default to `i-lucide-loader-circle`.

::component-code
---
Colapso: Verdad
Escondido:
  - autofocus
Ignora:
  @259 @ clase
  @260@grupos
Externo:
  @@261@grupos
Externalidades:
  @@262@CommandPaletteGroup [en]
Categoría:! p-0
Props:
  Autoenfoque: Falso
  Carga: Verdad
  LoadingIcon: 'i-lucide-loader'(en inglés)
  Grupos:
    - id:'aplicaciones'
      Items:
        - label:'Calendario'
          icono: 'i-lucide-calendar'
        - label:"La música"
          icon: 'i-lucide-music'
        - label:"Mapas"(Edición española)
          icono: 'i-lucide-map'
  Categoría: flex-1
---
::

::framework-only
#Nuxidad
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono de forma global en su `app.config.ts` bajo la tecla `ui.icons.loading`.
:::

#vista
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su `vite.config.ts` bajo la tecla `ui.icons.loading`.
:::
::

@271 @ Cerrar

Utilice el `close` prop para mostrar un [Button](/docs/components/button) para descartar el CommandPalette.

::tip
Se emitirá un evento `update:open` cuando se haga clic en el botón de cierre.
::

::component-code
---
Colapso: Verdad
Escondido:
  - autofocus
Ignora:
  @279@clase
  @280@grupos
  @281@Cerrar
Externo:
  @@282@grupos
Externalidades:
  - CommandPaletteGroup []
Categoría:! p-0
Props:
  Autoenfoque: Falso
  Cerrado: Verdad
  Grupos:
    - id:'aplicaciones'
      Items:
        - label:'Calendario'
          icono: 'i-lucide-calendar'
        - label:'Música'
          icon: 'i-lucide-music'
        - label:"Los mapas"
          icono: 'i-lucide-map'
  Categoría: flex-1
---
::

Puede pasar cualquier propiedad del componente [Button](/docs/components/button) para personalizarlo.

::component-code
---
Colapso: Verdad
Categoría: true
Escondido:
  - autofocus
Ignora:
  - close.color (en inglés)
  - close.variante
  @@295@grupos
  @296 @ clase
Externo:
  @@297@grupos
Externalidades:
  @@298@CommandPaletteGroup [en]
Categoría:! p-0
Props:
  Autoenfoque: Falso
  Cerrado:
    Color: Primario
    Categoría: Outline
    Categoría:"Round-full"
  Grupos:
    - id:'aplicaciones'
      items:
        - label:'Calendario'
          icono: 'i-lucide-calendar'
        - label:'Música'
          icon: 'i-lucide-music'
        - label:"Los mapas"
          icono: 'i-lucide-map'
  Categoría: Flex-1
---
::

### Cerrar Icono

Utilice el prop `close-icon` para personalizar el botón de cierre [Icon](/docs/components/icon).

::component-code
---
Colapso: Verdad
Escondido:
  - autofocus
Ignora:
  @311@clase
  @312 @ Grupos
  @313@Cerrar
Externo:
  @@314@grupos
Externalidades:
  - CommandPaletteGroup []
Categoría:! p-0
Props:
  Autoenfoque: Falso
  Cerrado: Verdad
  Icono: 'i-lucide-arrow-right'
  Grupos:
    - id:'aplicaciones'
      items:
        - label:'Calendario'
          icono: 'i-lucide-calendar'
        - label:'Música'
          icon: 'i-lucide-music'
        - label:'Mapas'
          icono: 'i-lucide-map'
  Categoría: Flex-1
---
::

::framework-only
#nuxidad
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono de forma global en su `app.config.ts` bajo la tecla `ui.icons.close`.
:::

#vista
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su `vite.config.ts` bajo la tecla `ui.icons.close`.
:::
::

@@2424@Regresar

Utilice el prop `back` para personalizar u ocultar el botón Atrás (con el valor `false`) que se muestra al navegar por un submenú.

Puede pasar cualquier propiedad del componente [Button](/docs/components/button) para personalizarlo.

::component-code
---
Colapso: Verdad
Categoría: true
Escondido:
  - autofocus
Ignora:
  - back.color (en inglés)
  @@3333@grupos
  @334@clase
Externo:
  @@335@grupos
Externalidades:
  - CommandPaletteGroup []
Categoría:! p-0
Props:
  Autoenfoque: Falso
  Atrás:
    Color: Primario
  Grupos:
    - id:'acciones'
      items:
        - label:'Compartir'.
          icono: 'i-lucide-share'
          niños:
            - label:'Correo electrónico'
              icon: 'i-lucide-mail'
            - label:'Copiar'(Edición española)
              Icono: 'i-lucide-copy'
            - label:'Enlace'
              icono: 'i-lucide-link'
  Categoría: Flex-1
---
::

### Atrás Icono

Utilice el prop `back-icon` para personalizar el botón de retroceso [Icon](/docs/components/icon).

::component-code
---
Colapso: Verdad
Escondido:
  - autofocus
Ignora:
  @@F350@clase
  @351 @ Grupos
  @352 @ de nuevo
Externo:
  @@353@grupos
Externalidades:
  - CommandPaletteGroup []
Categoría:! p-0
Props:
  Autoenfoque: Falso
  Atrás: Verdad
  backIcon: 'i-lucide-house'(en inglés)
  Grupos:
    - id:'acciones'
      items:
        - label:'Compartir'.
          icono: 'i-lucide-share'
          niños:
            - label:'Correo electrónico'
              icon: 'i-lucide-mail'
            - label:'Copiar'(Edición española)
              Icono: 'i-lucide-copy'
            - label:'Enlace'
              icono: 'i-lucide-link'
  Categoría: flex-1
---
::

::framework-only
#Nuxidad
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono de forma global en su `app.config.ts` bajo la tecla `ui.icons.arrowLeft`.
:::

#vista
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su `vite.config.ts` bajo la tecla `ui.icons.arrowLeft`.
:::
::

@@364@@desactivado

Utilice el prop `disabled` para desactivar el CommandPalette.

::component-code
---
Colapso: Verdad
Escondido:
  - autofocus
Ignora:
  @367 @ Grupos
  @368@clase
Externo:
  @369@grupos
Externalidades:
  - CommandPaletteGroup [en]
Categoría:! p-0
Props:
  Autoenfoque: Falso
  Discapacidad: Verdadero
  Grupos:
    - id:'aplicaciones'
      items:
        - label:'Calendario'
          icono: 'i-lucide-calendar'
        - label:"La música"
          icon: 'i-lucide-music'
        - label:"Mapas"(Edición española)
          icono: 'i-lucide-map'
  Categoría: flex-1
---
::

@375@Ejemplos

### Control artículo (s) seleccionado (s)

Puede controlar los elementos seleccionados utilizando la directiva `default-value` o `v-model`, utilizando el campo `onSelect` en cada elemento o utilizando el evento `@update:model-value`.

::component-example
---
Colapso: Verdad
Nombre del archivo: 'command-palette-select-example'
Categoría:! p-0
Props:
  Autoenfoque: Falso
---
::

::tip
Utilice la prop `value-key` para seleccionar un campo de un elemento que se utilizará como valor en lugar del objeto en sí. Use la prop `by` para comparar objetos por un campo en lugar de por referencia.
::

### Término de búsqueda de control

Utilice la directiva `v-model:search-term` para controlar el término de búsqueda.

::component-example
---
Colapso: Verdad
Nombre: 'command-palette-search-term-example'
Categoría:! p-0
Props:
  Autoenfoque: Falso
---
::

::note
En este ejemplo se utiliza el evento `@update:model-value` para restablecer el término de búsqueda cuando se selecciona un elemento.
::

### Con niños en artículos

Puede crear menús jerárquicos utilizando la propiedad `children` en los elementos. Cuando un elemento tiene hijos, mostrará automáticamente un icono de chevron y habilitará la navegación en un submenú.

::component-example
---
Colapso: Verdad
Categoría: true
Nombre del archivo: 'command-palette-items-children-example'
Categoría:! p-0
Props:
  Autoenfoque: Falso
---
::

::note
Al navegar en un submenú:
- El término de búsqueda se restablece
- Aparece un botón de retroceso en la entrada
- Puede volver al grupo anterior pulsando la tecla: kbd{value="backspace"}
::

### Con artículos recuperados

Puede obtener elementos de una API y usarlos en el CommandPalette.

::component-example
---
Colapso: Verdad
Nombre: 'command-palette-fetch-example'
Categoría:! p-0
Props:
  Autoenfoque: Falso
---
::

::note
Este ejemplo utiliza `useLazyFetch` con `server: false` para obtener datos en el cliente sin bloquear el renderizado inicial. El estado de carga comprueba el estado de `pending` y `idle` para mostrar un indicador de carga antes y durante la búsqueda.
::

### Con el filtro ignorar

Puede establecer el campo `ignoreFilter` a `true` en un grupo para desactivar la búsqueda interna y utilizar su propia lógica de búsqueda.

::component-example
---
Colapso: Verdad
Nombre del archivo: 'command-palette-ignore-filter-example'
Categoría:! p-0
Props:
  Autoenfoque: Falso
---
::

::note
Este ejemplo utiliza [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced) para desacreditar las llamadas a la API. El estado de carga comprueba el estado de `pending` y `idle` para mostrar un indicador de carga antes y durante la recuperación.
::

### Con artículos post-filtrados

Puede usar el campo `postFilter` en un grupo para filtrar elementos después de que se haya realizado la búsqueda.

::component-example
---
Colapso: Verdad
Nombre del archivo: 'command-palette-post-filter-example'
Categoría:! p-0
Props:
  Autoenfoque: Falso
---
::

::note
Comience a escribir para ver los elementos con mayor nivel aparecen.
::

### Con búsqueda personalizada de fusibles

Puede utilizar el prop `fuse` para anular las opciones de [useFuse](https://vueuse.org/integrations/useFuse) que por defecto es:

```ts
{
  fuseOptions: {
    ignoreLocation: true,
    threshold: 0.1,
    keys: ['label', 'description', 'suffix']
  },
  resultLimit: 12,
  matchAllWhenSearchEmpty: true
}
```

::tip
El `fuseOptions` son las opciones de [Fuse.js](https://www.fusejs.io/), el `resultLimit` es el número máximo de resultados a devolver y el `matchAllWhenSearchEmpty` es un booleano para que coincida con todos los elementos cuando el término de búsqueda está vacío.
::

Por ejemplo, puede establecer `{ fuseOptions: { includeMatches: true } }`{lang="ts-type"} para resaltar el término de búsqueda en los elementos.

::component-example
---
Colapso: Verdad
Nombre del archivo: 'command-palette-fuse-example'
Categoría:! p-0
Props:
  Autoenfoque: Falso
---
::

### Con virtualización: badge{label="4.1+" class="align-text-top"}

Utilice la prop `virtualize` para habilitar la virtualización de listas grandes como un booleano o un objeto con opciones como `{ estimateSize: 32, overscan: 12 }`.

::warning{to="https://github.com/unovue/reka-ui/issues/1885" target="_blank"}
Cuando está habilitado, todos los grupos se aplanan en una sola lista debido a una limitación de Reka UI.
::

::component-example
---
Colapso: Verdad
Nombre: 'command-palette-virtualize-example'
Categoría:! p-0
Props:
  Autoenfoque: Falso
---
::

### Dentro de un Popover

Puede usar el componente CommandPalette dentro del contenido de un [Popover](/docs/components/popover).

::component-example
---
Colapso: Verdad
Nombre: 'popover-command-palette-example'
Props:
  Autoenfoque: Falso
---
::

### Dentro de un Modal

Puede usar el componente CommandPalette dentro del contenido de un [Modal](/docs/components/modal).

::component-example
---
Colapso: Verdad
Nombre: 'modal-command-palette-example'
Props:
  Autoenfoque: Falso
---
::

::note
Este ejemplo utiliza `useLazyFetch` con `immediate: false` para obtener datos solo cuando se abre el Modal.
::

### Dentro de un cajón

Puede utilizar el componente CommandPalette dentro del contenido de un [Drawer](/docs/components/drawer).

::component-example
---
Colapso: Verdad
Nombre: 'drawer-command-palette-exemple'
Props:
  Autoenfoque: Falso
---
::

::note
En este ejemplo se utiliza `useLazyFetch` con `immediate: false` para obtener datos sólo cuando se abre el cajón.
::

### Listen estado abierto

Cuando se utiliza el prop `close`, se puede escuchar el evento `update:open` cuando se hace clic en el botón.

::component-example
---
Colapso: Verdad
Nombre: 'command-palette-open-example'
Props:
  Autoenfoque: Falso
---
::

::note
Esto puede ser útil cuando se utiliza el CommandPalette dentro de un [`Modal`](/docs/components/modal) por ejemplo.
::

### Con ranura de pie de página

Utilice la ranura `#footer` para agregar contenido personalizado en la parte inferior de la paleta de comandos, como ayuda de atajos de teclado o acciones adicionales.

::component-example
---
Colapso: Verdad
Nombre del archivo: 'command-palette-footer-slot-example'
Categoría:! p-0
Props:
  Autoenfoque: Falso
---
::

### Con ranura personalizada

Utilice la propiedad `slot` para personalizar un elemento o grupo específico.

Tendrás acceso a las siguientes slots:

@@ph470@@@ph471@@@ph472 @
@@@ph473@@@@ph474@@@ph475 @
@@@ph476@@@ph477@@@ph478
@@ph480@@@ph481

@@ph482@@@ph483@@@ph484 @
@@@ph485@@@ph486@@@ph487
@@ph488@@@ph489@@@ph490 @
@@@ph491@@@@ph492@@@ph493 @

::component-example
---
Colapso: Verdad
Nombre del archivo: 'command-palette-custom-slot-example'
Categoría:! p-0
Props:
  Autoenfoque: Falso
---
::

::tip{to="#slots"}
También puede utilizar las ranuras `#item`,`#item-leading`,`#item-label` y `#item-trailing` para personalizar todos los artículos.
::

@@pH498

@499 @ Propuestas

Componentes Props

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes de slots

@501@@Emisiones

Componentes Emisiones

@502 @@ Proyecto

Componente Tema

@503@@Changelog

Categoría: component-changelog
