---
title: SelectMenu auswählen
description: Ein erweitertes durchsuchbares Select-Element.
category: form
keywords:
  - combobox
  - multi select
  - filterable select
links:
  - label: Die Combobox
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/combobox
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/SelectMenu.vue
---

@@@ph000@Verwendung

Verwenden Sie die Direktive `v-model`, um den Wert des SelectMenu zu steuern, oder die Direktive `default-value` prop, um den Anfangswert festzulegen, wenn Sie den Zustand nicht steuern müssen.

::component-code
---
Schöner: wahr
Hide:
  @@003@Klasse
Ignoriert:
  - modellWert
  @@@ph005@gmail.de
  @@006@Klasse
Außen:
  @@ph007@gmail.de
  - modellWert
Props:
  Beispiel: "Backlog"
  Items:
    @@ph009@@backlog
    @@@@@1010@1010@1010@1010@1010@100@100@100@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@100@@@10000@@@100000@@@@@@@100000000@@@@@@@@100000@@@@@@@@@@@@10000000000@@@@@@@@@@@@@@@@@@@@@@@@10000000000000@@@@@@@@
    @@ph011@in Bearbeitung
    @@ph012@@gmail.de
  Bezeichnung: W-48
---
::

::tip
Verwenden Sie dies über eine [`Select`](/docs/components/select), um die Vorteile von Reka UI zu nutzen [`Combobox`](https://reka-ui.com/docs/components/combobox) Komponente, die Suchfunktionen und Mehrfachauswahl bietet.
::

::note
Diese Komponente ähnelt der [`InputMenu`](/docs/components/input-menu), verwendet jedoch eine Auswahl anstelle einer Eingabe mit der Suche im Menü.
::

@@@ph028@gmail.de

Verwenden Sie `items` prop als Array aus Strings, Zahlen oder Booleans:

::component-code
---
Schöner: wahr
Ignoriert:
  - modellWert
  @@ph031@gmail.de
  @@@@@@@@@@@class
Außen:
  @@ph033@gmail.de
  - modellWert
Props:
  Beispiel: "Backlog"
  Items:
    @@ph035@@backlog
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@####################################################################################################################################################################################################################
    @@ph037 @ in Bearbeitung
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#########################################################################################################################################################################
  Bezeichnung: W-48
---
::

Sie können auch ein Array von Objekten mit den folgenden Eigenschaften übergeben:

`label?: string``label?: string``label?: string``label?: string``label?: string`{lang="ts-type"}PH04040@@@@@@@@@@@@@PH0404040@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
[`type?: "label" | "separator" | "item"`{lang="ts-type"}]()
[PH0550@@@@@@@PH0554@@@@@@PH0544))
- [`avatar?: AvatarProps`{lang="ts-type"}]()
`chip?: ChipProps`{lang="ts-type"}))PH0668@@@@@PH0668@@@@@PH0668@@@@@@@PH0668@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

::component-code
---
Ignoriert:
  - modellValue.label
  @@ph083@gmail.de
  @@@@@@@@@@@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@classclass@class@classclass@classclass@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class
Außen:
  @@@@@@@@@@@ph085@gmail.de
  - modellWert
Externe Typen:
  - SelectMenuItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Modellwert:
    Markiert: "Todo"
  Items:
    - label:'Backlog'
    - label:'Todo'(auf Englisch)
    - label:'In Bearbeitung'
    - label:'Fertig'
  Bezeichnung: W-48
---
::

::caution
Im Gegensatz zur Komponente [`Select`](/docs/components/select) erwartet das SelectMenu standardmäßig, dass das gesamte Objekt an die `v-model`-Direktive oder die `default-value` prop übergeben wird.
::

Sie können auch ein Array von Arrays an `items` prop übergeben, um getrennte Gruppen von Elementen anzuzeigen.

::component-code
---
Schöner: wahr
Ignoriert:
  - modellWert
  - Artikel
  @@102@Klasse
Außen:
  @@ph103@gmail.de
  - modellWert
Props:
  Modellbezeichnung: "Apple"
  Items:
    @@ph105 @@-Apple hat es geschafft.
      @@106@Banana
      @@107@Blaubeerenbeere
      @@@@@@@108@gmail.de
      @@ph109@pineapple
    - -Aubergine
      - Brokkoli
      @@@@@@@112@@Carrot
      @@@@@@@113@@@Courgette
      @@@@@@@@114@leek
  Bezeichnung: W-48
---
::

### Wertschlüssel

Sie können eine einzelne Eigenschaft des Objekts anstelle des gesamten Objekts binden, indem Sie die `value-key` prop. Defaults auf `undefined` verwenden.

::component-code
---
Einsturz: wahr
Ignoriert:
  - modellWert
  - valueKey
  @@ph120@@gmail.de
  @@121@Klasse
Außen:
  - Artikel
  - modellWert
Externe Personen:
  - SelectMenuItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Modellwert: 'Todo'
  Schlüsselwort:'id'
  Items:
    - label:'Backlog'(auf Englisch)
      Bezeichnung: Backlog
    - label:'Todo'(auf Englisch)
      Suche nach: 'Todo'
    - label:'In Bearbeitung'
      id: 'in_progress'(auf Englisch)
    - label:'Fertig'
      ID: „ erledigt "
  Bezeichnung: W-48
---
::

::tip
Verwenden Sie `by` prop, um Objekte durch ein Feld anstelle eines Verweises zu vergleichen, wenn `model-value` ein Objekt ist.
::

@@131@131@131@131@131@131@131@131@131@131@131@131@131@131@131@131@131@13@131@131@131@131@131@131@131@131@131@131@131@131@131@131@131@@131@131@@@13131@@131@@@13131@@@@@@1313131@@@@@@@@@1313131@@@@@@@@@@13131@@@@@@@@@@@@@@@@13131313131@@@@@@@@@@@@@@@

Verwenden Sie `multiple` prop, um mehrere Auswahlen zu ermöglichen, die ausgewählten Elemente werden durch ein Komma im Trigger getrennt.

::component-code
---
Schöner: wahr
Ignoriert:
  - modellWert
  @@ph134@gmail.de
  @@135@mehrfache135@mehrfache135@mehrfache135
  @@136@Klasse
Außen:
  - Artikel
  - modellWert
Props:
  Modellwert:
    @@139@Backlog
    @@140@@Einsteiger
  Vielfach: wahr
  Items:
    @@141@Backlog
    @@@@@@@142@14@142@142@142@142@142@142@142@142@142@142@142@142@142@142@142@142@142@142@142@142@142@142@142@142@142@142@142@142@142@@142@@142@@1442@@@@@@144442@@@@@@@@@@@@@14444442@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@14444444444442@@@@@@@@@@@@@@@
    @@143 @ im Verlauf
    @@@@@@144@144@144@144@144@144@144@144@144@144@1444@1444@1444@1444@144@1444@1444@1444@1444@1444@1444@144444@@14444444@@14444444@@@14444444444@@@144444444444444@@@@144444444444444444@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Done
  Klasse: W-48
---
::

::caution
Stellen Sie sicher, dass Sie ein Array an die `default-value` prop oder die `v-model`-Direktive übergeben.
::

### Platzhalter

Verwenden Sie `placeholder` prop, um einen Platzhaltertext zu setzen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph149@gmail.de
  @150@Klasse
Außen:
  - Artikel
Props:
  Platzhalter: 'Status auswählen'
  Items:
    @@ph152@backlog @ zurück
    @@153@153@153@153@153@153@153@153@153@153@153@153@153@153@153@153@153@153@153@153@153@153@153@153@153@153@153@153@153@153@153@153@153@153@153@@153@@153@@@153@@@153@@@@1553@@@@@@@@@@@@15553@@@@@@@@@@@@@@@@@@@@@@@@@155533333333@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@154@@In Bearbeitung
    @@@@@@155@155@155@155@155@155@155@155@155@155@155@155@1555@155@155@155@155@155@155@155@155@155@155@155@155@1555@1555@1555@@15000000000000000
  Klasse: W-48
