---
title: PageCard
description: 'Eine vorgefertigte Kartenkomponente, die einen Titel, eine Beschreibung und einen optionalen Link anzeigt.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageCard.vue
---

@@@ph000@@Verwendung

Die PageCard-Komponente bietet eine flexible Möglichkeit, Inhalte auf einer Karte mit einer Illustration im Standardsteckplatz anzuzeigen.

::code-preview

::u-page-card
---
Titel: "Tailwind CSS"
Beschreibung: 'Nuxt UI integriert sich mit dem neuesten Tailwind CSS und bringt erhebliche Verbesserungen.'
Icon: 'i-simple-icons-tailwindcss'(I-Einfaches-Ikonen-Tailwindcss)
Klasse: W-96
---

: img@@ph001
::

::

::tip
Verwenden Sie die [PageGrid](/docs/components/page-grid),[PageColumns](/docs/components/page-columns) oder [PageList](/docs/components/page-list) Komponenten, um mehrere PageCards anzuzeigen,
::

@@ph014@title @ Übersetzung

Verwenden Sie die `title` prop, um den Titel der Karte festzulegen.

::component-code
---
Hide:
  @@16@Klasse
Props:
  Titel: Tailwind CSS
  Klasse: W-96
---
::

@@ph017@@Beschreibung

Verwenden Sie `description` prop, um die Beschreibung der Karte festzulegen.

::component-code
---
Schöner: wahr
Hide:
  @@ph019@class
Ignoriert:
  @@ph020@@title
Props:
  Titel: "Tailwind CSS"
  Beschreibung: 'Nuxt UI integriert sich mit dem neuesten Tailwind CSS und bringt erhebliche Verbesserungen.'
  Klasse: W-96
---
::

@@ph021@@@Icon-Seite

Verwenden Sie `icon` prop, um das Symbol der Karte einzustellen.

::component-code
---
Schöner: wahr
Hide:
  @@ph023@class
Ignoriert:
  @@ph024@title
  @@ph025@beschreibung
Props:
  Titel: "Tailwind CSS"
  Beschreibung: 'Nuxt UI integriert sich mit dem neuesten Tailwind CSS und bringt erhebliche Verbesserungen.'
  Icon: 'i-simple-icons-tailwindcss'(I-einfach-ikonen-tailwindcss)
  Klasse: W-96
---
::

@@ph026@@Link

Sie können jede Eigenschaft von der [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) Komponente wie `to`,`target`,`rel`, etc. übergeben.

::component-code
---
Schöner: wahr
Hide:
  @@35@Klasse
Ignoriert:
  @@ph036@title
  @@ph037@beschreibung
  @@@@@@@@@@icon______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
  @@ph039@@zielgerichteter
Props:
  Titel: Tailwind CSS
  Beschreibung: 'Nuxt UI integriert sich mit dem neuesten Tailwind CSS und bringt erhebliche Verbesserungen.'
  Icon: 'i-simple-icons-tailwindcss'(I-einfach-ikonen-tailwindcss)
  zu: 'https://tailwindcss.com/blog/tailwindcss-v4'
  Ziel: _blank
  Klasse: W-96
---
::

@@ph040@@@Variantentyp

Verwenden Sie die `variant` prop, um den Stil der Karte zu ändern.

::component-code
---
Schöner: wahr
Hide:
  @@ph042@gmail.de
Ignoriert:
  @@ph043@title
  @@ph044@beschreibung
  @@ph045@@gmail.de
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@###############################################################################################################################################################################
  @@ph047@@zielgruppe
Props:
  Titel: Tailwind CSS
  Beschreibung: 'Nuxt UI integriert sich mit dem neuesten Tailwind CSS und bringt erhebliche Verbesserungen.'
  Icon: 'i-simple-icons-tailwindcss'(I-einfach-ikonen-tailwindcss)
  zu: 'https://tailwindcss.com/blog/tailwindcss-v4'
  Ziel: _blank
  Die Variante: Soft
  Klasse: W-96
---
::

::tip
Sie können die Klasse `light` oder `dark` auf den Slot `links` anwenden, wenn Sie die Variante `solid` verwenden, um die Farben umzukehren.
::

@@ph052@@Orientierung

Verwenden Sie `orientation` prop, um die Ausrichtung mit dem Standardslot zu ändern.

::component-code
---
Schöner: wahr
Ignoriert:
  @@555@Titel
  @@@ph056@beschreibung
  @@ph057@@gmail.de
