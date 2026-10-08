---
title: Input-Daten
description: 'Eine Eingabekomponente für die Datumsauswahl.'
category: form
keywords:
  - date picker
  - datepicker
  - calendar input
links:
  - label: Datumsfeld
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/date-field
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputDate.vue
---

@@@ph000@@Verwendung

Verwenden Sie die `v-model` Direktive, um das ausgewählte Datum zu steuern.

::component-code
---
Cast auf:
  Dateiendung: DateValue
Ignoriert:
  - modellWert
Außen:
  - modellWert
Props:
  Modellwert: [2022, 2, 3]
---
::

Verwenden Sie `default-value` prop, um den Anfangswert festzulegen, wenn Sie den Zustand nicht steuern müssen.

::component-code
---
Cast auf:
  Standardwert: DateValue
Ignoriert:
  - defaultValue
Außen:
  - defaultValue
Props:
  Standardwert: [2022, 2, 6]
---
::

::framework-only
#nuxt sein
:::note{to="/docs/getting-started/integrations/i18n/nuxt#locale"}
Diese Komponente verwendet das Paket `@internationalized/date` für die lokale Formatierung. Das Datumsformat wird durch die `locale` prop der App-Komponente bestimmt.
:::

#Ansehen
:::note{to="/docs/getting-started/integrations/i18n/vue#locale"}
Diese Komponente verwendet das Paket `@internationalized/date` für die lokale Formatierung. Das Datumsformat wird durch die `locale` prop der App-Komponente bestimmt.
:::
::

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@####################################################################################################################################################

Verwenden Sie `range` prop, um einen Bereich von Daten auszuwählen.

::component-code
---
Schöner: wahr
Cast auf:
  Dateiendung: DateRange
Ignoriert:
  @@ph013@@gmail.de
  - modellValue.start
  - modellValue.end
Außen:
  - modellWert
Props:
  Range: wahr
  Modellwert:
    Beginn: [2022, 2, 3]
    Ende: [2022, 2, 20] Bearbeiten
---
::

@@@@@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17

Verwenden Sie `color` prop, um die Farbe des Eingabedatums zu ändern.

::component-code
---
Props:
  Farbe: neutral
  Highlight: Wahr
---
::

@@ph019@@Variantentabelle

Verwenden Sie `variant` prop, um die Variante des InputDatums zu ändern.

::component-code
---
Props:
  Variante: subtil
---
::

@@ph021 @ Größe

Verwenden Sie `size` prop, um die Größe des Eingabedatums zu ändern.

::component-code
---
Props:
  Größe: XL
---
::

@@ph023@@gmail.de

Verwenden Sie die `icon` prop, um ein [Icon](/docs/components/icon) innerhalb des Eingabedatums anzuzeigen.

::component-code
---
Props:
  Icon: 'i-lucide-Kalender'
---
::

::note
Verwenden Sie `leading` und `trailing` props, um die Symbolposition festzulegen, oder die `leading-icon` und `trailing-icon` props, um für jede Position ein anderes Symbol festzulegen.
::

@@ph033@@trennsymbol

Verwenden Sie `separator-icon` prop, um die [Icon](/docs/components/icon) des Bereichsabscheiders zu ändern.

::component-code
---
Ignoriert:
  @@ph040@@gmail.de
Props:
  Range: wahr
  separatorIcon: 'i-lucide-arrow-right'(I-lucide-arrow-rechts)
---
::

::framework-only
#nuxt sein
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.minus` key anpassen.
:::

#Ansehen
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.minus` key anpassen.
:::
::

@@@@@Avatar45@@Avatar45@@@Avatar45@@@Avatar45@@@@Avatar45@@@@Avatar45@@@@Avatar45@@@@Avatar@@Avatar@@Avatar@@Avatar@@@Avatar@@@@Avatar@@@@Avatar@@@@@@@@Avatar@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Avatar

Verwenden Sie die `avatar` prop, um ein [Avatar](/docs/components/avatar) innerhalb des Eingabedatums anzuzeigen.

::component-code
---
Schöner: wahr
Ignoriert:
  - avatar.loading (auf Englisch)
Props:
  Avatare sind:
    src: 'https://github.com/vuejs.png'(auf Englisch)
    Aufladung: Lazy
  Größe: md
  Beschreibung: Outline
---
::

@@ph052@@disabled @ nicht vorhanden

Verwenden Sie `disabled` prop, um das Eingabedatum zu deaktivieren.

::component-code
---
Props:
  Behindert: Wahr
---
::

@@ph054@@Beispiele

### Mit nicht verfügbaren Daten

Verwenden Sie `is-date-unavailable` prop mit einer Funktion, um bestimmte Datumsangaben als nicht verfügbar zu markieren.

::component-example
---
Name: 'input-date-unavailable-dates-example'(Eingabedatum-nicht verfügbares Datums-Beispiel)
---
::

### Mit min/max Daten

Verwenden Sie die Props `min-value` und `max-value`, um die Daten zu begrenzen.

::component-example
---
Name: 'input-date-min-max-dates-example'(Eingabe-Datum-Min-Max-Datums-Beispiel)
---
::

### Als Datumsauswahl

Verwenden Sie eine [Calendar](/docs/components/calendar) und eine [Popover](/docs/components/popover) Komponente, um eine Datumsauswahl zu erstellen.

::component-example
---
Name: 'input-date-date-picker-example'(Eingabe-Datum-Datum-Picker-Beispiel)
---
::

### Als Datumsbereich-Picker.

Verwenden Sie eine [Calendar](/docs/components/calendar) und eine [Popover](/docs/components/popover) Komponente, um eine Datumsbereich-Auswahl zu erstellen.

::component-example
---
Name: 'input-date-date-range-picker-example'(Eingabe-Datum-Datum-Bereich-Picker-Beispiel)
---
::

## api

@@@@@@@@@@@ph079@@props

Komponenten-Props

@@ph080@@slots

Die Komponenten-Slots

@@@@@@@@@@@emits

Komponenten emittieren

@@@@@@@@@@@ph082@@theme

Das Komponenten-Theme

@@ph083@@changelog @@@ changelog @@@ changelog

Das Component-Changelog
