---
description: Un elemento textarea para introducir texto de varias líneas.
category: form
keywords:
  - multiline
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Textarea.vue
---

@@pH000@@Uso del producto

Utilice la directiva `v-model` para controlar el valor de la Textarea.

::component-code
---
Ignora:
  - modelValoración
Externo:
  - modelValue (Edición española)
Props:
  Modelos: ''
---
::

@@pH004@@Roves

Utilice el prop `rows` para establecer el número de filas. Defaults a `3`.

::component-code
---
Props:
  Rutas: 12
---
::

@@@P2007@Placeholder (Edición española)

Utilice el prop `placeholder` para establecer un texto de marcador de posición.

::component-code
---
Props:
  marcador de posición:'Tipo algo...'
---
::

### auto-redimensionamiento

Utilice el prop `autoresize` para habilitar el redimensionamiento automático de la altura de la Textarea.

::component-code
---
Ignora:
  @@P011@@modelValue (Edición española)
Externo:
  @@P2012@modelValue (Edición española)
Props:
  modelValue: 'Este es un texto largo que cambiará automáticamente la altura de la Textarea.'
  Autoedición: true
---
::

Utilice el prop `maxrows` para establecer el número máximo de filas al cambiar el tamaño automáticamente. Si se establece en `0`, la Textarea crecerá indefinidamente.

::component-code
---
Ignora:
  @@P015@modelValue (Edición española)
Externo:
  @@P016@modelValue (Edición española)
Props:
  modelValue: 'Este es un texto largo que redimensionará automáticamente la altura de la Textarea con un máximo de 4 filas.'
  Máquinas: 4
  Autoedición: true
---
::

@17@color

Utilice el prop `color` para cambiar el color del anillo cuando se enfoca la Textarea.

::component-code
---
Ignora:
  @1919@@retoño
Props:
  Color: Neutral
  Destacado: Verdadero
  marcador de posición:'Tipo algo...'
---
::

::note
El `highlight` prop se utiliza aquí para mostrar el estado de enfoque. Se utiliza internamente cuando se produce un error de validación.
::

@@21@Variante

Utilice el prop `variant` para cambiar la variante de la Textarea.

::component-code
---
Ignora:
  @233@@retoño
Props:
  Color: Neutro
  Variación: Sutil
  Destacado: Falso
  marcador de posición:'Tipo algo...'
---
::

@@24@24000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `size` para cambiar el tamaño de la Textarea.

::component-code
---
Ignora:
  @@26@26000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Tamaño: xl
  marcador de posición:'Tipo algo...'
---
::

@27@Icon

Utilice el prop `icon` para mostrar un [Icon](/docs/components/icon) dentro de la Textarea.

::component-code
---
Categoría: true
Ignora:
  @@pH033@@marcador de posición
Props:
  icon: 'i-lucide-search'
  Tamaño: MD
  Categoría: Outline
  placeholder: "Búsqueda..."
  Rodas: 1
---
::

Utilice los accesorios `leading` y `trailing` para establecer la posición del icono o los accesorios `leading-icon` y `trailing-icon` para establecer un icono diferente para cada posición.

::component-code
---
Categoría: true
Ignora:
  @388@@retoño
Props:
  Archivo de la etiqueta: i-lucide-at-sign
  marcador de posición:"Introduzca su correo electrónico"
  Tamaño: MD
  Rodas: 1
---
::

### Avatar en Español

Utilice el prop `avatar` para mostrar un [Avatar](/docs/components/avatar) dentro de la Textarea.

::component-code
---
Categoría: true
Ignora:
  @@pH045@@marcador de posición
  - avatar.carga
Props:
  El avatar:
    src: 'https://github.com/nuxt.png'
    Categoría: Lazy
  Tamaño: MD
  Categoría: Outline
  placeholder: "Búsqueda..."
  Rodas: 1
---
::

@@40000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `loading` para mostrar un icono de carga en el Textarea.

::component-code
---
Ignora:
  @@pH049@@marcador de posición
Props:
  Carga: Verdad
  Trayectoria: Falso
  placeholder: "Búsqueda..."
  Rodas: 1
---
::

### Icono de carga

Utilice el prop `loading-icon` para personalizar el icono de carga. Prevalue a `i-lucide-loader-circle`.

::component-code
---
Ignora:
  @@pH053@@marcador de posición
Props:
  Carga: Verdad
  LoadingIcon: 'i-lucide-loader'(en inglés)
  placeholder: "Búsqueda..."
  Rodas: 1
---
::

::framework-only
#nuxidad
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono globalmente en su `app.config.ts` bajo la tecla `ui.icons.loading`.
:::

#vista
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su `vite.config.ts` bajo la tecla `ui.icons.loading`.
:::
::

### Desactivado

Utilice el prop `disabled` para desactivar el Textarea.

::component-code
---
Ignora:
  @@pH060@placeholder (en inglés)
Props:
  Discapacitados: Verdadero
  marcador de posición:'Tipo algo...'
---
::

@@pH061

@@pH062@@Propuestas

Componentes Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attributes" target="_blank"}
Este componente también soporta todos los atributos HTML nativos `<textarea>`.
::

### Escenarios

Componentes de slots

@@P065@@Emisiones

Componentes Emisiones

@@666@@Exposicion

Al acceder al componente a través de una referencia de plantilla, puede utilizar lo siguiente:

| Nombre| Tipo|
| ---- | ---- |
| @@|@@pH068 @|
| @@|@@|

@750000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componente Tema

@@776@Changelog

Categoría: component-changelog
