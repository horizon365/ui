---
description: 'Responsive Header für die Navigation Ihrer Website.'
category: layout
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Header.vue
---

@@@ph000@@Verwendung

Die Header-Komponente rendert ein `<header>`-Element.

::tip{to="/docs/getting-started/theme/css-variables#header"}
Seine Höhe wird durch eine `--ui-header-height` CSS-Variable definiert.
::

Verwenden Sie die `left`,`default` und `right` Slots, um den Header anzupassen und die `body` oder `content` Slots, um das Header-Menü anzupassen.

::component-example
---
Einsturz: wahr
Schöner: wahr
Name: "Header-Beispiel"
Klasse: '! px-0! pt-0'
Übertreibungen: wahr
Props:
  Klasse: "W-voll"
---
::

::note
In diesem Beispiel verwenden wir die Komponente [NavigationMenu](/docs/components/navigation-menu), um die Header-Links in der Mitte zu rendern.
::

@@ph012@title

Verwenden Sie `title` prop, um den Titel des Headers zu ändern. Defaults zu `Nuxt UI`.

::component-code
---
Hide:
  @@15@Klasse
Props:
  Titel: Nuxt UI
  Klasse: "W-voll"
Klasse: '! px-0! pt-0'
---
::

Sie können auch den `title` Slot verwenden, um Ihr eigenes Logo hinzuzufügen.

::tip{to="#props"}
Sie sollten immer noch das `title` prop hinzufügen, um das Standard-`aria-label` des Links zu ersetzen.
::

::component-code
---
Schöner: wahr
Übertreibungen: wahr
Hide:
  @@ph019@class
Props:
  Klasse: "W-voll"
Slots auf:
  Titel:|

    @@ph020 von mir
Klasse: '! px-0! pt-0'
---

#Überschrift
: logo{class="h-6 w-auto"}
::

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@######################################################################################################################################################################################################################

Verwenden Sie `to` prop, um den Link des titles. Defaults auf `/` zu ändern.

::component-code
---
Hide:
  @@@@@@@@@@@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@classclass@class@classclass@classclass@class@classclass@class@class@class@classc
Klasse: '! px-0! pt-0'
Props:
  zu: '/docs'
  Klasse: "W-voll"
---
::

Sie können auch den `left`-Slot verwenden, um den Link vollständig zu überschreiben.

::component-code
---
Schöner: wahr
Übertreibungen: wahr
Hide:
  @@ph027@gmail.de
Klasse: '! px-0! pt-0'
Props:
  Klasse: "W-voll"
Slots auf:
  links:|

    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@028
      @@@@@@@@@@@029
    @030
---

#links
::nuxt-link{to="/docs"}
: logo{class="h-6 w-auto"}
::
::

@@ph032@mode.de

Verwenden Sie `mode` prop, um den Modus des Header-Menüs zu ändern. Standardmäßig auf `modal`.

Verwenden Sie den `body`-Steckplatz, um den Menükörper (unter der Kopfzeile) oder den `content`-Steckplatz zu füllen, um das gesamte Menü zu füllen.

::tip{to="#props"}
Sie können das `menu` prop verwenden, um das Menü des Headers anzupassen, es passt sich je nach gewähltem Modus an.
::

::component-example
---
Einsturz: wahr
IFrame:
  Größe: 300px
iframeMobile: wahr
Übertreibungen: wahr
Name: 'header-menu-example'(header-menu-beispiel)
Optionen:
  - name:'Modus'
    Markiert: "mode"
    Default: „ Schublade "
    Items:
      @@@399@modal
      @@ph040@slideover@slideover.de
      @@ph041@gmail.de
Props:
  Klasse: "W-voll"
---
::

@@@ph042@@toggle

Verwenden Sie `toggle` prop, um die auf dem Handy angezeigte Umschalttaste anzupassen.

Sie können jede Eigenschaft aus der Komponente [Button](/docs/components/button) übergeben, um sie anzupassen.

::component-example
---
Einsturz: wahr
IFrame:
  Größe: 300px
iframeMobile: wahr
Übertreibungen: wahr
Name: 'header-toggle-example'(Header-Toggle-Beispiel)
Props:
  Klasse: "W-voll"
---
::

### Toggle Side (auf Englisch)

Verwenden Sie `toggle-side` prop, um die Seite der Toggle-Taste zu ändern. Standardmäßig `right`.

::component-example
---
Einsturz: wahr
IFrame:
  Größe: 300px
iframeMobile: wahr
Übertreibungen: wahr
Name: 'header-toggle-side-example'(header-toggle-side-Beispiel)
Props:
  Klasse: "W-voll"
---
::

## Beispiele

### Mit animierten Toggle

Verwenden Sie den `#toggle`-Slot, um die Standard-Umschalttaste durch ein benutzerdefiniertes animiertes Hamburger-Symbol zu ersetzen, indem Sie [Motion Vue](https://motion.dev/docs/vue/motion-component) verwenden.

::component-example
---
Einsturz: wahr
IFrame:
  Größe: 300px
iframeMobile: Richtig
Übertreibungen: wahr
Header-Toggle-Animated-Example (englisch)
Props:
  Klasse: "W-voll"
---
::

@@ph058@@@ph059@@@ph058@@@@ph059@@@@@ph059@@@@ph059@@@@@ph059@@@@@ph059@@@@@ph059@@@@@ph059@@@@@ph059@@@@@@ph059@@@@@@@ph059@@@@@@@@@@@@ph059@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

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

@@123@bpb

@@@@@@@@ph124@@Props

Komponenten Props

### Spielautomaten

Die Komponenten-Slots

### Emits

Komponenten emittieren

## Themes

Das Komponenten-Theme

@@ph128@@changelog (auf Englisch)

Das Component-Changelog
