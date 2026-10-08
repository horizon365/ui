---
title: チャットメッセージ
description: 'アイコン、アバター、アクションでチャットメッセージを表示します。'
category: chat
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatMessage.vue
---

## 使用法

ChatMessageコンポーネントは、`user`または`assistant`チャットメッセージの`<article>`要素をレンダリングします。

::code-preview

::u-chat-message
---
パーツ
  - タイプ'text'
    ID '1'
    text 'こんにちは！Nuxt UIを使ったAIチャットボットの構築について詳しく教えてください。'
サイド'右'
バリアント'ソフト'
ロール'ユーザー'
ID '1'
アバター
  https//github.com/benjamincanac.png
  読み込み怠惰
---
::

::

::tip{to="/docs/components/chat-messages"}
`ChatMessages`コンポーネントを使用して、チャットメッセージのリストを表示します。
::

### パーツ

`parts`プロパティを使用して、AI SDK形式を使用してメッセージコンテンツを表示します。

::component-code
---
きれい真
無視
  - パーツ
  -  role
  -  id
小道具
  パーツ
    - タイプ'text'
      ID '1'
      text 'こんにちは！Nuxt UIを使ったAIチャットボットの構築について詳しく教えてください。'
  ロール'ユーザー'
  ID '1'
---
::

::note
`parts` propはAI SDKで推奨されるフォーマットです。各パートには`type`例'text'と対応するコンテンツがあります。ChatMessageコンポーネントは後方互換性のため、廃止予定の`content` propもサポートしています。
::

### サイド

`side`プロパティを使用して、メッセージを左または右に表示します。

::component-code
---
きれい真
無視
  - パーツ
  - ロール
  -  id
小道具
  サイド'右'
  パーツ
    - タイプ'text'
      ID '1'
      text 'こんにちは！Nuxt UIを使ったAIチャットボットの構築について詳しく教えてください。'
  ロール'ユーザー'
  ID '1'
---
::

::note
[`ChatMessages`](/docs/components/chat-messages)コンポーネントを使用する場合、`side` propは`assistant`メッセージの場合は`left`、`user`メッセージの場合は`right`に設定されます。
::

### バリアント

メッセージのスタイルを変更するには、`variant`プロパティを使用します。

::component-code
---
きれい真
無視
  - パーツ
  - ロール
  -  id
小道具
  バリアント'ソフト'
  パーツ
    - タイプ'text'
      ID '1'
      text 'こんにちは！Nuxt UIを使ったAIチャットボットの構築について詳しく教えてください。'
  ロール'ユーザー'
  ID '1'
---
::

::note
[`ChatMessages`](/docs/components/chat-messages)コンポーネントを使用する場合、`variant` propは`assistant`メッセージの場合は`naked`、`user`メッセージの場合は`soft`に設定されます。
::

### 色バッジ{label="4.8+" class="align-text-top"}

`color`プロパティを使用して、メッセージの色を変更します。

::component-code
---
きれい真
無視
  - パーツ
  - ロール
  -  id
小道具
  バリアント'ソフト'
  色'プライマリ'
  パーツ
    - タイプ'text'
      ID '1'
      text 'こんにちは！Nuxt UIを使ったAIチャットボットの構築について詳しく教えてください。'
  ロール'ユーザー'
  ID '1'
---
::

### アイコン

`icon` propを使用して、メッセージの横に[ Icon ](/docs/components/icon)コンポーネントを表示します。

::component-code
---
きれい真
無視
  - パーツ
  - サイド
  - バリアント
  - ロール
  -  id
小道具
  アイコンi—lucide—user
  バリアント'ソフト'
  サイド'右'
  パーツ
    - タイプ'text'
      ID '1'
      text 'こんにちは！Nuxt UIを使ったAIチャットボットの構築について詳しく教えてください。'
  ロール'ユーザー'
  ID '1'
---
::

### アバター

`avatar` propを使用して、メッセージの横に[ Avatar ](/docs/components/avatar)コンポーネントを表示します。

::component-code
---
きれい真
無視
  - パーツ
  - サイド
  - バリアント
  - ロール
  -  id
  -  avatar.loading
小道具
  アバター
    https//github.com/benjamincanac.png
    読み込み怠惰
  バリアント'ソフト'
  サイド'右'
  パーツ
    - タイプ'text'
      ID '1'
      text 'こんにちは！Nuxt UIを使ったAIチャットボットの構築について詳しく教えてください。'
  ロール'ユーザー'
  ID '1'
---
::

`avatar.icon` propを使用して、アイコンをアバターとして表示することもできます。

::component-code
---
きれい真
無視
  - パーツ
  - ロール
  -  ID
小道具
  アバター
    アイコンi—lucide—bot
  パーツ
    - タイプ'text'
      ID '1'
      テキスト「Nuxt UIには、ChatMessage、ChatMessages、ChatPromptコンポーネントなど、AIチャットボットを構築するためのいくつかの機能があります。ベストプラクティスには、AI SDKのChatクラスの使用、バリアントによる適切なメッセージスタイルの実装、メッセージインタラクションのための組み込みアクションの利用などがあります。コンポーネントは、テーマ設定のサポートとレスポンシブデザインで完全にカスタマイズ可能です。」
  役割'アシスタント'
  ID '1'
---
::

### アクション

`actions`プロパティを使用して、メッセージの上にカーソルを合わせたときに表示されるアクションをメッセージの下に表示します。

::component-code
---
きれい真
外部
  - アクション
externalTypes
  -  ButtonProps []
無視
  - パーツ
  - アクション
  - ロール
  -  id
小道具
  アクション
    -  label 'クリップボードにコピー'
      アイコンi—lucide—copy
  パーツ
    - タイプ'text'
      ID '1'
      テキスト「Nuxt UIには、ChatMessage、ChatMessages、ChatPromptコンポーネントなど、AIチャットボットを構築するためのいくつかの機能があります。ベストプラクティスには、AI SDKのChatクラスの使用、バリアントによる適切なメッセージスタイルの実装、メッセージインタラクションのための組み込みアクションの利用などがあります。コンポーネントは、テーマ設定のサポートとレスポンシブデザインで完全にカスタマイズ可能です。」
  ロール'ユーザー'
  ID '1'
---
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

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
