---
title: ProseCollapsible
description: 'スムーズな展開/折りたたみアニメーションでコンテンツの表示を切り替えます。'
category: components
navigation.title: Collapsible
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Collapsible.vue
---

## 使用法

コンテンツを`collapsible`コンポーネントでラップして、コンテンツ内に[ Collapsible ](/docs/components/collapsible)を表示します。

::code-preview{class="[&>div]:*:w-full [&>div]:*:my-0"}

::collapsible

| プロップ    |デフォルト   |タイプ                     |
|---------|-----------|--------------------------|
| `name`|           | `string`{lang="ts-type"}|
| `size`| `md`| `string`{lang="ts-type"}|
| `color`| `neutral`| `string`{lang="ts-type"}|

::

#コード

```mdc
::collapsible

| Prop    | Default   | Type                     |
|---------|-----------|--------------------------|
| `name`  |           | `string`{lang="ts-type"} |
| `size`  | `md`      | `string`{lang="ts-type"} |
| `color` | `neutral` | `string`{lang="ts-type"} |

::
```

::

##  API

###  Props

component—props {prose}

### スロット

component—slots {prose}

## テーマ

component—theme {prose}

##  Changelog

component—changelog {prefix="prose"}
