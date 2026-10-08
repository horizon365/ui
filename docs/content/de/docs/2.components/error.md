---
description: 'Eine vorgefertigte Fehlerkomponente mit NuxtError-Unterstützung.'
category: layout
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Error.vue
---

@@@ph000@@Verwendung

Die Error-Komponente rendert ein `<main>`-Element, das zusammen mit der Komponente [Header](/docs/components/header) ein Layout in voller Höhe erstellt, das sich auf die verfügbare Höhe des Ansichtsfensters erstreckt.

::tip{to="/docs/getting-started/theme/css-variables#header"}
Die Error-Komponente verwendet die `--ui-header-height` CSS-Variable, um sich korrekt unter dem `Header` zu positionieren.
::

@@@008@@Fehler

Verwenden Sie `error` prop, um eine Fehlermeldung anzuzeigen.

::framework-only
#nuxt sein
::note{to="https://nuxt.com/docs/guide/directory-structure/error" target="_blank"}
In den meisten Fällen erhalten Sie die `error` prop in Ihrer `error.vue`-Datei.
::
::

::component-code
---
Hide:
  @@12@Klasse
Schöner: wahr
Props:
  Fehler:
    Statuscode: 404
    Meldung: "Seite nicht gefunden"
    Meldung: "Die Seite, die Sie suchen, existiert nicht."
  Klasse: '! min-h-96'
---
::

### Icon: badge{label="4.8+" class="align-text-top"}

Verwenden Sie das `icon` prop, um ein Symbol über dem Statuscode anzuzeigen.

::component-code
---
Hide:
  @@16@Klasse
Schöner: wahr
Ignoriert:
  - error.statusCode (nicht vorhanden)
  - error.statusNachricht
  @@ph019@fehler.nachricht
Props:
  Icon: 'i-lucide-file-x'(I-lucide-Datei-x)
  Irrtum:
    Statuscode: 404
    Meldung: "Seite nicht gefunden"
    Meldung: "Die Seite, die Sie suchen, existiert nicht."
  Klasse: '! min-h-96'
---
::

Verwenden Sie den `#leading`-Steckplatz, um ein benutzerdefiniertes Element, z. B. ein Logo, anzuzeigen.

::component-code
---
Hide:
  @@ph021@class
Schöner: wahr
Ignoriert:
  @@ph022@@error.statusCode (nicht vorhanden)
  @@ph023@error.statusNachricht
  @@ph024@fehler.nachricht
Props:
  Fehler:
    Statuscode: 404
    Meldung: "Seite nicht gefunden"
    Meldung: "Die Seite, die Sie suchen, existiert nicht."
  Klasse: '! min-h-96'
Slots auf:
  Führung:|

    @@@@@@@@@@@@@@@@@025 @
---
#Führung
: img{src="https://github.com/nuxt.png" alt="Logo" class="size-10 rounded-full"}
::

### Clear

Verwenden Sie `clear` prop, um die Schaltfläche zum Löschen anzupassen oder auszublenden (mit `false`-Wert).

Sie können jede Eigenschaft aus der Komponente [Button](/docs/components/button) übergeben, um sie anzupassen.

::component-code
---
Schöner: wahr
Hide:
  @@34@Klasse
Ignoriert:
  - error.statusCode (nicht vorhanden)
  @@ph036@@error.statusNachricht
  @@ph037@fehler.nachricht
  - clear.color (auf Englisch)
  - clear.size
  @@ph040@@clear.icon (nicht bekannt)
  - clear.class
Props:
  Eindeutig:
    Farbe: neutral
    Größe: XL
    Icon: I-Lucide-Arrow-Left (englisch)
    Klasse: 'rounded-full'
  Fehler:
    Statuscode: 404
    Meldung: "Seite nicht gefunden"
    Meldung: "Die Seite, die Sie suchen, existiert nicht."
  Klasse: '! min-h-96'
---
::

@@ph042@@Umleitung

Verwenden Sie `redirect` prop, um den Benutzer auf eine andere Seite umzuleiten, wenn die Schaltfläche zum Löschen angeklickt wird.

::component-code
---
Schöner: wahr
Hide:
  @@@@@@45@gmail.de
Ignoriert:
  - error.statusCode (nicht vorhanden)
  - error.statusNachricht
  @@ph048@fehler.nachricht
Props:
  redirect: '/docs/getting-started'(auf Englisch)
  Fehler:
    Statuscode: 404
    Meldung: "Seite nicht gefunden"
    Meldung: "Die Seite, die Sie suchen, existiert nicht."
  Klasse: '! min-h-96'
---
::

@@ph049@@Beispiele

@@ph050@@@ph050@@@ph050@@@@ph050@@@@@@ph050@@@@@ph050@@@@@@ph051 @@

Verwenden Sie die Error-Komponente in Ihrem `error.vue`:

```vue [error.vue]{13}
<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()
</script>

<template>
  <UApp>
    <UHeader />

    <UError :error="error" />

    <UFooter />
  </UApp>
</template>
```

::tip
Vielleicht möchten Sie den Code Ihres `app.vue` in Ihrer `error.vue` Datei replizieren, um das gleiche Layout und die gleichen Funktionen zu haben, hier ist ein Beispiel: <https://github.com/nuxt/ui/blob/v4/docs/app/error.vue>
::

::note
Weitere Informationen zum Umgang mit Fehlern finden Sie in der Dokumentation [Nuxt ](https://nuxt.com/docs/getting-started/error-handling#error-page), aber bei Verwendung von `nuxt generate` wird empfohlen,`fatal: true` in Ihrem `createError`-Aufruf hinzuzufügen, um sicherzustellen, dass die Fehlerseite angezeigt wird:

```vue [pages/\[...slug\\].vue]
<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('docs').path(route.path).first()
})
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>
```

::

@@@@@@@@@@@@@@@@@@@@@@@@@@api

@@@@@@@@@@@ph095@@@props

Komponenten Props

@@ph096@@slots

Die Komponenten-Slots

@@@@@@@@@ph097@@theme

Das Komponenten-Theme

@@ph098@@changelog @@changelog

Das Component-Changelog