Props:
  Titel: Tailwind CSS
  Beschreibung: 'Nuxt UI integriert sich mit dem neuesten Tailwind CSS und bringt erhebliche Verbesserungen.'
  Icon: 'i-simple-icons-tailwindcss'(I-einfach-ikonen-tailwindcss)
  Ausrichtung: horizontal
Die Slots:
  Default:|

    @@@@@@@58
---

: img@@ph059
::

@@ph060@umgekehrter

Verwenden Sie `reverse` prop, um die Ausrichtung des Standard-Steckplatzes umzukehren.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph062@@title
  @@ph063@beschreibung
  @@ph064@@gmail.de
Props:
  Titel: "Tailwind CSS"
  Beschreibung: 'Nuxt UI integriert sich mit dem neuesten Tailwind CSS und bringt erhebliche Verbesserungen.'
  Icon: 'i-simple-icons-tailwindcss'(I-Einfaches-Ikonen-Tailwindcss)
  Ausrichtung: horizontal
  umgekehrt: wahr
Die Slots:
  Default:|

    @@@@@@@@@@@065
---

: img@@ph066
::

### Highlight

Verwenden Sie die Props `highlight` und `highlight-color`, um einen hervorgehobenen Rahmen um die Karte anzuzeigen.

::component-code
---
Schöner: wahr
Hide:
  @@@@@@@class070@class@class070@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@classclass@classclassclass@classclassclass@class@class@class@classclassclassclassclassclass@classclass
Ignoriert:
  @@ph071@title
  @@ph072@beschreibung
  @@@@@@@@@@@icon.de
  @@ph074@orientierung
Props:
  Titel: Tailwind CSS
  Beschreibung: 'Nuxt UI integriert sich mit dem neuesten Tailwind CSS und bringt erhebliche Verbesserungen.'
  Icon: 'i-simple-icons-tailwindcss'(I-einfach-ikonen-tailwindcss)
  Ausrichtung: horizontal
  Highlight: Wahr
  highlightFarbe: 'primär'
Die Slots:
  Default:|

    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@075
---

: img{src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

### Spotlight

Verwenden Sie die Props `spotlight` und `spotlight-color`, um einen Spotlight-Effekt anzuzeigen, der dem Mauszeiger folgt und die Ränder beim Schweben hervorhebt.

::note
Der Spotlight-Effekt übernimmt die Hover-Effekte, wenn Sie eine `to` prop. Es ist am besten, es mit der `outline` Variante zu verwenden.
::

::component-code
---
Schöner: wahr
Hide:
  @@@@@@@@@@@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@classclass@classclassclass@class@class@class@class@class@class
Ignoriert:
  @@@@@83@title
  @@ph084@beschreibung
  @@@@@@@@@@@@icon@@@ph085@@@icon
  @@@@@@ph086@@orientierung
Props:
  Titel: Tailwind CSS
  Beschreibung: 'Nuxt UI integriert sich mit dem neuesten Tailwind CSS und bringt erhebliche Verbesserungen.'
  Icon: 'i-simple-icons-tailwindcss'(I-einfach-ikonen-tailwindcss)
  Ausrichtung: horizontal
  Schlagwörter: true
  spotlightFarbe: 'primär'
Die Slots:
  Default:|

    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@087
---

: img{src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

::tip
Sie können die Farbe und Größe auch mit den CSS-Variablen `--spotlight-color` und `--spotlight-size` anpassen:

```vue
<template>
  <UPageCard spotlight class="[--spotlight-color:var(--ui-error)] [--spotlight-size:200px]" />
</template>
```
::

@@ph096@@@Beispiele

### Als ein Zeugnis

Verwenden Sie die Komponente [User](/docs/components/user) im Schlitz `header` oder `footer`, um die Karte wie ein Zeugnis aussehen zu lassen.

::component-example
---
name: 'page-card-testimonial-example'(Seiten-Karte-Beispiel-Zeugnis)
---
::

::tip{to="/docs/components/page-columns"}
Sie können die Komponente `PageColumns` verwenden, um mehrere PageCards in einem mehrspaltigen Layout anzuzeigen.
::

@@105@bpb

@@@@@@@@106@@props

Komponenten Props

### Spielautomaten

Die Komponenten-Slots

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@################################################################################################################################################################################################

Das Komponenten-Theme

@@ph109@@changelog (auf Englisch)

Das Component-Changelog
