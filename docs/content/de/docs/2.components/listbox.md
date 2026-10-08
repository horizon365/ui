---
description: Eine auswählbare Liste von Elementen mit Suche, Virtualisierung und Rich Item Rendering.
category: form
keywords:
  - option list
  - picker
  - selection
links:
  - label: Listbox
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/listbox
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Listbox.vue
---

@@@ph000@Verwendung

Verwenden Sie die Direktive `v-model`, um den Wert der Listbox zu steuern, oder die Direktive `default-value` prop, um den Anfangswert festzulegen, wenn Sie den Zustand nicht steuern müssen.

::component-code
---
Einsturz: wahr
Hide:
  @@003@Klasse
Ignoriert:
  - modelValue.label
  - modelValue.icon (auf Englisch)
  - modelValue.value
  @@ph007@gmail.de
Außen:
  @@ph008@@gmail.de
  - modellWert
Externe Typen:
  - ListboxItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Modellwert:
    Label: "Frankreich"
    Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
    Wert: "fr"
  Items:
    - label:'Frankreich'
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: 'fr'
    - label:'Deutschland'
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: „ de "
    - label:'Italien'
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: „ IT "
    - label:'Deutschland'
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: „ es "
    - label:'Niederlande'
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: "NL"
    - label:'Deutschland'
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: "PL"
    - label:'Belgien'
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: „ Be "
    - label:'Deutschland'
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: "PT"
    - label:'Österreich'
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: „ AT "
    - label:'Schweden'
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: "SE"
  Klasse: "W-voll"
---
::

@@ph021@gmail.de

Verwenden Sie `items` prop als Array von Objekten mit den folgenden Eigenschaften:

`label?: string``label?: string``label?: string`{lang="ts-type"}
`description?: string`))))))PH03131@@
- `type?: "label" | "separator" | "item"`{lang="ts-type"}]())
[`icon?: string`{lang="ts-type"}))
`avatar?: AvatarProps`{lang="ts-type"}PH0552)
- [PH0555@@@@@@@PH0559)PH05999
`disabled?: boolean``disabled?: boolean`{lang="ts-type"}
`onSelect?: (e: Event) => void``onSelect?: (e: Event) => void`PH06666 @
`class?: any``class?: any`{lang="ts-type"}
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

::component-code
---
Einsturz: wahr
Hide:
  @@@@@@@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@classc
Ignoriert:
  @@ph074@gmail.de
Außen:
  @@ph075@gmail.de
Externe Typen:
  - ListboxItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Items:
    - label:'Frankreich'
      Titel: "Das Hexagon"
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: 'fr'
    - label:'Deutschland'
      Stichwort: "Bundesrepublik"
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: „ de "
    - label:'Italien'
      Beschreibung: "Das Boot"
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: „ IT "
    - label:'Deutschland'
      Inhaltsangabe zu "The Bull Skin"
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: „ es "
  Klasse: "W-voll"
---
::

Sie können auch ein Array von Arrays an `items` prop übergeben, um getrennte Gruppen von Elementen anzuzeigen.

::component-code
---
Einsturz: wahr
Hide:
  @@@@@@@@@@@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@classclass@classclassclass@class@class@class@class@class@class
Ignoriert:
  @@ph083@gmail.de
Außen:
  @@@ph084@gmail.de
Externe Typen:
  @@ph085@@@listboxItem [][]
Props:
  Items:
    - -label: 'Frankreich'
        Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
        Wert: 'fr'
      - label:'Deutschland'
        Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
        Wert: „ de "
      - label:'Italien'
        Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
        Wert: „ IT "
    - -label: 'Deutschland'
        Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
        Wert: "BR"
      - label:'Argentinien'
        Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
        Wert: "AR"
  Klasse: "W-voll"
---
::

@@ph091@@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-e-

Verwenden Sie `multiple` prop, um die Auswahl mehrerer Elemente zu ermöglichen. Bei Aktivierung ist `v-model` ein Array.

::component-code
---
Einsturz: wahr
Hide:
  @@@@@@@@@@@class
Ignoriert:
  @@ph095@gmail.de
  @@ph096@@mehrfache
Außen:
  @@ph097@gmail.de
Externe Typen:
  @@ph098@@listboxItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Anzahl: true
  Items:
    - label:'Frankreich'
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: 'fr'
    - label:'Deutschland'
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: „ de "
    - label:'Italien'
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: „ IT "
    - label:'Deutschland'
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: „ Es "
  Klasse: "W-voll"
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
  @@@@@@@108@108@108@108@108@108@108@108@108@108@108@108@108@108@100@1000@108@108@10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @@109@Klasse
Außen:
  - Artikel
  - modellWert
Externe Typen:
  - ListboxItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Modellwert: 'FR'
  valueKey: 'Wert'
  Items:
    - label:'Frankreich'
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: "fr"
    - label:'Deutschland'
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: „ de "
    - label:'Italien'
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: „ IT "
    - label:'Spanien'
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: „ es "
  Klasse: "W-voll"
---
::

@@117@Filter Bearbeiten

Verwenden Sie `filter` prop, um eine Filtereingabe anzuzeigen, oder übergeben Sie ein Objekt, um die Komponente [Input](/docs/components/input) zu personalisieren.

::component-code
---
Einsturz: wahr
Hide:
  @@124@Klasse
Ignoriert:
  @@ph125@gmail.de
Außen:
  - Artikel
Externe Typen:
  - ListboxItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Filterung:
    Platzhalter: "Filter..."
    Icon: 'i-lucide-search'(auf Englisch)
  Items:
    - label:'Frankreich'
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: 'fr'
    - label:'Deutschland'
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: „ de "
    - label:'Italien'
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: „ IT "
    - label:'Spanien'
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: „ Es "
    - label:'Niederlande'
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: 'NL'
    - label:'Deutschland'
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: "PL"
  Klasse: "W-voll"
---
::

@@ph134@@selected Icon (englisch)

Verwenden Sie `selected-icon` prop, um das Symbol anzupassen, wenn ein Element ausgewählt wird.

::component-code
---
Einsturz: wahr
Ignoriert:
  - Artikel
  - modellWert
  - valueKey
  @@140@Klasse
Außen:
  - Artikel
  - modellWert
Externe Typen:
  - ListboxItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Modellwert: 'fr'
  selectedIcon: 'i-lucide-flame'(I-Lucide-Flamme)
  valueKey: 'Wert'
  Items:
    - label:'Frankreich'
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: "fr"
    - label:'Deutschland'
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: „ de "
    - label:'Italien'
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: „ IT "
    - label:'Spanien'
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: „ Es "
  Klasse: "W-voll"
---
::

@@148@148@148

Verwenden Sie die `size` prop, um die Größe der Listbox zu ändern.

::component-code
---
Einsturz: wahr
Hide:
  @150@Klasse
Ignoriert:
  - Artikel
Außen:
  - Artikel
Externe Typen:
  - ListboxItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Größe: XL
  Items:
    - label:'Frankreich'
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: 'fr'
    - label:'Deutschland'
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: „ de "
    - label:'Italien'
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: „ IT "
    - label:'Spanien'
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: „ Es "
  Klasse: "W-voll"
---
::

@@158@Aufladen

Verwenden Sie `loading` prop, um eine Ladeanzeige anzuzeigen.

::component-code
---
Einsturz: wahr
Hide:
  @@161@161@161@161@161@161@161@161@161@161@161@161@@161@@161@161@@161@@161@@@161@@@161@@161@@161@@161@@161@@161@@161@@@161@@@@161@@@@@@@@@@@@16161@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Klasse
Ignoriert:
  -  Artikel
Außen:
  - Artikel
Externe Personen:
  - ListboxItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Aufladung: true
  Items:
    - label:'Frankreich'
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: "fr"
    - label:'Deutschland'
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: „ de "
  Klasse: "W-voll"
---
::

### disabled

Verwenden Sie `disabled` prop, um jegliche Benutzerinteraktion mit der Listbox zu verhindern.

::component-code
---
Einsturz: wahr
Hide:
  @@@@@@169@class
Ignoriert:
  - Artikel
