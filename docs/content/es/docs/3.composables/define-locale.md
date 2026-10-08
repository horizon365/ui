---
title: DefiniciónLocal
description: 'Una utilidad para crear una configuración local personalizada para su aplicación.'
---

@@pH000@@Uso del producto

Utilice la utilidad de importación automática `defineLocale` para crear una configuración regional personalizada con sus propias traducciones.

```vue
<script setup lang="ts">
import type { Messages } from '@nuxt/ui'

const locale = defineLocale<Messages>({
  name: 'My custom locale',
  code: 'en',
  dir: 'ltr',
  messages: {
    // implement pairs
  }
})
</script>

<template>
  <UApp :locale="locale">
    <NuxtPage />
  </UApp>
</template>
```

::framework-only
#nuxidad
:::tip{to="/docs/getting-started/integrations/i18n/nuxt"}
Obtenga más información sobre la internacionalización en la documentación de **i18n integration**.
:::

#vista
:::tip{to="/docs/getting-started/integrations/i18n/vue"}
Obtenga más información sobre la internacionalización en la documentación de **i18n integration**.
:::
::

@@26000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

@@

Crea un nuevo objeto local con las opciones proporcionadas.

@@20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

::field-group

  ::field{name="options" type="DefineLocaleOptions<M>" required}
  El objeto de configuración local con las siguientes propiedades:

    ::collapsible

      ::field-group

        ::field{name="name" type="string" required}
        El nombre para mostrar de la configuración regional (por ejemplo,`'English'`,`'Français'`).
        ::

        ::field{name="code" type="string" required}
        El código ISO de la localidad (por ejemplo,`'en'`,`'fr'`,`'de-AT'`).
        ::

        ::field{name="dir" type="'ltr' | 'rtl'"}
        La dirección de texto de la configuración local. Prevalue a `'ltr'`.
        ::

        ::field{name="messages" type="M" required}
        Utilice el `Messages` tipo de `@nuxt/ui` para el tipo de seguridad.
        ::
      ::
    ::
  ::
::

**Devuelve:** A `Locale<M>` objeto que se puede pasar a la `locale` prop de la [App](/docs/components/app) componente.

@@pH046@@Ejemplos

Aquí hay un ejemplo completo de la creación de una configuración local personalizada:

```vue
<script setup lang="ts">
import type { Messages } from '@nuxt/ui'

const locale = defineLocale<Messages>({
  name: 'Español',
  code: 'es',
  dir: 'ltr',
  messages: {
    alert: {
      close: 'Cerrar'
    },
    modal: {
      close: 'Cerrar'
    },
    commandPalette: {
      back: 'Atrás',
      close: 'Cerrar',
      noData: 'Sin datos',
      noMatch: 'Sin resultados',
      placeholder: 'Escribe un comando o busca…'
    }
    // ... other component messages
  }
})
</script>

<template>
  <UApp :locale="locale">
    <NuxtPage />
  </UApp>
</template>
```

::note
Puede mirar en el [ built-in locales](https://github.com/nuxt/ui/tree/v4/src/runtime/locale) como referencia sobre cómo estructurar el objeto mensajes.
::
