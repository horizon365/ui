---
title: Inputzeit
description: 'Ein Input zur Auswahl einer Zeit.'
category: form
keywords:
  - time picker
  - clock
  - hour
links:
  - label: Timefield Bearbeiten
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/time-field
  - label: Zeitfeld
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/time-range-field
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputTime.vue
---

@@@ph000@Verwendung

Verwenden Sie die `v-model`-Direktive, um die ausgewählte Zeit zu steuern.

::component-code
---
Cast auf:
  Modellbezeichnung: TimeValue
Ignoriert:
  - modellWert
Außen:
  - modellWert
Props:
  Modellwert: [12, 30, 0]
---
::

Verwenden Sie `default-value` prop, um den Anfangswert festzulegen, wenn Sie den Zustand nicht steuern müssen.

::component-code
---
Cast auf:
  DefaultValue: Zeitwert
Ignoriert:
  - defaultValue
Außen:
  - defaultValue
Props:
  DefaultValue: [9, 45, 0](Fehlerwert: [9, 45, 0])
---
::

::framework-only
#nuxt sein
:::note{to="/docs/getting-started/integrations/i18n/nuxt#locale"}
Diese Komponente verwendet das Paket `@internationalized/date` für die lokalbezogene Formatierung. Das Zeitformat wird durch die `locale` prop der App-Komponente bestimmt.
:::

#Ansehen
:::note{to="/docs/getting-started/integrations/i18n/vue#locale"}
Diese Komponente verwendet das Paket `@internationalized/date` für die lokalbezogene Formatierung. Das Zeitformat wird durch das `locale` prop der App-Komponente bestimmt.
:::
::

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@####################################################################################################################################################

Verwenden Sie `range` prop, um die Zeitbereichsauswahl mit Start-und Endzeit zu aktivieren.

::component-code
---
Schöner: wahr
Cast auf:
  Modellwert: TimeRangeValue
Ignoriert:
  @@ph013@@gmail.de
  - modellValue.start
  - modellValue.end
Außen:
  - modellWert
Props:
  Range: wahr
  Modellwert:
    Beginn: [9, 0, 0]
    Ende: [17, 30, 0]
---
::

### Stundenzyklus

Verwenden Sie `hour-cycle` prop, um den Stundenzyklus der InputTime. Defaults auf `12` zu ändern.

::component-code
---
Cast auf:
  DefaultValue: Zeitwert
Ignoriert:
  - hourCycle
  - defaultValue
Außen:
  - defaultValue
Props:
  Stundenzahl: 24
  Standardwert: [16, 30, 0]
---
::

@@ph023@gmail.de

Verwenden Sie `color` prop, um die Farbe der InputTime zu ändern.

::component-code
---
Props:
  Farbe: neutral
  Highlight: Wahr
---
::

::note
`highlight` prop wird hier verwendet, um den Fokuszustand anzuzeigen. Es wird intern verwendet, wenn ein Validierungsfehler auftritt.
::

@@ph026@@@Variantentyp

Verwenden Sie `variant` prop, um die Variante der InputTime zu ändern.

::component-code
---
Props:
  Variante: subtil
---
::

@@ph028 @ Größe

Verwenden Sie `size` prop, um die Größe der InputTime zu ändern.

::component-code
---
Props:
  Größe: XL
---
::

@@ph030@@gmail.de

Verwenden Sie die `icon` prop, um eine [Icon](/docs/components/icon) innerhalb der InputTime anzuzeigen.

::component-code
---
Props:
  I-Lucide-Clock (englisch)
---
::

::note
Verwenden Sie `leading` und `trailing` props, um die Symbolposition festzulegen, oder die `leading-icon` und `trailing-icon` props, um für jede Position ein anderes Symbol festzulegen.
::

@@ph040@@Trennung-Icon

Verwenden Sie `separator-icon` prop, um die [Icon](/docs/components/icon) des Bereichsabscheiders zu ändern.

::component-code
---
Ignoriert:
  @@ph047@@gmail.com
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

@@@@@@avatar2015 @ avatar2015 @@avatar2015 @ avatar2015 @@avatar2015 @ avatar2015 @@avatar2015

Verwenden Sie die `avatar` prop, um eine [Avatar](/docs/components/avatar) innerhalb der InputTime anzuzeigen.

::component-code
---
Schöner: wahr
Ignoriert:
  - avatar.loading (auf Englisch)
Props:
  Avatare sind:
    src: 'https://github.com/vuejs.png'(auf Englisch)
    Aufladung: Lazy
  Größe: MD
  Variante: Übersicht
---
::

@@ph059@@disabled

Verwenden Sie `disabled` prop, um die InputTime zu deaktivieren.

::component-code
---
Props:
  Behindert: Wahr
---
::

## Beispiele

### Innerhalb eines FormFeldes

Sie können die InputTime innerhalb einer [FormField](/docs/components/form-field) Komponente verwenden, um ein Etikett, einen Hilfetext, einen erforderlichen Indikator usw. anzuzeigen.

::component-example
---
Name: 'input-time-form-field-example'(Eingabe-Zeit-Form-Feld-Beispiel)
---
::

## api

@@@@@@@@@@@@ph068@@props

Komponenten-Props

### Slots

Die Komponenten-Slots

@@@ph070@@emits

Komponenten emittieren

@@@@@@@@@ph071@theme

Das Komponenten-Theme

@@ph072@@changelog @@changelog

Das Component-Changelog
