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

ChatPaletteコンポーネントは構造化されたレイアウトラッパーで、[ ChatMessages ](/docs/components/chat-messages)[ ChatPrompt ](/docs/components/chat-prompt)をスクロール可能なコンテンツエリアに整理し、モーダル、スライドオーバー、または引き出し用の一貫したチャットボットインターフェイスを作成します。

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
インストール手順、サーバー設定、使用例については、** Chat **概要ページをご覧ください。
::

### モード内

ChatPaletteコンポーネントは、[ Modal ](/docs/components/modal)のコンテンツ内で使用できます。

::component-example
---
崩壊真
iframe
  高さ500px；
iframeモバイルtrue
overflowHidden true
名前'chat—pallet—modal—example'
---
::

### コンテンツ内検索

[ ContentSearch ](/docs/components/content-search)のコンテンツ内でChatPaletteコンポーネントを条件付きで使用して、ユーザが項目を選択したときにチャットボットインターフェイスを表示できます。

::component-example
---
崩壊真
iframe
  高さ500px；
iframeモバイルtrue
overflowHidden true
名前'chat—pallet—content—search—example'
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