---
::

### Sucheingabe

Verwenden Sie `search-input` prop, um die Sucheingabe anzupassen oder auszublenden (mit `false`-Wert).

Sie können jede Eigenschaft aus der Komponente [Input](/docs/components/input) übergeben, um sie anzupassen.

::component-code
---
Schöner: wahr
Ignoriert:
  - modelValue.label (auf Englisch)
  - modelValue.icon (auf Englisch)
  - Artikel
  @@166@166@166@166@166@166@166@1666@166@166@166@166@166@166@166@16@166@16@16@16@16@16@16@16@166@@@166@@@166@16@16@16@16@@@@1666@@@@@@@@1666@@@@@@@@@@@@@@@@@@@@166666@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Klasse
Außen:
  - Artikel
  - modellWert
Externe Personen:
  - SelectMenuItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Modellwert:
    Stichwort: „ Backlog "
    Icon: 'i-lucide-circle-help'(I-lucide-Kreis-Hilfe)
  SearchInput:
    Platzhalter: 'Filter...'
    Icon: 'i-lucide-search'(auf Englisch)
  Items:
    - label: Backlog (englisch)
      Icon: 'i-lucide-circle-help'(I-lucide-Kreis-Hilfe)
    - label: Todo
      Symbol: 'i-lucide-circle-plus'(I-lucide-Kreis-Plus)
    - label: In Bearbeitung
      Icon: 'i-lucide-circle-arrow-up'(I-lucide-Kreis-Pfeil-nach oben)
    - label: Erledigt
      Icon: 'i-lucide-circle-check'(I-lucide-Kreis-Check)
  Klasse: W-48
---
::

::tip
Sie können `search-input` prop auf `false` setzen, um die Sucheingabe auszublenden.
::

::note
Verwenden Sie `:search-input="{ autofocus: false }"`, um zu verhindern, dass die Sucheingabe beim Öffnen des Menüs fokussiert wird, z. B. um zu vermeiden, dass die virtuelle Tastatur auf Touch-Geräten geöffnet wird.
::

### Inhalt

Verwenden Sie `content` prop, um zu steuern, wie der SelectMenu-Inhalt gerendert wird, z. B.`align` oder `side`.

::component-code
---
Schöner: wahr
Ignoriert:
  @@181@181@181@181@181@181@181@181@181@181@181@@181@181@18@181@18@18@18@@181@@@181@@18@@@181@@181@@181@@181@@181@@181@@181@@181@@@@181000000@@@@@@1000000000
  - modellWert
  @@183@Klasse
Außen:
  @@ph184@gmail.de
  - modellWert
Items:
  content.align:
    @@@@@@186@@startup
    @@@@@@@@@@@@@@@@@@@@centre
    @@@@@@188@188@188@188@@188@188@188@188@188@188@188@188@188@188@18@1818@18@188@18@1818@18@1818@1818@1818@1818@181818@@181818@@181818
  content.side:
    @189@189@189@189@189@189@189@189@189@189@189@189@189@189@@189@189@189@189@189@189@189@189@189@189@@189@189@189@@189@@@189189@@@189189189@@@@@@@@@18918999999999999@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @190@left.de
    @@191@191@191@191@191@191@19191@19191@19191@1919191@1919191@191919@191919191@@19191919@@19191919@@191919191919@@191919191919@@1919191919@@@191919191919191000000@@@@@@191919191919100000000000000000000000000000000000000000000000000000000000000000000000
    @@192@bottom
Props:
  Beispiel: "Backlog"
  Inhalte:
    Ausrichtung: Center
    Seite: Bottom
    Seitenversatz: 8
  Items:
    @@193@Backlog
    @@@@@@@@194@194@194@194@194@194@@194@194@194@@194@@194@@194@@194@@194@@194@@194@@194@@194@@194@@194@@194@194@@1994@@19191919191919199999999999999999999900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    @@195@195@195@195.de
    @@@@@@196@196@196@196@196@196@196@196@196@196@196@@196@196@196@196@196@196@196@196@@196@@196@@196@@196@196@196@@196@@1996@@196@@@1991919191919191999199999999999999999999999000000000000000000000000000000000000000000000000000000000000000000000000000000
  Klasse: W-48
---
::

@@@@@@@197@Arrow

Verwenden Sie `arrow` prop, um einen Pfeil im SelectMenu anzuzeigen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph199@@gmail.de
  - modellWert
  @@201@Klasse
  @@ph202@arrow (englisch)
Außen:
  @@ph203@gmail.de
  - modellWert
Props:
  Beispiel: "Backlog"
  Pfeil: wahr
  Items:
    @@ph205@@backlog
    @@@@@@@@206@@106
    @@ph207 @ in Bearbeitung
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@####################################################################################################################################################################################################
  Klasse: W-48
---
::

@@ph209@@gmail.de

Verwenden Sie die `color` prop, um die Ringfarbe zu ändern, wenn das SelectMenu fokussiert ist.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph211@gmail.de
  - modellWert
  @@ph213@class
Außen:
  @@ph214@gmail.de
  - modellWert
Props:
  Beispiel: "Backlog"
  Farbe: neutral
  Highlight: Wahr
  Items:
    @@ph216@backlog @@ zurücksetzen
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@####################################################################################################################################################################################################################
    @@ph218@in Bearbeitung
    @@ph219@@Done
  Klasse: W-48
---
::

::note
`highlight` prop wird hier verwendet, um den Fokuszustand anzuzeigen.
::

@@@@@@@@@@221@@@@Variant

Verwenden Sie `variant` prop, um die Variante des SelectMenu zu ändern.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph223@gmail.de
  - modellWert
  @@225@Klasse
Außen:
  @@ph226@gmail.de
  - modellWert
Props:
  Beispiel: "Backlog"
  Farbe: neutral
  Variante: subtil
  Markiert: false
  Items:
    @@@228@Backlog
    @@@@@@@@@229@@@Todo
    @@ph230@in Bearbeitung
    @@ph231@gmail.de
  Klasse: W-48
---
::

@@232@132

Verwenden Sie `size` prop, um die Größe des SelectMenu zu ändern.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph234@gmail.de
  - modellWert
  @@236@Klasse
Außen:
  @@ph237@gmail.de
  - modellWert
Props:
  Beispiel: "Backlog"
  Größe: XL
  Items:
    @@ph239@@backlog
    @@ph240@@gmail.de
    - In Bearbeitung
    @@@@@@242@Done
  Klasse: W-48
---
::

@@ph243@@@Icon-Seite

Verwenden Sie die `icon` prop, um ein [Icon](/docs/components/icon) innerhalb des SelectMenu anzuzeigen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph249@gmail.de
  - modellWert
  @@ph251@gmail.de
Außen:
  @@ph252@gmail.de
  - modellWert
Props:
  Beispiel: "Backlog"
  Icon: 'i-lucide-search'(auf Englisch)
  Größe: md
  Items:
    @@ph254@backlog @@ zurück
    @@@@@@@@@555@@555@@@555@@@555@@555@@@555@@@55@@55@@55@@@55@@55@@@@@55@@@55@@@55@@@55@@55@@@@555@@@555@@@@5555@@@@@5555@@@@5555@@@@@@55555@@@@@@@@@@@@@555000000
    @@ph256@@in Bearbeitung
    @@ph257@gmail.de
  Klasse: W-48
---
::

@@ph258@@trailing-symbol

Verwenden Sie die `trailing-icon` prop, um die nachlaufende [Icon](/docs/components/icon).

