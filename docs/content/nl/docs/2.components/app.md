---
description: Een wikkel om globale configuratie, toasts en tooltips aan uw app te bieden.
category: layout
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/App.vue
---

## Gebruik

Dit onderdeel implementeert Reka UI [ConfigProvider](https://reka-ui.com/docs/utilities/config-provider) om globale configuratie te bieden aan alle componenten:

- Hiermee kunnen alle primitieven de globale leesrichting overnemen.
- Hiermee kunt u het gedrag van de scrollbody wijzigen bij het instellen van de body lock.
- Veel meer bedieningselementen om verschuivingen in de lay-out te voorkomen.

Het gebruikt ook [ToastProvider](https://reka-ui.com/docs/components/toast#provider) en [TooltipProvider](https://reka-ui.com/docs/components/tooltip#provider) om wereldwijde toasts en tooltips te bieden, evenals programmatische modals en slideovers.

Verpak uw hele applicatie met de App-component in uw `app.vue`-bestand:

```vue [app.vue]
<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
```

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/i18n/nuxt#locale"}
Leer hoe u de `locale`-prop gebruikt om de landinstelling van uw app te wijzigen. Dit bepaalt ook de datum / tijd-indeling in componenten zoals Agenda, InputDate en InputTime.
:::

#vue
:::tip{to="/docs/getting-started/integrations/i18n/vue#locale"}
Leer hoe u de `locale`-prop gebruikt om de landinstelling van uw app te wijzigen. Dit bepaalt ook de datum / tijd-indeling in componenten zoals Agenda, InputDate en InputTime.
:::
::

## API

### Props

:component-props

### Slots

:component-slots

## Changelog

:component-changelog
