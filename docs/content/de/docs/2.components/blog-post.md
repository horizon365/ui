---
title: Blogpost zu
description: 'Ein anpassbarer Artikel, der in einer Blog-Seite angezeigt werden soll.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/BlogPost.vue
---

@@@ph000@Verwendung

Die BlogPost-Komponente bietet eine flexible Möglichkeit , ein`<article>`- Element mit anpassbaren Inhalten wie Titel , Beschreibung , Bild usw . anzuzeigen .

::code-preview

::u-blog-post
---
Titel : Einführung in Nuxt Icon v1 .
Entdecken Sie Nuxt Icon v1 - eine moderne , vielseitige und anpassbare Icon-Lösung für Ihre Nuxt-Projekte
Bild : https://nuxt.com/assets/blog/nuxt-icon/cover.png
Datum : 2024 - 11 - 25
Autoren :
  @@@ph002@name : Anthony Fu
    Beschreibung : antfu7
    Avatare sind :
      src :https://github.com/antfu.png
      Aufladung : Lazy
    zwei :https://github.com/antfu
    Ziel : _ blank
zu : ' https://nuxt.com/blog/nuxt-icon-v1-0 '
Ziel : _ blank
Klasse : W - 96
---
::

::

::tip{to="/docs/components/blog-posts"}
Verwenden Sie die`BlogPosts`- Komponente , um mehrere Blog-Posts in einem responsiven Rasterlayout anzuzeigen .
::

@@004@Titel

Verwenden Sie die`title`prop , um den Titel des BlogPosts anzuzeigen .

::component-code
---
Schöner : wahr
Hide :
  @@006@Klasse
Props :
  Titel : Einführung in Nuxt Icon v1
  Klasse: W-96
---
::

@@ph007 @ Beschreibung

Verwenden Sie die `description` prop, um die Beschreibung des BlogPosts anzuzeigen.

::component-code
---
Schöner: wahr
Hide:
  @@009@Klasse
Ignoriert:
  @@ph010@title
Props:
  Titel: Einführung in Nuxt Icon v1
  Entdecken Sie Nuxt Icon v1-eine moderne, vielseitige und anpassbare Symbollösung für Ihre Nuxt-Projekte.
  Klasse: W-96
---
::

@@11@11@11@11@111@111@111@111@1111@111111@11111@11111111@11111111111@1111111111@11111111111@11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111@@@@@1111111111111111111111111111111111

Verwenden Sie die `date` prop, um das Datum des BlogPosts anzuzeigen.

::tip
Das Datum wird automatisch auf das [current locale](/docs/getting-started/integrations/i18n/nuxt#locale) formatiert.
::

::component-code
---
Schöner: wahr
Hide:
  @@@@@18@18@18
Ignoriert:
  @@ph019@title
  @@ph020@beschreibung
Props:
  Titel: Einführung in Nuxt Icon v1
  Entdecken Sie Nuxt Icon v1-eine moderne, vielseitige und anpassbare Symbollösung für Ihre Nuxt-Projekte.
  Datum: 2024 - 11 - 25
  Klasse: W-96
---
::

@@ph021@@@badge

Verwenden Sie die `badge` prop, um ein [Badge](/docs/components/badge) im BlogPost anzuzeigen.

::component-code
---
Schöner: wahr
Hide:
  @@ph027@gmail.de
Ignoriert:
  @@ph028@title
  @@ph029@beschreibung
Props:
  Titel: Einführung in Nuxt Icon v1
  Entdecken Sie Nuxt Icon v1-eine moderne, vielseitige und anpassbare Symbollösung für Ihre Nuxt-Projekte.
  Badge: "Freigeben"
  Klasse: W-96
---
::

Sie können jede Eigenschaft aus der Komponente [Badge](/docs/components/badge#props) übergeben, um sie anzupassen.

::component-code
---
Schöner: wahr
Hide:
  @@34@Klasse
Ignoriert:
  @@ph035@title
  @@ph036@beschreibung
  - badge.label
  @@ph038@@badge.color
  @@ph039@badge.variant
Props:
  Titel: Einführung in Nuxt Icon v1.
  Entdecken Sie Nuxt Icon v1-eine moderne, vielseitige und anpassbare Symbollösung für Ihre Nuxt-Projekte.
  Abzeichen:
    Label: "Freigegeben"
    Farbe: Primary
    Variante: solide
  Klasse: W-96
---
::

@@ph040@@Bild

Verwenden Sie die `image` prop, um ein Bild im BlogPost anzuzeigen.

::note
Wenn [`@nuxt/image`](https://image.nuxt.com/get-started/installation) installiert ist, wird die Komponente `<NuxtImg>` anstelle des nativen Tags `img` verwendet.
::

::component-code
---
Schöner: wahr
Hide:
  @@@@@@49@class
Ignoriert:
  @@ph050@title
  @@@ph051@beschreibung
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@####################################################################################################################################################################################################
Props:
  Titel: Einführung in Nuxt Icon v1
  Entdecken Sie Nuxt Icon v1-eine moderne, vielseitige und anpassbare Symbollösung für Ihre Nuxt-Projekte.
  Bild: https://nuxt.com/assets/blog/nuxt-icon/cover.png
  Datum: 2024 - 11 - 25
  Klasse: W-96
---
::

@@ph053@Autorinnen und Autoren

Verwenden Sie `authors` prop, um eine Liste von [User](/docs/components/user) im BlogPost als Array von Objekten mit den folgenden Eigenschaften anzuzeigen:

`name?: string``name?: string``name?: string`{lang="ts-type"}PH06061 @
`description?: string``description?: string``description?: string`{lang="ts-type"}
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@PH0666@@@@@@@@@@@@@PH0667 @@
`chip?: boolean | Omit<ChipProps, 'size' | 'inset'>``chip?: boolean | Omit<ChipProps, 'size' | 'inset'>`{lang="ts-type"}
`size?: UserProps['size']``size?: UserProps['size']`{lang="ts-type"}
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

Sie können jede Eigenschaft von der [Link](/docs/components/link#props) Komponente wie `to`,`target`, etc. übergeben.

::component-code
---
Schöner: wahr
Hide:
  @@@@@@83@000000000000000000000000000000000000000000000
Außen:
  @@@@@@@@@84@@Autorinnen und Autoren
Externe Personen:
  - UserProps [Bearbeiten | Quelltext bearbeiten]
Ignoriert:
  @@@@@@86@title
  @@ph087@beschreibung
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#################################################################################################################################################################
  @@ph089@@Bild
  @@@@@@@@ph090@@Autoren
Props:
  Titel: Einführung in Nuxt Icon v1
  Entdecken Sie Nuxt Icon v1-eine moderne, vielseitige und anpassbare Icon-Lösung für Ihre Nuxt-Projekte
  Bild: https://nuxt.com/assets/blog/nuxt-icon/cover.png
  Datum: 2024 - 11 - 25
  Autoren :
    - name : Anthony Fu
      Beschreibung : antfu7
      Avatare sind :
        src :https://github.com/antfu.png
        Aufladung : Lazy
      zwei :https://github.com/antfu
      Ziel : _ blank
  Klasse : W - 96
---
::

Wenn die`authors`prop mehr als ein Element enthält , wird die Komponente[AvatarGroup](/docs/components/avatar-group)verwendet .

::component-code
---
Schöner : wahr
Hide :
  @@@@@@@@@@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@classclassclass@class@classclass@class@classclass@class@classclass@classclass@class@class@class@classc
Außen :
  @@@@@@98@@Autorinnen und Autoren
Externe Personen :
  - UserProps [ Bearbeiten | Quelltext bearbeiten ]
Ignoriert :
  @@100@Titel
  - description
  @@102@Datum
  @@ph103@Bild
  @@104@Autorinnen und Autoren
Props :
  Titel : Einführung in Nuxt Icon v1 .
  Entdecken Sie Nuxt Icon v1 - eine moderne , vielseitige und anpassbare Symbollösung für Ihre Nuxt-Projekte .
  Bild : https://nuxt.com/assets/blog/nuxt-icon/cover.png
  Datum : 2024 - 11 - 25
  Autoren :
    - name : Anthony Fu
      Beschreibung : antfu7
      Avatare sind :
        src :https://github.com/antfu.png
        Aufladung : Lazy
      zwei :https://github.com/antfu
      Ziel : _ blank
    - name : Benjamin Canac
      Beschreibung : Benjamincanac
      Avatare sind :
        src :https://github.com/benjamincanac.png
        Aufladung : Lazy
      zwei :https://github.com/benjamincanac
      Ziel : _ blank
  Klasse : W - 96
---
::

@@@@@@@107@@Link

Sie können jede Eigenschaft von der[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)Komponente wie`to`,`target`,`rel`usw . übergeben .

::component-code
---
Schöner : wahr
Hide :
  @@116@Klasse
Ignoriert :
  @@117@title
  @@118@description
  @@119@119@119@1111111119@1111119@111119@11119@11119@11119@11119@11119@11119@11119@1119@@11119@@1111119@@111119@@1111111119@@@111111119
  @@ph120@@Bild
  - Zielscheibe
Props:
  Titel: Einführung in Nuxt Icon v1
  Entdecken Sie Nuxt Icon v1-eine moderne, vielseitige und anpassbare Symbollösung für Ihre Nuxt-Projekte.
  Bild: https://nuxt.com/assets/blog/nuxt-icon/cover.png
  Datum: 2024 - 11 - 25
  zu: 'https://nuxt.com/blog/nuxt-icon-v1-0'
  Ziel: _blank
  Klasse: W-96
---
::

@@ph122@@@Variant.de

Verwenden Sie die `variant` prop, um den Stil des BlogPosts zu ändern.

::component-code
---
Schöner: wahr
Hide:
  @@124@Klasse
Ignoriert:
  @@125@title
  - Beschreibung
  @@127@127@127@127@127@127@127@127@127@127@12@127@12@127@12@12@12@@127@12@12@12@12@12@12@12@@127@12@12@12@12@12@@127@12@@@1212@@12122@@@@@@@@122212222122@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@122122222222222222222222@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @@ph128@@Bild
  @@@@@129@2
  @@ph130@@zielgruppe
Props:
  Titel: Einführung in Nuxt Icon v1
  Entdecken Sie Nuxt Icon v1-eine moderne, vielseitige und anpassbare Symbollösung für Ihre Nuxt-Projekte.
  Bild: https://nuxt.com/assets/blog/nuxt-icon/cover.png
  Datum: 2024 - 11 - 25
  zu: 'https://nuxt.com/blog/nuxt-icon-v1-0'
  Ziel: _blank
  Variante: Nackt
  Klasse: W-96
---
::

::note
Das Styling wird unterschiedlich sein, ob Sie ein `to` prop oder ein `image` zur Verfügung stellen.
::

@@ph133@@Orientierung

Verwenden Sie `orientation` prop, um die BlogPost-Ausrichtung zu ändern. Standardmäßig zu `vertical`.

::component-code
---
Schöner: wahr
Hide:
  @136@Klasse
Ignoriert:
  @@137@Titel
  @@138@description
  @139 @ Datum
  @@ph140@@Bild
  @@141@1
  @@ph142@@zielgruppe
Props:
  Titel: Einführung in Nuxt Icon v1.
  Entdecken Sie Nuxt Icon v1-eine moderne, vielseitige und anpassbare Icon-Lösung für Ihre Nuxt-Projekte
  Bild: https://nuxt.com/assets/blog/nuxt-icon/cover.png
  Datum: 2024 - 11 - 25
  zu: 'https://nuxt.com/blog/nuxt-icon-v1-0'
  Ziel: _blank
  Ausrichtung: horizontal
  Variante: Übersicht
---
::

@@143@bmg14.de

@@@@@@@@144@@props

Komponenten Props

### Spielautomaten

Die Komponenten-Slots

@@146@Einsteigertipps

Das Komponenten-Theme

@@ph147@@changelog (auf Englisch)

Das Component-Changelog
