---
description: 'Un composant qui affiche une séquence d'événements avec des dates, des titres, des icônes ou des avatars.'
category: data
keywords:
  - activity feed
  - history
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Timeline.vue
---

## Utilisation

Utilisez le composant Timeline pour afficher une liste d'éléments dans une timeline.

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

### Éléments

Utilisez le prop `items` comme un tableau d'objets avec les propriétés suivantes:

- x`date?: string`xx{lang="ts-type"}
- x`title?: string`x{lang="ts-type"}
- x`description?: AvatarProps`x{lang="ts-type"}
- x`icon?: string`x{lang="ts-type"}
- x`avatar?: AvatarProps`x{lang="ts-type"}
- xx`value?: string | number`xx{lang="ts-type"}
Xph055xx[x`slot?: string`x{lang="ts-type"}x](x#with-custom-slotx)
- x`class?: any`xx{lang="ts-type"}
- xx`ui?: { item?: ClassNameValue, container?: ClassNameValue, indicator?: ClassNameValue, separator?: ClassNameValue, wrapper?: ClassNameValue, date?: ClassNameValue, title?: ClassNameValue, description?: ClassNameValue }`xx{lang="ts-type"}

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

### Couleur

Utilisez la prop `color` pour changer la couleur des éléments actifs dans une timeline.

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

### Size

Utilisez la prop `size` pour modifier la taille de la timeline.

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

### Orientation

Utilisez la prop `orientation` pour modifier l'orientation de la timeline. Par défaut à `vertical`.

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

### Reverse

Utilisez la prop inverse pour inverser la direction de la timeline.

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

## Exemples

### Control item actif

Vous pouvez contrôler l'élément actif à l'aide de la prop `default-value` ou de la directive `v-model` avec le `value` de l'élément.

:component-example{name="timeline-model-value-example" prettier}

::tip
Utilisez la prop `value-key` pour modifier la clé utilisée pour faire correspondre les éléments lorsqu 'un `v-model` ou `default-value` est fourni.
::

### With sélectionner l'événement

Vous pouvez ajouter un écouteur `@select` pour rendre les éléments cliquables.

::note
La fonction handler reçoit les valeurs `Event` et `TimelineItem` comme premier et deuxième arguments respectivement.
::

::component-example
---
prettier: true
name: 'timeline-select-example'
---
::

### Avec disposition alternative

Utilisez le prop `ui` pour créer une chronologie avec une disposition alternée.

:component-example{name="timeline-alternating-layout-example" prettier}

### With slot personnalisé

Utilisez la propriété `slot` pour personnaliser un élément spécifique.

Vous aurez accès aux slots suivants:

- x`#{{ item.slot }}-indicator`x{lang="ts-type"}
- x`#{{ item.slot }}-date`x{lang="ts-type"}
- x`#{{ item.slot }}-title`{lang="ts-type"}
- x`#{{ item.slot }}-description`x{lang="ts-type"}

:component-example{name="timeline-custom-slot-example" prettier}

### Avec slots

Utilisez les emplacements disponibles pour créer une chronologie plus complexe.

:component-example{name="timeline-slots-example" prettier}

## API

### Props

:component-props

### Slots

:component-slots

### Emits

:component-emits

## Thème

:component-theme

## Changelog

:component-changelog
