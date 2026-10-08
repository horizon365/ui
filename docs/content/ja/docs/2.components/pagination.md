---
description: ページをナビゲートするためのボタンまたはリンクのリスト。
category: navigation
keywords:
  - pager
  - page navigation
links:
  - label: ペジネーション
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/pagination
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Pagination.vue
---

## 使用法

現在のページを制御するには、`default-page` propまたは`v-model:page`ディレクティブを使用します。

::component-code
---
外部
  - ページ
モデル
  - ページ
無視
  - ページ
  - 合計
小道具
  ページ数5
  合計100
---
::

::note
ページネーションコンポーネントは、ページを表示するために[`Button`](/docs/components/button)を使用します。[`color`](#color)を使用します。[`variant`](#variant)[`size`](#size) propsをスタイリングします。
::

### 合計

`total`プロパティを使用して、リスト内の項目の合計数を設定します。

::component-code
---
外部
  - ページ
モデル
  - ページ
小道具
  ページ数5
  合計100
---
::

### ページごとのアイテム

`items-per-page`プロパティを使用して、ページごとのアイテム数を設定します。デフォルトは`10`です。

::component-code
---
無視
  - ページ
外部
  - ページ
モデル
  - ページ
小道具
  ページ数5
  アイテム1ページあたり20
  合計100
---
::

### 兄弟数

`sibling-count`プロパティを使用して、表示する兄弟の数を設定します。デフォルトは`2`です。

::component-code
---
無視
  - ページ
  - 合計
外部
  - ページ
モデル
  - ページ
小道具
  ページ数5
  siblingCount 1
  合計100
---
::

###  Showエッジ

`show-edges`プロパティを使用して、省略記号、最初と最後のページを常に表示します。デフォルトは`false`です。

::component-code
---
無視
  - ページ
  - 合計
外部
  - ページ
モデル
  - ページ
小道具
  ページ数5
  showEdges true
  siblingCount 1
  合計100
---
::

### コントロールを表示

`show-controls`プロパティを使用して、最初、前、次、最後のボタンを表示します。デフォルトは`true`です。

::component-code
---
無視
  - ページ
  - 合計
外部
  - ページ
モデル
  - ページ
小道具
  ページ数5
  showControls false
  showEdges true
  合計100
---
::

### カラー

`color`プロパティを使用して、非アクティブなコントロールの色を設定します。デフォルトは`neutral`です。

::component-code
---
無視
  - ページ
  - 合計
外部
  - ページ
モデル
  - ページ
アイテム
  色
    - プライマリ
    - セカンダリ
    - 成功
    -  info
    -  warning
    - エラー
    - ニュートラル
小道具
  ページ数5
  色プライマリ
  合計100
---
::

### バリアント

`variant`プロパティを使用して、非アクティブなコントロールのバリアントを設定します。デフォルトは`outline`です。

::component-code
---
無視
  - ページ
  - 合計
外部
  - ページ
モデル
  - ページ
アイテム
  色
    - プライマリ
    - セカンダリ
    - 成功
    -  info
    -  warning
    - エラー
    - ニュートラル
  バリアント
    - ソリッド
    - アウトライン
    - ソフト
    - 微妙
    - ゴースト
    -  link
小道具
  ページ数5
  色ニュートラル
  バリアント：微妙
  合計100
---
::

### アクティブカラー

`active-color`プロパティを使用して、アクティブなコントロールの色を設定します。デフォルトは`primary`です。

::component-code
---
無視
  - ページ
  - 合計
外部
  - ページ
モデル
  - ページ
アイテム
  activeColor
    - プライマリ
    - セカンダリ
    - 成功
    -  info
    -  warning
    - エラー
    - ニュートラル
小道具
  ページ数5
  activeColorニュートラル
  合計100
---
::

###  Active Variant

アクティブコントロールのバリアントを設定するには、`active-variant`プロパティを使用します。デフォルトは`solid`です。

::component-code
---
無視
  - ページ
  - 合計
外部
  - ページ
モデル
  - ページ
アイテム
  activeColor
    - プライマリ
    - セカンダリ
    - 成功
    -  info
    -  warning
    - エラー
    - ニュートラル
  activeVariant
    - ソリッド
    - アウトライン
    - ソフト
    - 微妙
    - ゴースト
    -  link
小道具
  ページ数5
  activeColorプライマリ
  activeVariant：微妙
  合計100
---
::

### サイズ

コントロールのサイズを設定するには`size`プロパティを使用します。デフォルトは`md`です。

::component-code
---
無視
  - ページ
  - 合計
外部
  - ページ
モデル
  - ページ
アイテム
  サイズ
    お問い合わせ_P133
    -  sm
    -  md
    -  lg
    -  xl
小道具
  ページ数5
  サイズXL
  合計100
---
::

### 無効

`disabled`プロパティを使用して、ページネーションコントロールを無効にします。

::component-code
---
無視
  - ページ
  - 合計
外部
  - ページ
モデル
  - ページ
小道具
  ページ数5
  合計100
  無効true
---
::

## 例

### リンク付き

ボタンをリンクに変換するには、`to` propを使用します。ページ番号を受け取り、ルート先を返す関数を渡します。

::component-example
---
名前'pagination—links—example'
---
::

::note
この例では、`#with-links`ハッシュを追加して、ページの先頭に移動しないようにしています。
::

##  API

###  Props

component—props

### スロット

コンポーネントスロット

### エミッツ

component—emits

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
