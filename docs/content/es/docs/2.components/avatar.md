---
description: Un elemento img con respaldo y soporte para Nuxt Image.
category: element
keywords:
  - profile picture
  - user image
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Avatar.vue
---

@@pH000@@Uso del producto

El Avatar utiliza el componente `<NuxtImg>` cuando [`@nuxt/image`](https://github.com/nuxt/image) está instalado, volviendo a `img` de lo contrario.

::component-code
---
Ignora:
  @@src008 @
Props:
  src: 'https://github.com/benjamincanac.png'
---
::

::note
Puede pasar cualquier propiedad del elemento HTML `<img>` como `alt`,`loading`, etc.
::

::tip
Para darse de baja de `@nuxt/image`, utilice el prop `as`:`:as="{ img: 'img' }"`.
::

@@15 @

Utilice el prop `src` para establecer la URL de la imagen.

::component-code
---
Ignora:
  @170000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  src: 'https://github.com/benjamincanac.png'
  Categoría: Lazy
---
::

@180000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `size` para establecer el tamaño del Avatar.

::component-code
---
Ignora:
  @2000@src
  @@21@Loading (Edición española)
Props:
  src: 'https://github.com/benjamincanac.png'
  Tamaño: XL
  Categoría: Lazy
---
::

::note
El `<img>` del elemento `width` y `height` se establecen automáticamente sobre la base de la `size` prop.
::

@26@Icon

Utilice el prop `icon` para mostrar un respaldo [Icon](/docs/components/icon).

::component-code
---
Props:
  icono: 'i-lucide-image'
  Tamaño: MD
---
::

@@pH032@Texto en español

Utilice el prop `text` para mostrar un texto alternativo.

::component-code
---
Props:
  Nombre: "+1"
  Tamaño: MD
---
::

@34@@Alt

Cuando no se proporciona ningún icono o texto, el **initials** de la `alt` prop se utiliza como alternativa.

::component-code
---
Props:
  Archivo de la etiqueta: Benjamin Canac
  Tamaño: MD
---
::

::note
El `alt` prop se pasa a la `img` elemento como el `alt` atributo.
::

### Color: badge{label="4.8+" class="align-text-top"}

Utilice el prop `color` para cambiar el color del Avatar.

::component-code
---
Props:
  Color: Primario
  Archivo de la etiqueta: Benjamin Canac
---
::

@444@@Chic

Utilice el prop `chip` para mostrar un chip alrededor del Avatar.

::component-code
---
Categoría: true
Ignora:
  @46@src
  @474@carga
  - chip.insert (en inglés)
Props:
  src: 'https://github.com/benjamincanac.png'
  Categoría: Lazy
  The chip:
    Inserción: True
---
::

@@ph049@@Examples

### Con información útil

Puede usar un componente [Tooltip](/docs/components/tooltip) para mostrar una información sobre herramientas al pasar el Avatar por encima.

Ejemplo de componente {name="avatar-tooltip-example"}

### Con máscara

Puedes usar una máscara CSS para mostrar un avatar con una forma personalizada en lugar de un círculo simple.

Ejemplo de componente {name="avatar-mask-example"}

@@pH058

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes" target="_blank"}
Este componente también soporta todos los atributos HTML nativos `<img>`.
::

@061 @@ Proyecto

Componente Tema

@@2006@Changelog

Categoría: component-changelog