::component-code
---
Schöner: wahr
Ignoriert:
  - Artikel
  - modellWert
  @@@@@@@class267@@class267@class@class@class267@class@class267@class@class@class@class@class@class@class@class267@class@class@class@class@class@class@class@class@class@class@class@class267@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@classclass@class@class@classclassclass@class@class@class@class@classclassclass@class@classclassclassclassclass@classclassclassclass@classclassclassclassclassclass@classclassclassclass@classclassclassclassclass
Außen:
  @@@ph268@@gmail.de
  - modellWert
Props:
  Beispiel: "Backlog"
  trailingIcon: 'i-lucide-arrow-down'(deutsch: 'i-lucide-arrow-down')
  Größe: MD
  Items:
    @@ph270@Backlog (englisch)
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@##################################################################################################################################################################################################################
    - In Bearbeitung
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#########################################################################################################################################################################################################
  Klasse: W-48
---
::

::framework-only
#nuxt sein
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.chevronDown` key anpassen.
:::

#Ansehen
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.chevronDown` key anpassen.
:::
::

@@ph278@@selected Icon (englisch)

Verwenden Sie `selected-icon` prop, um das Symbol anzupassen, wenn ein Element ausgewählt wird.

::component-code
---
Schöner: wahr
Ignoriert:
  @@@ph281@gmail.de
  - modellWert
  @@@@@@@class283@class283@class283@class@class@class283@class@class283@class@class283@class@class@class@class@class283@class@class@class@class283@class@class@class@class@class@class@class@class@classclass@class@class@classclass@class@classclass@classclass@classclass@classclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassc@classclassclassclassclassclassclassclassclassc@c@classclassclassc@classclassclassclassclassclassclass
Außen:
  @@ph284@gmail.de
  - modellWert
Props:
  Beispiel: "Backlog"
  selectedIcon: 'i-lucide-flame'(I-Lucide-Flamme)
  Größe: MD
  Items:
    @@ph286@@backlog
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#############################################################################################################################################################################################################
    @@@@@@@@288@@@In Bearbeitung
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@##############################################################################################################################################################################################
  Klasse: W-48
---
::

::framework-only
#nuxt sein
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.check` key anpassen.
:::

#Ansehen
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.check` key anpassen.
:::
::

@@ph294@@clear@@ph295 @

Verwenden Sie `clear` prop, um eine Schaltfläche zum Löschen anzuzeigen, wenn ein Wert ausgewählt ist.

::component-code
---
Schöner: wahr
Ignoriert:
  @@@ph297@gmail.de
  - modellWert
  @@ph299@@class
Außen:
  @@@ph300@gmail.de
  - modellWert
Items:
  Eindeutig:
    @@ph302@@true
    @@ph303 @ falsch
Props:
  Beispiel: "Backlog"
  eindeutig: true
  Items:
    @@304@Backlog
    @@305@@Diehl
    @@306@@Vorwärtsbewegung
    @@@@@@@307@@Done
  Klasse: W-48
---
::

### Clear Icon: badge{label="4.4+" class="align-text-top"}

Verwenden Sie die `clear-icon` prop, um die klare Schaltfläche [Icon](/docs/components/icon). Standardmäßig auf `i-lucide-x`.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph316@gmail.de
  - modellWert
  @@318@Klasse
Außen:
  @@ph319@gmail.de
  - modellWert
Items:
  Eindeutig:
    @@ph321@@true
    @@ph322@@unwahr
Props:
  Beispiel: "Backlog"
  eindeutig: true
  clearIcon: 'i-lucide-trash'(deutsch: 'i-lucide-trash')
  Items:
    @@ph323@Backlog @@ zurück
    @@@@@@@324@@@Todo
    @@ph325@in Bearbeitung
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#########################################################################################################################################################################################################
  Klasse: W-48
---
::

::framework-only
#nuxt sein
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.close` key anpassen.
:::

#Ansehen
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.close` key anpassen.
:::
::

@@@@@@@331@@@Avatar

Verwenden Sie die `avatar` prop, um ein [Avatar](/docs/components/avatar) innerhalb des SelectMenu anzuzeigen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@337@gmail.de
  - modellWert
  @@339@Klasse
  - avatar.loading (nicht verfügbar)
