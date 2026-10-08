---
description: Un control que alterna entre dos estados.
category: form
keywords:
  - toggle
  - toggle switch
links:
  - label: El Switch
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/switch
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Switch.vue
---

@@pH000@@Uso del producto

Utilice la directiva `v-model` para controlar el estado comprobado del switch.

::component-code
---
Ignora:
  - modelValoración
Externo:
  - modelValue (Edición española)
Props:
  Valoración: true
---
::

Utilice la prop `default-value` para establecer el valor inicial cuando no necesite controlar su estado.

::component-code
---
Ignora:
  @@pH005@@defaultValue
Props:
  Valoración: true
---
::

@0006@etiqueta

Utilice el prop `label` para establecer la etiqueta del interruptor.

::component-code
---
Props:
  Archivo de la etiqueta: check me
---
::

Cuando se utiliza el prop `required`, se añade un asterisco junto a la etiqueta.

::component-code
---
Ignora:
  @@pH009@etiqueta
Props:
  Requerido: Verdadero
  Archivo de la etiqueta: check me
---
::

@@pH010@Descripción

Utilice el prop `description` para establecer la descripción del Switch.

::component-code
---
Ignora:
  @@pH012@etiqueta
Props:
  Archivo de la etiqueta: check me
  Descripción:"Esto es una casilla de verificación".
---
::

@@pH013@Icon

Utilice los props `checked-icon` y `unchecked-icon` para configurar los iconos del Switch cuando esté marcado y desmarcado.

::component-code
---
Categoría: true
Ignora:
  @160000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @@pH017@defaultValue (en inglés)
Props:
  no checkIcono: 'i-lucide-x'
  checkedIcon: 'i-lucide-check'
  Valoración: True
  Archivo de la etiqueta: check me
---
::

@@18000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Usa el prop `loading` para mostrar un icono de carga en el Switch.

::component-code
---
Ignora:
  @200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @@pH021@@defaultValue
Props:
  Carga: Verdad
  Valoración: true
  Archivo de la etiqueta: check me
---
::

### Icono de carga

Utilice el prop `loading-icon` para personalizar el icono de carga. Prevalue a `i-lucide-loader-circle`.

::component-code
---
Ignora:
  @@25@etiqueta
  @@pH026@defaultValue (en inglés)
Props:
  Carga: Verdad
  LoadingIcon: 'i-lucide-loader'(en inglés)
  Valoración: True
  Archivo de la etiqueta: check me
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

@@31@color

Utilice el prop `color` para cambiar el color del interruptor.

::component-code
---
Ignora:
  @@pH033@etiqueta
  @@pH034@defaultValue (en inglés)
Props:
  Color: Neutral
  Valoración: true
  Archivo de la etiqueta: check me
---
::

@350@Tamaño

Utilice el prop `size` para cambiar el tamaño del interruptor.

::component-code
---
Ignora:
  @37@etiqueta
  @@pH038@defaultValue (en inglés)
Props:
  Tamaño: xl
  Valoración: True
  Archivo de la etiqueta: check me
---
::

@@pH039@@desactivado

Utilice el prop `disabled` para desactivar el interruptor.

::component-code
---
Ignora:
  @@pH041@etiqueta
Props:
  Discapacidad: Verdadero
  Archivo de la etiqueta: check me
---
::

@2014@@Apid

@@40000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
This component also supports all native `<button>` HTML attributes.
::

@@45000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes de slots

@@46000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Emisiones

@477@themes

Componente Tema

@@40000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Categoría: component-changelog
