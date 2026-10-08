---
description: Un envoltorio para proporcionar configuración global, tostadas e información sobre herramientas a su aplicación.
category: layout
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/App.vue
---

@@pH000@@Uso del producto

Este componente implementa Reka UI [ConfigProvider](https://reka-ui.com/docs/utilities/config-provider) para proporcionar una configuración global a todos los componentes:

- Permite que todas las primitivas hereden la dirección de lectura global.
- Permite cambiar el comportamiento del cuerpo de desplazamiento al configurar el bloqueo del cuerpo.
- Mucho más controles para evitar cambios de diseño.

También está utilizando [ToastProvider](https://reka-ui.com/docs/components/toast#provider) y [TooltipProvider](https://reka-ui.com/docs/components/tooltip#provider) para proporcionar brindis globales e información sobre herramientas, así como modales programáticos y diapositivas.

Envuelva toda su aplicación con el componente App en su archivo `app.vue`:

```vue [app.vue]
<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
```

::framework-only
#Nuxidad
:::tip{to="/docs/getting-started/integrations/i18n/nuxt#locale"}
Aprenda a usar la prop `locale` para cambiar la configuración regional de su app. Esto también controla el formato de fecha/hora en componentes como Calendario, InputDate e InputTime.
:::

#vista
:::tip{to="/docs/getting-started/integrations/i18n/vue#locale"}
Aprenda a usar el prop `locale` para cambiar la configuración regional de su app. Esto también controla el formato de fecha/hora en componentes como Calendario, InputDate e InputTime.
:::
::

@@26000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

@@27000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

@@28000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes de slots

@@29@Changelog

Categoría: component-changelog
