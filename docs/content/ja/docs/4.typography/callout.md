---
title: ProseCallout
description: '目を引くカラーボックスやアイコンで重要な情報をハイライトします。'
category: components
navigation.title: Callout
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Callout.vue
---

## 使用法

コンテンツに目を引くコンテキストを追加するには、`callout`コンポーネントのデフォルトスロットでmarkdownを使用します。

::component-code{slug="callout" prose}
---
props:
  class: 'w-full my-0'
hide:
  - class
slots:
  default: This is a `callout` with full **markdown** support.
---
::

### Icon

`icon`プロパティを使用して、コンテンツの横にアイコンを表示します。

::component-code{slug="callout" prose}
---
props:
  icon: i-lucide-square-play
  class: 'w-full my-0'
hide:
  - class
slots:
  default: This is a `callout` with an icon.
---
::

### Color

`color`プロパティを使用して、コールアウトの色を変更します。

::component-code{slug="callout" prose}
---
ignore:
  - icon
props:
  icon: i-lucide-info
  color: info
  class: 'w-full my-0'
hide:
  - class
slots:
  default: This is a `callout` with a custom color.
---
::

### Link

[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)コンポーネントの任意のプロパティ（`to`や`target`など）を渡して、コールアウトをリンクにすることができます。

::component-code{slug="callout" prose}
---
hide:
  - class
ignore:
  - icon
  - target
props:
  icon: i-lucide-square-play
  to: '/docs/getting-started/installation/nuxt'
  color: neutral
  class: 'w-full my-0'
slots:
  default: Learn how to install `@nuxt/ui` in your project.
---
::

## ショートカット

`note`、`tip`、`warning`、`caution`ショートカットを定義済みのアイコンと色で使用することもできます。

::code-preview

:::div{class="flex flex-col gap-4 w-full"}

::note{class="w-full my-0"}
ここに追加情報があります。
::

::tip{class="w-full my-0"}
ここに有用な提案がある。
::

::warning{class="w-full my-0"}
予期せぬ結果を招く可能性がありますので注意してください。
::

::caution{class="w-full my-0"}
この行動は取り消すことができない。
::

:::

#code

```mdc
::note
Here's some additional information.
::

::tip
Here's a helpful suggestion.
::

::warning
Be careful with this action as it might have unexpected results.
::

::caution
This action cannot be undone.
::
```

::

## API

### Props

:component-props{prose}

### スロット

:component-slots{prose}

## テーマ

:component-theme{prose}

## Changelog

:component-changelog{prefix="prose"}
