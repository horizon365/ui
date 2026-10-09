---
title: uitgebreidLocale
description: 'Een hulpprogramma om een bestaande landinstelling uit te breiden met aangepaste vertalingen.'
---

## Gebruik

Gebruik het automatisch geïmporteerde hulpprogramma `extendLocale` om een bestaande landinstelling aan te passen door specifieke eigenschappen of berichten te overschrijven.

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

Dit is handig wanneer u:
- Een regionale variant van een taal maken (bijv. `en-AU` van `en`)
- Specifieke vertalingen overschrijven zonder de hele landinstelling opnieuw te definiëren
- Componentenlabels aanpassen voor uw toepassing

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

`extendLocale<M>(locale: Locale<M>, options: Partial<DefineLocaleOptions<DeepPartial<M>>>): Locale<M>`{lang="ts-type"}

Breidt een bestaande landinstelling uit met de geboden opties, waarbij de berichten diep worden samengevoegd.

#### Parameters

::field-group

  ::field{name="locale" type="Locale<M>" required}
De basis locale uit te breiden. Importeren van `@nuxt/ui/locale`.
  ::

  ::field{name="options" type="Partial<DefineLocaleOptions<DeepPartial<M>>>" required}
De eigenschappen die moeten worden overschreven:

    ::collapsible

      ::field-group

        ::field{name="name" type="string"}
Overschrijd de weergavenaam van de landinstelling.
        ::

        ::field{name="code" type="string"}
Overschrijd de ISO-code van de landinstelling (bijv. `'en-GB'`, `'fr-CA'`).
        ::

        ::field{name="dir" type="'ltr' | 'rtl'"}
Overschrijd de tekstrichting van de landinstelling.
        ::

        ::field{name="messages" type="DeepPartial<M>"}
Gedeeltelijke berichten maken een object om samen te voegen met de basislandinstelling. Geef alleen de berichten op die u wilt overschrijven.
        ::
      ::
    ::
  ::
::

**Returns: ** Een nieuw `Locale<M>` object met de samengevoegde eigenschappen.

## Voorbeeld

Hier is een voorbeeld dat de Engelse landinstelling uitbreidt voor een Australische variant:

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
Het hulpprogramma `extendLocale` gebruikt diep samenvoegen, dus u hoeft alleen de berichten op te geven die u wilt overschrijven. Alle andere berichten worden overgenomen van de basislandinstelling.
::
