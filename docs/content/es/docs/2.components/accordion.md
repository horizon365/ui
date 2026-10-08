---
description: Un conjunto de paneles plegables.
category: data
keywords:
  - disclosure
  - collapse
  - faq
  - expansion panel
links:
  - label: Acordeón
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/accordion
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Accordion.vue
---

@@pH000@@Uso del producto

Utilice el componente Acordeón para mostrar una lista de elementos plegables.

::component-code
---
Colapso: Verdad
Ignora:
  @0001@artículos
  @@pH002@ui.contenido
Externo:
  @@pH000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externalidades:
  @@00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Escondido:
  @005@clase
  @0006@jajajajajajajajajaja
  @@pH007@defaultValue (en inglés)
Props:
  Valoración:'0'
  Categoría: px-4 max-w-lg
  UU.:
    Contenido: 'mutado'
  Items:
    - label:'¿ Nuxt UI es de uso gratuito?'
      Nuxt UI es completamente gratuito y de código abierto bajo la licencia MIT. Todos los más de 125 componentes están disponibles para todos.
    - label:'¿ Puedo usar Nuxt UI con Vue sin Nuxt?'
      Contenido:"¡ Sí! Aunque está optimizado para Nuxt, la interfaz de usuario de Nuxt funciona perfectamente con proyectos independientes de Vue a través de nuestro complemento Vite. Puede seguir la guía de instalación [](/docs/getting-started/installation/vue) para comenzar.
    - label:'¿ Está Nuxt UI listo para la producción?'
      La interfaz de usuario de Nuxt se utiliza en producción en miles de aplicaciones con pruebas exhaustivas, actualizaciones periódicas y mantenimiento activo.
---
::

@150000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `items` como una matriz de objetos con las siguientes propiedades:

@@
@@
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
  @@48000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externo:
  @494@artículos
Externalidades:
  @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Escondido:
  @@501@clase
Props:
  Categoría: px-4
  Items:
    - label:'Iconos'(Edición española)
      icono: 'i-lucide-smile'
      contenido: 'No tienes nada que hacer,@ nuxt/icon se encargará de ello automáticamente.'
    - label:'Los colores'
      icon: 'i-lucide-swatch-book'
      contenido: 'Elija un color primario y un color neutro de su tema CSS Tailwind.'
    - label:'Componentes'
      Icono: 'i-lucide-box'
      contenido: 'Puede personalizar los componentes utilizando los accesorios `class`/`ui` o en su app.config.ts.'
---
::

@@57@@Multiplicación

Establezca el prop `type` a `multiple` para permitir que varios elementos estén activos al mismo tiempo.

::component-code
---
Ignora:
  @@ph061@type
  @@pH062@artículos
Externo:
  @@pH063@artículos
Externalidades:
  @@P064@@P064 [en línea]
Escondido:
  @065@clase
Props:
  Categoría: px-4
  Categoría:"Multiple"
  items:
    - label:'Icons'
      icono: 'i-lucide-smile'
      contenido: 'No tienes nada que hacer,@ nuxt/icon se encargará de ello automáticamente.'
    - label:'Los colores'
      icon: 'i-lucide-swatch-book'
      contenido: 'Elija un color primario y un color neutro de su tema CSS Tailwind.'
    - label:'Componentes'
      Icono: 'i-lucide-box'
      contenido: 'Puede personalizar los componentes utilizando los accesorios `class`/`ui` o en su app.config.ts.'
---
::

@@701@@@Insumible

Cuando `type` es `single`, puede configurar el prop `collapsible` a `false` para evitar que el elemento activo colapse.

::component-code
---
Ignora:
  @@766@flip-flow
  @@777@artículos
Externo:
  @788@artículos
Externalidades:
  @@799@@799 [en línea]
Escondido:
  @080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Categoría: px-4
  Pliego: Falso
  items:
    - label:'Iconos'(Edición española)
      icono: 'i-lucide-smile'
      contenido: 'No tienes nada que hacer,@ nuxt/icon se encargará de ello automáticamente.'
    - label:'Los colores'
      icon: 'i-lucide-swatch-book'
      contenido: 'Elija un color primario y un color neutro de su tema CSS Tailwind.'
    - label:'Componentes'
      Icono: 'i-lucide-box'
      contenido: 'Puede personalizar los componentes utilizando los accesorios `class`/`ui` o en su app.config.ts.'
---
::

@866@@ununmount

Utilice el prop `unmount-on-hide` para evitar que el contenido se desmonte cuando el acordeón se colapsa.

::component-code
---
Ignora:
  @089 @ Artículos
Externo:
  @090000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externalidades:
  @@P091@@P091 [en línea]
Escondido:
  @092@clase
Props:
  Categoría: px-4
  Desconocido: Falso
  items:
    - label:'Iconos'(Edición española)
      icono: 'i-lucide-smile'
      contenido: 'No tienes nada que hacer,@ nuxt/icon se encargará de ello automáticamente.'
    - label:'Los colores'
      icon: 'i-lucide-swatch-book'
      contenido: 'Elija un color primario y un color neutro de su tema CSS Tailwind.'
    - label:'Componentes'
      Icono: 'i-lucide-box'
      contenido: 'Puede personalizar los componentes utilizando los accesorios `class`/`ui` o en su app.config.ts.'
