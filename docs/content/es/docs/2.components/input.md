---
description: Un elemento de entrada para introducir texto.
category: form
keywords:
  - text field
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Input.vue
---

xph0000xUso

Utilice la directiva `v-model` para controlar el valor de la entrada.

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

### Tipo

Utilice la prop `type` para cambiar el tipo de entrada. Predeterminados a `text`.

Algunos tipos se han implementado en sus propios componentes, como [Checkbox](/docs/components/checkbox), [Radio](/docs/components/radio-group), [InputNumber](ph024), etc. y otros se han diseñado como `file`, por ejemplo.

::component-code
---
items:
  type:
    - text
    - number
    - password
    - search
    - file
props:
  type: 'file'
---
::

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types" target="_blank"}
Puede consultar todos los tipos disponibles en los documentos Web de MDN.
::

### Placeholder (Edición española)

Utilice el prop `placeholder` para establecer un texto de marcador de posición.

::component-code
---
props:
  placeholder: 'Search...'
---
::

### Color (Edición española)

Utilice el accesorio `color` para cambiar el color del anillo cuando la entrada está enfocada.

::component-code
---
ignore:
  - placeholder
props:
  color: neutral
  highlight: true
  placeholder: 'Search...'
---
::

::note
El prop `highlight` se utiliza aquí para mostrar el estado de enfoque. Se utiliza internamente cuando se produce un error de validación.
::

### Variante en Español

Utilice el prop `variant` para cambiar la variante de la entrada.

::component-code
---
ignore:
  - placeholder
props:
  color: neutral
  variant: subtle
  highlight: false
  placeholder: 'Search...'
---
::

### Tamaño

Utilice el prop `size` para cambiar el tamaño de la entrada.

::component-code
---
ignore:
  - placeholder
props:
  size: xl
  placeholder: 'Search...'
---
::

### Icon

Utilice el prop `icon` para mostrar un [Icon](/docs/components/icon) dentro de la entrada.

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
---
::

### Avatar en Español

Utilice el prop `avatar` para mostrar un [Avatar](/docs/components/avatar) dentro de la entrada.

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
---
::

### Cargando

Utilice el prop `loading` para mostrar un icono de carga en la entrada.

::component-code
---
ignore:
  - placeholder
props:
  loading: true
  trailing: false
  placeholder: 'Search...'
---
::

### Loading Icon (en inglés)

Utilice el prop `loading-icon` para personalizar el icono de carga.

::component-code
---
ignore:
  - placeholder
props:
  loading: true
  loadingIcon: 'i-lucide-loader'
  placeholder: 'Search...'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono de forma global en su XPH143x bajo la tecla XPH144x.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su XPH145x bajo la tecla XPH146x.
:::
::

### Disabled

Utilice el prop `disabled` para desactivar la entrada.

::component-code
---
ignore:
  - placeholder
props:
  disabled: true
  placeholder: 'Search...'
---
::

## Ejemplos

### Con el botón transparente

Puede poner un [Button](/docs/components/button) dentro de la ranura `#trailing` para borrar la entrada.

::component-example
---
name: 'input-clear-button-example'
---
::

### Con botón de copia

Puede poner un [Button](/docs/components/button) dentro de la ranura `#trailing` para copiar el valor al portapapeles.

::component-example
---
name: 'input-copy-button-example'
---
::

### Con contraseña toggle

Puede colocar un [Button](/docs/components/button) dentro de la ranura `#trailing` para alternar la visibilidad de la contraseña.

::component-example
---
name: 'input-password-toggle-example'
---
::

### With indicador de fuerza de contraseña

Puede usar el componente [Progress](/docs/components/progress) para mostrar el indicador de fortaleza de la contraseña.

::component-example
---
collapse: true
name: 'input-password-strength-indicator-example'
---
::

### con límite de caracteres

Puede utilizar la ranura `#trailing` para añadir un límite de caracteres a la entrada.

::component-example
---
name: 'input-character-limit-example'
---
::

### Con atajo de teclado

Puede utilizar el componente [Kbd](/docs/components/kbd) dentro de la ranura `#trailing` para agregar un atajo de teclado a la entrada.

::component-example
---
name: 'input-kbd-example'
---
::

::note{to="/docs/composables/define-shortcuts"}
Este ejemplo utiliza el componente `defineShortcuts` para enfocar la entrada cuando se presiona la tecla: kbd{value="/"}.
::

### Con máscara

No hay soporte incorporado para máscaras, pero puede usar bibliotecas como [maska](https://github.com/beholdr/maska) para enmascarar la entrada.

::component-example
---
name: 'input-mask-example'
---
::

### Con etiquetas flotantes

Puede utilizar la ranura `#default` para añadir una etiqueta flotante a la entrada.

::component-example
---
name: 'input-floating-label-example'
---
::

### Dentro de un campo de formato

Puede utilizar la entrada dentro de un componente [FormField](/docs/components/form-field) para mostrar una etiqueta, texto de ayuda, indicador requerido, etc.

::component-example
---
name: 'input-form-field-example'
---
::

::tip{to="/docs/components/form"}
También proporciona validación y manejo de errores cuando se usa dentro de un componente **Form**.
::

### Dentro de un grupo de campo

Puede utilizar la entrada dentro de un componente [FieldGroup](/docs/components/field-group) para agrupar varios elementos.

::component-example
---
name: 'input-field-group-example'
---
::

### Como entrada de número de teléfono

Puede utilizar la entrada dentro de un componente [FieldGroup](/docs/components/field-group) junto con un componente [SelectMenu](/docs/components/select-menu) para crear una entrada de número de teléfono con selección de código de país.

::component-example
---
collapse: true
name: 'input-phone-number-example'
---
::

## API

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
| `inputRef`x{lang="ts-type"}| `Ref<HTMLInputElement \| null>`{lang="ts-type"} (Edición española)|

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
