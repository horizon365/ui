---
description: '空の状態を表示するコンポーネント。'
category: data
keywords:
  - no data
  - placeholder
  - zero state
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Empty.vue
---

## 使用法

表示するコンテンツがない場合、[空]コンポーネントを使用してプレースホルダー状態を表示します。

::code-preview

:::u-empty
---
アイコンi—lucide—file
titleプロジェクトが見つかりません
説明プロジェクトを追加していないようです。作成して始めましょう。
アクション
  -  icon i—lucide—plus
    label新規作成
  - アイコンi—lucide—refresh—cw
    ラベルリフレッシュ
    色ニュートラル
    バリアント：微妙
---
:::

::

### タイトル

`title`プロパティを使用して、空の状態のタイトルを設定します。

::component-code
---
小道具
  titleプロジェクトが見つかりません
---
::

### 説明

`description`プロパティを使用して、空の状態の説明を設定します。

::component-code
---
きれい真
無視
  -  title
小道具
  titleプロジェクトが見つかりません
  説明プロジェクトを追加していないようです。作成して始めましょう。
---
::

### アイコン

`icon`プロパティを使用して、空の状態のアイコンを設定します。

::component-code
---
きれい真
無視
  -  title
  - 説明
小道具
  アイコンi—lucide—file
  titleプロジェクトが見つかりません
  説明プロジェクトを追加していないようです。作成して始めましょう。
---
::

### アバター

空の状態のアバターを設定するには、`avatar`プロパティを使用します。

::component-code
---
きれい真
無視
  - アイコン
  -  title
  - 説明
小道具
  avatar.src 'https//github.com/nuxt.png'
  titleプロジェクトが見つかりません
  説明プロジェクトを追加していないようです。作成して始めましょう。
---
::

### 読み込みbadge {label="4.10+" class="align-text-top"}

`loading`プロパティを使用して、アイコンの代わりにロードアイコンを表示します。レイアウトは同じであるため、レイアウトシフトなしにロード状態と空状態を切り替えることができます。

::component-code
---
きれい真
無視
  - アイコン
  -  title
  - 説明
小道具
  アイコンi—lucide—file
  読み込み真
  titleプロジェクトの読み込み
  説明：プロジェクトを取得するまでお待ちください。
---
::

###  Loading Icon badge {label="4.10+" class="align-text-top"}

読み込みアイコンをカスタマイズするには、`loading-icon`プロパティを使用します。デフォルトは`i-lucide-loader-circle`です。

::component-code
---
きれい真
無視
  - アイコン
  -  title
  - 説明
  - ローディング
小道具
  アイコンi—lucide—file
  読み込み真
  loadingIcon 'i—lucide—loader'
  titleプロジェクトの読み込み
  説明：プロジェクトを取得するまでお待ちください。
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは、`ui.icons.loading`キーの下の`app.config.ts`でグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは、`ui.icons.loading`キーの下の`vite.config.ts`でグローバルにカスタマイズできます。
:::
::

### アクション

`actions` propを使用して、空の状態に[ Button ](/docs/components/button)アクションを追加します。

::component-code
---
きれい真
無視
  - アイコン
  -  title
  - 説明
  - アクション
小道具
  アイコンi—lucide—file
  titleプロジェクトが見つかりません
  説明プロジェクトを追加していないようです。作成して始めましょう。
  アクション
    -  icon i—lucide—plus
      label新規作成
    -  icon i—lucide—refresh—cw
      ラベルリフレッシュ
      色ニュートラル
      バリアント：微妙
---
::

### バリアント

`variant`プロパティを使用して、空の状態のバリアントを変更します。

::component-code
---
きれい真
無視
  - アイコン
  -  title
  - 説明
  - アクション
小道具
  バリアント：裸
  アイコンi—lucide—bell
  title通知なし
  説明あなたはすべて巻き込まれました。新しい通知がここに表示されます。
  アクション
    - アイコンi—lucide—refresh—cw
      ラベルリフレッシュ
      色ニュートラル
      バリアント：微妙
---
::

### サイズ

`size`プロパティを使用して、空の状態のサイズを変更します。

::component-code
---
きれい真
無視
  - アイコン
  -  title
  - 説明
  - アクション
小道具
  サイズXL
  アイコンi—lucide—bell
  title通知なし
  説明あなたはすべて巻き込まれました。新しい通知がここに表示されます。
  アクション
    -  icon i—lucide—refresh—cw
      ラベルリフレッシュ
      色ニュートラル
      バリアント：微妙
---
::

## 例

### スロット付き

利用可能なスロットを使用して、より複雑な空状態を作成します。

::component-example
---
崩壊真
名前'empty—slots—example'
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
