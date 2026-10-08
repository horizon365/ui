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
- `fixed`{lang="ts-type"}（常に表示）
- `bubble`{lang="ts-type"}（テキスト選択に表示されます）
- `floating`{lang="ts-type"}（空行に表示されます）

::caution
エディタインスタンスにアクセスするには、[ Editor ](/docs/components/editor)コンポーネントのデフォルトスロット内で使用する必要があります。
::

::component-example
---
昇格：true
崩壊真
名前'editor—tool—example'
クラス'p—8'
---
::

::callout{icon="i-custom-tiptap"}
バブルレイアウトとフローティングレイアウトは、TipTapの[ BubbleMenu ](https://tiptap.dev/docs/editor/extensions/functionality/bubble-menu)と[ FloatingMenu ](https://tiptap.dev/docs/editor/extensions/functionality/floatingmenu)を使用しています。
::

### アイテム

`items` propを、次のプロパティを持つオブジェクトの配列として使用します。

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

[ Button ](/docs/components/button#props)コンポーネントから、`color`、`variant`、`size`などの任意のプロパティを渡すことができます。

::component-example
---
昇格：真
崩壊真
名前'editor—tool—items—example'
クラス'p—8'
---
::

::note
`items`プロパティに配列の配列を渡して、項目の分離グループを作成することもできます。
::

::tip
各項目は、`items` propと同じプロパティを持つオブジェクトの`items`配列を取り、[ DropdownMenu ](/docs/components/dropdown-menu)を作成できます。
::

### レイアウト

ツールバーの表示方法を変更するには、`layout`プロパティを使用します。デフォルトは`fixed`{lang="ts-type"}です。

::component-example
---
昇格：真
崩壊真
名前'editor—tool—layout—example'
クラス'p—8'
オプション
  -  name layout
    labelレイアウト
    デフォルトバブル
    アイテム
      - 固定
      - バブル
      -  floating
---
::

### オプション

`bubble`{lang="ts-type"}または`floating`{lang="ts-type"}レイアウトを使用する場合、`options`プロパティを使用して、[ Floating UI options ](https://floating-ui.com/docs/computeposition#options)を使用して位置決めの動作をカスタマイズします。

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

###  Should Show

`bubble`{lang="ts-type"}または`floating`{lang="ts-type"}レイアウトを使用する場合は、`should-show`プロパティを使用してツールバーが表示されるタイミングを制御します。この関数はエディタの状態に関するコンテキストを受け取り、ブール値を返します。

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

`should-show`プロパティを使用して、特定のノードタイプにのみ表示されるコンテキスト固有のツールバーを作成します。この例では、画像が選択されたときにのみ表示されるダウンロードおよび削除アクションを含む`bubble`ツールバーを示しています。

::component-example
---
昇格：true
崩壊真
名前'editor—tool—image—example'
クラス'p—8'
---
::

### リンクポップオーバー付き

この例では、ツールバーアイテムの`slot`プロパティと[ Popover ](/docs/components/popover)コンポーネントを使用してカスタムリンクポップオーバーを作成する方法を示します。

1. [ Popover ](/docs/components/popover)をラップするVueコンポーネントを作成します。

::component-example
---
プレビュー false
崩壊真
名前'editor—link—popover'
---
::

2. ツールバーのカスタムコンポーネントを名前付きスロットで使用します。

::component-example
---
昇格：true
崩壊真
名前'editor—tool—custom—slot—example'
クラス'p—8'
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
