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

@@pH000@@Uso del producto

Utilice la directiva `v-model` para controlar el valor de la entrada.

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

@@pH004@@Nombre

Utilice el prop `type` para cambiar el tipo de entrada. Predeterminados a `text`.

Algunos tipos se han puesto en práctica en sus propios componentes como [Checkbox](),[Radio](/docs/components/radio-group),[InputNumber](/docs/components/input-number) etc. y otros se han diseñado como `file` por ejemplo.

::component-code
---
items:
  Tipo:
    @200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    @@21@número de teléfono
    @22@password
    @23@búsqueda
    @24@archivo
Props:
  Tipo: "Archivo"
---
::

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types" target="_blank"}
Puede consultar todos los tipos disponibles en los documentos Web de MDN.
::

@25@@Placeholder (Edición española)

Utilice el prop `placeholder` para establecer un texto de marcador de posición.

::component-code
---
Props:
  placeholder: "Búsqueda..."
---
::

@@27@color

Utilice el prop `color` para cambiar el color del anillo cuando la entrada está enfocada.

::component-code
---
Ignora:
  @@29@@decodificador
Props:
  Color: Neutral
  Destacado: Verdadero
  placeholder: "Búsqueda..."
---
::

::note
El `highlight` prop se utiliza aquí para mostrar el estado de enfoque. Se utiliza internamente cuando se produce un error de validación.
::

@@P201@@Variante

Utilice el prop `variant` para cambiar la variante de la entrada.

::component-code
---
Ignora:
  @@pH033@@marcador de posición
Props:
  Color: Neutro
  Variación: Sutil
  Destacado: Falso
  placeholder: "Búsqueda..."
---
::

@@pH034@@Tamaño

Utilice el prop `size` para cambiar el tamaño de la entrada.

::component-code
---
Ignora:
  @@pH036@placeholder (en inglés)
Props:
  Tamaño: XL
  placeholder: "Búsqueda..."
---
::

@@pH037@Icon

Utilice el prop `icon` para mostrar un [Icon](/docs/components/icon) dentro de la entrada.

::component-code
---
Categoría: true
Ignora:
  @@pH043@@marcador de posición
Props:
  icon: 'i-lucide-search'
  Tamaño: MD
  Categoría: Outline
  placeholder: 'Búsqueda...'
---
::

Utilice los accesorios `leading` y `trailing` para establecer la posición del icono o los accesorios `leading-icon` y `trailing-icon` para establecer un icono diferente para cada posición.

::component-code
---
Categoría: true
Ignora:
  @484@@retoño
Props:
  Archivo de la etiqueta: i-lucide-at-sign
  marcador de posición:"Introduzca su correo electrónico"
  Tamaño: MD
---
::

@49@avatar

Utilice el prop `avatar` para mostrar un [Avatar](/docs/components/avatar) dentro de la entrada.

::component-code
---
Categoría: true
Ignora:
  @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  - avatar.carga
Props:
  El avatar:
    src: 'https://github.com/nuxt.png'
    Categoría: Lazy
  Tamaño: MD
  Categoría: Outline
  placeholder: 'Búsqueda...'
---
::

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `loading` para mostrar un icono de carga en la entrada.

::component-code
---
Ignora:
  @@pH059@@spin-off
Props:
  Carga: Verdad
  Trayectoria: Falso
  placeholder: "Búsqueda..."
---
::

### Icono de carga

Utilice el prop `loading-icon` para personalizar el icono de carga. Por defecto a `i-lucide-loader-circle`.

::component-code
---
Ignora:
  @@pH063@@marcador de posición
Props:
  Carga: Verdad
  LoadingIcon: 'i-lucide-loader'(en inglés)
  placeholder: "Búsqueda..."
---
::

::framework-only
#nuxidad
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono de forma global en su `app.config.ts` bajo la tecla `ui.icons.loading`.
:::

#vista
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su `vite.config.ts` bajo la tecla `ui.icons.loading`.
:::
::

@@pH068@@desactivado

Utilice el prop `disabled` para desactivar la entrada.

::component-code
---
Ignora:
  @700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Discapacitados: Verdadero
  placeholder: "Búsqueda..."
---
::

@@ph071@@Ejemplos

### Con el botón claro

Puede poner un [Button](/docs/components/button) dentro de la ranura `#trailing` para borrar la entrada.

::component-example
---
Nombre: 'input-clear-button-example'
---
::

### Con el botón copiar

Puede poner un [Button](/docs/components/button) dentro de la ranura `#trailing` para copiar el valor al portapapeles.

::component-example
---
Nombre: 'input-copy-button-example'
---
::

### Con contraseña toggle

Puede poner un [Button](/docs/components/button) dentro de la ranura `#trailing` para alternar la visibilidad de la contraseña.

::component-example
---
Nombre: 'input-password-toggle-example'
---
::

### Con indicador de fuerza de contraseña

Puede utilizar el componente [Progress](/docs/components/progress) para mostrar el indicador de fortaleza de la contraseña.

::component-example
---
Colapso: Verdad
Nombre: 'input-password-indicador-ejemplo'
---
::

### Con límite de caracteres

Puede utilizar la ranura `#trailing` para añadir un límite de caracteres a la entrada.

::component-example
---
Nombre: 'input-character-limit-example'
---
::

### Con atajo de teclado

Puede utilizar el componente [Kbd](/docs/components/kbd) dentro de la ranura `#trailing` para agregar un atajo de teclado a la entrada.

::component-example
---
Nombre: 'input-kbd-ejemplo'
---
::

::note{to="/docs/composables/define-shortcuts"}
En este ejemplo se utiliza el componente `defineShortcuts` para enfocar la entrada cuando se presiona la tecla: kbd{value="/"}.
::

### Con máscara

No hay soporte integrado para máscaras, pero puede usar bibliotecas como [maska](https://github.com/beholdr/maska) para enmascarar la entrada.

::component-example
---
Nombre: 'input-mask-example'
---
::

### Con etiqueta flotante

Puede utilizar la ranura `#default` para añadir una etiqueta flotante a la entrada.

::component-example
---
Nombre: 'input-floating-label-example'
---
::

### Dentro de un campo de formato

Puede utilizar la entrada dentro de un componente [FormField](/docs/components/form-field) para mostrar una etiqueta, texto de ayuda, indicador requerido, etc.

::component-example
---
Nombre: 'input-form-field-example'
---
::

::tip{to="/docs/components/form"}
También proporciona validación y manejo de errores cuando se usa dentro de un componente **Form**.
::

### Dentro de un grupo de campo

Puede utilizar la entrada dentro de un componente [FieldGroup](/docs/components/field-group) para agrupar varios elementos.

::component-example
---
Nombre: 'input-field-group-example'
---
::

### Como entrada de número de teléfono

Puede utilizar la entrada dentro de un [FieldGroup](/docs/components/field-group) junto con un [SelectMenu](/docs/components/select-menu) para crear una entrada de número de teléfono con selección de código de país.

::component-example
---
Colapso: Verdad
nombre: 'input-phone-number-example'
---
::

@@pH133

@134@134@134

Componentes Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
Este componente también soporta todos los atributos HTML nativos `<input>`.
::

@@136@136@136

Componentes de slots

@137@137@137

Componentes Emisiones

@@ph138@@Exposición

Al acceder al componente a través de una referencia de plantilla, puede utilizar lo siguiente:

| Nombre| Tipo|
| ---- | ---- |
| @139 @@ 141 @|@140 @@ 142 @|

@@143@Proyecto

Componente Tema

@144@Changelog (Edición española)

Categoría: component-changelog
