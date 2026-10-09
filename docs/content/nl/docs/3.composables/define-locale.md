---
title: definieerLocale
description: 'Een hulpprogramma om een aangepaste landinstelling voor uw app te maken.'
---

## Gebruik

Gebruik het automatisch geïmporteerde hulpprogramma `defineLocale` om een aangepaste landinstelling te maken met uw eigen vertalingen.

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
#nuxt
:::tip{to="/docs/getting-started/integrations/i18n/nuxt"}
Lees meer over internationalization in de **i18n integration**-documentatie.
:::

#vue
:::tip{to="/docs/getting-started/integrations/i18n/vue"}
Lees meer over internationalization in de **i18n integration**-documentatie.
:::
::

## API

`defineLocale<M>(options: DefineLocaleOptions<M>): Locale<M>`{lang="ts-type"}

Maakt een nieuw locale-object met de geboden opties.

#### Parameters

::field-group

  ::field{name="options" type="DefineLocaleOptions<M>" required}
Het locale configuratieobject met de volgende eigenschappen:

    ::collapsible

      ::field-group

        ::field{name="name" type="string" required}
De weergavenaam van de landinstelling (bijv. `'English'`, `'Français'`).
        ::

        ::field{name="code" type="string" required}
De ISO-code van de landinstelling (bijv. `'en'`, `'fr'`, `'de-AT'`).
        ::

        ::field{name="dir" type="'ltr' | 'rtl'"}
De tekstrichting van de landinstelling. Standaard `'ltr'`.
        ::

        ::field{name="messages" type="M" required}
Het object vertaalberichten. Gebruik het `Messages`-type van `@nuxt/ui` voor typeveiligheid.
        ::
      ::
    ::
  ::
::

**Returns: ** Een `Locale<M>` object dat kan worden doorgegeven aan de `locale` prop van de [App](/docs/components/app) component.

## Voorbeeld

Hier is een compleet voorbeeld van het maken van een aangepaste landinstelling:

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
U kunt de [built-in locales](https://github.com/nuxt/ui/tree/v4/src/runtime/locale) bekijken voor referentie over hoe u het berichtenobject kunt structureren.
::
