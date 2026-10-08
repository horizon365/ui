---
title: チャットプロンプト
description: 'AIチャットインターフェイスでプロンプトを送信するための拡張されたTextarea。'
category: chat
links:
  - label: テクスタレア
    to: /docs/components/textarea
    icon: i-simple-icons-nuxtdotjs
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatPrompt.vue
---

## 使用法

ChatPromptコンポーネントは`<form>`要素をレンダリングし、[ Textarea ](/docs/components/textarea)コンポーネントを拡張します。これにより、`icon`、`placeholder`、`autofocus`などのプロパティを渡すことができます。

::component-example
---
崩壊真
名前'チャットプロンプト例'
---
::

::note
ChatPromptは以下のイベントを処理します。

- フォームは、ユーザーがkbd {value="enter"}を押したとき、またはユーザーが送信ボタンをクリックしたときに送信されます。代わりにkbd {value="ctrl"}+ kbd {value="enter"} macOSではkbd {value="cmd"}+ kbd {value="enter"}で送信する場合は、{value="enter"}に改行を挿入できます。
-  textareaは、kbd {value="escape"}が押されて`close`イベントが発生するとぼやけます。
::

### バリアント

プロンプトのスタイルを変更するには、`variant`プロパティを使用します。デフォルトは`outline`です。

::component-code
---
隠す
  - オートフォーカス
小道具
  バリアント'ソフト'
  オートフォーカスfalse
---
::

## 例

::tip{to="/docs/components/chat"}
インストール手順、サーバー設定、使用例については、** Chat **概要ページをご覧ください。
::

### エディタを使用して：badge {label="4.10+" class="align-text-top"}

リッチプロンプトを作成するには、`#header`、`#body`、および`#footer`スロットを作成します。ファイル添付ファイル、[ Editor ](/docs/components/editor)`@`メンションと`/`コマンド[ EditorMentionMenu ](/docs/components/editor-mention-menu)モードセレクタです

::component-example
---
崩壊真
名前'chat—prompt—editor—example'
class 'justify—center'
---
::

::note
`#body`スロットは内部のテキストエリアを置き換え、`submit`と`close`ハンドラを公開します。これにより、エディタのキーボードショートカットをフォームに接続できます。メンションメニューが開いているとき、kbd {value="enter"}を押すと、送信の代わりにハイライトされた項目が選択されます。
::

### ホームページとして

チャットインターフェイスのホームページでも使用できます。

```vue [pages/index.vue] {2,4,8-15,24,26}
<script setup lang="ts">
import { useChat } from '@ai-sdk/vue'

const input = ref('')

const { messages, status, sendMessage } = useChat()

async function onSubmit() {
  sendMessage({ text: input.value })

  // Navigate to chat page after first message
  if (messages.value.length === 1) {
    await navigateTo('/chat')
  }
}
</script>

<template>
  <UDashboardPanel>
    <template #body>
      <UContainer>
        <h1>How can I help you today?</h1>

        <UChatPrompt v-model="input" @submit="onSubmit">
          <UChatPromptSubmit :status="status" />
        </UChatPrompt>
      </UContainer>
    </template>
  </UDashboardPanel>
</template>
```

##  API

###  Props

component—props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attributes" target="_blank"}
このコンポーネントは、すべてのネイティブ`<textarea>` HTML属性もサポートします。
::

### スロット

コンポーネントスロット

### エミッツ

component—emits

### エクスポーズ

テンプレート参照を介してコンポーネントにアクセスする場合、以下を使用できます：

| 名前|タイプ|
| ---- | ---- |
| `textareaRef`{lang="ts-type"}| `Ref<HTMLTextAreaElement \| null>`{lang="ts-type"}|

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
