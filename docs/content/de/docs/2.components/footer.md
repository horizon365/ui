---
description: 'Eine ansprechende Fußzeile für Ihre Website-Links und rechtliche Hinweise.'
category: layout
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Footer.vue
---

@@@ph000@Verwendung

Die Footer-Komponente rendert ein `<footer>`-Element.

Verwenden Sie die `left`,`default` und `right` Slots, um die Fußzeile anzupassen.

::component-example
---
Schöner: wahr
Einsturz: wahr
Name: 'Beispiel-Fußzeile'
Klasse: '! p-0'
Props:
  Klasse: "W-voll"
---
::

::note
In diesem Beispiel verwenden wir die Komponente [NavigationMenu](/docs/components/navigation-menu), um die Fußzeilenlinks in der Mitte zu rendern.
::

::tip{to="/docs/components/footer-columns"}
Sie können die Komponente `FooterColumns` verwenden, um eine Liste von Links innerhalb des `top`-Slots anzuzeigen.
::

@@ph011@@Beispiele

@@ph012@@@ph013@@@ph013@@@@ph012@@@@@@ph013@@@@@ph013@@@@@ph013@@@@@@ph013@@@@@ph013@@@@@ph013@@@@@ph013@@@@@@ph013 @

Verwenden Sie die Fußzeilenkomponente in Ihrem `app.vue` oder in einem Layout:

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

@@@@@@899@@bmdbb

@@@@@@@@@@@ph090@@@props

Komponenten-Props

@@ph091@@slots

Die Komponenten-Slots

@@ph092@@gmail.de

Das Komponenten-Theme

@@ph093@@changelog @@changelog

Das Component-Changelog
