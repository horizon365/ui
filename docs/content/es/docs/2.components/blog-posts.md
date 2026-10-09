---
title: Blogposteos
description: 'Mostrar una lista de entradas de blog en un diseño de cuadrícula sensible.'
category: page
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/BlogPosts.vue
---

xph0000xUso

El componente BlogPosts proporciona un diseño flexible para mostrar una lista de componentes [BlogPost](/docs/components/blog-post) utilizando la ranura predeterminada o el prop `posts`.

```vue {2,8}
<template>
  <UBlogPosts>
    <UBlogPost
      v-for="(post, index) in posts"
      :key="index"
      v-bind="post"
    />
  </UBlogPosts>
</template>
```

### Artículos

Utilice el prop `posts` como una matriz de objetos con las propiedades del componente [BlogPost](/docs/components/blog-post#props).

::component-code
---
collapse: true
ignore:
  - posts
external:
  - posts
externalTypes:
  - BlogPostProps[]
props:
  posts:
    - title: Nuxt Icon v1
      description: 'Discover Nuxt Icon v1!'
      image: https://nuxt.com/assets/blog/nuxt-icon/cover.png
      date: 2024-11-25
    - title: Nuxt 3.14
      description: 'Nuxt 3.14 is out!'
      image: https://nuxt.com/assets/blog/v3.14.png
      date: 2024-11-04
    - title: Nuxt 3.13
      description: 'Nuxt 3.13 is out!'
      image: https://nuxt.com/assets/blog/v3.13.png
      date: 2024-08-22
---
::

### Orientación

Utilice el prop `orientation` para cambiar la orientación de los BlogPosts. Predeterminados a `horizontal`.

::component-code
---
collapse: true
ignore:
  - posts
external:
  - posts
externalTypes:
  - BlogPostProps[]
props:
  orientation: vertical
  posts:
    - title: Nuxt Icon v1
      description: 'Discover Nuxt Icon v1!'
      image: https://nuxt.com/assets/blog/nuxt-icon/cover.png
      date: 2024-11-25
    - title: Nuxt 3.14
      description: 'Nuxt 3.14 is out!'
      image: https://nuxt.com/assets/blog/v3.14.png
      date: 2024-11-04
    - title: Nuxt 3.13
      description: 'Nuxt 3.13 is out!'
      image: https://nuxt.com/assets/blog/v3.13.png
      date: 2024-08-22
---
::

::tip
Cuando se utiliza el soporte `posts` en lugar de la ranura predeterminada, el `orientation` de los postes se invierte automáticamente, `horizontal` a `vertical` y viceversa.
::

## Ejemplos

::note
Si bien estos ejemplos utilizan [Nuxt Content](https://content.nuxt.com), los componentes se pueden integrar con cualquier sistema de gestión de contenido.
::

### Dentro de una página

Utilice el componente BlogPosts de una página para crear una página de blog:

```vue [pages/blog/index.vue]{11-18}
<script setup lang="ts">
const { data: posts } = await useAsyncData('posts', () => queryCollection('posts').all())
</script>

<template>
  <UPage>
    <UPageHero title="Blog" />

    <UPageBody>
      <UContainer>
        <UBlogPosts>
          <UBlogPost
            v-for="(post, index) in posts"
            :key="index"
            v-bind="post"
            :to="post.path"
          />
        </UBlogPosts>
      </UContainer>
    </UPageBody>
  </UPage>
</template>
```

::note
En este ejemplo, los `posts` se obtienen utilizando `queryCollection` desde el módulo `@nuxt/content`.
::

::tip
La prop `to` se anula aquí ya que `@nuxt/content` usa la propiedad `path`.
::

## API (Edición española)

### Props (accesorios)

:component-props

### Slots

:component-slots

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
