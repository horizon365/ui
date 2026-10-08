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

@@pH000@@Uso del producto

Agrupe los campos en una lista.

:::code-preview

::field-group{class="my-0"}

  ::field{name="analytics" type="boolean"}
  Por defecto a `false`. Habilita análisis para su proyecto (próximamente).
  ::

  ::field{name="blob" type="boolean"}
  Por defecto a `false`. Habilita el almacenamiento de blob para almacenar activos estáticos, como imágenes, videos y más.
  ::

  ::field{name="cache" type="boolean"}
  Habilita el almacenamiento en caché para almacenar en caché las respuestas o funciones de ruta de su servidor utilizando `cachedEventHandler` y `cachedFunction` de Nitro.
  ::

  ::field{name="database" type="boolean"}
  Por defecto a `false`. Habilita la base de datos SQL para almacenar los datos de la aplicación.
  ::

::

#El Código

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

@@26000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

@@27000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Artículo siguienteComponentes {prose}

@@29@29000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes: {prose}

@@ph031@@Themes

Artículo siguiente{prose}

@@30000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

por: component-changelog {prefix="prose"}
