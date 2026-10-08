---
description: Ein kurzer Text, der einen Status oder eine Kategorie darstellt.
category: element
keywords:
  - tag
  - pill
  - label
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Badge.vue
---

@@@ph000@Verwendung

Verwenden Sie den Standardslot, um das Etikett des Badges festzulegen.

::component-code
---
Die Slots:
  Markiert: Badge
---
::

@@ph001@@@bpg-bpg.de

Verwenden Sie die `label` prop, um das Etikett des Badges festzulegen.

::component-code
---
Props:
  Bezeichnung: Badge
---
::

@@003@Farbe

Verwenden Sie die `color` prop, um die Farbe des Badges zu ändern.

::component-code
---
Props:
  Farbe: neutral
Die Slots:
  Schlagwörter: Badge
---
::

@@ph005@@Variantentyp

Verwenden Sie `variant` props, um die Variante des Badges zu ändern.

::component-code
---
Props:
  Farbe: neutral
  Variante: Übersicht
Die Slots:
  Markiert: Badge
---
::

@@007@000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Verwenden Sie die `size` prop, um die Größe des Badges zu ändern.

::component-code
---
Props:
  Größe: XL
Slots auf:
  Schlagwörter: Badge
---
::

@@ph009@@gmail.de

Verwenden Sie die `icon` prop, um ein [Icon](/docs/components/icon) innerhalb des Badge anzuzeigen.

::component-code
---
Props:
  Bezeichnung: i-Lucide-Rocket
  Größe: MD
  Farbe: Primary
  Variante: solide
Die Slots:
  Schlagwörter: Badge
---
::

Verwenden Sie `leading` und `trailing` props, um die Symbolposition festzulegen, oder die `leading-icon` und `trailing-icon` props, um für jede Position ein anderes Symbol festzulegen.

::component-code
---
Props:
  trailingIcon: i-lucide-arrow-right (englisch)
  Größe: md
Die Slots:
  Schlagwörter: Badge
---
::

@@@@@@@avatar19@avatar19@@avatar19@@avatar19@@avatar19@@avatar19@@avatar19@@avatar19@@avatar19@avatar19@avatar19@avatar@avatarant@avataratar@avataratarant19@avatarantgardium@avatarantgardium@avatardium@avatardium@avatardium@avatardium@avatardium@avatardium@avatardium@avatardium@avatardium@avatardium@avatardium@avatardium@avatardium@avatardium@avatardium@avatardium@avatardium@avatardium@avatardium@avatardium@avatardium@avatardi

Verwenden Sie die `avatar` prop, um ein [Avatar](/docs/components/avatar) innerhalb des Badges zu zeigen.

::component-code
---
Schöner: wahr
Ignoriert:
  - avatar.loading (nicht verfügbar)
Props:
  Avatare sind:
    src: 'https://github.com/nuxt.png'(auf Englisch)
    Aufladung: Lazy
  Größe: md
  Farbe: neutral
  Variante: Übersicht
Slots auf:
  Default:|

    Badges
---
::

## Beispiele

`class` prop

Verwenden Sie `class` prop, um die Grundstile des Badges zu überschreiben.

::component-code
---
Props:
  Klasse: 'font-bold rounded-full'(font-bold gerunded-voll)
Slots auf:
  Schlagwörter: Badge
---
::

@@@@300@@bpb

@@ph031@@gmail.de

Komponenten Props

@@ph032@gmail.de

Die Komponenten-Slots

@@ph033@gmail.de

Das Komponenten-Theme

@@ph034@@changelog @@@ changelog @@@ changelog @@ changelog @ changelog @ changelog

Das Component-Changelog
