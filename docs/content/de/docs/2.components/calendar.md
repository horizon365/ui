---
description: Eine Kalenderkomponente zum Auswählen einzelner Datumsangaben, mehrerer Datumsangaben oder Datumsbereiche.
category: element
keywords:
  - date picker
  - datepicker
  - schedule
links:
  - label: kalendar
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/calendar
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Calendar.vue
---

@@@ph000@Verwendung

Verwenden Sie die `v-model` Direktive, um das ausgewählte Datum zu steuern.

::component-code
---
Cast auf:
  Modellwert: DateValue
Ignoriert:
  - modellWert
Außen:
  - modellWert
Props:
  Modellwert: [2019, 2, 3]
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

### Typ: badge{label="4.9+" class="align-text-top"}

Verwenden Sie `type` prop, um zu ändern, was der Kalender auswählt. Standardmäßig zu `date`.

Wenn Sie `date` verwenden, klicken Sie auf die Überschrift, um von der Tagesansicht zu einer Monats-und Jahresansicht zu wechseln, um eine schnelle Navigation zu erhalten, und führen Sie dann einen Drilldown durch, um ein Datum auszuwählen.

::component-code
---
Cast auf:
  Dateiendung: DateValue
Ignoriert:
  @@ph016@@gmail.de
  - modellWert
Außen:
  - modellWert
Props:
  Typ: Monat
  Modellwert: [2022, 2, 1]
---
::

Verwenden Sie `type="year"`, um eine eigenständige Jahresauswahl zu rendern.

::component-code
---
Cast auf:
  Dateiendung: DateValue
Ignoriert:
  @@ph020@@gmail.de
  - modellWert
Außen:
  - modellWert
Props:
  Typ: Jahr
  Modellwert: [2019, 1, 1]
---
::

@@ph023@mehrfache

Verwenden Sie `multiple` prop, um mehrere Auswahlmöglichkeiten zu ermöglichen.

::component-code
---
Schöner: wahr
Cast auf:
  Modellwert: DateValue []
Ignoriert:
  @@ph025@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache@mehrfache25
  - modellWert
Außen:
  - modellWert
Props:
  Vielfach: wahr
  [[2022, 2, 4],[2022, 2, 6],[2022, 2, 8],[2022, 2, 8],[2022, 2, 4],[2022, 2, 6],[2022, 2, 8],[2022, 2, 2022, 2022, 2022, 2022, 202022, 202022, 20202022, 20202022, 2020202022, 2022, 20202022, 202022, 202022, 20202022, 2020202022, 2020202020202022, 20202020202022, 202020202022, 20202020
---
::

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ph028@@@@range

Verwenden Sie `range` prop, um einen Bereich von Daten auszuwählen.

::component-code
---
Schöner: wahr
Cast auf:
  Dateiendung: DateRange
Ignoriert:
  @@ph030@@gmail.de
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

Die `range` prop funktioniert auch mit `type="month"` und `type="year"`, so dass Sie eine Reihe von Monaten oder Jahren auswählen können.

::component-code
---
Schöner: wahr
Cast auf:
  Dateiendung: DateRange
Ignoriert:
  @@ph037@gmail.de
  @@@@@@@@@@@@@@ph038@@range
  - modellValue.start
  - modellValue.end
Außen:
  - modellWert
Props:
  Typ: Monat
  Range: wahr
  Modellwert:
    Beginn: [2022, 2, 1]
    Ende: [2022, 6, 1]
---
::

@@ph042@@Anzahl der Monate

Verwenden Sie die `numberOfMonths` prop, um die Anzahl der Monate im Kalender zu ändern.

::component-code
---
Props:
  Anzahl der Monate: 3
---
::

@@ph044@@monthcontrols

Verwenden Sie `month-controls` prop, um die month controls. Defaults auf `true` anzuzeigen.

::component-code
---
Props:
  Monatliche Kontrolle: false
---
::

Verwenden Sie die `prev-month` und `next-month` props, um die Monatsschaltflächen zu überschreiben.

::component-code
---
Schöner: wahr
Ignoriert:
  - prevMonth.color
  @@ph050@@prevMonth.variant
  @@@ph051@@nextMonth.color
  @@@ph052@@nextMonth.variant
Props:
  Vormonat:
    Farbe: Primär
    Variante: weich
  NextMonat:
    Farbe: Primär
    Die Variante: Soft
---
::

### Jahreskontrollen

Verwenden Sie `year-controls` prop, um die Jahressteuerung anzuzeigen. Standardmäßig ist `true`.

::component-code
---
Props:
  Jahrgangskontrolle: false
---
::

Verwenden Sie die `prev-year` und `next-year` props, um die Jahresschaltflächen zu überschreiben.

::component-code
---
Schöner: wahr
Ignoriert:
  - prevYear.color
  @@ph059@prevYear.variant
  @@ph060@@nextyear.color
  @@ph061@nextyear.variant
Props:
  Vorjahressieger:
    Farbe: Primär
    Die Variante: Soft
  NextJahr:
    Farbe: Primär
    Variante: weich
---
::

### View Control: badge{label="4.9+" class="align-text-top"}

Verwenden Sie `view-control` prop, um die Überschrift zu einer Schaltfläche zu machen, die zwischen den Ansichten Tag, Monat und Jahr wechselt.

::component-code
---
Items:
  Übersicht: ViewControl:
    @@ph066@@@true
    @@@@@@@@@@ph067@false
Props:
  viewControl: Falscher
---
::

Setzen Sie `view-control` prop auf ein Objekt, um die Überschriftenschaltfläche zu überschreiben.

::component-code
---
Schöner: wahr
Ignoriert:
  - viewControl.color (englisch)
  - viewControl.variant
Props:
  Übersicht: ViewControl:
    Farbe: Primär
    Variante: weich
---
::

### feste Wochen

Verwenden Sie die `fixed-weeks` prop, um den Kalender mit festen Wochen anzuzeigen.

::component-code
---
Props:
  Wochen: false
---
::

### Wochenzahlen: badge{label="4.4+" class="align-text-top"}

Verwenden Sie `week-numbers` prop, um die Wochennummern im Kalender anzuzeigen.

::component-code
---
Props:
  Wochenrückblick: Wahr
  Wochen: true
---
::

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@############################################################################################################################################################################################

Verwenden Sie `color` prop, um die Farbe des Kalenders zu ändern.

::component-code
---
Cast auf:
  Standardwert: DateRange
Hide:
  @@@@@@@@@@ph078@@range
  - defaultValue (nicht vorhanden)
  - defaultValue.start
  - defaultValue.end
Props:
  Farbe: neutral
  Range: wahr
  Defaultwert:
    Beginn: [2022, 2, 3]
    Ende: [2022, 2, 20]
---
::

@@@ph082@@@@@Variant

Verwenden Sie `variant` prop, um die Variante des Kalenders zu ändern.

::component-code
---
Cast auf:
  Standardwert: DateRange
Hide:
  @@@@@@@@@@@ph084@@range
  @@ph085@defaultvalue (@ defaultvalue)@@ph085@defaultvalue (@ fehlerwert)
  - defaultValue.start
  - defaultValue.end (auf Englisch)
Props:
  Variante: subtil
  Range: wahr
  Defaultwert:
    Beginn: [2022, 2, 3]
    Ende: [2022, 2, 20] Bearbeiten
---
::

@@@@88@88@88@88@888@88@88@88@88@88@88@88@@88@88@@@888@@88@88@88@88@@88@@88@@88@@88@88@@88@88@88@88@8@88@88@88@88@88@88@8@88@88@@888@@@8888@@@@8888@@@8888@@@@8888@@@@@888888@@@@@@@888888@@@@@@@@@88888000000000

Verwenden Sie die `size` prop, um die Größe des Kalenders zu ändern.

::component-code
---
Props:
  Größe: XL
---
::

@@ph090@disabled @ disabled

Verwenden Sie `disabled` prop, um den Kalender zu deaktivieren.

::component-code
---
Props:
  Behindert: Wahr
---
::

@@ph092@@Beispiele

### Mit Chip-Events

Verwenden Sie die Komponente [Chip](/docs/components/chip), um Ereignisse zu bestimmten Tagen hinzuzufügen.

::component-example
---
name: 'Kalender-Ereignisse-Beispiel'
---
::

### Mit deaktivierten Daten

Verwenden Sie `is-date-disabled` prop mit einer Funktion, um bestimmte Daten als deaktiviert zu markieren. Wenn Sie `type="month"` oder `type="year"` verwenden, verwenden Sie stattdessen `is-month-disabled` oder `is-year-disabled` prop.

::component-example
---
Name: 'Kalender-disabled-dates-example'(Kalender-deaktiviert-Datums-Beispiel)
---
::

### Mit nicht verfügbaren Daten

Verwenden Sie `is-date-unavailable` prop mit einer Funktion, um bestimmte Daten als nicht verfügbar zu markieren. Wenn Sie `type="month"` oder `type="year"` verwenden, verwenden Sie stattdessen `is-month-unavailable` oder `is-year-unavailable` prop.

::component-example
---
Name: 'Kalender-nicht-Datums-Beispiel'
---
::

### Mit min/max Termine

Verwenden Sie die Props `min-value` und `max-value`, um die Daten zu begrenzen.

::component-example
---
Name: 'Kalender-min-max-dates-example'
---
::

### Mit anderen Kalendersystemen

Sie können andere Kalender von `@internationalized/date` verwenden, um ein anderes Kalendersystem zu implementieren.

::component-example
---
name: 'Kalender-anderes-System-Beispiel'
---
::

::note{to="https://react-spectrum.adobe.com/internationalized/date/Calendar.html#implementations"}
Sie können alle verfügbaren Kalender unter `@internationalized/date` docs einsehen.
::

### Mit externen Kontrollen

Sie können den Kalender mit externen Steuerelementen steuern, indem Sie das im `v-model` übergebene Datum manipulieren.

::component-example
---
Name: 'Kalender-External-Controls-Example'
---
::

@@118@@Mit dem heutigen Datum

Verwenden Sie die Funktion `today` von `@internationalized/date` mit `getLocalTimeZone`, um den Wert auf das aktuelle Datum zu setzen.

::component-example
---
Name: 'Kalender-heute-Beispiel'
---
::

### Als Datumsauswahl

Verwenden Sie eine [Button](/docs/components/button) und eine [Popover](/docs/components/popover) Komponente, um eine Datumsauswahl zu erstellen.

::component-example
---
Name: 'Kalender-Datum-Picker-Beispiel'
---
::

### Als Datumsbereich-Picker

Verwenden Sie eine [Button](/docs/components/button) und eine [Popover](/docs/components/popover) Komponente, um eine Datumsbereich-Auswahl mit voreingestellten Bereichen zu erstellen.

::component-example
---
Name: 'Kalender-Datum-Bereichs-Picker-Beispiel'
---
::

@@140@bmg14

@@@@@@@@141@@141@141@@@141@@@141@@141@@@141@@@141@@@141@1@@@@141@@@@141@@@@141@@@@141@@@@141@@141@@141@@141@1@@141@@@@1441@@@@@141@@@@141@@@@@@141@@@@@@@@14141@@@@@@@@@@@@@@@@@@@@@@@@1414141@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

Komponenten Props

### Spielautomaten

Die Komponenten-Slots

@@@@@@@143@Emits143@Emits143@Emits143@Emits143@Emits143@Emits143@Emits143@Emits143@Emits143@Emits143@Emits143@Emits143@Emits143@Emitts143@Emitts143@@Emitts143@Emitts143@@Emitts143@Emitts143

Komponenten emittieren

@@144@Einsteigertipps

Das Komponenten-Theme

@@ph145@@changelog (auf Englisch)

Das Component-Changelog
