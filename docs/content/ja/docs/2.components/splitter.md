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
崩壊真
名前'splitter—example'
---
::

::note
Splitterはコンテナの高さを埋めますので、親要素が定義していることを確認してください。
::

### アイテム

`items` propを、次のプロパティを持つオブジェクトの配列として使用します。

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

`slot`キーを使用してパネルのコンテンツを入力し、`class`キーを使用してスタイルを設定します。`slot`キーがないアイテムは`panel-{index}`スロットに戻ります。サイズはデフォルトでパーセンテージです。ピクセル値の項目に`sizeUnit: 'px'`を設定します。

::caution
サーバー上でレンダリングするとき、`id` propを設定し、`defaultSize`をすべてのアイテムまたはなしに指定します。そうでなければ、IDは自動的に生成され、サーバーとクライアントは一致しない可能性があり、ハイドレーションのレイアウトが崩れます。`defaultSize`がないアイテムはサーバー上で等しいシェアに戻ります。だから2つを混合すると、水和するとパネルがジャンプします。ピクセルサイズはクライアントで測定され、常に少しシフトします。
::

::component-code
---
崩壊真
クラス'h—96'
きれい真
無視
  - アイテム
  -  ID
外部
  - アイテム
externalTypes
  -  SplitterItem []
小道具
  id 'splitter—items'
  アイテム
    -  slot 'sidebar'
      minSize 15
      最大サイズ40
      defaultSize 25
      クラス'bg—elevated/50 border border—default rounded—xl items—center justify—center text—muted font—medium'
    -  slot 'main'
      defaultSize 75
      クラス'bg—elevated/50 border border—default rounded—xl items—center justify—center text—muted font—medium'
スロット
  サイドバーサイドバー
  メインメイン
---

#サイドバー
サイトマップ

#メイン
メイン
::

### オリエンテーション

`orientation`プロパティを使用して、スプリッタの方向を変更します。デフォルトは`horizontal`です。

::component-code
---
崩壊真
クラス'h—96'
きれい真
無視
  - アイテム
  -  ID
外部
  - アイテム
externalTypes
  -  SplitterItem []
小道具
  id 'splitter—orientation'
  オリエンテーション'垂直'
  アイテム
    -  slot 'first'
      クラス'bg—elevated/50 border border—default rounded—xl items—center justify—center text—muted font—medium'
    -  slot 'second'
      クラス'bg—elevated/50 border border—default rounded—xl items—center justify—center text—muted font—medium'
スロット
  最初最初
  セカンド：セカンド
---

#最初に
ファースト

#second
セカンド
::

## 例

### 折りたたみパネル付き

アイテムに`collapsible: true`を設定すると、`minSize`を超えて折りたたまれます。`collapsedSize`を使用して、折りたたまれたときにパネルの一部が見えるようにします。パネルスロットは`collapsed`、`collapse`、`expand`を公開しているので、プログラムで制御できます。`collapse`は、`expand`と`resize`イベントは、パネルインデックスで発生します。

::component-example
---
崩壊真
名前'splitter—collapsilt—example'
---
::

### ネストされたスプリッタ

パネル内に`Splitter`をネストして、2次元のIDEスタイルのレイアウトを作成します。

::component-example
---
崩壊真
name 'splitter—nested—example'
---
::

### カスタムハンドル付き

ハンドルはデフォルトでは見えません。`ui`プロパティを使用してスタイルを変更します。例えば、フラッシュレイアウトの可視分割器として、`resize-handle`スロットを使用してハンドル内のコンテンツをグリップのようにレンダリングします。

::component-example
---
崩壊真
名前'splitterカスタムハンドル例'
---
::

### 持続性

`auto-save-id`を指定して、レイアウトを`localStorage`に保持し、リロード時に復元します。

```vue
<template>
  <USplitter id="my-layout" auto-save-id="my-layout" :items="items">
    <!-- ... -->
  </USplitter>
</template>
```

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
