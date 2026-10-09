---
title: チャットパレット
description: 'オーバーレイ内にチャットボットインターフェイスを作成するためのチャットパレット。'
category: chat
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatPalette.vue
---

## 使用法

ChatPaletteコンポーネントは構造化されたレイアウトラッパーで、[ChatMessages](/docs/components/chat-messagesxph04 xをスクロール可能なコンテンツエリアに、[ChatPrompt](/docs/components/chat-promptxph08 xを固定下部セクションに整理し、モーダル、スライドオーバー、ドロワー用の一貫したチャットボットインターフェイスを作成します。

```vue{2,8}
<template>
  <UChatPalette>
    <UChatMessages />

    <template #prompt>
      <UChatPrompt />
    </template>
  </UChatPalette>
</template>
```

## 例

::tip{to="/docs/components/chat"}
インストール手順、サーバーのセットアップ、使用例については、**Chat**の概要ページをご覧ください。
::

### モード内

ChatPaletteコンポーネントは、[Modal](/docs/components/modal)のコンテンツ内で使用できます。

::component-example
---
collapse: true
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'chat-palette-modal-example'
---
::

### コンテンツ内検索

[ContentSearch](/docs/components/content-search)のコンテンツ内のChatPaletteコンポーネントを条件付きで使用して、ユーザが項目を選択したときにチャットボットインターフェイスを表示できます。

::component-example
---
collapse: true
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'chat-palette-content-search-example'
---
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
