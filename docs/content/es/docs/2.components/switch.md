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

xph0000xUso

Utilice la directiva `v-model` para controlar el estado comprobado del switch.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: true
---
::

Utilice el prop `default-value` para establecer el valor inicial cuando no necesite controlar su estado.

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: true
---
::

### Label

Utilice el prop `label` para establecer la etiqueta del interruptor.

::component-code
---
props:
  label: Check me
---
::

Cuando se utiliza el prop `required`, se añade un asterisco junto a la etiqueta.

::component-code
---
ignore:
  - label
props:
  required: true
  label: Check me
---
::

### Descripción

Utilice el prop `description` para establecer la descripción del Switch.

::component-code
---
ignore:
  - label
props:
  label: Check me
  description: 'This is a checkbox.'
---
::

### Icon

Utilice los accesorios `checked-icon` y `unchecked-icon` para configurar los iconos del conmutador cuando esté marcado y desmarcado.

::component-code
---
prettier: true
ignore:
  - label
  - defaultValue
props:
  uncheckedIcon: 'i-lucide-x'
  checkedIcon: 'i-lucide-check'
  defaultValue: true
  label: Check me
---
::

### Cargando

Utilice el accesorio `loading` para mostrar un icono de carga en el Switch.

::component-code
---
ignore:
  - label
  - defaultValue
props:
  loading: true
  defaultValue: true
  label: Check me
---
::

### Icono de carga

Utilice el prop `loading-icon` para personalizar el icono de carga.

::component-code
---
ignore:
  - label
  - defaultValue
props:
  loading: true
  loadingIcon: 'i-lucide-loader'
  defaultValue: true
  label: Check me
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

### Color (Edición)

Utilice el accesorio `color` para cambiar el color del Switch.

::component-code
---
ignore:
  - label
  - defaultValue
props:
  color: neutral
  defaultValue: true
  label: Check me
---
::

### Tamaño

Utilice el prop `size` para cambiar el tamaño del Switch.

::component-code
---
ignore:
  - label
  - defaultValue
props:
  size: xl
  defaultValue: true
  label: Check me
---
::

### Desactivado

Utilice el accesorio `disabled` para desactivar el Switch.

::component-code
---
ignore:
  - label
props:
  disabled: true
  label: Check me
---
::

## API (Edición española)

### Props (accesorios)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Este componente también admite todos los atributos HTML nativos de `<button>`.
::

### Slots en línea

:component-slots

### Emisiones

:component-emits

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
