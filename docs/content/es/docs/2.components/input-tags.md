---
title: Los inputtags
description: Un elemento de entrada que muestra etiquetas interactivas.
category: form
keywords:
  - chips input
  - multi value
links:
  - label: Los inputtags
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tags-input
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputTags.vue
---

@@pH000@@Uso del producto

Utilice la directiva `v-model` para controlar el valor de las InputTags.

::component-code
---
Categoría: true
Ignora:
  - modelValoración
Externo:
  - modelValue (Edición española)
Props:
  Valor: ['Vista ']
---
::

Utilice la prop `default-value` para establecer el valor inicial cuando no necesite controlar su estado.

::component-code
---
Categoría: true
Ignora:
  @@pH005@@defaultValue
Props:
  defaultValue: ['Vista ']
---
::

@@@PHO006@@PHOENOS

Utilice el prop `placeholder` para establecer un texto de marcador de posición.

::component-code
---
Props:
  marcador de posición:'Enter tags...'
---
::

### Longitud máxima

Utilice la prop `max-length` para establecer el número máximo de caracteres permitidos en una etiqueta.

::component-code
---
Props:
  Tamaño: 4
---
::

@000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `color` para cambiar el color del anillo cuando se enfoca la InputTags.

::component-code
---
Categoría: true
Ignora:
  @@P2012@modelValue (Edición española)
Externo:
  - modelValue (Edición española)
Props:
  Valor: ['Vista ']
  Color: Neutral
  Destacado: Verdadero
---
::

::note
El `highlight` prop se utiliza aquí para mostrar el estado de enfoque. Se utiliza internamente cuando se produce un error de validación.
::

@@15@Variaciones

Utilice el prop `variant` para cambiar la apariencia de las InputTags.

::component-code
---
Categoría: true
Ignora:
  @@P2017@modelValoración
Externo:
  @@P018@modelValue (Edición española)
Props:
  Valor: ['Vista ']
  Variación: Sutil
  Color: Neutral
  Destacado: Falso
---
::

@190000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `size` para ajustar el tamaño de las InputTags.

::component-code
---
Categoría: true
Ignora:
  - modelValue (Edición española)
Externo:
  @@2222@22222@2222@2222222222222222200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Valor: ['Vista ']
  Tamaño: xl
---
::

@@23@Icon

Utilice el prop `icon` para mostrar un [Icon](/docs/components/icon) dentro de las etiquetas de entrada.

::component-code
---
Categoría: true
Ignora:
  @@20029@modelValoración
Externo:
  - modelValue (Edición española)
Props:
  Valor: ['Vista ']
  icon: 'i-lucide-search'
  Tamaño: MD
  Categoría: Outline
---
::

::note
Utilice los accesorios `leading` y `trailing` para establecer la posición del icono o los accesorios `leading-icon` y `trailing-icon` para establecer un icono diferente para cada posición.
::

@35@avatar

Utilice el prop `avatar` para mostrar un [Avatar](/docs/components/avatar) dentro de las etiquetas de entrada.

::component-code
---
Categoría: true
Ignora:
  - modelValue (Edición española)
  - avatar.carga
Externo:
  - modelValue (Edición española)
Props:
  Valor: ['Vista ']
  El avatar:
    src: 'https://github.com/vuejs.png'
    Categoría: Lazy
  Tamaño: MD
  Categoría: Outline
---
::

### Delete Icon (en inglés)

Utilice el prop `delete-icon` para personalizar la eliminación [Icon](/docs/components/icon) en las etiquetas.

::component-code
---
Categoría: true
Ignora:
  @@P051@@modelValue (Edición española)
Externo:
  @@P052@modelValue (Edición española)
Props:
  Valor: ['Vista ']
  Archivo de la etiqueta: i-lucide-trash
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

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `loading` para mostrar un icono de carga en las InputTags.

::component-code
---
Categoría: true
Ignora:
  @@P059@@modelValue (Edición española)
Externo:
  @@pH060@modelValue (Edición española)
Props:
  Valor: ['Vista ']
  Carga: Verdad
  Trayectoria: Falso
---
::

### Icono de carga

Utilice el prop `loading-icon` para personalizar el icono de carga. Por defecto a `i-lucide-loader-circle`.

::component-code
---
Categoría: true
Ignora:
  @@pH064@modelValue (Edición española)
Externo:
  - modelValue (Edición española)
Props:
  Valor: ['Vista ']
  Carga: Verdad
  LoadingIcon: 'i-lucide-loader'(en inglés)
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

@700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `disabled` para desactivar las etiquetas de entrada.

::component-code
---
Categoría: true
Ignora:
  @@P072@modelValue (Edición española)
Externo:
  @@P073@modelValue (Edición española)
Props:
  Valor: ['Vista ']
  Discapacitados: Verdadero
---
::

@@P074@Ejemplos

### Dentro de un campo de formato

Puede utilizar las etiquetas de entrada dentro de un componente [FormField](/docs/components/form-field) para mostrar una etiqueta, texto de ayuda, indicador requerido, etc.

::component-example
---
Nombre: 'input-tags-form-field-example'
---
::

@080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

@081@081@081@081

Componentes Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
Este componente también soporta todos los atributos HTML nativos `<input>`.
::

@083@espanol

Componentes de slots

@@84000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Emisiones

@085@@Exposicion

Al acceder al componente a través de una referencia de plantilla, puede utilizar lo siguiente:

| Nombre| Tipo|
| ---- | ---- |
| @@|@@@ph087 @|

@090000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componente Tema

@@changelog

Categoría: component-changelog
