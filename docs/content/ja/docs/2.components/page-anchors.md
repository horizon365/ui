---
title: ページアンカー
description: 'ページに表示するアンカーのリスト。'
category: page
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageAnchors.vue
---

## 使用 法

PageAnchors コンポーネント を 使用 し て 、 リンク の リスト を 表示 し ます 。

::component-code
---
崩壊 真
きれい 真
無視
  - リンク
外部
  - リンク
externalTypes
  - PageAnchor [ ]
小道具
  リンク
    - label ' ドキュメンテーション '
      アイコン i-lucide-book-open
      to ：/docs/getting-started
    - label ' コンポーネント '
      アイコン i-lucide-box
      to ：/docs/components
    - label ' Figma Kit '
      アイコン i-simple-icons-figma
      次 へhttps://go.nuxt.com/figma-ui
      ターゲット _blank
    - label ' リリース '
      アイコン i-simple-icons-github
      次 へhttps://github.com/nuxt/ui/releases
      ターゲット _blank
---
::

### リンク

`links`prop を 、 次 の プロ パティ を 持つ オブジェクト の 配列 として 使用 し ます 。

- `label: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkLeading?: ClassNameValue, linkLeadingIcon?: ClassNameValue }`{lang="ts-type"}

[Link](/docs/components/link#props)コンポーネント から 、`to`、`target`など の プロ パティ を 渡す こと が でき ます 。

::component-code
---
きれい 真
無視
  - リンク
外部
  - リンク
externalTypes
  - PageAnchor [ ]
小道具
  リンク
    - label ' ドキュメンテーション '
      アイコン i-lucide-book-open
      to ：/docs/getting-started
    - label ' Components '
      アイコン i-lucide-box
      to ：/docs/components
    - label ' Figma Kit '
      アイコン i-simple-icons-figma
      次 へhttps://go.nuxt.com/figma-ui
      ターゲット _blank
    - label ' リリース '
      アイコン i-simple-icons-github
      次 へhttps://github.com/nuxt/ui/releases
      ターゲット _blank
---
::

## 例

::note
これら の 例 で は[Nuxt Content](https://content.nuxt.com)を 使用 し て い ます が 、 コンポーネント は 任意 の コンテンツ 管理 システム と 統合 する こと が でき ます 。
::

### レイアウト 内

[PageAside](/docs/components/page-aside)コンポーネント 内 の PageAnchors コンポーネント を 使用 し て 、 ナビゲーション の 上 に リンク の リスト を 表示 し ます 。

```vue [layouts/docs.vue]{35}
<script setup lang="ts">
import type { PageAnchor } from '@nuxt/ui'
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<ContentNavigationItem[]>('navigation')

const links: PageAnchor[] = [{
  label: 'Documentation',
  icon: 'i-lucide-book-open',
  to: '/docs/getting-started'
}, {
  label: 'Components',
  icon: 'i-lucide-box',
  to: '/docs/components'
}, {
  label: 'Figma Kit',
  icon: 'i-simple-icons-figma',
  to: 'https://go.nuxt.com/figma-ui',
  target: '_blank'
}, {
  label: 'Releases',
  icon: 'i-lucide-rocket',
  to: 'https://github.com/nuxt/ui/releases',
  target: '_blank'
}]
</script>

<template>
  <UPage>
    <template #left>
      <UPageAside>
        <UPageAnchors :links="links" />

        <USeparator type="dashed" />

        <UContentNavigation :navigation="navigation" />
      </UPageAside>
    </template>

    <slot />
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
