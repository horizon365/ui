---
description: Een opvouwbaar element om de zichtbaarheid van de inhoud te veranderen.
category: element
keywords:
  - disclosure
  - expand
links:
  - label: Inklapbaar
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/collapsible
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Collapsible.vue
---

## Gebruik

Gebruik een [Button](/docs/components/button) of een ander onderdeel in de standaardsleuf van het opvouwbare.

Gebruik vervolgens de `#content`-sleuf om de inhoud toe te voegen die wordt weergegeven wanneer de opvouwbare is geopend.

::component-code
---
prettier: true
ignore:
  - class
props:
  class: 'flex flex-col gap-2 w-48'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block />

  content: |

    <Placeholder class="h-48" />
---

:u-button{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block}

#content
:placeholder{class="h-48"}
::

### Ontkoppelen

Gebruik de `unmount-on-hide`-prop om te voorkomen dat de inhoud wordt ontkoppeld wanneer het opvouwbare is samengevouwen. Standaard is `true`.

::component-code
---
prettier: true
ignore:
  - class
props:
  unmountOnHide: false
  class: 'flex flex-col gap-2 w-48'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block />

  content: |

    <Placeholder class="h-48" />
---

:u-button{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block}

#content
:placeholder{class="h-48"}
::

::note
U kunt de DOM inspecteren om te zien welke inhoud wordt weergegeven.
::

### Uitgeschakeld

Gebruik de `disabled` prop om het opvouwbare uit te schakelen.

::component-code
---
prettier: true
ignore:
  - class
props:
  class: 'flex flex-col gap-2 w-48'
  disabled: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block />

  content: |

    <Placeholder class="h-48" />
---

:u-button{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block}

#content
:placeholder{class="h-48"}
::

## Voorbeelden

### Controle open staat

U kunt de open status regelen met behulp van de `default-open` prop of de `v-model:open` richtlijn.

::component-example
---
name: 'collapsible-open-example'
---
::

::note
In dit voorbeeld, gebruikmakend van [`defineShortcuts`](/docs/composables/define-shortcuts), kunt u het inklapbare schakelen door op te drukken: kbd{value="O"}.
::

::tip
Hiermee kunt u de trigger buiten het opvouwbare verplaatsen of volledig verwijderen.
::

### Met draaiend pictogram

Hier is een voorbeeld met een roterend pictogram in de knop dat de open status van het opvouwbare aangeeft.

::component-example
---
name: 'collapsible-icon-example'
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
