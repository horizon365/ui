---
title: Die CheckboxGroup
description: Eine Reihe von Kontrollkästchen zum Auswählen mehrerer Optionen aus einer Liste.
category: form
keywords:
  - multi select
  - checklist
links:
  - label: Die Checkbox-Gruppe
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/checkbox#group-root
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/CheckboxGroup.vue
---


@@@ph000@Verwendung

Verwenden Sie die Direktive `v-model`, um den Wert der CheckboxGroup zu steuern, oder die Direktive `default-value` prop, um den Anfangswert festzulegen, wenn Sie den Status nicht steuern müssen.

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
  Modellwert:
    - "System"
  Items:
    @@ph008 @@"System"
    @@ph009 @@'Licht'
    @@ph010 @@"dunkel"
---
::

@@ph011@gmail.de

Verwenden Sie `items` prop als Array von Strings oder Zahlen:

::component-code
---
Schöner: wahr
Ignoriert:
  - modellWert
  @@ph014@gmail.de
Außen:
  @@ph015@gmail.de
  - modellWert
Props:
  Modellwert:
    - "System"
  Items:
    - 'System'
    - 'Licht'
    @@ph020 @@'dunkel'
---
::

Sie können auch ein Array von Objekten mit den folgenden Eigenschaften übergeben:

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#######################################################################################
`description?: string``description?: string`{lang="ts-type"}
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@PH0333)
`disabled?: boolean``disabled?: boolean``disabled?: boolean`{lang="ts-type"}
[`icon?: string`PH0433@@@@@@@PH0422 @@
`class?: any``class?: any``class?: any``class?: any`{lang="ts-type"}
`ui?: { item?: ClassNameValue, container?: ClassNameValue, base?: ClassNameValue, 'indicator'?: ClassNameValue, icon?: ClassNameValue, wrapper?: ClassNameValue, label?: ClassNameValue, description?: ClassNameValue }``ui?: { item?: ClassNameValue, container?: ClassNameValue, base?: ClassNameValue, 'indicator'?: ClassNameValue, icon?: ClassNameValue, wrapper?: ClassNameValue, label?: ClassNameValue, description?: ClassNameValue }``ui?: { item?: ClassNameValue, container?: ClassNameValue, base?: ClassNameValue, 'indicator'?: ClassNameValue, icon?: ClassNameValue, wrapper?: ClassNameValue, label?: ClassNameValue, description?: ClassNameValue }`{lang="ts-type"}PH0499@@@@@@@@@PH0499@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

::component-code
---
Ignoriert:
  - modellWert
  @@ph051@gmail.de
Außen:
  @@ph052@gmail.de
  - modellWert
Externe Typen:
  - CheckboxGroupItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Modellwert:
    @@ph055 @@'System'
  Items:
    - label:'System'
      Beschreibung: "Entspricht Ihren Geräteeinstellungen."
      Wert: „ System "
    - label:'Licht'
      Beschreibung: 'Verwendet immer das Lichtthema.'
      Wert: „ Licht "
    - label:'Dunkle'
      Beschreibung: "Verwendet immer das dunkle Thema."
      Wert: "dunkel"
---
::

::caution
Wenn Sie Objekte verwenden, müssen Sie auf die `value`-Eigenschaft des Objekts in der `v-model`-Direktive oder der `default-value` prop. verweisen.
::

### Wertschlüssel

Sie können die Eigenschaft ändern, die zum Festlegen des Werts verwendet wird, indem Sie `value-key` prop. Defaults auf `value` verwenden.

::component-code
---
Ignoriert:
  - modellWert
  - Artikel
  - valueKey
Außen:
  @@ph068@gmail.de
  - modellWert
Externe Typen:
  - CheckboxGroupItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Modellwert:
    - 'Licht'
  Schlüsselwort:'id'
  Items:
    - label:'System'
      Beschreibung: 'Entspricht Ihren Geräteeinstellungen.'
      ID: „ System "(System)
    - label:'Licht'
      Beschreibung: "Verwendet immer das Lichtthema."
      ID: „ Licht "
    - label:'Dunkle'
      Beschreibung: "Verwendet immer das dunkle Thema."
      Titel: "Dark"
---
::

@@ph075@@bmg-legende.de

Verwenden Sie `legend` prop, um die Legende der CheckboxGroup zu setzen.

::component-code
---
Schöner: wahr
Ignoriert:
  - defaultValue (nicht vorhanden)
  @@@ph078@@gmail.de
Außen:
  @@@ph079@gmail.de
Props:
  Zitat von » Theme «
  Defaultwert:
    @@ph080 @@"System"
  Items:
    - "System"
    - 'Licht'
    @@ph083 @@'dunkel'
---
::

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#####################################################################################################################################################################################

Verwenden Sie die `color` prop, um die Farbe der CheckboxGroup zu ändern.

::component-code
---
Schöner: wahr
Ignoriert:
  - defaultValue (nicht vorhanden)
  @@@ph087@gmail.de
Außen:
  @@@@@@@@@@@@@@@ph0888@@@items
Items:
  Farbe:
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#################################################################################################################################################################################
    @@ph090@zweitrangig
    @@ph091@@Erfolg
    @@@@@@@info@@@info@info@info@@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@@info@info@@info@info@info@info@@@info@info@info@info@info@info@@@info@@@info@@info@info@@info@@info@info@@@info@@info@@info@info@
    @@ph093@@warning
    @@ph094@Fehler
    @@ph095@neutral.de
Props:
  Farbe: neutral
  Defaultwert:
    - 'System'(auf Englisch)
  Items:
    @@ph097 @@"System"
    @@ph098 @@'Licht'
    @@ph099 @@'dunkel'
---
::

@@100@Variantentabelle

Verwenden Sie `variant` prop, um die Variante der CheckboxGroup zu ändern.

::component-code
---
Schöner: wahr
Ignoriert:
  - defaultValue
  @@ph103@gmail.de
Außen:
  - Artikel
Externe Typen:
  - CheckboxGroupItem [Bearbeiten | Quelltext bearbeiten]
Items:
  Farbe:
    @106@1
    @@107@secondary
    @@108@Erfolg
    @@109@info@info@@info@@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@@info@info@info@@info@info@info@@info@info@@info@info@info@@info@info@
    @@110@warning
    @@111@Fehler
    @@112 @ Neutral
  Varianten:
    @@113@Aufzählung
    @@@@@@@114@@Karte
    @@115@table
Props:
  Farbe: "Primär"
  Variante: „ Karte "
  Defaultwert:
    - 'System'
  Items:
    - label:'System'
      Wert: "System"
      Beschreibung: 'Entspricht Ihren Geräteeinstellungen.'
    - label:'Licht'
      Wert: „ Licht "
      Beschreibung: 'Verwendet immer das Lichtthema.'
    - label:'Dunkle'
      Wert: "dunkel"
      Beschreibung: "Verwendet immer das dunkle Thema."
---
::

@@120@120@120@120@120@120@120@1200@120@120@120@120@12012@120120@120120@120120@120120@120120@120120@12012

Verwenden Sie die `size` prop, um die Größe der CheckboxGroup zu ändern.

::component-code
---
Schöner: wahr
Ignoriert:
  - defaultValue
  - Artikel
Außen:
  @@ph124@gmail.de
Items:
  Varianten:
    @@ph125@auflistung
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#######################################################################################################################################################################################################
    @@@@@@@127@table
Props:
  Größe:'xl'
  Variante: "Liste"
  Defaultwert:
    - 'System'(auf Englisch)
  Items:
    - 'System'(auf Englisch)
    - 'Licht'
    @131 @"Die dunkle Seite"
---
::

### Orientierung

Verwenden Sie `orientation` prop, um die Ausrichtung der CheckboxGroup. Defaults auf `vertical` zu ändern.

::component-code
---
Schöner: wahr
Ignoriert:
  - defaultValue
  - Artikel
Außen:
  - Artikel
Items:
  Variante:
    @@138@138@138@138@138@138@138@138@138@138@138@138@138@138@138@138@138@138@138@138@138@138@138@138@@138@@138@138@@138@@1338@@138@@138@@138@@138@@@@13338@@@@@@13338@@@@@@@@133338@@@@@@@@@@@@@@@@@13333338@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@1333
    @@@@@@@139@@gmail.de
    @@ph140@table
Props:
  Orientierung: "horizontal"
  Variante: "Liste"
  Defaultwert:
    - 'System'
  Items:
    - "System"
    - 'Licht'
    @@144 @"Die dunkle Seite"
---
::

### Indikator

Verwenden Sie `indicator` prop, um die Position zu ändern oder den Indikator auszublenden. Standardmäßig `start`.

::note
Das `icon` eines Elements ersetzt das Häkchen, solange der Indikator sichtbar ist, und wird über dem Etikett angezeigt, wenn es sich um `hidden` handelt.
::

::component-code
---
Schöner: wahr
Ignoriert:
  - defaultValue
  - Artikel
Außen:
  - Artikel
Externe Personen:
  - CheckboxGroupItem [Bearbeiten | Quelltext bearbeiten]
Items:
  Indikator:
    @@@@@@154@startup
    @155@Ende
    @@ph156@hidden
  Variante:
    @@@@@@@157@157@157@157@157@157@157@157@157@157@157@157@157@157@15@157@15@157@15@157@15@157@15@157@15@157@@157@157@@157@@157@@157@@157@@157@@157@@157@@@@@157@@@@@@1557@@@@@@@@@15557@@@@@@@@@@@@@@@@@@@@1555557@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@##############################################################################################################################################################################################
    @@ph159@table
Props:
  Anzeige: "versteckt"
  Orientierung: "horizontal"
  Variante: „ Tisch "
  Defaultwert:
    - 'System'
  Items:
    - label:'System'
      Icon: 'i-lucide-monitor'(Symbol: 'i-lucide-monitor')
      Wert: "System"
      Klasse: W-20
    - label:'Licht'
      Bildnachweis: i-lucide-sun
      Klasse: W-20
      Wert: „ Licht "
    - label:'Dunkle'
      I-Lucide-Moon (englisch)
      Klasse: W-20
      Wert: „ dunkel "
---
::

### disabled @ disabled

Verwenden Sie `disabled` prop, um die CheckboxGroup zu deaktivieren.

::component-code
---
Schöner: wahr
Ignoriert:
  - defaultValue (nicht vorhanden)
  - Artikel
Außen:
  @@168@gmail.de
Props:
  Behindert: Wahr
  Defaultwert:
    - 'System'(auf Englisch)
  Items:
    - 'System'(auf Englisch)
    - 'Licht'
    @@172 @"Die Wahrheit"
---
::

@@173@bmg17

@@@@@@@174@@@@props

Komponenten-Props

### Slots

Die Komponenten-Slots

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Emits

Komponenten emittieren

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@###############################################################################################################################################################################################

Das Komponenten-Theme

@@ph178@@changelog (auf Englisch)

Das Component-Changelog
