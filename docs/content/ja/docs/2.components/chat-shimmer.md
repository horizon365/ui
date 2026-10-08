---
title: ChatShimmer
description: テキストシマーアニメーション効果を表示します。
category: chat
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatShimmer.vue
---

## 使用法

ChatShimmerコンポーネントは、チャットインターフェイスでストリーミングまたはロード状態を示すために一般的に使用される、テキスト上にアニメーションの輝くグラデーションで要素をレンダリングします。

::note
このコンポーネントは、ストリーミング時に[`ChatTool`](/docs/components/chat-tool)および[`ChatReasoning`](/docs/components/chat-reasoning)コンポーネントによって自動的に使用されます。
::

::tip
アニメーションは、ユーザーが縮小された動きを好む場合に自動的に無効になり、テキストは代わりに静的なミュートテキストとして表示されます。
::

### テキスト

`text`プロパティを使用して、shimmerテキストを設定します。

::component-code
---
小道具
  テキスト：「思考...」
---
::

### 期間

`duration`プロパティを使用して、アニメーションの速度を秒単位で制御します。

::component-code
---
小道具
  テキスト：「思考...」
  期間4
---
::

### スプレッド

`spread`プロパティを使用して、シマーハイライトの幅を制御します。実際のスプレッドは`text.length * spread`としてピクセル単位で計算されます。

::component-code
---
小道具
  テキスト：「思考...」
  広がり5
---
::

## 例

::tip{to="/docs/components/chat"}
インストール手順、サーバー設定、使用例については、** Chat **概要ページをご覧ください。
::

##  API

###  Props

component—props

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
