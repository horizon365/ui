---
title: Proyecto FieldGroup
description: 'Agrupe los campos relacionados para obtener una documentación completa de la API.'
category: components
navigation.title: FieldGroup
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/FieldGroup.vue
---

xph0000xUso

Agrupe los campos en una lista.

:::code-preview

::field-group{class="my-0"}

  ::field{name="analytics" type="boolean"}
  Por defecto `false`. Habilita el análisis para su proyecto (próximamente).
  ::

  ::field{name="blob" type="boolean"}
  `false`. Habilita el almacenamiento blob para almacenar activos estáticos, como imágenes, videos y más.
  ::

  ::field{name="cache" type="boolean"}
  Habilita el almacenamiento en caché para almacenar en caché las respuestas o funciones de ruta de su servidor utilizando los `cachedEventHandler` y `cachedFunction` de Nitro.
  ::

  ::field{name="database" type="boolean"}
  `false`. Habilita la base de datos SQL para almacenar los datos de su aplicación.
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

## API (Edición española)

### Props (Edición española)

:component-props{prose}

### Slots (Edición española)

:component-slots{prose}

## Temas

:component-theme{prose}

xf030xChangelog (Edición española)

:component-changelog{prefix="prose"}
