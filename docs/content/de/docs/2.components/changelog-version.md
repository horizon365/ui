---
title: Changelog Version Bearbeiten
description: 'Ein anpassbarer Artikel, der in einem Changelog angezeigt werden soll.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChangelogVersion.vue
---

@@@ph000@@Verwendung

Die ChangelogVersion-Komponente bietet eine flexible Möglichkeit , ein`<article>`- Element mit anpassbaren Inhalten wie Titel , Beschreibung , Bild usw . anzuzeigen .

::code-preview

::u-changelog-version
---
Titel : Einführung in Nuxt UI v3
Beschreibung : : Nuxt UI V3 ist da ! Nach mehr als 1500 Commits bringt dieses große Redesign verbesserte Zugänglichkeit , Tailwind CSS-Unterstützung und volle Vue-Kompatibilität .
Bild : https://nuxt.com/assets/blog/nuxt-ui-v3.png
Datum : 2025 - 03 - 12
Autorinnen :
  - name : Benjamin Canac (englisch)
    Beschreibung :@benjamincanac
    Avatare sind :
      src :https://github.com/benjamincanac.png
      Aufladung : Lazy
    zwei :https://x.com/benjamincanac
    Ziel : _ blank
  - name : Sebastian Chopin
    Beschreibung :@atinux
    Avatare sind :
      src :https://github.com/atinux.png
      Aufladung : Lazy
    zwei :https://x.com/atinux
    Ziel : _ blank
  @@@@ph004@name : Hugo Richard
    Beschreibung : '@hugorcd '
    Avatare sind :
      src :https://github.com/hugorcd.png
      Aufladung : Lazy
    zwei :https://x.com/hugorcd
    Ziel : _ blank
zu : ' https ://nuxt.com/blog/nuxt-ui-v3 '
Ziel : _ blank
Klasse : " W-voll "
ui . container : ' max-w - lg ' (auf Englisch)
---
::

::

::tip{to="/docs/components/changelog-versions"}
Verwenden Sie die Komponente`ChangelogVersions`, um mehrere Changelog-Versionen in einer Zeitleiste mit einer Indikatorleiste auf der linken Seite anzuzeigen .
::

@@006@Titel

Verwenden Sie`title`prop , um den Titel der ChangelogVersion anzuzeigen .

::component-code
---
Hide :
  @@008@Klasse
  @@009@0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  - ui.container
Props :
  Titel : Einführung in Nuxt UI v3
  Klasse : " W-voll "
  ui . container : ' max-w - lg ' (auf Englisch)
---
::

@@ph011@Beschreibung

Verwenden Sie`description`prop , um die Beschreibung der ChangelogVersion anzuzeigen .

::component-code
---
Schöner : wahr
Hide :
  @@13@Klasse
  @@@@@@14@14
  - ui.container
Ignoriert:
  @@16@Titel
Props:
  Titel: Einführung in die Nuxt UI v3
  Beschreibung: Nuxt UI v3 ist da! Nach mehr als 1500 Commits bringt dieses große Redesign verbesserte Zugänglichkeit, Tailwind CSS-Unterstützung und volle Vue-Kompatibilität.
  Klasse: "W-voll"
  ui. container: 'max-w-lg'(auf Englisch)
---
::

@@@@@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17

Verwenden Sie `date` prop, um das Datum der ChangelogVersion anzuzeigen.

