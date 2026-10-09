---
description: 'Componente que muestra una secuencia de eventos con fechas, títulos, iconos o avatares.'
category: data
keywords:
  - activity feed
  - history
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Timeline.vue
---

xph0000xUso

Utilice el componente Línea de tiempo para mostrar una lista de elementos en una línea de tiempo.

::component-code
---
collapse: true
hide:
  - class
  - defaultValue
ignore:
  - items
  - class
  - defaultValue
external:
  - items
externalTypes:
  - TimelineItem[]
props:
  defaultValue: 2
  items:
    - date: 'Mar 15, 2025'
      title: 'Project Kickoff'
      description: 'Kicked off the project with team alignment. Set up project milestones and allocated resources.'
      icon: 'i-lucide-rocket'
    - date: 'Mar 22 2025'
      title: 'Design Phase'
      description: 'User research and design workshops. Created wireframes and prototypes for user testing.'
      icon: 'i-lucide-palette'
    - date: 'Mar 29 2025'
      title: 'Development Sprint'
      description: 'Frontend and backend development. Implemented core features and integrated with APIs.'
      icon: 'i-lucide-code'
    - date: 'Apr 5 2025'
      title: 'Testing & Deployment'
      description: 'QA testing and performance optimization. Deployed the application to production.'
      icon: 'i-lucide-check-circle'
  class: 'w-96'
---
::

### Artículos

Utilice el prop `items` como un array de objetos con las siguientes propiedades:

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- xx`title?: string`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- xx`description?: AvatarProps`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- xx`avatar?: AvatarProps`xx{lang="ts-type"}
- xxx`value?: string | number`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- xxx`class?: any`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- xx`ui?: { item?: ClassNameValue, container?: ClassNameValue, indicator?: ClassNameValue, separator?: ClassNameValue, wrapper?: ClassNameValue, date?: ClassNameValue, title?: ClassNameValue, description?: ClassNameValue }`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

::component-code
---
ignore:
  - items
  - class
  - defaultValue
external:
  - items
externalTypes:
  - TimelineItem[]
props:
  defaultValue: 2
  items:
    - date: 'Mar 15, 2025'
      title: 'Project Kickoff'
      description: 'Kicked off the project with team alignment. Set up project milestones and allocated resources.'
      icon: 'i-lucide-rocket'
    - date: 'Mar 22 2025'
      title: 'Design Phase'
      description: 'User research and design workshops. Created wireframes and prototypes for user testing.'
      icon: 'i-lucide-palette'
    - date: 'Mar 29 2025'
      title: 'Development Sprint'
      description: 'Frontend and backend development. Implemented core features and integrated with APIs.'
      icon: 'i-lucide-code'
    - date: 'Apr 5 2025'
      title: 'Testing & Deployment'
      description: 'QA testing and performance optimization. Deployed the application to production.'
      icon: 'i-lucide-check-circle'
  class: 'w-96'
---
::

### Color (Edición española)

Utilice el prop `color` para cambiar el color de los elementos activos en una línea de tiempo.

::component-code
---
ignore:
  - items
  - class
  - defaultValue
external:
  - items
externalTypes:
  - TimelineItem[]
props:
  color: neutral
  defaultValue: 2
  items:
    - date: 'Mar 15, 2025'
      title: 'Project Kickoff'
      description: 'Kicked off the project with team alignment. Set up project milestones and allocated resources.'
      icon: 'i-lucide-rocket'
    - date: 'Mar 22 2025'
      title: 'Design Phase'
      description: 'User research and design workshops. Created wireframes and prototypes for user testing.'
      icon: 'i-lucide-palette'
    - date: 'Mar 29 2025'
      title: 'Development Sprint'
      description: 'Frontend and backend development. Implemented core features and integrated with APIs.'
      icon: 'i-lucide-code'
    - date: 'Apr 5 2025'
      title: 'Testing & Deployment'
      description: 'QA testing and performance optimization. Deployed the application to production.'
      icon: 'i-lucide-check-circle'
  class: 'w-96'
---
::

### Tamaño

Utilice el prop `size` para cambiar el tamaño de la línea de tiempo.

::component-code
---
ignore:
  - items
  - class
  - defaultValue
external:
  - items
externalTypes:
  - TimelineItem[]
