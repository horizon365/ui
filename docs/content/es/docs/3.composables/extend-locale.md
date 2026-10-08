---
title: Extensión local
description: 'Una utilidad para ampliar una configuración regional existente con traducciones personalizadas.'
---

@@pH000@@Uso del producto

Utilice la utilidad de importación automática `extendLocale` para personalizar una configuración regional existente anulando propiedades o mensajes específicos.

```vue
<script setup lang="ts">
import { en } from '@nuxt/ui/locale'

const locale = extendLocale(en, {
  code: 'en-AU',
  messages: {
    commandPalette: {
      placeholder: 'Search a component...'
    }
  }
})
</script>

<template>
  <UApp :locale="locale">
    <NuxtPage />
  </UApp>
</template>
```

Esto es útil cuando quieres:
- Crear una variante regional de un idioma (por ejemplo,`en-AU` desde `en`)
- Anular traducciones específicas sin redefinir toda la configuración regional
- Personalice las etiquetas de componentes para su aplicación

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

@@pH031@@pH031

@@

Amplía una configuración regional existente con las opciones proporcionadas, fusionando profundamente los mensajes.

#### Parámetros

::field-group

  ::field{name="locale" type="Locale<M>" required}
  La configuración regional base para extender. Import desde `@nuxt/ui/locale`.
  ::

  ::field{name="options" type="Partial<DefineLocaleOptions<DeepPartial<M>>>" required}
  Las propiedades a superar:

    ::collapsible

      ::field-group

        ::field{name="name" type="string"}
        Oprime el nombre de la pantalla local.
        ::

        ::field{name="code" type="string"}
        Anular el código ISO de la configuración regional (por ejemplo,`'en-GB'`,`'fr-CA'`).
        ::

        ::field{name="dir" type="'ltr' | 'rtl'"}
        Sustituir la dirección de texto de la localidad.
        ::

        ::field{name="messages" type="DeepPartial<M>"}
        Partial messages object to merge with the base locale. Only specify the messages you want to override.
        ::
      ::
    ::
  ::
::

**Returns:** A new `Locale<M>` object with the merged properties.

@@pH041@@Ejemplos

Aquí hay un ejemplo que extiende la configuración regional en inglés para una variante australiana:

```vue
<script setup lang="ts">
import { en } from '@nuxt/ui/locale'

const locale = extendLocale(en, {
  name: 'English (Australia)',
  code: 'en-AU',
  messages: {
    colorMode: {
      dark: 'Dark',
      light: 'Light',
      system: 'System'
    },
    selectMenu: {
      search: 'Search…',
      noData: 'No results found',
      noMatch: 'No matching results'
    }
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
La utilidad `extendLocale` utiliza la fusión profunda, por lo que sólo necesita especificar los mensajes que desea anular.
::
