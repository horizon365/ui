---
title: Blogposts Bearbeiten
description: 'Zeigt eine Liste von Blog-Posts in einem responsiven Rasterlayout an.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/BlogPosts.vue
---

## Bearbeiten

Die BlogPosts-Komponente bietet ein flexibles Layout, um eine Liste von [BlogPost](/docs/components/blog-post)-Komponenten entweder über den Standardsteckplatz oder die `posts`-Prop anzuzeigen.

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

### Posts (englisch)

Verwenden Sie die `posts`-Prop als Array von Objekten mit den Eigenschaften der Komponente [BlogPost](/docs/components/blog-post#props).

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

### Ausrichtung

Verwenden Sie die `orientation` prop, um die Ausrichtung der BlogPosts. Defaults auf `horizontal` zu ändern.

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
Wenn Sie die `posts`-Prop anstelle des Standardsteckplatzes verwenden, wird die `orientation` der Pfosten automatisch umgekehrt, `horizontal` zu `vertical` und umgekehrt.
::

## Examples (Deutsche Ausgabe)

::note
Während diese Beispiele [Nuxt Content](https://content.nuxt.com) verwenden, können die Komponenten in jedes Content Management System integriert werden.
::

### innerhalb einer Seite

Verwenden Sie die BlogPosts-Komponente in einer Seite, um eine Blogseite zu erstellen:

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
In diesem Beispiel werden die `posts` mit `queryCollection` aus dem `@nuxt/content`-Modul abgerufen.
::

::tip
Die `to`-Prop wird hier überschrieben, da `@nuxt/content` die Eigenschaft `path` verwendet.
::

## API (Englisch)

### Props (nicht)

:component-props

### Slots (englisch)

:component-slots

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
