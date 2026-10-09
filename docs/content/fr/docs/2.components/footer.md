---
description: 'Un pied de page responsive pour vos liens de site et mentions légales.'
category: layout
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Footer.vue
---

## Utilisation

Le composant Pied de page rend un élément `<footer>`.

Utilisez les fentes `left`, `default` et `right` pour personnaliser le pied de page.

::component-example
---
prettier: true
collapse: true
name: 'footer-example'
class: '!p-0'
props:
  class: 'w-full'
---
::

::note
Dans cet exemple, nous utilisons le composant [NavigationMenu](/docs/components/navigation-menu) pour rendre les liens de pied de page au centre.
::

::tip{to="/docs/components/footer-columns"}
Vous pouvez utiliser le composant `FooterColumns` pour afficher une liste de liens à l'intérieur de l'emplacement `top`.
::

## Exemples

### Avec `app.vue`

Utilisez le composant Pied de page dans votre `app.vue` ou dans une mise en page:

```vue [app.vue]{32-67}
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [{
  label: 'Figma Kit',
  to: 'https://go.nuxt.com/figma-ui',
  target: '_blank'
}, {
  label: 'Playground',
  to: 'https://stackblitz.com/edit/nuxt-ui',
  target: '_blank'
}, {
  label: 'Releases',
  to: 'https://github.com/nuxt/ui/releases',
  target: '_blank'
}]
</script>

<template>
  <UApp>
    <UHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <USeparator icon="i-simple-icons-nuxtdotjs" type="dashed" class="h-px" />

    <UFooter>
      <template #left>
        <p class="text-muted text-sm">
          Copyright © {{ new Date().getFullYear() }}
        </p>
      </template>

      <UNavigationMenu :items="items" variant="link" />

      <template #right>
        <UButton
          icon="i-simple-icons-discord"
          color="neutral"
          variant="ghost"
          to="https://go.nuxt.com/discord"
          target="_blank"
          aria-label="Discord"
        />
        <UButton
          icon="i-simple-icons-x"
          color="neutral"
          variant="ghost"
          to="https://go.nuxt.com/x"
          target="_blank"
          aria-label="X"
        />
        <UButton
          icon="i-simple-icons-github"
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/nuxt"
          target="_blank"
          aria-label="GitHub"
        />
      </template>
    </UFooter>
  </UApp>
</template>
```

::note
Dans cet exemple, nous utilisons le composant [Separator](/docs/components/separator) pour ajouter une bordure au-dessus du pied de page.
::

## api

### Props

:component-props

### Slots

:component-slots

## Thème

:component-theme

## Changelog écrit

:component-changelog
