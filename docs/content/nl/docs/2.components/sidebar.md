---
description: 'Een opvouwbare zijbalk met meerdere visuele varianten.'
category: layout
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Sidebar.vue
---

## Gebruik

De zijbalkcomponent is een stand-alone, vaste zijbalk die de pagina-inhoud pusht.
Op desktop wordt het inline weergegeven en kan het worden samengevouwen; op mobiel opent het een [Modal](/docs/components/modal), [Slideover](/docs/components/slideover) of [Drawer](/docs/components/drawer) component.

::tip{to="/docs/components/dashboard-sidebar"}
**Sidebar vs DashboardSidebar**: Dit onderdeel is een eenvoudige, zelfstandige zijbalk die je overal kunt neerzetten (chatpaneel, instellingen, navigatie).
Als u drag-to-resize, status persistentie en integratie met [DashboardGroup](/docs/components/dashboard-group) nodig heeft, gebruik dan [DashboardSidebar](/docs/components/dashboard-sidebar) .
::

Gebruik de `header`-, `default`- en `footer`-slots om de inhoud van de zijbalk aan te passen.
De `v-model:open`-richtlijn is viewport-bewust: op desktop bestuurt het de uitgebreide / samengevouwen status, op mobiel bestuurt het het menu.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-example'
overflowHidden: true
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

### Variant

Gebruik de `variant` prop om de visuele stijl van de zijbalk te wijzigen. Standaard `sidebar`.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-props-example'
overflowHidden: true
options:
  - name: 'variant'
    label: 'variant'
    items:
      - sidebar
      - floating
      - inset
    default: 'inset'
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

### Inklapbaar

Gebruik de `collapsible`-prop om het samenvouwgedrag van de zijbalk te wijzigen. Standaard `offcanvas`.

- `offcanvas`: De zijbalk schuift volledig uit beeld.
- `icon`: De zijbalk verkleint tot alleen pictogrambreedte.
- `none`: De zijbalk is niet inklapbaar.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-props-example'
overflowHidden: true
options:
  - name: 'collapsible'
    label: 'collapsible'
    items:
      - offcanvas
      - icon
      - none
    default: 'icon'
  - name: 'variant'
    label: 'variant'
    items:
      - sidebar
      - floating
      - inset
    default: 'sidebar'
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

::tip{to="#slots"}
U kunt toegang krijgen tot de `state` in de sleufsteunen om de inhoud van de zijbalk aan te passen wanneer deze is samengevouwen.
::

### Zijde

Gebruik de `side` prop om de zijkant van de zijbalk te wijzigen. Standaard `left`.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-props-example'
overflowHidden: true
options:
  - name: 'side'
    label: 'side'
    items:
      - left
      - right
    default: 'right'
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

### Titel

Gebruik de `title` prop om de titel van de sidebar header in te stellen.

::component-code
---
prettier: true
hide:
  - class
  - ui
ignore:
  - ui.container
props:
  title: Navigation
  ui:
    container: h-full
slots:
  default: |

    <Placeholder class="h-full" />
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---

:placeholder{class="h-full"}
::

### Beschrijving

Gebruik de `description` prop om de beschrijving van de sidebar header in te stellen.

::component-code
---
prettier: true
hide:
  - class
  - ui
ignore:
  - title
  - ui.container
props:
  title: Navigation
  description: Browse your workspace
  ui:
    container: h-full
slots:
  default: |

    <Placeholder class="h-full" />
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---

:placeholder{class="h-full"}
::

### Rail

Gebruik de `rail` prop om een dunne interactieve rand op de zijbalk weer te geven die de samengevouwen status bij klikken omschakelt. De rail wordt alleen weergegeven als `collapsible` niet `none` is.

::component-code
---
prettier: true
ignore:
  - title
  - ui.container
hide:
  - ui
  - class
props:
  rail: true
  collapsible: icon
  title: Navigation
  ui.container: h-full
slots:
  default: |

    <Placeholder class="h-full" />
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---

