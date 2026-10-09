---
description: 'Een responsieve voettekst voor uw sitelinks en juridische kennisgevingen.'
category: layout
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Footer.vue
---

## Gebruik

De Footer component geeft een `<footer>` element weer.

Gebruik de `left`, `default` en `right` slots om de voettekst aan te passen.

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
In dit voorbeeld gebruiken we de [NavigationMenu](/docs/components/navigation-menu) om de voettekstlinks in het midden weer te geven.
::

::tip{to="/docs/components/footer-columns"}
U kunt het `FooterColumns`-onderdeel gebruiken om een lijst met links in de `top`-sleuf weer te geven.
::

## Voorbeelden

### Binnen `app.vue`

Gebruik de Footer-component in uw `app.vue` of in een lay-out:

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
In dit voorbeeld gebruiken we de [Separator](/docs/components/separator) om een rand boven de voettekst toe te voegen.
::

## API

### Props

:component-props

### Slots

:component-slots

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog
