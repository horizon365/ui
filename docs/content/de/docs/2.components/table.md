---
description: Ein responsives Tabellenelement, um Daten in Zeilen und Spalten anzuzeigen.
category: data
keywords:
  - data table
  - datagrid
  - data grid
links:
  - label: Tanja Tisch
    avatar:
      src: https://github.com/tanstack.png
      loading: lazy
    to: https://tanstack.com/table/v8
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Table.vue
---

## Bearbeiten

Die Table-Komponente baut auf der [TanStack-Tabelle v8](https://tanstack.com/table/v8) auf und wird von der [useVueTable](https://tanstack.com/table/v8/docs/framework/vue/vue-table#usevuetable) composable unterstützt, um eine flexible und vollständig typsichere API bereitzustellen.

Es rendert Ihre Daten als Zeilen und Spalten und unterstützt Sortierung, Filterung, Paginierung, Zeilenauswahl, Erweiterung, Gruppierung, Pinning und Virtualisierung, sodass Sie alles von einer einfachen Datentabelle bis zu einem voll ausgestatteten Datenraster erstellen können.

::component-example
---
source: false
name: 'table-example'
class: '!p-0'
---
::

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt/ui/tree/v4/docs/app/components/content/examples/table/TableExample.vue" aria-label="siehe Source Code"}
Dieses Beispiel zeigt den häufigsten Anwendungsfall der `Table`-Komponente. Überprüfen Sie den Quellcode auf GitHub.
::

### Data Bearbeiten

Verwenden Sie die `data` prop als ein Array von Objekten, die Spalten werden basierend auf den Schlüsseln der Objekte generiert.

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

### columns (englisch)

Verwenden Sie die `columns`-Prop als Array von [ColumnDef](https://tanstack.com/table/v8/docs/api/core/column-def)-Objekten mit Eigenschaften wie

- `accessorKey`:[Der Schlüssel des Zeilenobjekts, das beim Extrahieren des Werts für die Spalte verwendet werden soll.] {class="text-muted"}
- `header` (auf Englisch):[Der Header, der für die Spalte angezeigt werden soll. Wenn eine Zeichenfolge übergeben wird, kann sie als Standard für die Spalten-ID verwendet werden. Wenn eine Funktion übergeben wird, wird ein Props-Objekt für die Kopfzeile übergeben und sollte den gerenderten Header-Wert zurückgeben (der genaue Typ hängt vom verwendeten Adapter ab).] {class="text-muted"}
- [`footer`](#with-column-footer):[Die Fußzeile, die für die Spalte angezeigt werden soll. Funktioniert genau wie die Kopfzeile, wird aber unter der Tabelle angezeigt.] {class="text-muted"}
- `cell` (auf Englisch):[Die Zelle, die jede Zeile für die Spalte anzeigen soll. Wenn eine Funktion übergeben wird, wird ihr ein Props-Objekt für die Zelle übergeben und sollte den gerenderten Zellwert zurückgeben (der genaue Typ hängt vom verwendeten Adapter ab).] {class="text-muted"}
- `meta`:[Extra properties for the column.] {class="text-muted"} [Zusätzliche Eigenschaften für die Spalte.]
  - `class`:(deutsch)
    - `td`:[Klassen, die auf das `td`-Element angewendet werden sollen.] {class="text-muted"}
    - `th`:[Klassen, die auf das `th`-Element angewendet werden sollen.] {class="text-muted"}
  - `style` (englisch):
    - `td`:[Der Stil, der auf das `td`-Element angewendet werden soll.] {class="text-muted"}
    - `th`:[Der auf das `th`-Element anzuwendende Stil.] {class="text-muted"}
  - [`colspan`](#with-column-span): xph10103x`colspan`](#with-column-span): #with-column-span): xph10103x`colspan`](#with-column-span): xph10102x`colspan`](]():
    - `td`:[Das colspan-Attribut, das auf das `td`-Element angewendet werden soll.] {class="text-muted"}
  - [`rowspan`](#with-column-span): #with-column-span): xph1113x`rowspan`](](#with-column-span): xph1115x): xph11115x): xph11115x):
    - `td`:[Das rowspan Attribut, das auf das `td` Element angewendet werden soll.] {class="text-muted"}

Um Komponenten oder andere HTML-Elemente zu rendern, müssen Sie die Vue [`h` function](https://vuejs.org/api/render-function.html#h) innerhalb der `header` und `cell` props. This verwenden unterscheidet sich von anderen Komponenten, die Slots verwenden, sondern ermöglicht mehr Flexibilität.

::tip{to="#with-slots" aria-label="Tischspalten mit Slots"}
Sie können auch Slots verwenden, um die Kopfzeile und die Datenzellen der Tabelle anzupassen.
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
Wenn Sie Komponenten mit `h` rendern, können Sie entweder die Funktion `resolveComponent` verwenden oder aus `#components` importieren.
::

### Meta ist ein

Verwenden Sie die `meta`-Prop als Objekt ([TableMeta](https://tanstack.com/table/v8/docs/api/core/table#meta)), um Eigenschaften zu übergeben wie:

- `class` (englisch):
  - `tr`:[Die Klassen, die auf das `tr`-Element angewendet werden sollen.] {class="text-muted"}
- `style` (englisch)
  - `tr`:[Der auf das `tr`-Element anzuwendende Stil.] {class="text-muted"}

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

### loading (englisch)

Verwenden Sie die `loading` prop, um einen Ladezustand anzuzeigen, die `loading-color` prop, um ihre Farbe zu ändern, und die `loading-animation` prop, um ihre Animation zu ändern.

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
Die Ladeanimation wird automatisch deaktiviert, wenn der Benutzer eine reduzierte Bewegung bevorzugt, stattdessen wird die Leiste als Impuls in voller Breite angezeigt.
::

### Sticky Bearbeiten

Verwenden Sie die `sticky` prop, um die Kopf-oder Fußzeile klebrig zu machen.

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

## Beispiele

### With Zeilenaktionen

Sie können eine neue Spalte hinzufügen, die eine [DropdownMenu](/docs/components/dropdown-menu)-Komponente in der `cell` rendert, um Zeilenaktionen zu rendern.

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

### With erweiterbare Zeilen

Sie können eine neue Spalte hinzufügen, die eine [Button](/docs/components/button)-Komponente innerhalb der `cell` rendert, um den erweiterbaren Status einer Zeile mithilfe der TanStack-Tabelle [Expanding APIs](https://tanstack.com/table/v8/docs/api/features/expanding) umzuschalten.

::caution
Sie müssen den `#expanded`-slot definieren, um den erweiterten inhalt zu rendern, der die zeile als parameter erhält.
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
Sie können die `expanded`-prop verwenden, um den erweiterbaren Zustand der Zeilen zu steuern (kann mit `v-model` gebunden werden).
::

::note
Sie können diese Aktion auch der [`DropdownMenu`](/docs/components/dropdown-menu)-Komponente in der `actions`-Spalte hinzufügen.
::

### Mit gruppierten Zeilen

Sie können Zeilen basierend auf einem bestimmten Spaltenwert gruppieren und Unterzeilen über eine Schaltfläche ein-und ausblenden, die der Zelle mithilfe der TanStack-Tabelle [Grouping APIs](https://tanstack.com/table/v8/docs/api/features/grouping) hinzugefügt wurde.

####  Wichtige Teile

* Fügen Sie `grouping` prop mit einem Array von Spalten-IDs hinzu, nach denen Sie gruppieren möchten.
* Add `grouping-options` prop. Es muss `getGroupedRowModel` enthalten, Sie können es von `@tanstack/vue-table` importieren oder Ihr eigenes implementieren.
* Expand rows via `row.toggleExpanded()` method on any cell of the row. Denken Sie daran, dass es auch den `#expanded`-Slot schaltet.
* Verwenden Sie `aggregateFn` für die Spaltendefinition, um zu definieren, wie die Zeilen aggregiert werden sollen.
Der * `agregatedCell`-Renderer bei Spaltendefinition funktioniert nur, wenn es keinen `cell`-Renderer gibt.

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

### With Zeilenanheftung: badge{label="4.6+" class="align-text-top"}

Sie können eine Spalte hinzufügen, die eine [Button](/docs/components/button)-Komponente innerhalb der `cell` rendert, um den Pinning-Status einer Zeile mithilfe der TanStack-Tabelle [Row Pinning APIs](https://tanstack.com/table/v8/docs/api/features/row-pinning) umzuschalten.

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
Sie können die `row-pinning`-prop verwenden, um den Pinning-Zustand der Zeilen zu steuern (kann mit `v-model` gebunden werden).
::

### With Zeilenauswahl

Sie können eine neue Spalte hinzufügen, die eine [Checkbox](/docs/components/checkbox)-Komponente innerhalb der `header` und `cell` rendert, um Zeilen mit der TanStack-Tabelle [Row Selection APIs](https://tanstack.com/table/v8/docs/api/features/row-selection) auszuwählen.

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
Sie können die `row-selection`-prop verwenden, um den Selektionsstatus der Zeilen zu steuern (kann mit `v-model` gebunden werden).
::

### With row select event (mit Zeilenauswahl-Ereignis)

Sie können einen `@select`-Listener hinzufügen, um Zeilen mit oder ohne Checkbox-Spalte anklickbar zu machen.

::note
Die handler-Funktion empfängt die `Event`-und `TableRow`-Instanz als erstes bzw. zweites Argument.
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
Sie können damit zu einer Seite navigieren, ein Modal öffnen oder die Zeile sogar manuell auswählen.
::

### With row context menu Veranstaltung

Sie können einen `@contextmenu`-Listener hinzufügen, um Zeilen mit der rechten Maustaste anklickbar zu machen, und die Tabelle in eine [ContextMenu](/docs/components/context-menu)-Komponente einwickeln, um Zeilenaktionen anzuzeigen.

::note
Die handler-Funktion empfängt die `Event`-und `TableRow`-Instanz als erstes bzw. zweites Argument.
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

### With row hover event (Row Hover-Ereignis)

Sie können einen `@hover`-Listener hinzufügen, um Zeilen schwebefähig zu machen, und eine [Popover](/docs/components/popover)-oder eine [Tooltip](/docs/components/tooltip)-Komponente verwenden, um beispielsweise Zeilendetails anzuzeigen.

::note
Die handler-Funktion empfängt die `Event`-und `TableRow`-Instanz als erstes bzw. zweites Argument.
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
Dieses Beispiel ähnelt dem Popover [with following cursor example](/docs/components/popover#with-following-cursor) und verwendet ein [xph4440x](https://vueuse.org/shared/refDebounced/#refdebounced), um zu verhindern, dass sich das Popover zu schnell öffnet und schließt, wenn der Cursor von einer Zeile in eine andere bewegt wird.
::

### With Spalte Fußzeile

Sie können der Spaltendefinition eine `footer`-Eigenschaft hinzufügen, um eine Fußzeile für die Spalte zu rendern.

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

### With Spaltenspanne

Sie können die Eigenschaften `colspan` und `rowspan` in der Spalte `meta` zum Zusammenführen von Zellen verwenden. Diese Eigenschaften akzeptieren einen statischen Wert oder eine Funktion, die die Zelle empfängt und den Wert span zurückgibt.

::note
Wenn Sie `rowspan` verwenden, müssen Zellen, die von der Spanne einer vorherigen Zeile "absorbiert" werden, visuell ausgeblendet werden. Verwenden Sie die `class`-Meta mit einer Funktion, die `'hidden'` für diese Zellen zurückgibt.
::

::component-example
---
prettier: true
collapse: true
name: 'table-column-span-example'
class: '!p-0'
---
::

### With Spalte Sortierung

Sie können eine Spalte `header` aktualisieren, um eine [Button](/docs/components/button)-Komponente innerhalb der `header` zu rendern, um den Sortierstatus mithilfe der TanStack-Tabelle [Sorting APIs](https://tanstack.com/table/v8/docs/api/features/sorting) umzuschalten.

Dies setzt `aria-sort` auf die `<th>`, so dass Screenreader den aktuellen Sortierstatus der Spalte lesen können: `none`, `ascending` oder `descending`.

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
Sie können die `sorting`-prop verwenden, um den Sortierzustand der Spalten zu steuern (kann mit `v-model` gebunden werden).
::

Sie können auch eine wiederverwendbare Komponente erstellen, um jede Spaltenüberschrift sortierbar zu machen.

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
In diesem Beispiel verwenden wir eine Funktion, um die Spaltenüberschrift zu definieren, aber Sie können auch eine tatsächliche Komponente erstellen.
::

### Mit Column Pinning

Sie können eine Spalte `header` aktualisieren, um eine [Button](/docs/components/button)-Komponente innerhalb der `header` zu rendern, um den Pinning-Status mithilfe der TanStack-Tabelle [Column Pinning APIs](https://tanstack.com/table/v8/docs/api/features/column-pinning) umzuschalten.

::note
Wenn Sie Spalten-Pinning verwenden, sollten Sie explizite `size`-Werte für Ihre Spalten definieren, um eine ordnungsgemäße Handhabung der Spaltenbreite sicherzustellen, insbesondere bei mehreren angehefteten Spalten.
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
Sie können die `column-pinning`-prop verwenden, um den Pinning-Zustand der Spalten zu steuern (kann mit `v-model` gebunden werden).
::

### Mit Spaltensichtbarkeit

Sie können eine [DropdownMenu](/docs/components/dropdown-menu)-Komponente verwenden, um die Sichtbarkeit der Spalten mithilfe der TanStack-Tabelle [Column Visibility APIs](https://tanstack.com/table/v8/docs/api/features/column-visibility) umzuschalten.

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
Sie können die `column-visibility`-prop verwenden, um den Sichtbarkeitsstatus der Spalten zu steuern (kann mit `v-model` gebunden werden).
::

### With Spaltenfilter

Sie können eine [Input](/docs/components/input)-Komponente verwenden, um die Zeilen mithilfe der TanStack-Tabelle [Column Filtering APIs](https://tanstack.com/table/v8/docs/api/features/column-filtering) pro Spalte zu filtern.

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
Sie können die `column-filters`-prop verwenden, um den Filterstatus der Spalten zu steuern (kann mit `v-model` gebunden werden).
::

### Mit globalem Filter

Sie können eine [Input](/docs/components/input)-Komponente verwenden, um die Zeilen mithilfe der TanStack-Tabelle [Global Filtering APIs](https://tanstack.com/table/v8/docs/api/features/global-filtering) zu filtern.

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
Sie können die `global-filter`-prop verwenden, um den globalen Filterstatus zu steuern (kann mit `v-model` gebunden werden).
::

### mit Paginierung

Sie können eine [Pagination](/docs/components/pagination)-Komponente verwenden, um den Paginierungsstatus mit dem [Pagination-APIs](https://tanstack.com/table/v8/docs/api/features/pagination) zu steuern.

Es gibt verschiedene Paginierungsansätze, wie in [Pagination Guide](https://tanstack.com/table/v8/docs/guide/pagination#pagination-guide) erläutert. In diesem Beispiel verwenden wir die clientseitige Paginierung, sodass wir die `getPaginationRowModel()`{lang="ts-type"}-Funktion manuell übergeben müssen.

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
Sie können die `pagination` prop verwenden, um den Paginierungszustand zu steuern (kann mit `v-model` gebunden werden).
::

### Mit abgeholten Daten

Sie können Daten aus einer API abrufen und in der Tabelle verwenden.

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
In diesem Beispiel wird `useLazyFetch` mit `server: false` verwendet, um Daten auf dem Client abzurufen, ohne das anfängliche Rendern zu blockieren. Der Ladezustand überprüft sowohl den `pending`-als auch den `idle`-Status, um vor und während des Abrufs einen Ladeindikator anzuzeigen.
::

### Mit unendlichem Scrollen

Wenn Sie die serverseitige Paginierung verwenden, können Sie das Composable [`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/#useinfinitescroll) verwenden, um mehr Daten zu laden, wenn der Benutzer scrollt.

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
In diesem Beispiel wird `useLazyFetch` mit `server: false` verwendet, um Daten auf dem Client abzurufen, ohne das anfängliche Rendern zu blockieren. Der Ladezustand überprüft sowohl den `pending`-als auch den `idle`-Status, um eine Ladeanzeige vor und während des Abrufs anzuzeigen. Zusätzliche Seiten werden geladen, wenn der Benutzer scrollt.
::

### Mit Drag and Drop

Sie können die [`useSortable`](https://vueuse.org/integrations/useSortable/) composable von [`@vueuse/integrations`](https://vueuse.org/integrations/README.html) verwenden, um die Drag & Drop-Funktionalität auf der Tabelle zu aktivieren.

::note
Da die Tabellenref das tbody-Element nicht verfügbar macht, fügen Sie ihm über die `:ui`-Prop eine eindeutige Klasse hinzu, um es mit `useSortable` (z. B. `:ui="{ tbody: 'my-table-tbody' }"`) anzusprechen.
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

### Virtualisierung: badge{label="4.1+" class="align-text-top"}

Verwenden Sie die `virtualize`-prop, um die Virtualisierung für große Datensätze als Boolean oder ein Objekt mit Optionen wie `{ estimateSize: 65, overscan: 12 }` zu aktivieren. Sie können auch andere [TanStack Virtual options](https://tanstack.com/virtual/latest/docs/api/virtualizer#optional-options) übergeben, um das Virtualisierungsverhalten anzupassen.

::warning
Zeilenanheften wird nicht unterstützt, wenn die Virtualisierung aktiviert ist.
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
Eine Höhenbeschränkung ist auf der Tabelle erforderlich, damit die Virtualisierung ordnungsgemäß funktioniert (z. B. `class="h-[400px]"`).
::

### Mit externem Scrollelement: badge{label="4.10+" class="align-text-top"}

Übergeben Sie eine `getScrollElement`-Funktion in der `virtualize`-Prop, um gegen einen Vorfahren-Scroll-Container anstelle des tabelleneigenen Root zu virtualisieren. Setzen Sie `scrollMargin` auf den Offset der Tabelle vom Start des Scroll-Elements (z. B. die Höhe des Inhalts darüber), so dass ein Header und der Tabellenkörper eine einzige Scrollleiste teilen.

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
In diesem Modus ist der `overflow` der Tabellenwurzel `visible` und der externe Container besitzt das Scrollen auf beiden Achsen, also geben Sie ihm `overflow-auto` (nicht nur `overflow-y-auto`), um breite Tabellen horizontal scrollbar zu halten.
::

### Mit Baumdaten

Sie können die `get-sub-rows`-prop verwenden, um hierarchische (Baum-) Daten in der Tabelle anzuzeigen.
Wenn Ihre Datenobjekte beispielsweise ein `children`-Array haben, legen Sie `:get-sub-rows="row => row.children"` so fest, dass erweiterbare Zeilen aktiviert werden.

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

### Mit Steckplätzen

Sie können Slots verwenden, um die Kopfzeile und die Datenzellen der Tabelle anzupassen.

Verwenden Sie den `#<column>-header`-Steckplatz, um die Kopfzeile einer Spalte anzupassen. Sie haben Zugriff auf die Eigenschaften `column`, `header` und `table` im Slotbereich.

Verwenden Sie den `#<column>-cell`-Steckplatz, um die Zelle einer Spalte anzupassen. Sie haben Zugriff auf die Eigenschaften `cell`, `column`, `getValue`, `renderValue`, `row` und `table` im Slotbereich.

::component-example
---
prettier: true
collapse: true
name: 'table-slots-example'
class: '!p-0'
---
::

## API (englisch)

### Props (englisch)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<table>` HTML-Attribute.
::

### Slots Bearbeiten

:component-slots

### Expose (Englisch)

Sie können auf die typisierte Komponenteninstanz mit [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref) zugreifen.

```vue
<script setup lang="ts">
const table = useTemplateRef('table')
</script>

<template>
  <UTable ref="table" />
</template>
```

Dies gibt Ihnen Zugang zu den folgenden:

| Vorname| Typen|
| ---- | ---- |
| `tableRef`{lang="ts-type"} nicht| `Ref<HTMLTableElement \| null>`{lang="ts-type"} (englisch)|
| `tableApi`{lang="ts-type"} nicht vorhanden| [`Table`{lang="ts-type"}](https://tanstack.com/table/v8/docs/api/core/table#table-api)|

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
