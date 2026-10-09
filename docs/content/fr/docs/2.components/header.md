---
description: 'Un header responsive pour la navigation de votre site.'
category: layout
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Header.vue
---

## Utilisation

Le composant Header renvoie un élément `<header>`.

::tip{to="/docs/getting-started/theme/css-variables#header"}
Sa hauteur est définie par une variable CSS `--ui-header-height`.
::

Utilisez les emplacements `left`, `default` et `right` pour personnaliser l'en-tête et les emplacements `body` ou `content` pour personnaliser le menu d'en-tête.

::component-example
---
collapse: true
prettier: true
name: 'header-example'
class: '!px-0 !pt-0'
overflowHidden: true
props:
  class: 'w-full'
---
::

::note
Dans cet exemple, nous utilisons le composant [NavigationMenu](/docs/components/navigation-menu) pour rendre les liens d'en-tête au centre.
::

### Titre

Utilisez la prop `title` pour changer le titre de l'en-tête. Defaults à `Nuxt UI`.

::component-code
---
hide:
  - class
props:
  title: 'Nuxt UI'
  class: 'w-full'
class: '!px-0 !pt-0'
---
::

Vous pouvez également utiliser l'emplacement `title` pour ajouter votre propre logo.

::tip{to="#props"}
Vous devez toujours ajouter le prop `title` pour remplacer le `aria-label` par défaut du lien.
::

::component-code
---
prettier: true
overflowHidden: true
hide:
  - class
props:
  class: 'w-full'
slots:
  title: |

    <Logo class="h-6 w-auto" />
class: '!px-0 !pt-0'
---

#title
:logo{class="h-6 w-auto"}
::

### Télécharger

Utilisez la prop `to` pour changer le lien du titre. Defaults à `/`.

::component-code
---
hide:
  - class
class: '!px-0 !pt-0'
props:
  to: '/docs'
  class: 'w-full'
---
::

Vous pouvez également utiliser le slot `left` pour remplacer complètement le lien.

::component-code
---
prettier: true
overflowHidden: true
hide:
  - class
class: '!px-0 !pt-0'
props:
  class: 'w-full'
slots:
  left: |

    <NuxtLink to="/docs">
      <Logo class="h-6 w-auto" />
    </NuxtLink>
---

#left
::nuxt-link{to="/docs"}
:logo{class="h-6 w-auto"}
::
::

### mode

Utilisez la prop `mode` pour modifier le mode du menu d'en-tête. Par défaut `modal`.

Utilisez l'emplacement `body` pour remplir le corps du menu (sous l'en-tête) ou l'emplacement `content` pour remplir le menu entier.

::tip{to="#props"}
Vous pouvez utiliser le prop `menu` pour personnaliser le menu de l'en-tête, il s'adaptera en fonction du mode que vous choisissez.
::

::component-example
---
collapse: true
iframe:
  height: 300px;
iframeMobile: true
overflowHidden: true
name: 'header-menu-example'
options:
  - name: 'mode'
    label: 'mode'
    default: 'drawer'
    items:
      - modal
      - slideover
      - drawer
props:
  class: 'w-full'
---
::

### Télécharger

Utilisez l'accessoire `toggle` pour personnaliser le bouton bascule affiché sur mobile.

Vous pouvez passer n'importe quelle propriété du composant [Button](/docs/components/button) pour le personnaliser.

::component-example
---
collapse: true
iframe:
  height: 300px;
iframeMobile: true
overflowHidden: true
name: 'header-toggle-example'
props:
  class: 'w-full'
---
::

### Toggle côté

Utilisez la prop `toggle-side` pour changer le côté du bouton bascule. Par défaut, `right`.

::component-example
---
collapse: true
iframe:
  height: 300px;
iframeMobile: true
overflowHidden: true
name: 'header-toggle-side-example'
props:
  class: 'w-full'
---
::

## Exemples

### With toggle animée

Utilisez l'emplacement `#toggle` pour remplacer le bouton bascule par défaut par une icône de hamburger animée personnalisée en utilisant [Motion Vue](https://motion.dev/docs/vue/motion-component).

::component-example
---
collapse: true
iframe:
  height: 300px;
iframeMobile: true
overflowHidden: true
name: 'header-toggle-animated-example'
props:
  class: 'w-full'
---
::

### Dans `app.vue`

Utilisez le composant Header dans votre `app.vue` ou dans une mise en page:

```vue [app.vue]{28-51}
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Docs',
  to: '/docs/getting-started',
  active: route.path.startsWith('/docs/getting-started')
}, {
  label: 'Components',
  to: '/docs/components',
  active: route.path.startsWith('/docs/components')
}, {
  label: 'Figma',
  to: 'https://go.nuxt.com/figma-ui',
  target: '_blank'
}, {
  label: 'Releases',
  to: 'https://github.com/nuxt/ui/releases',
  target: '_blank'
}])
</script>

<template>
  <UApp>
    <UHeader>
      <template #title>
        <Logo class="h-6 w-auto" />
      </template>

      <UNavigationMenu :items="items" />

      <template #right>
        <UColorModeButton />

        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/ui"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </template>

      <template #body>
        <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
      </template>
    </UHeader>

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

## Changelog

:component-changelog
