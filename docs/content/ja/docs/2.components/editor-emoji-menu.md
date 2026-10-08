---
title: 編集者絵文字メニュー
description: "エディタで：文字を入力すると絵文字の候補が表示される絵文字ピッカーメニュー。"
category: editor
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorEmojiMenu.vue
---

## 使用法

EditorEmojiMenuコンポーネントは、エディタで`:`文字を入力すると、絵文字候補のメニューを表示し、選択した絵文字を挿入します。`@tiptap/extension-emoji`パッケージと一緒に動作し、絵文字サポートを提供します。

::note
TipTapの[ Suggestion ](https://tiptap.dev/docs/editor/api/utilities/suggestion))ユーティリティの上に構築された`useEditorMenu` composableを使用して、入力時に項目をフィルタリングし、キーボードナビゲーション（矢印キー、入力して選択、エスケープして閉じる）をサポートします。
::

::caution
エディタインスタンスにアクセスするには、[ Editor ](/docs/components/editor)コンポーネントのデフォルトスロット内で使用する必要があります。
::

::component-example
---
昇格：true
崩壊真
名前'editor—emoji—menu—example'
クラス'p—8'
---
::

::warning
`@tiptap/extension-emoji`パッケージはデフォルトではインストールされていませんので、別途インストールする必要があります。
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/nodes/emoji" target="_blank"}
絵文字拡張機能の詳細については、TipTapのドキュメントをご覧ください。
::

### アイテム

`items` propを、次のプロパティを持つオブジェクトの配列として使用します。

- `name: string`{lang="ts-type"}
- `emoji: string`{lang="ts-type"}
- `shortcodes?: string[]`{lang="ts-type"}
- `tags?: string[]`{lang="ts-type"}
- `group?: string`{lang="ts-type"}
- `fallbackImage?: string`{lang="ts-type"}

::component-example
---
昇格：真
崩壊真
名前'editor—emoji—menu—items—example'
クラス'p—8'
---
::

::note
`items`プロパティに配列の配列を渡して、項目の分離グループを作成することもできます。
::

###  Char

トリガー文字を変更するには、`char`プロパティを使用します。デフォルトは`:`{lang="ts-type"}です。

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorEmojiMenu :editor="editor" :items="items" char=";" />
  </UEditor>
</template>
```

### 提案：badge {label="4.7+" class="align-text-top"}

`suggestion` propを使用して、TipTapの[ Suggestion ](https://tiptap.dev/docs/editor/api/utilities/suggestion#settings)に一致する挙動をカスタマイズします。

これは、デフォルトの空白プレフィックスを必要とせず、トリガー文字が他の文字の直後に開く場合に便利です。

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorEmojiMenu
      :editor="editor"
      :items="items"
      :suggestion="{
        allowedPrefixes: null
      }"
    />
  </UEditor>
</template>
```

### オプション

`options` propを使用して、[ Floating UI options ](https://floating-ui.com/docs/computeposition#options)を使用して位置決めの動作をカスタマイズします。

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorEmojiMenu
      :editor="editor"
      :items="items"
      :options="{
        placement: 'bottom-start',
        offset: 4
      }"
    />
  </UEditor>
</template>
```

##  API

###  Props

component—props

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
