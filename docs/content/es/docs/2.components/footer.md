---
description: 'Un pie de página sensible para los enlaces de su sitio y avisos legales.'
category: layout
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Footer.vue
---

@@pH000@@Uso del producto

El componente de pie de página representa un elemento `<footer>`.

Utilice las ranuras `left`,`default` y `right` para personalizar el pie de página.

::component-example
---
Categoría: true
Colapso: Verdad
Nombre: 'Ejemplo'
Categoría:! p-0
Props:
  Categoría: w-full
---
::

::note
En este ejemplo, usamos el componente [NavigationMenu](/docs/components/navigation-menu) para representar los enlaces del pie de página en el centro.
::

::tip{to="/docs/components/footer-columns"}
Puede utilizar el componente `FooterColumns` para mostrar una lista de enlaces dentro de la ranura `top`.
::

@111@Ejemplos

@@pH012

Use el componente Pie de página en su `app.vue` o en un diseño:

```vue [app.vue]{32-67}
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [{
  label: 'Figma Kit',
  to: 'https://go.nuxt.com/figma-ui',
  target: '_blank'
}, {
  label: 'Playground',
  to: 'https://stackblitz.com/edit/nuxt-ui',
  target: '_blank'
}, {
  label: 'Releases',
  to: 'https://github.com/nuxt/ui/releases',
  target: '_blank'
}]
</script>

<template>
  <UApp>
    <UHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <USeparator icon="i-simple-icons-nuxtdotjs" type="dashed" class="h-px" />

    <UFooter>
      <template #left>
        <p class="text-muted text-sm">
          Copyright © {{ new Date().getFullYear() }}
        </p>
      </template>

      <UNavigationMenu :items="items" variant="link" />

      <template #right>
        <UButton
          icon="i-simple-icons-discord"
          color="neutral"
          variant="ghost"
          to="https://go.nuxt.com/discord"
          target="_blank"
          aria-label="Discord"
        />
        <UButton
          icon="i-simple-icons-x"
          color="neutral"
          variant="ghost"
          to="https://go.nuxt.com/x"
          target="_blank"
          aria-label="X"
        />
        <UButton
          icon="i-simple-icons-github"
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/nuxt"
          target="_blank"
          aria-label="GitHub"
        />
      </template>
    </UFooter>
  </UApp>
</template>
```

::note
En este ejemplo, usamos el componente [Separator](/docs/components/separator) para agregar un borde sobre el pie de página.
::

@@pH089

@090000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

@091@091@0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes de slots

@092@@Proyecto

Componente Tema

@@changelog

Categoría: component-changelog
