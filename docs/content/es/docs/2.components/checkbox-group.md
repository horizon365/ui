---
title: CheckboxGrupo
description: Un conjunto de casillas de verificación para seleccionar varias opciones de una lista.
category: form
keywords:
  - multi select
  - checklist
links:
  - label: CheckboxGrupo
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/checkbox#group-root
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/CheckboxGroup.vue
---


xph0000xUso

Utilice la directiva `v-model` para controlar el valor del Grupo de casillas de verificación o la prop `default-value` para establecer el valor inicial cuando no necesite controlar su estado.

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
external:
  - items
  - modelValue
props:
  modelValue:
    - 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

xph019XArtículos

Utilice el prop `items` como una matriz de cadenas o números:

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
external:
  - items
  - modelValue
props:
  modelValue:
    - 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

También puede pasar una matriz de objetos con las siguientes propiedades:

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- xx`description?: string`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- x`disabled?: boolean`xx{lang="ts-type"}
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- xx`class?: any`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- xx`ui?: { item?: ClassNameValue, container?: ClassNameValue, base?: ClassNameValue, 'indicator'?: ClassNameValue, icon?: ClassNameValue, wrapper?: ClassNameValue, label?: ClassNameValue, description?: ClassNameValue }`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

::component-code
---
ignore:
  - modelValue
  - items
external:
  - items
  - modelValue
externalTypes:
  - CheckboxGroupItem[]
props:
  modelValue:
    - 'system'
  items:
    - label: 'System'
      description: 'Matches your device settings.'
      value: 'system'
    - label: 'Light'
      description: 'Always uses the light theme.'
      value: 'light'
    - label: 'Dark'
      description: 'Always uses the dark theme.'
      value: 'dark'
---
::

::caution
Cuando se utilizan objetos, es necesario hacer referencia a la propiedad `value` del objeto en la directiva `v-model` o el prop. `default-value`.
::

### Valor clave

Puede cambiar la propiedad que se utiliza para establecer el valor mediante el uso de la prop. `value-key`.

::component-code
---
ignore:
  - modelValue
  - items
  - valueKey
external:
  - items
  - modelValue
externalTypes:
  - CheckboxGroupItem[]
props:
  modelValue:
    - 'light'
  valueKey: 'id'
  items:
    - label: 'System'
      description: 'Matches your device settings.'
      id: 'system'
    - label: 'Light'
      description: 'Always uses the light theme.'
      id: 'light'
    - label: 'Dark'
      description: 'Always uses the dark theme.'
      id: 'dark'
---
::

XPH120xLeyenda

Utilice el prop `legend` para establecer la leyenda del Grupo de casillas de verificación.

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
props:
  legend: 'Theme'
  defaultValue:
    - 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### Color (Edición)

Utilice el prop `color` para cambiar el color del grupo de casillas de verificación.

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
items:
  color:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
props:
  color: neutral
  defaultValue:
    - 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### Variante

Utilice el prop `variant` para cambiar la variante del CheckboxGroup.

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
externalTypes:
  - CheckboxGroupItem[]
items:
  color:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
  variant:
    - list
    - card
    - table
props:
  color: 'primary'
  variant: 'card'
  defaultValue:
    - 'system'
  items:
    - label: 'System'
      value: 'system'
      description: 'Matches your device settings.'
    - label: 'Light'
      value: 'light'
      description: 'Always uses the light theme.'
    - label: 'Dark'
      value: 'dark'
      description: 'Always uses the dark theme.'
---
::

### Tamaño

Utilice el prop `size` para cambiar el tamaño del grupo de cajas de verificación.

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
items:
  variant:
    - list
    - card
    - table
props:
  size: 'xl'
  variant: 'list'
  defaultValue:
    - 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### Orientación

Utilice el prop `orientation` para cambiar la orientación del CheckboxGroup. Predeterminados a `vertical`.

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
items:
  variant:
    - list
    - card
    - table
props:
  orientation: 'horizontal'
  variant: 'list'
  defaultValue:
    - 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### Indicador

Utilice el prop `indicator` para cambiar la posición u ocultar el indicador.

::note
El símbolo `icon` de un artículo reemplaza la marca de verificación mientras el indicador está visible, y se muestra encima de la etiqueta cuando es `hidden`.
::

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
externalTypes:
  - CheckboxGroupItem[]
items:
  indicator:
    - start
    - end
    - hidden
  variant:
    - list
    - card
    - table
props:
  indicator: 'hidden'
  orientation: 'horizontal'
  variant: 'table'
  defaultValue:
    - 'System'
  items:
    - label: 'System'
      icon: 'i-lucide-monitor'
      value: 'System'
      class: 'w-20'
    - label: 'Light'
      icon: 'i-lucide-sun'
      class: 'w-20'
      value: 'Light'
    - label: 'Dark'
      icon: 'i-lucide-moon'
      class: 'w-20'
      value: 'Dark'
---
::

### Disabled

Utilice el prop `disabled` para desactivar el CheckboxGroup.

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
props:
  disabled: true
  defaultValue:
    - 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

Xph315xAPI (Edición española)

### Props

:component-props

### Slots en línea

:component-slots

### Emisiones

:component-emits

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
