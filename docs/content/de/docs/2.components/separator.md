---
description: Trennt Inhalte horizontal oder vertikal.
category: element
keywords:
  - divider
  - hr
  - horizontal rule
links:
  - label: Separator
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/separator
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Separator.vue
---

@@@ph000@@Verwendung

Verwenden Sie die Separator-Komponente unverändert, um Inhalte zu trennen.

::component-code
---
Klasse: 'P-8'
---
::

@@ph001@@Orientierung

Verwenden Sie `orientation` prop, um die Ausrichtung des Separator. Defaults auf `horizontal` zu ändern.

::component-code
---
Ignoriert:
  @@004@Klasse
Klasse: 'P-8'
Props:
  Ausrichtung: Vertikal
  Klasse: H-48
---
::

@@ph005@@bmg-aufsatz

Verwenden Sie die `label` prop, um ein Etikett in der Mitte des Separators anzuzeigen.

::component-code
---
Klasse: 'P-8'
Props:
  Ausstellung: „ Hello World "
---
::

### Position: badge{label="4.8+" class="align-text-top"}

Verwenden Sie `position` prop, um die Position des Inhalts des Separators zu ändern. Defaults zu `center`.

::component-code
---
Ignoriert:
  @@11@Klasse
Klasse: 'P-8'
Props:
  Position: Beginn
  Ausstellung: "Hello World"
---
::

@@ph012@@gmail.de

Verwenden Sie das `icon` prop, um ein Symbol in der Mitte des Separators anzuzeigen.

::component-code
---
Klasse: 'P-8'
Props:
  Icon: 'i-simple-icons-nuxtdotjs'(I-einfach-Ikonen-Nuxtdotjs)
---
::

@@@@@Avatar@Avatar@@@Avatar@Avatar@@@Avatar@@@Avatar@@@Avatar@@@Avatar@Avatar@@@Avatar@@Avatar@@@Avatar@@@Avatar@@Avatar@@@Avatar@@@Avatar@@@Avatar@@@Avatar@@Avatar@Avatar@Avatar@@@Avatar@@@Avatar@@@Avatar@@@@@@@@@Avatar@@@@@@@@@Avatar@@@@@@@Avatar@@@@@@@@@@@@@Avatar@@@@@@@@@@@@@@Avatar@@@@@@@@@@@@@@@@@@@@@Avatarar@@@@@@@@@@@@@@@@@@@@@@@

Verwenden Sie die `avatar` prop, um einen Avatar in der Mitte des Separators anzuzeigen.

::component-code
---
Schöner: wahr
Klasse: 'P-8'
Ignoriert:
  - avatar.loading (nicht verfügbar)
Props:
  Avatare sind:
    src: 'https://github.com/nuxt.png'(auf Englisch)
    Aufladung: Lazy
---
::

@@@@@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17

Verwenden Sie `color` prop, um die Farbe des Separators. Defaults auf `neutral` zu ändern.

::component-code
---
Klasse: 'P-8'
Props:
  Farbe: Primär
  Typ: solide
---
::

@@ph020@@gmail.de

Verwenden Sie `type` prop, um den Typ des Separator. Defaults auf `solid` zu ändern.

::component-code
---
Klasse: 'P-8'
Props:
  Typ: gestrichelt
---
::

@@ph023 @ Größe

Verwenden Sie `size` prop, um die Größe des Separator. Defaults auf `xs` zu ändern.

::component-code
---
Klasse: 'P-8'
Props:
  Größe: lg
---
::

## api

@@@ph027@@Props

Komponenten-Props

@@ph028@@slots

Die Komponenten-Slots

@@ph029@gmail.de

Das Komponenten-Theme

@@ph030@@changelog @@@ changelog @@@ changelog

Das Component-Changelog
