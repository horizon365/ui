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
エディタインスタンスにアクセスするには、[ Editor ](/docs/components/editor)コンポーネントのデフォルトスロット内で使用する必要があります。
::

[ Button ](/docs/components/button)コンポーネントを拡張しているので、`color`、`variant`、`size`などのプロパティを渡すことができます。

::component-example
---
崩壊真
昇格：真
名前'editor—drag—handle—example'
クラス'p—8'
---
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/functionality/drag-handle-vue" target="_blank"}
ドラッグハンドル拡張機能の詳細については、TipTapのドキュメントをご覧ください。
::

### アイコン

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
このアイコンは、`ui.icons.drag`キーの下の`app.config.ts`でグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは、`ui.icons.drag`キーの下の`vite.config.ts`でグローバルにカスタマイズできます。
:::
::

### オプション

`options` propを使用して、[ Floating UI options ](https://floating-ui.com/docs/computeposition#options)を使用して位置決めの動作をカスタマイズします。

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

デフォルトスロットを使用して、[ DropdownMenu ](/docs/components/dropdown-menu)を追加します。

`@node-change`イベントをリッスンして現在ホバリングされているノードとその位置を追跡し、メニューが開いている間に`editor.chain().setMeta('lockDragHandle', open).run()`{lang="ts-type"}を使用してハンドル位置をロックします。

::component-example
---
昇格：true
崩壊真
名前'editor—drag—handle—dropdown menu—example'
クラス'p—8'
---
::

::note
この例では、`@nuxt/ui/utils/editor`の`mapEditorItems`ユーティリティを使用して、ハンドラの種類`duplicate`、`delete`、`moveUp`などを適切な状態管理で対応するエディタコマンドに自動的にマップします。
::

### 提案メニュー付き

デフォルトスロットを使用して、[ Button ](/docs/components/button)[ EditorSuggestionMenu ](/docs/components/editor-suggestion-menu)を開きます。

`onClick`スロット関数を呼び出して現在のノード位置を取得し、`handlers.suggestion?.execute(editor, { pos: node?.pos }).run()`{lang="ts-type"}を使用してその位置に新しいブロックを挿入します。

::component-example
---
昇格：true
崩壊真
名前'editor—drag—handle—suggestion—menu—example'
クラス'！p—0'
---
::

##  API

###  Props

component—props

### スロット

コンポーネントスロット

### エミッツ

component—emits

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
