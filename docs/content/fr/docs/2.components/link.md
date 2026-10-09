---
description: Un wrapper autour de NuxtLink avec des accessoires supplémentaires.
category: navigation
keywords:
  - anchor
  - href
  - navigation
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Link.vue
---

## Utilisation

Le composant Link est un wrapper autour de [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) en utilisant la prop. [xph002](https://router.vuejs.org/api/interfaces/RouterLinkProps.html#Properties-custom).

- `inactive-class` prop pour définir une classe quand le lien est inactif, `active-class` est utilisé quand il est actif.
- `exact` prop à style avec `active-class` lorsque le lien est actif et que l'itinéraire est exactement le même que l'itinéraire actuel.
Les props - `exact-query` et `exact-hash` sont stylisés avec `active-class` lorsque le lien est actif et que la requête ou le hachage est exactement le même que la requête ou le hachage en cours.
  -  utilise `exact-query="partial"` pour styliser avec `active-class` lorsque le lien est actif et que la requête correspond partiellement à la requête actuelle.

L'intérêt de cette approche est de fournir la même API que NuxtLink dans Nuxt 2/Vue 2. Vous pouvez en savoir plus à ce sujet dans le guide Vue Router [migration de Vue 2](xph026).

::note
Il est utilisé par les composants [`Breadcrumb`](/docs/components/breadcrumb), [`Button`](/docs/components/button), [`ContextMenu`](xph043), [`DropdownMenu`](/docs/components/dropdown-menu) et [x`NavigationMenu`/docs/components/navigation-menu).
::

### Télécharger

Le composant `Link` rend une balise `<a>` lorsqu 'un prop `to` est fourni, sinon il rend une balise `<button>`.

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
Vous pouvez inspecter le HTML rendu en changeant la prop. `to`.
::

### Style

Par défaut, le lien a des styles actifs et inactifs par défaut, consultez la section [#theme](#theme).

::component-code
---
props:
  to: /docs/components/link
slots:
  default: Link
---
::

::note
Essayez de changer le prop `to` pour voir les états actif et inactif.
::

Vous pouvez remplacer ce comportement en utilisant la prop `raw` et fournir vos propres styles en utilisant `class`, `active-class` et `inactive-class`.

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

Lien
::

::callout{icon="i-simple-icons-visualstudiocode"}
Si vous utilisez l'extension [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) pour VSCode et que vous souhaitez obtenir la complétion automatique pour les props `active-class` et `inactive-class`, vous pouvez ajouter les paramètres suivants à votre `.vscode/settings.json`:

```json [.vscode/settings.json]
{
  "tailwindCSS.classAttributes": [
    "active-class",
    "inactive-class"
  ]
}
```
::

### Locale: badge{label="4.7+" class="align-text-top"}

Le composant Link s'intègre automatiquement avec [`@nuxtjs/i18n`](https://i18n.nuxtjs.org/) lorsqu 'il est installé. Les liens internes sont automatiquement localisés à l'aide de l'assistant `$localePath` sans nécessiter d'emballage manuel.

```vue
<template>
  <!-- Automatically becomes /en/about or /fr/about based on current locale -->
  <ULink to="/about">About</ULink>
</template>
```

::tip
Vous pouvez toujours utiliser manuellement `localePath()` ou `localeRoute()` si nécessaire.
::

::note{to="/docs/getting-started/integrations/i18n/nuxt#dynamic-locale"}
En savoir plus sur l'internationalisation dans Nuxt UI.
::

## API

### Props équipements

::component-props
---
ignore:
  - custom
---
::

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes" target="_blank"}
Ce composant prend également en charge tous les attributs HTML natifs `<a>`.
::

### Slots

:component-slots

## Thème

:component-theme

## Changelog écrit

:component-changelog
