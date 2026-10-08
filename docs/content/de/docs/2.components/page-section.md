---
title: Seitensektion
description: 'Eine responsive Seite für Ihre Seiten.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageSection.vue
---

@@@ph000@@Verwendung

Die PageSection-Komponente umhüllt Ihren Inhalt in einem [Container](/docs/components/container), während die Flexibilität der vollen Breite beibehalten wird, wodurch es einfach ist, Hintergrundfarben, Bilder oder Muster hinzuzufügen.

::code-preview

::u-page-section
---
Titel: 'Schöne Vue UI-Komponenten
Beschreibung: Nuxt UI bietet eine umfassende Suite von Komponenten und Dienstprogrammen, die Ihnen helfen, schöne und zugängliche Webanwendungen mit Vue und Nuxt zu erstellen.
Überschrift:"Features"
Features:
  - title:'Icons'(auf Englisch)
    Beschreibung: 'Nuxt UI integriert sich mit Nuxt Icon, um auf über 200.000 Icons von Iconify zuzugreifen.
    I-Lucide-Smile (englisch)
    zu: '/docs/getting-started/integrations/icons'
  - title:'Schriftarten'
    Beschreibung: 'Nuxt UI integriert sich mit Nuxt Fonts, um Plug-and-Play-Schriftoptimierung zu ermöglichen.'
    I-Lucide-A-Large-Small (Deutsche Ausgabe)
    zu: '/docs/getting-started/integrations/fonts'
  - title:'Farbmodus'
    Beschreibung: 'Nuxt UI integriert sich in den Nuxt Color Mode, um zwischen hell und dunkel zu wechseln.'
    I-lucide-sun-moon (I-lucide-Sonne-Mond)
    zu: '/docs/getting-started/integrations/color-mode'
---
::

::

Verwenden Sie es nach einer [PageHero](/docs/components/page-hero) Komponente:

```vue {4}
<template>
  <UPageHero />

  <UPageSection />
</template>
```

@@ph019@titel@title

Verwenden Sie `title` prop, um den Titel des Abschnitts zu setzen.

::component-code
---
Props:
  Titel: 'Schöne Vue UI-Komponenten
---
::

@@ph021@@Beschreibung

Verwenden Sie `description` prop, um die Beschreibung des Abschnitts festzulegen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph023@title
Props:
  Titel: 'Schöne Vue UI Komponenten'
  Beschreibung: : Nuxt UI bietet eine umfassende Suite von Komponenten und Dienstprogrammen, die Ihnen helfen, schöne und zugängliche Webanwendungen mit Vue und Nuxt zu erstellen.
---
::

@@ph024@Überschrift

Verwenden Sie die `headline` prop, um die Überschrift des Abschnitts festzulegen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph026@title
  @@ph027@beschreibung
Props:
  Titel: 'Schöne Vue UI Komponenten'
  Beschreibung: : Nuxt UI bietet eine umfassende Suite von Komponenten und Dienstprogrammen, die Ihnen helfen, schöne und zugängliche Webanwendungen mit Vue und Nuxt zu erstellen.
  Überschrift:"Features"
---
::

@@ph028@@@Icon-Seite

Verwenden Sie `icon` prop, um das Symbol des Abschnitts zu setzen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph030@title
  @@ph031@beschreibung
Props:
  Titel: 'Schöne Vue UI Komponenten'
  Beschreibung: : Nuxt UI bietet eine umfassende Suite von Komponenten und Dienstprogrammen, die Ihnen helfen, schöne und zugängliche Webanwendungen mit Vue und Nuxt zu erstellen.
  Icon: 'I-Lucide-Rakete'
---
::

@@ph032@@Eigenschaften

Verwenden Sie `features` prop, um eine Liste von [PageFeature](/docs/components/page-feature) unter der Beschreibung als Array von Objekten mit den folgenden Eigenschaften anzuzeigen:

`title?: string`{lang="ts-type"}
`description?: string``description?: string``description?: string`{lang="ts-type"}
`icon?: string``icon?: string``icon?: string``icon?: string`{lang="ts-type"}
`orientation?: 'horizontal' | 'vertical'``orientation?: 'horizontal' | 'vertical'``orientation?: 'horizontal' | 'vertical'`{lang="ts-type"}PH0499@@@@@@@@@PH0499@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

