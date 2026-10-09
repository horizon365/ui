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
collapse: true
prettier: true
name: 'chat-reasoning-example'
class: 'h-[252px]'
---
::

::note{to="/docs/composables/use-scroll-shadow"}
ボディコンテンツは`useScrollShadow`コンポーザーを使用してオーバーフロー時にフェードシャドウを適用します。
::

### Text

`text`プロパティを使用して推論内容を設定します。テキストは折りたたみ可能なボディ内に表示されます。

::component-code
---
prettier: true
hide:
  - class
props:
  text: 'The user is asking about Vue components...'
  class: 'w-60'
---
::

### ストリーミング

`streaming`プロパティを使用してアクティブな推論を示します。コンポーネントはストリーミング開始時に自動的に開き、終了時に自動的に閉じます。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
props:
  streaming: true
  text: 'The user is asking about Vue components...'
  class: 'w-60'
---
::

::tip
`@nuxt/ui/utils/ai`の`isPartStreaming`ユーティリティを使用して、部品が現在ストリーミング中かどうかを判断します。
::

### シマー

ストリーミング時、トリガーラベルは[`ChatShimmer`](/docs/components/chat-shimmer)コンポーネントを使用します。`shimmer`プロパティを使用して`duration`と`spread`をカスタマイズします。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
props:
  streaming: true
  text: 'The user is asking about Vue components...'
  shimmer:
    duration: 2
    spread: 2
  class: 'w-60'
---
::

### Icon

`icon`プロパティを使用して、[Icon](/docs/components/icon)コンポーネントをトリガーの横に表示します。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
props:
  icon: i-lucide-brain
  text: 'The user is asking about Vue components...'
  class: 'w-60'
---
::

### Chevron

chevronアイコンの位置を変更するには、`chevron`プロパティを使用します。

::note
`chevron`が`icon`で`leading`に設定されている場合、アイコンはホバーと開いたときにシェブロンと切り替わります。
::

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
props:
  chevron: leading
  icon: i-lucide-brain
  text: 'The user is asking about Vue components...'
  class: 'w-60'
---
::

### Chevronアイコン

`chevron-icon`プロパティを使用して、シェブロン[Icon](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-chevron-down`です。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
props:
  chevronIcon: 'i-lucide-arrow-down'
  text: 'The user is asking about Vue components...'
  class: 'w-60'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは`app.config.ts`の`ui.icons.chevronDown`キーでグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは`vite.config.ts`の`ui.icons.chevronDown`キーでグローバルにカスタマイズできます。
:::
::

## 例

::tip{to="/docs/components/chat"}
インストール手順、サーバーのセットアップ、使用例については、**Chat**の概要ページをご覧ください。
::

## API

### Props

:component-props

### スロット

:component-slots

### Emits

:component-emits

## Theme

:component-theme

## Changelog

:component-changelog
