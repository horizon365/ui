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

ChatPromptコンポーネントは`<form>`要素をレンダリングし、[Textarea](/docs/components/textarea)コンポーネントを拡張するため、`icon`、`placeholder`、`autofocus`などのプロパティを渡すことができます。

::component-example
---
collapse: true
name: 'chat-prompt-example'
---
::

::note
ChatPromptは以下のイベントを処理します。

- フォームは、ユーザがkbd{value="enter"}を押したとき、またはユーザが送信ボタンをクリックしたときに送信されます。代わりにkbd{value="ctrl"} + kbd{value="enter"}またはmacOSではkbd{value="cmd"} + kbd{value="enter"}で送信するには`submit-on-enter`プロパティを`false`に設定します。kbd{value="enter"}に改行を挿入できます。
-  kbd{value="escape"}が押されて`close`イベントが発生すると、テキストエリアがぼやけます。
::

### Variant

`variant`プロパティを使用してプロンプトのスタイルを変更します。デフォルトは`outline`です。

::component-code
---
hide:
  - autofocus
props:
  variant: 'soft'
  autofocus: false
---
::

## サンプル

::tip{to="/docs/components/chat"}
インストール手順、サーバーのセットアップ、使用例については、**Chat**の概要ページをご覧ください。
::

### エディタ付き：badge{label="4.10+" class="align-text-top"}

`#header`、`#body`、`#footer`スロットを作成して、リッチなプロンプトを作成します。ファイル添付ファイル、[Editor](/docs/components/editor)、[EditorMentionMenu](/docs/components/editor-mention-menu)を介した`/`コマンド、およびモードセレクタです。

::component-example
---
collapse: true
name: 'chat-prompt-editor-example'
class: 'justify-center'
---
::

::note
`#body`スロットは内部のテキストエリアを置き換え、`submit`と`close`ハンドラを公開します。これにより、エディタのキーボードショートカットをフォームに接続できます。メンションメニューが開いているとき、kbd{value="enter"}を押すと、送信の代わりにハイライトされた項目が選択されます。
::

### Asホームページ

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

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attributes" target="_blank"}
このコンポーネントはすべてのネイティブ`<textarea>` HTML属性もサポートします。
::

### スロット

:component-slots

### Emits

:component-emits

### Expose

テンプレート参照を介してコンポーネントにアクセスする場合、以下を使用できます：

| 名前|タイプ|
| ---- | ---- |
| `textareaRef`{lang="ts-type"}| `Ref<HTMLTextAreaElement \| null>`{lang="ts-type"}|

## Theme

:component-theme

## Changelog

:component-changelog
