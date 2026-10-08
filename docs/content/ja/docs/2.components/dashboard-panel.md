---
title: ダッシュボードパネル
description: 'ダッシュボードに表示するサイズ変更可能なパネル。'
category: dashboard
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardPanel.vue
---

## 使用法

DashboardPanelコンポーネントは、パネルを表示するために使用されます。その状態（サイズ、折りたたみなど）は、[ DashboardGroup ](/docs/components/dashboard-group#props))`storage``storage-key` propsに基づいて保存されます。

[ DashboardGroup ](/docs/components/dashboard-group)コンポーネントのデフォルトスロット内で使用します。複数のパネルを隣り合わせに配置できます。

```vue [pages/index.vue]{8,10}
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>

<template>
  <UDashboardPanel id="inbox-1" resizable />

  <UDashboardPanel id="inbox-2" class="hidden lg:flex" />
</template>
```

::caution
異なるページで複数のパネルを使用する場合は、競合を避けるために`id`を設定することを推奨します。
::

::warning
このコンポーネントは`resizable` propを使用する場合、単一のルート要素を持ちません。そのため、ページ遷移を使用する場合やレイアウトに単一のルートを必要とする場合は、コンテナにラップしてください例：`<div class="flex flex-1">`。
::

パディング付きのスクロール可能なボディを望まない場合は、`header`、`body`、`footer`スロットを使用してパネルまたはデフォルトスロットをカスタマイズします。

::component-example
---
崩壊真
名前'dashboard—panel'
クラス'！p—0！justify—start'
小道具
  minSize 22
  defaultSize 35
  最大サイズ40
  クラス'！min—h—96 h—136'
---
::

::note
ほとんどの場合、[`DashboardNavbar`](/docs/components/dashboard-navbar)コンポーネントを`header`スロットで使用します。
::

###  Resizable

`resizable`プロパティを使用して、パネルのサイズを変更できます。

::component-code
---
きれい真
隠す
  -  minSize
  -  defaultSize
  -  maxSize
  - クラス
小道具
  サイズ変更可能true
  minSize 22
  defaultSize 35
  最大サイズ40
  クラス'！min—h—96'
スロット
  ボディ|

    <Placeholder class="h-96" />
クラス'！p—0！justify—start'
---

#body
placeholder {class="h-96"}
::

### サイズ

パネルのサイズをカスタマイズするには、`min-size`、`max-size`、および`default-size` propsを使用します。

::component-code
---
きれい真
無視
  -  resizable
隠す
  - クラス
小道具
  サイズ変更可能true
  minSize 22
  defaultSize 35
  最大サイズ40
  クラス'！min—h—96'
スロット
  ボディ|

    <Placeholder class="h-96" />
クラス'！p—0！justify—start'
---

#body
placeholder {class="h-96"}
::

::tip{to="/docs/components/dashboard-group#props"}
サイズはデフォルトでパーセンテージで計算されます。`DashboardGroup`コンポーネントの`unit`プロパティを使用して変更できます。
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
