---
description: 'Een responsieve header voor uw sitenavigatie.'
category: layout
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Header.vue
---

## Gebruik

De Header-component geeft een `<header>`-element weer.

::tip{to="/docs/getting-started/theme/css-variables#header"}
De hoogte wordt bepaald door een `--ui-header-height` CSS-variabele.
::

Gebruik de `left`-, `default`- en `right`-slots om de header aan te passen en de `body`- of `content`-slots om het headermenu aan te passen.

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
In dit voorbeeld gebruiken we de [NavigationMenu](/docs/components/navigation-menu) om de koptekstlinks in het midden weer te geven.
::

### Titel

Gebruik de `title` prop om de titel van de header te wijzigen. Standaard is `Nuxt UI`.

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

U kunt ook de `title`-sleuf gebruiken om uw eigen logo toe te voegen.

::tip{to="#props"}
U moet nog steeds de `title` prop toevoegen om de standaard `aria-label` van de link te vervangen.
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

### Naar

Gebruik de `to` prop om de link van de titel te wijzigen. Standaard is `/`.

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

U kunt ook de `left`-sleuf gebruiken om de link volledig te negeren.

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

### Modus

Gebruik de `mode` prop om de modus van het headermenu te wijzigen. Standaard `modal`.

Gebruik de `body`-sleuf om de menubalk (onder de kop) te vullen of de `content`-sleuf om het hele menu te vullen.

::tip{to="#props"}
U kunt de `menu` prop gebruiken om het menu van de header aan te passen, deze zal zich aanpassen afhankelijk van de modus die u kiest.
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

### Toggle

Gebruik de `toggle` prop om de schakelknop op mobiel aan te passen.

U kunt elke eigenschap van de [Button](/docs/components/button) component doorgeven om deze aan te passen.

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

### Zijde uitschakelen

Gebruik de `toggle-side` prop om de zijkant van de schakelknop te wijzigen. Standaard `right`.

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

## Voorbeelden

### Met geanimeerde schakelaar

Gebruik de `#toggle`-sleuf om de standaard schakelknop te vervangen door een aangepast geanimeerd hamburgerpictogram met [Motion Vue](https://motion.dev/docs/vue/motion-component).

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

### Binnen `app.vue`

Gebruik de Header component in je `app.vue` of in een layout:

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

### Uitzendt

:component-emits

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog
