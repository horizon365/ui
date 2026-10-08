---
title: Définition locale
description: 'Un utilitaire pour créer une locale personnalisée pour votre application.'
---

@@ph000@@utilisation

Utilisez l'utilitaire `defineLocale` à importation automatique pour créer une locale personnalisée avec vos propres traductions.

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
#numérique
:::tip{to="/docs/getting-started/integrations/i18n/nuxt"}
En savoir plus sur l'internationalisation dans la documentation **i18n integration**.
:::

#vue
:::tip{to="/docs/getting-started/integrations/i18n/vue"}
En savoir plus sur l'internationalisation dans la documentation **i18n integration**.
:::
::

@@226@api

@@

Crée un nouvel objet local avec les options fournies.

@@229@Paramètres

::field-group

  ::field{name="options" type="DefineLocaleOptions<M>" required}
  L'objet de configuration locale avec les propriétés suivantes:

    ::collapsible

      ::field-group

        ::field{name="name" type="string" required}
        Le nom d'affichage de la région (par exemple,`'English'`,`'Français'`).
        ::

        ::field{name="code" type="string" required}
        Le code ISO de la région (par exemple,`'en'`,`'fr'`,`'de-AT'`).
        ::

        ::field{name="dir" type="'ltr' | 'rtl'"}
        La direction du texte de la locale. Par défaut est `'ltr'`.
        ::

        ::field{name="messages" type="M" required}
        Utilisez le type `Messages` de `@nuxt/ui` pour la sécurité de type.
        ::
      ::
    ::
  ::
::

**Retourne:** Un `Locale<M>` objet qui peut être passé à la `locale` prop de la [App](/docs/components/app) composant.

@@ph046@exemple

Voici un exemple complet de création d'une locale personnalisée:

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
Vous pouvez consulter le [ locales](https://github.com/nuxt/ui/tree/v4/src/runtime/locale) pour savoir comment structurer l'objet messages.
::
