---
title: ブログ投稿
description: 'レスポンシブグリッドレイアウトでブログ投稿のリストを表示します。'
category: page
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/BlogPosts.vue
---

## 使用法

BlogPostsコンポーネントは、[BlogPost](/docs/components/blog-post)コンポーネントのリストをデフォルトスロットまたは`posts` propを使用して表示する柔軟なレイアウトを提供します。

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

### 投稿

`posts`プロパティを[BlogPost](/docs/components/blog-post#props)コンポーネントのプロパティを持つオブジェクトの配列として使用します。

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

### Orientation

BlogPostsの向きを変更するには、`orientation`プロパティを使用します。デフォルトは`horizontal`です。

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
デフォルトスロットの代わりに`posts`プロパティを使用すると、投稿の`orientation`は自動的に逆になります。`horizontal`は`vertical`に、その逆も同様です。
::

## 例

::note
これらの例は[Nuxt Content](https://content.nuxt.com)を使用していますが、コンポーネントは任意のコンテンツ管理システムと統合できます。
::

### ページ内

ブログページを作成するには、ページ内のBlogPostsコンポーネントを使用します。

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
この例では、`@nuxt/content`モジュールの`queryCollection`を使用して`posts`をフェッチします。
::

::tip
`@nuxt/content`は`path`プロパティを使用するため、`to`プロパティはオーバーライドされます。
::

## API

### Props

:component-props

### スロット

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
