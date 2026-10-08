---
description: Eine Eingabe zum Auswählen eines numerischen Werts innerhalb eines Bereichs.
category: form
keywords:
  - range slider
links:
  - label: Der Slider
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/slider
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Slider.vue
---

@@@ph000@@Verwendung

Verwenden Sie die `v-model` Direktive, um den Wert des Sliders zu steuern.

::component-code
---
Außen:
  - modellWert
Props:
  Modellwert: 50
---
::

Verwenden Sie `default-value` prop, um den Anfangswert festzulegen, wenn Sie den Zustand nicht steuern müssen.

::component-code
---
Ignoriert:
  - defaultValue
Props:
  Default-Wert: 50
---
::

::tip
Verwenden Sie `aria-label` oder `aria-labelledby`, um einen einzelnen Daumen-Slider zu benennen, sie werden an den Daumen weitergeleitet, der das Element mit der `slider`-Rolle ist.

Die Daumen eines Sliders mit mehreren Daumen werden nach ihrer Position benannt, so dass sie auseinandergehalten werden können,`Minimum`/`Maximum` für zwei Daumen und `Value n of m` für drei oder mehr. Diese Namen werden beibehalten, und ein `aria-label` nennt den Slider als Ganzes durch eine `group` Rolle auf der Wurzel, anstatt auf jedem Daumen wiederholt zu werden.
::

@@ph013@@min/max

Verwenden Sie die Props `min` und `max`, um die Mindest-und Höchstwerte des Slider. Defaults auf `0` und `100` einzustellen.

::component-code
---
Ignoriert:
  - defaultValue
Props:
  von: 0
  max: 50 Stück
  Default-Wert: 50
---
::

@@ph019@@Schritt

Verwenden Sie `step` prop, um den Inkrementwert des Slider. Defaults auf `1` zu setzen.

::component-code
---
Ignoriert:
  - defaultValue
Props:
  Schritt: 10
  Default-Wert: 50
---
::

@@ph023@mehrfache

Verwenden Sie die `v-model`-Direktive oder die `default-value` prop mit einem Array von Werten, um einen Bereichs-Slider zu erstellen.

::component-code
---
Ignoriert:
  - modellWert
Außen:
  - modellWert
Props:
  Modellwert: [25, 75]
---
::

Verwenden Sie die `min-steps-between-thumbs` prop, um den Mindestabstand zwischen den Daumen zu begrenzen.

::component-code
---
Ignoriert:
  - modellWert
Außen:
  - modellWert
Props:
  Modellwert: [25, 50, 75]
  Unterschenkel-Daumen: 10
---
::

@@ph031@@Orientierung

Verwenden Sie `orientation` prop, um die Ausrichtung des Slider. Defaults auf `horizontal` zu ändern.

::component-code
---
Ignoriert:
  - defaultValue
  @@35@Klasse
Props:
  Ausrichtung: Vertikal
  Default-Wert: 50
  Klasse: H-48
---
::

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@##############################################################################################################################################################################################

Verwenden Sie die `color` prop, um die Farbe des Sliders zu ändern.

::component-code
---
Ignoriert:
  - defaultValue
Props:
  Farbe: neutral
  Default-Wert: 50
---
::

@@ph039 @ Größe

Verwenden Sie die `size` prop, um die Größe des Sliders zu ändern.

::component-code
---
Ignoriert:
  - defaultValue
Props:
  Größe: XL
  Default-Wert: 50
---
::

@@ph042@@@tooltip

Verwenden Sie die `tooltip` prop, um ein [Tooltip](/docs/components/tooltip) um die Slider-Daumen mit dem aktuellen Wert anzuzeigen. Sie können es auf `true` für das Standardverhalten einstellen oder ein Objekt übergeben, um es mit einer beliebigen Eigenschaft aus der Komponente [Tooltip](/docs/components/tooltip#props) anzupassen.

::component-code
---
Ignoriert:
  - defaultValue (nicht vorhanden)
  @@ph054@@tooltip
Props:
  Default-Wert: 50
  Tooltip: Richtig
---
::

@@ph055@@disabled @@ nicht vorhanden

Verwenden Sie die `disabled` prop, um den Slider zu deaktivieren.

::component-code
---
Ignoriert:
  - defaultValue
Props:
  Behindert: Wahr
  Default-Wert: 50
---
::

@@@@@@58@inverted

Verwenden Sie die `inverted` prop, um den Slider visuell umzukehren.

::component-code
---
Ignoriert:
  - defaultValue
Props:
  invertiert: wahr
  Default-Wert: 25
---
::

## api

### Props

Komponenten-Props

### Emits

Komponenten emittieren

@@ph064@@theme@@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@@theme@theme@theme@theme@@theme@@theme@@theme@theme@theme@theme@@theme@theme@theme@@theme@theme@theme@theme

Das Komponenten-Theme

@@ph065@@changelog @@changelog

Das Component-Changelog
