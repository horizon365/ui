---
description: 'Eine ansprechende Fußzeile für Ihre Website-Links und rechtliche Hinweise.'
category: layout
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Footer.vue
---

## Bearbeiten

Die Footer Komponente rendert ein `<footer>` Element.

Verwenden Sie die Slots `left`, `default` und `right`, um die Fußzeile anzupassen.

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
In diesem Beispiel verwenden wir die Komponente [NavigationMenu](/docs/components/navigation-menu), um die Fußzeilenlinks in der Mitte darzustellen.
::

::tip{to="/docs/components/footer-columns"}
Sie können die `FooterColumns`-Komponente verwenden, um eine Liste von Links innerhalb des `top`-Steckplatzes anzuzeigen.
::

## Examples (Beispiele)

### Innerhalb `app.vue`

Verwenden Sie die Footer-Komponente in Ihrem `app.vue` oder in einem Layout:

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
In diesem Beispiel verwenden wir die Komponente [Separator](/docs/components/separator), um einen Rahmen über der Fußzeile hinzuzufügen.
::

## API (Englisch)

### Props (nicht)

:component-props

### Slots (englisch)

:component-slots

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
