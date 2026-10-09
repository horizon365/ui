---
title: 編集者ドラッグハンドル
description: エディタでブロックを並べ替えて選択するためのドラッグ可能なハンドル。
category: editor
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorDragHandle.vue
---

## 使用法

EditorDragHandleコンポーネントは、`@tiptap/extension-drag-handle-vue-3`パッケージを使用してエディタブロックを並べ替えるためのドラッグアンドドロップ機能を提供します。

::caution
エディタインスタンスにアクセスするには、[Editor](/docs/components/editor)コンポーネントのデフォルトスロット内で使用する必要があります。
::

[Button](/docs/components/button)コンポーネントを拡張するため、`color`、`variant`、`size`などの任意のプロパティを渡すことができます。

::component-example
---
collapse: true
elevated: true
name: 'editor-drag-handle-example'
class: 'p-8'
---
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/functionality/drag-handle-vue" target="_blank"}
ドラッグハンドル拡張機能の詳細については、TipTapのドキュメントをご覧ください。
::

### Icon

`icon`プロパティを使用して、ドラッグハンドルアイコンをカスタマイズします。

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorDragHandle :editor="editor" icon="i-lucide-move" />
  </UEditor>
</template>
```

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは`app.config.ts`の`ui.icons.drag`キーでグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは`vite.config.ts`の`ui.icons.drag`キーでグローバルにカスタマイズできます。
:::
::

### Options

`options`プロパティを使用して、[Floating UIオプション](https://floating-ui.com/docs/computeposition#options)を使用して位置決めの動作をカスタマイズします。

::note
オフセットは自動的に計算され、小さなブロックの場合はハンドルを中央に、高いブロックの場合は上部に合わせます。
::

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorDragHandle
      :editor="editor"
      :options="{
        placement: 'left'
      }"
    />
  </UEditor>
</template>
```

## 例

### ドロップダウンメニュー付き

デフォルトスロットを使用して[DropdownMenu](/docs/components/dropdown-menu)を追加し、複製、削除、上下移動、ブロックの異なるタイプへの変換などのブロックレベルのアクションを行います。

`@node-change`イベントをリッスンして現在ホバリングされているノードとその位置を追跡し、メニューが開いている間に`editor.chain().setMeta('lockDragHandle', open).run()`{lang="ts-type"}を使用してハンドル位置をロックします。

::component-example
---
elevated: true
collapse: true
name: 'editor-drag-handle-dropdown-menu-example'
class: 'p-8'
---
::

::note
この例では、`@nuxt/ui/utils/editor`の`mapEditorItems`ユーティリティを使用して、ハンドラの種類（`duplicate`、`delete`、`moveUp`など）を適切な状態管理で対応するエディタコマンドに自動的にマップします。
::

### 提案メニュー付き

デフォルトスロットを使用して、ドラッグハンドルの横に[Button](/docs/components/button)を追加し、[EditorSuggestionMenu](/docs/components/editor-suggestion-menu)を開きます。

`onClick`スロット関数を呼び出して現在のノード位置を取得し、`handlers.suggestion?.execute(editor, { pos: node?.pos }).run()`{lang="ts-type"}を使用してその位置に新しいブロックを挿入します。

::component-example
---
elevated: true
collapse: true
name: 'editor-drag-handle-suggestion-menu-example'
class: '!p-0'
---
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
