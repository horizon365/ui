---
title: Blogposts schreiben
description: 'Zeigt eine Liste von Blog-Posts in einem responsiven Rasterlayout an.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/BlogPosts.vue
---

@@@ph000@Verwendung

Die BlogPosts-Komponente bietet ein flexibles Layout , um eine Liste von[BlogPost](/docs/components/blog-post)Komponenten entweder mit dem Standardsteckplatz oder dem`posts`prop.

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

@@ph017@postings

Verwenden Sie`posts`prop als Array von Objekten mit den Eigenschaften der Komponente[BlogPost](/docs/components/blog-post#props).

::component-code
---
Einsturz : wahr
Ignoriert :
  @@ph023@postings
Außen :
  @@ph024@postings
Externe Personen :
  @@@ph025@@blogpostprops [ Bearbeiten | Quelltext bearbeiten ]
Props :
  Posts auf :
    - title : Nuxt Icon v1 (Deutsche Übersetzung)
      Beschreibung : ' Entdecken Sie Nuxt Icon v1 ! '
      Bild :https://nuxt.com/assets/blog/nuxt-icon/cover.png
      Datum : 2024 - 11 - 25
    - title : Nuxt 3.14 (Deutsche Übersetzung)
      Beschreibung : ' Nuxt 3.14 ist da ! '
      Bild :https://nuxt.com/assets/blog/v3.14.png
      Datum : 2024 - 11 - 04
    - title : Nuxt 3.13 (Deutsche Übersetzung)
      Beschreibung : ' Nuxt 3.13 ist da ! '
      Image :https://nuxt.com/assets/blog/v3.13.png
      Datum : 2024 - 08 - 22
---
::

@@ph029@@Orientierung

Verwenden Sie`orientation`prop , um die Ausrichtung der BlogPosts . Defaults auf`horizontal`zu ändern .

::component-code
---
Einsturz : wahr
Ignoriert :
  @@ph032@postings
Außen :
  @@ph033@@postings
Externe Typen :
  @@@ph034@@BlogPostProps [ Bearbeiten | Quelltext bearbeiten ]
Props :
  Ausrichtung : vertikal
  Posts auf :
    - title : Nuxt Icon v1 (Deutsche Übersetzung)
      Beschreibung : ' Entdecken Sie Nuxt Icon v1 ! '
      Image :https://nuxt.com/assets/blog/nuxt-icon/cover.png
      Datum : 2024 - 11 - 25
    - title : Nuxt 3.14 (Deutsche Übersetzung)
      Beschreibung : ' Nuxt 3.14 ist da ! '
      Image :https://nuxt.com/assets/blog/v3.14.png
      Datum : 2024 - 11 - 04
    - title : Nuxt 3.13 (Deutsche Übersetzung)
      Beschreibung : ' Nuxt 3.13 ist da ! '
      Image :https://nuxt.com/assets/blog/v3.13.png
      Datum : 2024 - 08 - 22
---
::

::tip
Bei Verwendung des`posts`prop anstelle des Standard-Steckplatzes wird das`orientation`der Beiträge automatisch umgekehrt ,`horizontal`zu`vertical`und umgekehrt .
::

@@ph042@@Beispiele

::note
Während in diesen Beispielen [Nuxt Content](https://content.nuxt.com) verwendet wird, können die Komponenten in jedes Content-Management-System integriert werden.
::

### Innerhalb einer Seite

Verwenden Sie die Komponente BlogPosts in einer Seite, um eine Blogseite zu erstellen:

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
In diesem Beispiel werden die `posts` mit `queryCollection` aus dem Modul `@nuxt/content` abgerufen.
::

::tip
`to` prop wird hier überschrieben, da `@nuxt/content` die @@@-Eigenschaft verwendet.
::

## api

@@@@@@@@@@@ph079@@props

Komponenten-Props

@@ph080@@slots

Die Komponenten-Slots

@@@@@@@@@ph081@@theme

Das Komponenten-Theme

@@ph082@@changelog @@changelog

Das Component-Changelog
