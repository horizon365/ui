---
description: 'Eine Komponente, die eine Abfolge von Ereignissen mit Datum, Titel, Icons oder Avataren anzeigt.'
category: data
keywords:
  - activity feed
  - history
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Timeline.vue
---

## Bearbeiten

Verwenden Sie die Zeitleistenkomponente, um eine Liste von Elementen in einer Zeitachse anzuzeigen.

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

### Einträge

Verwenden Sie die `items`-prop als Array von Objekten mit den folgenden Eigenschaften:

- `date?: string`{lang="ts-type"} (nicht vorhanden)
- `title?: string`{lang="ts-type"} (englisch)
- `description?: AvatarProps`{lang="ts-type"} (englisch)
- `icon?: string`{lang="ts-type"} (nicht)
- `avatar?: AvatarProps`{lang="ts-type"} (englisch)
- `value?: string | number`{lang="ts-type"} (nicht vorhanden)
0555x[`slot?: string`{lang="ts-type"}](#with-custom-slot) |
- `class?: any`{lang="ts-type"} (nicht vorhanden)
- `ui?: { item?: ClassNameValue, container?: ClassNameValue, indicator?: ClassNameValue, separator?: ClassNameValue, wrapper?: ClassNameValue, date?: ClassNameValue, title?: ClassNameValue, description?: ClassNameValue }`{lang="ts-type"} (nicht vorhanden)

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

### Farbe

Verwenden Sie die `color`-Prop, um die Farbe der aktiven Elemente in einer Zeitleiste zu ändern.

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

Verwenden Sie die `size`-Prop, um die Größe der Timeline zu ändern.

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

### Orientierung

Verwenden Sie die `orientation` prop, um die Ausrichtung der Timeline zu ändern. Standardmäßig auf `vertical`.

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

### Umgekehrtes

Verwenden Sie die umgekehrte Stütze, um die Richtung der Timeline umzukehren.

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

## Examples (Beispiele)

### Control Aktiver Eintrag

Sie können das aktive Element steuern, indem Sie die `default-value` prop oder die `v-model` Direktive mit dem `value` des Elements verwenden.

:component-example{name="timeline-model-value-example" prettier}

::tip
Verwenden Sie die `value-key`-Prop, um den Schlüssel zu ändern, der für die Übereinstimmung mit Elementen verwendet wird, wenn ein `v-model` oder `default-value` bereitgestellt wird.
::

### With select event (Veranstaltung auswählen)

Sie können einen `@select`-listener hinzufügen, um elemente anklickbar zu machen.

::note
Die handler-Funktion empfängt die Argumente `Event` und `TimelineItem` als erstes und zweites Argument.
::

::component-example
---
prettier: true
name: 'timeline-select-example'
---
::

### Mit alternierendem Layout

Verwenden Sie die `ui`-Prop, um eine Zeitleiste mit alternierendem Layout zu erstellen.

:component-example{name="timeline-alternating-layout-example" prettier}

### Mit benutzerdefiniertem Slot

Verwenden Sie die `slot`-Eigenschaft, um ein bestimmtes Element anzupassen.

Sie haben Zugriff auf folgende Slots:

- `#{{ item.slot }}-indicator`{lang="ts-type"} (Deutsche Übersetzung)
- `#{{ item.slot }}-date`{lang="ts-type"} (Deutsche Übersetzung)
- `#{{ item.slot }}-title`{lang="ts-type"} (Deutsche Übersetzung)
- `#{{ item.slot }}-description`{lang="ts-type"} (Deutsche Übersetzung)

:component-example{name="timeline-custom-slot-example" prettier}

### Mit Slots

Verwenden Sie die verfügbaren Slots, um eine komplexere Timeline zu erstellen.

:component-example{name="timeline-slots-example" prettier}

## API ist

### Props Bearbeiten

:component-props

### Slots Bearbeiten

:component-slots

### Emits Bearbeiten

:component-emits

## Theme Bearbeiten

:component-theme

## Changelog Bearbeiten

:component-changelog
