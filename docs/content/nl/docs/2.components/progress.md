---
description: Een indicator die de voortgang van een taak aangeeft.
category: element
keywords:
  - progress bar
  - loading bar
  - meter
links:
  - label: Voortgang
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/progress
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Progress.vue
---

## Gebruik

Gebruik de `v-model`-richtlijn om de waarde van de Progress te bepalen.

::component-code
---
external:
  - modelValue
props:
  modelValue: 50
---
::

::note
Gebruik de [`ProgressGroup`](/docs/components/progress-group) om een enkele balk op te splitsen in meerdere segmenten die samen een totaal vormen.
::

### Max

Gebruik de `max` prop om de maximale waarde van de Progress in te stellen.

::component-code
---
external:
  - modelValue
props:
  modelValue: 3
  max: 4
---
::

Gebruik de `max` prop met een array van strings om de actieve stap onder de balk weer te geven, de maximale waarde van de Progress is de lengte van de array.

::component-code
---
prettier: true
ignore:
  - max
external:
  - modelValue
props:
  modelValue: 3
  max:
    - 'Waiting...'
    - 'Cloning...'
    - 'Migrating...'
    - 'Deploying...'
    - 'Done!'
---
::

### Status

Gebruik de `status` prop om de huidige voortgangswaarde boven de balk weer te geven.

::component-code
---
external:
  - modelValue
props:
  modelValue: 50
  status: true
---
::

::tip
De status volgt het einde van de balk, gebruik `:ui="{ status: 'w-full' }"` om het in plaats daarvan de volledige breedte te laten overspannen.
::

### Indeterminate

Wanneer er geen `v-model` is ingesteld of de waarde `null` is, wordt de Progress _ indeterminate _.
De voortgangsbalk is geanimeerd als een `carousel`, maar je kunt deze wijzigen met de [`animation`](#animation) prop.

::component-code
---
external:
  - modelValue
props:
  modelValue: null
---
::

### Animatie

Gebruik de `animation` prop om de animatie van de Progress te veranderen in een omgekeerde carrousel, een schommelstang of een elastische stang. Standaard `carousel`.

::component-code
---
props:
  animation: swing
---
::

::tip
De animatie wordt automatisch uitgeschakeld wanneer de gebruiker de voorkeur geeft aan verminderde beweging, de onbepaalde balk wordt weergegeven als een puls over de volledige breedte.
::

### Oriëntatie

Gebruik de `orientation` prop om de oriëntatie van de Progress te wijzigen. Standaard op `horizontal`.

::component-code
---
ignore:
  - class
props:
  orientation: vertical
  class: 'h-48'
---
::

### Kleur

Gebruik de `color` prop om de kleur van de Progress te veranderen.

::component-code
---
props:
  color: neutral
---
::

::tip
Deze prop accepteert ook elke CSS-kleurwaarde voor paletten buiten het thema.
::

### Grootte

Gebruik de `size` prop om de grootte van de Progress te wijzigen.

::component-code
---
props:
  size: xl
---
::

### Omgekeerd

Gebruik de `inverted` prop om de voortgang visueel om te keren.

::component-code
---
props:
  inverted: true
  modelValue: 25
---
::

## API

### Props

:component-props

### Slots

:component-slots

### Uitzendt

:component-emits

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog
