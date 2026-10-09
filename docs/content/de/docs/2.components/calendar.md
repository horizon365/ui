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

## Bearbeiten

Verwenden Sie die `v-model`-Direktive, um das ausgewählte Datum zu steuern.

::component-code
---
cast:
  modelValue: DateValue
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: [2022, 2, 3]
---
::

Verwenden Sie die `default-value` prop, um den Anfangswert festzulegen, wenn Sie den Zustand nicht steuern müssen.

::component-code
---
cast:
  defaultValue: DateValue
ignore:
  - defaultValue
external:
  - defaultValue
props:
  defaultValue: [2022, 2, 6]
---
::

::framework-only
#nuxt
:::note{to="/docs/getting-started/integrations/i18n/nuxt#locale"}
Diese Komponente verwendet das `@internationalized/date`-Paket für die lokalbezogene Formatierung. Das Datumsformat wird durch die `locale`-Prop der App-Komponente bestimmt.
:::

#vue
:::note{to="/docs/getting-started/integrations/i18n/vue#locale"}
Diese Komponente verwendet das `@internationalized/date`-Paket für die lokalbezogene Formatierung. Das Datumsformat wird durch die `locale`-Prop der App-Komponente bestimmt.
:::
::

### Type: badge{label="4.9+" class="align-text-top"} (englisch)

Verwenden Sie die `type`-prop, um zu ändern, was der Kalender auswählt. Standardmäßig `date`.

Wenn Sie `date` verwenden, klicken Sie auf die Überschrift, um von der Tagesansicht zu einer Monats-und Jahresansicht zu wechseln, um eine schnelle Navigation zu erhalten, und fahren Sie dann einen Drilldown fort, um ein Datum auszuwählen.

::component-code
---
cast:
  modelValue: DateValue
ignore:
  - type
  - modelValue
external:
  - modelValue
props:
  type: month
  modelValue: [2022, 2, 1]
---
::

Verwenden Sie `type="year"`, um eine eigenständige Jahresauswahl zu rendern.

::component-code
---
cast:
  modelValue: DateValue
ignore:
  - type
  - modelValue
external:
  - modelValue
props:
  type: year
  modelValue: [2022, 1, 1]
---
::

### Mehrfach

Verwenden Sie die `multiple`-Prop, um mehrere Auswahlen zu ermöglichen.

::component-code
---
prettier: true
cast:
  modelValue: DateValue[]
ignore:
  - multiple
  - modelValue
external:
  - modelValue
props:
  multiple: true
  modelValue: [[2022, 2, 4], [2022, 2, 6], [2022, 2, 8]]
---
::

### Range (englisch)

Verwenden Sie die `range`-prop, um einen Bereich von Daten auszuwählen.

::component-code
---
prettier: true
cast:
  modelValue: DateRange
ignore:
  - range
  - modelValue.start
  - modelValue.end
external:
  - modelValue
props:
  range: true
  modelValue:
    start: [2022, 2, 3]
    end: [2022, 2, 20]
---
::

Die `range`-Prop funktioniert auch mit `type="month"` und `type="year"`, sodass Sie einen Bereich von Monaten oder Jahren auswählen können.

::component-code
---
prettier: true
cast:
  modelValue: DateRange
ignore:
  - type
  - range
  - modelValue.start
  - modelValue.end
external:
  - modelValue
props:
  type: month
  range: true
  modelValue:
    start: [2022, 2, 1]
    end: [2022, 6, 1]
---
::

### Anzahl Monate

Verwenden Sie die `numberOfMonths`-Prop, um die Anzahl der Monate im Kalender zu ändern.

::component-code
---
props:
  numberOfMonths: 3
---
::

### Month-Steuerung

Verwenden Sie die `month-controls`-Prop, um die Monatskontrollen anzuzeigen. Standardmäßig ist `true`.

::component-code
---
props:
  monthControls: false
---
::

Verwenden Sie die Props `prev-month` und `next-month`, um die Monatsschaltflächen zu überschreiben.

::component-code
---
prettier: true
ignore:
  - prevMonth.color
  - prevMonth.variant
  - nextMonth.color
  - nextMonth.variant
props:
  prevMonth:
    color: primary
    variant: soft
  nextMonth:
    color: primary
    variant: soft
---
::

### Year Steuerelemente

Verwenden Sie die `year-controls`-Prop, um die Jahressteuerung anzuzeigen. Standardmäßig `true`.

::component-code
---
props:
  yearControls: false
---
::

Verwenden Sie die Props `prev-year` und `next-year`, um die Jahrestasten zu überschreiben.

::component-code
---
prettier: true
ignore:
  - prevYear.color
  - prevYear.variant
  - nextYear.color
  - nextYear.variant
props:
  prevYear:
    color: primary
    variant: soft
  nextYear:
    color: primary
    variant: soft
---
::

### Ansichtssteuerung: badge{label="4.9+" class="align-text-top"}

Verwenden Sie die `view-control`-Prop, um die Überschrift zu einer Schaltfläche zu machen, die zwischen der Tages-, Monats-und Jahresansicht wechselt.

::component-code
---
items:
  viewControl:
    - true
    - false
props:
  viewControl: false
---
::

Setzen Sie die `view-control`-Prop auf ein Objekt, um die Kopfzeilenschaltfläche zu überschreiben.

::component-code
---
prettier: true
ignore:
  - viewControl.color
  - viewControl.variant
props:
  viewControl:
    color: primary
    variant: soft
---
::

### Fixed Wochen

Verwenden Sie die `fixed-weeks`-Prop, um den Kalender mit festen Wochen anzuzeigen.

::component-code
---
props:
  fixedWeeks: false
---
::

### Week Zahlen: badge{label="4.4+" class="align-text-top"}

Verwenden Sie die `week-numbers`-Prop, um die Wochennummern im Kalender anzuzeigen.

::component-code
---
props:
  weekNumbers: true
  fixedWeeks: true
---
::

### Color Bearbeiten

Verwenden Sie die `color`-Prop, um die Farbe des Kalenders zu ändern.

::component-code
---
cast:
  defaultValue: DateRange
hide:
  - range
  - defaultValue
  - defaultValue.start
  - defaultValue.end
props:
  color: neutral
  range: true
  defaultValue:
    start: [2022, 2, 3]
    end: [2022, 2, 20]
---
::

### Variant Bearbeiten

Verwenden Sie die `variant`-Prop, um die Variante des Kalenders zu ändern.

::component-code
---
cast:
  defaultValue: DateRange
hide:
  - range
  - defaultValue
  - defaultValue.start
  - defaultValue.end
props:
  variant: subtle
  range: true
  defaultValue:
    start: [2022, 2, 3]
    end: [2022, 2, 20]
---
::

### Size

Verwenden Sie die `size`-Prop, um die Größe des Kalenders zu ändern.

::component-code
---
props:
  size: xl
---
::

### Disabled (nicht verfügbar)

Verwenden Sie die `disabled`-Prop, um den Kalender zu deaktivieren.

::component-code
---
props:
  disabled: true
---
::

## Examples [Bearbeiten]

### Mit Chip-Events

Verwenden Sie die [Chip](/docs/components/chip)-Komponente, um Ereignisse zu bestimmten Tagen hinzuzufügen.

::component-example
---
name: 'calendar-events-example'
---
::

### With disabled datumes (mit deaktivierten Daten)

Wenn Sie `type="month"` oder `type="year"` verwenden, verwenden Sie stattdessen die `is-month-disabled` oder `is-year-disabled` prop.

::component-example
---
name: 'calendar-disabled-dates-example'
---
::

### With unavailable dates (Daten nicht verfügbar)

Wenn Sie `type="month"` oder `type="year"` verwenden, verwenden Sie stattdessen die `is-month-unavailable` oder `is-year-unavailable` prop.

::component-example
---
name: 'calendar-unavailable-dates-example'
---
::

### Mit min/max Daten

Verwenden Sie die Props `min-value` und `max-value`, um die Datumsangaben zu begrenzen.

::component-example
---
name: 'calendar-min-max-dates-example'
---
::

### Mit anderen Kalendern

Sie können andere Kalender von `@internationalized/date` verwenden, um ein anderes Kalendersystem zu implementieren.

::component-example
---
name: 'calendar-other-system-example'
---
::

::note{to="https://react-spectrum.adobe.com/internationalized/date/Calendar.html#implementations"}
Sie können alle verfügbaren Kalender in den `@internationalized/date`-Dokumenten überprüfen.
::

### Mit externer Steuerung

Sie können den Kalender mit externen Steuerelementen steuern, indem Sie das im `v-model` übergebene Datum manipulieren.

::component-example
---
name: 'calendar-external-controls-example'
---
::

### Mit dem heutigen Datum

Verwenden Sie die `today`-Funktion von `@internationalized/date` mit `getLocalTimeZone`, um den Wert auf das aktuelle Datum zu setzen.

::component-example
---
name: 'calendar-today-example'
---
::

### As ein Datums-Picker

Verwenden Sie eine [Button](/docs/components/button) und eine [Popover](/docs/components/popover) Komponente, um eine Datumsauswahl zu erstellen.

::component-example
---
name: 'calendar-date-picker-example'
---
::

### Als Datumsbereich-Auswahl

Verwenden Sie eine [Button](/docs/components/button) und eine [Popover](/docs/components/popover) Komponente, um eine Datumsbereichsauswahl mit voreingestellten Bereichen zu erstellen.

::component-example
---
name: 'calendar-date-range-picker-example'
---
::

x323xAPI

### Props (nicht)

:component-props

### Slots Bearbeiten

:component-slots

### Emits Bearbeiten

:component-emits

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
