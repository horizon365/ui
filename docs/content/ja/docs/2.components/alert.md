---
description: ユーザーの注意を引くためのコールアウト。
category: element
keywords:
  - notice
  - inline notification
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Alert.vue
---

## 使用法

### タイトル

`title`プロパティを使用して、アラートのタイトルを設定します。

::component-code
---
小道具
  タイトルは「Heads up！
---
::

### 説明

`description`プロパティを使用して、アラートの説明を設定します。

::component-code
---
きれい真
小道具
  タイトルは「Heads up！
  説明'アプリ設定で原色を変更できます。'
---
::

### アイコン

`icon` propを使用して、[ Icon ](/docs/components/icon)を表示します。

::component-code
---
きれい真
無視
  -  title
  - 説明
小道具
  タイトルは「Heads up！
  説明'アプリ設定で原色を変更できます。'
  アイコン'i—lucide—terminal'
---
::

### アバター

`avatar` propを使用して、[ Avatar ](/docs/components/avatar)を表示します。

::component-code
---
きれい真
無視
  -  title
  - 説明
小道具
  タイトルは「Heads up！
  説明'アプリ設定で原色を変更できます。'
  avatar.src 'https//github.com/nuxt.png'
---
::

### カラー

`color`プロパティを使用して、アラートの色を変更します。

::component-code
---
きれい真
無視
  -  title
  - 説明
  - アイコン
小道具
  色ニュートラル
  タイトルは「Heads up！
  説明'アプリ設定で原色を変更できます。'
  アイコン'i—lucide—terminal'
---
::

### バリアント

`variant`プロパティを使用して、Alertのバリアントを変更します。

::component-code
---
きれい真
無視
  -  title
  - 説明
  - アイコン
小道具
  色ニュートラル
  バリアント：微妙
  タイトルは「Heads up！
  説明'アプリ設定で原色を変更できます。'
  アイコン'i—lucide—terminal'
---
::

### 閉じる

`close` propを使用して、[ Button ](/docs/components/button)を表示してアラートを却下します。

::tip
閉じるボタンをクリックすると`update:open`イベントが発生します。
::

::component-code
---
きれい真
無視
  -  title
  - 説明
  - 閉じる
  - カラー
  - バリアント
小道具
  タイトルは「Heads up！
  説明'アプリ設定で原色を変更できます。'
  色ニュートラル
  variantアウトライン
  閉じるtrue
---
::

[ Button ](/docs/components/button)コンポーネントから任意のプロパティを渡してカスタマイズできます。

::component-code
---
きれい真
無視
  -  title
  - 説明
  -  close.color
  -  close.variant
  - カラー
  - バリアント
小道具
  タイトルは「Heads up！
  説明'アプリ設定で原色を変更できます。'
  色ニュートラル
  variantアウトライン
  閉じる
    色プライマリ
    variantアウトライン
    クラス：'rounded—full'
---
::

### 閉じるアイコン

`close-icon`プロパティを使用して、閉じるボタン[ Icon ](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-x`です。

::component-code
---
きれい真
無視
  -  title
  - 説明
  - 閉じる
  - カラー
  - バリアント
小道具
  タイトルは「Heads up！
  説明'アプリ設定で原色を変更できます。'
  色ニュートラル
  variantアウトライン
  閉じるtrue
  closeIcon 'i—lucide—arrow—right'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは、`ui.icons.close`キーの下の`app.config.ts`でグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは、`ui.icons.close`キーの`vite.config.ts`でグローバルにカスタマイズできます。
:::
::

### アクション

`actions` propを使用して、[ Button ](/docs/components/button)アクションをアラートに追加します。

::component-code
---
きれい真
無視
  -  title
  - アクション
  - カラー
  - バリアント
小道具
  タイトルは「Heads up！
  説明'アプリ設定で原色を変更できます。'
  色ニュートラル
  variantアウトライン
  アクション
    -  labelアクション1
    -  labelアクション2
      色ニュートラル
      バリアント：微妙
---
::

### オリエンテーション

`orientation`プロパティを使用して、アラートの向きを変更します。

::component-code
---
きれい真
無視
  -  title
  - アクション
  - カラー
  - バリアント
小道具
  タイトルは「Heads up！
  説明'アプリ設定で原色を変更できます。'
  色ニュートラル
  variantアウトライン
  オリエンテーション水平
  アクション
    -  labelアクション1
    -  labelアクション2
      色ニュートラル
      バリアント：微妙
---
::

## 例

### `class` prop

`class`プロパティを使用して、Alertの基本スタイルを上書きします。

::component-code
---
きれい真
無視
  -  title
  - 説明
小道具
  タイトルは「Heads up！
  説明'アプリ設定で原色を変更できます。'
  クラス'rounded—none'
---
::

### `ui` prop

`ui`プロパティを使用して、Alertのスロットスタイルを上書きします。

::component-code
---
きれい真
無視
  -  ui
  -  title
  - 説明
  - アイコン
小道具
  タイトルは「Heads up！
  説明'アプリ設定で原色を変更できます。'
  アイコンi—lucideロケット
  UI
    アイコン'サイズ—11'
---
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
