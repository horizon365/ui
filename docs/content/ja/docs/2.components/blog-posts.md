---
title: ブログ投稿
description: 'レスポンシブグリッドレイアウトでブログ投稿のリストを表示します。'
category: page
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/BlogPosts.vue
---

## 使用 法

BlogPosts コンポーネント は 、[BlogPost](/docs/components/blog-post))コンポーネント の リスト を 表示 する 柔軟 な レイアウト を 提供 し ます 。

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

`posts`prop を 、[BlogPost](/docs/components/blog-post#props)コンポーネント の プロ パティ を 持つ オブジェクト の 配列 として 使用 し ます 。

::component-code
---
崩壊 真
無視
  - 投稿
外部
  - 投稿
externalTypes
  - BlogPostProps [ ]
小道具
  投稿
    - title Nuxt アイコン v1
      説明 ' Discover Nuxt Icon v1 ! '
      画像https://nuxt.com/assets/blog/nuxt-icon/cover.png
      日 付 2024 - 11 - 25
    - title Nuxt 3.14
      説明 ： ' Nuxt 3.14 が 出 まし た ! '
      画像https://nuxt.com/assets/blog/v3.14.png
      日 付 2024 - 11 - 04
    - title Nuxt 3.13
      説明 ： ' Nuxt 3.13 が 出 まし た ! '
      画像https://nuxt.com/assets/blog/v3.13.png
      日 付 2024 - 08 - 22
---
::

### オリエンテーション

`orientation`プロ パティ を 使用 し て BlogPosts の 向き を 変更 し ます 。 デフォルト は`horizontal`です 。

::component-code
---
崩壊 真
無視
  - 投稿
外部
  - 投稿
externalTypes
  - BlogPostProps [ ]
小道具
  オリエンテーション 垂直
  投稿
    - title Nuxt アイコン v1
      説明 ' Discover Nuxt Icon v1 ! '
      画像https://nuxt.com/assets/blog/nuxt-icon/cover.png
      日 付 2024 - 11 - 25
    - title Nuxt 3.14
      説明 ： ' Nuxt 3.14 が 出 まし た ! '
      画像https://nuxt.com/assets/blog/v3.14.png
      日 付 2024 - 11 - 04
    - title Nuxt 3.13
      説明 ： ' Nuxt 3.13 が 出 まし た ! '
      画像https://nuxt.com/assets/blog/v3.13.png
      日 付 2024 - 08 - 22
---
::

::tip
デフォルト スロット の 代わり に`posts`prop を 使用 する と 、 投稿 の`orientation`は 自動的 に 反転 し ます 。`horizontal`から`vertical`、 その 逆 も 同様 です 。
::

## 例

::note
これら の 例 で は[Nuxt Content](https://content.nuxt.com)を 使用 し て い ます が 、 コンポーネント は 任意 の コンテンツ 管理 システム と 統合 する こと が でき ます 。
::

### ページ 内

ブログ ページ を 作成 する に は 、 ページ 内 の BlogPosts コンポーネント を 使用 し ます 。

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
この 例 で は 、`@nuxt/content`モジュール の`queryCollection`を 使用 し て`posts`を 取得 し ます 。
::

::tip
`@nuxt/content`は`path`プロ パティ を 使用 し て いる ため 、`to`プロ パティ は 上書き さ れ ます 。
::

## API

### Props

component-props

### スロット

コンポーネント スロット

## テーマ

コンポーネント テーマ

## Changelog

component-changelog
