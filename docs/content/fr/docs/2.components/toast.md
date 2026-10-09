---
description: Un message succinct pour fournir des informations ou des commentaires à l'utilisateur.
category: overlay
keywords:
  - notification
  - snackbar
  - flash message
links:
  - label: Toast à
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/toast
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Toast.vue
---

## Utilisation

Utilisez le composable [useToast](/docs/composables/use-toast) pour afficher un toast dans votre application.

::component-example
---
collapse: true
prettier: true
name: 'toast-example'
---
::

::warning
Assurez-vous d'envelopper votre application avec le composant [`App`](/docs/components/app) qui utilise notre composant [`Toaster`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/Toaster.vue) qui utilise le composant [`ToastProvider`xph0222xhttps://reka-ui.com/docs/components/toast#provider) de Reka UI.
::

::tip{to="/docs/components/app#props"}
Vous pouvez consulter le composant `App` `toaster` prop pour voir comment configurer le grille-pain globalement.
::

### Titre

Passer un champ `title` à la méthode `toast.add` pour afficher un titre.

::component-example
---
options:
  - name: 'title'
    label: 'title'
    default: 'Uh oh! Something went wrong.'
name: 'toast-title-example'
---
::

### Définition

Passez un champ `description` à la méthode `toast.add` pour afficher une description.

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

### icône

Passer un champ `icon` à la méthode `toast.add` pour afficher un [Icon](/docs/components/icon).

::component-example
---
options:
  - name: 'icon'
    label: 'icon'
    default: 'i-lucide-wifi'
name: 'toast-icon-example'
---
::

### Avatars

Passer un champ `avatar` à la méthode `toast.add` pour afficher un [Avatar](/docs/components/avatar).

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

### couleur

Passez un champ `color` à la méthode `toast.add` pour changer la couleur du Toast.

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

### Fermer

Passez un champ `close` pour personnaliser ou masquer la fermeture [Button](/docs/components/button) (avec la valeur `false`).

::component-example
---
name: 'toast-close-example'
---
::

### Fermer Icône

Passez un champ `closeIcon` pour personnaliser le bouton de fermeture [Icon](/docs/components/icon).

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
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.close`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.close`.
:::
::

### Actions

Passez un champ `actions` pour ajouter des actions [Button](/docs/components/button) au Toast.

::component-example
---
options:
  - name: 'description'
    label: 'description'
    default: 'There was a problem with your request.'
name: 'toast-actions-example'
---
::

### Durée

Passez un champ `duration` à la méthode `toast.add` pour modifier la durée pendant laquelle le Toast reste visible (en millisecondes).

::tip
Définissez le champ `duration` sur `0` pour maintenir le Toast ouvert jusqu'à ce qu 'il soit fermé manuellement.
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

### Progress équipement

Passez un champ `progress` pour personnaliser ou masquer la barre [Progress](/docs/components/progress) (avec la valeur `false`).

::tip
La barre de progression hérite de la couleur Toast par défaut, mais vous pouvez la remplacer à l'aide du champ `progress.color`.
::

::component-example
---
name: 'toast-progress-example'
---
::

### Référencement

Passez un champ `orientation` à la méthode `toast.add` pour modifier l'orientation du Toast.

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

## exemples

::note{to="/docs/components/app"}
L'interface utilisateur Nuxt fournit un composant **App** qui enveloppe votre application pour fournir des configurations globales.
::

### Changer la position globale

Modifiez le prop `toaster.position` sur le composant [App](xph188) pour changer la position des toasts.

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


### Change durée globale

Modifiez la prop `toaster.duration` sur le composant [App](/docs/components/app#props) pour modifier la durée des toasts.

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


### Change global max: badge{label="4.1+" class="align-text-top"}

Modifiez la prop `toaster.max` sur le composant [App](/docs/components/app#props) pour modifier le nombre maximum de toasts affichés à la fois.

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


### Stacked Toasts à l'écran

Réglez la prop `toaster.expand` sur `false` sur le composant [App](/docs/components/app#props) pour afficher des toasts empilés (inspiré par [Sonner](https://sonner.emilkowal.ski/)).

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
Vous pouvez survoler les toasts pour les développer. Cela mettra également en pause la minuterie des toasts.
::

::component-example
---
prettier: true
name: 'toast-example'
---

#options
:toaster-expand-example
::


### Toasts dédupliqués: badge{label="4.5+" class="align-text-top"}

Lorsque vous appelez `toast.add` avec un `id` qui existe déjà, le pain grillé existant pulsera au lieu de créer un duplicata.

::component-example
---
collapse: true
name: 'toast-duplicate-example'
---
::

### Avec Callback

Passer un champ `onUpdateOpen` pour exécuter un callback lorsque le toast est fermé (soit par expiration, soit par renvoi de l'utilisateur).

::component-example
---
collapse: true
name: 'toast-callback-example'
---
::

### Avec contenu HTML

Utilisez la fonction de rendu [`h()` ](https://vuejs.org/api/render-function.html#h) dans les champs `title` ou `description` pour rendre les éléments HTML ou les composants Vue avec un style personnalisé.

::component-example
---
collapse: true
name: 'toast-html-example'
---
::

## API équipement

### Props

:component-props

### Slots

:component-slots

### Emits

:component-emits

### Expose à

Lorsque vous accédez au composant via une référence de modèle, vous pouvez utiliser les éléments suivants:

| nom| type|
| ---- | ---- |
| `height`x{lang="ts-type"}| `Ref<number>`{lang="ts-type"}|

## Thème

:component-theme

## Changelog écrit

:component-changelog
