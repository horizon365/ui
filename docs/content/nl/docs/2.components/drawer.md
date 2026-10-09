---
description: Een lade die soepel in en uit het scherm schuift.
category: overlay
keywords:
  - bottom sheet
  - action sheet
  - mobile sheet
links:
  - label: Lade
    icon: i-custom-reka-ui
    to: https://github.com/unovue/vaul-vue
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Drawer.vue
---

## Gebruik

Gebruik een [Button](/docs/components/button) of een ander onderdeel in de standaardsleuf van de lade.

Gebruik vervolgens de `#content`-sleuf om de inhoud toe te voegen die wordt weergegeven wanneer de lade is geopend.

::component-code
---
prettier: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

U kunt ook de slots `#header`{lang="ts-type"}, `#body`{lang="ts-type"} en `#footer`{lang="ts-type"} gebruiken om de inhoud van de lade aan te passen.

### Titel

Gebruik de `title` prop om de titel van de koptekst van de lade in te stellen.

::component-code
---
prettier: true
props:
  title: 'Drawer with title'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#body
:placeholder{class="h-48"}
::

### Beschrijving

Gebruik de `description` prop om de beschrijving van de koptekst van de lade in te stellen.

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Drawer with description'
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#body
:placeholder{class="h-48"}
::

### Sluiten: badge{label="4.10+" class="align-text-top"}

Gebruik de `close` prop om een sluitknop in de lade weer te geven. Standaard `false`.

U kunt elke eigenschap van de [Button](/docs/components/button) component doorgeven om deze aan te passen.

::component-code
---
prettier: true
ignore:
  - title
  - close.color
  - close.variant
props:
  title: 'Drawer with close button'
  close:
    color: primary
    variant: outline
    class: 'rounded-full'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#body
:placeholder{class="h-48"}
::

### Sluiten Icoon: badge{label="4.10+" class="align-text-top"}

Gebruik de `close-icon` prop om de knop Sluiten aan te passen [Icon](/docs/components/icon). Standaard `i-lucide-x`.

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Drawer with close button'
  close: true
  closeIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#body
:placeholder{class="h-48"}
::

### Richting

Gebruik de `direction` prop om de richting van de lade te regelen. Standaard `bottom`.

::component-code
---
prettier: true
props:
  direction: 'right'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="min-w-96 min-h-96 size-full m-4" />
---

:u-button{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="min-w-96 min-h-96 size-full m-4"}
::

### Inzet

Gebruik de `inset` prop om de lade vanaf de randen in te zetten.

::component-code
---
prettier: true
props:
  direction: 'right'
  inset: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="min-w-96 min-h-96 size-full m-4" />
---

:u-button{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="min-w-96 min-h-96 size-full m-4"}
::

### Handvat

Gebruik de `handle` prop om te bepalen of de lade een handvat heeft of niet. Standaard `true`.

::component-code
---
prettier: true
props:
  handle: false
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

### Alleen handvat

Gebruik de `handle-only` prop om alleen de lade door het handvat te laten slepen.

::component-code
---
prettier: true
props:
  handleOnly: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

### Overlay

Gebruik de `overlay` prop om te bepalen of de lade een overlay heeft of niet. Standaard `true`.

::component-code
---
prettier: true
props:
  overlay: false
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

### Modaal

Gebruik de `modal` prop om te bepalen of de lade de interactie met externe inhoud blokkeert. Standaard `true`.

::note
Wanneer `modal` is ingesteld op `false`, wordt de overlay automatisch uitgeschakeld en wordt externe inhoud interactief.
::

::component-code
---
prettier: true
props:
  modal: false
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

### Ontvankelijk

Gebruik de `dismissible`-prop om te bepalen of de lade kan worden afgewezen wanneer u erbuiten klikt of op escape drukt. Standaard `true`.

::note
Een `close:prevent`-gebeurtenis wordt uitgezonden wanneer de gebruiker deze probeert te sluiten.
::

::tip
U kunt `modal: false` combineren met `dismissible: false` om de achtergrond van de lade interactief te maken zonder deze te sluiten.
::

::component-example
---
prettier: true
name: 'drawer-dismissible-example'
---
::

### Schaal Achtergrond

Gebruik de `should-scale-background` prop om de achtergrond te schalen wanneer de lade open is, waardoor een visueel diepteeffect ontstaat.
U kunt de `set-background-color-on-scale` prop instellen op `false` om te voorkomen dat de achtergrondkleur verandert.

::component-code
---
prettier: true
props:
  shouldScaleBackground: true
  setBackgroundColorOnScale: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-screen m-4"}
::

::warning
Zorg ervoor dat u de `data-vaul-drawer-wrapper`-richtlijn toevoegt aan een bovenliggend element van uw app om dit te laten werken.

```vue [app.vue]
<template>
  <UApp>
    <div class="bg-default" data-vaul-drawer-wrapper>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </UApp>
</template>
```

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  app: {
    rootAttrs: {
      'data-vaul-drawer-wrapper': '',
      'class': 'bg-default'
    }
  }
})
```

::

## Voorbeelden

### Control open staat

U kunt de open status regelen met behulp van de `default-open` prop of de `v-model:open` richtlijn.

::component-example
---
prettier: true
name: 'drawer-open-example'
---
::

::note
In dit voorbeeld, gebruikmakend van [`defineShortcuts`](/docs/composables/define-shortcuts), kunt u de lade omschakelen door op: kbd{value="O"} te drukken.
::

::tip
Hiermee kunt u de trekker buiten de lade verplaatsen of volledig verwijderen.
::

### Responsieve lade

U kunt bijvoorbeeld een [Modal](/docs/components/modal) component op desktop en een lade op mobiel renderen.

::component-example
---
prettier: true
name: 'drawer-responsive-example'
---
::

### Genestelde laden

U kunt laden in elkaar nestelen door de `nested` prop te gebruiken.

::component-example
---
prettier: true
name: 'drawer-nested-example'
---
::

### Met voetgangerssleuf

Gebruik de `#footer`-sleuf om inhoud toe te voegen na het lichaam van de lade.

::component-example
---
prettier: true
collapse: true
name: 'drawer-footer-slot-example'
---
::

### Met opdrachtpalet

U kunt een [CommandPalette](/docs/components/command-palette) -component gebruiken in de inhoud van de lade.

::component-example
---
collapse: true
name: 'drawer-command-palette-example'
---
::

::note
Dit voorbeeld gebruikt `useLazyFetch` met `immediate: false` om alleen gegevens op te halen wanneer de lade wordt geopend.
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
