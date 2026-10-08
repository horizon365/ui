---
description: Eine kurze Nachricht, um dem Benutzer Informationen oder Feedback zu geben.
category: overlay
keywords:
  - notification
  - snackbar
  - flash message
links:
  - label: Der Toast
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/toast
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Toast.vue
---

@@@ph000@Verwendung

Verwenden Sie das [useToast](/docs/composables/use-toast) composable, um einen Toast in Ihrer Anwendung anzuzeigen.

::component-example
---
Einsturz: wahr
Schöner: wahr
Name: 'Toast-Beispiel'
---
::

::warning
Stellen Sie sicher, dass Sie Ihre App mit der Komponente [`App`](/docs/components/app) Komponente umwickeln, die unsere Komponente [`Toaster`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/Toaster.vue) Komponente verwendet, die die Komponente [`ToastProvider`](](https://reka-ui.com/docs/components/toast#providerhttps://reka-ui.com/docs/components/toast#provider)))verwendet Komponente von Reka UI.
::

::tip{to="/docs/components/app#props"}
Sie können die `App` Komponente `toaster` prop überprüfen, um zu sehen, wie Sie den Toaster global konfigurieren.
::

@@ph022@title @ Übersetzung

Übergeben Sie ein `title`-Feld an die `toast.add`-Methode, um einen Titel anzuzeigen.

::component-example
---
Optionen:
  @@@ph025@name:'Titel'
    Titel: "Titel"
    P.S.:"Oh, da ist was schief gelaufen."
Name: 'Toast-Titel-Beispiel'
---
::

@@ph026 @ Beschreibung

Übergeben Sie ein `description`-Feld an die `toast.add`-Methode, um eine Beschreibung anzuzeigen.

::component-example
---
Optionen:
  @@@ph029@name:'Titel'
    Titel: "Titel"
    P.S.:"Oh, da ist was schief gelaufen!"
  @@@ph030@name:'Beschreibung'
    Label: 'Beschreibung'
    Default: "Es gab ein Problem mit Ihrer Anfrage."
Name: 'Toast-Beschreibung-Beispiel'
---
::

@@ph031@@gmail.de

Übergeben Sie ein `icon`-Feld an die `toast.add`-Methode, um ein [Icon](/docs/components/icon) anzuzeigen.

::component-example
---
Optionen:
  @@ph038@@name:'Icon'(auf Englisch)
    Bezeichnung: Icon
    Standardeinstellung: 'i-lucide-wifi'
Name: 'Toast-Icon-Beispiel'
---
::

@@@@@@Avatar@@@@@Avatar@@@@@@@@Avatar@@Avatar@@@Avatar@@Avatar@@Avatar@@Avatar@@Avatar@@Avatar@@Avatar@@Avatar@Avatar@@Avatar@@Avatar@Avatar@@Avatar@Avatar@@@Avatar@@Avatar@@@@Avatar@@@@@Avatar@@@@@@Avatar@@@@@@@@@Avatar@@@@@@@@@@@@Avatar@@@@@@@@@@@@@@@@Avatar@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

Geben Sie ein `avatar`-Feld an die `toast.add`-Methode weiter, um ein [Avatar](/docs/components/avatar) anzuzeigen.

::component-example
---
Optionen:
  - name:'avatar. src'(auf Englisch)
    Suche nach: Avatar
    Bezeichnung: avatar. src
    Default:
      src: 'https://github.com/benjamincanac.png'
Name: 'Avatar-Beispiel'
---
::

@@ph047@gmail.de

Übergeben Sie ein `color`-Feld an die `toast.add`-Methode, um die Farbe des Toast zu ändern.

::component-example
---
Optionen:
  @@@ph050@name:'Farbe'
    Markiert: "color"
    Defaultwert: neutral
    Items:
      @@@@@@@51@1@@101@101@101@101@101@11@101@101@101@1011@1011@1011@1011@1011@1011@111@111@111@1011@1111@1111@1111@1111@1111@1111@1111@11111@1111@11111@1@11111@1111@11111@11111@1111111@11111@1111111@1111111@11111@11111111@111111@@@1111111111@@@11111111111
      @@ph052@zweitrangig
      @@ph053@Erfolg
      @@@54@info@@info@@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info
      @@555@warning
      @@ph056@Fehler
      @@ph057@neutral.de
Name: 'Toast-Color-Beispiel'
---
::

### Schließen

Übergeben Sie ein `close`-Feld, um den Abschluss [Button](/docs/components/button)(mit `false`-Wert) anzupassen oder auszublenden.

::component-example
---
Name: "Toast-Close-Beispiel"
---
::

### Schließen-Symbol

Geben Sie ein `closeIcon`-Feld ein, um die Schaltfläche zum Schließen anzupassen [Icon](/docs/components/icon). Standardmäßig auf `i-lucide-x`.

::component-example
---
Optionen:
  - name:'closeIcon'(auf Englisch)
    Markiert: "closeIcon"
    Standardeinstellung: 'i-lucide-arrow-right'
Name: 'Toast-Close-Icon-Beispiel'
---
::

::framework-only
#nuxt sein
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.close` key anpassen.
:::

#Ansehen
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.close` key anpassen.
:::
::

@@ph077@@Aktionen

Übergeben Sie ein `actions` Feld, um einige [Button](/docs/components/button) Aktionen zum Toast hinzuzufügen.

::component-example
---
Optionen:
  @@@ph083@name:'Beschreibung'
    Label: 'Beschreibung'
    Default: "Es gab ein Problem mit Ihrer Anfrage."
Name: "Toast-Aktionen-Beispiel"
---
::

@@@@@84@Zeitumstellung

Übergeben Sie ein `duration`-Feld an die `toast.add`-Methode, um zu ändern, wie lange der Toast sichtbar bleibt (in Millisekunden).

::tip
Setzen Sie das Feld `duration` auf `0`, um den Toast offen zu halten, bis er manuell geschlossen wird.
::

::component-example
---
Optionen:
  - name:'Dauer'
    Labels: 'Dauer'
    Defaultwert: 0
    Items:
      @@@091@00
      @@@@1000@1000@1000@1000@1000@1000@10000
      @@3000@3000@3000@3000@3000@3000@300@3000@3000@3000@30000@30000
      @@@@994@5000
Name: 'Toast-Dauer-Beispiel'
---
::

@@@@@@@@@@@ph095@@progress

Übergeben Sie ein `progress`-Feld, um den [Progress](/docs/components/progress)-Balken anzupassen oder auszublenden (mit `false`-Wert).

::tip
Der Fortschrittsbalken erbt standardmäßig die Toastfarbe, Sie können sie jedoch mit dem `progress.color`-Feld überschreiben.
::

::component-example
---
Name: "Toast-Progress-Beispiel"
---
::

### Orientierung

Übergeben Sie ein `orientation`-Feld an die `toast.add`-Methode, um die Ausrichtung des Toast zu ändern.

::component-example
---
Optionen:
  - name:'Orientierung'
    Labels: "Orientierung"
    Default: „ Horizontal "
    Items:
      @@ph107@@gmail.de
      @@108@Vertikale
Name: 'Toast-Orientierungs-Beispiel'
---
::

@@ph109@@Beispiele

::note{to="/docs/components/app"}
Nuxt UI bietet eine **App**-Komponente, die Ihre App umschließt, um globale Konfigurationen bereitzustellen.
::

### Änderung der globalen Position

Ändern Sie die `toaster.position` prop auf der [App](/docs/components/app#props) Komponente, um die Position der Toast zu ändern.

```vue [app.vue]
<script setup lang="ts">
const toaster = { position: 'bottom-right' }
</script>

<template>
  <UApp :toaster="toaster">
    <NuxtPage />
  </UApp>
</template>
```

::component-example
---
Schöner: wahr
Name: 'Toast-Beispiel'
---

#Optionen
: Toaster-Position-Beispiel
::


### Globale Dauer ändern

Ändern Sie die `toaster.duration` prop auf der [App](/docs/components/app#props) Komponente, um die Dauer der Toast zu ändern.

```vue [app.vue]
<script setup lang="ts">
const toaster = { duration: 5000 }
</script>

<template>
  <UApp :toaster="toaster">
    <NuxtPage />
  </UApp>
</template>
```

::component-example
---
Schöner: wahr
Name: 'Toast-Beispiel'
---

#Optionen
: Toaster-Duration-Beispiel
::


### Change global max: badge{label="4.1+" class="align-text-top"}

Ändern Sie die `toaster.max` prop auf der [App](/docs/components/app#props) Komponente, um die maximale Anzahl der gleichzeitig angezeigten Toasts zu ändern.

```vue [app.vue]
<script setup lang="ts">
const toaster = { max: 3 }
</script>

<template>
  <UApp :toaster="toaster">
    <NuxtPage />
  </UApp>
</template>
```

::component-example
---
Schöner: wahr
Name: 'Toast-Beispiel'
---

#Optionen
: Toaster-Max-Beispiel
::


@@@@@@@@164@@gestapelte Toasts

Stellen Sie die `toaster.expand` prop auf `false` auf die Komponente [App](/docs/components/app#props), um gestapelte Toasts anzuzeigen (inspiriert von [Sonner](https://sonner.emilkowal.ski/)).

```vue [app.vue]
<script setup lang="ts">
const toaster = { expand: true }
</script>

<template>
  <UApp :toaster="toaster">
    <NuxtPage />
  </UApp>
</template>
```

::tip
Sie können den Mauszeiger über die Toasts bewegen, um sie zu erweitern. Dies wird auch den Timer der Toasts anhalten.
::

::component-example
---
Schöner: wahr
Name: 'Toast-Beispiel'
---

#Optionen
: Toaster-Expand-Beispiel
::


### deduplizierte Toast: badge{label="4.5+" class="align-text-top"}

Wenn Sie `toast.add` mit einem bereits vorhandenen `id` aufrufen, wird der vorhandene Toast gepulst, anstatt ein Duplikat zu erstellen.

::component-example
---
Einsturz: wahr
Name: 'Toast-Duplikat-Beispiel'
---
::

@@ph190@@mit Rückruf

Übergeben Sie ein `onUpdateOpen`-Feld, um einen Rückruf auszuführen, wenn der Toast geschlossen ist (entweder durch Ablauf oder Benutzerkündigung).

::component-example
---
Einsturz: wahr
Name: 'toast-callback-example'(Toast-Rückruf-Beispiel)
---
::

### Mit HTML-Inhalt

Verwenden Sie die [`h()` render function](https://vuejs.org/api/render-function.html#h) in den Feldern `title` oder `description`, um HTML-Elemente oder Vue-Komponenten mit benutzerdefiniertem Styling zu rendern.

::component-example
---
Einsturz: wahr
name: 'toast-html-example'(Beispiel)
---
::

@@ph200@@btw

@@ph201@@@props

Komponenten-Props

### Slots

Die Komponenten-Slots

@@ph203@@emits

Komponenten emittieren

### Aufdecken

Beim Zugriff auf die Komponente über eine Template-Referenz können Sie Folgendes verwenden:

| Vorname| Typ|
| ---- | ---- |
| {lang="ts-type"}| @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@######################################################################################################################|

@@ph209@@gmail.de

Das Komponenten-Theme

@@ph210@@changelog (auf Englisch)

Das Component-Changelog
