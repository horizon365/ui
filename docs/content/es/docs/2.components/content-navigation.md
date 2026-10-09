---
title: ContentNavegación
description: 'Componente de navegación de estilo acordeón para organizar enlaces de páginas.'
category: content
framework: nuxt
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentNavigation.vue
---

::warning{to="/docs/getting-started/integrations/content"}
Este componente sólo está disponible cuando el módulo `@nuxt/content` está instalado.
::

## Servicio

Utiliza el prop `navigation` con el valor `navigation`{lang="ts-type"} que obtienes al buscar la navegación de tu aplicación.

::component-example
---
name: 'content-navigation-example'
class: 'h-96 overflow-y-auto'
overflowHidden: true
props:
  class: 'w-full'
---
::

### Tipo

Configure el prop `type` en `single` para permitir que solo se abra un elemento a la vez.

::component-code{prefix="content"}
---
prettier: true
collapse: true
external:
  - navigation
externalTypes:
  - ContentNavigationLink[]
items:
  type:
  - 'single'
  - 'multiple'
hide:
  - class
  - navigation
props:
  class: 'w-full'
  type: 'single'
  navigation:
    - title: 'Guide'
      icon: 'i-lucide-book-open'
      path: '#getting-started'
      children:
        - title: 'Introduction'
          path: '#introduction'
          active: true
        - title: 'Installation'
          path: '#installation'
    - title: 'Composables'
      icon: 'i-lucide-database'
      path: '#composables'
      children:
        - title: 'defineShortcuts'
          path: '#defineshortcuts'
        - title: 'useModal'
          path: '#usemodal'
---
::

### Color (Edición española)

Utilice el prop `color` para cambiar el color de los enlaces de navegación.

::component-code{prefix="content"}
---
prettier: true
collapse: true
external:
  - navigation
externalTypes:
  - ContentNavigationLink[]
hide:
  - class
  - navigation
props:
  class: 'w-full'
  color: 'neutral'
  navigation:
    - title: 'Guide'
      icon: 'i-lucide-book-open'
      path: '#getting-started'
      children:
      - title: 'Introduction'
        path: '#introduction'
        active: true
      - title: 'Installation'
        path: '#installation'
    - title: 'Composables'
      icon: 'i-lucide-database'
      path: '#composables'
      children:
      - title: 'defineShortcuts'
        path: '#defineshortcuts'
      - title: 'useModal'
        path: '#usemodal'
---
::

### Variante

Utilice el prop `variant` para cambiar la variante de los enlaces de navegación.

::component-code{prefix="content"}
---
prettier: true
collapse: true
external:
  - navigation
externalTypes:
  - ContentNavigationLink[]
hide:
  - class
  - navigation
items:
  variant:
  - 'link'
  - 'pill'
props:
  class: 'w-full'
  variant: 'link'
  navigation:
    - title: 'Guide'
      icon: 'i-lucide-book-open'
      path: '#getting-started'
      children:
      - title: 'Introduction'
        path: '#introduction'
        active: true
      - title: 'Installation'
        path: '#installation'
    - title: 'Composables'
      icon: 'i-lucide-database'
      path: '#composables'
      children:
      - title: 'defineShortcuts'
        path: '#defineshortcuts'
      - title: 'useModal'
        path: '#usemodal'
---
::

### Highlight (Edición española)

Utilice el prop `highlight` para mostrar un borde resaltado para el vínculo activo.

Utilice el prop `highlight-color` para cambiar el color del borde. Por defecto es el prop `color`.

::component-code{prefix="content"}
---
prettier: true
collapse: true
external:
  - navigation
externalTypes:
  - ContentNavigationLink[]
hide:
  - class
  - navigation
props:
  class: 'w-full'
  highlight: true
  highlightColor: 'primary'
  color: 'primary'
  variant: 'pill'
  navigation:
    - title: 'Guide'
      icon: 'i-lucide-book-open'
      path: '#getting-started'
      children:
      - title: 'Introduction'
        path: '#introduction'
        active: true
      - title: 'Installation'
        path: '#installation'
    - title: 'Composables'
      icon: 'i-lucide-database'
      path: '#composables'
      children:
      - title: 'defineShortcuts'
        path: '#defineshortcuts'
      - title: 'useModal'
        path: '#usemodal'
---
::

XPH163XTrailing Icon de diseño

Utilice el prop `trailing-icon` para personalizar el [Icon](/docs/components/icon) final de los elementos que tienen hijos.

::component-code{prefix="content"}
---
prettier: true
collapse: true
external:
  - navigation
externalTypes:
  - ContentNavigationLink[]
hide:
  - class
  - navigation
props:
  class: 'w-full'
  trailingIcon: 'i-lucide-arrow-up'
  navigation:
    - title: 'Guide'
      icon: 'i-lucide-book-open'
      path: '#getting-started'
      children:
      - title: 'Introduction'
        path: '#introduction'
        active: true
      - title: 'Installation'
        path: '#installation'
    - title: 'Composables'
      icon: 'i-lucide-database'
      path: '#composables'
      children:
      - title: 'defineShortcuts'
        path: '#defineshortcuts'
      - title: 'useModal'
        path: '#usemodal'
---
::

::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono globalmente en su `app.config.ts` bajo la tecla `ui.icons.chevronDown`.
::

## Ejemplos

### Dentro de un diseño

Use el componente ContentNavigation dentro de un componente [PageAside](/docs/components/page-aside) dentro de un diseño para mostrar la navegación de la página:

```vue [layouts/docs.vue]{11}
<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <UPage>
    <template #left>
      <UPageAside>
        <UContentNavigation :navigation="navigation" highlight />
      </UPageAside>
    </template>

    <slot />
  </UPage>
</template>
```

### Dentro de un encabezado

Utilice el componente ContentNavigation dentro de la ranura `content` de un componente [Header](xph233) para mostrar la navegación de la página en el móvil:

```vue [components/Header.vue]{9-11}
<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <UHeader>
    <template #body>
      <UContentNavigation :navigation="navigation" highlight />
    </template>
  </UHeader>
</template>
```

## API (Edición española)

### Props (accesorios)

:component-props

### Slots

:component-slots

### Emisiones

:component-emits

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog{prefix="content"}
