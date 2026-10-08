---
title: Les blogposts
description: 'Affichez une liste d'articles de blog dans une mise en page de grille réactive.'
category: page
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/BlogPosts.vue
---

@@ph000@@utilisation

Le composant BlogPosts fournit une disposition flexible pour afficher une liste de composants[BlogPost](/docs/components/blog-post)en utilisant soit l'emplacement par défaut , soit le prop`posts`.

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

@@ph017@Posts

Utilisez le prop`posts`comme un tableau d'objets avec les propriétés du composant[BlogPost](/docs/components/blog-post#props).

::component-code
---
Collapse : vrai
ignorer :
  @@23@posts
Extérieure :
  @@24@posts
Extérieurs :
  @@25@@BlogPostProps [ résumé ]
Props :
  Posts :
    - title : Icône Nuxt v1
      Découvrez Nuxt Icon v1 !
      image :https://nuxt.com/assets/blog/nuxt-icon/cover.png
      Date : 2024 - 11 - 25
    - titre : Nuxt 3.14
      Description : ' Nuxt 3.14 est sorti ! '
      image :https://nuxt.com/assets/blog/v3.14.png
      Date : 2024 - 11 - 04
    - titre : Nuxt 3.13
      Description : ' Nuxt 3.13 est sorti ! '
      image :https://nuxt.com/assets/blog/v3.13.png
      Date : 2024 - 08 - 22
---
::

@@29@@Référencement

Utilisez la prop`orientation`pour modifier l'orientation des BlogPosts . Defaults à`horizontal`.

::component-code
---
Collapse : vrai
Ignorer :
  @@ph032@posts
Extérieur :
  @@ph033@posts
Extérieurs :
  - BlogPostProps [ réf . nécessaire ]
Props :
  Orientation : verticale
  Posts :
    - title : Icône Nuxt v1
      Découvrez Nuxt Icon v1 !
      image :https://nuxt.com/assets/blog/nuxt-icon/cover.png
      Date : 2024 - 11 - 25
    - titre : Nuxt 3.14
      Description : ' Nuxt 3.14 est sorti ! '
      image :https://nuxt.com/assets/blog/v3.14.png
      Date : 2024 - 11 - 04
    - titre : Nuxt 3.13
      Description : ' Nuxt 3.13 est sorti ! '
      image :https://nuxt.com/assets/blog/v3.13.png
      Date : 2024 - 08 - 22
---
::

::tip
Lorsque vous utilisez le prop`posts`au lieu de l'emplacement par défaut , le`orientation`des messages est automatiquement inversé , de`horizontal`à`vertical`et vice versa .
::

@@ph042@Exemples

::note
Bien que ces exemples utilisent [Nuxt Content](https://content.nuxt.com), les composants peuvent être intégrés à n'importe quel système de gestion de contenu.
::

### Dans une page

Utiliser le composant BlogPosts dans une page pour créer une page de blog:

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
Dans cet exemple, les `posts` sont récupérés en utilisant `queryCollection` du module `@nuxt/content`.
::

::tip
La propriété `to` est remplacée ici puisque `@nuxt/content` utilise la propriété `path`.
::

@@ph078@api

@@779@@référencement

Composants-props

@@ph080@@réseaux sociaux

Composants slots

@@ph081@thème

Composant-thème

@changelog @changelog

Composant-changelog
