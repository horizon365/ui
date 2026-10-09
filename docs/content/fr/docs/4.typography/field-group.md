---
title: Propriétaire FieldGroup
description: 'Regroupez les champs connexes pour une documentation complète de l'API.'
category: components
navigation.title: FieldGroup
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/FieldGroup.vue
---

## Utilisation

Regrouper les champs dans une liste.

:::code-preview

::field-group{class="my-0"}

  ::field{name="analytics" type="boolean"}
  Par défaut, `false`. Permet l'analyse de votre projet (à venir).
  ::

  ::field{name="blob" type="boolean"}
  Par défaut, `false`. permet au stockage blob de stocker des ressources statiques, telles que des images, des vidéos, etc.
  ::

  ::field{name="cache" type="boolean"}
  Permet le stockage en cache pour mettre en cache les réponses ou les fonctions de route de votre serveur à l'aide des `cachedEventHandler` et `cachedFunction` de Nitro.
  ::

  ::field{name="database" type="boolean"}
  `false`. Permet à la base de données SQL de stocker les données de votre application.
  ::

::

#code

```mdc
::field-group
  ::field{name="analytics" type="boolean"}
    Defaults to `false`. Enables analytics for your project (coming soon).
  ::

  ::field{name="blob" type="boolean"}
    Defaults to `false`. Enables blob storage to store static assets, such as images, videos and more.
  ::

  ::field{name="cache" type="boolean"}
    Defaults to `false`. Enables cache storage to cache your server route responses or functions using Nitro's `cachedEventHandler` and `cachedFunction`.
  ::

  ::field{name="database" type="boolean"}
    Defaults to `false`. Enables SQL database to store your application's data.
  ::
::
```

:::

## api

### Props

:component-props{prose}

### Slots

:component-slots{prose}

## thème

:component-theme{prose}

## Changelog

:component-changelog{prefix="prose"}