:placeholder{class="h-full"}
::

### Sluiten

Gebruik de `close` prop om een sluitknop in de zijbalkkop weer te geven. De sluitknop wordt alleen weergegeven als `collapsible` niet `none` is.

U kunt elke eigenschap van de [Button](/docs/components/button) component doorgeven om deze aan te passen.

::component-code
---
prettier: true
ignore:
  - title
  - rail
  - ui.container
hide:
  - ui
  - class
props:
  close: true
  rail: true
  collapsible: icon
  title: Navigation
  ui:
    container: h-full
items:
  close:
    - true
    - false
slots:
  default: |

    <Placeholder class="h-full" />
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---

:placeholder{class="h-full"}
::

### Sluit pictogram

Gebruik de `close-icon` prop om de knop Sluiten aan te passen [Icon](/docs/components/icon). Standaard `i-lucide-x`.

::component-code
---
prettier: true
ignore:
  - title
  - rail
  - side
  - close
  - ui.container
hide:
  - ui
  - class
props:
  close: true
  closeIcon: i-lucide-panel-right-close
  rail: true
  collapsible: icon
  side: right
  title: Navigation
  ui:
    container: h-full
items:
  close:
    - true
    - false
slots:
  default: |

    <Placeholder class="h-full" />
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---

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

### Modus

Gebruik de `mode` prop om de modus van het zijbalkmenu op mobiel te wijzigen. Standaard ingesteld op `slideover`.

::component-example
---
collapse: true
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'sidebar-mode-example'
options:
  - name: 'mode'
    label: 'mode'
    default: 'slideover'
    items:
      - modal
      - slideover
      - drawer
props:
  class: 'w-full'
---
::

::tip{to="#props"}
U kunt de `menu` prop gebruiken om het menu van de zijbalk aan te passen, deze zal zich aanpassen afhankelijk van de modus die u kiest.
::

## Voorbeelden

### Controle open staat

U kunt de open-status regelen met behulp van de `open`-prop of de `v-model:open`-richtlijn. Op het bureaublad regelt het de uitgebreide / samengevouwen status, op mobiel opent / sluit het het bladmenu.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-open-example'
overflowHidden: true
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

::note
In dit voorbeeld kunt u, gebruikmakend van [`defineShortcuts`](/docs/composables/define-shortcuts), de open status van de zijbalk wijzigen door op: kbd{value="O"} te drukken.
::

### Persist open staat

Gebruik [`useLocalStorage`](https://vueuse.org/core/useLocalStorage/) van VueUse of [`useCookie`](https://nuxt.com/docs/4.x/api/composables/use-cookie) in plaats van `ref` om de zijbalkstatus bij het herladen van pagina 's te behouden.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-persist-example'
overflowHidden: true
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

::note
Het enige verschil met het vorige voorbeeld is het vervangen van `ref(true)` door `useLocalStorage('sidebar-open', true)`.
::

### Met aangepaste breedte

De breedte van de zijbalk wordt geregeld door de `--sidebar-width` CSS-variabele (standaard `16rem`). De samengevouwen pictogrambreedte wordt geregeld door `--sidebar-width-icon` (standaard `4rem`).

Overschrijd ze globaal in uw CSS of per instantie met het kenmerk `style`.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-width-example'
overflowHidden: true
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

### Met koptekst

Om de zijbalk onder een [Header](/docs/components/header) te plaatsen, past u de `gap` en `container` aan met de `ui` prop.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-header-example'
overflowHidden: true
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

::note
De variabele `--ui-header-height` is standaard `4rem` en wordt gebruikt door de Header. Pas deze aan als uw navbar een andere hoogte gebruikt.
::

### Met AI chat

Gebruik de zijbalk aan de rechterkant met [ChatMessages](/docs/components/chat-messages) en [ChatPrompt](/docs/components/chat-prompt) om een AI-chatpaneel te maken.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-chat-example'
overflowHidden: true
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

## API

### Props

:component-props

### Slots

:component-slots

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog
