---
description: Een wikkel rond NuxtLink met extra rekwisieten.
category: navigation
keywords:
  - anchor
  - href
  - navigation
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Link.vue
---

## Gebruik

De Link-component is een wikkel om [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) met behulp van de [`custom`](https://router.vuejs.org/api/interfaces/RouterLinkProps.html#Properties-custom) prop. Het biedt een paar extra rekwisieten:

- `inactive-class` prop om een klasse in te stellen wanneer de link inactief is, `active-class` wordt gebruikt wanneer deze actief is.
- `exact` prop om te stylen met `active-class` wanneer de link actief is en de route exact hetzelfde is als de huidige route.
- `exact-query` en `exact-hash` rekwisieten om te stylen met `active-class` wanneer de link actief is en de query of hash exact hetzelfde is als de huidige query of hash.
- use `exact-query="partial"` om te stylen met `active-class` wanneer de link actief is en de query gedeeltelijk overeenkomt met de huidige query.

De stimulans hierachter is om dezelfde API als NuxtLink terug te bieden in Nuxt 2 / Vue 2.
Je kunt er meer over lezen in de Vue Router [migratie van Vue 2](https://router.vuejs.org/guide/migration/#removal-of-the-exact-prop-in-router-link) gids.

::note
Het wordt gebruikt door de [`Breadcrumb`](/docs/components/breadcrumb), [`Button`](/docs/components/button), [`ContextMenu`](/docs/components/context-menu), [`DropdownMenu`](/docs/components/dropdown-menu) en [`NavigationMenu`](/docs/components/navigation-menu) componenten.
::

### Tag

De `Link`-componenten geven een `<a>`-tag weer wanneer een `to`-prop wordt geleverd, anders wordt er een `<button>`-tag weergegeven. U kunt de `as`-prop gebruiken om de fallback-tag te wijzigen.

::component-code
---
props:
  to: ''
  as: 'button'
slots:
  default: Link
---
::

::note
U kunt de gerenderde HTML inspecteren door de `to` prop te wijzigen.
::

### Stijl

Standaard heeft de link standaard actieve en inactieve stijlen, bekijk de [ #theme](#theme) sectie.

::component-code
---
props:
  to: /docs/components/link
slots:
  default: Link
---
::

::note
Probeer de `to`-prop te wijzigen om de actieve en inactieve toestanden te zien.
::

U kunt dit gedrag overschrijven door de `raw` prop te gebruiken en uw eigen stijlen aan te bieden met `class`, `active-class` en `inactive-class`.

::component-code
---
ignore:
  - raw
props:
  raw: true
  to: /docs/components/link
  activeClass: 'font-bold'
  inactiveClass: 'text-muted'
slots:
  default: Link
---

Koppeling
::

::callout{icon="i-simple-icons-visualstudiocode"}
Als u de [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) extensie voor VSCode gebruikt en u wilt automatisch aanvullen voor de `active-class`- en `inactive-class`-rekwisieten, kunt u de volgende instellingen aan uw `.vscode/settings.json` toevoegen:

```json [.vscode/settings.json]
{
  "tailwindCSS.classAttributes": [
    "active-class",
    "inactive-class"
  ]
}
```
::

### Lokaal: badge{label="4.7+" class="align-text-top"}

De Link-component integreert automatisch met [`@nuxtjs/i18n`](https://i18n.nuxtjs.org/) wanneer geïnstalleerd. Interne links worden automatisch gelokaliseerd met behulp van de `$localePath`-helper zonder handmatige verpakking.

```vue
<template>
  <!-- Automatically becomes /en/about or /fr/about based on current locale -->
  <ULink to="/about">About</ULink>
</template>
```

::tip
U kunt desgewenst nog steeds handmatig `localePath()` of `localeRoute()` gebruiken.
::

::note{to="/docs/getting-started/integrations/i18n/nuxt#dynamic-locale"}
Meer informatie over Internationalization in Nuxt UI.
::

## API

### Props

::component-props
---
ignore:
  - custom
---
::

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes" target="_blank"}
Dit onderdeel ondersteunt ook alle native `<a>` HTML-kenmerken.
::

### Slots

:component-slots

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog
