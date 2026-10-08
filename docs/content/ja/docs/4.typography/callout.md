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

`callout`コンポーネントのデフォルトスロットでmarkdownを使用して、コンテンツに目を引くコンテキストを追加します。

::component-code{slug="callout" prose}
---
小道具
  クラス'w—full my—0'
隠す
  - クラス
スロット
  デフォルトこれは`callout`で、** markdown **を完全にサポートしています。
---
::

### アイコン

`icon`プロパティを使用して、コンテンツの横にアイコンを表示します。

::component-code{slug="callout" prose}
---
小道具
  アイコンi—lucide square—play
  クラス'w—full my—0'
隠す
  - クラス
スロット
  defaultこれは`callout`にアイコン付きです。
---
::

### カラー

`color`プロパティを使用して、コールアウトの色を変更します。

::component-code{slug="callout" prose}
---
無視
  - アイコン
小道具
  アイコンi—lucide—info
  色info
  クラス'w—full my—0'
隠す
  - クラス
スロット
  defaultこれはカスタムカラーの`callout`です。
---
::

### リンク

[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)コンポーネントから任意のプロパティを渡して、コールアウトをリンクにすることができます。

::component-code{slug="callout" prose}
---
隠す
  - クラス
無視
  - アイコン
  - ターゲット
小道具
  アイコンi—lucide square—play
  '/docs/getting—started/installation/nuxt'
  色ニュートラル
  クラス'w—full my—0'
スロット
  defaultプロジェクトに`@nuxt/ui`をインストールする方法を学びます。
---
::

## ショートカット

また、`note`、`tip`、`warning`、および`caution`のショートカットを、定義済みのアイコンと色で使用することもできます。

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

#コード

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

##  API

###  Props

component—props {prose}

### スロット

component—slots {prose}

## テーマ

component—theme {prose}

##  Changelog

component—changelog {prefix="prose"}
