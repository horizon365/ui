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

@@ph000@utilisation

Utilisez le composable [useToast](/docs/composables/use-toast) pour afficher un toast dans votre application.

::component-example
---
Collapse: vrai
Étiquette: true
nom: 'Toast-exemple'
---
::

::warning
Assurez-vous d'envelopper votre application avec le composant [`App`]() qui utilise notre composant [`Toaster`]() qui utilise le composant [](https://reka-ui.com/docs/components/toast#provider) Composants de Reka UI.
::

::tip{to="/docs/components/app#props"}
Vous pouvez consulter le composant `App` prop pour voir comment configurer le grille-pain globalement.
::

@@222@titre

Passez un champ `title` à la méthode `toast.add` pour afficher un titre.

::component-example
---
options:
  - name:'titre'
    Étiquette:'titre'
    Par défaut:"Uh oh! quelque chose a mal tourné."
nom: 'toast-titre-exemple'
---
::

@@26@Description

Passez un champ `description` à la méthode `toast.add` pour afficher une description.

::component-example
---
options:
  - name:'titre'
    Étiquette:'title'
    Par défaut:"Uh oh! quelque chose a mal tourné."
  - name:'description'
    Étiquette:"description"
    Par défaut:"Il y a eu un problème avec votre demande."
nom: 'toast-description-exemple'
---
::

### Icon

Passez un champ `icon` à la méthode `toast.add` pour afficher une [Icon](/docs/components/icon).

::component-example
---
options:
  - nom:'icône'
    Étiquette:"Icon"
    Par défaut: i-lucide-wifi
nom: 'toast-icon-exemple'
---
::

### Avatar

Passez un `avatar` champ à la `toast.add` méthode pour afficher un [Avatar](/docs/components/avatar).

::component-example
---
options:
  - name:'avatar. src'
    Catégorie:"Avatar"
    Étiquette:'avatar. src'
    Default:
      src: 'https://github.com/benjamincanac.png'
nom: 'toast-avatar-exemple'
---
::

### couleur

Passez un champ `color` à la méthode `toast.add` pour changer la couleur du Toast.

::component-example
---
options:
  - name: couleur
    Étiquette:"couleur"
    Défaut: Neutre
    items:
      @@ph051@primaire
      - secondaire
      @@53@réussite
      @@ph054@info
      @@505@avertissement
      @@F056@erreur
      @@ph057@neutre
nom: 'toast-color-example'
---
::

@@ph058@@Fermer

Passez un champ `close` pour personnaliser ou masquer le bouton [](/docs/components/button)(avec la valeur `false`).

::component-example
---
nom: 'toast-close-exemple'
---
::

### Fermer Icône

Passez un champ `closeIcon` pour personnaliser le bouton de fermeture [Icon](/docs/components/icon).

::component-example
---
options:
  - nom:'closeIcon'
    Étiquette:'closeIcon'
    par défaut:'i-lucide-arrow-right'
nom: 'toast-close-icon-example'
---
::

::framework-only
#numérique
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.close`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.close`.
:::
::

@@777@Acteurs

Passez un champ `actions` pour ajouter des actions [Button](/docs/components/button) au Toast.

::component-example
---
options:
  - name:'description'
    Étiquette:"description"
    Par défaut:"Il y a eu un problème avec votre demande."
nom: 'toast-actions-exemple'
---
::

@@ph084@@Durée

Passez un champ `duration` à la méthode `toast.add` pour modifier la durée pendant laquelle le Toast reste visible (en millisecondes).

::tip
Définissez le champ `duration` sur `0` pour garder le Toast ouvert jusqu'à ce qu 'il soit fermé manuellement.
::

::component-example
---
options:
  - name:'durée'
    Étiquette:"Durée"
    par défaut: 0
    items:
      @@ph091@0
      @@092@1000
      @@3000 à @3000
      @@5000 à @5000
nom: 'toast-duration-exemple'
---
::

### Progrès

Passez un champ `progress` pour personnaliser ou masquer la barre [Progress](/docs/components/progress)(avec la valeur `false`).

::tip
La barre de progression hérite de la couleur Toast par défaut, mais vous pouvez la remplacer en utilisant le champ `progress.color`.
::

::component-example
---
nom: 'toast-progress-exemple'
---
::

### Référencement

Passez un champ `orientation` à la méthode `toast.add` pour modifier l'orientation du Toast.

::component-example
---
options:
  - name:'orientation'
    Étiquette:'orientation'
    par défaut:"horizontal"
    items:
      - horizontale
      - vertical
nom: 'toast-orientation-exemple'
---
::

@@ph109@Exemples

::note{to="/docs/components/app"}
Nuxt UI fournit un composant **App** qui enveloppe votre application pour fournir des configurations globales.
::

### Changement de position mondiale

Modifiez la prop `toaster.position` sur le composant [App](/docs/components/app#props) pour changer la position des toasts.

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
Étiquette: true
nom: 'Toast-exemple'
---

#options
: toaster-position-exemple
::


### Modifier la durée globale

Modifiez la prop `toaster.duration` sur le composant [App](/docs/components/app#props) pour modifier la durée du toast.

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
Étiquette: true
nom: 'Toast-exemple'
---

#Options
: toaster-durée-exemple
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
Étiquette: true
nom: 'Toast-exemple'
---

#Options
Exemple de toaster-max
::


### Toasts empilés

Définissez le `toaster.expand` prop à `false` sur le [App](/docs/components/app#props) pour afficher des toasts empilés (inspiré par [Sonner](https://sonner.emilkowal.ski/)).

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
Étiquette: true
nom: 'Toast-exemple'
---

#Options
Exemple de toaster-expand-exemple
::


### Toasts dédupliqués: badge{label="4.5+" class="align-text-top"}

Lorsque vous appelez `toast.add` avec un `id` qui existe déjà, le pain grillé existant pulsera au lieu de créer un duplicata.

::component-example
---
Collapse: vrai
nom: 'toast-duplicate-example'
---
::

### Avec callback

Passez un champ `onUpdateOpen` pour exécuter un rappel lorsque le toast est fermé (soit par expiration, soit par renvoi de l'utilisateur).

::component-example
---
Collapse: vrai
nom: 'toast-callback-exemple'
---
::

### Avec contenu HTML

Utilisez la fonction de rendu [`h()` dans les champs `title` ou `description` pour rendre des éléments HTML ou des composants Vue avec un style personnalisé.

::component-example
---
Collapse: vrai
nom: 'toast-html-exemple'
---
::

@@ph200@api

@@ph201@@props

Composants-props

@@202@202@2020

Composants slots

@203@émissions

Composants émetteurs

@@ph204@@exposé

Lorsque vous accédez au composant via une référence de modèle, vous pouvez utiliser les éléments suivants:

| nom| type|
| ---- | ---- |
| @@|@@|

@@ph209@thème

Composant-thème

@210@changements

Composant-changelog
