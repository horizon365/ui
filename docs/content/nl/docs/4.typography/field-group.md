---
title: ProseFieldGroup
description: 'Groepeer gerelateerde velden samen voor uitgebreide API-documentatie.'
category: components
navigation.title: FieldGroup
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/FieldGroup.vue
---

## Gebruik

Groepeer velden samen in een lijst.

:::code-preview

::field-group{class="my-0"}

  ::field{name="analytics" type="boolean"}
Standaard `false`. Maakt analyse voor uw project mogelijk (binnenkort beschikbaar).
  ::

  ::field{name="blob" type="boolean"}
Standaard `false`. Hiermee kan blob-opslag statische items opslaan, zoals afbeeldingen, video 's en meer.
  ::

  ::field{name="cache" type="boolean"}
Standaard ingesteld op `false`. Hiermee kan cache-opslag de reacties of functies van uw serverroute cachen met Nitro 's `cachedEventHandler` en `cachedFunction`.
  ::

  ::field{name="database" type="boolean"}
Standaard `false`. Hiermee kan SQL-database de gegevens van uw applicatie opslaan.
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

## API

### Props

:component-props{prose}

### Slots

:component-slots{prose}

## Thema

:component-theme{prose}

## Wijzigingsgelog

:component-changelog{prefix="prose"}
