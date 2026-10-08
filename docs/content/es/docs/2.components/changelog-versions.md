---
title: Changelogversiones
description: 'Mostrar una lista de versiones del registro de cambios en una línea de tiempo.'
category: page
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChangelogVersions.vue
---

@@pH000@@Uso del producto

El componente ChangelogVersions proporciona un diseño flexible para mostrar una lista de[ChangelogVersion](/docs/components/changelog-version)componentes utilizando la ranura predeterminada o el prop`versions`.

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

@170000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop`versions`como una matriz de objetos con las propiedades del componente[ChangelogVersion](/docs/components/changelog-version#props).

::component-code
---
Colapso : Verdad
Ignora :
  @@ph023@versiones
Externo :
  @@ph024@versiones
Externalidades :
  - ChangelogVersionProps (en inglés)
Escondido :
  @@26@clase
Props :
  versiones :
    - title : Nuxt 3.17 (Edición española)
      Descripción : Nuxt 3.17 ya está disponible , con una importante reelaboración de la capa de datos asíncrono , un nuevo componente incorporado , mejores advertencias y mejoras de rendimiento .
      imagen :https://nuxt.com/assets/blog/v3.17.png
      Fecha : 2025 - 04 - 27
      en : ' https://nuxt.com/blog/v3-17 '
      Nombre : ' _ blanco '
      Contenido : ' max-w - lg '
    - title : Nuxt 3.16 (Edición española)
      Nuxt 3.16 está lleno de características y mejoras de rendimiento !
      imagen :https://nuxt.com/assets/blog/v3.16.png
      Fecha : 2025 - 03 - 07
      en : ' https://nuxt.com/blog/v3-16 '
      Nombre : ' _ blanco '
      Contenido : ' max-w - lg '
    - título : Nuxt 3.15
      Nuxt 3.15 ya está disponible - con Vite 6 , mejor HMR y un rendimiento más rápido !
      imagen :https://nuxt.com/assets/blog/v3.15.png
      Fecha : 2024 - 12 - 24
      en : ' https://nuxt.com/blog/v3-15 '
      Nombre : ' _ blanco '
      Contenido : ' max-w - lg '
  Categoría : w-full
---
::

@@pH030@@Indicador

Utilice el prop`indicator`para ocultar la barra indicadora de la izquierda .

::component-code
---
Colapso : Verdad
Ignora :
  @@pH033@versiones
Externo :
  @@ph034@versiones
Externalidades :
  - ChangelogVersionProps (en inglés)
Escondido :
  @36@clase
Props :
  Indicador : Falso
  Versiones :
    - title : Nuxt 3.17 (Edición española)
      Descripción : Nuxt 3.17 ya está disponible , con una importante reelaboración de la capa de datos asíncrono , un nuevo componente incorporado , mejores advertencias y mejoras de rendimiento .
      imagen :https://nuxt.com/assets/blog/v3.17.png
      Fecha : 2025 - 04 - 27
      en : ' https://nuxt.com/blog/v3-17 '
      Nombre : ' _ blanco '
      Contenido : ' max-w - lg '
    - title : Nuxt 3.16 (Edición española)
      Nuxt 3.16 está lleno de características y mejoras de rendimiento !
      imagen :https://nuxt.com/assets/blog/v3.16.png
      Año : 2025 - 03 - 07
      en : ' https://nuxt.com/blog/v3-16 '
      Nombre : ' _ blanco '
      Contenido : ' max-w - lg '
    - título : Nuxt 3.15
      Nuxt 3.15 ya está disponible - con Vite 6 , mejor HMR y un rendimiento más rápido !
      imagen :https://nuxt.com/assets/blog/v3.15.png
      Fecha : 2024 - 12 - 24
      en : ' https://nuxt.com/blog/v3-15 '
      Nombre : ' _ blanco '
      Contenido : ' max-w - lg '
  Categoría : w-full
---
::

### Indicador de movimiento

Utilice el prop`indicator-motion`para personalizar u ocultar el efecto de movimiento en la barra indicadora . Predeterminados a`true`con`{ damping: 30, restDelta: 0.001 }`[opciones de transición de resorte](https://motion.dev/docs/vue-transitions#spring).

::component-code
---
Colapso : Verdad
Ignora :
  - versiones
Externo :
  @@ph049@versiones
Externalidades :
  - ChangelogVersionProps (en inglés)
Escondido :
  @@501@clase
items :
  Indicador :
    @@52@@verdad
    @@53@false
Props :
  Indicador : Verdadero
  Versiones :
    - title : Nuxt 3.17 (Edición española)
      Descripción : Nuxt 3.17 ya está disponible , con una importante reelaboración de la capa de datos asíncrono , un nuevo componente incorporado , mejores advertencias y mejoras de rendimiento .
      imagen :https://nuxt.com/assets/blog/v3.17.png
      Fecha : 2025 - 04 - 27
      en : ' https://nuxt.com/blog/v3-17 '
      Nombre : ' _ blanco '
      Contenido : ' max-w - lg '
    - titre : Nuxt 3.16
      Nuxt 3.16 está lleno de características y mejoras de rendimiento !
      imagen :https://nuxt.com/assets/blog/v3.16.png
      Fecha : 2025 - 03 - 07
      en : ' https://nuxt.com/blog/v3-16 '
      Nombre : ' _ blanco '
      Contenido : ' max-w - lg '
    - título : Nuxt 3.15
      Nuxt 3.15 ya está disponible - con Vite 6 , mejor HMR y un rendimiento más rápido !
      imagen :https://nuxt.com/assets/blog/v3.15.png
      Fecha : 2024 - 12 - 24
      en : ' https://nuxt.com/blog/v3-15 '
      Nombre : ' _ blanco '
      Contenido : ' max-w - lg '
  Categoría : w-full
---
::

@@57@Ejemplos

::note
Si bien estos ejemplos utilizan[Nuxt Content](https://content.nuxt.com), los componentes se pueden integrar con cualquier sistema de gestión de contenido .
::

### Dentro de una página

Utilice el componente ChangelogVersions en una página para crear una página de registro de cambios :

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
En este ejemplo , el`versions`se obtiene utilizando`queryCollection`desde el módulo`@nuxt/content`.
::

::tip
La prop`to`est remplacée ici puisque`@nuxt/content`utilise la propriété`path`.
::

### Con indicador pegajoso

Puede utilizar el prop`ui`y las diferentes ranuras para hacer que los indicadores se peguen :

::component-example
---
Categoría : true
Colapso : Verdad
Nombre : ' changelog-versionsticky-example '
Categoría : P - 8
Props:
  Categoría: w-full
---
::

### Con contenedor de desplazamiento: badge{label="4.4+" class="align-text-top"}

Pase un objeto al prop `indicator` para configurar el contenedor de desplazamiento. De forma predeterminada, el indicador rastrea el desplazamiento de la ventana/página (https://motion.dev/docs/vue-use-scroll#page-scroll).

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
Cuando utilice un `container` personalizado, asegúrese de que el elemento contenedor esté montado antes del `UChangelogVersions`.
::

@@pH109

@100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

@111@1111@1111

Componentes de slots

::tip
Puede usar todas las ranuras del componente [`ChangelogVersion`](/docs/components/changelog-version#slots) dentro de ChangelogVersions, se reenvían automáticamente para que pueda personalizar versiones individuales al usar el prop `versions`.

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

@127 @@ Proyecto

Componente Tema

@128@Changelog (Edición española)

Categoría: component-changelog
