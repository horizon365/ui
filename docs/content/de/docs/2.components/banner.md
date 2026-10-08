---
description: 'Platzieren Sie ein Banner oben auf Ihrer Website, um die Benutzer über wichtige Informationen zu informieren.'
category: element
keywords:
  - announcement bar
  - top bar
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Banner.vue
---

@@@ph000@Verwendung

@@ph001@title

Verwenden Sie die `title` prop, um einen Titel auf dem Banner anzuzeigen.

::component-code
---
Schöner: wahr
Klasse: '! p-0'
Props:
  Titel: "Das ist ein Banner mit einer wichtigen Botschaft."
---
::

@@ph003@@Icon-Seite

Verwenden Sie die `icon` prop, um ein Symbol auf dem Banner anzuzeigen.

::component-code
---
Schöner: wahr
Klasse: '! p-0'
Ignoriert:
  @@ph005@title
Props:
  Bildnachweis: i-lucide-info
  Titel: "Dies ist ein Banner mit einem Symbol."
---
::

@@@@@@@006@00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Verwenden Sie die `color` prop, um die Farbe des Banners zu ändern.

::component-code
---
Schöner: wahr
Klasse: '! p-0'
Ignoriert:
  @@@@@@@@@@icon______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
  @@ph009@title
Props:
  Farbe: "neutral"
  Bildnachweis: i-lucide-info
  Titel: "Dies ist ein Banner mit einem Symbol."
---
::

@@ph010 @ geschlossen

Verwenden Sie die `close` prop, um ein [Button](/docs/components/button) anzuzeigen, um das Banner zu schließen.

::tip
Ein `close`-Ereignis wird ausgegeben, wenn der Schließen-Button angeklickt wird.
::

::component-example
---
IFrame:
  style: 'height: 48px;'(Höhe: 48px;'
Übertreibungen: true
Titel: "Banner-Beispiel"
---
#Der Code

```vue
<template>
  <UBanner id="example" title="This is a closable banner." close />
</template>
```

::

::note
Beim Schließen wird `banner-${id}` im lokalen Speicher gespeichert, um zu verhindern, dass es erneut angezeigt wird.: br Im obigen Beispiel wird `banner-example` im lokalen Speicher gespeichert.
::

::caution
Um den Status dismissed über Seiten-Reloads hinweg beizubehalten, müssen Sie ein `id` prop. Ohne ein explizites `id` wird das Banner nur für die aktuelle Sitzung ausgeblendet und beim Seiten-Reload wieder angezeigt.
::

@@ph027@Schließen-Symbol

Verwenden Sie die `close-icon` prop, um die Schließen-Schaltfläche [Icon](/docs/components/icon). Standardmäßig auf `i-lucide-x`.

::component-example
---
IFrame:
  style: 'height: 48px;'(Höhe: 48px;'
Übertreibungen: true
Name: "Banner-Beispiel"
Props:
  title: 'Dies ist ein schließbarer Banner mit einem benutzerdefinierten Schließen-Icon.'
  closeIcon: 'i-lucide-x-circle'(I-lucide-x-Kreis)
---
#Der Code

```vue
<template>
  <UBanner
    title="This is a closable banner with a custom close icon."
    close
    close-icon="i-lucide-x-circle"
  />
</template>
```

::

::framework-only
#nuxt sein
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.close` key anpassen.
:::

#Ansehen
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.close` Schlüssel anpassen.
:::
::

@@ph047@Aktion

Verwenden Sie die `actions` prop, um einige [Button](/docs/components/button) Aktionen zum Banner hinzuzufügen.

::component-code
---
Schöner: wahr
Klasse: '! p-0'
Ignoriert:
  @@ph053@title
  @@ph054@Aktion
  @@ph055@@variantenreich
Außen:
  @@ph056@Aktion
Externe Typen:
  @@ph057@buttonprops [Bearbeiten | Quelltext bearbeiten]
Props:
  Titel: "Das ist ein Banner mit Aktionen."
  Aktionen:
    - label: Aktion 1
      Beschreibung: Outline
    - label: Aktion 2
      trailingIcon: i-lucide-arrow-right (englisch)
---
::

::note
Die Aktionsbuttons sind standardmäßig `color="neutral"` und `size="xs"`. Sie können diese Werte anpassen, indem Sie sie direkt an jede Aktionsschaltfläche übergeben.
::

@@@@@@@@@@Link

Sie können jede Eigenschaft von der [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) Komponente wie `to`,`target`,`rel`, etc. übergeben.

::component-code
---
Schöner: wahr
Klasse: '! p-0'
Übertreibungen: true
Ignoriert:
  @@ph071@title
  @@ph072@@zielgruppe
Props:
  zu: 'https://nuxtlabs.com/'
  Ziel: _blank
  title: 'NuxtLabs wird Teil von Vercel!'
  Farbe: "Primär"
---
::

::note
Die Komponente `NuxtLink` erbt alle anderen Attribute, die Sie an die Komponente `User` übergeben.
::

## Beispiele

`app.vue`

Verwenden Sie die Banner-Komponente in Ihrem `app.vue` oder in einem Layout:

```vue [app.vue]{3}
<template>
  <UApp>
    <UBanner icon="i-lucide-construction" title="Nuxt UI v4 has been released!" />

    <UHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <UFooter />
  </UApp>
</template>
```

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@api

@@@@@@@@@@@ph097@@@props

Komponenten Props

@@ph098@@slots

Die Komponenten-Slots

@@@@@@@@@@@@@ph099@@@emits

Komponenten emittieren

@@ph100@gmail.de

Das Komponenten-Theme

@@ph101@@changelog @@@ changelog @@@ changelog @ changelog @ changelog @ changelog

Das Component-Changelog
