---
description: Een dialoogvenster dat vanaf elke kant van het scherm naar binnen schuift.
category: overlay
keywords:
  - sheet
  - side panel
  - off-canvas
links:
  - label: Dialoog
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/dialog
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Slideover.vue
---

## Gebruik

Gebruik een [Button](/docs/components/button) of een ander onderdeel in de standaardsleuf van de Slideover.

Gebruik vervolgens de `#content`-sleuf om de inhoud toe te voegen die wordt weergegeven wanneer de Slideover is geopend.

::component-code
---
prettier: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="h-full m-4" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#content
:placeholder{class="h-full m-4"}
::

U kunt ook de slots `#header`{lang="ts-type"}, `#body`{lang="ts-type"} en `#footer`{lang="ts-type"} gebruiken om de inhoud van de Slideover aan te passen.

### Titel

Gebruik de `title` prop om de titel van de kop van de Slideover in te stellen.

::component-code
---
prettier: true
props:
  title: 'Slideover with title'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

### Beschrijving

Gebruik de `description` prop om de beschrijving van de kop van de Slideover in te stellen.

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Slideover with description'
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

### Sluiten

Gebruik de `close` prop om de sluitknop (met `false`-waarde) in de kop van de Slideover aan te passen of te verbergen.

U kunt elke eigenschap van de [Button](/docs/components/button) component doorgeven om deze aan te passen.

::component-code
---
prettier: true
ignore:
  - title
  - close.color
  - close.variant
props:
  title: 'Slideover with close button'
  close:
    color: primary
    variant: outline
    class: 'rounded-full'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

::note
De knop Sluiten wordt niet weergegeven als de `#content`-sleuf wordt gebruikt omdat deze deel uitmaakt van de header.
::

### Sluit pictogram

Gebruik de `close-icon` prop om de knop Sluiten aan te passen [Icon](/docs/components/icon). Standaard `i-lucide-x`.

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Slideover with close button'
  closeIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
U kunt dit pictogram globaal aanpassen in uw `app.config.ts` onder `ui.icons.close`-sleutel.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
U kunt dit pictogram globaal aanpassen in uw `vite.config.ts` onder `ui.icons.close`-sleutel.
:::
::

### Zijde

Gebruik de `side` prop om de zijkant van het scherm in te stellen waar de Slideover naar binnen schuift. Standaard `right`.

::component-code
---
prettier: true
ignore:
  - title
props:
  side: 'left'
  title: 'Slideover with side'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full min-h-48" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full min-h-48"}
::

### Inzet: badge{label="4.3+" class="align-text-top"}

Gebruik de `inset` prop om de Slideover vanaf de randen in te zetten.

::component-code
---
prettier: true
ignore:
  - title
props:
  side: 'right'
  inset: true
  title: 'Slideover with inset'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="min-w-96 min-h-96 size-full" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#body
:placeholder{class="min-w-96 min-h-96 size-full"}
::

### Overgang

Gebruik de `transition` prop om te bepalen of de Slideover geanimeerd is of niet. Standaard `true`.

::component-code
---
prettier: true
ignore:
  - title
props:
  transition: false
  title: 'Slideover without transition'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

### Overlay

Gebruik de `overlay`-prop om te bepalen of de Slideover een overlay heeft of niet. Standaard `true`.

::component-code
---
prettier: true
ignore:
  - title
props:
  overlay: false
  title: 'Slideover without overlay'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

### Modaal

Gebruik de `modal`-prop om te bepalen of de Slideover interactie met externe inhoud blokkeert. Standaard `true`.

::note
Wanneer `modal` is ingesteld op `false`, wordt de overlay automatisch uitgeschakeld en wordt externe inhoud interactief.
::

::component-code
---
prettier: true
ignore:
  - title
props:
  modal: false
  title: 'Slideover interactive'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

### Ontvankelijk

Gebruik de `dismissible`-prop om te bepalen of de Slideover kan worden afgewezen wanneer u erbuiten klikt of op escape drukt. Standaard `true`.

::note
Een `close:prevent`-gebeurtenis wordt uitgezonden wanneer de gebruiker deze probeert te sluiten.
::

::tip
U kunt `modal: false` combineren met `dismissible: false` om de achtergrond van de Slideover interactief te maken zonder deze te sluiten.
::

::component-code
---
prettier: true
ignore:
  - title
props:
  dismissible: false
  modal: true
  title: 'Slideover non-dismissible'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

### Ontkoppelen: badge{label="4.10+" class="align-text-top"}

Gebruik de `unmount-on-hide`-prop om te voorkomen dat de inhoud van de Slideover wordt verwijderd wanneer deze wordt gesloten. Standaard `true`.

::component-code
---
prettier: true
ignore:
  - title
props:
  unmountOnHide: false
  title: 'Slideover'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

::note
U kunt de DOM inspecteren om te zien dat de inhoud van de Slideover wordt weergegeven, zelfs als deze is gesloten.
::

::tip
Wanneer de `portal` prop is ingesteld op `false`, wordt de inhoud ook weergegeven op de server.
Dit is handig om een open Slideover tijdens SSR weer te geven zonder een flash bij het laden van de pagina, of om de inhoud ervan bloot te leggen voor SEO.
::

## Voorbeelden

### Controle open staat

U kunt de open status regelen met behulp van de `default-open` prop of de `v-model:open`-richtlijn.

::component-example
---
name: 'slideover-open-example'
---
::

::note
In dit voorbeeld kunt u, gebruikmakend van [`defineShortcuts`](/docs/composables/define-shortcuts), de Slideover omschakelen door op: kbd{value="O"} te drukken.
::

::tip
Hiermee kunt u de trigger buiten de Slideover verplaatsen of volledig verwijderen.
::

### Programmatisch gebruik

U kunt de [`useOverlay`](/docs/composables/use-overlay) composable gebruiken om een Slideover programmatisch te openen.

::warning
Zorg ervoor dat u uw app omhult met de [`App`](/docs/components/app) -component die de [`OverlayProvider`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/OverlayProvider.vue) -component gebruikt.
::

Maak eerst een slideover-component die programmatisch wordt geopend:

::component-example
---
prettier: true
name: 'slideover-example'
preview: false
---
::

::note
We zenden een `close`-gebeurtenis uit wanneer de slideover hier wordt gesloten of afgewezen.
U kunt alle gegevens uitzenden via de `close`-gebeurtenis en die gegevens worden de opgeloste waarde van `open()`. De gebeurtenis moet worden uitgezonden om de belofte op te lossen.
::

Gebruik het vervolgens in uw app:

::component-example
---
name: 'slideover-programmatic-example'
---
::

::tip
U kunt de slideover binnen de slideover-component sluiten door `emit('close')` uit te zenden.
::

### Genestelde slideovers

Je kunt slideovers in elkaar nestelen.

::component-example
---
name: 'slideover-nested-example'
---
::

### Met voetgangerssleuf

Gebruik de `#footer`-sleuf om inhoud toe te voegen na het lichaam van de Slideover.

::component-example
---
name: 'slideover-footer-slot-example'
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
