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

DashboardPanelコンポーネントは、パネルを表示するために使用されます。その状態（サイズ、折りたたみなど）は、[DashboardGroup](/docs/components/dashboard-group#props)コンポーネントに提供する`storage`および`storage-key`プロパティに基づいて保存されます。

[DashboardGroup](/docs/components/dashboard-group)コンポーネントのデフォルトスロット内で使用します。複数のパネルを隣り合わせに配置できます。

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
異なるページで複数のパネルを使用する場合は、競合を避けるために`id`を設定することをお勧めします。
::

::warning
`resizable`プロパティを使用する場合、このコンポーネントは単一のルート要素を持ちません。ページ遷移を使用する場合や、レイアウトに単一のルートを必要とする場合は、コンテナ（例えば`<div class="flex flex-1">`）でラップします。
::

パディング付きのスクロール可能なボディを望まない場合は、`header`、`body`、`footer`スロットを使用してパネルまたはデフォルトスロットをカスタマイズします。

::component-example
---
collapse: true
name: 'dashboard-panel-example'
class: '!p-0 !justify-start'
props:
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96 h-136'
---
::

::note
ほとんどの場合、[`DashboardNavbar`](/docs/components/dashboard-navbar)コンポーネントを`header`スロットで使用します。
::

### サイズ変更可能

`resizable`プロパティを使用してパネルのサイズを変更できます。

::component-code
---
prettier: true
hide:
  - minSize
  - defaultSize
  - maxSize
  - class
props:
  resizable: true
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96'
slots:
  body: |

    <Placeholder class="h-96" />
class: '!p-0 !justify-start'
---

#body
:placeholder{class="h-96"}
::

### サイズ

`min-size`、`max-size`、`default-size`の小道具を使用して、パネルのサイズをカスタマイズします。

::component-code
---
prettier: true
ignore:
  - resizable
hide:
  - class
props:
  resizable: true
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96'
slots:
  body: |

    <Placeholder class="h-96" />
class: '!p-0 !justify-start'
---

#body
:placeholder{class="h-96"}
::

::tip{to="/docs/components/dashboard-group#props"}
サイズはデフォルトでパーセンテージで計算されます。`DashboardGroup`コンポーネントの`unit`プロパティを使用して変更できます。
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
