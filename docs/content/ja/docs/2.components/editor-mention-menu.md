---
title: エディターメンションメニュー
description: エディタでトリガー文字を入力すると、ユーザーの提案を表示するメンションメニュー。
category: editor
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorMentionMenu.vue
---

## 使用法

EditorMentionMenuコンポーネントは、エディタでトリガー文字デフォルトは`@`を入力すると、ユーザー提案のメニューを表示し、`@tiptap/extension-mention`パッケージを使用して選択されたメンションを挿入します。トリガー文字は、挿入されたメンションをレンダリングする際のプレフィックスとしても使用されます。

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
name: 'editor-mention-menu-example'
class: 'p-8'
---
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/nodes/mention" target="_blank"}
Mention拡張機能の詳細については、TipTapのドキュメントをご覧ください。
::

### アイテム

`items`プロパティを次のプロパティを持つオブジェクトの配列として使用します。

- `label: string`{lang="ts-type"}
- `avatar?: AvatarProps`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `description?: string`{lang="ts-type"}
- `disabled?: boolean`{lang="ts-type"}

::component-example
---
elevated: true
collapse: true
name: 'editor-mention-menu-items-example'
class: 'p-8'
---
::

::note
`items`プロパティに配列の配列を渡して、項目の分離グループを作成することもできます。
::

### Char

トリガー文字を変更するには、`char`プロパティを使用します。デフォルトは`@`{lang="ts-type"}です。トリガー文字は挿入された言及をレンダリングする際のプレフィックスとしても使用されます（例：`@channel`の代わりに`#channel`）。

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorMentionMenu :editor="editor" :items="channels" char="#" />
  </UEditor>
</template>
```

::note
異なるメンションタイプをサポートするために、異なる`char`および`plugin-key`プロップを使用して、同じエディタ上で複数の`EditorMentionMenu`コンポーネントを使用できます。

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorMentionMenu :editor="editor" :items="users" plugin-key="mentionMenu" />
    <UEditorMentionMenu :editor="editor" :items="tags" char="#" plugin-key="tagMenu" />
  </UEditor>
</template>
```
::

### 提案badge{label="4.7+" class="align-text-top"}

`suggestion`プロパティを使用して、TipTapの[ Suggestionマッチ動作](https://tiptap.dev/docs/editor/api/utilities/suggestion#settings)をカスタマイズします。

これは、デフォルトの空白プレフィックスを必要とせず、トリガー文字が他の文字の直後に開く場合に便利です。

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorMentionMenu
      :editor="editor"
      :items="items"
      char="#"
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
    <UEditorMentionMenu
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

## 例

### 無視フィルタ付きbadge{label="4.4+" class="align-text-top"}

`ignore-filter`プロパティを`true`に設定すると、内部検索を無効にして独自の検索ロジックを使用できます。`v-model:search-term`を使用して、現在の検索語にアクセスし、APIから項目を取得します。

::component-example
---
elevated: true
collapse: true
name: 'editor-mention-menu-ignore-filter-example'
class: 'p-8'
---
::

::note
この例では[`refDebounced`](https://vueuse.org/shared/refDebounced/)を使用してAPI呼び出しをデバウンスします。
::

## API

### Props

:component-props

## Theme

:component-theme

## Changelog

:component-changelog
