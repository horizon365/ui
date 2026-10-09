---
description: 'Responsive Header für die Navigation Ihrer Website.'
category: layout
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Header.vue
---

## Bearbeiten

Die Header-Komponente rendert ein `<header>`-Element.

::tip{to="/docs/getting-started/theme/css-variables#header"}
Die Höhe wird durch eine CSS-Variable `--ui-header-height` definiert.
::

Verwenden Sie die Slots `left`, `default` und `right`, um den Header und die Slots `body` oder `content` anzupassen, um das Header-Menü anzupassen.

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
In diesem Beispiel verwenden wir die Komponente [NavigationMenu](/docs/components/navigation-menu), um die Header-Links in der Mitte zu rendern.
::

### title Übersetzung

Verwenden Sie die `title`-prop, um den Titel des Headers zu ändern. Standardmäßig auf `Nuxt UI`.

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

Sie können auch den `title`-slot verwenden, um ihr eigenes logo hinzuzufügen.

::tip{to="#props"}
Sie sollten immer noch die `title`-prop hinzufügen, um die standardmäßige `aria-label` des Links zu ersetzen.
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

### To Bearbeiten

Verwenden Sie die `to`-prop, um den Link des Titels zu ändern. Standardmäßig zu `/`.

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

Sie können auch den `left`-Steckplatz verwenden, um den Link vollständig zu überschreiben.

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

### Mode Bearbeiten

Verwenden Sie die `mode`-prop, um den Modus des Header-Menüs zu ändern. Standardmäßig ist `modal`.

Verwenden Sie den `body`-Steckplatz, um den Menükörper (unter der Kopfzeile) oder den `content`-Steckplatz zu füllen, um das gesamte Menü zu füllen.

::tip{to="#props"}
Sie können die `menu`-prop verwenden, um das Menü des Headers anzupassen, es wird sich je nach dem von Ihnen gewählten Modus anpassen.
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

### Toggle (nicht)

Verwenden Sie die `toggle`-Prop, um die auf dem Handy angezeigte Umschalttaste anzupassen.

Sie können jede Eigenschaft der Komponente [Button](/docs/components/button) übergeben, um sie anzupassen.

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

### Toggle Side Seite

Verwenden Sie die `toggle-side`-Stütze, um die Seite der Kipptaste zu wechseln. Standardmäßig ist `right`.

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

## Examples [Bearbeiten]

### Mit animiertem Kippschalter

Verwenden Sie den `#toggle`-Steckplatz, um die Standard-Umschalttaste durch ein benutzerdefiniertes animiertes Hamburger-Symbol mit [Motion Vue](https://motion.dev/docs/vue/motion-component) zu ersetzen.

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

### Innerhalb von `app.vue`

Verwenden Sie die Header-Komponente in Ihrem `app.vue` oder in einem Layout:

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

## API Bearbeiten

### Props (englisch)

:component-props

### Slots Bearbeiten

:component-slots

### Emits (englisch)

:component-emits

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
