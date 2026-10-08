---
title: Definiert lokal
description: 'Ein Dienstprogramm zum Erstellen eines benutzerdefinierten Gebietsschemas für Ihre App.'
---

@@@ph000@@Verwendung

Verwenden Sie das automatisch importierte `defineLocale`-Dienstprogramm, um ein benutzerdefiniertes Gebietsschema mit Ihren eigenen Übersetzungen zu erstellen.

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
#nuxt sein
:::tip{to="/docs/getting-started/integrations/i18n/nuxt"}
Erfahren Sie mehr über die Internationalisierung in der **i18n integration** Dokumentation.
:::

#Ansehen
:::tip{to="/docs/getting-started/integrations/i18n/vue"}
Erfahren Sie mehr über die Internationalisierung in der **i18n integration** Dokumentation.
:::
::

## api@@api@@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api26

{lang="ts-type"}

Erstellt ein neues Locale-Objekt mit den angegebenen Optionen.

@@ph029@@Parameter Bearbeiten

::field-group

  ::field{name="options" type="DefineLocaleOptions<M>" required}
  Das Locale-Konfigurationsobjekt mit den folgenden Eigenschaften:

    ::collapsible

      ::field-group

        ::field{name="name" type="string" required}
        Der Anzeigename des Gebietsschemas (z. B.`'English'`,`'Français'`).
        ::

        ::field{name="code" type="string" required}
        Der ISO-Code des Gebietsschemas (z. B.`'en'`,`'fr'`,`'de-AT'`).
        ::

        ::field{name="dir" type="'ltr' | 'rtl'"}
        Die Textrichtung der locale. Defaults ist `'ltr'`.
        ::

        ::field{name="messages" type="M" required}
        Verwenden Sie den Typ `Messages` von `@nuxt/ui` für die Typsicherheit.
        ::
      ::
    ::
  ::
::

**Returns:** A `Locale<M>` Objekt, das an die `locale` prop der [App](/docs/components/app) Komponente übergeben werden kann.

@@ph046@@Beispiel

Hier ist ein vollständiges Beispiel für die Erstellung eines benutzerdefinierten Gebietsschemas:

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
Sie können die [ built-in locales](https://github.com/nuxt/ui/tree/v4/src/runtime/locale) als Referenz zur Strukturierung des Nachrichtenobjekts ansehen.
::
