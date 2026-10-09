---
title: Blogberichten
description: 'Toon een lijst met blogposts in een responsieve rasterlay-out.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/BlogPosts.vue
---

## Gebruik

De BlogPosts-component biedt een flexibele lay-out om een lijst met [BlogPost](/docs/components/blog-post) componenten weer te geven met behulp van de standaardsleuf of de `posts`-prop.

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

### Berichten

Gebruik de `posts` prop als een array van objecten met de eigenschappen van de [BlogPost](/docs/components/blog-post#props) component.

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

### Oriëntatie

Gebruik de `orientation` prop om de oriëntatie van de BlogPosts te wijzigen. Standaard `horizontal`.

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
Bij gebruik van de `posts` prop in plaats van de standaard slot, wordt de `orientation` van de berichten automatisch omgekeerd, `horizontal` naar `vertical` en vice versa.
::

## Voorbeelden

::note
Hoewel deze voorbeelden [Nuxt Content](https://content.nuxt.com) gebruiken, kunnen de componenten worden geïntegreerd met elk contentbeheersysteem.
::

### Binnen een pagina

Gebruik de BlogPosts-component in een pagina om een blogpagina te maken:

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
In dit voorbeeld worden de `posts` opgehaald met `queryCollection` uit de `@nuxt/content` module.
::

::tip
De `to` prop wordt hier overschreven aangezien `@nuxt/content` de `path` eigenschap gebruikt.
::

## API

### Props

:component-props

### Slots

:component-slots

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog
