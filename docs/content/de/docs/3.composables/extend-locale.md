---
title: extendlocale erweitert
description: 'Ein Dienstprogramm, um eine vorhandene Gebietsschema mit benutzerdefinierten Übersetzungen zu erweitern.'
---

@@@ph000@@Verwendung

Verwenden Sie das automatisch importierte Dienstprogramm `extendLocale`, um ein vorhandenes Gebietsschema durch Überschreiben bestimmter Eigenschaften oder Nachrichten anzupassen.

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

Dies ist nützlich, wenn Sie wollen:
- Erstellen Sie eine regionale Variante einer Sprache (z. B.`en-AU` von `en`)
- Override spezifische Übersetzungen ohne Neudefinition der gesamten Gebietsschema
- Passen Sie Komponenten-Etiketten für Ihre Anwendung an

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

@@@@@@b31@b31.de

{lang="ts-type"}

Erweitert ein vorhandenes Gebietsschema um die bereitgestellten Optionen und führt die Nachrichten tief zusammen.

#### Parameter Bearbeiten

::field-group

  ::field{name="locale" type="Locale<M>" required}
  Die Basis-Locale, um. Import von `@nuxt/ui/locale` zu erweitern.
  ::

  ::field{name="options" type="Partial<DefineLocaleOptions<DeepPartial<M>>>" required}
  Immobilien zum Überholen:

    ::collapsible

      ::field-group

        ::field{name="name" type="string"}
        Überschreiben Sie den Anzeigenamen des Locales.
        ::

        ::field{name="code" type="string"}
        Überschreiben Sie den ISO-Code des Gebietsschemas (z. B.`'en-GB'`,`'fr-CA'`).
        ::

        ::field{name="dir" type="'ltr' | 'rtl'"}
        Überschreiben Sie die Textrichtung des Locales.
        ::

        ::field{name="messages" type="DeepPartial<M>"}
        Teilnachrichten Objekt zum Zusammenführen mit dem Basis-Gebietsschema. Geben Sie nur die Nachrichten an, die Sie überschreiben möchten.
        ::
      ::
    ::
  ::
::

**Returns:** Ein neues `Locale<M>`-Objekt mit den zusammengeführten Eigenschaften.

@@ph041@@Beispiel

Hier ist ein Beispiel, das das englische Gebietsschema um eine australische Variante erweitert:

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
Das Dienstprogramm `extendLocale` verwendet tiefes Zusammenführen, sodass Sie nur die Nachrichten angeben müssen, die Sie überschreiben möchten.
::
