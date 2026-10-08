---
title: Contentnavigation Bearbeiten
description: 'Eine Navigationskomponente im Akkordeon-Stil zum Organisieren von Seitenlinks.'
category: content
framework: nuxt
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentNavigation.vue
---

::warning{to="/docs/getting-started/integrations/content"}
Diese Komponente ist nur verfügbar, wenn das `@nuxt/content`-Modul installiert ist.
::

@@ph001@@Nutzung

Verwenden Sie die `navigation` prop mit dem Wert `navigation`{lang="ts-type"}, den Sie beim Abrufen der Navigation Ihrer App erhalten.

::component-example
---
Name: 'Content-Navigation-Beispiel'
H-96 Overflow-y-Auto (Überlauf-Auto)
Übertreibungen: wahr
Props:
  Klasse: "W-voll"
---
::

@@ph005@@gmail.de

Setzen Sie `type` prop auf `single`, damit nur ein Element gleichzeitig geöffnet ist.

::component-code{prefix="content"}
---
Schöner: wahr
Einsturz: wahr
Außen:
  @@ph009@navigation @ nautische
Externe Typen:
  - ContentNavigationLink []
Items:
  Typen:
  @@ph011 @"Single"
  @@ph012 @@'mehrere'
Hide:
  @@13@Klasse
  @@14@navigation
Props:
  Klasse: "W-voll"
  Kategorie: „ Single "
  navigation:
    - title:'Anleitung'
      Icon: 'i-lucide-book-open'(Symbol: 'i-lucide-book-open')
      Pfad: '#getting-started'(englisch)
      Kinder:
        - title:'Einleitung'
          Pfad: '#Einleitung'
          aktiv: wahr
        - title:'Installation'
          Pfad: '#installation'
    - title:'Zusammensetzbare'
      Icon: 'i-lucide-Datenbank'
      Pfad: '#zusammensetzbare'
      Kinder:
        - title:'defineShortcuts'(auf Englisch)
          Pfad: '#defineshortcuts'
        - title:'useModal'(auf Englisch)
          Pfad: #UseModal
---
::

@@ph021@@gmail.de

Verwenden Sie die `color` prop, um die Farbe der Navigationslinks zu ändern.

::component-code{prefix="content"}
---
Schöner: wahr
Einsturz: wahr
Außen:
  @@ph023@navigation@@@navigation@ph023@navigation@@navigation@@navigation@@navigation@navigation@navigation@navigation@navigation@navigation@navigation@navigation@navigation@navigation@navigation@navigation@navigation@navigation@navigation@navigation@navigation@navigation@navigation@navigation@navigation@navigation@navigation@navigation@navigation@navigation@navigation@navigation@navigation@navigation@navigation@navigation@navigation@navigation@navigation@navigation@navigation@navigation@navigation@navigation@navigation@navigation@navigation@navigation@navigation@@navigation@navigation@navigation@navigation@navigation@navigation@navigation@navigation@navigation@@navigation@navigation@navigation@navigation@navigation@@navigation@navigation@@@navigation@navigation@navigation@navigation@@navigation@@@navigation@navigation@@@navigation@navig
Externe Personen:
  - ContentNavigationLink []
Hide:
  @@@@@@@@@@@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@classclass@class@classclass@classclass@class@classclass@class@class@class@classc
  @@ph026@navigation @ nautische
Props:
  Klasse: "W-voll"
  Farbe: „ neutral "
  Navigation:
    - title:'Anleitung'
      Icon: 'i-lucide-book-open'(Symbol: 'i-lucide-book-open')
      Pfad: '#getting-started'(englisch)
      Kinder:
      - title:'Einleitung'
        Pfad: '#Einleitung'
        Aktiv: Wahr
      - title:'Installation'
        Pfad: '#installation'
    - title:'Zusammensetzbare'
      Icon: 'i-lucide-Datenbank'
      Pfad: '#zusammensetzbare'
      Kinder:
      - title:'defineShortcuts'(auf Englisch)
        Pfad: '#defineshortcuts'
      - title:'useModal'(auf Englisch)
        Pfad: #UseModal
---
::

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Variant....

Verwenden Sie die `variant` prop, um die Variante der Navigationslinks zu ändern.

::component-code{prefix="content"}
---
Schöner: wahr
Einsturz: wahr
Außen:
  @@ph035@navigation @ naughty @ naughty @ naughty @ naughty
Externe Personen:
  - ContentNavigationLink []
Hide:
  @@@@@@@@@@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@classclass@class@class@class@class@classclass@class@class@class@classclassclass@classclass@class@class
  @@38@nautismus@nautismus.de
Items:
  Variante:
  @@ph039 @@"Link"
  @@@ph040 @@"Pille"
Props:
  Klasse: "W-voll"
  Variante: „ Link "
  navigation:
    - title:'Anleitung'
      Icon: 'i-lucide-book-open'(Symbol: 'i-lucide-book-open')
      Pfad: '#getting-started'(englisch)
      Kinder:
      - title:'Einleitung'
        Pfad: '#Einführung'
        Aktiv: Wahr
      - title:'Installation'
        Pfad: '#Installation'
    - title:'Zusammensetzbare'
      Icon: 'i-lucide-Datenbank'
      Pfad: '#zusammensetzbare'
      Kinder:
      - title:'defineShortcuts'(auf Englisch)
        Pfad: #defineshortcuts
      - title:'useModal'(auf Englisch)
        Pfad: #UseModal
---
::

@@ph047@@highlight@@@@ph047@@@@highlight@@@@@ph047@@@highlight@@@highlight@@@highlight.com

Verwenden Sie `highlight` prop, um einen markierten Rahmen für den aktiven Link anzuzeigen.

Verwenden Sie `highlight-color` prop, um die Farbe des Rahmens zu ändern. Es wird standardmäßig auf `color` prop.

::component-code{prefix="content"}
---
Schöner: wahr
Einsturz: wahr
Außen:
  @@ph051@navigation
Externe Typen:
  - ContentNavigationLink []
Hide:
  @@53@Klasse
  @@ph054@navigation@@@navigation@ph054@navigation
Props:
  Klasse: "W-voll"
  Highlight: Wahr
  highlightFarbe: 'primär'
  Farbe: "Primär"
  Variante: „ Pille "
  Navigation:
    - title:'Anleitung'
      Icon: 'i-lucide-book-open'(Symbol: 'i-lucide-book-open')
      Pfad: '#getting-started'(englisch)
      Kinder:
      - title:'Einleitung'
        Pfad: '#Einführung'
        Aktiv: Wahr
      - title:'Installation'
        Pfad: '#Installation'
    - title:'Zusammensetzbare'
      Icon: 'i-lucide-Datenbank'
      Pfad: '#zusammensetzbare'
      Kinder:
      - title:'defineShortcuts'(auf Englisch)
        Pfad: #defineshortcuts
      - title:'useModal'(auf Englisch)
        Pfad: #UseModal
---
::

@@ph061@@trailing-symbol

Verwenden Sie die `trailing-icon` prop, um die nachlaufenden [Icon](PH0667 @ von Elementen mit Kindern anzupassen.

::component-code{prefix="content"}
---
Schöner: wahr
Einsturz: wahr
Außen:
  @@@@@@nautismus@nautismus@nautismus.com
Externe Typen:
  - ContentNavigationLink []
Hide:
  @@@@@@@class070@class@class070@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@classclass@classclassclass@classclass@class@class@class@class@class@class@class@class@class@c
  @@ph071@navigation @ nautische
Props:
  Klasse: "W-voll"
  trailingIcon: 'i-lucide-arrow-up'(deutsch: 'i-lucide-arrow-up')
  navigation:
    - title:'Anleitung'
      Icon: 'i-lucide-book-open'(Symbol: 'i-lucide-book-open')
      Pfad: '#getting-started'(englisch)
      Kinder:
      - title:'Einleitung'
        Pfad: '#Einleitung'
        Aktiv: Wahr
      - title:'Installation'
        Pfad: '#installation'
    - title:'Zusammensetzbare'
      Icon: 'i-lucide-Datenbank'
      Pfad: '#zusammensetzbare'
      Kinder:
      - title:'defineShortcuts'(auf Englisch)
        Pfad: '#defineshortcuts'
      - title:'useModal'(auf Englisch)
        Pfad: #UseModal
---
::

::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.chevronDown` key anpassen.
::

## Beispiele

### Innerhalb eines Layouts

Verwenden Sie die Komponente ContentNavigation innerhalb einer Komponente [PageAside](/docs/components/page-aside) innerhalb eines Layouts, um die Navigation der Seite anzuzeigen:

```vue [layouts/docs.vue]{11}
<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <UPage>
    <template #left>
      <UPageAside>
        <UContentNavigation :navigation="navigation" highlight />
      </UPageAside>
    </template>

    <slot />
  </UPage>
</template>
```

### Innerhalb eines Headers

Verwenden Sie die ContentNavigations-Komponente innerhalb des `content`-Slots einer [Header](/docs/components/header)-Komponente, um die Navigation der Seite auf dem Handy anzuzeigen:

```vue [components/Header.vue]{9-11}
<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <UHeader>
    <template #body>
      <UContentNavigation :navigation="navigation" highlight />
    </template>
  </UHeader>
</template>
```

@@126@bmw.de

@@@@@@@@@@@@@@ph127@@props

Komponenten-Props

### Spielautomaten

Die Komponenten-Slots

@@ph129@@emits

Komponenten emittieren

@@ph130@gmail.de

Das Komponenten-Theme

@@ph131@@changelog @ changelog

: component-changelog {prefix="content"}
