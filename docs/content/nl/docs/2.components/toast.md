---
description: Een beknopt bericht om informatie of feedback te geven aan de gebruiker.
category: overlay
keywords:
  - notification
  - snackbar
  - flash message
links:
  - label: Toast op
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/toast
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Toast.vue
---

## Gebruik

Gebruik de [useToast](/docs/composables/use-toast) composable om een toast in uw applicatie weer te geven.

::component-example
---
collapse: true
prettier: true
name: 'toast-example'
---
::

::warning
Zorg ervoor dat u uw app omhult met de [`App`](/docs/components/app) -component die onze [`Toaster`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/Toaster.vue) -component gebruikt die de [`ToastProvider`](https://reka-ui.com/docs/components/toast#provider) -component van Reka UI gebruikt.
::

::tip{to="/docs/components/app#props"}
U kunt de `App` component `toaster` prop bekijken om te zien hoe u de broodrooster globaal configureert.
::

### Titel

Geef een `title` veld door aan de `toast.add` methode om een titel weer te geven.

::component-example
---
options:
  - name: 'title'
    label: 'title'
    default: 'Uh oh! Something went wrong.'
name: 'toast-title-example'
---
::

### Beschrijving

Geef een `description` veld door aan de `toast.add` methode om een beschrijving weer te geven.

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

### Icoon

Geef een `icon`-veld door aan de `toast.add`-methode om een [Icon](/docs/components/icon) weer te geven.

::component-example
---
options:
  - name: 'icon'
    label: 'icon'
    default: 'i-lucide-wifi'
name: 'toast-icon-example'
---
::

### Avatar [bewerken]

Geef een `avatar`-veld door aan de `toast.add`-methode om een [Avatar](/docs/components/avatar) weer te geven.

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

### Kleur

Geef een `color` veld door aan de `toast.add` methode om de kleur van de Toast te veranderen.

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

### Sluiten

Geef een `close`-veld door om de [Button](/docs/components/button) (met `false`-waarde) aan te passen of te verbergen.

::component-example
---
name: 'toast-close-example'
---
::

### Sluit pictogram

Geef een `closeIcon`-veld door om de knop Sluiten [Icon](/docs/components/icon) aan te passen. Standaard `i-lucide-x`.

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
U kunt dit pictogram globaal aanpassen in uw `app.config.ts` onder `ui.icons.close`-sleutel.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
U kunt dit pictogram globaal aanpassen in uw `vite.config.ts` onder `ui.icons.close`-sleutel.
:::
::

### Acties

Geef een `actions`-veld door om enkele [Button](/docs/components/button) acties aan de Toast toe te voegen.

::component-example
---
options:
  - name: 'description'
    label: 'description'
    default: 'There was a problem with your request.'
name: 'toast-actions-example'
---
::

### Duur

Geef een `duration`-veld door aan de `toast.add`-methode om te wijzigen hoe lang de Toast zichtbaar blijft (in milliseconden). Standaard `5000`.

::tip
Zet het `duration` veld op `0` om de Toast open te houden totdat deze handmatig wordt gesloten.
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

### Voortgang

Geef een `progress`-veld door om de [Progress](/docs/components/progress) (met `false`-waarde) aan te passen of te verbergen.

::tip
De voortgangsbalk neemt standaard de Toast-kleur over, maar u kunt deze overschrijven met het veld `progress.color`.
::

::component-example
---
name: 'toast-progress-example'
---
::

### Oriëntatie

Geef een `orientation` veld door aan de `toast.add` methode om de oriëntatie van de Toast te veranderen.

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

## Voorbeelden

::note{to="/docs/components/app"}
Nuxt UI biedt een **App**-component die uw app omhult om wereldwijde configuraties te bieden.
::

### Wereldwijde positie wijzigen

Verander de `toaster.position` prop op de [App](/docs/components/app#props) om de positie van de toasts te veranderen.

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


### Globale duur wijzigen

Verander de `toaster.duration` prop op de [App](/docs/components/app#props) om de duur van de toasts te wijzigen.

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


### Wijzig globaal max: badge{label="4.1+" class="align-text-top"}

Wijzig de `toaster.max` prop op de [App](/docs/components/app#props) component om het maximale aantal toasts dat tegelijk wordt weergegeven te wijzigen.

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


### Gestapelde toasts

Stel de `toaster.expand` prop in op `false` op het [App](/docs/components/app#props) om gestapelde toasts weer te geven (geïnspireerd door [Sonner](https://sonner.emilkowal.ski/)).

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
U kunt met de muis over de toasts bewegen om ze uit te breiden. Hierdoor wordt ook de timer van de toasts onderbroken.
::

::component-example
---
prettier: true
name: 'toast-example'
---

#options
:toaster-expand-example
::


### Ontdubbelde toasts: badge{label="4.5+" class="align-text-top"}

Bij het aanroepen van `toast.add` met een `id` die al bestaat, zal de bestaande toast pulseren in plaats van een duplicaat te maken.

::component-example
---
collapse: true
name: 'toast-duplicate-example'
---
::

### Met terugbellen

Geef een `onUpdateOpen`-veld door om een callback uit te voeren wanneer de toast is gesloten (door verlopen of door ontslag van de gebruiker).

::component-example
---
collapse: true
name: 'toast-callback-example'
---
::

### Met HTML-inhoud

Gebruik de [`h()`-weergave function](https://vuejs.org/api/render-function.html#h) in de `title`- of `description`-velden om HTML-elementen of Vue-componenten met aangepaste styling weer te geven.

::component-example
---
collapse: true
name: 'toast-html-example'
---
::

## API

### Props

:component-props

### Slots

:component-slots

### Uitzendt

:component-emits

### Expose

Wanneer u de component opent via een sjabloonref, kunt u het volgende gebruiken:

| Naam | Type |
| ---- | ---- |
| `height`{lang="ts-type"} | `Ref<number>`{lang="ts-type"} |

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog
