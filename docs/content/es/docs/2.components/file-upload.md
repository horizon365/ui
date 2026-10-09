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

xph0000xUso

Utilice la directiva `v-model` para controlar el valor del archivo.

::component-code
---
ignore:
  - modelValue
  - class
external:
  - modelValue
props:
  modelValue: null
  class: 'w-96 min-h-48'
---
::

### Multiplicación

Utilice el prop `multiple` para permitir que se seleccionen varios archivos.

::component-code
---
ignore:
  - class
props:
  multiple: true
  class: 'w-96 min-h-48'
---
::

### Dropzone

Utilice el prop `dropzone` para habilitar/deshabilitar el área desplegable.

::component-code
---
ignore:
  - class
props:
  dropzone: false
  class: 'w-96 min-h-48'
---
::

### Interactivo

Utilice el prop `interactive` para habilitar/deshabilitar el área en la que se puede hacer clic.

::tip{to="#with-files-bottom-slot"}
Esto puede ser útil al agregar un componente `Button` en la ranura `#actions`.
::

::component-code
---
ignore:
  - class
props:
  interactive: false
  class: 'w-96 min-h-48'
---
::

### Acepto

Utilice la prop `accept` para especificar los tipos de archivo permitidos para la entrada. Proporcionar una lista separada por comas de [MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types) o extensiones de archivo (por ejemplo, `image/png,application/pdf,.jpg`). Por defecto a `*` (todos los tipos de archivo).

::component-code
---
ignore:
  - accept
  - class
props:
  accept: 'image/*'
  class: 'w-96 min-h-48'
---
::

### Label

Utilice el prop `label` para establecer la etiqueta del FileUpload.

::component-code
---
prettier: true
ignore:
  - class
props:
  label: 'Drop your image here'
  class: 'w-96 min-h-48'
---
::

### Descripción

Utilice el prop `description` para establecer la descripción del FileUpload.

::component-code
---
prettier: true
ignore:
  - label
  - class
props:
  label: 'Drop your image here'
  description: 'SVG, PNG, JPG or GIF (max. 2MB)'
  class: 'w-96 min-h-48'
---
::

### Icon

Utilice el prop `icon` para establecer el icono de FileUpload. Defaults a `i-lucide-upload`.

::component-code
---
prettier: true
ignore:
  - label
  - description
  - class
props:
  icon: 'i-lucide-image'
  label: 'Drop your image here'
  description: 'SVG, PNG, JPG or GIF (max. 2MB)'
  class: 'w-96 min-h-48'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono de forma global en su `app.config.ts` bajo la tecla `ui.icons.upload`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su `vite.config.ts` bajo la tecla `ui.icons.upload`.
:::
::

### Color (Edición española)

Utilice el prop `color` para cambiar el color del archivo.

::component-code
---
prettier: true
ignore:
  - label
  - description
  - class
props:
  color: neutral
  highlight: true
  label: 'Drop your image here'
  description: 'SVG, PNG, JPG or GIF (max. 2MB)'
  class: 'w-96 min-h-48'
---
::

::note
El prop `highlight` se utiliza aquí para mostrar el estado de enfoque. Se utiliza internamente cuando se produce un error de validación.
::

### Variante en Español

Utilice el prop `variant` para cambiar la variante del FileUpload.

::component-code
---
ignore:
  - class
props:
  variant: button
---
::

### Tamaño

Utilice el prop `size` para cambiar el tamaño del archivo.

::component-code
---
prettier: true
ignore:
  - label
  - description
  - class
props:
  size: xl
  variant: area
  label: 'Drop your image here'
  description: 'SVG, PNG, JPG or GIF (max. 2MB)'
---
::

### Diseño

Utilice el prop `layout` para cambiar la forma en que se muestran los archivos en el FileUpload. Defaults a `grid`.

::warning
Este accesorio solo funciona cuando `variant` es `area`.
::

::component-code
---
prettier: true
ignore:
  - label
  - description
  - multiple
  - class
  - ui.base
props:
  layout: list
  multiple: true
  label: 'Drop your images here'
  description: 'SVG, PNG, JPG or GIF (max. 2MB)'
  class: 'w-96'
  ui:
    base: 'min-h-48'
---
::

### Posición

Utilice el prop `position` para cambiar la posición de los archivos en el FileUpload. Defaults a `outside`.

::warning
Este prop sólo funciona cuando `variant` es `area` y cuando `layout` es `list`.
::

::component-code
---
prettier: true
ignore:
  - label
  - description
  - multiple
  - layout
  - class
  - ui.base
props:
  position: inside
  layout: list
  multiple: true
  label: 'Drop your images here'
  description: 'SVG, PNG, JPG or GIF (max. 2MB)'
  class: 'w-96'
  ui:
    base: 'min-h-48'
---
::

## Ejemplos

### Con validación de formulario

Puede utilizar FileUpload dentro de los componentes [Form](/docs/components/form) y [FormField](/docs/components/form-field) para gestionar la validación y el manejo de errores.

::component-example
---
prettier: true
collapse: true
name: 'file-upload-form-validation-example'
---
::

### Con ranura por defecto

Puede utilizar la ranura predeterminada para crear su propio componente FileUpload.

::component-example
---
prettier: true
collapse: true
name: 'file-upload-default-slot-example'
---
::

### With ranura inferior de archivos

Puede utilizar la ranura `files-bottom` para agregar un [Button](/docs/components/button) debajo de la lista de archivos para eliminar todos los archivos, por ejemplo.

::component-example
---
prettier: true
collapse: true
name: 'file-upload-files-bottom-slot-example'
---
::

::note{to="#interactive"}
El prop `interactive` se establece en `false` en este ejemplo para evitar el área de clic predeterminada.
::

### With Files-Top Slot (Edición española)

Puede usar la ranura `files-top` para agregar un [Button](/docs/components/button) encima de la lista de archivos para agregar nuevos archivos, por ejemplo.

::component-example
---
prettier: true
collapse: true
name: 'file-upload-files-top-slot-example'
---
::

## API (Versión)

### Props (accesorios)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
Este componente también admite todos los atributos HTML nativos de `<input>`.
::

### Slots en línea

:component-slots

### Emisiones

:component-emits

### Exposición

Al acceder al componente a través de una referencia de plantilla, puede utilizar lo siguiente:

| Nombre| Tipo|
| ---- | ---- |
| `inputRef`x{lang="ts-type"}| `Ref<HTMLInputElement \| null>`x{lang="ts-type"} (Edición española)|
| `dropzoneRef`{lang="ts-type"} (Edición española)| `Ref<HTMLDivElement \| null>`x{lang="ts-type"} (Edición española)|

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
