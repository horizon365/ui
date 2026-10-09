---
description: ドラッグ可能なハンドルで区切られたサイズ変更可能なパネルのセット。
category: layout
links:
  - label: スプリッター
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/splitter
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Splitter.vue
navigation.badge: New
---

## 使用法

分割コンポーネントを使用して、ドラッグ可能なハンドルで区切られたサイズ変更可能なパネルのリストを表示します。

::component-example
---
collapse: true
name: 'splitter-example'
---
::

::note
Splitterはコンテナの高さを埋めますので、親要素が定義していることを確認してください。
::

### アイテム

`items`プロパティを次のプロパティを持つオブジェクトの配列として使用します。

- `defaultSize?: number`{lang="ts-type"}
- `minSize?: number`{lang="ts-type"}
- `maxSize?: number`{lang="ts-type"}
- `collapsible?: boolean`{lang="ts-type"}
- `collapsedSize?: number`{lang="ts-type"}
- `sizeUnit?: '%' | 'px'`{lang="ts-type"}
- `order?: number`{lang="ts-type"}
- `id?: string`{lang="ts-type"}
- `slot?: string`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { panel?: ClassNameValue }`{lang="ts-type"}

`slot`キーを使用してパネルの内容を入力し、`class`キーを使用してスタイルを設定します。`slot`キーがないアイテムは`panel-{index}`スロットに戻ります。サイズはデフォルトでパーセンテージです。ピクセル値の項目に`sizeUnit: 'px'`を設定します。

::caution
サーバー上でレンダリングするとき、`id`プロパティを設定し、`defaultSize`をすべてのアイテムまたはなしに指定します。そうでなければIDは自動的に生成され、サーバーとクライアントは一致しない可能性があり、ハイドレーション時のレイアウトが崩れます。`defaultSize`がないアイテムはサーバー上で等しいシェアに戻ります。そのため、2つを混ぜると、ハイドレーション後にパネルがジャンプします。ピクセルサイズはクライアントで測定され、常に少しずれます。
::

::component-code
---
collapse: true
class: 'h-96'
prettier: true
ignore:
  - items
  - id
external:
  - items
externalTypes:
  - SplitterItem[]
props:
  id: 'splitter-items'
  items:
    - slot: 'sidebar'
      minSize: 15
      maxSize: 40
      defaultSize: 25
      class: 'bg-elevated/50 border border-default rounded-xl items-center justify-center text-muted font-medium'
    - slot: 'main'
      defaultSize: 75
      class: 'bg-elevated/50 border border-default rounded-xl items-center justify-center text-muted font-medium'
slots:
  sidebar: Sidebar
  main: Main
---

#sidebar
サイトマップ

#main
メイン
::

### Orientation

`orientation`プロパティを使用して、スプリッタの方向を変更します。デフォルトは`horizontal`です。

::component-code
---
collapse: true
class: 'h-96'
prettier: true
ignore:
  - items
  - id
external:
  - items
externalTypes:
  - SplitterItem[]
props:
  id: 'splitter-orientation'
  orientation: 'vertical'
  items:
    - slot: 'first'
      class: 'bg-elevated/50 border border-default rounded-xl items-center justify-center text-muted font-medium'
    - slot: 'second'
      class: 'bg-elevated/50 border border-default rounded-xl items-center justify-center text-muted font-medium'
slots:
  first: First
  second: Second
---

#first
ファースト

#second
セカンド
::

## 例

### 折りたたみパネル付き

`collapsible: true`をアイテムに設定すると、`minSize`を超えて折りたたまれるようになります。`collapsedSize`を使用して、折りたたまれたときにパネルの一部が見えるようにします。パネルスロットは`collapsed`、`collapse`、`expand`を公開しているので、プログラムで制御できます。`collapse`、`expand`、`resize`イベントはパネルインデックスとともに発生します。

::component-example
---
collapse: true
name: 'splitter-collapsible-example'
---
::

### ネストされたスプリッタ

パネル内に`Splitter`をネストして、2次元のIDEスタイルのレイアウトを構築します。

::component-example
---
collapse: true
name: 'splitter-nested-example'
---
::

### カスタムハンドル付き

ハンドルはデフォルトでは見えません。`ui`プロパティを使用してスタイルを変更します。例えば、フラッシュレイアウトの可視分割器として、`resize-handle`スロットを使用してハンドル内のコンテンツをグリップのようにレンダリングします。

::component-example
---
collapse: true
name: 'splitter-custom-handle-example'
---
::

### 持続性

レイアウトを`localStorage`に保持し、リロード時に復元するために`auto-save-id`を指定します。

```vue
<template>
  <USplitter id="my-layout" auto-save-id="my-layout" :items="items">
    <!-- ... -->
  </USplitter>
</template>
```

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