::tip
Das Datum wird automatisch auf das [current locale](/docs/getting-started/integrations/i18n/nuxt#locale) formatiert.
::

::component-code
---
Schöner: wahr
Hide:
  @@ph024@gmail.de
  @@ph025@@ui
  - ui.container
Ignoriert:
  @@ph027@title
  @@ph028@beschreibung
Props:
  Titel: Einführung in die Nuxt UI v3
  Beschreibung: : Nuxt UI V3 ist da! Nach mehr als 1500 Commits bringt dieses große Redesign verbesserte Zugänglichkeit, Tailwind CSS-Unterstützung und volle Vue-Kompatibilität.
  Datum: 2025 - 03 - 12
  Klasse: "W-voll"
  ui. container: 'max-w-lg'(auf Englisch)
---
::

@@ph029@@@badge

Verwenden Sie `badge` prop, um ein [Badge](/docs/components/badge) auf der ChangelogVersion anzuzeigen.

::component-code
---
Schöner: wahr
Hide:
  @@35@Klasse
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ui
  - ui.container
Ignoriert:
  @@@@@@38@title
  @@ph039 @ Beschreibung
  @@ph040@@Datum
Props:
  Titel: Einführung in Nuxt UI v3
  Beschreibung: Nuxt UI V3 ist da! Nach mehr als 1500 Commits bringt dieses große Redesign verbesserte Zugänglichkeit, Tailwind CSS-Unterstützung und volle Vue-Kompatibilität.
  Datum: 2025 - 03 - 12
  Badge: "Freigeben"
  Klasse: "W-voll"
  ui. container: 'max-w-lg'(auf Englisch)
---
::

Sie können jede Eigenschaft aus der Komponente [Badge](/docs/components/badge#props) übergeben, um sie anzupassen.

::component-code
---
Schöner: wahr
Hide:
  @@@@@@45@gmail.de
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@############################################################################################################################################################################################################
  - ui.container
Ignoriert:
  @@ph048@@title
  @@ph049@beschreibung
  @@5000@Zeit
  - badge.label
  @@ph052@@badge.color
  @@ph053@badge.variant
Props:
  Titel: Einführung in die Nuxt UI v3
  Beschreibung: Nuxt UI V3 ist da! Nach mehr als 1500 Commits bringt dieses große Redesign verbesserte Zugänglichkeit, Tailwind CSS-Unterstützung und volle Vue-Kompatibilität.
  Datum: 2025 - 03 - 12
  Badge:
    Label: "Freigegeben"
    Farbe: Primär
    Variante: Übersicht
  Klasse: "W-voll"
  ui. container: 'max-w-lg'(auf Englisch)
---
::

@@ph054@@Bild

Verwenden Sie `image` prop, um ein Bild im BlogPost anzuzeigen.

::note
Wenn [`@nuxt/image`]() installiert ist, wird die Komponente `<NuxtImg>` anstelle des nativen Tags `img` verwendet.
::

::component-code
---
Schöner: wahr
Hide:
  @@@@@@class063@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@classclass@class@class@class@class
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ui
  - ui.container (nicht verfügbar)
Ignoriert:
  @@@@666@title
  @@ph067@beschreibung
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@################################################################################################################################################################################
Props:
  Titel: Einführung in Nuxt UI v3
  Beschreibung: Nuxt UI V3 ist da! Nach mehr als 1500 Commits bringt dieses große Redesign verbesserte Zugänglichkeit, Tailwind CSS-Unterstützung und volle Vue-Kompatibilität.
  Datum: 2025 - 03 - 12
  Bild: https://nuxt.com/assets/blog/nuxt-ui-v3.png
  Klasse: "W-voll"
  ui. container: 'max-w-lg'(auf Englisch)
---
::

@@ph069@Autorinnen und Autoren

Verwenden Sie `authors` prop, um eine Liste von [User](/docs/components/user) in der ChangelogVersion als Array von Objekten mit den folgenden Eigenschaften anzuzeigen:

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`orientation?: UserProps['orientation']``orientation?: UserProps['orientation']``orientation?: UserProps['orientation']`{lang="ts-type"}

Sie können jede Eigenschaft von der [Link](/docs/components/link#props) Komponente wie `to`,`target`, etc. übergeben.

::component-code
---
Schöner: wahr
Hide:
  @@999@Klasse
  @@100@Ui
  - ui.container
Außen:
  @@102@Autorinnen und Autoren
Externe Personen :
  - UserProps [ Bearbeiten | Quelltext bearbeiten ]
Ignoriert :
  @@104@Titel
  @@@ph105@beschreibung
  @@106@106@106@106@106@106@106@106@106@106@106@106@106@106@106@106@106@106@106@@106@@106@106@@106@1000@@106@@1000101010101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @@ph107@@Bild
  @@108@Autorinnen und Autoren
Props :
  Titel : Einführung in Nuxt UI v3
  Beschreibung : : Nuxt UI v3 ist da ! Nach mehr als 1500 Commits bringt dieses große Redesign verbesserte Zugänglichkeit , Tailwind CSS-Unterstützung und volle Vue-Kompatibilität .
  Datum : 2025 - 03 - 12
  Bild : https://nuxt.com/assets/blog/nuxt-ui-v3.png
  Autoren :
    - name : Benjamin Canac
      Beschreibung :@benjamincanac
      Avatare sind :
        src :https://github.com/benjamincanac.png
        Aufladung : Lazy
      zwei :https://x.com/benjamincanac
      Ziel : _ blank
    - name : Sebastian Chopin
      Beschreibung : '@atinux '
      Avatare sind :
        src :https://github.com/atinux.png
        Aufladung : Lazy
      zwei :https://x.com/atinux
      Ziel : _ blank
    @@ph111@name : Hugo Richard
      Beschreibung : '@hugorcd '
      Avatare sind :
        src :https://github.com/hugorcd.png
        Aufladung : Lazy
      zwei :https://x.com/hugorcd
      Ziel : _ blank
  Klasse : " W-voll "
  ui . container : ' max-w - lg ' (auf Englisch)
---
::

@@@@@@112@Link

Sie können jede Eigenschaft von der[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)Komponente wie`to`,`target`,`rel`, etc. übergeben .

::component-code
---
Schöner : wahr
Hide :
  @@121@Klasse
  @@@@@@@@122@ui
  - ui.container
Ignoriert :
  @@124@Titel
  @@@ph125@beschreibung
  @@126@126@126@126@126@126@126@126@12@126@126@126@12@126@12@126@12@@126@12@12@@126@12@12@12@@126@12@12@@126@12@@126@12@12@@121212@@@@@12121212@@@@@@@@@@@@122221221221222222@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @@ph127@@Bild
  @@ph128@@gmail.de
Props:
  Titel: Einführung in die Nuxt UI v3
  Beschreibung: : Nuxt UI V3 ist da! Nach mehr als 1500 Commits bringt dieses große Redesign verbesserte Zugänglichkeit, Tailwind CSS-Unterstützung und volle Vue-Kompatibilität.
  Datum: 2025 - 03 - 12
  Bild: https://nuxt.com/assets/blog/nuxt-ui-v3.png
  zu: 'https://nuxt.com/blog/nuxt-ui-v3'
  Ziel: _blank
  Klasse: "W-voll"
  ui. container: 'max-w-lg'(auf Englisch)
---
::

### Indikator

Verwenden Sie `indicator` prop, um den Indikatorpunkt auf der linken Seite auszublenden. Standardmäßig `true`.

::component-code
---
Schöner: wahr
Hide:
  @@132@Klasse
  @@@@@@133@133@133@133@133@133@133@133@1333@@1333@@1333@@133@@133@@@1333@133@133@@133@133@@133@133@@1333@@1333@@1333@@@13333@@@@133333@@@@133333@@@@@@@@@@@@@@@UIUIUIUIUIUIUIUIUIUIUIUIUIUIUIUIUIUIUIUIUIUIUIUIUIUIUIUIUIUIUIUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU
  - ui.container
Ignoriert:
  @@135@title
  - Beschreibung
  @@137@137@137@137@137@137@137@137@137@137@137@137@137@137@137@137@137@137@137@137@137@137@@137@137@@137@@137@@137@137@@@137@@@@137@@@137@@@@@137@@@@@@@@@@@@@@13377@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Datum
  @@ph138@@Bild
Props:
  Titel: Einführung in die Nuxt UI v3
  Beschreibung: : Nuxt UI V3 ist da! Nach mehr als 1500 Commits bringt dieses große Redesign verbesserte Zugänglichkeit, Tailwind CSS-Unterstützung und volle Vue-Kompatibilität.
  Datum: 2025 - 03 - 12
  Bild: https://nuxt.com/assets/blog/nuxt-ui-v3.png
  Anzeige: false
  Klasse: "W-voll"
  ui. container: 'max-w-lg'(auf Englisch)
---
::

::note
Wenn `indicator` prop `false` ist, wird das Datum über dem Titel angezeigt.
::

## Beispiele

### Mit Körperschlitz

Sie können den `body`-Slot verwenden, um benutzerdefinierte Inhalte zwischen dem Bild und den Autoren anzuzeigen:

- [Markdown](https://comark.dev/rendering/vue) Komponente von `@comark/vue`, um einige Abzeichnungen anzuzeigen.
- [ContentRenderer](https://content.nuxt.com/docs/components/content-renderer) Komponente von `@nuxt/content`, um den Inhalt der Seite oder Liste zu rendern.
- oder verwenden Sie die `:u-changelog-version` Komponente direkt in Ihrem Inhalt mit Markdown innerhalb des `body` Slot, da Nuxt UI vorgefertigte Prosakomponenten bereitstellt.

::component-example
---
Schöner: wahr
Name: 'changelog-version-markdown-example'(changelog-version-markdown-Beispiel)
Einsturz: wahr
---
::

@@@@@@159@@bpb

### Props

Komponenten Props

### Slots

Die Komponenten-Slots

@@@@@@@162@@theme

Das Komponenten-Theme

## Changelog (Deutsche Übersetzung)

Das Component-Changelog
