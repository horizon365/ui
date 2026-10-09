---
description: Un elemento de entrada para alternar entre los estados comprobados y no comprobados.
category: form
keywords:
  - tickbox
  - check
  - boolean
links:
  - label: Checkbox por
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/checkbox
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Checkbox.vue
---

xph0000xUso

Utilice la directiva `v-model` para controlar el estado marcado de la casilla de verificación.

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

### Indeterminado

Utilice el valor `indeterminate` en la directiva `v-model` o en la prop `default-value` para establecer la casilla de verificación en un estado determinado ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes).

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: 'indeterminate'
---
::

### Icono indeterminado

Utilice el prop `indeterminate-icon` para personalizar el icono indeterminado.

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: 'indeterminate'
  indeterminateIcon: 'i-lucide-plus'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono de forma global en su `app.config.ts` bajo la tecla `ui.icons.minus`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su `vite.config.ts` bajo la tecla `ui.icons.minus`.
:::
::

### Label

Utilice el prop `label` para establecer la etiqueta de la casilla de verificación.

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

Utilice el prop `description` para establecer la descripción de la casilla de verificación.

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

Utilice el prop `icon` para establecer el icono de la casilla de verificación cuando esté marcada.

::component-code
---
ignore:
  - label
  - defaultValue
props:
  icon: 'i-lucide-heart'
  defaultValue: true
  label: Check me
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono globalmente en su `app.config.ts` bajo la tecla `ui.icons.check`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono globalmente en su `vite.config.ts` bajo la tecla `ui.icons.check`.
:::
::

### Color (Edición española)

Utilice el accesorio `color` para cambiar el color de la casilla de verificación.

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

### Variante

Utilice el prop `variant` para cambiar la variante de la casilla de verificación.

::component-code
---
ignore:
  - label
  - defaultValue
props:
  color: 'primary'
  variant: 'card'
  defaultValue: true
  label: Check me
---
::

### Tamaño

Utilice el accesorio `size` para cambiar el tamaño de la casilla de verificación.

::component-code
---
ignore:
  - label
  - defaultValue
props:
  size: xl
  variant: list
  defaultValue: true
  label: Check me
---
::

### Indicador

Utilice el prop `indicator` para cambiar la posición u ocultar el indicador.

::note
Cuando `indicator` es `hidden`, el icono se muestra encima de la etiqueta en su lugar.
::

::component-code
---
prettier: true
ignore:
  - label
  - icon
  - defaultValue
props:
  indicator: 'hidden'
  variant: 'card'
  icon: 'i-lucide-heart'
  defaultValue: true
  label: Check me
---
::

### Disabled

Utilice el prop `disabled` para desactivar la casilla de verificación.

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
Este componente también soporta todos los atributos HTML `<button>` nativos.
::

### Slots

:component-slots

### Emisiones

:component-emits

## Temas

:component-theme

## Changelog (en inglés)

:component-changelog
