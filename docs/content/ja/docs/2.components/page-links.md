---
title: ページリンク
description: 'ページに表示されるリンクのリスト。'
category: page
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageLinks.vue
---

## 使用 法

PageLinks コンポーネント を 使用 し て 、 リンク の リスト を 表示 し ます 。

::component-code
---
崩壊 真
きれい 真
無視
  - リンク
外部
  - リンク
externalTypes
  - PageLink [ ]
小道具
  リンク
    - label ' この ページ を 編集 '
      アイコン i-lucide-file-pen
      次 へhttps://github.com/nuxt/ui/blob/v4/docs/content/docs/2.components/page-links.md
    - label ' GitHub 上 の スター '
      アイコン i-lucide-star
      次 へhttps://github.com/nuxt/ui
    - label ' リリース '
      アイコン i- lucide ロケット
      次 へhttps://github.com/nuxt/ui/releases
---
::

### リンク

`links`prop を 、 次 の プロ パティ を 持つ オブジェクト の 配列 として 使用 し ます 。

- `label: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkLeadingIcon?: ClassNameValue }`{lang="ts-type"}

[Link](/docs/components/link#props)コンポーネント から 、`to`、`target`など の プロ パティ を 渡す こと が でき ます 。

::component-code
---
きれい 真
無視
  - リンク
外部
  - リンク
externalTypes
  - PageLink [ ]
小道具
  リンク
    - label ' この ページ を 編集 '
      アイコン i-lucide-file-pen
      次 へhttps://github.com/nuxt/ui/blob/v4/docs/content/docs/2.components/page-links.md
    - label ' GitHub 上 の スター '
      アイコン i-lucide-star
      次 へhttps://github.com/nuxt/ui
    - label ' リリース '
      アイコン i- lucide ロケット
      次 へhttps://github.com/nuxt/ui/releases
---
::

### タイトル

`title`プロ パティ を 使用 し て 、 リンク の 上 に タイトル を 表示 し ます 。

::component-code
---
きれい 真
無視
  - リンク
外部
  - リンク
externalTypes
  - PageLink [ ]
小道具
  タイトル ： “ コミュニティ ”
  リンク
    - label ' この ページ を 編集 '
      アイコン i-lucide-file-pen
      次 へhttps://github.com/nuxt/ui/blob/v4/docs/content/docs/2.components/page-links.md
    - label ' GitHub 上 の スター '
      アイコン i-lucide-star
      次 へhttps://github.com/nuxt/ui
    - label ' リリース '
      アイコン i- lucide ロケット
      次 へhttps://github.com/nuxt/ui/releases
---
::

## 例

::note
これら の 例 で は[Nuxt Content](https://content.nuxt.com)を 使用 し て い ます が 、 コンポーネント は 任意 の コンテンツ 管理 システム と 統合 でき ます 。
::

### ページ 内

ContentToc コンポーネント の`bottom`スロット に ある PageLinks コンポーネント を 使用 し て 、 目次 の 下 に リンク の リスト を 表示 し ます 。

```vue [pages/\[...slug\\].vue]{48-52}
<script setup lang="ts">
import type { PageLink } from '@nuxt/ui'

const route = useRoute()

definePageMeta({
  layout: 'docs'
})

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('docs').path(route.path).first()
})

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => {
  return queryCollectionItemSurroundings('content', route.path)
})

const links = computed<PageLink[]>(() => [{
  icon: 'i-lucide-file-pen',
  label: 'Edit this page',
  to: `https://github.com/nuxt/ui/edit/v4/docs/content/${page?.value?.stem}.md`,
  target: '_blank'
}, {
  icon: 'i-lucide-star',
  label: 'Star on GitHub',
  to: 'https://github.com/nuxt/ui',
  target: '_blank'
}, {
  label: 'Releases',
  icon: 'i-lucide-rocket',
  to: 'https://github.com/nuxt/ui/releases'
}])
</script>

<template>
  <UPage>
    <UPageHeader :title="page.title" :description="page.description" />

    <UPageBody>
      <ContentRenderer :value="page" />

      <USeparator />

      <UContentSurround :surround="surround" />
    </UPageBody>

    <template #right>
      <UContentToc :links="page.body.toc.links">
        <template #bottom>
          <USeparator type="dashed" />

          <UPageLinks title="Community" :links="links" />
        </template>
      </UContentToc>
    </template>
  </UPage>
</template>
```

## API

### Props

component-props

### スロット

コンポーネント スロット

## テーマ

コンポーネント テーマ

## Changelog

component-changelog
