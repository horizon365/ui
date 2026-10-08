---
description: 'Un elemento principal que llena la altura del viewport disponible.'
category: layout
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Main.vue
---

@@pH000@@Uso del producto

El componente principal representa un elemento `<main>` que trabaja junto con el componente [Header](/docs/components/header) para crear un diseño de altura completa que se extiende a la altura disponible de la ventana gráfica.

::tip{to="/docs/getting-started/theme/css-variables#header"}
El componente principal utiliza la variable CSS `--ui-header-height` para posicionarse correctamente debajo del `Header`.
::

@008@Ejemplos

@@pH009

Utilice el componente principal en su `app.vue` o en un diseño:

```vue [app.vue]{5-9}
<template>
  <UApp>
    <UHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <UFooter />
  </UApp>
</template>
```

@@27000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

@@28000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

@@29@29000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes de slots

@@pH030@@Proyecto

Componente Tema

@changelog @@changelog

Categoría: component-changelog
