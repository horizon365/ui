---
title: エディターツールバー
description: 固定メニュー、バブルメニュー、またはフローティングメニューとして表示できるエディタアクション用のカスタマイズ可能なツールバー。
category: editor
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorToolbar.vue
---

## 使用法

EditorToolbarコンポーネントは、アクティブな状態をエディターコンテンツと自動的に同期する書式設定ボタンのツールバーを表示します。`@tiptap/vue-3/menus`パッケージを使用して、3つのレイアウトモードをサポートします。
- `fixed`{lang="ts-type"}常に表示
- `bubble`{lang="ts-type"}（テキスト選択に表示）
- `floating`{lang="ts-type"}（空行に表示）

::caution
エディタインスタンスにアクセスするには、[Editor](/docs/components/editor)コンポーネントのデフォルトスロット内で使用する必要があります。
::

::component-example
---
elevated: true
collapse: true
name: 'editor-toolbar-example'
class: 'p-8'
---
::

::callout{icon="i-custom-tiptap"}
バブルレイアウトとフローティングレイアウトは、TipTapの[BubbleMenu](https://tiptap.dev/docs/editor/extensions/functionality/bubble-menu)と[Floating Menu](https://tiptap.dev/docs/editor/extensions/functionality/floatingmenu)拡張を使用します。
::

### アイテム

`items`プロパティを次のプロパティを持つオブジェクトの配列として使用します。

- `label?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral"`{lang="ts-type"}
- `activeColor?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral"`{lang="ts-type"}
- `variant?: "solid" | "outline" | "soft" | "ghost" | "link" | "subtle"`{lang="ts-type"}
- `activeVariant?: "solid" | "outline" | "soft" | "ghost" | "link" | "subtle"`{lang="ts-type"}
- `size?: "xs" | "sm" | "md" | "lg" | "xl"`{lang="ts-type"}
- [`kind?: "mark" | "textAlign" | "heading" | "link" | "image" | "blockquote" | "bulletList" | "orderedList" | "taskList" | "codeBlock" | "horizontalRule" | "paragraph" | "undo" | "redo" | "clearFormatting" | "duplicate" | "delete" | "moveUp" | "moveDown" | "suggestion" | "mention" | "emoji"`{lang="ts-type"}](/docs/components/editor#handlers)
- `disabled?: boolean`{lang="ts-type"}
- `loading?: boolean`{lang="ts-type"}
- `active?: boolean`{lang="ts-type"}
- `tooltip?: TooltipProps`{lang="ts-type"}
- [`slot?: string`{lang="ts-type"}](#with-link-popover)
- `onClick?: (e: MouseEvent) => void`{lang="ts-type"}
- `items?: EditorToolbarItem[] | EditorToolbarItem[][]`{lang="ts-type"}
- `class?: any`{lang="ts-type"}

[Button](/docs/components/button#props)コンポーネントから、`color`、`variant`、`size`などの任意のプロパティを渡すことができます。

::component-example
---
elevated: true
collapse: true
name: 'editor-toolbar-items-example'
class: 'p-8'
---
::

::note
`items`プロパティに配列の配列を渡して、項目の分離グループを作成することもできます。
::

::tip
各アイテムは、`items`プロパティと同じプロパティを持つオブジェクトの`items`配列を取り、[DropdownMenu](/docs/components/dropdown-menu)を作成できます。
::

### Layout

`layout`プロパティを使用して、ツールバーの表示方法を変更します。デフォルトは`fixed`{lang="ts-type"}です。

::component-example
---
elevated: true
collapse: true
name: 'editor-toolbar-layout-example'
class: 'p-8'
options:
  - name: layout
    label: Layout
    default: bubble
    items:
      - fixed
      - bubble
      - floating
---
::

### Options

`bubble`{lang="ts-type"}または`floating`{lang="ts-type"}レイアウトを使用する場合は、`options`プロパティを使用して、[Floating UIオプション](https://floating-ui.com/docs/computeposition#options)を使用して位置決めの動作をカスタマイズします。

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorToolbar
      :editor="editor"
      :items="items"
      layout="bubble"
      :options="{
        placement: 'top',
        offset: 8,
        flip: { padding: 8 },
        shift: { padding: 8 }
      }"
    />
  </UEditor>
</template>
```

### 表示するべき

`bubble`{lang="ts-type"}または`floating`{lang="ts-type"}レイアウトを使用する場合は、`should-show`プロパティを使用してツールバーの表示を制御します。この関数はエディタの状態に関するコンテキストを受け取り、真偽値を返します。

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorToolbar
      :editor="editor"
      :items="items"
      layout="bubble"
      :should-show="({ view, state }) => {
        const { selection } = state
        const { from, to } = selection
        const text = state.doc.textBetween(from, to)
        return view.hasFocus() && !selection.empty && text.length > 10
      }"
    />
  </UEditor>
</template>
```

## 例

### 画像ツールバー付き

`should-show`プロパティを使用して、特定のノードタイプにのみ表示されるコンテキスト固有のツールバーを作成します。この例では、画像が選択されたときにのみ表示されるダウンロードと削除アクションを持つ`bubble`ツールバーを示しています。

::component-example
---
elevated: true
collapse: true
name: 'editor-toolbar-image-example'
class: 'p-8'
---
::

### Withリンクポップオーバー

この例では、ツールバーアイテムの`slot`プロパティと[Popover](/docs/components/popover)コンポーネントを使用してカスタムリンクポップオーバーを作成する方法を示します。

1. リンク編集機能付きの[Popover](/docs/components/popover)をラップするVueコンポーネントを作成します。

::component-example
---
preview: false
collapse: true
name: 'editor-link-popover'
---
::

2. ツールバーのカスタムコンポーネントを名前付きスロットで使用します。

::component-example
---
elevated: true
collapse: true
name: 'editor-toolbar-custom-slot-example'
class: 'p-8'
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
