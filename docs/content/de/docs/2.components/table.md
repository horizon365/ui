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

@@@ph000@Verwendung

Die Table-Komponente basiert auf[TanStack-Tabelle v8](https://tanstack.com/table/v8)und wird von der[useVueTable](https://tanstack.com/table/v8/docs/framework/vue/vue-table#usevuetable)composable betrieben , um eine flexible und vollständig typsichere API bereitzustellen .

Es rendert Ihre Daten als Zeilen und Spalten und unterstützt Sortierung , Filterung , Paginierung , Zeilenauswahl , Erweiterung , Gruppierung , Pinning und Virtualisierung , sodass Sie alles von einer einfachen Datentabelle bis zu einem voll ausgestatteten Datenraster erstellen können .

::component-example
---
Quelle : Falscher
Name : " Beispieltabelle "
Klasse : ' ! p - 0 '
---
::

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt/ui/tree/v4/docs/app/components/content/examples/table/TableExample.vue" aria-label="siehe Source Code"}
Dieses Beispiel zeigt den häufigsten Anwendungsfall der Komponente`Table`. Überprüfen Sie den Quellcode auf GitHub .
::

@@@@@@11@11@11@11@11@11@11@11@11@11@111@11@11@11@111@111@111@111@111@11@11@11@11@11@111@11@111@111@111@111@111@111@1111@1111@1111@11111@1111@11111@111111@1111111@111111111@@@1111111111111111111@@@111111111111111@@@@111111111111111111111111111111111

Verwenden Sie die`data`prop als Array von Objekten , die Spalten werden basierend auf den Schlüsseln der Objekte generiert .

::component-code
---
Schöner : wahr
Einsturz : wahr
Klasse : ' ! p - 0 '
Ignoriert :
  @@13@Daten
  @@14@Klasse
Außen :
  @@ph015@Daten
Props :
  Daten :
    - id : ' 4600 ' (auf Englisch)
      Datum : ' 2024 - 03 - 11T15 : 30 : 00 '
      Status : " bezahlt "
      E-Mail : ' james . anderson@example.com'
      Anzahl : 594
    - id : ' 4599 ' (auf Englisch)
      Datum : ' 2024 - 03 - 11T10 : 10 : 00 '
      Status : " gescheitert " .
      E-Mail : ' mia . weiß@example.com'
      Gesamt : 276
    @@ph018@@id : ' 4598 ' (auf Englisch)
      Dateiendung : 2024 - 03 - 11T08 : 50 : 00
      Status : " Rückerstattung "
      E-Mail an : william . brown@example.com'
      Anzahl : 315
    @@ph019@id : ' 4597 ' (auf Englisch)
      Datum : ' 2024 - 03 - 10T19 : 45 : 00 '
      Status : " Bezahlt "
      E-Mail : ' emma . davis@example.com'
      Anzahl : 529
    @@ph020@@id : ' 4596 ' (auf Englisch)
      Datum : ' 2024 - 03 - 10T15 : 55 : 00 '
      Status : " Bezahlt "
      E-Mail : ' ethan . harris@example.com'
      Gesamt : 639
  Klasse : Flex - 1
---
::

@@ph021@@gmail.de

Verwenden Sie`columns`prop als Array von[ColumnDef](https://tanstack.com/table/v8/docs/api/core/column-def)Objekten mit Eigenschaften wie :

- `accessorKey`: [ Der Schlüssel des Zeilenobjekts , der beim Extrahieren des Werts für die Spalte verwendet werden soll . ]{class="text-muted"}
- `header`: [ Der für die Spalte anzuzeigende Header . Wenn eine Zeichenfolge übergeben wird , kann sie als Standard für die Spalten-ID verwendet werden . Wenn eine Funktion übergeben wird , wird ein Props-Objekt für den Header übergeben und sollte den gerenderten Header-Wert zurückgeben (der genaue Typ hängt vom verwendeten Adapter ab) . ]{class="text-muted"}
- [`footer`#with-column-footer): [ Die Fußzeile , die für die Spalte angezeigt werden soll .
- `cell`:[Die Zelle, um jede Zeile für die Spalte anzuzeigen. Wenn eine Funktion übergeben wird, wird ein Props-Objekt für die Zelle übergeben und sollte den gerenderten Zellwert zurückgeben (der genaue Typ hängt vom verwendeten Adapter ab).]{class="text-muted"}
- `meta`:[Zusätzliche Eigenschaften für die Spalte.]{class="text-muted"}
  `class`:
    - `td`:[Die Klassen, die für das `td` element gelten.]{class="text-muted"}:
    - `th`:[Die Klassen, die für das `th` element gelten.]{class="text-muted"}
  `style`:
    - `td`:[Der Stil, der auf das `td` Element angewendet werden soll.]{class="text-muted"}
    - `th`:[Der Stil, der auf das `th` element angewendet werden soll.]{class="text-muted"}
  `colspan`]():
    - `td`:[Das colspan-Attribut, das auf das `td`-Element angewendet werden soll.]{class="text-muted"}
  `rowspan`](#with-column-span):
    - `td`:[Das rowspan-Attribut, das auf das `td`-Element angewendet werden soll.]{class="text-muted"}

Um Komponenten oder andere HTML-Elemente zu rendern, müssen Sie die Vue [`h` function](https://vuejs.org/api/render-function.html#h) innerhalb der `header` und `cell` props verwenden.

::tip{to="#with-slots" aria-label="Tischspalten mit Slots"}
Sie können Slots auch verwenden, um die Kopfzeile und die Datenzellen der Tabelle anzupassen.
::

::component-example
---
Schöner: wahr
Einsturz: wahr
Klasse: '! p-0'
name: 'table-columns-example'(table-columns-Beispiel)
Highlights:
  @@@94@53
  @@@95@108
---
::

::note
Wenn Sie Komponenten mit `h` rendern, können Sie entweder die Funktion `resolveComponent` verwenden oder aus `#components` importieren.
::

@@999@@nmmmmmmmdndndn.de

Verwenden Sie `meta` prop als Objekt ([TableMeta](https://tanstack.com/table/v8/docs/api/core/table#meta)), um Eigenschaften wie:

`class`:
  - `tr`:[Die Klassen, die für das `tr` element gelten.]{class="text-muted"}
`style`:
  - `tr`:[Der Stil, der auf das `tr` element anzuwenden ist.]{class="text-muted"}

::component-example
---
Schöner: wahr
Einsturz: wahr
name: 'table-meta-example'(table-meta-beispiel)
Klasse: '! p-0'
Highlights:
  @@@@117@128
  @@@118@140
---
::

@@119 @ Aufladen

Verwenden Sie `loading` prop, um einen Ladezustand anzuzeigen,`loading-color` prop, um seine Farbe zu ändern, und `loading-animation` prop, um seine Animation zu ändern.

::component-code
---
Schöner: wahr
Einsturz: wahr
Klasse: '! p-0'
Ignoriert:
  @@123@Daten
  @@124@Klasse
Außen:
  @@ph125@Daten
Props:
  Aufladung: true
  loadingFarbe: Primär
  Spielbeschreibung: Carousel
  Daten:
    - id : ' 4600 ' (auf Englisch)
      Datum : ' 2024 - 03 - 11T15 : 30 : 00 '
      Status : " Bezahlt "
      E-Mail : ' james . anderson@example.com'
      Anzahl : 594
    - id : ' 4599 ' (auf Englisch)
      Datum : ' 2024 - 03 - 11T10 : 10 : 00 '
      Status : " gescheitert " .
      E-Mail : ' mia . weiß@example.com'
      Gesamt : 276
    - id : ' 4598 ' (auf Englisch)
      Dateiendung : 2024 - 03 - 11T08 : 50 : 00
      Status : " Rückerstattung "
      E-Mail an : william . brown@example.com'
      Anzahl : 315
    - id : ' 4597 ' (auf Englisch)
      Datum : ' 2024 - 03 - 10T19 : 45 : 00 '
      Status : " bezahlt "
      E-Mail : ' emma . davis@example.com'
      Gesamt : 529
    - id : ' 4596 ' (auf Englisch)
      Datum : ' 2024 - 03 - 10T15 : 55 : 00 '
      Status : " bezahlt "
      E-Mail : ' ethan . harris@example.com'
      Anzahl : 639
  Klasse : Flex - 1
---
::

::tip
Die Ladeanimation wird automatisch deaktiviert , wenn der Benutzer eine reduzierte Bewegung bevorzugt , stattdessen wird die Leiste als Impuls in voller Breite angezeigt .
::

@@131@131@131@131@131@131@131@131@131@131@131@131@131@131@13@131@131@131@131@131@131@131@131@131@131@13131@@13131@@13131@@@13131@@@13131@@@@@@@1313131@@@@@@@@@@1313131@@@@@@@@@@@@@@131313131@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

Verwenden Sie die`sticky`prop , um die Kopf - oder Fußzeile klebrig zu machen .

::component-code
---
Schöner : wahr
Einsturz : wahr
Klasse : ' ! p - 0 '
Ignoriert :
  @@133@Daten
  @@134@Klasse
Außen :
  @@135@Daten
Items :
  Sticky sein :
    @@136@136@136@136@136@136@136@136@136@136@136@136@136@136@136@136@136@136@136@136@136@136@136@136@136@136@136@136@@136@136@136@136@@136@@136@@136@@136@@@136@@@@@1336@@@@@@@@@@13336@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@13333336
    @@137@unwahr
Props :
  Sticky : wahr
  Daten :
    - id : ' 4600 ' (auf Englisch)
      Datum : ' 2024 - 03 - 11T15 : 30 : 00 '
      Status : " Bezahlt "
      E-Mail : ' james . anderson@example.com'
      Anzahl : 594
    - id : ' 4599 ' (auf Englisch)
      Datum : ' 2024 - 03 - 11T10 : 10 : 00 '
      Status : " gescheitert " .
      E-Mail : ' mia . weiß@example.com'
      Gesamt : 276
    - id : ' 4598 ' (auf Englisch)
      Dateiendung : 2024 - 03 - 11T08 : 50 : 00
      Status : " Rückerstattung "
      E-Mail an : william . brown@example.com'
      Anzahl : 315
    - id : ' 4597 ' (auf Englisch)
      Datum : ' 2024 - 03 - 10T19 : 45 : 00 '
      Status : " Bezahlt "
      E-Mail : ' emma . davis@example.com'
      Anzahl : 529
    - id : ' 4596 ' (auf Englisch)
      Datum : ' 2024 - 03 - 10T15 : 55 : 00 '
      Status : " bezahlt "
      E-Mail : ' ethan . harris@example.com'
      Anzahl : 639
    - id : ' 4595 ' (auf Englisch)
      Datum : ' 2024 - 03 - 10T15 : 55 : 00 '
      Status : " bezahlt "
      E-Mail : ' ethan . harris@example.com'
      Anzahl : 639
    - id : ' 4594 ' (auf Englisch)
      Datum : ' 2024 - 03 - 10T15 : 55 : 00 '
      Status : " bezahlt "
      E-Mail : ' ethan . harris@example.com'
      Anzahl : 639
  Klasse : ' flex - 1 max-h - [ 312px ] ' (auf Englisch)
---
::

## Beispiele

### Mit Zeilenaktionen

Sie können eine neue Spalte hinzufügen , die eine[DropdownMenu](/docs/components/dropdown-menu)Komponente innerhalb der`cell`zum Rendern von Zeilenaktionen rendert .

::component-example
---
Schöner : wahr
Einsturz : wahr
Name : ' Table-Row - Actions-Beispiel '
Highlights :
  @@@@115
  @@@153@143
Klasse : ' ! p - 0 '
---
::

### Mit erweiterbaren Zeilen

Sie können eine neue Spalte hinzufügen , die eine[Button](/docs/components/button)Komponente innerhalb der`cell`umschaltet , um den erweiterbaren Zustand einer Zeile mit der TanStack-Tabelle[Expanding APIs](https://tanstack.com/table/v8/docs/api/features/expanding)umzuschalten .

::caution
Sie müssen den`#expanded`- Slot definieren , um den erweiterten Inhalt zu rendern , der die Zeile als Parameter erhält .
::

::component-example
---
Schöner : wahr
Einsturz : wahr
Name : ' table-row - expandable-example ' (table-row - expandable-beispiel)
Highlights :
  @165@55
  @@166@72
Klasse : ' ! p - 0 '
---
::

::tip
Sie können den erweiterbaren Status der Zeilen mit `expanded` prop steuern (kann mit `v-model` gebunden werden).
::

::note
Sie können diese Aktion auch der [`DropdownMenu`](/docs/components/dropdown-menu) Komponente innerhalb der `actions` Spalte hinzufügen.
::

### Mit gruppierten Zeilen

Sie können Zeilen basierend auf einem bestimmten Spaltenwert gruppieren und Unterzeilen über eine Schaltfläche ein-und ausblenden, die der Zelle mithilfe der TanStack-Tabelle [Gruppierungs-APIs](https://tanstack.com/table/v8/docs/api/features/grouping) hinzugefügt wird.

#### Wichtige Teile

* Add `grouping` prop mit einem Array von Spalten-IDs, nach denen Sie gruppieren möchten.
* Add`grouping-options` prop. Es muss `getGroupedRowModel` enthalten, Sie können es von `@tanstack/vue-table` importieren oder Ihre eigenen implementieren.
* Expand rows via `row.toggleExpanded()` method on any cell of the row. Keep in mind, it also toggles `#expanded` slot.*  erweitert Zeilen über die Methode `row.toggleExpanded()`.
* Verwenden Sie `aggregateFn` auf Spaltendefinition, um zu definieren, wie die Zeilen aggregiert werden sollen.
* `agregatedCell` Renderer auf Spaltendefinition funktioniert nur, wenn es keinen `cell` Renderer gibt.

::component-example
---
Schöner: wahr
Einsturz: wahr
name: 'table-grouped-rows-example'(table-gruppierte-rows-Beispiel)
Highlights:
  @@@@155 @ 157
  @@@@166 @ 166
Klasse: '! p-0'
---
::

### Mit Zeilen-Pinning: badge{label="4.6+" class="align-text-top"}

Sie können eine Spalte hinzufügen, die eine [Button](/docs/components/button) Komponente innerhalb der `cell` umschaltet, um den Pinning-Status einer Zeile mit der TanStack-Tabelle umzuschalten [Row Pinning APIs](https://tanstack.com/table/v8/docs/api/features/row-pinning).

::component-example
---
Schöner: wahr
Einsturz: wahr
Name: 'table-row-pinning-example'(Tabellenzeilen-Beispiel)
Übertreibungen: wahr
Highlight:
  @@208@91
  @@@@@107
  @@@@160
  @@@@@165
  @@@@@168
Klasse: '! p-0'
---
::

::tip
Sie können den Pinning-Zustand der Zeilen mit `row-pinning` prop steuern (kann mit `v-model` gebunden werden).
::

### Mit Zeilenauswahl

Sie können eine neue Spalte hinzufügen, die eine [Checkbox](/docs/components/checkbox) Komponente innerhalb der `header` und `cell` zur Auswahl von Zeilen mit der TanStack-Tabelle [Row Selection APIs@PH23@@@PH24).

::component-example
---
Schöner: wahr
Einsturz: wahr
Name: 'table-row-selection-example'(table-row-selection-beispiel)
Highlights:
  @@@@226@55
  @@@@@227@27
Klasse: '! p-0'
---
::

::tip
Sie können den Selektionsstatus der Zeilen über `row-selection` prop steuern (kann mit `v-model` gebunden werden).
::

### With row select event (Mit Reihenauswahlveranstaltung)

Sie können einen `@select`-Listener hinzufügen, um Zeilen mit oder ohne Checkbox-Spalte anklickbar zu machen.

::note
Die handler-Funktion empfängt die Instanz `Event` und `TableRow` als erstes bzw. zweites Argument.
::

::component-example
---
Schöner: wahr
Einsturz: wahr
Name: 'table-row-select-event-example'(table-row-select-event-beispiel)
Highlights:
  @@@@@124
  @@135@135
Klasse: '! p-0'
---
::

::tip
Sie können damit zu einer Seite navigieren, ein Modal öffnen oder sogar die Zeile manuell auswählen.
::

### Mit Zeilenkontextmenüereignis

Sie können einen `@contextmenu` listener hinzufügen, um Zeilen rechtsklickbar zu machen, und die Tabelle in eine [ContextMenu](/docs/components/context-menu) Komponente einwickeln, um Zeilenaktionen anzuzeigen.

::note
Die handler-Funktion empfängt die Instanz `Event` und `TableRow` als erstes bzw. zweites Argument.
::

::component-example
---
Schöner: wahr
Einsturz: wahr
Name: 'Table-Row-Context-Menu-Event-Beispiel'
Highlights:
  @@@@134
  @@@175@175
Klasse: '! p-0'
---
::

### Mit Zeilenhover-Event

Sie können einen `@hover`-Listener hinzufügen, um Zeilen schwebefähig zu machen, und eine [Popover](/docs/components/popover) oder eine [Tooltip](/docs/components/tooltip) Komponente verwenden, um beispielsweise Zeilendetails anzuzeigen.

::note
Die handler-Funktion empfängt die Instanz `Event` und `TableRow` als erstes bzw. zweites Argument.
::

::component-example
---
Schöner: wahr
Einsturz: wahr
Name: 'Table-Row-Hover-Event-Beispiel'
Highlights:
  @@@258@129
  @@@@259@152
Klasse: '! p-0'
---
::

::note
Dieses Beispiel ähnelt dem Popover [mit folgendem Cursor-Beispiel ](/docs/components/popover#with-following-cursor)`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced) verhindert, dass sich das Popover zu schnell öffnet und schließt, wenn der Cursor von einer Zeile zur anderen bewegt wird.
::

### Mit Spaltenfuß

Sie können der Spaltendefinition eine `footer`-Eigenschaft hinzufügen, um eine Fußzeile für die Spalte zu rendern.

::component-example
---
Schöner: wahr
Einsturz: wahr
Name: 'table-column-footer-example'(Tabellen-Spalte-Fußzeilen-Beispiel)
Highlight:
  @@@@@100
  @@@@272@112
Klasse: '! p-0'
---
::

### Mit Spaltenspanne

Sie können die Eigenschaften `colspan` und `rowspan` in der Spalte `meta` verwenden, um Zellen zusammenzuführen. Diese Eigenschaften akzeptieren einen statischen Wert oder eine Funktion, die die Zelle empfängt und den Wert span zurückgibt.

::note
Bei der Verwendung von `rowspan` müssen Zellen, die von der Spanne einer vorherigen Zeile "absorbiert" werden, visuell ausgeblendet werden. Verwenden Sie die Meta `class` mit einer Funktion, die `'hidden'` für diese Zellen zurückgibt.
::

::component-example
---
Schöner: wahr
Einsturz: wahr
name: 'table-column-span-example'(table-Spalte-span-Beispiel)
Klasse: '! p-0'
---
::

### Mit Säulensortierung

Sie können eine Spalte `header` aktualisieren, um eine [Button]() Komponente innerhalb der `header` zu rendern, um den Sortierzustand mit der TanStack-Tabelle [SortingAPIs](PH2890 @ umzuschalten.

Dies setzt `aria-sort` auf die `<th>`, so dass Bildschirmleser den aktuellen Sortierstatus der Spalte lesen können:`none`,`ascending` oder `descending`.

::component-example
---
Schöner: wahr
Einsturz: wahr
name: 'table-column-sorting-example'(table-Spalte-sortieren-Beispiel)
Highlight:
  @@@@@@@90
  @@299@106
Klasse: '! p-0'
---
::

::tip
Sie können den Sortierzustand der Spalten mit `sorting` prop steuern (kann mit `v-model` gebunden werden).
::

Sie können auch eine wiederverwendbare Komponente erstellen, um jede Spaltenüberschrift sortierbar zu machen.

::component-example
---
Schöner: wahr
Einsturz: wahr
Name: 'table-column-sorting-wiederverwendbares Beispiel'
Highlights:
  @@@@@115
  @@@@303@166
Klasse: '! p-0'
---
::

::note
In diesem Beispiel verwenden wir eine Funktion, um die Spaltenüberschrift zu definieren, aber Sie können auch eine tatsächliche Komponente erstellen.
::

### Mit Spalten-Pinning

Sie können eine Spalte `header` aktualisieren, um eine [Button]() Komponente innerhalb der `header` zu rendern, um den Pinning-Zustand mit der TanStack-Tabelle [Column Pinning APIs]() umschalten zu können.

::note
Wenn Sie Spalten-Pinning verwenden, sollten Sie explizite `size`-Werte für Ihre Spalten definieren, um eine korrekte Handhabung der Spaltenbreite sicherzustellen, insbesondere bei mehreren angehefteten Spalten.
::

::component-example
---
Schöner: wahr
Einsturz: wahr
Übertreibungen: wahr
name: 'table-column-pinning-example'(table-column-pinning-beispiel)
Highlights:
  @@@@@108
  @@@@12617
Klasse: '! p-0 Überlauf-Clip'
---
::

::tip
Sie können den Pinning-Zustand der Spalten mit `column-pinning` prop steuern (kann mit `v-model` gebunden werden).
::

### Mit Spaltensichtbarkeit

Sie können eine Komponente [DropdownMenu](/docs/components/dropdown-menu) verwenden, um die Sichtbarkeit der Spalten mithilfe der TanStack-Tabelle [Spaltensichtbarkeits-APIs](https://tanstack.com/table/v8/docs/api/features/column-visibility) umzuschalten.

::component-example
---
Schöner: wahr
Einsturz: wahr
Name: 'table-column-visibility-example'(table-Spalte-Sichtbarkeits-Beispiel)
Highlights:
  @@@129@129
  @@330@146
Klasse: '! p-0'
---
::

::tip
Sie können die `column-visibility` prop verwenden, um den Sichtbarkeitsstatus der Spalten zu steuern (kann mit `v-model` gebunden werden).
::

### Mit Spaltenfiltern

Sie können eine Komponente [Input](/docs/components/input) verwenden, um die Zeilen mithilfe der TanStack-Tabelle [Spaltenfilter-APIs](https://tanstack.com/table/v8/docs/api/features/column-filtering) pro Spalte zu filtern.

::component-example
---
Schöner: wahr
Einsturz: wahr
name: 'table-column-filters-example'(table-column-filters-Beispiel)
Highlight:
  @@@342@123
  @@@@@128
Klasse: '! p-0'
---
::

::tip
Sie können die `column-filters` prop verwenden, um den Filterstatus der Spalten zu steuern (kann mit `v-model` gebunden werden).
::

### Mit globalem Filter

Sie können eine Komponente [Input](/docs/components/input) verwenden, um die Zeilen mit der TanStack-Tabelle [Global Filtering APIs](https://tanstack.com/table/v8/docs/api/features/global-filtering) zu filtern.

::component-example
---
Schöner: wahr
Einsturz: wahr
name: 'table-global-filter-example'(table-global-filter-beispiel)
Klasse: '! p-0'
Highlights:
  @@@555@116
---
::

::tip
Sie können den globalen Filterstatus mit `global-filter` prop steuern (kann mit `v-model` gebunden werden).
::

### Mit Paginierung

Sie können eine [Pagination](/docs/components/pagination) Komponente verwenden, um den Paginierungszustand mit der [Pagination APIs](https://tanstack.com/table/v8/docs/api/features/pagination) zu steuern.

Es gibt verschiedene Paginierungsansätze, wie in [Paginierungsleitfaden ](https://tanstack.com/table/v8/docs/guide/pagination#pagination-guide). In diesem Beispiel verwenden wir die clientseitige Paginierung, daher müssen wir die Funktion `getPaginationRowModel()`{lang="ts-type"} manuell übergeben.

::component-example
---
Schöner: wahr
Einsturz: wahr
name: 'table-pagination-beispiel'
Klasse: '! p-0'
Highlight:
  @@@373@203
  @@@374@2010
---
::

::tip
Sie können den Paginierungsstatus mit `pagination` prop steuern (kann mit `v-model` gebunden werden).
::

### Mit abgeholten Daten

Sie können Daten aus einer API abrufen und in der Tabelle verwenden.

::component-example
---
Schöner: wahr
Einsturz: wahr
Name: 'Table-Fetch-Beispiel'
Highlights:
  @@@378@15
  @@@379@26 von
Klasse: '! p-0'
---
::

::note
In diesem Beispiel wird `useLazyFetch` mit `server: false` verwendet, um Daten auf dem Client abzurufen, ohne das anfängliche Rendern zu blockieren. Der Ladezustand überprüft sowohl `pending` als auch `idle` status, um eine Ladeanzeige vor und während des Abrufs anzuzeigen.
::

### Mit unendlichem Scroll

Wenn Sie die serverseitige Paginierung verwenden, können Sie das [`useInfiniteScroll`]() composable verwenden, um mehr Daten zu laden, während der Benutzer scrollt.

::component-example
---
Schöner: wahr
Einsturz: wahr
Highlights:
  @@@390@72
  @@@391@38
Übertreibungen: wahr
Name: 'table-infinite-scroll-example'(Tabellen-unendlich-scroll-Beispiel)
Klasse: '! p-0'
---
::

::note
In diesem Beispiel wird `useLazyFetch` mit `server: false` verwendet, um Daten auf dem Client abzurufen, ohne das anfängliche Rendern zu blockieren. Der Ladezustand überprüft sowohl `pending` als auch `idle` status, um eine Ladeanzeige vor und während des Abrufs anzuzeigen.
::

### Mit Drag and Drop

Sie können das Kompositionsmittel [`useSortable`]() verwenden, um die Drag-and-Drop-Funktionalität auf dem Tisch zu aktivieren. Diese Integration wickelt [Sortable.js](https://sortablejs.github.io/Sortable/) Für ein reibungsloses Drag & Drop Erlebnis.

::note
Da die Tabellenref das tbody-Element nicht verfügbar macht, fügen Sie ihm über `:ui` prop eine eindeutige Klasse hinzu, um es mit `useSortable`(z. B.`:ui="{ tbody: 'my-table-tbody' }"`) zu zielen.
::

::component-example
---
Schöner: wahr
Einsturz: wahr
Highlight:
  @@@1481
  @@@@@83
Name: 'table-drag-and-drop-Beispiel'
Klasse: '! p-0'
---
::

### Mit Virtualisierung: badge{label="4.1+" class="align-text-top"}

Verwenden Sie `virtualize` prop, um die Virtualisierung für große Datensätze als Boolean oder als Objekt mit Optionen wie `{ estimateSize: 65, overscan: 12 }` zu aktivieren. Sie können auch andere [TanStack Virtual options](https://tanstack.com/virtual/latest/docs/api/virtualizer#optional-options) übergeben, um das Virtualisierungsverhalten anzupassen. um die Kopf-oder Fußzeile sichtbar zu halten, während Sie durch große Datensätze scrollen.

::warning
Zeilenanheften wird nicht unterstützt, wenn die Virtualisierung aktiviert ist.
::

::component-example
---
Schöner: wahr
Einsturz: wahr
Übertreibungen: wahr
Name: 'table-virtualize-example'(table-virtualisieren-Beispiel)
Klasse: '! p-0'
---
::

::note
Eine Höhenbeschränkung ist in der Tabelle erforderlich, damit die Virtualisierung ordnungsgemäß funktioniert (z.B.`class="h-[400px]"`).
::

### Mit externem Scroll-Element: badge{label="4.10+" class="align-text-top"}

Übergeben Sie eine `getScrollElement`-Funktion in der `virtualize` prop, um gegen einen Vorfahren-Scroll-Container anstelle des tabelleneigenen Root zu virtualisieren. Setzen Sie `scrollMargin` auf den Offset der Tabelle vom Start des Scroll-Elements (z. B. die Höhe des Inhalts darüber), so dass ein Header und der Tabellenkörper eine einzige Scrollleiste teilen.

::component-example
---
Schöner: wahr
Einsturz: wahr
Übertreibungen: wahr
name: 'table-external-scroll-example'(table-external-scroll-Beispiel)
Klasse: '! p-0'
---
::

::note
In diesem Modus ist der Tabellenstamm `overflow``visible` und der externe Container besitzt das Scrollen auf beiden Achsen, also geben Sie `overflow-auto`(nicht nur `overflow-y-auto`), um breite Tabellen horizontal scrollbar zu halten.
::

### Mit Baumdaten

Sie können `get-sub-rows` prop verwenden, um hierarchische (Baum-) Daten in der Tabelle anzuzeigen.
Wenn Ihre Datenobjekte beispielsweise ein `children`-Array haben, legen Sie `:get-sub-rows="row => row.children"` fest, um erweiterbare Zeilen zu aktivieren.

::component-example
---
Schöner: wahr
Einsturz: wahr
Highlight:
  @@@441@175
Name: 'table-tree-data-example'(Table-Baum-Daten-Beispiel)
Klasse: '! p-0'
---
::

### Mit Slots

Sie können Slots verwenden, um die Kopfzeile und die Datenzellen der Tabelle anzupassen.

Verwenden Sie den `#<column>-header` slot, um die Kopfzeile einer Spalte anzupassen. Sie haben Zugriff auf die Eigenschaften `column`,`header` und `table` im Slot-Bereich.

Sie haben Zugriff auf die Eigenschaften `cell`,`column`,`getValue`,`renderValue`,`row` und `table` im Slot-Bereich.

::component-example
---
Schöner: wahr
Einsturz: wahr
Name: 'Tisch-Slots-Beispiel'
Klasse: '! p-0'
---
::

@@545@@gmail.de

@@@555@@@gmail.de

Komponenten-Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<table>` HTML-Attribute.
::

@@ph457@gmail.de

Die Komponenten-Slots

@@@@584@Aufdecken

Sie können auf die typisierte Komponenteninstanz zugreifen, indem Sie [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref).

```vue
<script setup lang="ts">
const table = useTemplateRef('table')
</script>

<template>
  <UTable ref="table" />
</template>
```

Dies gibt Ihnen Zugang zu den folgenden:

| Vorname| Typ|
| ---- | ---- |
| {lang="ts-type"}| @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@|
| {lang="ts-type"}|{lang="ts-type"}{lang="ts-type"}](PH482224@@@@PH48244@@@@PH482444@@@@PH48242@|

## Thema

Das Komponenten-Theme

@@ph486@@changelog @@@changelog

Das Component-Changelog
