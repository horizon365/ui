---
description: 'Affichez une bannière en haut de votre site Web pour informer les utilisateurs des informations importantes.'
category: element
keywords:
  - announcement bar
  - top bar
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Banner.vue
---

## Utilisation

### Titre

Utilisez le prop `title` pour afficher un titre sur la bannière.

::component-code
---
prettier: true
class: '!p-0'
props:
  title: 'This is a banner with an important message.'
---
::

### icône

Utilisez le prop `icon` pour afficher une icône sur la bannière.

::component-code
---
prettier: true
class: '!p-0'
ignore:
  - title
props:
  icon: i-lucide-info
  title: 'This is a banner with an icon.'
---
::

### couleur

Utilisez le prop `color` pour changer la couleur de la bannière.

::component-code
---
prettier: true
class: '!p-0'
ignore:
  - icon
  - title
props:
  color: 'neutral'
  icon: i-lucide-info
  title: 'This is a banner with an icon.'
---
::

### Fermer

Utilisez la prop `close` pour afficher un [Button](/docs/components/button) pour rejeter la bannière.

::tip
Un événement `close` sera émis lorsque le bouton Fermer est cliqué.
::

::component-example
---
iframe:
  style: 'height: 48px;'
overflowHidden: true
name: 'banner-example'
---
#code

```vue
<template>
  <UBanner id="example" title="This is a closable banner." close />
</template>
```

::

::note
Une fois fermé, `banner-${id}` sera stocké dans le stockage local pour l'empêcher de s'afficher à nouveau.: br Pour l'exemple ci-dessus, `banner-example` sera stocké dans le stockage local.
::

::caution
Pour conserver l'état rejeté à travers les rechargements de page, vous devez spécifier une prop. `id` Sans un `id` explicite, la bannière ne sera cachée que pour la session en cours et réapparaîtra lors du rechargement de page.
::

### Fermer l'icône

Utilisez la prop `close-icon` pour personnaliser le bouton de fermeture [Icon](/docs/components/icon).

::component-example
---
iframe:
  style: 'height: 48px;'
overflowHidden: true
name: 'banner-example'
props:
  title: 'This is a closable banner with a custom close icon.'
  closeIcon: 'i-lucide-x-circle'
---
#code

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

Utilisez la prop `actions` pour ajouter des actions [Button](/docs/components/button) à la bannière.

::component-code
---
prettier: true
class: '!p-0'
ignore:
  - title
  - actions
  - variant
external:
  - actions
externalTypes:
  - ButtonProps[]
props:
  title: 'This is a banner with actions.'
  actions:
    - label: Action 1
      variant: outline
    - label: Action 2
      trailingIcon: i-lucide-arrow-right
---
::

::note
Les boutons d'action par défaut sont `color="neutral"` et `size="xs"`. Vous pouvez personnaliser ces valeurs en les transmettant directement à chaque bouton d'action.
::

### Link équipé

Vous pouvez passer n'importe quelle propriété du composant [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) telle que `to`, `target`, `rel`, etc.

::component-code
---
prettier: true
class: '!p-0'
overflowHidden: true
ignore:
  - title
  - target
props:
  to: 'https://nuxtlabs.com/'
  target: '_blank'
  title: 'NuxtLabs is joining Vercel!'
  color: 'primary'
---
::

::note
Le composant `NuxtLink` héritera de tous les autres attributs que vous passez au composant `User`.
::

## Exemples

### Dans `app.vue`

Utilisez le composant Bannière dans votre `app.vue` ou dans une mise en page:

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

## API

### Props

:component-props

### Slots

:component-slots

### Emits

:component-emits

## Thème

:component-theme

## Changelog écrit

:component-changelog
