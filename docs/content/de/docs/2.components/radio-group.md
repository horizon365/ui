---
title: Die Radiogruppe
description: Eine Reihe von Radiobuttons, um eine einzelne Option aus einer Liste auszuwählen.
category: form
keywords:
  - radio buttons
  - single choice
links:
  - label: Die Radiogruppe
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/radio-group
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/RadioGroup.vue
---

@@@ph000@@Verwendung

Verwenden Sie die Direktive `v-model`, um den Wert der RadioGroup zu steuern, oder die Direktive `default-value` prop, um den Anfangswert festzulegen, wenn Sie den Zustand nicht steuern müssen.

::component-code
---
Schöner: wahr
Ignoriert:
  - modellWert
  @@ph004@gmail.de
Außen:
  @@@ph005@gmail.de
  - modellWert
Props:
  Modellbezeichnung: "System"
  Items:
    - "System"
    @@ph008 @@'Licht'
    @@ph009 @@'dunkel'
---
::

@@ph010@gmail.de

Verwenden Sie `items` prop als Array von Strings oder Zahlen:

::component-code
---
Schöner: wahr
Ignoriert:
  - modellWert
  @@ph013@gmail.de
Außen:
  @@ph014@gmail.de
  - modellWert
Props:
  Modellbezeichnung: "System"
  Items:
    - 'System'
    - 'Licht'
    @@ph018 @@'dunkel'
---
::

Sie können auch ein Array von Objekten mit den folgenden Eigenschaften übergeben:

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@PH02020@@@@@@@@@PH0202020@@@@@@@@@@@PH02021
`description?: string``description?: string`{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}
- [`value?: string`{lang="ts-type"}]()
@@@@@@@@@@@@@@@@@@@@@@PH0333@@@@@@@@@@@@@@PH03333@@@@@@@@@@@@@@@PH0334{lang="ts-type"}{lang="ts-type"}PH03334@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
- [`icon?: string`{lang="ts-type"}]()
`class?: any`PH0444 @@
`ui?: { item?: ClassNameValue, container?: ClassNameValue, base?: ClassNameValue, 'indicator'?: ClassNameValue, wrapper?: ClassNameValue, label?: ClassNameValue, icon?: ClassNameValue, description?: ClassNameValue }``ui?: { item?: ClassNameValue, container?: ClassNameValue, base?: ClassNameValue, 'indicator'?: ClassNameValue, wrapper?: ClassNameValue, label?: ClassNameValue, icon?: ClassNameValue, description?: ClassNameValue }``ui?: { item?: ClassNameValue, container?: ClassNameValue, base?: ClassNameValue, 'indicator'?: ClassNameValue, wrapper?: ClassNameValue, label?: ClassNameValue, icon?: ClassNameValue, description?: ClassNameValue }``ui?: { item?: ClassNameValue, container?: ClassNameValue, base?: ClassNameValue, 'indicator'?: ClassNameValue, wrapper?: ClassNameValue, label?: ClassNameValue, icon?: ClassNameValue, description?: ClassNameValue }`{lang="ts-type"}

::component-code
---
Ignoriert:
  - modellwert
  @@ph049@gmail.de
Außen:
  @@@ph050@gmail.de
  - modellWert
Externe Personen:
  - RadioGroupItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Modellwert: 'System'
  Items:
    - label:'System'
      Beschreibung: "Entspricht Ihren Geräteeinstellungen."
      Wert: "System"
    - label:'Licht'
      Beschreibung: "Verwendet immer das Lichtthema."
      Wert: „ Licht "
    - label:'Dunkle'
      Beschreibung: "Verwendet immer das dunkle Thema."
      Wert: "dunkel"
---
::

::caution
Wenn Sie Objekte verwenden, müssen Sie auf die `value`-Eigenschaft des Objekts in der `v-model`-Direktive oder der `default-value`-Prop verweisen.
::

### Wertschlüssel

Sie können die Eigenschaft ändern, die zum Festlegen des Werts verwendet wird, indem Sie `value-key` prop. Defaults zu `value` verwenden.

::component-code
---
Ignoriert:
  - modellWert
  @@ph063@gmail.de
  - valueKey
Außen:
  @@ph065@gmail.de
  - modellWert
Externe Personen:
  - RadioGroupItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Modellwert: "Licht"
  Schlüsselwort:'id'
  Items:
    - label:'System'
      Beschreibung: "Entspricht Ihren Geräteeinstellungen."
      ID: „ System "(System)
    - label:'Licht'
      Beschreibung: 'Verwendet immer das Lichtthema.'
      ID: "Licht"
    - label:'Dunkle'
      Beschreibung: 'Verwendet immer das dunkle Thema.'
      Titel: "Dark"
---
::

### Legende

Verwenden Sie `legend` prop, um die Legende der RadioGroup zu setzen.

::component-code
---
Schöner: wahr
Ignoriert:
  - defaultValue (nicht vorhanden)
  @@ph074@gmail.de
Außen:
  @@ph075@gmail.de
Props:
  Zitat von » Theme «
  DefaultValue: 'System'(Systemfehler)
  Items:
    - 'System'(auf Englisch)
    - 'Licht'
    @@ph078 @@'dunkel'
---
::

@@@ph079@@gmail.de

Verwenden Sie die `color` prop, um die Farbe der RadioGroup zu ändern.

::component-code
---
Schöner: wahr
Ignoriert:
  - defaultValue
  @@@ph082@@gmail.de
Außen:
  @@ph083@gmail.de
Props:
  Farbe: neutral
  DefaultValue: 'System'(Systemfehler)
  Items:
    @@ph084 @@"System"
    @@ph085 @@'Licht'
    @@ph086 @@'dunkel'
---
::

@@@@@@@@@@@@@@@@@@ph087@@@@@@Variant

Verwenden Sie `variant` prop, um die Variante der RadioGroup zu ändern.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph089@defaultvalue (nicht vorhanden)
  @@ph090@gmail.de
Außen:
  @@ph091@@gmail.de
Externe Personen:
  - RadioGroupItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Farbe: "Primär"
  Variante: „ Karte "
  DefaultValue: 'System'(Systemfehler)
  Items:
    - label:'System'
      Wert: "System"
      Beschreibung: 'Entspricht Ihren Geräteeinstellungen.'
    - label:'Licht'
      Wert: „ Licht "
      Beschreibung: 'Verwendet immer das Lichtthema.'
    - label:'Dunkle'
      Wert: "dunkel"
      Beschreibung: 'Verwendet immer das dunkle Thema.'
---
::

### Größe

Verwenden Sie die `size` prop, um die Größe der RadioGroup zu ändern.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph098@defaultvalue (nicht vorhanden)
  @@ph099@gmail.de
Außen:
  @@@ph100@gmail.de
Props:
  Größe:'xl'
  Variante: „ Liste "
  DefaultValue: 'System'(Systemfehler)
  Items:
    - 'System'
    - 'Licht'
    @@ph103 @@'dunkel'
---
::

@@104@Orientierung

Verwenden Sie `orientation` prop, um die Ausrichtung der RadioGroup. Defaults auf `vertical` zu ändern.

::component-code
---
Schöner: wahr
Ignoriert:
  - defaultValue (nicht vorhanden)
  @@@@@@@108@108@108@108@108@108@108@108@108@108@108@108@108@108@100@1000@108@108@10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Außen:
  @@ph109@gmail.de
Props:
  Orientierung: "horizontal"
  Variante: „ Liste "
  DefaultValue: 'System'(Systemfehler)
  Items:
    - 'System'
    - 'Licht'
    - "Dunkel"
---
::

### Indikator

Verwenden Sie `indicator` prop, um die Position zu ändern oder den Indikator auszublenden. Standardmäßig `start`.

::note
Das `icon` eines Elements wird nur angezeigt, wenn `indicator` über dem Etikett `hidden` steht, da ein Radio kein Symbol in seinem Indikator hat.
::

::component-code
---
Schöner: wahr
Ignoriert:
  - defaultValue
  - Artikel
Außen:
  - Artikel
Externe Typen:
  - RadioGroupItem [Bearbeiten | Quelltext bearbeiten]
Items:
  Indikator:
    @@@@@@123@startup
    @@124@Ende
    @@@ph125@hidden
  Variante:
    @@126@Einladungskarten
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#####################################################################################################################################################################################################
    @@@@@@@128@table
Props:
  Anzeige: "Versteckt"
  Orientierung: "horizontal"
  Variante: „ Tisch "
  DefaultValue: 'System'(Systemfehler)
  Items:
    - label:'System'
      Icon: 'i-lucide-monitor'(Symbol: 'i-lucide-monitor')
      Wert: "System"
      Klasse: W-20
    - label:'Licht'
      Bildnachweis: i-lucide-sun
      Wert: „ Licht "
      Klasse: W-20
    - label:'Dunkle'
      I-Lucide-Moon (englisch)
      Wert: "dunkel"
      Klasse: W-20
---
::

### disabled @ disabled

Verwenden Sie die `disabled` prop, um die RadioGroup zu deaktivieren.

::component-code
---
Schöner: wahr
Ignoriert:
  - defaultValue
  @@ph135@gmail.de
Außen:
  - Artikel
Props:
  Behindert: Wahr
  DefaultValue: 'System'(Systemfehler)
  Items:
    - 'System'(auf Englisch)
    - 'Licht'
    @@139 @@"Die Wahrheit"
---
::

@@140@bmg14

@@@@@@@@141@@141@141@@@141@@@141@@141@@@141@@@141@@@141@1@@@@141@@@@141@@@@141@@@@141@@@@141@@141@@141@@141@1@@141@@@@1441@@@@@141@@@@141@@@@@@141@@@@@@@@14141@@@@@@@@@@@@@@@@@@@@@@@@1414141@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

Komponenten-Props

### Spielautomaten

Die Komponenten-Slots

@@@@@@@143@Emits143@Emits143@Emits143@Emits143@Emits143@Emits143@Emits143@Emits143@Emits143@Emits143@Emits143@Emits143@Emits143@Emitts143@Emitts143@@Emitts143@Emitts143@@Emitts143@Emitts143

Komponenten emittieren

@@144@Einsteigertipps

Das Komponenten-Theme

@@ph145@@changelog (auf Englisch)

Das Component-Changelog