Außen:
  @@ph341@gmail.de
  - modellWert
Props:
  Modellwert: 'Nuxt'
  Avatare sind:
    src: 'https://github.com/nuxt.png'(auf Englisch)
    Aufladung: Lazy
  Items:
    @@343@@nutten
    - NuxtHub
    - NuxtLabs (@ NuxtLabs) Bearbeiten
    - Nuxt-Module
    - Nuxt Gemeinschaft
  Klasse: W-48
---
::

@@348@Aufladen

Verwenden Sie das `loading` prop, um ein Ladesymbol im SelectMenu anzuzeigen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@@ph350@gmail.de
  - modellWert
  @@352@Klasse
Außen:
  @@ph353@gmail.de
  - modellWert
Props:
  Beispiel: "Backlog"
  Aufladung: true
  Nachtrag: false
  Items:
    @@ph355@@@backlog
    @@356@@Einsteiger
    @@ph357@@in Bearbeitung
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@###################################################################################################################################################################################################
  Klasse: W-48
---
::

@@ph359@@Icon-Aufladung

Verwenden Sie `loading-icon` prop, um das Ladesymbol anzupassen. Standardmäßig ist `i-lucide-loader-circle`.

::component-code
---
Schöner: wahr
Ignoriert:
  -  Artikel
  - modellWert
  @@364@Klasse
Außen:
  @@ph365@gmail.de
  - modellWert
Props:
  Beispiel: "Backlog"
  Aufladung: true
  loadingIcon: 'i-lucide-loader'(englisch)
  Items:
    @@367@Backlog
    @@@@@@@@368@@Todo
    @@369@@Vorwärtskommen
    @@@@@@@370@@Done
  Klasse: W-48
---
::

::framework-only
#nuxt sein
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.loading` key anpassen.
:::

#Ansehen
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.loading` key anpassen.
:::
::

### disabled

Verwenden Sie `disabled` prop, um das Auswahlmenü zu deaktivieren.

::component-code
---
Schöner: wahr
Ignoriert:
  @@@@@@@ph377@@artikel
  @@@@@@@@ph378@Platzhalter
  @@379@class
Außen:
  @@ph380@gmail.de
Props:
  Behindert: Wahr
  Platzhalter: 'Status auswählen'
  Items:
    @@381@Backlog
    @@@@@@@@382@@@Todo
    @@@@@@@383@@In Bearbeitung
    @@@@@@@384@Done
  Klasse: W-48
---
::

@@385@@Beispiele

### Mit Artikel Typ

Sie können die `type`-Eigenschaft mit `separator` verwenden, um ein Trennzeichen zwischen Elementen anzuzeigen, oder `label`, um ein Etikett anzuzeigen.

::component-code
---
Einsturz: wahr
Ignoriert:
  - modellWert
  @@ph391@gmail.de
  @@@@@@@@392@class
Außen:
  @@ph393@gmail.de
  - modellWert
Externe Typen:
  - SelectMenuItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Modellbezeichnung: "Apple"
  Items:
    - -type: 'kennzeichnung'
        Labels: Früchte
      @@ph397@@apple.de
      @@@@@@@@@@@@banna398@banna398@banna398@banna398@banna398@banna398@banna398@banna398@banna398@banna398@banna398@banna398@banna398@banna398@banna398@banna398@banna398@banna398@banna398@banna398@banna@banna398@banna398@@banna398@banna398@@banna398@@banna398@@banna@banna398@@banna@banna398@@banna@@banna@banna@banna@banna398@
      @@399@Blaubeere
      @@ph400@@gmail.de
      @@ph401@@pineapple
    - -type: 'label'(auf Englisch)
        Kategorie: „ Gemüse "
      @@ph403@@aubergine
      - Broccoli
      @@ph405@@karrot
      @@@@@@@406@@@Courgette
      @@ph407@@@leek
  Klasse: W-48
---
::

