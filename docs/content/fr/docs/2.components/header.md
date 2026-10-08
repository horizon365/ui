---
description: 'Un header responsive pour la navigation de votre site.'
category: layout
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Header.vue
---

@@ph000@@utilisation

Le composant Header rend un élément `<header>`.

::tip{to="/docs/getting-started/theme/css-variables#header"}
Sa hauteur est définie par une variable CSS `--ui-header-height`.
::

Utilisez les emplacements `left`,`default` et `right` pour personnaliser l'en-tête et les emplacements `body` ou `content` pour personnaliser le menu de l'en-tête.

::component-example
---
Collapse: vrai
Étiquette: true
nom: 'exemple de tête'
classe: '! px-0! pt-0'
dépassement: true
Props:
  Catégorie: w-full
---
::

::note
Dans cet exemple, nous utilisons le composant [NavigationMenu](/docs/components/navigation-menu) pour rendre les liens d'en-tête dans le centre.
::

@@ph012@@titre

Utilisez la prop `title` pour changer le titre de l'en-tête. Defaults en `Nuxt UI`.

::component-code
---
Caché:
  @@classe 15
Props:
  Titre: Nuxt UI
  Catégorie: w-full
classe: '! px-0! pt-0'
---
::

Vous pouvez également utiliser l'emplacement `title` pour ajouter votre propre logo.

::tip{to="#props"}
Vous devez toujours ajouter le `title` prop pour remplacer le `aria-label` par défaut du lien.
::

::component-code
---
Étiquette: true
dépassement: true
Caché:
  @@classe 19
Props:
  Catégorie: w-full
Slots:
  Titre:|

    @@@ 2019 @
classe: '! px-0! pt-0'
---

#titre
par logo{class="h-6 w-auto"}
::

@@2222@référence

Utilisez la prop `to` pour changer le lien du titre. Defaults à `/`.

::component-code
---
Caché:
  @@classe 25
classe: '! px-0! pt-0'
Props:
  à:/docs
  Catégorie: w-full
---
::

Vous pouvez également utiliser l'emplacement `left` pour remplacer complètement le lien.

::component-code
---
Étiquette: true
dépassement: true
Caché:
  @@ph027@classe
classe: '! px-0! pt-0'
Props:
  Catégorie: w-full
Slots:
  gauche:|

    @@@ 28 @
      @@@ 29 @
    @@@ 030 @
---

#gauche
::nuxt-link{to="/docs"}
par: logo{class="h-6 w-auto"}
::
::

@@pH032@mode

Utilisez la prop `mode` pour changer le mode du menu d'en-tête. Par défaut à `modal`.

Utilisez l'emplacement `body` pour remplir le corps du menu (sous l'en-tête) ou l'emplacement `content` pour remplir le menu entier.

::tip{to="#props"}
Vous pouvez utiliser le prop `menu` pour personnaliser le menu de l'en-tête, il s'adaptera en fonction du mode que vous choisissez.
::

::component-example
---
Collapse: vrai
iframe:
  Hauteur: 300px
iframeMobile: vrai
dépassement: true
nom: 'header-menu-exemple'
options:
  - name:« mode »
    Étiquette: mode
    Défaut:"Drawer"
    items:
      @@ph039@modalité
      - slide
      @@pH041@@caissier
Props:
  Catégorie: w-full
---
::

@@2014@Toggle

Utilisez le prop `toggle` pour personnaliser le bouton bascule affiché sur mobile.

Vous pouvez passer n'importe quelle propriété du composant [Button](/docs/components/button) pour le personnaliser.

::component-example
---
Collapse: vrai
iframe:
  Hauteur: 300px
iframeMobile: vrai
dépassement: true
nom: 'header-toggle-example'
Props:
  Catégorie: w-full
---
::

### Toggle Côté

Utilisez la prop `toggle-side` pour changer le côté du bouton bascule. Par défaut,`right`.

::component-example
---
Collapse: vrai
iframe:
  Hauteur: 300px
iframeMobile: vrai
dépassement: true
nom: 'header-toggle-side-exemple'
Props:
  Catégorie: w-full
---
::

@@ph051@@Exemples

### Avec toggle animée

Utilisez l'emplacement `#toggle` pour remplacer le bouton bascule par défaut par une icône de hamburger animée personnalisée en utilisant [Motion Vue](https://motion.dev/docs/vue/motion-component).

::component-example
---
Collapse: vrai
Iframe:
  Hauteur: 300px
iframeMobile: vrai
dépassement: true
nom: 'header-toggle-animated-exemple'
Props:
  Catégorie: w-full
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

@@ph123@api

@@ph124@@props

Composants-props

@@ph125@@réglages

Composants slots

@126@126@126

Composants émetteurs

@@ph127@thème

Composant-thème

@change128 @ changement

Composant-changelog
