---
title: Blogposteos
description: 'Mostrar una lista de entradas de blog en un diseño de cuadrícula sensible.'
category: page
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/BlogPosts.vue
---

@@pH000@@Uso del producto

El componente BlogPosts proporciona un diseño flexible para mostrar una lista de[BlogPost](/docs/components/blog-post)componentes utilizando la ranura predeterminada o el`posts`prop.

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

@17@Posts

Utilice el prop`posts`como una matriz de objetos con las propiedades del componente[BlogPost](/docs/components/blog-post#props).

::component-code
---
Colapso : Verdad
Ignora :
  @@223@publicaciones
Externo :
  @@24@mensajes
Externalidades :
  @@25@@BlogPostProps (en inglés)
Props :
  Posts :
    Archivo de la etiqueta : Nuxt Icon v1
      Descripción : ' ¡ Descubre Nuxt Icon v1 ! '
      imagen :https://nuxt.com/assets/blog/nuxt-icon/cover.png
      Fecha : 2024 - 11 - 25
    - title : Nuxt 3.14 (Edición española)
      Descripción : ' Nuxt 3.14 ya está disponible ! '
      imagen :https://nuxt.com/assets/blog/v3.14.png
      Fecha : 2024 - 11 - 04
    - title : Nuxt 3.13 (Edición española)
      Descripción : ' Nuxt 3.13 ya está disponible ! '
      imagen :https://nuxt.com/assets/blog/v3.13.png
      Fecha : 2024 - 08 - 22
---
::

@@29@Orientación

Utilice el prop`orientation`para cambiar la orientación de los BlogPosts . Defaults a`horizontal`.

::component-code
---
Colapso : Verdad
Ignora :
  @@2003@@publicaciones
Externo :
  @@333@artículos
Externalidades :
  @@@P2013@@BlogPostProps [ en inglés ]
Props :
  Orientación : Vertical
  Posts :
    Archivo de la etiqueta : Nuxt Icon v1
      Descripción : ' ¡ Descubre Nuxt Icon v1 ! '
      imagen :https://nuxt.com/assets/blog/nuxt-icon/cover.png
      Fecha : 2024 - 11 - 25
    - title : Nuxt 3.14 (Edición española)
      Descripción : ' Nuxt 3.14 ya está disponible ! '
      imagen :https://nuxt.com/assets/blog/v3.14.png
      Fecha : 2024 - 11 - 04
    - title : Nuxt 3.13 (Edición española)
      Descripción : ' Nuxt 3.13 ya está disponible ! '
      imagen :https://nuxt.com/assets/blog/v3.13.png
      Fecha : 2024 - 08 - 22
---
::

::tip
Cuando se utiliza el prop`posts`en lugar de la ranura predeterminada , el`orientation`de los mensajes se invierte automáticamente ,`horizontal`a`vertical`y viceversa .
::

@@pH042@Ejemplos

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
En este ejemplo, el `posts` se obtiene utilizando `queryCollection` desde el módulo `@nuxt/content`.
::

::tip
El `to` prop se anula aquí desde `@nuxt/content` utiliza el `path` propiedad.
::

@@78800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

@@70000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

@800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes de slots

@081@@Proyecto

Componente Tema

@2018@Changelog

Categoría: component-changelog
