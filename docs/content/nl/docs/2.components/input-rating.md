---
title: InputRating
description: Een component om beoordelingen van gebruikers weer te geven en te verzamelen.
category: form
keywords:
  - star rating
  - stars
links:
  - label: Beoordeling
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/rating
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputRating.vue
---

## Gebruik

Gebruik de `v-model`-richtlijn om de beoordelingswaarde van de InputRating-component te regelen.

::component-code
---
external:
  - modelValue
props:
  modelValue: 3
---
::

Gebruik de `default-value` prop om de beginwaarde in te stellen wanneer u de status niet hoeft te regelen.

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: 3
---
::

### Stap

Gebruik de `step`-prop om de granulariteit van elke ster te regelen. Stel deze in op `0.5` om beoordelingen van halve sterren toe te staan.

::component-code
---
ignore:
  - defaultValue
props:
  step: 0.5
  defaultValue: 3.5
---
::

### Lengte

Gebruik de `length` prop om het aantal sterren in te stellen. Standaard ingesteld op `5`.

::component-code
---
ignore:
  - defaultValue
props:
  length: 10
  step: 0.5
  defaultValue: 7.5
---
::

### Opruimbaar

Gebruik de `clearable` prop om gebruikers in staat te stellen de beoordeling te wissen door op de momenteel geselecteerde waarde te klikken. Standaard is `false`.

::component-code
---
ignore:
  - defaultValue
props:
  clearable: true
  defaultValue: 3
---
::

### Hoverbaar

Gebruik de `hoverable`-prop om te bepalen of de classificatie een voorbeeld is van de waarde wanneer u over de sterren zweeft. Standaard is `false`.

::component-code
---
ignore:
  - defaultValue
props:
  hoverable: true
  defaultValue: 3
---
::

### Icoon

Gebruik de `icon`-prop om het pictogram voor sterren aan te passen. Standaard `i-lucide-star`.

::component-code
---
ignore:
  - defaultValue
props:
  icon: 'i-lucide-heart'
  defaultValue: 4
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
U kunt het standaard sterpictogram globaal aanpassen in uw `app.config.ts` onder `ui.icons.star`-sleutel.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
U kunt het standaard sterpictogram globaal aanpassen in uw `vite.config.ts` onder `ui.icons.star`-sleutel.
:::
::

### Leeg pictogram

Gebruik de `empty-icon` prop om het pictogram aan te passen dat wordt gebruikt voor lege sterren. Indien niet voorzien, gebruikt hetzelfde pictogram als `icon`.

::component-code
---
ignore:
  - defaultValue
props:
  emptyIcon: 'i-lucide-circle'
  icon: 'i-lucide-circle-check'
  defaultValue: 3
---
::

### Kleur

Gebruik de `color` prop om de kleur van de gevulde sterren te veranderen.

::component-code
---
ignore:
  - defaultValue
props:
  color: neutral
  defaultValue: 4
---
::

### Grootte

Gebruik de `size` prop om de grootte van de sterren te veranderen.

::component-code
---
ignore:
  - defaultValue
items:
  size:
    - xs
    - sm
    - md
    - lg
    - xl
props:
  size: xl
  defaultValue: 4
---
::

### Oriëntatie

Gebruik de `orientation` prop om de oriëntatie van de classificatie te wijzigen. Standaard is `horizontal`.

::component-code
---
ignore:
  - defaultValue
props:
  orientation: vertical
  defaultValue: 4
---
::

### Uitgeschakeld

Gebruik de `disabled`-prop om de InputRating-component uit te schakelen. Indien uitgeschakeld, heeft de component een verminderde dekking (75%) en toont een `not-allowed`-cursor om aan te geven dat deze niet interactief is.

::component-code
---
ignore:
  - defaultValue
props:
  disabled: true
  defaultValue: 3
---
::

### Alleen-lezen

Gebruik de `readonly`-prop om een beoordeling weer te geven zonder gebruikersinteractie toe te staan. In tegenstelling tot `disabled` behoudt het een normaal uiterlijk (volledige dekking, standaardcursor).
Gebruik wanneer u een beoordeling wilt weergeven die niet kan worden gewijzigd, maar er normaal uit moet zien.

::component-code
---
ignore:
  - defaultValue
props:
  readonly: true
  defaultValue: 4.5
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
