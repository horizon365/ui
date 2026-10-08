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

@@ph000@@utilisation

Le composant Link est un wrapper autour de [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) en utilisant le [`custom`](https://router.vuejs.org/api/interfaces/RouterLinkProps.html#Properties-customprop.

- `inactive-class` prop pour définir une classe lorsque le lien est inactif,`active-class` est utilisé lorsqu 'il est actif.
- `exact` prop pour styliser avec `active-class` lorsque le lien est actif et que l'itinéraire est exactement le même que l'itinéraire actuel.
- `exact-query` et `exact-hash` props pour styliser avec `active-class` lorsque le lien est actif et que la requête ou le hachage est exactement le même que la requête ou le hachage actuel.
  - utilisez `exact-query="partial"` pour styliser avec `active-class` lorsque le lien est actif et que la requête correspond partiellement à la requête en cours.

L'intérêt de cette solution est de fournir la même API que NuxtLink dans Nuxt 2/Vue 2. Vous pouvez en savoir plus sur la migration du routeur Vue [du guide Vue 2](https://router.vuejs.org/guide/migration/#removal-of-the-exact-prop-in-router-link).

::note
Il est utilisé par le `Breadcrumb`](/docs/components/breadcrumb),[`Button`](/docs/components/button),[`ContextMenu`](/docs/components/context-menu),[`DropdownMenu`](/docs/components/dropdown-menu) et [`NavigationMenu`](/docs/components/navigation-menu).
::

@@pH053@@Tag

Le `Link` composants rend un `<a>` tag lorsqu 'un `to` prop est fourni, sinon il rend un `<button>` tag.

::component-code
---
Props:
  à:"
  Étiquette:"bouton"
Slots:
  Défaut: Link
---
::

::note
Vous pouvez inspecter le HTML rendu en changeant le `to` prop.
::

@@ph060@stylisme

Par défaut, le lien a des styles actifs et inactifs par défaut, consultez la section [#theme](#theme).

::component-code
---
Props:
  à:/docs/composants/link
Slots:
  by default: Link
---
::

::note
Essayez de changer la prop `to` pour voir les états actif et inactif.
::

Vous pouvez remplacer ce comportement en utilisant la prop `raw` et fournir vos propres styles en utilisant `class`,`active-class` et `inactive-class`.

::component-code
---
ignorer:
  @@ph070@raw
Props:
  Raw: vrai
  à:/docs/composants/link
  Classe d'utilisateur: font-bold
  inactiveClass: 'text-muted'
Slots:
  Défaut: Link
---

Lien
::

::callout{icon="i-simple-icons-visualstudiocode"}
Si vous utilisez l'extension [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) pour VSCode et que vous souhaitez obtenir l'autocomplétion pour les props `active-class` et `inactive-class`, vous pouvez ajouter les paramètres suivants à votre `.vscode/settings.json`:

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

Le composant Link s'intègre automatiquement avec `@nuxtjs/i18n`](https://i18n.nuxtjs.org/) lorsqu 'il est installé. Les liens internes sont automatiquement localisés à l'aide de l'assistant `$localePath` sans nécessiter d'emballage manuel.

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

@@ph102@api

@@ph103@@props

::component-props
---
Ignorer:
  -  custom
---
::

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes" target="_blank"}
Ce composant prend également en charge tous les attributs HTML natifs `<a>`.
::

@@ph106@@réglages

Composants slots

@107@thème

Composant-thème

@changement@changement@changement@changement.com

Composant-changelog
