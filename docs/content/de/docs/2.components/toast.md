---
description: Eine kurze Nachricht, um dem Benutzer Informationen oder Feedback zu geben.
category: overlay
keywords:
  - notification
  - snackbar
  - flash message
links:
  - label: Toast auf
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/toast
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Toast.vue
---

## Bearbeiten

Verwenden Sie die [useToast](/docs/composables/use-toast) composable, um einen Toast in Ihrer Anwendung anzuzeigen.

::component-example
---
collapse: true
prettier: true
name: 'toast-example'
---
::

::warning
Stellen Sie sicher, dass Sie Ihre App mit der Komponente [`App`](/docs/components/app) umhüllen, die unsere Komponente [`Toaster``Toaster`https://github.com/nuxt/ui/blob/v4/src/runtime/components/Toaster.vue) verwendet, die die Komponente [`ToastProvider`](https://reka-ui.com/docs/components/toast#provider) von Reka UI verwendet.
::

::tip{to="/docs/components/app#props"}
Sie können die `App`-Komponente `toaster` prop überprüfen, um zu sehen, wie der Toaster global konfiguriert wird.
::

### title Übersetzung

Übergeben Sie ein Feld `title` an die Methode `toast.add`, um einen Titel anzuzeigen.

::component-example
---
options:
  - name: 'title'
    label: 'title'
    default: 'Uh oh! Something went wrong.'
name: 'toast-title-example'
---
::

### Beschreibung

Übergeben Sie ein Feld `description` an die Methode `toast.add`, um eine Beschreibung anzuzeigen.

::component-example
---
options:
  - name: 'title'
    label: 'title'
    default: 'Uh oh! Something went wrong.'
  - name: 'description'
    label: 'description'
    default: 'There was a problem with your request.'
name: 'toast-description-example'
---
::

### Icon (nicht)

Übergeben Sie ein `icon`-Feld an die `toast.add`-Methode, um eine [Icon](/docs/components/icon) anzuzeigen.

::component-example
---
options:
  - name: 'icon'
    label: 'icon'
    default: 'i-lucide-wifi'
name: 'toast-icon-example'
---
::

### Avatar (englisch)

Übergeben Sie ein `avatar`-Feld an die `toast.add`-Methode, um einen [Avatar](/docs/components/avatar) anzuzeigen.

::component-example
---
options:
  - name: 'avatar.src'
    alias: 'avatar'
    label: 'avatar.src'
    default:
      src: 'https://github.com/benjamincanac.png'
name: 'toast-avatar-example'
---
::

### color kaufen

Übergeben Sie ein `color`-Feld an die `toast.add`-Methode, um die Farbe des Toast zu ändern.

::component-example
---
options:
  - name: 'color'
    label: 'color'
    default: neutral
    items:
      - primary
      - secondary
      - success
      - info
      - warning
      - error
      - neutral
name: 'toast-color-example'
---
::

### Schließen

Übergeben Sie ein `close`-Feld zum Anpassen oder Ausblenden des schließenden [Button](/docs/components/button) (mit dem Wert `false`).

::component-example
---
name: 'toast-close-example'
---
::

### Close Icon (nicht vorhanden)

Übergeben Sie ein `closeIcon`-Feld, um die Schaltfläche zum Schließen [Icon](/docs/components/icon) anzupassen. Standardmäßig `i-lucide-x`.

::component-example
---
options:
  - name: 'closeIcon'
    label: 'closeIcon'
    default: 'i-lucide-arrow-right'
name: 'toast-close-icon-example'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.close` Schlüssel anpassen.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.close` Schlüssel anpassen.
:::
::

### Actions Bearbeiten

Übergeben Sie ein `actions`-Feld, um einige [Button](/docs/components/button)-Aktionen zum Toast hinzuzufügen.

::component-example
---
options:
  - name: 'description'
    label: 'description'
    default: 'There was a problem with your request.'
name: 'toast-actions-example'
---
::

### Duration Bearbeiten

Übergeben Sie ein `duration`-Feld an die `toast.add`-Methode, um zu ändern, wie lange der Toast sichtbar bleibt (in Millisekunden). Standardmäßig auf `5000`.

::tip
Setzen Sie das Feld `duration` auf `0`, um Toast offen zu halten, bis es manuell geschlossen wird.
::

::component-example
---
options:
  - name: 'duration'
    label: 'duration'
    default: 0
    items:
      - 0
      - 1000
      - 3000
      - 5000
name: 'toast-duration-example'
---
::

### Progress (englisch)

Übergeben Sie ein `progress`-Feld, um die [Progress](/docs/components/progress)-Leiste (mit dem Wert `false`) anzupassen oder auszublenden

::tip
Der Fortschrittsbalken erbt standardmäßig die Toastfarbe, Sie können sie jedoch mit dem Feld `progress.color` überschreiben.
::

::component-example
---
name: 'toast-progress-example'
---
::

### Orientierung.

Übergeben Sie ein `orientation`-Feld an die `toast.add`-Methode, um die Ausrichtung des Toast zu ändern.

::component-example
---
options:
  - name: 'orientation'
    label: 'orientation'
    default: 'horizontal'
    items:
      - horizontal
      - vertical
name: 'toast-orientation-example'
---
::

## Examples [Bearbeiten]

::note{to="/docs/components/app"}
Die Nuxt-Benutzeroberfläche bietet eine **App**-Komponente, die Ihre App umhüllt, um globale Konfigurationen bereitzustellen.
::

### Globale Position ändern.

Ändern Sie die `toaster.position`-Prop auf der [App](/docs/components/app#props)-Komponente, um die Position der Toasts zu ändern.

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
prettier: true
name: 'toast-example'
---

#options
:toaster-position-example
::


### Change global duration (globale Dauer ändern)

Ändern Sie die `toaster.duration`-Prop auf der [App](/docs/components/app#props)-Komponente, um die Dauer der Toast zu ändern.

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
prettier: true
name: 'toast-example'
---

#options
:toaster-duration-example
::


### Change global max: badge{label="4.1+" class="align-text-top"} (Globale max ändern: badge{label="4.1+" class="align-text-top"})

Ändern Sie die `toaster.max`-Prop auf der [App](/docs/components/app#props)-Komponente, um die maximale Anzahl von Toasts zu ändern, die gleichzeitig angezeigt werden.

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
prettier: true
name: 'toast-example'
---

#options
:toaster-max-example
::


### Stacked Toasts (Deutsche Übersetzung)

Setzen Sie die `toaster.expand`-Prop auf `false` auf der [App](/docs/components/app#props)-Komponente, um gestapelte Toasts anzuzeigen (inspiriert von [Sonner](https://sonner.emilkowal.ski/)).

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
prettier: true
name: 'toast-example'
---

#options
:toaster-expand-example
::


### Deduplizierte Toasts: badge{label="4.5+" class="align-text-top"}

Wenn Sie `toast.add` mit einem bereits vorhandenen `id` aufrufen, wird der vorhandene Toast gepulst, anstatt ein Duplikat zu erstellen.

::component-example
---
collapse: true
name: 'toast-duplicate-example'
---
::

### Mit Rückruf

Übergeben Sie ein `onUpdateOpen`-Feld, um einen Rückruf auszuführen, wenn der Toast geschlossen ist (entweder durch Ablauf oder Benutzerentlassung).

::component-example
---
collapse: true
name: 'toast-callback-example'
---
::

### Mit HTML-Inhalten

Verwenden Sie die Renderfunktion [`h()` ](https://vuejs.org/api/render-function.html#h) in den Feldern `title` oder `description`, um HTML-Elemente oder Vue-Komponenten mit benutzerdefiniertem Styling zu rendern.

::component-example
---
collapse: true
name: 'toast-html-example'
---
::

## API Bearbeiten

### Props (nicht)

:component-props

### Slots Bearbeiten

:component-slots

### Emits Bearbeiten

:component-emits

### Expose (englisch)

Beim Zugriff auf die Komponente über eine Template-Referenz können Sie Folgendes verwenden:

| Vorname| Typ|
| ---- | ---- |
| `height`{lang="ts-type"} nicht| `Ref<number>`{lang="ts-type"} nicht|

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
