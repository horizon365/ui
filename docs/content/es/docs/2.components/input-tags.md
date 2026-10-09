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

xph0000xUso

Utilice la directiva `v-model` para controlar el valor de las InputTags.

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
---
::

Utilice el prop `default-value` para establecer el valor inicial cuando no necesite controlar su estado.

::component-code
---
prettier: true
ignore:
  - defaultValue
props:
  defaultValue: ['Vue']
---
::

### Placeholder (Edición española)

Utilice el prop `placeholder` para establecer un texto de marcador de posición.

::component-code
---
props:
  placeholder: 'Enter tags...'
---
::

### Max longitud

Utilice el prop `max-length` para establecer el número máximo de caracteres permitidos en una etiqueta.

::component-code
---
props:
  maxLength: 4
---
::

### color (Edición española)

Utilice el accesorio `color` para cambiar el color del anillo cuando se enfoca la InputTags.

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  color: neutral
  highlight: true
---
::

::note
El prop `highlight` se utiliza aquí para mostrar el estado de enfoque. Se utiliza internamente cuando se produce un error de validación.
::

### Variaciones

Utilice el prop `variant` para cambiar la apariencia de las etiquetas de entrada.

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  variant: subtle
  color: neutral
  highlight: false
---
::

### Tamaño

Utilice el accesorio `size` para ajustar el tamaño de las etiquetas de entrada.

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  size: xl
---
::

### Icono

Utilice el prop `icon` para mostrar un [Icon](/docs/components/icon) dentro de las InputTags.

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  icon: 'i-lucide-search'
  size: md
  variant: outline
---
::

::note
Utilice los accesorios `leading` y `trailing` para establecer la posición del icono o los accesorios `leading-icon` y `trailing-icon` para establecer un icono diferente para cada posición.
::

### Avatar en Español

Utilice el prop `avatar` para mostrar un [Avatar](/docs/components/avatar) dentro de las InputTags.

::component-code
---
prettier: true
ignore:
  - modelValue
  - avatar.loading
external:
  - modelValue
props:
  modelValue: ['Vue']
  avatar:
    src: 'https://github.com/vuejs.png'
    loading: lazy
  size: md
  variant: outline
---
::

### Delete Icono

Utilice el prop `delete-icon` para personalizar la eliminación [Icon](/docs/components/icon) en las etiquetas.

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  deleteIcon: 'i-lucide-trash'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono globalmente en su `app.config.ts` bajo la tecla `ui.icons.close`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono globalmente en su `vite.config.ts` bajo la tecla `ui.icons.close`.
:::
::

### Cargando

Utilice el prop `loading` para mostrar un icono de carga en las etiquetas de entrada.

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  loading: true
  trailing: false
---
::

### Loading Icon (en inglés)

Utilice el prop `loading-icon` para personalizar el icono de carga.

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  loading: true
  loadingIcon: 'i-lucide-loader'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono globalmente en su `app.config.ts` bajo la tecla `ui.icons.loading`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono globalmente en su `vite.config.ts` bajo la tecla `ui.icons.loading`.
:::
::

### Desactivado

Utilice el accesorio `disabled` para desactivar las etiquetas de entrada.

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  disabled: true
---
::

## Ejemplos

### Dentro de un FormField

Puede usar las InputTags dentro de un componente [FormField](/docs/components/form-field) para mostrar una etiqueta, texto de ayuda, indicador requerido, etc.

::component-example
---
name: 'input-tags-form-field-example'
---
::

## API

### Props (accesorios)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
Este componente también soporta todos los atributos HTML `<input>` nativos.
::

### Slots

:component-slots

### Emisiones

:component-emits

### Exposición

Al acceder al componente a través de una referencia de plantilla, puede utilizar lo siguiente:

| Nombre| Tipo|
| ---- | ---- |
| `inputRef`x{lang="ts-type"} (Edición española)| `Ref<HTMLInputElement \| null>`x{lang="ts-type"} (Edición española)|

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
