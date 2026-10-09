---
description: Een responsief tabelelement om gegevens in rijen en kolommen weer te geven.
category: data
keywords:
  - data table
  - datagrid
  - data grid
links:
  - label: TanStack Tafel
    avatar:
      src: https://github.com/tanstack.png
      loading: lazy
    to: https://tanstack.com/table/v8
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Table.vue
---

## Gebruik

De Table-component is gebouwd bovenop [TanStack Table v8](https://tanstack.com/table/v8) en wordt aangedreven door de [useVueTable](https://tanstack.com/table/v8/docs/framework/vue/vue-table#usevuetable) om een flexibele en volledig typeveilige API te bieden.

Het geeft uw gegevens weer als rijen en kolommen en ondersteunt sorteren, filteren, pagineren, rijselectie, uitbreiding, groepering, vastzetten en virtualisatie, zodat u alles kunt bouwen vanuit een eenvoudige data
 tabel naar een volledig uitgerust dataraster.

::component-example
---
source: false
name: 'table-example'
class: '!p-0'
---
::

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt/ui/tree/v4/docs/app/components/content/examples/table/TableExample.vue" aria-label="Bekijk broncode"}
Dit voorbeeld toont de meest voorkomende use-case van de `Table`-component. Bekijk de broncode op GitHub.
::

### Data

Gebruik de `data` prop als een array van objecten, de kolommen worden gegenereerd op basis van de toetsen van de objecten.

::component-code
---
prettier: true
collapse: true
class: '!p-0'
ignore:
  - data
  - class
external:
  - data
props:
  data:
    - id: '4600'
      date: '2024-03-11T15:30:00'
      status: 'paid'
      email: 'james.anderson@example.com'
      amount: 594
    - id: '4599'
      date: '2024-03-11T10:10:00'
      status: 'failed'
      email: 'mia.white@example.com'
      amount: 276
    - id: '4598'
      date: '2024-03-11T08:50:00'
      status: 'refunded'
      email: 'william.brown@example.com'
      amount: 315
    - id: '4597'
      date: '2024-03-10T19:45:00'
      status: 'paid'
      email: 'emma.davis@example.com'
      amount: 529
    - id: '4596'
      date: '2024-03-10T15:55:00'
      status: 'paid'
      email: 'ethan.harris@example.com'
      amount: 639
  class: 'flex-1'
---
::

### Kolommen

Gebruik de `columns` prop als een array van [ColumnDef](https://tanstack.com/table/v8/docs/api/core/column-def) objecten met eigenschappen zoals:

- `accessorKey`: [De sleutel van het rij-object dat moet worden gebruikt bij het extraheren van de waarde voor de kolom.] {class="text-muted"}
- `header`: [De te tonen header voor de kolom.
Als een string wordt doorgegeven, kan deze worden gebruikt als standaard voor de kolom-ID. Als een functie wordt doorgegeven, wordt er een props-object voor de header doorgegeven
 en moet de waarde van de gerenderde header retourneren (het exacte type hangt af van de gebruikte adapter).] {class="text-muted"}
- [`footer`](#with-column-footer): [De voettekst die moet worden weergegeven voor de kolom. Werkt precies zoals de koptekst, maar wordt weergegeven onder de tabel.] {class="text-muted"}
- `cell`: [De cel om elke rij voor de kolom weer te geven.
Als een functie wordt doorgegeven, wordt er een props-object voor de cel doorgegeven en moet de gerenderde celwaarde worden geretourneerd (het exacte type hangt af van de gebruikte adapter)
.] {class="text-muted"}
- `meta`: [Extra eigenschappen voor de kolom.] {class="text-muted"}
- `class`:
- `td`: [De klassen die van toepassing zijn op het `td` element.] {class="text-muted"}
- `th`: [De klassen die moeten worden toegepast op het `th`-element.] {class="text-muted"}
- `style`:
- `td`: [De stijl die moet worden toegepast op het `td`-element.] {class="text-muted"}
- `th`: [De stijl die moet worden toegepast op het `th`-element.] {class="text-muted"}
- [`colspan`](#with-column-span):
- `td`: [Het colspan attribuut dat van toepassing is op het `td` element.] {class="text-muted"}
- [`rowspan`](#with-column-span):
- `td`: [Het kenmerk rowspan dat moet worden toegepast op het `td`-element.] {class="text-muted"}

Om componenten of andere HTML-elementen weer te geven, moet u de Vue [`h` function](https://vuejs.org/api/render-function.html#h) binnen de `header` en `cell` rekwisieten gebruiken.
Dit verschilt van andere componenten die slots gebruiken, maar zorgt voor meer flexibiliteit.

::tip{to="#with-slots" aria-label="Tabel kolommen met sleuven"}
U kunt ook slots gebruiken om de koptekst en gegevenscellen van de tabel aan te passen.
::

::component-example
---
prettier: true
collapse: true
class: '!p-0'
name: 'table-columns-example'
highlights:
  - 53
  - 108
---
::

::note
Wanneer u componenten rendert met `h`, kunt u de `resolveComponent`-functie gebruiken of importeren vanuit `#components`.
::

### Meta

Gebruik de `meta` prop als een object ([TableMeta](https://tanstack.com/table/v8/docs/api/core/table#meta)) om eigenschappen als:

- `class`:
- `tr`: [De klassen die van toepassing zijn op het `tr` element.] {class="text-muted"}
- `style`:
- `tr`: [De stijl die moet worden toegepast op het `tr`-element.] {class="text-muted"}

::component-example
---
prettier: true
collapse: true
name: 'table-meta-example'
class: '!p-0'
highlights:
  - 128
  - 140
---
::

### Bezig met laden

Gebruik de `loading` prop om een laadstatus weer te geven, de `loading-color` prop om de kleur te veranderen en de `loading-animation` prop om de animatie te wijzigen.

::component-code
---
prettier: true
collapse: true
class: '!p-0'
ignore:
  - data
  - class
external:
  - data
props:
  loading: true
  loadingColor: primary
  loadingAnimation: carousel
  data:
    - id: '4600'
      date: '2024-03-11T15:30:00'
      status: 'paid'
      email: 'james.anderson@example.com'
      amount: 594
    - id: '4599'
      date: '2024-03-11T10:10:00'
      status: 'failed'
      email: 'mia.white@example.com'
      amount: 276
    - id: '4598'
      date: '2024-03-11T08:50:00'
      status: 'refunded'
      email: 'william.brown@example.com'
      amount: 315
    - id: '4597'
      date: '2024-03-10T19:45:00'
      status: 'paid'
      email: 'emma.davis@example.com'
      amount: 529
    - id: '4596'
      date: '2024-03-10T15:55:00'
      status: 'paid'
      email: 'ethan.harris@example.com'
      amount: 639
  class: 'flex-1'
---
::

::tip
De laadanimatie wordt automatisch uitgeschakeld wanneer de gebruiker de voorkeur geeft aan verminderde beweging, de balk wordt weergegeven als een puls over de volledige breedte.
::

### Plakkerig

Gebruik de `sticky` prop om de kop- of voettekst plakkerig te maken.

::component-code
---
prettier: true
collapse: true
class: '!p-0'
ignore:
  - data
  - class
external:
  - data
items:
  sticky:
    - true
    - false
props:
  sticky: true
  data:
    - id: '4600'
      date: '2024-03-11T15:30:00'
      status: 'paid'
      email: 'james.anderson@example.com'
      amount: 594
    - id: '4599'
      date: '2024-03-11T10:10:00'
      status: 'failed'
      email: 'mia.white@example.com'
      amount: 276
    - id: '4598'
      date: '2024-03-11T08:50:00'
      status: 'refunded'
      email: 'william.brown@example.com'
      amount: 315
    - id: '4597'
      date: '2024-03-10T19:45:00'
      status: 'paid'
      email: 'emma.davis@example.com'
      amount: 529
    - id: '4596'
      date: '2024-03-10T15:55:00'
      status: 'paid'
      email: 'ethan.harris@example.com'
      amount: 639
    - id: '4595'
      date: '2024-03-10T15:55:00'
      status: 'paid'
      email: 'ethan.harris@example.com'
      amount: 639
    - id: '4594'
      date: '2024-03-10T15:55:00'
      status: 'paid'
      email: 'ethan.harris@example.com'
      amount: 639
  class: 'flex-1 max-h-[312px]'
---
::

## Voorbeelden

### Met rij acties

U kunt een nieuwe kolom toevoegen die een [DropdownMenu](/docs/components/dropdown-menu) component in de `cell` weergeeft om rijacties weer te geven.

::component-example
---
prettier: true
collapse: true
name: 'table-row-actions-example'
highlights:
  - 115
  - 141
class: '!p-0'
---
::

### Met uitbreidbare rijen

U kunt een nieuwe kolom toevoegen die een [Button](/docs/components/button) component in de `cell` weergeeft om de uitbreidbare status van een rij te wijzigen met behulp van de TanStack-tabel [Expanding APIs](https://tanstack.com/table/v8/docs/api/features/expanding).

::caution
U moet de `#expanded`-sleuf definiëren om de uitgebreide inhoud weer te geven die de rij als parameter zal ontvangen.
::

::component-example
---
prettier: true
collapse: true
name: 'table-row-expandable-example'
highlights:
  - 55
  - 72
class: '!p-0'
---
::

::tip
U kunt de `expanded` prop gebruiken om de uitbreidbare status van de rijen te regelen (kan worden gebonden met `v-model`).
::

::note
U kunt deze actie ook toevoegen aan de [`DropdownMenu`](/docs/components/dropdown-menu) component in de `actions` kolom.
::

### Met gegroepeerde rijen

U kunt rijen groeperen op basis van een gegeven kolomwaarde en subrijen weergeven / verbergen via een knop die aan de cel is toegevoegd met behulp van de TanStack-tabel [Grouping APIs](https://tanstack.com/table/v8/docs/api/features/grouping).

#### Belangrijke onderdelen

* Add `grouping` prop met een array van kolom-ID 's waarop u wilt groeperen.
* Add `grouping-options` prop. Het moet `getGroupedRowModel` bevatten, u kunt het importeren vanuit `@tanstack/vue-table` of uw eigen implementeren.
* Expand rijen via `row.toggleExpanded()` methode op een cel van de rij. Houd in gedachten, het ook schakelt `#expanded` slot.
* Gebruik `aggregateFn` op kolomdefinitie om te definiëren hoe de rijen moeten worden samengevoegd.
* `agregatedCell` renderer op kolomdefinitie werkt alleen als er geen `cell` renderer is.

::component-example
---
prettier: true
collapse: true
name: 'table-grouped-rows-example'
highlights:
  - 157
  - 160
class: '!p-0'
---
::

### Met rij vastzetten: badge{label="4.6+" class="align-text-top"}

U kunt een kolom toevoegen die een [Button](/docs/components/button) component in de `cell` weergeeft om de pinningstatus van een rij te wijzigen met behulp van de TanStack-tabel [Row Pinning APIs](https://tanstack.com/table/v8/docs/api/features/row-pinning).
Vastgezette rijen blijven bovenaan of onderaan de tabel staan, ongeacht sorteren of filteren.

::component-example
---
prettier: true
collapse: true
name: 'table-row-pinning-example'
overflowHidden: true
highlights:
  - 91
  - 107
  - 160
  - 165
  - 168
class: '!p-0'
---
::

::tip
U kunt de `row-pinning` prop gebruiken om de pinningstatus van de rijen te regelen (kan worden gebonden met `v-model`).
::

### Met rij selectie

U kunt een nieuwe kolom toevoegen die een [Checkbox](/docs/components/checkbox) component binnen de `header` en `cell` weergeeft om rijen te selecteren met behulp van de TanStack-tabel [Row Selection APIs](https://tanstack.com/table/v8/docs/api/features/row-selection).

::component-example
---
prettier: true
collapse: true
name: 'table-row-selection-example'
highlights:
  - 55
  - 72
class: '!p-0'
---
::

::tip
U kunt de `row-selection` prop gebruiken om de selectiestatus van de rijen te regelen (kan worden gebonden met `v-model`).
::

### Met rij selecteren gebeurtenis

U kunt een `@select`-luisteraar toevoegen om rijen klikbaar te maken met of zonder een selectievakkolom.

::note
De handlerfunctie ontvangt de `Event` en `TableRow` instantie als respectievelijk het eerste en tweede argument.
::

::component-example
---
prettier: true
collapse: true
name: 'table-row-select-event-example'
highlights:
  - 124
  - 131
class: '!p-0'
---
::

::tip
U kunt dit gebruiken om naar een pagina te navigeren, een modaal te openen of zelfs om de rij handmatig te selecteren.
::

### Met rij context menu gebeurtenis

U kunt een `@contextmenu`-luisteraar toevoegen om rijen rechtsklikbaar te maken en de tabel in een [ContextMenu](/docs/components/context-menu) component te wikkelen om bijvoorbeeld rijacties weer te geven.

::note
De handlerfunctie ontvangt de `Event`- en `TableRow`-instantie als respectievelijk het eerste en tweede argument.
::

::component-example
---
prettier: true
collapse: true
name: 'table-row-context-menu-event-example'
highlights:
  - 133
  - 173
class: '!p-0'
---
::

### Met rij zweefgebeurtenis

U kunt een `@hover`-luisteraar toevoegen om rijen zweefbaar te maken en een [Popover](/docs/components/popover) of een [Tooltip](/docs/components/tooltip) gebruiken om bijvoorbeeld rijdetails weer te geven.

::note
De handlerfunctie ontvangt de `Event`- en `TableRow`-instantie als respectievelijk het eerste en tweede argument.
::

::component-example
---
prettier: true
collapse: true
name: 'table-row-hover-event-example'
highlights:
  - 129
  - 152
class: '!p-0'
---
::

::note
Dit voorbeeld is vergelijkbaar met de Popover [met volgende cursor example](/docs/components/popover#with-following-cursor) en gebruikt een [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced) om te voorkomen dat de Popover te snel opent en sluit wanneer de cursor van één rij wordt verplaatst 
naar een ander.
::

### Met kolom voettekst

U kunt een `footer`-eigenschap toevoegen aan de kolomdefinitie om een voettekst voor de kolom weer te geven.

::component-example
---
prettier: true
collapse: true
name: 'table-column-footer-example'
highlights:
  - 100
  - 112
class: '!p-0'
---
::

### Met kolom overspanning

U kunt de `colspan` en `rowspan` eigenschappen in de kolom `meta` gebruiken om cellen samen te voegen.
Deze eigenschappen accepteren een statische waarde of een functie die de cel ontvangt en de overspanningswaarde retourneert.

::note
Bij gebruik van `rowspan` moeten cellen die worden "geabsorbeerd" door de span van een vorige rij visueel worden verborgen. Gebruik de `class` meta met een functie die voor die cellen `'hidden'` retourneert.
::

::component-example
---
prettier: true
collapse: true
name: 'table-column-span-example'
class: '!p-0'
---
::

### Met kolomsortering

U kunt een kolom `header` bijwerken om een [Button](/docs/components/button) component binnen de `header` weer te geven om de sorteerstatus te wijzigen met behulp van de TanStack-tabel [Sorting APIs](https://tanstack.com/table/v8/docs/api/features/sorting).

Stel `enableSorting: true` ook in op die kolommen. Dit plaatst `aria-sort` op de `<th>` zodat schermlezers de huidige sorteerstatus van de kolom kunnen lezen: `none`, `ascending` of `descending`.
De `Button` blijft de controle die het verandert.

::component-example
---
prettier: true
collapse: true
name: 'table-column-sorting-example'
highlights:
  - 90
  - 106
class: '!p-0'
---
::

::tip
U kunt de `sorting` prop gebruiken om de sorteerstatus van de kolommen te regelen (kan worden gebonden met `v-model`).
::

U kunt ook een herbruikbare component maken om elke kolomkop sorteerbaar te maken.

::component-example
---
prettier: true
collapse: true
name: 'table-column-sorting-reusable-example'
highlights:
  - 115
  - 166
class: '!p-0'
---
::

::note
In dit voorbeeld gebruiken we een functie om de kolomkop te definiëren, maar u kunt ook een daadwerkelijke component maken.
::

### Met kolom vastzetten

U kunt een kolom `header` bijwerken om een [Button](/docs/components/button) component binnen de `header` weer te geven om de pinningstatus te wijzigen met behulp van de TanStack Table [Column Pinning APIs](https://tanstack.com/table/v8/docs/api/features/column-pinning).

::note
Een vastgezette kolom wordt plakkerig aan de linker- of rechterkant van de tafel.
Wanneer u kolompinning gebruikt, moet u expliciete `size`-waarden voor uw kolommen definiëren om een goede afhandeling van de kolombreedte te garanderen, vooral met meerdere vastgezette kolommen.
::

::component-example
---
prettier: true
collapse: true
overflowHidden: true
name: 'table-column-pinning-example'
highlights:
  - 108
  - 126
class: '!p-0 overflow-clip'
---
::

::tip
U kunt de `column-pinning` prop gebruiken om de pinningstatus van de kolommen te regelen (kan worden gebonden met `v-model`).
::

### Met kolom zichtbaarheid

U kunt een [DropdownMenu](/docs/components/dropdown-menu) component gebruiken om de zichtbaarheid van de kolommen te wijzigen met behulp van de TanStack Table [Column Visibility APIs](https://tanstack.com/table/v8/docs/api/features/column-visibility).

::component-example
---
prettier: true
collapse: true
name: 'table-column-visibility-example'
highlights:
  - 121
  - 146
class: '!p-0'
---
::

::tip
U kunt de `column-visibility` prop gebruiken om de zichtbaarheidsstatus van de kolommen te regelen (kan worden gebonden met `v-model`).
::

### Met kolomfilters

U kunt een [Input](/docs/components/input) component gebruiken om per kolom de rijen te filteren met behulp van de TanStack Table [Column Filtering APIs](https://tanstack.com/table/v8/docs/api/features/column-filtering).

::component-example
---
prettier: true
collapse: true
name: 'table-column-filters-example'
highlights:
  - 123
  - 128
class: '!p-0'
---
::

::tip
U kunt de `column-filters` prop gebruiken om de filterstatus van de kolommen te regelen (kan worden gebonden met `v-model`).
::

### Met globaal filter

U kunt een [Input](/docs/components/input) component gebruiken om de rijen te filteren met behulp van de TanStack Table [Global Filtering APIs](https://tanstack.com/table/v8/docs/api/features/global-filtering).

::component-example
---
prettier: true
collapse: true
name: 'table-global-filter-example'
class: '!p-0'
highlights:
  - 116
---
::

::tip
U kunt de `global-filter` prop gebruiken om de globale filterstatus te regelen (kan worden gebonden met `v-model`).
::

### Met paginering

U kunt een [Pagination](/docs/components/pagination) component gebruiken om de paginatiestatus te beheren met de [Pagination APIs](https://tanstack.com/table/v8/docs/api/features/pagination).

Er zijn verschillende pagineringsbenaderingen zoals uitgelegd in [Pagination Guide](https://tanstack.com/table/v8/docs/guide/pagination#pagination-guide). In dit voorbeeld gebruiken we paginering aan clientzijde, dus we moeten de `getPaginationRowModel()`{lang="ts-type"}-functie handmatig doorgeven.

::component-example
---
prettier: true
collapse: true
name: 'table-pagination-example'
class: '!p-0'
highlights:
  - 204
  - 209
---
::

::tip
U kunt de `pagination` prop gebruiken om de paginatiestatus te regelen (kan worden gebonden met `v-model`).
::

### Met opgehaalde gegevens

U kunt gegevens ophalen uit een API en deze gebruiken in de tabel.

::component-example
---
prettier: true
collapse: true
name: 'table-fetch-example'
highlights:
  - 15
  - 26
class: '!p-0'
---
::

::note
Dit voorbeeld gebruikt `useLazyFetch` met `server: false` om gegevens over de client op te halen zonder de initiële weergave te blokkeren.
De laadstatus controleert op zowel `pending` als `idle` status om een laadindicator weer te geven voor en tijdens het ophalen.
::

### Met oneindig scrollen

Als u paginering op de server gebruikt, kunt u de [`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/#useinfinitescroll) gebruiken om meer gegevens te laden terwijl de gebruiker scrolt.

::component-example
---
prettier: true
collapse: true
highlights:
  - 72
  - 83
overflowHidden: true
name: 'table-infinite-scroll-example'
class: '!p-0'
---
::

::note
Dit voorbeeld gebruikt `useLazyFetch` met `server: false` om gegevens over de client op te halen zonder de initiële weergave te blokkeren.
De laadstatus controleert op de status van zowel `pending` als `idle` om een laadindicator voor en tijdens het ophalen weer te geven. Extra pagina 's worden geladen terwijl de gebruiker scrolt.
::

### Met slepen en neerzetten

U kunt de [`useSortable`](https://vueuse.org/integrations/useSortable/) van [`@vueuse/integrations`](https://vueuse.org/integrations/README.html) gebruiken om slepen en neerzetten op de tabel mogelijk te maken. Deze integratie omvat [Sortable.js](https://sortablejs.github.io/Sortable/) om een naadloze slepen-en-neerzetten-ervaring te bieden.

::note
Omdat de tabelref het tbody-element niet blootlegt, voegt u er een unieke klasse aan toe via de `:ui`-prop om het te targeten met `useSortable` (bijv. `:ui="{ tbody: 'my-table-tbody' }"`).
::

::component-example
---
prettier: true
collapse: true
highlights:
  - 81
  - 83
name: 'table-drag-and-drop-example'
class: '!p-0'
---
::

### Met virtualisatie: badge{label="4.1+" class="align-text-top"}

Gebruik de `virtualize` prop om virtualisatie voor grote datasets mogelijk te maken als een boolean of een object met opties zoals `{ estimateSize: 65, overscan: 12 }`.
U kunt ook andere [TanStack Virtual options](https://tanstack.com/virtual/latest/docs/api/virtualizer#optional-options) doorgeven om het virtualisatiegedrag aan te passen.
De `sticky` prop werkt in combinatie met `virtualize` om de header of footer zichtbaar te houden tijdens het scrollen door grote datasets.

::warning
Het vastzetten van rijen wordt niet ondersteund wanneer virtualisatie is ingeschakeld.
::

::component-example
---
prettier: true
collapse: true
overflowHidden: true
name: 'table-virtualize-example'
class: '!p-0'
---
::

::note
Een hoogtebeperking is vereist op de tafel om virtualisatie goed te laten werken (bijv. `class="h-[400px]"`).
::

### Met extern scroll element: badge{label="4.10+" class="align-text-top"}

Geef een `getScrollElement`-functie door in de `virtualize`-prop om te virtualiseren tegen een scrollcontainer voor voorouders in plaats van de eigen root van de tabel.
Stel `scrollMargin` in op de offset van de tabel vanaf het begin van het scroll-element (bijv. De hoogte van de inhoud erboven), zodat een koptekst en de tabeltekst een enkele schuifbalk delen.

::component-example
---
prettier: true
collapse: true
overflowHidden: true
name: 'table-external-scroll-example'
class: '!p-0'
---
::

::note
In deze modus is `overflow` van de tabelwortel `visible` en de externe container is eigenaar van scrollen op beide assen, dus geef het `overflow-auto` (niet alleen `overflow-y-auto`) om brede tabellen horizontaal schuifbaar te houden
. Een `sticky`-header verankert vervolgens aan die container.
::

### Met boomgegevens

U kunt de `get-sub-rows` prop gebruiken om hiërarchische (boom) gegevens in de tabel weer te geven.
Als uw gegevensobjecten bijvoorbeeld een `children`-array hebben, stelt u `:get-sub-rows="row => row.children"` in om uitbreidbare rijen in te schakelen.

::component-example
---
prettier: true
collapse: true
highlights:
  - 175
name: 'table-tree-data-example'
class: '!p-0'
---
::

### Met sleuven

U kunt slots gebruiken om de koptekst en gegevenscellen van de tabel aan te passen.

Gebruik de `#<column>-header`-sleuf om de koptekst van een kolom aan te passen. U krijgt toegang tot de eigenschappen `column`, `header` en `table` in de sleufscope.

Gebruik de `#<column>-cell`-sleuf om de cel van een kolom aan te passen. U krijgt toegang tot de eigenschappen `cell`, `column`, `getValue`, `renderValue`, `row` en `table` in de sleufscope.

::component-example
---
prettier: true
collapse: true
name: 'table-slots-example'
class: '!p-0'
---
::

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table#attributes" target="_blank"}
Dit onderdeel ondersteunt ook alle native `<table>` HTML-kenmerken.
::

### Slots

:component-slots

### Expose

U hebt toegang tot de getypte componentinstantie met [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref).

```vue
<script setup lang="ts">
const table = useTemplateRef('table')
</script>

<template>
  <UTable ref="table" />
</template>
```

Dit geeft u toegang tot het volgende:

| Naam | Type |
| ---- | ---- |
| `tableRef`{lang="ts-type"} | `Ref<HTMLTableElement \| null>`{lang="ts-type"} |
| `tableApi`{lang="ts-type"} | [`Table`{lang="ts-type"}](https://tanstack.com/table/v8/docs/api/core/table#table-api) |

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog
