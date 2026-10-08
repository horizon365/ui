---
description: 複数のステッププロセスを通じて進捗状況を示すために使用される一連のステップ。
category: navigation
keywords:
  - wizard
links:
  - label: ステッパー
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/stepper
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Stepper.vue
---

## 使用法

ステッパーコンポーネントを使用して、ステッパー内のアイテムのリストを表示します。

::component-code
---
崩壊真
隠す
  - クラス
無視
  - アイテム
  - クラス
外部
  - アイテム
externalTypes
  -  StepperItem []
小道具
  アイテム
    -  title 'アドレス'
      説明：'ここに住所を追加'
      アイコン'i—lucide—house'
    -  title '出荷'
      説明：「ご希望の配送方法を設定」
      アイコン'i—lucide—truck'
    -  title 'チェックアウト'
      説明'あなたの順序を確認'
  クラス'w—full'
---
::

### アイテム

`items` propを、次のプロパティを持つオブジェクトの配列として使用します。

- `title?: string`{lang="ts-type"}
- `description?: AvatarProps`{lang="ts-type"}
- `content?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `value?: string | number`{lang="ts-type"}
- `disabled?: boolean`{lang="ts-type"}
- [`slot?: string`{lang="ts-type"}](#with-custom-slot)
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, container?: ClassNameValue, trigger?: ClassNameValue, indicator?: ClassNameValue, icon?: ClassNameValue, separator?: ClassNameValue, wrapper?: ClassNameValue, title?: ClassNameValue, description?: ClassNameValue }`{lang="ts-type"}

::component-code
---
無視
  - アイテム
  - クラス
外部
  - アイテム
externalTypes
  -  StepperItem []
小道具
  アイテム
    -  title 'アドレス'
      説明：'ここに住所を追加'
      アイコン'i—lucide—house'
    -  title '出荷'
      説明：「ご希望の配送方法を設定」
      アイコン'i—lucide—truck'
    -  title 'チェックアウト'
      説明'あなたの順序を確認'
  クラス'w—full'
---
::

::note
項目をクリックして、手順を移動します。
::

### カラー

ステッパーの色を変更するには、`color`プロパティを使用します。

::component-code
---
無視
  - コンテンツ
  - アイテム
  - クラス
外部
  - アイテム
externalTypes
  -  StepperItem []
小道具
  色ニュートラル
  アイテム
    -  title 'アドレス'
      説明：'ここに住所を追加'
      アイコン'i—lucide—house'
    -  title '出荷'
      説明：「ご希望の配送方法を設定」
      アイコン'i—lucide—truck'
    -  title 'チェックアウト'
      説明'あなたの順序を確認'
  クラス'w—full'
---
::

### サイズ

ステッパーのサイズを変更するには、`size`プロパティを使用します。

::component-code
---
無視
  -  content
  - アイテム
  - クラス
外部
  - アイテム
externalTypes
  -  StepperItem []
小道具
  サイズXL
  アイテム
    -  title 'アドレス'
      説明：'ここに住所を追加'
      アイコン'i—lucide—house'
    -  title '出荷'
      説明：「ご希望の配送方法を設定」
      アイコン'i—lucide—truck'
    -  title 'チェックアウト'
      説明'あなたの順序を確認'
  クラス'w—full'
---
::

### オリエンテーション

ステッパーの向きを変更するには、`orientation`プロパティを使用します。デフォルトは`horizontal`です。

::component-code
---
無視
  - コンテンツ
  - アイテム
  - クラス
外部
  - アイテム
externalTypes
  -  StepperItem []
小道具
  オリエンテーション垂直
  アイテム
    -  title 'アドレス'
      説明：'ここに住所を追加'
      アイコン'i—lucide—house'
    -  title '出荷'
      説明：「ご希望の配送方法を設定」
      アイコン'i—lucide—truck'
    -  title 'チェックアウト'
      説明'あなたの順序を確認'
  クラス'w—full'
---
::

### 無効

`disabled`プロパティを使用して、ステップのナビゲーションを無効にします。

::component-code
---
無視
  - コンテンツ
  - アイテム
  - クラス
外部
  - アイテム
externalTypes
  -  StepperItem []
小道具
  無効true
  アイテム
    -  title 'アドレス'
      説明：'ここに住所を追加'
      アイコン'i—lucide—house'
    -  title '出荷'
      説明：「ご希望の配送方法を設定」
      アイコン'i—lucide—truck'
    -  title 'チェックアウト'
      説明'あなたの順序を確認'
---
::

::note{to="#with-controls"}
これは、コントロールで強制的にナビゲーションしたい場合に便利です。
::

## 例

### コントロール付き

ボタンを使用してステッパーの追加コントロールを追加できます。

component—example {name="stepper-with-controls-example"}

###  Controlアクティブ項目

`default-value` propを使用するか、`v-model`ディレクティブを使用して、アクティブなアイテムを制御できます。`value`が指定されていない場合は、インデックスがデフォルトになります。

component—example {name="stepper-model-value-example"}

::tip
`value-key`プロパティを使用して、`v-model`または`default-value`が指定されたときにアイテムにマッチするキーを変更します。
::

### コンテンツスロット付き

`#content`スロットを使用して、各項目の内容をカスタマイズします。

component—example {name="stepper-content-slot-example"}

### カスタムスロット付き

特定の項目をカスタマイズするには、`slot`プロパティを使用します。

以下のスロットにアクセスできます：

- `#{{ item.slot }}`{lang="ts-type"}

component—example {name="stepper-custom-slot-example"}

##  API

###  Props

component—props

### スロット

コンポーネントスロット

###  Emits

component—emits

###  Expose

型付きコンポーネントインスタンスには、[`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref)を使用してアクセスできます。

```vue
<script setup lang="ts">
const stepper = useTemplateRef('stepper')
</script>

<template>
  <UStepper ref="stepper" />
</template>
```

これにより、以下にアクセスできます：

| 名前|タイプ|
| ---- | ---- |
| `next`{lang="ts-type"}| `() => void`{lang="ts-type"}|
| `prev`{lang="ts-type"}| `() => void`{lang="ts-type"}|
| `hasNext`{lang="ts-type"}| `Ref<boolean>`{lang="ts-type"}|
| `hasPrev`{lang="ts-type"}| `Ref<boolean>`{lang="ts-type"}|

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
