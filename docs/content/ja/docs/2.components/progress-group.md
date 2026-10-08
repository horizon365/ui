---
title: ProgressGroup
description: プログレスバーが複数のセグメントに分割され、合計になります。
category: element
navigation.badge: New
keywords:
  - meter
  - meter group
  - segmented progress
  - stacked bar
  - breakdown
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ProgressGroup.vue
---

## 使用法

ProgressGroupコンポーネントを使用して、複数の値を1つのプログレスバーのセグメントとして表示します。

::component-code
---
崩壊真
無視
  - アイテム
  -  max
  - クラス
外部
  - アイテム
externalTypes
  -  ProgressGroupItem []
小道具
  最高128
  アイテム
    -  label 'System'
      値24
      色'中立'
      アイコン'i—lucide—cog'
    -  label 'Apps'
      値8
      色'エラー'
      アイコン'i—lucide—app—window'
    -  label 'Documents'
      値12
      色'警告'
      アイコン'i—lucide—file'
    -  label 'マルチメディア'
      値42
      色'成功'
      アイコン'i—lucide—film'
  クラス'w—96'
---
::

### アイテム

`items`プロパティを、次のプロパティを持つオブジェクトの配列として使用します。

- `label?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `value?: number`{lang="ts-type"}
- [`color?: "primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | (string & {})`{lang="ts-type"}](#with-custom-colors)
- `slot?: string`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { segment?: ClassNameValue, indicator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingDot?: ClassNameValue, itemLabel?: ClassNameValue, itemTrailing?: ClassNameValue }`{lang="ts-type"}

::component-code
---
崩壊真
無視
  - アイテム
  - クラス
外部
  - アイテム
externalTypes
  -  ProgressGroupItem []
小道具
  アイテム
    -  label 'Compute'
      値42
      色'プライマリ'
    -  label 'ストレージ'
      値18
      色'情報'
    -  label '帯域幅'
      値9
      色'警告'
  クラス'w—96'
---
::

::note
`icon`のない項目は、代わりにリストに色付きのドットが表示されます。
::

### マックス

`max`プロパティを使用して、すべてのアイテムが加算される値を設定します。デフォルトは`100`です。

::component-code
---
崩壊真
無視
  - アイテム
  - クラス
外部
  - アイテム
externalTypes
  -  ProgressGroupItem []
小道具
  最高512
  アイテム
    -  label 'Used'
      値128
      色'プライマリ'
    -  label '予約済み'
      値64
      色'ニュートラル'
  クラス'w—96'
---
::

::note
値は`0`と`max`の間でクランプされ、`max`以上のセグメントは比例してトラックを共有します。
::

### ステータス

`status`プロパティを使用して、バーの上に合計値を表示します。

::component-code
---
崩壊真
無視
  - アイテム
  - クラス
外部
  - アイテム
externalTypes
  -  ProgressGroupItem []
小道具
  ステータス真
  最高128
  アイテム
    -  label 'System'
      値24
      色'中立'
    -  label 'Apps'
      値8
      色'エラー'
    -  label 'マルチメディア'
      値42
      色'成功'
  クラス'w—96'
---
::

::tip
ステータスはバーの終わりを追跡します。代わりに幅いっぱいにするには`:ui="{ status: 'w-full' }"`を使用します。
::

### カラー

`color`プロパティを使用して、独自の色を設定していないすべてのセグメントの色を変更します。

::component-code
---
崩壊真
無視
  - アイテム
  - クラス
外部
  - アイテム
externalTypes
  -  ProgressGroupItem []
小道具
  色ニュートラル
  アイテム
    -  label 'Read'
      値42
    -  label 'Write'
      値18
  クラス'w—96'
---
::

::tip
このプロパティと各アイテムの`color`はどちらもCSSの色値を受け付けます。これはテーマ外のパレットに便利です。
::

### サイズ

ProgressGroupのサイズを変更するには、`size`プロパティを使用します。

::component-code
---
崩壊真
無視
  - アイテム
  - クラス
外部
  - アイテム
externalTypes
  -  ProgressGroupItem []
小道具
  サイズXL
  アイテム
    -  label 'Read'
      値42
      色'プライマリ'
    -  label 'Write'
      値18
      色'情報'
  クラス'w—96'
---
::

### オリエンテーション

ProgressGroupの向きを変更するには、`orientation`プロパティを使用します。デフォルトは`horizontal`です。

::component-code
---
崩壊真
無視
  - アイテム
  - クラス
外部
  - アイテム
externalTypes
  -  ProgressGroupItem []
小道具
  オリエンテーション垂直
  アイテム
    -  label 'Read'
      値42
      色'プライマリ'
    -  label 'Write'
      値18
      色'情報'
  クラス'h—48'
---
::

## 例

### ステータススロット付き

`#status`スロットを使用して、合計パーセンテージを独自のコンテンツに置き換えます。

::component-example
---
崩壊真
名前progress—group—status—example
---
::

### アイテムスロット付き

各エントリの表示内容を変更するには、`#item-label`および`#item-trailing`スロットを使用します。どちらも`item`、`index`、`percent`を受け取ります。

::component-example
---
崩壊真
名前progress—group—item—example
---
::

### カスタムカラー

各項目にCSS色を付けて、テーマパレットの外で内訳を作成します。

::component-example
---
崩壊真
名前progress—group—custom—colorの例
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
