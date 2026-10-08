---
title: Archivo Upload
description: 'Un elemento de entrada para subir archivos.'
category: form
keywords:
  - dropzone
  - drag and drop
  - file input
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/FileUpload.vue
---

@@pH000@@Uso del producto

Utilice la directiva `v-model` para controlar el valor de la carga de archivos.

::component-code
---
Ignora:
  - modelValoración
  @003@clase
Externo:
  - modelValue (Edición española)
Props:
  Modalidad: NULL
  Clase: 'w-96 min-h-48'
---
::

@@0005@@Multiplicación

Utilice el prop `multiple` para permitir que se seleccionen varios archivos.

::component-code
---
Ignora:
  @007@clase
Props:
  Multiplicación: True
  Clase: 'w-96 min-h-48'
---
::

@080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `dropzone` para habilitar/deshabilitar el área desplegable. Prevalue a `true`.

::component-code
---
Ignora:
  @@11@clase
Props:
  Categoría: False
  Clase: 'w-96 min-h-48'
---
::

@12@Interactivo

Utilice el prop `interactive` para habilitar/deshabilitar el área en la que se puede hacer clic.

::tip{to="#with-files-bottom-slot"}
Esto puede ser útil cuando se agrega un componente `Button` en la ranura `#actions`.
::

::component-code
---
Ignora:
  @17@clase
Props:
  Interactivo: Falso
  Clase: 'w-96 min-h-48'
---
::

@18@Acepto

Utilice el prop `accept` para especificar los tipos de archivo permitidos para la entrada. Proporcionar una lista separada por comas de [MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types) o extensiones de archivo (por ejemplo,`image/png,application/pdf,.jpg`).

::component-code
---
Ignora:
  @@26000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @27@clase
Props:
  Aceptar: 'imagen/*'
  Clase: 'w-96 min-h-48'
---
::

@@28@etiqueta

Utilice el `label` prop para establecer la etiqueta de la FileUpload.

::component-code
---
Categoría: true
Ignora:
  @000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Etiqueta: 'Deja tu imagen aquí'
  Clase: 'w-96 min-h-48'
---
::

@@pH031@Descripción

Utilice el `description` prop para establecer la descripción de la FileUpload.

::component-code
---
Categoría: true
Ignora:
  @@pH033@etiqueta
  @34@@clase
Props:
  Etiqueta: 'Deja tu imagen aquí'
  Descripción:'SVG, PNG, JPG o GIF (máx. 2MB)'
  Clase: 'w-96 min-h-48'
---
::

@@pH035@Icon

Utilice el `icon` prop para establecer el icono de la FileUpload. Defaults a `i-lucide-upload`.

::component-code
---
Categoría: true
Ignora:
  @@pH038@etiqueta
  @@ph039@descripción
  @@clase00000
Props:
  icono: 'i-lucide-image'
  Etiqueta: 'Deja tu imagen aquí'
  Descripción:'SVG, PNG, JPG o GIF (máx. 2MB)'
  Clase: 'w-96 min-h-48'
---
::

::framework-only
#nuxidad
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono de forma global en su `app.config.ts` bajo la tecla `ui.icons.upload`.
:::

#vista
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su `vite.config.ts` bajo la tecla `ui.icons.upload`.
:::
::

@450000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `color` para cambiar el color del archivo.

::component-code
---
Categoría: true
Ignora:
  @@pH047@etiqueta
  @@ph048@descripción
  @494@clase
Props:
  Color: Neutral
  Destacado: Verdadero
  Etiqueta: 'Deja tu imagen aquí'
  Descripción:'SVG, PNG, JPG o GIF (máx. 2MB)'
  Clase: 'w-96 min-h-48'
---
::

::note
El `highlight` prop se utiliza aquí para mostrar el estado de enfoque. Se utiliza internamente cuando se produce un error de validación.
::

@@501@Variante

Utilice el `variant` prop para cambiar la variante de la FileUpload.

::component-code
---
Ignora:
  @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Variante: Botón
---
::

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `size` para cambiar el tamaño de la carga de archivos.

::component-code
---
Categoría: true
Ignora:
  @@pH056@etiqueta
  @@ph057@descripción
  @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Tamaño: xl
  Variante: Región
  Etiqueta: 'Deja tu imagen aquí'
  Descripción:'SVG, PNG, JPG o GIF (máx. 2MB)'
---
::

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `layout` para cambiar la forma en que se muestran los archivos en el FileUpload. Defaults a `grid`.

::warning
Esto sólo funciona cuando `variant` es `area`.
::

::component-code
---
Categoría: true
Ignora:
  @@pH064@etiqueta
  @@pH065@descripción
  @@6666 @
  @067 @ clase
  - ui.base
Props:
  Categoría: List
  Multiplicación: True
  Etiqueta: 'Deja tus imágenes aquí'
  Descripción:'SVG, PNG, JPG o GIF (máx. 2MB)'
  Categoría: W-96
  UU.:
    Categoría: min-h-48
---
::

@@pH069@@Posición

Utilice el prop `position` para cambiar la posición de los archivos en el FileUpload. Defaults a `outside`.

::warning
Este prop sólo funciona cuando `variant` es `area` y cuando `layout` es `list`.
::

::component-code
---
Categoría: true
Ignora:
  @766@etiqueta
  @@777@Descripción
  @@788@multiples
  @799@layout
  @080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  - ui.base
Props:
  Ubicación: Inside
  Categoría: List
  Multiplicación: True
  Etiqueta: 'Deja tus imágenes aquí'
  Descripción:'SVG, PNG, JPG o GIF (máx. 2MB)'
  Categoría: W-96
  UU.:
    Categoría: min-h-48
---
::

@@ph082@Ejemplos

### Con validación del formulario

Puede utilizar el FileUpload dentro de un [Form](/docs/components/form) y [FormField](/docs/components/form-field) componentes para manejar la validación y el manejo de errores.

::component-example
---
Categoría: true
Colapso: Verdad
Nombre: 'file-upload-form-validation-example'
---
::

### Con ranura por defecto

Puede utilizar la ranura predeterminada para crear su propio componente FileUpload.

::component-example
---
Categoría: true
Colapso: Verdad
Nombre del archivo: 'file-upload-default-slot-example'
---
::

### Con ranura de fondo de archivos

Puede usar la ranura `files-bottom` para agregar un [Button ](/docs/components/button) debajo de la lista de archivos para eliminar todos los archivos, por ejemplo.

::component-example
---
Categoría: true
Colapso: Verdad
Nombre del archivo: 'file-upload-files-bottom-slot-example'
---
::

::note{to="#interactive"}
El prop `interactive` se establece en `false` en este ejemplo para evitar que el área de clic predeterminada.
::

### Con ranura de archivo superior

Puede utilizar la ranura `files-top` para añadir un [Button](/docs/components/button) encima de la lista de archivos para añadir nuevos archivos, por ejemplo.

::component-example
---
Categoría: true
Colapso: Verdad
Nombre del archivo: 'file-upload-files-top-slot-example'
---
::

@@pH107 @@ Español

@108@108@108@108

Componentes Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
Este componente también soporta todos los atributos HTML nativos `<input>`.
::

@100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes de slots

@111@1111@1111

Componentes Emisiones

@112@Exposicion

Al acceder al componente a través de una referencia de plantilla, puede utilizar lo siguiente:

| Nombre| Tipo|
| ---- | ---- |
| @113 @@@ 115 @|@114 @@@ 116|
| @117 @@@ 119 @|@118 @@@ 120 @|

@121@@Proyecto

Componente Tema

@@222@Changelog

Categoría: component-changelog
