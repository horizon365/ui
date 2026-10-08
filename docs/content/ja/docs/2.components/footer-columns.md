---
title: FooterColumns
description: 'フッターに表示する列としてのリンクのリスト。'
category: navigation
keywords:
  - footer links
  - sitemap
  - columns
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/FooterColumns.vue
---

## 使用法

FooterColumnsコンポーネントは、Footerに表示する列のリストをレンダリングします。

[ Footer ](/docs/components/footer)コンポーネントの`top`スロットで使用します。

```vue {3-7}
<template>
  <UFooter>
    <template #top>
      <UContainer>
        <UFooterColumns />
      </UContainer>
    </template>
  </UFooter>
</template>
```

### カラム

`columns` propを、次のプロパティを持つオブジェクトの配列として使用します。

- `label: string`{lang="ts-type"}
- `children?: FooterColumnLink[]`{lang="ts-type"}

各列には、リンクを定義するオブジェクトの`children`配列が含まれています。各リンクは以下のプロパティを持つことができます。

- `label?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkLeadingIcon?: ClassNameValue }`{lang="ts-type"}

[ Link ](/docs/components/link#props)コンポーネントから、`to`、`target`などのプロパティを渡すことができます。

::component-example
---
きれい真
名前'footer—columns—example'
クラス'p—8'
小道具
  クラス'w—full'
---
::

##  API

###  Props

component—props

### スロット

コンポーネントスロット

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
