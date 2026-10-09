---
title: Prosécurité
description: 'Mettez en évidence les informations importantes avec des boîtes et des icônes colorées accrocheuses.'
category: components
navigation.title: Callout
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Callout.vue
---

## Utilisation

Utilisez la réduction dans l'emplacement par défaut du composant `callout` pour ajouter un contexte accrocheur à votre contenu.

::component-code{slug="callout" prose}
---
props:
  class: 'w-full my-0'
hide:
  - class
slots:
  default: This is a `callout` with full **markdown** support.
---
::

### icône

Utilisez le prop `icon` pour afficher une icône à côté du contenu.

::component-code{slug="callout" prose}
---
props:
  icon: i-lucide-square-play
  class: 'w-full my-0'
hide:
  - class
slots:
  default: This is a `callout` with an icon.
---
::

### Couleur

Utilisez le prop `color` pour changer la couleur de l'appel.

::component-code{slug="callout" prose}
---
ignore:
  - icon
props:
  icon: i-lucide-info
  color: info
  class: 'w-full my-0'
hide:
  - class
slots:
  default: This is a `callout` with a custom color.
---
::

### Lien

Vous pouvez passer n'importe quelle propriété du composant [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) telle que `to` et `target` pour faire de l'appel un lien.

::component-code{slug="callout" prose}
---
hide:
  - class
ignore:
  - icon
  - target
props:
  icon: i-lucide-square-play
  to: '/docs/getting-started/installation/nuxt'
  color: neutral
  class: 'w-full my-0'
slots:
  default: Learn how to install `@nuxt/ui` in your project.
---
::

## Découpe

Vous pouvez également utiliser les raccourcis `note`, `tip`, `warning` et `caution` avec des icônes et des couleurs prédéfinies.

::code-preview

:::div{class="flex flex-col gap-4 w-full"}

::note{class="w-full my-0"}
Voici quelques informations complémentaires pour vous.
::

::tip{class="w-full my-0"}
Voici une suggestion utile.
::

::warning{class="w-full my-0"}
Soyez prudent avec cette action car elle peut avoir des résultats inattendus.
::

::caution{class="w-full my-0"}
Cette action ne peut être défaite.
::

:::

#code

```mdc
::note
Here's some additional information.
::

::tip
Here's a helpful suggestion.
::

::warning
Be careful with this action as it might have unexpected results.
::

::caution
This action cannot be undone.
::
```

::

## api

### Props équipement

:component-props{prose}

### Slots

:component-slots{prose}

## Thème

:component-theme{prose}

## Changelog

:component-changelog{prefix="prose"}
