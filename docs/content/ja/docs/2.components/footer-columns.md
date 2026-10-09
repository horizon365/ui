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

[Footer](/docs/components/footer)コンポーネントの`top`スロットで使用します。

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

### Columns

`columns`プロパティを次のプロパティを持つオブジェクトの配列として使用します。

- `label: string`{lang="ts-type"}
- `children?: FooterColumnLink[]`{lang="ts-type"}

各列には、リンクを定義するオブジェクトの`children`配列が含まれます。各リンクは以下のプロパティを持つことができます。

- `label?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkLeadingIcon?: ClassNameValue }`{lang="ts-type"}

[Link](/docs/components/link#props)コンポーネントから、`to`、`target`などの任意のプロパティを渡すことができます。

::component-example
---
prettier: true
name: 'footer-columns-example'
class: 'p-8'
props:
  class: 'w-full'
---
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