---
::

::note
Puede inspeccionar el DOM para ver el contenido de cada elemento que se representa.
::

@@pH098@@desactivado

Utilice la propiedad `disabled` para desactivar el acordeón.

También puede deshabilitar un elemento específico utilizando la propiedad `disabled` en el objeto elemento.

::component-code
---
Ignora:
  @101@artículos
Externo:
  @2010@artículos
Externalidades:
  @103@103@103@103@103@103@103)
Escondido:
  @@clase104
Props:
  Categoría: px-4
  Discapacidad: Verdadero
  Items:
    - label:'Iconos'(Edición española)
      icono: 'i-lucide-smile'
      contenido: 'No tienes nada que hacer,@ nuxt/icon se encargará de ello automáticamente.'
    - label:'Los colores'
      icon: 'i-lucide-swatch-book'
      contenido: 'Elija un color primario y un color neutro de su tema CSS Tailwind.'
      Discapacidad: Verdadero
    - label:'Componentes'
      Icono: 'i-lucide-box'
      contenido: 'Puede personalizar los componentes utilizando los accesorios `class`/`ui` o en su app.config.ts.'
---
::

### Trailing Icon (Edición española)

Utilice el prop `trailing-icon` para personalizar el [Icon](/docs/components/icon) de cada elemento.

::tip
También puede establecer un icono para un elemento específico mediante la propiedad `trailingIcon` en el objeto elemento.
::

::component-code
---
Ignora:
  @118@artículos
Externo:
  @119@artículos
Externalidades:
  @120@120@120@120@120@120@120@120@120@120@120@120@120@12001111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
Escondido:
  @121@clase
Props:
  Categoría: px-4
  TrailingIcono: 'i-lucide-arrow-down'
  Items:
    - label:'Iconos'(Edición española)
      icono: 'i-lucide-smile'
      contenido: 'No tienes nada que hacer,@ nuxt/icon se encargará de ello automáticamente.'
      TrailingIcono: 'i-lucide-plus'
    - label:"Los colores"
      icon: 'i-lucide-swatch-book'
      contenido: 'Elija un color primario y un color neutro de su tema CSS Tailwind.'
    - label:'Componentes'
      Icono: 'i-lucide-box'
      contenido: 'Puede personalizar los componentes utilizando los accesorios `class`/`ui` o en su app.config.ts.'
---
::

::framework-only
#Nuxidad
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono de forma global en su `app.config.ts` bajo la tecla `ui.icons.chevronDown`.
:::

#vista
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su `vite.config.ts` bajo la tecla `ui.icons.chevronDown`.
:::
::

@131@Ejemplos

### Control elemento (s) activo (s)

Puede controlar el elemento activo mediante el prop `default-value` o la directiva `v-model` con el `value` del elemento. Si no se proporciona `value`, el valor predeterminado es el índice **como una cadena **.

::component-example
---
name: 'modelo-modelo-valor-ejemplo'
Props:
  Categoría: px-4
---
::

::tip
Utilice el prop `value-key` para cambiar la clave utilizada para hacer coincidir los elementos cuando se proporciona un `v-model` o `default-value`.
::

::caution
Cuando `type="multiple"`, asegúrese de pasar una matriz a la `default-value` prop o la directiva `v-model`.
::

### Con arrastrar y soltar

Utilice el [`useSortable`](https://vueuse.org/integrations/useSortable/) componible desde [](https://vueuse.org/integrations/README.html) para habilitar la funcionalidad de arrastrar y soltar en el acordeón. Esta integración envuelve [Sortable.js](https://sortablejs.github.io/Sortable/) para proporcionar una experiencia de arrastrar y soltar sin interrupciones.

::component-example
---
Nombre: 'drag-and-drop-example'
---
::

### Con ranura para el cuerpo

Utilice la ranura `#body` para personalizar el cuerpo de cada elemento.

::component-example
---
Nombre: 'acordeón-cuerpo-slot-ejemplo'
Props:
  Categoría: px-4
---
::

::tip
La ranura `#body` incluye algunos estilos predefinidos, utilice la ranura [`#content` si desea comenzar desde cero.
::

### Con espacio de contenido

Utilice la ranura `#content` para personalizar el contenido de cada elemento.

::component-example
---
Nombre: 'acordeon-content-slot-example'
Props:
  Categoría: px-4
---
::

### Con slot personalizado

Utilice la propiedad `slot` para personalizar un elemento específico.

Tendrás acceso a los siguientes slots:

@172@@173@174
@@@ph175@@@ph176@@@ph177

::component-example
---
Nombre: 'accordeon-custom-slot-example'
Props:
  Categoría: px-4
---
::

### Con contenido de descuento

Puede usar el componente [Markdown](https://comark.dev/rendering/vue) de `@comark/vue` para representar la reducción en los artículos de acordeón.

::component-example
---
Colapso: Verdad
nombre: 'acordeón-markdown-ejemplo'
Categoría: px-8
---
::

@P184 @

@185@1850 puntos

Componentes Props

@186@1866

Componentes de slots

### Emisiones

Componentes Emisiones

@188 @@ Proyecto

Componente Tema

@189@Changelog (Edición española)

Categoría: component-changelog
