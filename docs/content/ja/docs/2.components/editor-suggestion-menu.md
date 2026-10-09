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

EditorSuggestionMenuコンポーネントは、エディターでトリガー文字を入力すると書式設定とアクション提案のメニューを表示し、項目が選択されると対応する[handler](xph03x)を実行します。

::note
TipTapの[ Suggestion](https://tiptap.dev/docs/editor/api/utilities/suggestion)ユーティリティ上に構築された`useEditorMenu`コンポーザブルを使用して、入力時に項目をフィルタリングし、キーボードナビゲーション（矢印キー、Enterから選択、エスケープから閉じる）をサポートします。
::

::caution
エディタインスタンスにアクセスするには、[Editor](/docs/components/editor)コンポーネントのデフォルトスロット内で使用する必要があります。
::

::component-example
---
elevated: true
collapse: true
name: 'editor-suggestion-menu-example'
class: 'p-8'
---
::

### アイテム

`items`プロパティを次のプロパティを持つオブジェクトの配列として使用します。

- [`kind?: "textAlign" | "heading" | "link" | "image" | "blockquote" | "bulletList" | "orderedList" | "taskList" | "codeBlock" | "horizontalRule" | "paragraph" | "clearFormatting" | "duplicate" | "delete" | "moveUp" | "moveDown" | "suggestion" | "mention" | "emoji"`{lang="ts-type"}](/docs/components/editor#handlers)
- `label?: string`{lang="ts-type"}
- `description?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `type?: "label" | "separator"`{lang="ts-type"}
- `disabled?: boolean`{lang="ts-type"}

::component-example
---
elevated: true
collapse: true
name: 'editor-suggestion-menu-items-example'
class: 'p-8'
---
::

::note
`items`プロパティに配列の配列を渡して、項目の分離グループを作成することもできます。
::

::tip
セクションヘッダーには`type: 'label'`、ビジュアルディバイダーには`type: 'separator'`を使用して、コマンドを論理グループに整理します。
::

### Char

トリガー文字を変更するには、`char`プロパティを使用します。デフォルトは`/`{lang="ts-type"}です。

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorSuggestionMenu :editor="editor" :items="items" char=">" />
  </UEditor>
</template>
```

### 提案badge{label="4.7+" class="align-text-top"}

`suggestion`プロパティを使用して、TipTapの[ Suggestionマッチング動作](https://tiptap.dev/docs/editor/api/utilities/suggestion#settings)をカスタマイズします。

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

### Options

`options`プロパティを使用して、[Floating UIオプション](https://floating-ui.com/docs/computeposition#options)を使用して位置決めの動作をカスタマイズします。

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

## API

### Props

:component-props

## Theme

:component-theme

## Changelog

:component-changelog
