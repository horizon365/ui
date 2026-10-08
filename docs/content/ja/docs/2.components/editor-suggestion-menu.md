---
title: 編集者提案メニュー
description: エディタで/文字を入力すると、書式設定とアクションの提案を表示するコマンドメニュー。
category: editor
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorSuggestionMenu.vue
---

## 使用法

EditorSuggestionMenuコンポーネントは、エディタでトリガー文字を入力すると書式設定とアクション提案のメニューを表示し、項目が選択されると対応する[ handler ](/docs/components/editor#handlers)を実行します。

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
名前'editor—suggestion—menu—example'
クラス'p—8'
---
::

### アイテム

`items`プロパティを、次のプロパティを持つオブジェクトの配列として使用します。

- [`kind?: "textAlign" | "heading" | "link" | "image" | "blockquote" | "bulletList" | "orderedList" | "taskList" | "codeBlock" | "horizontalRule" | "paragraph" | "clearFormatting" | "duplicate" | "delete" | "moveUp" | "moveDown" | "suggestion" | "mention" | "emoji"`{lang="ts-type"}](/docs/components/editor#handlers)
- `label?: string`{lang="ts-type"}
- `description?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `type?: "label" | "separator"`{lang="ts-type"}
- `disabled?: boolean`{lang="ts-type"}

::component-example
---
昇格：true
崩壊真
名前'editor—suggestion—menu—items—example'
クラス'p—8'
---
::

::note
`items`プロパティに配列の配列を渡して、項目の分離グループを作成することもできます。
::

::tip
セクションヘッダーには`type: 'label'`を、視覚的な仕切りには`type: 'separator'`を使用して、コマンドを論理グループに整理して見つけやすくします。
::

###  Char

トリガー文字を変更するには、`char`プロパティを使用します。デフォルトは`/`{lang="ts-type"}です。

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorSuggestionMenu :editor="editor" :items="items" char=">" />
  </UEditor>
</template>
```

### 提案：badge {label="4.7+" class="align-text-top"}

`suggestion` propを使用して、TipTapの[ Suggestionと一致するビヘイビア](https://tiptap.dev/docs/editor/api/utilities/suggestion#settings)をカスタマイズします。

これは、デフォルトの空白プレフィックスを必要とせず、トリガー文字が他の文字の直後に開く場合に便利です。

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorSuggestionMenu
      :editor="editor"
      :items="items"
      char=":"
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
    <UEditorSuggestionMenu
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