::note
Wenn Sie `label` Elemente als Gruppenüberschriften verwenden, übergeben Sie ein Array von Arrays, damit ein Label zusammen mit seiner Gruppe bei der Suche herausgefiltert wird.
::

### Mit Icon in den Artikeln

Sie können die `icon`-Eigenschaft verwenden, um ein [Icon](/docs/components/icon) innerhalb der Elemente anzuzeigen.

::component-example
---
Einsturz: wahr
Name: 'select-menu-items-icon-example'(Auswahlmenü-Item-Icon-Beispiel)
---
::

::tip
Sie können auch den `#leading`-Slot verwenden, um das ausgewählte Symbol anzuzeigen.
::

### Mit Avatar in den Artikeln

Sie können die `avatar`-Eigenschaft verwenden, um ein [Avatar](/docs/components/avatar) innerhalb der Elemente anzuzeigen.

::component-example
---
Einsturz: wahr
name: 'select-menu-items-avatar-example'(Auswahlmenü-Elemente-Avatar-Beispiel)
---
::

::tip
Sie können auch den `#leading`-Slot verwenden, um den ausgewählten Avatar anzuzeigen.
::

### Mit Chip in den Artikeln

Sie können die `chip`-Eigenschaft verwenden, um ein [Chip](/docs/components/chip) innerhalb der Elemente anzuzeigen.

::component-example
---
Einsturz: wahr
Name: 'select-menu-items-chip-example'(select-menu-items-chip-beispiel)
---
::

::note
In diesem Beispiel wird der `#leading`-Steckplatz verwendet, um den ausgewählten Chip anzuzeigen.
::

### Control offener Zustand

Sie können den offenen Zustand mithilfe der Direktive `default-open` prop oder der Direktive `v-model:open` steuern.

::component-example
---
Name: 'select-menu-open-beispiel'.
---
::

::note
In diesem Beispiel können Sie das SelectMenu mithilfe von [`defineShortcuts`/docs/composables/define-shortcuts) umschalten, indem Sie: kbd{value="O"} drücken.
::

### Kontrollsuchbegriff

Verwenden Sie die `v-model:search-term`-Direktive, um den Suchbegriff zu steuern.

::component-example
---
Name: 'select-menu-search-term-example'(Auswahlmenü-Suchbegriff-Beispiel)
---
::

### Mit rotierendem Icon

Hier ist ein Beispiel mit einem rotierenden Symbol, das den geöffneten Zustand des SelectMenu anzeigt.

::component-example
---
Name: 'select-menu-icon-beispiel'.
---
::

### Mit erstellen Element

Verwenden Sie `create-item` prop, um Benutzern das Hinzufügen benutzerdefinierter Werte zu ermöglichen, die nicht in den vordefinierten Optionen enthalten sind.

::component-example
---
Einsturz: wahr
Name: 'select-menu-create-item-example'(Auswahlmenü-Element-Beispiel)
---
::

::note
Die Option create wird angezeigt, wenn standardmäßig keine Übereinstimmung gefunden wird. Setzen Sie sie auf `always`, um sie auch dann anzuzeigen, wenn ähnliche Werte existieren.
::

::tip{to="#emits"}
Verwenden Sie das `@create`-Ereignis, um die Erstellung des Elements zu bearbeiten. Sie erhalten das Ereignis und das Element als Argumente.
::

### Mit hergeholten Artikeln

Sie können Elemente aus einer API abrufen und im SelectMenu verwenden.

::component-example
---
Einsturz: wahr
Name: 'select-menu-fetch-example'(Auswahlmenü-Beispiel)
---
::

::note
In diesem Beispiel wird `useLazyFetch` mit `immediate: false` verwendet, um Daten nur beim Öffnen des Menüs abzurufen, wodurch unnötige API-Aufrufe beim Laden der Seite vermieden werden.
::

### Mit Ignorierfilter

Setzen Sie `ignore-filter` prop auf `true`, um die interne Suche zu deaktivieren und Ihre eigene Suchlogik zu verwenden.

