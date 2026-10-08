---
title: Änderungen Versionen
description: 'Zeigt eine Liste der Changelog-Versionen in einer Zeitleiste an.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChangelogVersions.vue
---

@@@ph000@Verwendung

Die ChangelogVersions Komponente bietet ein flexibles Layout , um eine Liste von[ChangelogVersion](/docs/components/changelog-version)Komponenten entweder mit dem Standard-Slot oder dem`versions`prop.

```vue {2,8}
<template>
  <UChangelogVersions>
    <UChangelogVersion
      v-for="(version, index) in versions"
      :key="index"
      v-bind="version"
    />
  </UChangelogVersions>
</template>
```

### Versionen

Verwenden Sie`versions`prop als Array von Objekten mit den Eigenschaften der Komponente[ChangelogVersion](/docs/components/changelog-version#props).

::component-code
---
Einsturz : wahr
Ignoriert :
  @@ph023@Versionen
Außen :
  @@ph024@Versionen
Externe Personen :
  - ChangelogVersionProps [ Bearbeiten | Quelltext bearbeiten ]
Hide :
  @@ph026@@gmail.de
Props :
  Version :
    - title : Nuxt 3.17 (Deutsche Ausgabe)
      Beschreibung : Nuxt 3.17 ist da - mit einer umfassenden Überarbeitung der asynchronen Datenschicht , einer neuen integrierten Komponente , besseren Warnungen und Leistungsverbesserungen !
      Image :https://nuxt.com/assets/blog/v3.17.png
      Datum : 2025 - 04 - 27
      zu : ' https://nuxt.com/blog/v3-17 '
      Ziel : _ blank
      ui . container : ' max-w - lg ' (auf Englisch)
    - title : Nuxt 3.16 (Deutsche Übersetzung)
      Beschreibung : ' Nuxt 3.16 ist da - vollgepackt mit Features und Leistungsverbesserungen ! '
      Image :https://nuxt.com/assets/blog/v3.16.png
      Datum : 2025 - 03 - 07
      zu : ' https://nuxt.com/blog/v3-16 '
      Ziel : _ blank
      ui . container : ' max-w - lg ' (auf Englisch)
    - title : Nuxt 3.15 (Deutsche Übersetzung)
      Nuxt 3.15 ist da - mit Vite 6 , besserer HMR und schnellerer Performance !
      Image :https://nuxt.com/assets/blog/v3.15.png
      Datum : 2024 - 12 - 24
      zu : ' https://nuxt.com/blog/v3-15 '
      Ziel : _ blank
      ui . container : ' max-w - lg ' (auf Englisch)
  Klasse : " W-voll "
---
::

### Anzeige

Verwenden Sie die`indicator`prop , um die Indikatorleiste auf der linken Seite auszublenden . Standardmäßig auf`true`.

::component-code
---
Einsturz : wahr
Ignoriert :
  @@ph033@Versionen
Außen :
  @@ph034@versionen.de
Externe Typen :
  - ChangelogVersionProps [ Bearbeiten | Quelltext bearbeiten ]
Hide :
  @@@@@@36@36@36@36@36@36@36@36@36@36@36@36@36@36@36@36@36@36@36@36@36@@36@@36@36@@36@@36@@36@@36@@36@@36@@36@@36@@36@@36@@36@@@36@@@36@@@@36@@@@36@@@@@@@@@@@@@@@3336@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@33336@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Props :
  Anzeige : false
  Versionen :
    - title : Nuxt 3.17 (Deutsche Übersetzung)
      Beschreibung : : Nuxt 3.17 ist da - mit einer umfassenden Überarbeitung der asynchronen Datenschicht , einer neuen integrierten Komponente , besseren Warnungen und Leistungsverbesserungen !
      Image :https://nuxt.com/assets/blog/v3.17.png
      Datum : 2025 - 04 - 27
      zu : ' https://nuxt.com/blog/v3-17 '
      Ziel : _ blank
      ui . container : ' max-w - lg ' (auf Englisch)
    - title : Nuxt 3.16 (Deutsche Übersetzung)
      Beschreibung : ' Nuxt 3.16 ist da - vollgepackt mit Features und Leistungsverbesserungen ! '
      Image :https://nuxt.com/assets/blog/v3.16.png
      Datum : 2025 - 03 - 07
      zu : ' https://nuxt.com/blog/v3-16 '
      Ziel : _ blank
      ui . container : ' max-w - lg ' (auf Englisch)
    - title : Nuxt 3.15 (Deutsche Übersetzung)
      Nuxt 3.15 ist da - mit Vite 6 , besserer HMR und schnellerer Performance !
      Image :https://nuxt.com/assets/blog/v3.15.png
      Datum : 2024 - 12 - 24
      zu : ' https://nuxt.com/blog/v3-15 '
      Ziel : _ blank
      ui . container : ' max-w - lg ' (auf Englisch)
  Klasse : " W-voll "
---
::

### Indikatorbewegung

Verwenden Sie die`indicator-motion`prop , um den Bewegungseffekt auf der Indikatorleiste anzupassen oder auszublenden . Standardmäßig auf`true`mit`{ damping: 30, restDelta: 0.001 }`[spring transition options](https://motion.dev/docs/vue-transitions#spring).

::component-code
---
Einsturz : wahr
Ignoriert :
  @@ph048@Versionen
Außen :
  @@ph049@Versionen
Externe Personen :
  - ChangelogVersionProps [ Bearbeiten | Quelltext bearbeiten ]
Hide :
  @@@@@@51@000@051@051@051@051@000@0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Items :
  Indikationsentwicklung :
    @@ph052@@true
    @@ph053@@falsch
Props :
  Anzeige : true
  Version :
    - title : Nuxt 3.17 (Deutsche Übersetzung)
      Beschreibung : : Nuxt 3.17 ist da - mit einer umfassenden Überarbeitung der asynchronen Datenschicht , einer neuen integrierten Komponente , besseren Warnungen und Leistungsverbesserungen !
      Image :https://nuxt.com/assets/blog/v3.17.png
      Datum : 2025 - 04 - 27
      zu : ' https://nuxt.com/blog/v3-17 '
      Ziel : _ blank
      ui . container : ' max-w - lg ' (auf Englisch)
    - title : Nuxt 3.16 (Deutsche Übersetzung)
      Beschreibung : ' Nuxt 3.16 ist da - vollgepackt mit Features und Leistungsverbesserungen ! '
      Image :https://nuxt.com/assets/blog/v3.16.png
      Datum : 2025 - 03 - 07
      zu : ' https://nuxt.com/blog/v3-16 '
      Ziel : _ blank
      ui . container : ' max-w - lg ' (auf Englisch)
    - title : Nuxt 3.15 (Deutsche Übersetzung)
      Nuxt 3.15 ist da - mit Vite 6 , besserer HMR und schnellerer Performance !
      Image :https://nuxt.com/assets/blog/v3.15.png
      Datum : 2024 - 12 - 24
      zu : ' https://nuxt.com/blog/v3-15 '
      Ziel : _ blank
      ui . container : ' max-w - lg ' (auf Englisch)
  Klasse : " W-voll "
---
::

## Beispiele

::note
Während diese Beispiele[Nuxt Content](https://content.nuxt.com)verwenden , können die Komponenten in jedes Content-Management - System integriert werden .
::

### Innerhalb einer Seite

Verwenden Sie die Komponente ChangelogVersions in einer Seite , um eine Changelog-Seite zu erstellen :

```vue [pages/changelog.vue]{10-17}
<script setup lang="ts">
const { data: versions } = await useAsyncData('versions', () => queryCollection('versions').all())
</script>

<template>
  <UPage>
    <UPageHero title="Changelog" />

    <UPageBody>
      <UChangelogVersions>
        <UChangelogVersion
          v-for="(version, index) in versions"
          :key="index"
          v-bind="version"
          :to="version.path"
        />
      </UChangelogVersions>
    </UPageBody>
  </UPage>
</template>
```

::note
In diesem Beispiel werden die`versions`mit`queryCollection`aus dem`@nuxt/content`Modul geholt .
::

::tip
Die`to`prop wird hier überschrieben , da`@nuxt/content`die@@@- Eigenschaft verwendet .
::

### Mit klebrigen Indikator

Sie können die`ui`prop und die verschiedenen Slots verwenden , um die Indikatoren klebrig zu machen :

::component-example
---
Schöner : wahr
Einsturz : wahr
Name : ' changelog-versions - sticky-example ' (englisch)
Klasse : ' P - 8 '
Props:
  Klasse: "W-voll"
---
::

### Mit Scrollcontainer: badge{label="4.4+" class="align-text-top"}

Übergeben Sie ein Objekt an `indicator` prop, um den Scrollcontainer zu konfigurieren. Standardmäßig verfolgt der Indikator den Fenster-/Seitenlauf (https://motion.dev/docs/vue-use-scroll#page-scroll).

```vue
<script setup lang="ts">
const scrollContainer = ref<HTMLElement>()
</script>

<template>
  <div ref="scrollContainer" class="max-h-96 overflow-y-auto">
    <UChangelogVersions v-if="scrollContainer" :indicator="{ container: scrollContainer }" />
  </div>
</template>
```

::warning
Wenn Sie ein benutzerdefiniertes `container` verwenden, stellen Sie sicher, dass das Container-Element vor `UChangelogVersions` eingehängt ist.
::

@@109@bmg109

### Props

Komponenten Props

### Slots

Die Komponenten-Slots

::tip
Sie können alle Steckplätze der [`ChangelogVersion`](/docs/components/changelog-version#slots) Komponente innerhalb von ChangelogVersions verwenden, sie werden automatisch weitergeleitet, so dass Sie individuelle Versionen anpassen können, wenn Sie die `versions` prop.

```vue{3-5}
<template>
  <UChangelogVersions :versions="versions">
    <template #body="{ version }">
      <Markdown :value="version.content" />
    </template>
  </UChangelogVersions>
</template>
```
::

## Themes

Das Komponenten-Theme

@@ph128@@changelog (auf Englisch)

Das Component-Changelog
