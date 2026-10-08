---
title: Inputnummer
description: Eine Eingabe für numerische Werte mit einem anpassbaren Bereich.
category: form
keywords:
  - number field
  - spinbutton
  - counter
links:
  - label: Numberfeld
    icon: i-custom-reka-ui
    to: https://www.reka-ui.com/docs/components/number-field
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputNumber.vue
---

@@@ph000@Verwendung

Verwenden Sie die `v-model`-Direktive, um den Wert der Eingabenummer zu steuern.

::component-code
---
Ignoriert:
  - modellWert
Außen:
  - modellWert
Props:
  Modellwert: 5
---
::

Verwenden Sie `default-value` prop, um den Anfangswert festzulegen, wenn Sie den Zustand nicht steuern müssen.

::component-code
---
Ignoriert:
  - defaultValue
Props:
  Defaultwert: 5
---
::

::note
Diese Komponente basiert auf dem Paket [`@internationalized/number`](https://react-spectrum.adobe.com/internationalized/number/index.html), das Dienstprogramme zum Formatieren und Parsen von Zahlen in Gebietsschemata und Nummerierungssystemen bereitstellt.
::

@@ph011@@min/max

Verwenden Sie die Props `min` und `max`, um die Mindest-und Höchstwerte der Eingabezahl festzulegen.

::component-code
---
Ignoriert:
  - modellWert
Außen:
  - modellWert
Props:
  Modellwert: 5
  von: 0
  max: 10 Jahre
---
::

@@ph016@Schritt

Verwenden Sie `step` prop, um den Schrittwert der InputNumber festzulegen.

::component-code
---
Ignoriert:
  - modellWert
Außen:
  - modellWert
Props:
  Modellgröße: 5
  Schritt: 2
---
::

@@ph020@@Orientierung

Verwenden Sie `orientation` prop, um die Ausrichtung der InputNumber zu ändern.

::component-code
---
Ignoriert:
  - modellWert
Außen:
  - modellWert
Props:
  Modellgröße: 5
  Ausrichtung: Vertikal
---
::

### Platzhalter

Verwenden Sie `placeholder` prop, um einen Platzhaltertext zu setzen.

::component-code
---
Props:
  Platzhalter: 'Geben Sie eine Nummer ein'
---
::

@@ph026@@gmail.de

Verwenden Sie `color` prop, um die Ringfarbe zu ändern, wenn die InputNumber fokussiert ist.

::component-code
---
Ignoriert:
  - modellWert
Außen:
  - modellWert
Props:
  Modellwert: 5
  Farbe: neutral
  Highlight: Wahr
---
::

@@ph030@@Variantentabelle

Verwenden Sie `variant` prop, um die Variante der InputNumber zu ändern.

::component-code
---
Ignoriert:
  - modellWert
Außen:
  - modellWert
Props:
  Modellgröße: 5
  Variante: subtil
  Farbe: neutral
  Markiert: false
---
::

@@ph034@@Größe

Verwenden Sie `size` prop, um die Größe der InputNumber zu ändern.

::component-code
---
Ignoriert:
  - modellWert
Außen:
  - modellWert
Props:
  Modellwert: 5
  Größe: XL
---
::

@@ph038@disabled @ disabled

Verwenden Sie `disabled` prop, um die InputNumber zu deaktivieren.

::component-code
---
Ignoriert:
  - modellWert
Außen:
  - modellWert
Props:
  Modellwert: 5
  Behindert: Wahr
---
::

### increment/decrement/

Verwenden Sie die `increment` und `decrement` props, um die Inkrement-und Dekrementschaltflächen mit beliebigen [Button](/docs/components/button) props. Defaults auf `{ variant: 'link' }`{lang="ts-type"}.

::component-code
---
Schöner: wahr
Ignoriert:
  - modellWert
  - increment.size
  - increment.color @ increment.color @increment.color @ increment.color
  @@ph054@inkrement.variant
  - decrement.size
  - decrement.color
  @@ph057@decrement.variant
Außen:
  - modellWert
Props:
  Modellgröße: 5
  Erhöhung:
    Farbe: neutral
    Variante: solide
    Größe: XS
  Dekrement:
    Farbe: neutral
    Variante: solide
    Größe: XS
---
::

### Inkrement/Decrement Icons (auf Englisch)

Verwenden Sie die Props `increment-icon` und `decrement-icon`, um die Schaltflächen [Icon](/docs/components/icon). Standardmäßig auf `i-lucide-plus`/`i-lucide-minus`.

::component-code
---
Schöner: wahr
Ignoriert:
  - modellWert
Außen:
  - modellWert
Props:
  Modellwert: 5
  incrementIcon: 'i-lucide-arrow-right'(I-lucide-arrow-rechts)
  decrementIcon: 'i-lucide-arrow-left'(I-lucide-arrow-left) auf Englisch
---
::

@@ph070@@Beispiele

### Mit Dezimalformat

Verwenden Sie `format-options` prop, um das Format des Werts anzupassen.

::component-example
---
Name: 'input-number-decimal-example'(Eingabe-Zahl-Dezimal-Beispiel)
---
::

### Mit Prozentformat

Verwenden Sie `format-options` prop mit `style: 'percent'`, um das Format des Werts anzupassen.

::component-example
---
name: 'input-number-percentage-example'(Eingabe-Zahl-Prozent-Beispiel)
---
::

### Mit Währungsformat

Verwenden Sie `format-options` prop mit `style: 'currency'`, um das Format des Werts anzupassen.

::component-example
---
name: 'input-number-currency-example'(Eingabe-Nummer-Währung-Beispiel)
---
::

### ohne Buttons

Sie können die Requisiten `increment` und `decrement` verwenden, um die Sichtbarkeit der Schaltflächen zu steuern.

::component-example
---
name: 'input-number-without-buttons-example'(Eingabe-Nummer-ohne-Schaltflächen-Beispiel)
---
::

### Innerhalb eines FormFeldes

Sie können die InputNumber innerhalb einer [FormField](/docs/components/form-field) Komponente verwenden, um ein Etikett, einen Hilfetext, einen erforderlichen Indikator usw. anzuzeigen.

::component-example
---
name: 'input-number-form-field-example'(Eingabe-Nummer-Form-Feld-Beispiel)
---
::

### Mit Slots

Verwenden Sie die `#increment` und `#decrement` Slots, um die Schaltflächen anzupassen.

::component-example
---
name: 'input-number-slots-example'(Eingabe-Nummer-Slots-Beispiel)
---
::

@@900@bpb

@@ph091@@@props

Komponenten Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<input>` HTML-Attribute.
::

@@ph093@gmail.de

Die Komponenten-Slots

@@ph094@@emits

Komponenten emittieren

@@ph095@@@expose

Beim Zugriff auf die Komponente über eine Template-Referenz können Sie Folgendes verwenden:

| Vorname| Typen|
| ---- | ---- |
| @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@|{lang="ts-type"}|

@@ph100@gmail.de

Das Komponenten-Theme

@@ph101@@changelog @@@ changelog @@@ changelog @ changelog @ changelog @ changelog

Das Component-Changelog
