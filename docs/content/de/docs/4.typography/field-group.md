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

@@@ph000@@Verwendung

Gruppieren Sie die Felder in einer Liste.

:::code-preview

::field-group{class="my-0"}

  ::field{name="analytics" type="boolean"}
  Standardmäßig ist `false`. Ermöglicht Analysen für Ihr Projekt (in Kürze).
  ::

  ::field{name="blob" type="boolean"}
  Standardmäßig auf `false`. Ermöglicht Blob-Speicher zum Speichern statischer Assets wie Bilder, Videos und mehr.
  ::

  ::field{name="cache" type="boolean"}
  Standardmäßig auf `false`. Ermöglicht Cache-Speicher, um Antworten oder Funktionen Ihrer Serverroute mit Nitros `cachedEventHandler` und `cachedFunction` zwischenzuspeichern.
  ::

  ::field{name="database" type="boolean"}
  Standardmäßig auf `false`. Ermöglicht der SQL-Datenbank, die Daten Ihrer Anwendung zu speichern.
  ::

::

#Der Code

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

## api@@api@@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api26

@@@ph027@@Props

: component-props {prose}

@@ph029@@slots

: component-slots {prose}

@@ph031@gmail.de

: component-theme {prose}

@@ph033@changelog @ changelog

: component-changelog {prefix="prose"}
