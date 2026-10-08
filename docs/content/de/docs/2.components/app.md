---
description: Ein Wrapper, um globale Konfiguration, Toast und Tooltips für Ihre App bereitzustellen.
category: layout
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/App.vue
---

@@@ph000@@Verwendung

Diese Komponente implementiert die Reka-Benutzeroberfläche [ConfigProvider](https://reka-ui.com/docs/utilities/config-provider), um eine globale Konfiguration für alle Komponenten bereitzustellen:

- Ermöglicht es allen Primitiven, die globale Leserichtung zu erben.
- Ermöglicht die Änderung des Verhaltens des Scrollkörpers beim Setzen der Körpersperre.
- Viel mehr Kontrollen Layout Verschiebungen zu verhindern.

Es verwendet auch [ToastProvider](https://reka-ui.com/docs/components/toast#provider) und [TooltipProvider](https://reka-ui.com/docs/components/tooltip#provider), um globale Toasts und Tooltips sowie programmatische Modals und Slideovers bereitzustellen.

Wickeln Sie Ihre gesamte Anwendung mit der App-Komponente in Ihre `app.vue`-Datei:

```vue [app.vue]
<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
```

::framework-only
#nuxt sein
:::tip{to="/docs/getting-started/integrations/i18n/nuxt#locale"}
Hier erfahren Sie, wie Sie mit `locale` prop das Gebietsschema Ihrer App ändern können. Dies steuert auch das Datums-/Uhrzeitformat in Komponenten wie Kalender, Eingabedatum und Eingabezeit.
:::

#Ansehen
:::tip{to="/docs/getting-started/integrations/i18n/vue#locale"}
Hier erfahren Sie, wie Sie mit `locale` prop das Gebietsschema Ihrer App ändern können. Dies steuert auch das Datums-/Uhrzeitformat in Komponenten wie Kalender, Eingabedatum und Eingabezeit.
:::
::

## api@@api@@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api@api26

@@@ph027@@Props

Komponenten Props

@@ph028@@slots

Die Komponenten-Slots

@@ph029@@changelog @@changelog

Das Component-Changelog
