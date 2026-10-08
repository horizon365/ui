---
title: ProseFieldGroup
description: '関連フィールドをグループ化し、包括的なAPIドキュメントを作成。'
category: components
navigation.title: FieldGroup
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/FieldGroup.vue
---

## 使用法

フィールドをリストにまとめます。

:::code-preview

::field-group{class="my-0"}

  ::field{name="analytics" type="boolean"}
  デフォルトは`false`です。プロジェクトの分析を有効にします（近日公開予定）。
  ::

  ::field{name="blob" type="boolean"}
  デフォルトは`false`です。画像、動画などの静的アセットを保存するBlobストレージを有効にします。
  ::

  ::field{name="cache" type="boolean"}
  デフォルトは`false`です。Nitroの`cachedEventHandler`および`cachedFunction`を使用して、サーバールートの応答または関数をキャッシュするキャッシュストレージを有効にします。
  ::

  ::field{name="database" type="boolean"}
  デフォルトは`false`です。SQLデータベースにアプリケーションのデータを保存できるようにします。
  ::

::

#コード

```mdc
::field-group
  ::field{name="analytics" type="boolean"}
    Defaults to `false`. Enables analytics for your project (coming soon).
  ::

  ::field{name="blob" type="boolean"}
    Defaults to `false`. Enables blob storage to store static assets, such as images, videos and more.
  ::

  ::field{name="cache" type="boolean"}
    Defaults to `false`. Enables cache storage to cache your server route responses or functions using Nitro's `cachedEventHandler` and `cachedFunction`.
  ::

  ::field{name="database" type="boolean"}
    Defaults to `false`. Enables SQL database to store your application's data.
  ::
::
```

:::

##  API

###  Props

component—props {prose}

### スロット

component—slots {prose}

## テーマ

component—theme {prose}

##  Changelog

component—changelog {prefix="prose"}
