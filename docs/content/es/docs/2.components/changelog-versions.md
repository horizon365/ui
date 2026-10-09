---
title: Changelogversiones
description: 'Mostrar una lista de versiones del registro de cambios en una línea de tiempo.'
category: page
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChangelogVersions.vue
---

xph0000xUso

El componente ChangelogVersions proporciona un diseño flexible para mostrar una lista de componentes [ChangelogVersion](/docs/components/changelog-version) utilizando la ranura predeterminada o el accesorio `versions`.

```vue {2,8}
<template>
  <UChangelogVersions>
    <UChangelogVersion
      v-for="(version, index) in versions"
      :key="index"
      v-bind="version"
    />
  </UChangelogVersions>
</template>
```

### Versiones

Utilice el prop `versions` como una matriz de objetos con las propiedades del componente [ChangelogVersion](/docs/components/changelog-version#props).

::component-code
---
collapse: true
ignore:
  - versions
external:
  - versions
externalTypes:
  - ChangelogVersionProps[]
hide:
  - class
props:
  versions:
    - title: Nuxt 3.17
      description: 'Nuxt 3.17 is out - bringing a major reworking of the async data layer, a new built-in component, better warnings, and performance improvements!'
      image: https://nuxt.com/assets/blog/v3.17.png
      date: 2025-04-27
      to: 'https://nuxt.com/blog/v3-17'
      target: '_blank'
      ui.container: 'max-w-lg'
    - title: Nuxt 3.16
      description: 'Nuxt 3.16 is out - packed with features and performance improvements!'
      image: https://nuxt.com/assets/blog/v3.16.png
      date: 2025-03-07
      to: 'https://nuxt.com/blog/v3-16'
      target: '_blank'
      ui.container: 'max-w-lg'
    - title: Nuxt 3.15
      description: 'Nuxt 3.15 is out - with Vite 6, better HMR and faster performance!'
      image: https://nuxt.com/assets/blog/v3.15.png
      date: 2024-12-24
      to: 'https://nuxt.com/blog/v3-15'
      target: '_blank'
      ui.container: 'max-w-lg'
  class: 'w-full'
---
::

### Indicador

Utilice el prop `indicator` para ocultar la barra indicadora a la izquierda.

::component-code
---
collapse: true
ignore:
  - versions
external:
  - versions
externalTypes:
  - ChangelogVersionProps[]
hide:
  - class
props:
  indicator: false
  versions:
    - title: Nuxt 3.17
      description: 'Nuxt 3.17 is out - bringing a major reworking of the async data layer, a new built-in component, better warnings, and performance improvements!'
      image: https://nuxt.com/assets/blog/v3.17.png
      date: 2025-04-27
      to: 'https://nuxt.com/blog/v3-17'
      target: '_blank'
      ui.container: 'max-w-lg'
    - title: Nuxt 3.16
      description: 'Nuxt 3.16 is out - packed with features and performance improvements!'
      image: https://nuxt.com/assets/blog/v3.16.png
      date: 2025-03-07
      to: 'https://nuxt.com/blog/v3-16'
      target: '_blank'
      ui.container: 'max-w-lg'
    - title: Nuxt 3.15
      description: 'Nuxt 3.15 is out - with Vite 6, better HMR and faster performance!'
      image: https://nuxt.com/assets/blog/v3.15.png
      date: 2024-12-24
      to: 'https://nuxt.com/blog/v3-15'
      target: '_blank'
      ui.container: 'max-w-lg'
  class: 'w-full'
---
::

### Movimiento indicador

Utilice el prop `indicator-motion` para personalizar u ocultar el efecto de movimiento en la barra indicadora. Por defecto `true` con opciones de transición `{ damping: 30, restDelta: 0.001 }` [spring ](https://motion.dev/docs/vue-transitions#spring).

::component-code
---
collapse: true
ignore:
  - versions
external:
  - versions
externalTypes:
  - ChangelogVersionProps[]
hide:
  - class
items:
  indicatorMotion:
    - true
    - false
props:
  indicatorMotion: true
  versions:
    - title: Nuxt 3.17
      description: 'Nuxt 3.17 is out - bringing a major reworking of the async data layer, a new built-in component, better warnings, and performance improvements!'
      image: https://nuxt.com/assets/blog/v3.17.png
      date: 2025-04-27
      to: 'https://nuxt.com/blog/v3-17'
      target: '_blank'
      ui.container: 'max-w-lg'
    - title: Nuxt 3.16
      description: 'Nuxt 3.16 is out - packed with features and performance improvements!'
      image: https://nuxt.com/assets/blog/v3.16.png
      date: 2025-03-07
      to: 'https://nuxt.com/blog/v3-16'
      target: '_blank'
      ui.container: 'max-w-lg'
    - title: Nuxt 3.15
      description: 'Nuxt 3.15 is out - with Vite 6, better HMR and faster performance!'
      image: https://nuxt.com/assets/blog/v3.15.png
      date: 2024-12-24
      to: 'https://nuxt.com/blog/v3-15'
      target: '_blank'
      ui.container: 'max-w-lg'
  class: 'w-full'
---
::

## Ejemplos

::note
Si bien estos ejemplos utilizan [Nuxt Content](https://content.nuxt.com), los componentes se pueden integrar con cualquier sistema de gestión de contenido.
::

### En una página

Utilice el componente ChangelogVersions en una página para crear una página de registro de cambios:

```vue [pages/changelog.vue]{10-17}
<script setup lang="ts">
const { data: versions } = await useAsyncData('versions', () => queryCollection('versions').all())
</script>

<template>
  <UPage>
    <UPageHero title="Changelog" />

    <UPageBody>
      <UChangelogVersions>
        <UChangelogVersion
          v-for="(version, index) in versions"
          :key="index"
          v-bind="version"
          :to="version.path"
        />
      </UChangelogVersions>
    </UPageBody>
  </UPage>
</template>
```

::note
En este ejemplo, los `versions` se obtienen utilizando `queryCollection` desde el módulo `@nuxt/content`.
::

::tip
The `to` prop is overridden here since `@nuxt/content` uses the `path` property.
::

### Con indicador pegajoso

Puede usar el soporte `ui` y las diferentes ranuras para hacer que los indicadores se adhieran:

::component-example
---
prettier: true
collapse: true
name: 'changelog-versions-sticky-example'
class: 'p-8'
props:
  class: 'w-full'
---
::

### Con contenedor de desplazamiento: badge{label="4.4+" class="align-text-top"}

Pase un objeto a la prop `indicator` para configurar el contenedor de desplazamiento. De forma predeterminada, el indicador rastrea el desplazamiento de la ventana/página (https://motion.dev/docs/vue-use-scroll#page-scroll).

```vue
<script setup lang="ts">
const scrollContainer = ref<HTMLElement>()
</script>

<template>
  <div ref="scrollContainer" class="max-h-96 overflow-y-auto">
    <UChangelogVersions v-if="scrollContainer" :indicator="{ container: scrollContainer }" />
  </div>
</template>
```

::warning
Cuando utilice un `container` personalizado, asegúrese de que el elemento contenedor esté montado antes que el `UChangelogVersions`.
::

## API

### Props (accesorios)

:component-props

### Slots

:component-slots

::tip
Puede usar todas las ranuras del componente [`ChangelogVersion`](/docs/components/changelog-version#slots) dentro de ChangelogVersions, se reenvían automáticamente para que pueda personalizar versiones individuales cuando use el prop. `versions`.

```vue{3-5}
<template>
  <UChangelogVersions :versions="versions">
    <template #body="{ version }">
      <Markdown :value="version.content" />
    </template>
  </UChangelogVersions>
</template>
```
::

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