::component-example
---
Einsturz: wahr
Name: 'select-menu-ignore-filter-example'(select-menu-ignore-filter-example)(Auswahlmenü-ignore-filter-Beispiel)
---
::

::note
In diesem Beispiel wird [`refDebounced`]() verwendet, um die API-Aufrufe zu entkräften.
::

### Mit Filterfeldern

Verwenden Sie `filter-fields` prop mit einem Array von Feldern, um nach. Defaults zu `[labelKey]` zu filtern.

::component-example
---
Einsturz: wahr
name: 'select-menu-filter-fields-example'(Auswahlmenü-Filter-Feld-Beispiel)
---
::

::note
In diesem Beispiel wird `useLazyFetch` mit `immediate: false` verwendet, um Daten nur beim Öffnen des Menüs abzurufen, wodurch unnötige API-Aufrufe beim Laden der Seite vermieden werden.
::

### Mit Virtualisierung: badge{label="4.1+" class="align-text-top"}

Verwenden Sie `virtualize` prop, um die Virtualisierung für große Listen als Boolean oder ein Objekt mit Optionen wie `{ estimateSize: 32, overscan: 12 }` zu aktivieren.

::warning{to="https://github.com/unovue/reka-ui/issues/1885" target="_blank"}
Wenn diese Option aktiviert ist, werden alle Gruppen aufgrund einer Einschränkung der Reka-Benutzeroberfläche zu einer einzigen Liste zusammengefasst.
::

::component-example
---
Schöner: wahr
Name: 'select-menu-virtualize-example'(Auswahlmenü-Beispiel).
---
::

### Mit unendlicher Schriftrolle: badge{label="4.4+" class="align-text-top"}

Sie können das [`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/) composable verwenden, um mehr Daten zu laden, während der Benutzer scrollt.

::component-example
---
Schöner: wahr
Einsturz: wahr
Highlights:
  @@@@474@41
  @@@575@51
Übertreibungen: wahr
Name: 'select-menu-infinite-scroll-example'(Auswahlmenü-unendlich-scroll-Beispiel)
---
::

::note
In diesem Beispiel wird `useLazyFetch` mit `immediate: false` verwendet, sodass die Daten nur beim Scrollen des Benutzers geladen werden.
::

### Mit voller Inhaltsbreite

Sie können den Inhalt auf die volle Breite seiner Elemente erweitern, indem Sie die Klasse `min-w-fit` auf dem @@-Steckplatz hinzufügen.

::component-example
---
Name: 'select-menu-content-width-example'(Auswahlmenü-Inhalt-Widget-Beispiel)
Einsturz: wahr
---
::

::tip
Sie können die Inhaltsbreite auch global in Ihrem `app.config.ts` ändern:

```
export default defineAppConfig({
  ui: {
    selectMenu: {
      slots: {
        content: 'min-w-fit'
      }
    }
  }
})
```
::

### Als ein Land Picker

Sie können das SelectMenu als Länderauswahl mit Lazy Loading verwenden. Länder werden nur beim ersten Öffnen des Menüs abgerufen.

::component-example
---
Einsturz: wahr
name: 'select-menu-countries-example'(Beispiel für ein Land)
---
::

::note
In diesem Beispiel wird `useLazyFetch` mit `immediate: false` verwendet, um Länder nur beim ersten Öffnen des Menüs zu laden.
::

@@@@p496@@bmwbb

@@@@@@@@ph497@@Props

Komponenten Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<button>` HTML-Attribute.
::

@@ph499@@gmail.de

Die Komponenten-Slots

@@ph500@emits

Komponenten emittieren

### Aufdecken

Beim Zugriff auf die Komponente über eine Template-Referenz können Sie Folgendes verwenden:

| Vorname| Typen|
| ---- | ---- |
| {lang="ts-type"}|{lang="ts-type"}|
| {lang="ts-type"}|{lang="ts-type"}|

@@ph510@@gmail.de

Das Komponenten-Theme

@@ph511@@changelog @@@ changelog @@@ changelog

Das Component-Changelog
