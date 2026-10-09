---
description: Een dialoogvenster dat kan worden gebruikt om een bericht weer te geven of om gebruikersinvoer te vragen.
category: overlay
keywords:
  - dialog
  - popup
  - confirm
  - alert dialog
links:
  - label: Dialoog
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/dialog
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Modal.vue
---

## Gebruik

Gebruik een [Button](/docs/components/button) of een ander onderdeel in de standaardsleuf van de modus.

Gebruik vervolgens de `#content`-sleuf om de inhoud toe te voegen die wordt weergegeven wanneer de modus is geopend.

::component-code
---
prettier: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#content
:placeholder{class="h-48 m-4"}
::

U kunt ook de `#header`{lang="ts-type"}, `#body`{lang="ts-type"} en `#footer`{lang="ts-type"} slots gebruiken om de inhoud van de Modal aan te passen.

### Titel

Gebruik de `title` prop om de titel van de header van de Modal in te stellen.

::component-code
---
prettier: true
props:
  title: 'Modal with title'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### Beschrijving

Gebruik de `description` prop om de beschrijving van de header van de Modal in te stellen.

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Modal with description'
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### Sluiten

Gebruik de `close` prop om de sluitknop (met `false`-waarde) die wordt weergegeven in de kop van de modus aan te passen of te verbergen.

U kunt elke eigenschap van de [Button](/docs/components/button) component doorgeven om deze aan te passen.

::component-code
---
prettier: true
ignore:
  - title
  - close.color
  - close.variant
props:
  title: 'Modal with close button'
  close:
    color: primary
    variant: outline
    class: 'rounded-full'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

::tip
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
  title: 'Modal with close button'
  closeIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
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

### Overgang

Gebruik de `transition`-prop om te bepalen of de modus geanimeerd is of niet. Standaard `true`.

::component-code
---
prettier: true
ignore:
  - title
props:
  transition: false
  title: 'Modal without transition'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### Overlay

Gebruik de `overlay` prop om te bepalen of de Modal een overlay heeft of niet. Standaard `true`.

::component-code
---
prettier: true
ignore:
  - title
props:
  overlay: false
  title: 'Modal without overlay'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### Modaal

Gebruik de `modal` prop om te bepalen of de Modal de interactie met externe inhoud blokkeert. Standaard `true`.

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
  title: 'Modal interactive'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### Ontvankelijk

Gebruik de `dismissible`-prop om te bepalen of de modus kan worden afgewezen wanneer u erbuiten klikt of op escape drukt. Standaard `true`.

::note
Een `close:prevent`-gebeurtenis wordt uitgezonden wanneer de gebruiker deze probeert te sluiten.
::

::tip
Je kunt `modal: false` combineren met `dismissible: false` om de achtergrond van de Modal interactief te maken zonder deze te sluiten.
::

::component-code
---
prettier: true
ignore:
  - title
props:
  dismissible: false
  modal: true
  title: 'Modal non-dismissible'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### Doorschuifbaar: badge{label="4.2+" class="align-text-top"}

Gebruik de `scrollable` prop om de inhoud van de Modal binnen de overlay te laten scrollen.

::warning
Omdat de overlay nodig is om te scrollen, is `modal: false` niet compatibel en verwijdert `overlay: false` alleen de achtergrond.
::

::component-code
---
prettier: true
ignore:
  - title
props:
  scrollable: true
  overlay: true
  title: 'Modal scrollable'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#body
:placeholder{class="h-screen"}
::

::caution
Er is een [known issue](https://reka-ui.com/docs/components/dialog#scrollable-overlay) waarbij klikken op de schuifbalk onbedoeld het dialoogvenster op sommige besturingssystemen kan sluiten.
::

### Volledig scherm

Gebruik de `fullscreen` prop om de Modal volledig scherm te maken.

::component-code
---
prettier: true
ignore:
  - title
  - fullscreen
props:
  fullscreen: true
  title: 'Modal fullscreen'
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

Gebruik de `unmount-on-hide` prop om te voorkomen dat de inhoud van de Modal wordt verwijderd wanneer deze wordt gesloten. Standaard `true`.

::component-code
---
prettier: true
ignore:
  - title
props:
  unmountOnHide: false
  title: 'Modal'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="Open" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

::note
U kunt de DOM inspecteren om te zien dat de inhoud van de modus wordt weergegeven, zelfs als deze is gesloten.
::

::tip
Wanneer de `portal` prop is ingesteld op `false`, wordt de inhoud ook weergegeven op de server.
Dit is handig om een open Modal tijdens SSR weer te geven zonder een flash bij het laden van de pagina, of om de inhoud ervan bloot te leggen voor SEO.
::

## Voorbeelden

### Control open staat

U kunt de open status regelen met behulp van de `default-open` prop of de `v-model:open`-richtlijn.

::component-example
---
name: 'modal-open-example'
---
::

::note
In dit voorbeeld, gebruikmakend van [`defineShortcuts`](/docs/composables/define-shortcuts), kunt u de modus wijzigen door op: kbd{value="O"} te drukken.
::

::tip
Hiermee kunt u de trigger buiten de modus verplaatsen of volledig verwijderen.
::

### Programmatisch gebruik

U kunt de [`useOverlay`](/docs/composables/use-overlay) composable gebruiken om een Modal programmatisch te openen.

::warning
Zorg ervoor dat u uw app omhult met de [`App`](/docs/components/app) -component die de [`OverlayProvider`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/OverlayProvider.vue) -component gebruikt.
::

Maak eerst een modale component die programmatisch wordt geopend:

::component-example
---
prettier: true
name: 'modal-example'
preview: false
---
::

::note
We zenden een `close`-gebeurtenis uit wanneer de modal hier wordt gesloten of afgewezen.
U kunt alle gegevens uitzenden via de `close`-gebeurtenis en die gegevens worden de opgeloste waarde van `open()`. De gebeurtenis moet worden uitgezonden om de belofte op te lossen.
::

Gebruik het vervolgens in uw app:

::component-example
---
name: 'modal-programmatic-example'
---
::

::tip
U kunt de modal binnen de modale component sluiten door `emit('close')` uit te zenden.
::

### Genestelde modals

Je kunt modalen in elkaar nestelen.

::component-example
---
name: 'modal-nested-example'
---
::

### Met voetgangerssleuf

Gebruik de `#footer`-sleuf om inhoud toe te voegen na de body van de Modal.

::component-example
---
name: 'modal-footer-slot-example'
---
::

### Met opdrachtpalet

U kunt een [CommandPalette](/docs/components/command-palette) -component gebruiken in de inhoud van de modus.

::component-example
---
collapse: true
name: 'modal-command-palette-example'
---
::

::note
Dit voorbeeld gebruikt `useLazyFetch` met `immediate: false` om alleen gegevens op te halen wanneer de modus wordt geopend.
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