Außen:
  @@@@@@@171@171@171@171@171@171@@171@17@17@@171@17@@@171@@17@@17@@17@1@17@1@@17@@17@1@@17@1@@17@@@17@@17@@17@1@17@1@177@@1@@@177@1@@@@177@@1@@@@@1777@@@@@1@@@@@@@@Artikel
Externe Personen:
  - ListboxItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Behindert: Wahr
  Items:
    - label:'Frankreich'
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: 'fr'
    - label:'Deutschland'
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: „ de "
    - label:'Italien'
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: „ IT "
    - label:'Spanien'
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: „ Es "
  Klasse: "W-voll"
---
::

@@177@@Beispiele

### Mit Artikeltyp

Sie können die `type`-Eigenschaft mit `separator` verwenden, um ein Trennzeichen zwischen Elementen anzuzeigen, oder `label`, um eine Beschriftung anzuzeigen.

::component-code
---
Einsturz: wahr
Hide:
  @@182@gmail.de
Ignoriert:
  @@ph183@gmail.de
Außen:
  @@ph184@gmail.de
Externe Typen:
  @@ph185@@listboxItem [][Bearbeiten | Quelltext bearbeiten]
Props:
  Items:
    - -type: 'kennzeichnung'
        Schlagwort: "Früchte"
      - label:'Apple'(auf Englisch)
      - label:'Banane'
      - label:'Blaubeere'
      - label:'Trauben'
      - label:'Ananas'
    - -type: 'kennzeichnung'
        Kategorie: „ Gemüse "
      - label:'Aubergine'(Englisch)
      - label:'Brokkoli'(auf Englisch)
      - label:'Karotte'
      - label:'Zucchini'
      - label:'Leek'(auf Englisch)
  Klasse: "W-voll"
---
::

::note
Wenn Sie `label` Elemente als Gruppenüberschriften verwenden, übergeben Sie ein Array von Arrays, damit ein Label zusammen mit seiner Gruppe bei der Suche herausgefiltert wird.
::

### Mit Icon in den Artikeln

Sie können die `icon`-Eigenschaft verwenden, um ein [Icon](/docs/components/icon) innerhalb der Elemente anzuzeigen.

::component-code
---
Einsturz: wahr
Hide:
  @@ph205@gmail.de
Ignoriert:
  @@ph206@@gmail.de
Außen:
  @@ph207@gmail.de
Externe Typen:
  - ListboxItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Items:
    - label:'Backlog'
      Icon: 'i-lucide-circle-help'(I-lucide-Kreis-Hilfe)
      Bedeutung: Backlog
    - label:'Todo'(auf Englisch)
      Symbol: 'i-lucide-circle-plus'(I-lucide-Kreis-Plus)
      Wert: "alles"
    - label:'In Bearbeitung'
      Icon: 'i-lucide-circle-arrow-up'(I-lucide-Kreis-Pfeil-nach oben)
      Wert: 'in_progress'(in_progress)
    - label:'Fertig'
      Icon: 'i-lucide-circle-check'(I-luzide-Kreis-Check)
      Wert: „ Done "
  Klasse: "W-voll"
---
::

### Mit Avatar in den Artikeln

Sie können die `avatar`-Eigenschaft verwenden, um ein [Avatar](/docs/components/avatar) innerhalb der Elemente anzuzeigen.

::component-code
---
Einsturz: wahr
Hide:
  @@ph219@class
Ignoriert:
  @@ph220@@gmail.de
Außen:
  @@ph221@gmail.de