props:
  size: xs
  defaultValue: 2
  items:
    - date: 'Mar 15, 2025'
      title: 'Project Kickoff'
      description: 'Kicked off the project with team alignment. Set up project milestones and allocated resources.'
      icon: 'i-lucide-rocket'
    - date: 'Mar 22 2025'
      title: 'Design Phase'
      description: 'User research and design workshops. Created wireframes and prototypes for user testing.'
      icon: 'i-lucide-palette'
    - date: 'Mar 29 2025'
      title: 'Development Sprint'
      description: 'Frontend and backend development. Implemented core features and integrated with APIs.'
      icon: 'i-lucide-code'
    - date: 'Apr 5 2025'
      title: 'Testing & Deployment'
      description: 'QA testing and performance optimization. Deployed the application to production.'
      icon: 'i-lucide-check-circle'
  class: 'w-96'
---
::

### Orientación

Utilice el prop `orientation` para cambiar la orientación de la línea de tiempo. Predeterminados a `vertical`.

::component-code
---
ignore:
  - items
  - class
  - defaultValue
external:
  - items
externalTypes:
  - TimelineItem[]
props:
  orientation: 'horizontal'
  defaultValue: 2
  items:
    - date: 'Mar 15, 2025'
      title: 'Project Kickoff'
      description: 'Kicked off the project with team alignment.'
      icon: 'i-lucide-rocket'
    - date: 'Mar 22 2025'
      title: 'Design Phase'
      description: 'User research and design workshops.'
      icon: 'i-lucide-palette'
    - date: 'Mar 29 2025'
      title: 'Development Sprint'
      description: 'Frontend and backend development.'
      icon: 'i-lucide-code'
    - date: 'Apr 5 2025'
      title: 'Testing & Deployment'
      description: 'QA testing and performance optimization.'
      icon: 'i-lucide-check-circle'
  class: 'w-full'
class: 'overflow-x-auto'
---
::

### Reverse (Edición española)

Utilice el prop inverso para invertir la dirección de la línea de tiempo.

::component-code
---
ignore:
  - items
  - class
  - defaultValue
external:
  - items
externalTypes:
  - TimelineItem[]
props:
  reverse: true
  modelValue: 2
  orientation: 'vertical'
  items:
    - date: 'Mar 15, 2025'
      title: 'Project Kickoff'
      description: 'Kicked off the project with team alignment.'
      icon: 'i-lucide-rocket'
    - date: 'Mar 22 2025'
      title: 'Design Phase'
      description: 'User research and design workshops.'
      icon: 'i-lucide-palette'
    - date: 'Mar 29 2025'
      title: 'Development Sprint'
      description: 'Frontend and backend development.'
      icon: 'i-lucide-code'
    - date: 'Apr 5 2025'
      title: 'Testing & Deployment'
      description: 'QA testing and performance optimization.'
      icon: 'i-lucide-check-circle'
  class: 'w-full'
class: 'overflow-x-auto'
---
::

## Ejemplos

### Control elemento activo

Puede controlar el elemento activo utilizando la prop `default-value` o la directiva `v-model` con el `value` del elemento.

:component-example{name="timeline-model-value-example" prettier}

::tip
Utilice el accesorio `value-key` para cambiar la clave utilizada para hacer coincidir los elementos cuando se proporciona un `v-model` o `default-value`.
::

### Con evento seleccionado

Puede agregar un oyente `@select` para hacer que los elementos sean clicables.

::note
La función handler recibe los valores `Event` y `TimelineItem` como el primer y segundo argumento respectivamente.
::

::component-example
---
prettier: true
name: 'timeline-select-example'
---
::

### Con diseño alternativo

Utilice el accesorio `ui` para crear una línea de tiempo con diseño alternativo.

:component-example{name="timeline-alternating-layout-example" prettier}

### With slot personalizado

Utilice la propiedad `slot` para personalizar un elemento específico.

Tendrás acceso a las siguientes slots:

- x`#{{ item.slot }}-indicator`x{lang="ts-type"}
- x`#{{ item.slot }}-date`x{lang="ts-type"} (Edición española)
- x`#{{ item.slot }}-title`x{lang="ts-type"}
- x`#{{ item.slot }}-description`x{lang="ts-type"}

:component-example{name="timeline-custom-slot-example" prettier}

### Con ranuras

Utilice las ranuras disponibles para crear una línea de tiempo más compleja.

:component-example{name="timeline-slots-example" prettier}

## API (Versión)

### Props (accesorios)

:component-props

### Slots en línea

:component-slots

### Emisiones

:component-emits

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