Sie können jede Eigenschaft von der [Link](/docs/components/link#props) Komponente wie `to`,`target`, etc. übergeben.

::component-code
---
Schöner: wahr
Außen:
  @@ph056@@gmail.de
Externe Typen:
  - PageFeatureProps [Bearbeiten | Quelltext bearbeiten]
Ignoriert:
  @@@@@@58@title
  @@@ph059@beschreibung
  @@ph060@@gmail.de
Props:
  Titel: 'Schöne Vue UI-Komponenten
  Beschreibung: : Nuxt UI bietet eine umfassende Suite von Komponenten und Dienstprogrammen, die Ihnen helfen, schöne und zugängliche Webanwendungen mit Vue und Nuxt zu erstellen.
  Features:
    - title:'Icons'(Deutsche Übersetzung)
      Beschreibung: 'Nuxt UI integriert sich mit Nuxt Icon, um auf über 200.000 Icons von Iconify zuzugreifen.
      I-Lucide-Smile (englisch)
      zu: '/docs/getting-started/integrations/icons'
    - title:'Schriftarten'
      Beschreibung: 'Nuxt UI integriert sich mit Nuxt Fonts, um Plug-and-Play-Schriftoptimierung zu ermöglichen.'
      I-Lucide-A-Large-Small (Deutsche Ausgabe)
      zu: '/docs/getting-started/integrations/fonts'
    - title:'Farbmodus'
      Beschreibung: 'Nuxt UI integriert sich in den Nuxt Color Mode, um zwischen hell und dunkel zu wechseln.'
      I-lucide-sun-moon (I-lucide-Sonne-Mond)
      zu: '/docs/getting-started/integrations/color-mode'
---
::

@@@@@@@64@@@Links

Verwenden Sie `links` prop, um eine Liste von [Button](/docs/components/button) unter der Beschreibung anzuzeigen.

::component-code
---
Schöner: wahr
Außen:
  @@@@@@@70@@links
Externe Personen:
  @@@buttonprops [Bearbeiten | Quelltext bearbeiten]
Ignoriert:
  @@ph072@@title
  @@ph073@beschreibung
  @@@@@@@@@@@@@@@@Links
Props:
  Titel: 'Schöne Vue UI Komponenten'
  Beschreibung: Nuxt UI bietet eine umfassende Suite von Komponenten und Dienstprogrammen, die Ihnen helfen, schöne und zugängliche Webanwendungen mit Vue und Nuxt zu erstellen.
  Links auf:
    - label:'Fangen Sie an'
      nach/docs/getting-started
      I-Lucide-Square-Play (Deutsche Ausgabe)
      Farbe: „ neutral "
    - label:'Komponenten erkunden'
      zu: '/docs/components/app'
      Farbe: „ neutral "
      Variante: „ subtil "
      trailingIcon: 'i-lucide-arrow-right'(englisch)
---
::

### Orientierung

Verwenden Sie die `orientation` prop, um die Ausrichtung mit dem Standardslot zu ändern.

::component-code
---
Schöner: wahr
Außen:
  @@@@@@@@@@@ph080@@features
  @@@@@@@81@@links
Externe Typen:
  - PageFeatureProps [Bearbeiten | Quelltext bearbeiten]
  @@ph083@buttonprops [Bearbeiten | Quelltext bearbeiten]
Ignoriert:
  @@@@@84@title
  @@85@description@85@description@@description@description@@description@description@description@description@description@description@description@description@description@description@description@description@description@ph085@description@description@description@description@description@description@ph085@description@description
  @@@@@@@@@@icon______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
  @@@@@@@@@ph087@@features
  @@@@88@88@88@@88@@888@@@888@@@@888@@@888@@88@@@888@@@888@@888@@@@@links
Props:
  Titel: 'Schöne Vue UI-Komponenten
  Beschreibung: : Nuxt UI bietet eine umfassende Suite von Komponenten und Dienstprogrammen, die Ihnen helfen, schöne und zugängliche Webanwendungen mit Vue und Nuxt zu erstellen.
  Icon: 'I-Lucide-Rakete'
  Ausrichtung: horizontal
  Features:
    - title:'Icons'(Deutsche Übersetzung)
      Beschreibung: 'Nuxt UI integriert sich mit Nuxt Icon, um auf über 200.000 Icons von Iconify zuzugreifen.
      I-Lucide-Smile (englisch)
      zu: '/docs/getting-started/integrations/icons'
    - title:'Schriftarten'
      Beschreibung: 'Nuxt UI integriert sich mit Nuxt Fonts, um Plug-and-Play-Schriftoptimierung zu ermöglichen.'
      I-Lucide-A-Large-Small (Deutsche Ausgabe)
      zu: '/docs/getting-started/integrations/fonts'
    - title:'Farbmodus'
      Beschreibung: 'Nuxt UI integriert sich in den Nuxt Color Mode, um zwischen hell und dunkel zu wechseln.'
      I-lucide-sun-moon (I-lucide-Sonne-Mond)
      zu: '/docs/getting-started/integrations/color-mode'
  Linke:
    - label:'Komponenten erkunden'
      zu: '/docs/components/app'
      Farbe: „ neutral "
      Variante: "Unterwürfig"
      trailingIcon: 'i-lucide-arrow-right'(englisch)
Slots auf:
  Default:|

    @@@@@@@@@@@@@@@@093
---

: img@@ph094
::

@@ph095@umgekehrt.de

Verwenden Sie die `reverse` prop, um die Ausrichtung des Standardsteckplatzes umzukehren.

::component-code
---
Schöner: wahr
Außen:
  @@ph097@gmail.de
  @@@@@@98@@links
Externe Personen:
  @@ph099@@gmail.de [Bearbeiten | Quelltext bearbeiten]
  @@ph100@buttonprops [Bearbeiten | Quelltext bearbeiten]
Ignoriert:
  @@101@Titel
  @@ph102@beschreibung
  @@ph103@@gmail.de
  @@ph104@gmail.de
  @@105@105@105@105@105@105@105@105@105@105@105@@105@@105@@105@@105@@105@@105@@105@@105@@105@@105@@105@105@1000@100@1000@@1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Titel: 'Schöne Vue UI Komponenten'
  Beschreibung: Nuxt UI bietet eine umfassende Suite von Komponenten und Dienstprogrammen, die Ihnen helfen, schöne und zugängliche Webanwendungen mit Vue und Nuxt zu erstellen.
  Icon: 'I-Lucide-Rakete'
  Ausrichtung: horizontal
  umgekehrt: wahr
  Features:
    - title:'Icons'(Deutsche Übersetzung)
      Beschreibung: 'Nuxt UI integriert sich mit Nuxt Icon, um auf über 200.000 Icons von Iconify zuzugreifen.
      I-Lucide-Smile (englisch)
      zu: '/docs/getting-started/integrations/icons'
    - title:'Schriftarten'
      Beschreibung: 'Nuxt UI integriert sich mit Nuxt Fonts, um Plug-and-Play-Schriftoptimierung zu ermöglichen.'
      I-Lucide-A-Large-Small (Deutsche Ausgabe)
      zu: '/docs/getting-started/integrations/fonts'
    - title:'Farbmodus'
      Beschreibung: 'Nuxt UI integriert sich in den Nuxt Color Mode, um zwischen hell und dunkel zu wechseln.'
      I-lucide-sun-moon (I-lucide-Sonne-Mond)
      zu: '/docs/getting-started/integrations/color-mode'
  Links auf:
    - label:'Komponenten erkunden'
      zu: '/docs/components/app'
      Farbe: „ neutral "
      Variante: "Unterwürfig"
      trailingIcon: 'i-lucide-arrow-right'(englisch)
Slots auf:
  Default:|

    @@@@110 @
---

: img{src="https://picsum.photos/704/1294" width="352" height="647" alt="Illustration" class="w-full rounded-lg" loading="lazy"}
::

@@112@btw

@@@@@@@@113@@props

Komponenten Props

### Slots

Die Komponenten-Slots

@@115@Einsteigertipps

Das Komponenten-Theme

## Changelog (Deutsche Übersetzung)

Das Component-Changelog
