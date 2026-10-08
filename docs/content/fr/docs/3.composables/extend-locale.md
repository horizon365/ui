---
title: extension locale
description: 'Un utilitaire pour étendre une locale existante avec des traductions personnalisées.'
---

@@ph000@@utilisation

Utilisez l'utilitaire `extendLocale` à importation automatique pour personnaliser une localisation existante en remplaçant des propriétés ou des messages spécifiques.

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

Ceci est utile lorsque vous souhaitez:
- Créer une variante régionale d'une langue (par exemple,`en-AU` à partir de `en`)
- Remplacer des traductions spécifiques sans redéfinir l'ensemble des paramètres locaux
- Personnalisez les étiquettes des composants pour votre application

::framework-only
#numérique
:::tip{to="/docs/getting-started/integrations/i18n/nuxt"}
En savoir plus sur l'internationalisation dans la documentation **i18n integration**.
:::

#vue
:::tip{to="/docs/getting-started/integrations/i18n/vue"}
En savoir plus sur l'internationalisation dans la documentation **i18n integration**.
:::
::

@@ph031@@api

@@

Étend une locale existante avec les options fournies, fusionnant profondément les messages.

@@ph034@@Paramètres

::field-group

  ::field{name="locale" type="Locale<M>" required}
  La région de base pour étendre. Import à partir de `@nuxt/ui/locale`.
  ::

  ::field{name="options" type="Partial<DefineLocaleOptions<DeepPartial<M>>>" required}
  Les propriétés à surpasser:

    ::collapsible

      ::field-group

        ::field{name="name" type="string"}
        Remplacer le nom d'affichage de la locale.
        ::

        ::field{name="code" type="string"}
        Remplacez le code ISO de la région (par exemple,`'en-GB'`,`'fr-CA'`).
        ::

        ::field{name="dir" type="'ltr' | 'rtl'"}
        Remplacer la direction du texte de la locale.
        ::

        ::field{name="messages" type="DeepPartial<M>"}
        Les messages partiels s'opposent à la fusion avec la région de base. Indiquez uniquement les messages que vous souhaitez remplacer.
        ::
      ::
    ::
  ::
::

**Retourne:** Un nouvel objet `Locale<M>` avec les propriétés fusionnées.

@@ph041@exemple

Voici un exemple d'extension de la locale anglaise pour une variante australienne:

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
L'utilitaire `extendLocale` utilise la fusion profonde, il vous suffit donc de spécifier les messages que vous souhaitez remplacer.
::
