---
title: Die ProseFieldGroup
description: 'Gruppieren Sie verwandte Felder, um eine umfassende API-Dokumentation zu erhalten.'
category: components
navigation.title: FieldGroup
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/FieldGroup.vue
---

## Bearbeiten

Gruppieren Sie Felder in einer Liste.

:::code-preview

::field-group{class="my-0"}

  ::field{name="analytics" type="boolean"}
  Standardmäßig ist `false`. Enables Analytics für Ihr Projekt (in Kürze verfügbar).
  ::

  ::field{name="blob" type="boolean"}
  Standardmäßig `false`. Ermöglicht Blob-Speicher, um statische Assets wie Bilder, Videos und mehr zu speichern.
  ::

  ::field{name="cache" type="boolean"}
  Standardmäßig `false`. Ermöglicht den Cache-Speicher, um die Antworten oder Funktionen Ihrer Serverroute mit Nitros `cachedEventHandler` und `cachedFunction` zwischenzuspeichern.
  ::

  ::field{name="database" type="boolean"}
  Standardmäßig ist `false`. Ermöglicht der SQL-Datenbank, die Daten Ihrer Anwendung zu speichern.
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

### Props Bearbeiten

:component-props{prose}

### Slots Bearbeiten

:component-slots{prose}

## Theme Bearbeiten

:component-theme{prose}

## Changelog (englisch)

:component-changelog{prefix="prose"}
