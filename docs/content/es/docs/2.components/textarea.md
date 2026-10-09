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

xph0000xUso

Utilice la directiva `v-model` para controlar el valor de la Textarea.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ''
---
::

### Rows (Edición española)

Utilice el prop `rows` para establecer el número de filas. Defaults en `3`.

::component-code
---
props:
  rows: 12
---
::

### Placeholder (Edición española)

Utilice el prop `placeholder` para establecer un texto de marcador de posición.

::component-code
---
props:
  placeholder: 'Type something...'
---
::

### Redimensionamiento automático

Utilice el prop `autoresize` para habilitar el redimensionamiento automático de la altura de la Textarea.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 'This is a long text that will autoresize the height of the Textarea.'
  autoresize: true
---
::

Utilice el prop `maxrows` para establecer el número máximo de filas al cambiar el tamaño automáticamente. Si se establece en `0`, la Textarea crecerá indefinidamente.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 'This is a long text that will autoresize the height of the Textarea with a maximum of 4 rows.'
  maxrows: 4
  autoresize: true
---
::

### Color (Edición española)

Utilice el accesorio `color` para cambiar el color del anillo cuando el Textarea está enfocado.

::component-code
---
ignore:
  - placeholder
props:
  color: neutral
  highlight: true
  placeholder: 'Type something...'
---
::

::note
The `highlight` prop is used here to show the focus state. It is used internally when a validation error occurs.
::

### Variante

Utilice el prop `variant` para cambiar la variante de la Textarea.

::component-code
---
ignore:
  - placeholder
props:
  color: neutral
  variant: subtle
  highlight: false
  placeholder: 'Type something...'
---
::

### Tamaño

Utilice el prop `size` para cambiar el tamaño de la Textarea.

::component-code
---
ignore:
  - placeholder
props:
  size: xl
  placeholder: 'Type something...'
---
::

### Icon

Utilice el prop `icon` para mostrar un [Icon](/docs/components/icon) dentro de la Textarea.

::component-code
---
prettier: true
ignore:
  - placeholder
props:
  icon: 'i-lucide-search'
  size: md
  variant: outline
  placeholder: 'Search...'
  rows: 1
---
::

Utilice los accesorios `leading` y `trailing` para establecer la posición del icono o los accesorios `leading-icon` y `trailing-icon` para establecer un icono diferente para cada posición.

::component-code
---
prettier: true
ignore:
  - placeholder
props:
  trailingIcon: i-lucide-at-sign
  placeholder: 'Enter your email'
  size: md
  rows: 1
---
::

### Avatar (Edición)

Utilice el prop `avatar` para mostrar un [Avatar](/docs/components/avatar) dentro de la Textarea.

::component-code
---
prettier: true
ignore:
  - placeholder
  - avatar.loading
props:
  avatar:
    src: 'https://github.com/nuxt.png'
    loading: lazy
  size: md
  variant: outline
  placeholder: 'Search...'
  rows: 1
---
::

### Cargando

Utilice el prop `loading` para mostrar un icono de carga en el Textarea.

::component-code
---
ignore:
  - placeholder
props:
  loading: true
  trailing: false
  placeholder: 'Search...'
  rows: 1
---
::

### Loading Icon (en inglés)

Utilice el accesorio `loading-icon` para personalizar el icono de carga. Por defecto `i-lucide-loader-circle`.

::component-code
---
ignore:
  - placeholder
props:
  loading: true
  loadingIcon: 'i-lucide-loader'
  placeholder: 'Search...'
  rows: 1
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

Utilice el prop `disabled` para desactivar el Textarea.

::component-code
---
ignore:
  - placeholder
props:
  disabled: true
  placeholder: 'Type something...'
---
::

## API (Versión)

### Props (accesorios)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attributes" target="_blank"}
Este componente también admite todos los atributos HTML nativos de `<textarea>`.
::

### Slots

:component-slots

### Emisiones

:component-emits

### Exposición

Al acceder al componente a través de una referencia de plantilla, puede utilizar lo siguiente:

| Nombre| Tipo|
| ---- | ---- |
| `textareaRef`x{lang="ts-type"}| `Ref<HTMLTextAreaElement \| null>`x{lang="ts-type"} (Edición española)|
| `autoResize`x{lang="ts-type"} (Edición española)| `() => void`xx{lang="ts-type"} (Edición española)|

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
