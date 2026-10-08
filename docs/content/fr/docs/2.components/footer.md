---
description: 'Un pied de page responsive pour vos liens de site et mentions légales.'
category: layout
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Footer.vue
---

@@ph000@utilisation

Le composant Footer rend un élément `<footer>`.

Utilisez les emplacements `left`,`default` et `right` pour personnaliser le pied de page.

::component-example
---
Étiquette: true
Collapse: vrai
nom: 'exemple'
classe: '! p-0'
Props:
  Catégorie: w-full
---
::

::note
Dans cet exemple, nous utilisons le composant [NavigationMenu](/docs/components/navigation-menu) pour rendre les liens de pied de page au centre.
::

::tip{to="/docs/components/footer-columns"}
Vous pouvez utiliser le composant `FooterColumns` pour afficher une liste de liens à l'intérieur du slot `top`.
::

@@ph011@@exemples

### Dans `app.vue`

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

@@ph089@api

@@ph090@@props

Composants-props

@@ph091@@slot

Composants slots

@@ph092@thème

Composant-thème

@changement@changement@changement@changement.com

Composant-changelog
