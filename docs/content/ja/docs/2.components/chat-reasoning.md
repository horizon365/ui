---
title: チャット推論
description: 折りたたみ式のAI推論や思考プロセスを表示します。
category: chat
links:
  - label: 折りたたみ式
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/collapsible
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatReasoning.vue
---

## 使用法

ChatReasoningコンポーネントは、AIの推論や思考コンテンツを表示する折りたたみ可能なブロックをレンダリングします。ストリーミング中は自動開き、ストリーミング後は自動閉じます。

::component-example
---
崩壊真
きれい真
名前'チャット推論例'
クラス'h—[252px]'
---
::

::note{to="/docs/composables/use-scroll-shadow"}
本文コンテンツは`useScrollShadow`コンポーザブルを使用して、オーバーフロー時にフェードシャドウを適用します。
::

### テキスト

`text`プロパティを使用して推論内容を設定します。テキストは折りたたみ可能な本文の中に表示されます。

::component-code
---
きれい真
隠す
  - クラス
小道具
  text：'ユーザーはVueコンポーネントについて尋ねています...'
  クラス'w—60'
---
::

### ストリーミング

アクティブな推論を示すには`streaming`プロパティを使用します。コンポーネントはストリーミング開始時に自動的に開き、終了時に自動的に閉じます。

::component-code
---
きれい真
隠す
  - クラス
無視
  - テキスト
小道具
  ストリーミングtrue
  text：'ユーザーがVueコンポーネントについて尋ねています...'
  クラス'w—60'
---
::

::tip
`@nuxt/ui/utils/ai`の`isPartStreaming`ユーティリティを使用して、部品が現在ストリーミングされているかどうかを判断します。
::

###  Shimmer

ストリーミング時、トリガーラベルは[`ChatShimmer`](/docs/components/chat-shimmer)コンポーネントを使用します。`shimmer` propを使用して、`duration`と`spread`をカスタマイズします。

::component-code
---
きれい真
隠す
  - クラス
無視
  - テキスト
小道具
  ストリーミングtrue
  text：'ユーザーはVueコンポーネントについて尋ねています...'
  シマー
    期間2
    スプレッド2
  クラス'w—60'
---
::

### アイコン

`icon` propを使用して、[ Icon ](/docs/components/icon)コンポーネントをトリガーの横に表示します。

::component-code
---
きれい真
隠す
  - クラス
無視
  - テキスト
小道具
  アイコンi—lucide—brain
  text：'ユーザーがVueコンポーネントについて尋ねています...'
  クラス'w—60'
---
::

### シェブロン

`chevron` propを使用して、シェブロンアイコンの位置を変更します。

::note
`chevron`が`icon`で`leading`に設定されている場合、アイコンはホバー時と開いたときにシェブロンと入れ替わります。
::

::component-code
---
きれい真
隠す
  - クラス
無視
  - テキスト
小道具
  シェブロン：リーディング
  アイコンi—lucide—brain
  text：'ユーザーがVueコンポーネントについて尋ねています...'
  クラス'w—60'
---
::

### シェブロンアイコン

`chevron-icon` propを使用して、chevron [ Icon ](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-chevron-down`です。

::component-code
---
きれい真
隠す
  - クラス
無視
  - テキスト
小道具
  chevronIcon 'i—lucide—arrow—down'
  text：'ユーザーがVueコンポーネントについて尋ねています...'
  クラス'w—60'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは、`ui.icons.chevronDown`キーの下の`app.config.ts`でグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは、`ui.icons.chevronDown`キーの下の`vite.config.ts`でグローバルにカスタマイズできます。
:::
::

## 例

::tip{to="/docs/components/chat"}
インストール手順、サーバー設定、使用例については、** Chat **概要ページをご覧ください。
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
