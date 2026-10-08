---
title: PageFeature
description: 'Eine Komponente, um die wichtigsten Funktionen Ihrer Anwendung zu präsentieren.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageFeature.vue
---

@@@ph000@@Verwendung

Die PageFeature-Komponente wird von der Komponente [PageSection](/docs/components/page-section) verwendet, um [features](/docs/components/page-section#features) anzuzeigen.

@@ph009@title @ Übersetzung

Verwenden Sie `title` prop, um den Titel des Features festzulegen.

::component-code
---
Hide:
  @@11@Klasse
Props:
  Titel: „ Thema "
  Klasse: W-96
---
::

@@ph012 @ Beschreibung

Verwenden Sie `description` prop, um die Beschreibung der Funktion festzulegen.

::component-code
---
Schöner: wahr
Hide:
  @@14@Klasse
Ignoriert:
  @@ph015@title
Props:
  Titel: "Das Thema"
  Beschreibung: 'Passen Sie Nuxt UI mit Ihren eigenen Farben, Schriftarten und mehr.'
  Klasse: W-96
---
::

@@ph016@@@Icon-Seite

Verwenden Sie `icon` prop, um das Symbol der Funktion festzulegen.

::component-code
---
Schöner: wahr
Hide:
  @@@@@18@18@18
Ignoriert:
  @@ph019@title
  @@ph020@beschreibung
Props:
  Titel: „ Thema "
  Beschreibung: 'Passen Sie Nuxt UI mit Ihren eigenen Farben, Schriftarten und mehr.'
  I-Lucide-Swatch-Book (englisch)
  Klasse: W-96
---
::

@@ph021@@Link

Sie können jede Eigenschaft von der [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) Komponente wie `to`,`target`,`rel`, etc. übergeben.

::component-code
---
Schöner: wahr
Hide:
  @30@Klasse
Ignoriert:
  @@ph031@title
  @@ph032@beschreibung
  @@ph033@@gmail.de
  @@ph034@@zielgerichteter
Props:
  Titel: "Das Thema"
  Beschreibung: 'Passen Sie Nuxt UI mit Ihren eigenen Farben, Schriftarten und mehr.'
  I-Lucide-Swatch-Book (englisch)
  zu: '/docs/getting-started/theme/design-system'
  Ziel: _blank
  Klasse: W-96
---
::

@@ph035@@Orientierung

Verwenden Sie `orientation` prop, um die Ausrichtung des Features zu ändern. Standardmäßig auf `horizontal`.

::component-code
---
Schöner: wahr
Hide:
  @@@@@@38@38@38@38@38@38@38@38@38@38@38@38@38@38@38@38@@38@38@@38@38@@38@@38@@38@@38@@38@@38@@38@@38@@38@38@@38@@38@38@@38@@@38@@@38@@@38@@@38@@@38@@@38@@@@@38@@@@@@38@@@@@@@@@@@@@@@@@3838@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@3833338
Ignoriert:
  @@ph039@title
  @@ph040@beschreibung
  @@ph041@@gmail.de
Props:
  Orientierung: "vertikal"
  Titel: "Das Thema"
  Beschreibung: 'Passen Sie Nuxt UI mit Ihren eigenen Farben, Schriftarten und mehr.'
  I-Lucide-Swatch-Book (englisch)
  Klasse: W-96
---
::

## api

@@ph043@@gmail.de

Komponenten-Props

@@ph044@gmail.de

Die Komponenten-Slots

@@ph045@gmail.de

Das Komponenten-Theme

@@ph046@@changelog @@changelog

Das Component-Changelog
