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

ChatMessageコンポーネントは、`user`または`assistant`チャットメッセージ用の`<article>`要素をレンダリングします。

::code-preview

::u-chat-message
---
parts:
  - type: 'text'
    id: '1'
    text: 'Hello! Tell me more about building AI chatbots with Nuxt UI.'
side: 'right'
variant: 'soft'
role: 'user'
id: '1'
avatar:
  src: 'https://github.com/benjamincanac.png'
  loading: lazy
---
::

::

::tip{to="/docs/components/chat-messages"}
`ChatMessages`コンポーネントを使用して、チャットメッセージのリストを表示します。
::

### Parts

`parts`プロパティを使用して、AI SDK形式を使用してメッセージコンテンツを表示します。

::component-code
---
prettier: true
ignore:
  - parts
  - role
  - id
props:
  parts:
    - type: 'text'
      id: '1'
      text: 'Hello! Tell me more about building AI chatbots with Nuxt UI.'
  role: 'user'
  id: '1'
---
::

::note
`parts`プロパティは、AI SDKの推奨フォーマットです。各パートは`type`例'text'と対応するコンテンツを持っています。ChatMessageコンポーネントは、後方互換性のため、非推奨の`content`プロパティもサポートしています。
::

### Side

`side`プロパティを使用して、メッセージを左右に表示します。

::component-code
---
prettier: true
ignore:
  - parts
  - role
  - id
props:
  side: 'right'
  parts:
    - type: 'text'
      id: '1'
      text: 'Hello! Tell me more about building AI chatbots with Nuxt UI.'
  role: 'user'
  id: '1'
---
::

::note
[`ChatMessages`](/docs/components/chat-messages)コンポーネントを使用する場合、`side`プロパティは`assistant`メッセージに対して`left`、`user`メッセージに対して`right`に設定されます。
::

### Variant

メッセージのスタイルを変更するには`variant`プロパティを使用します。

::component-code
---
prettier: true
ignore:
  - parts
  - role
  - id
props:
  variant: 'soft'
  parts:
    - type: 'text'
      id: '1'
      text: 'Hello! Tell me more about building AI chatbots with Nuxt UI.'
  role: 'user'
  id: '1'
---
::

::note
[`ChatMessages`](/docs/components/chat-messages)コンポーネントを使用する場合、`variant`プロパティは`assistant`メッセージに対して`naked`、`user`メッセージに対して`soft`に設定されます。
::

### Color badge{label="4.8+" class="align-text-top"}

`color`プロパティを使用してメッセージの色を変更します。

::component-code
---
prettier: true
ignore:
  - parts
  - role
  - id
props:
  variant: 'soft'
  color: 'primary'
  parts:
    - type: 'text'
      id: '1'
      text: 'Hello! Tell me more about building AI chatbots with Nuxt UI.'
  role: 'user'
  id: '1'
---
::

### Icon

`icon`プロパティを使用して、メッセージの横に[Icon](/docs/components/icon)コンポーネントを表示します。

::component-code
---
prettier: true
ignore:
  - parts
  - side
  - variant
  - role
  - id
props:
  icon: i-lucide-user
  variant: 'soft'
  side: 'right'
  parts:
    - type: 'text'
      id: '1'
      text: 'Hello! Tell me more about building AI chatbots with Nuxt UI.'
  role: 'user'
  id: '1'
---
::

### アバター

`avatar`プロパティを使用して、メッセージの横に[Avatar](/docs/components/avatar)コンポーネントを表示します。

::component-code
---
prettier: true
ignore:
  - parts
  - side
  - variant
  - role
  - id
  - avatar.loading
props:
  avatar:
    src: 'https://github.com/benjamincanac.png'
    loading: lazy
  variant: 'soft'
  side: 'right'
  parts:
    - type: 'text'
      id: '1'
      text: 'Hello! Tell me more about building AI chatbots with Nuxt UI.'
  role: 'user'
  id: '1'
---
::

`avatar.icon`プロパティを使用してアイコンをアバターとして表示することもできます。

::component-code
---
prettier: true
ignore:
  - parts
  - role
  - id
props:
  avatar:
    icon: i-lucide-bot
  parts:
    - type: 'text'
      id: '1'
      text: 'Nuxt UI offers several features for building AI chatbots including the ChatMessage, ChatMessages, and ChatPrompt components. Best practices include using the Chat class from AI SDK, implementing proper message styling with variants, and utilizing the built-in actions for message interactions. The components are fully customizable with theming support and responsive design.'
  role: 'assistant'
  id: '1'
---
::

### Actions

`actions`プロパティを使用して、メッセージの上にマウスオーバーしたときに表示されるアクションをメッセージの下に表示します。

::component-code
---
prettier: true
external:
  - actions
externalTypes:
  - ButtonProps[]
ignore:
  - parts
  - actions
  - role
  - id
props:
  actions:
    - label: 'Copy to clipboard'
      icon: i-lucide-copy
  parts:
    - type: 'text'
      id: '1'
      text: 'Nuxt UI offers several features for building AI chatbots including the ChatMessage, ChatMessages, and ChatPrompt components. Best practices include using the Chat class from AI SDK, implementing proper message styling with variants, and utilizing the built-in actions for message interactions. The components are fully customizable with theming support and responsive design.'
  role: 'user'
  id: '1'
---
::

## サンプル

::tip{to="/docs/components/chat"}
インストール手順、サーバーのセットアップ、使用例については、**Chat**の概要ページをご覧ください。
::

## API

### Props

:component-props

### スロット

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