Externe Personen:
  - ListboxItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Items:
    - label:'benjamincanac'(auf Englisch)
      Avatare sind:
        src: 'https://github.com/benjamincanac.png'
    - label:'HugoRCD'(Englisch)
      Avatare sind:
        src: 'https://github.com/HugoRCD.png'
    - label:'atinux'(auf Englisch)
      Avatare sind:
        src: 'https://github.com/atinux.png'(https://github.com/atinux.png)
    - label:'romhml'(Englisch)
      Avatare sind:
        src: 'https://github.com/romhml.png'(auf Englisch)
  Klasse: "W-voll"
---
::

### Mit Chip in Artikeln

Sie können die `chip`-Eigenschaft verwenden, um ein [Chip](/docs/components/chip) innerhalb der Elemente anzuzeigen.

::component-code
---
Einsturz: wahr
Hide:
  @@ph233@gmail.de
Ignoriert:
  @@ph234@gmail.de
Außen:
  @@ph235@gmail.de
Externe Personen:
  - ListboxItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Items:
    - label:'bug'
      Der CHIP:
        Farbe: „ Fehler "
    - label:'Funktion'
      Der CHIP:
        Farbe: „ Erfolg "
    - label:'Verbesserung'
      Der CHIP:
        Farbe: "Info"
  Klasse: "W-voll"
---
::

### Mit Beschreibung in Artikeln

Sie können die `description`-Eigenschaft verwenden, um zusätzlichen Text unter dem Etikett anzuzeigen.

::component-code
---
Einsturz: wahr
Hide:
  @@@@@@@@class242@class242@class@class242@class@class@class@class@class242@class@class@class@class@class@class@class242@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@classclass@class@classclassclassclass@class@classclassclassclassclassclass@class@class@classclassclassclass@classclassclassclass@classclassclassclassclassclassclassclassclassclass@classclassclassclassclassclassclassclass@classclassclassclassc
Ignoriert:
  @@ph243@gmail.de
Außen:
  @@ph244@gmail.de
Externe Personen:
  - ListboxItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Items:
    - label:'Frankreich'
      Titel: "Das Hexagon"
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: "fr"
    - label:'Deutschland'
      Beschreibung: "Bundesrepublik"
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: „ de "
    - label:'Italien'
      Beschreibung: "Das Boot"
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: „ IT "
    - label:'Deutschland'
      Inhaltsangabe zu "The Bull Skin"
      Icon: 'i-lucide-map-pin'(I-lucide-map-pin) auf der Seite
      Wert: „ es "
  Klasse: "W-voll"
---
::

### Control ausgewählte (n) Artikel

Sie können das ausgewählte Element mit der `default-value` prop oder der `v-model` Direktive steuern.

::component-example
---
Name: 'listbox-model-value-example'(Listenbox-Modell-Wert-Beispiel)
Einsturz: wahr
---
::

### Kontrollsuchbegriff

Verwenden Sie die `v-model:search-term`-Direktive, um den Suchbegriff zu steuern.

::component-example
---
Name: 'listbox-search-term-example'(Listbox-Suchbegriff-Beispiel)
---
::

### Mit Ignorierfilter

Setzen Sie `ignore-filter` prop auf `true`, um die interne Suche zu deaktivieren und Ihre eigene Suchlogik zu verwenden.

::component-example
---
Einsturz: wahr
Listbox-Ignore-Filter-Beispiel
---
::

::note
In diesem Beispiel wird [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced) verwendet, um die API-Aufrufe zu entkräften.
::

### Mit Filterfeldern

Verwenden Sie `filter-fields` prop mit einem Array von Feldern, um nach. Defaults zu `[labelKey]` zu filtern.

::component-example
---
Einsturz: wahr
Name: 'listbox-filter-fields-example'(Listbox-Filter-Feld-Beispiel)
---
::

### Mit Virtualisierung

Verwenden Sie `virtualize` prop, um die Virtualisierung für große Listen als Boolean oder ein Objekt mit Optionen wie `{ estimateSize: 32, overscan: 12 }` zu aktivieren.

::component-example
---
Listbox-Virtualize-Example (Virtualisierungs-Beispiel)
Einsturz: wahr
---
::

### Als Übertragungsliste

Sie können zwei Listbox-Komponenten mit [Button](/docs/components/button) Steuerelementen zusammenstellen, um ein Übertragungslistenmuster zu erstellen.

::component-example
---
Name: 'listbox-transfer-list-example'(Listbox-Transfer-Listen-Beispiel)
Einsturz: wahr
---
::

@@@@@@@@b274@b274@b274.de

@@@@@@@@ph275@@Props

Komponenten-Props

### Spielautomaten

Die Komponenten-Slots

@@@ph277@@emits

Komponenten emittieren

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@######################################################################################################################################################################################

Das Komponenten-Theme

@@ph279@@changelog (auf Englisch)

Das Component-Changelog
