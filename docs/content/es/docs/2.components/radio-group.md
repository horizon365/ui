---
title: El radiogrupo
description: Un conjunto de botones de radio para seleccionar una sola opción de una lista.
category: form
keywords:
  - radio buttons
  - single choice
links:
  - label: El radiogrupo
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/radio-group
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/RadioGroup.vue
---

xph0000xUso

Utilice la directiva `v-model` para controlar el valor del RadioGroup o la prop `default-value` para establecer el valor inicial cuando no necesite controlar su estado.

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
  modelValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### Artículos

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
  modelValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

También puede pasar una matriz de objetos con las siguientes propiedades:

- xx`label?: string`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- xx`class?: any`xxx{lang="ts-type"}
- xx`ui?: { item?: ClassNameValue, container?: ClassNameValue, base?: ClassNameValue, 'indicator'?: ClassNameValue, wrapper?: ClassNameValue, label?: ClassNameValue, icon?: ClassNameValue, description?: ClassNameValue }`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

::component-code
---
ignore:
  - modelValue
  - items
external:
  - items
  - modelValue
externalTypes:
  - RadioGroupItem[]
props:
  modelValue: 'system'
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
Cuando se usan objetos, es necesario hacer referencia a la propiedad `value` del objeto en la directiva `v-model` o en la prop. `default-value`.
::

### Clave de valor

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
  - RadioGroupItem[]
props:
  modelValue: 'light'
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

### leyenda

Utilice el accesorio `legend` para configurar la leyenda del RadioGroup.

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
  defaultValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### Color en línea

Utilice el accesorio `color` para cambiar el color del RadioGroup.

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
props:
  color: neutral
  defaultValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### Variante

Utilice el prop `variant` para cambiar la variante del RadioGroup.

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
externalTypes:
  - RadioGroupItem[]
props:
  color: 'primary'
  variant: 'card'
  defaultValue: 'system'
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

Utilice el prop `size` para cambiar el tamaño del RadioGroup.

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
props:
  size: 'xl'
  variant: 'list'
  defaultValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### Orientación

Utilice el prop `orientation` para cambiar la orientación del RadioGroup. Predeterminados a `vertical`.

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
props:
  orientation: 'horizontal'
  variant: 'list'
  defaultValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### Indicador

Utilice el prop `indicator` para cambiar la posición u ocultar el indicador.

::note
El `icon` de un artículo solo se muestra cuando `indicator` es `hidden`, por encima de la etiqueta, ya que una radio no tiene icono dentro de su indicador.
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
  - RadioGroupItem[]
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
  defaultValue: 'System'
  items:
    - label: 'System'
      icon: 'i-lucide-monitor'
      value: 'System'
      class: 'w-20'
    - label: 'Light'
      icon: 'i-lucide-sun'
      value: 'Light'
      class: 'w-20'
    - label: 'Dark'
      icon: 'i-lucide-moon'
      value: 'Dark'
      class: 'w-20'
---
::

### Desactivado

Utilice el prop `disabled` para desactivar el RadioGroup.

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
  defaultValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

## API

### Props (accesorios)

:component-props

### Slots

:component-slots

### Emisiones

:component-emits

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
