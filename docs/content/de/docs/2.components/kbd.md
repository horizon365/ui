---
description: Ein kbd-Element, um eine Tastaturtaste anzuzeigen.
category: element
keywords:
  - keyboard shortcut
  - hotkey
  - keybinding
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Kbd.vue
---

@@@ph000@@Verwendung

Verwenden Sie den Standard-Slot, um den Wert des Kbd festzulegen.

::component-code
---
Slots auf:
  Defaultwert: K
---
::

@@ph001@@Wert

Verwenden Sie `value` prop, um den Wert des Kbd festzulegen.

::component-code
---
Props:
  Wert: k
---
::

Sie können spezielle Schlüssel an die `value` prop übergeben, die durch die [`useKbd`](https://github.com/nuxt/ui/blob/v4/src/runtime/composables/useKbd.ts) composable. For example, the `meta` key displays as `⌘` auf macOS und `Ctrl` auf anderen Plattformen.

::component-code
---
Props:
  Wert: Meta
Items:
  Wert:
    @@@@@@12@12
    @@ph013@@win00000
    @@ph014@befehlsempfänger
    @@ph015@schichten.de
    @@ph016@ctrl
    @@ph017@@option
    @@@@@@18@18
    @@ph019@@Einsteiger
    @@ph020@@löschen
    @@ph021@@backspace
    @@ph022@ausweichen
    @@ph023@@tab
    @@ph024@gmails.de
    @@ph025@@arrives.de
    @@ph026@arrives.de
    @@ph027@@arschlochlochloch.de
    @@ph028@@arrowleft (nicht bekannt)
    @@ph029@@peup
    @@ph030@pagedown (nicht)
    @@ph031@home@@@home@@@home@@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@home@h
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Ende
---
::

@@@@@333@33@33@33@33@33@@33@33@@33@@33@@@33@@@@33@@@@33@3@@@@33@@@@33@3@@@@33@3@@3@@@33@3@@@@33@3@@3@3@3@@@33@@@@@333@@3@@@33@3@@@@33@@@@33@@3@@@@@333@@@@3@@@@@@333@@@@@@333@@@@@@@@@@@@@3333@@@@@@@@@@@@@@@@@@333333@@@@@@@@@@@@@@@@@@@@@@@@33333333@@

Verwenden Sie die `color` prop, um die Farbe des Kbd zu ändern.

::component-code
---
Props:
  Farbe: neutral
Slots auf:
  Defaultwert: K
---
::

@@ph035@@Variantentabelle

Verwenden Sie `variant` prop, um die Variante des Kbd zu ändern.

::component-code
---
Props:
  Farbe: neutral
  Variante: solide
Slots auf:
  Defaultwert: K
---
::

@@ph037 @ Größe

Verwenden Sie `size` prop, um die Größe des Kbd zu ändern.

::component-code
---
Props:
  Größe: lg
Slots auf:
  Defaultwert: K
---
::

@@ph039@@Beispiele

`class` prop

Verwenden Sie `class` prop, um die Grundstile des Badges zu überschreiben.

::component-code
---
Props:
  Klasse: 'font-bold rounded-full'(font-bold gerunded-voll)
  Variante: subtil
Die Slots:
  Defaultwert: K
---
::

## api

@@ph044@@@gmail.de

Komponenten Props

@@ph045@gmail.de

Die Komponenten-Slots

@@ph046@@gmail.de

Das Komponenten-Theme

@@ph047@@changelog @ changelog

Das Component-Changelog
