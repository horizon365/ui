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
collapse: true
hide:
  - class
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - StepperItem[]
props:
  items:
    - title: 'Address'
      description: 'Add your address here'
      icon: 'i-lucide-house'
    - title: 'Shipping'
      description: 'Set your preferred shipping method'
      icon: 'i-lucide-truck'
    - title: 'Checkout'
      description: 'Confirm your order'
  class: 'w-full'
---
::

### アイテム

`items`プロパティを次のプロパティを持つオブジェクトの配列として使用します。

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
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - StepperItem[]
props:
  items:
    - title: 'Address'
      description: 'Add your address here'
      icon: 'i-lucide-house'
    - title: 'Shipping'
      description: 'Set your preferred shipping method'
      icon: 'i-lucide-truck'
    - title: 'Checkout'
      description: 'Confirm your order'
  class: 'w-full'
---
::

::note
項目をクリックして手順を移動します。
::

### Color

`color`プロパティを使用して、Stepperの色を変更します。

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - StepperItem[]
props:
  color: neutral
  items:
    - title: 'Address'
      description: 'Add your address here'
      icon: 'i-lucide-house'
    - title: 'Shipping'
      description: 'Set your preferred shipping method'
      icon: 'i-lucide-truck'
    - title: 'Checkout'
      description: 'Confirm your order'
  class: 'w-full'
---
::

### Size

`size`プロパティを使用して、Stepperのサイズを変更します。

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - StepperItem[]
props:
  size: xl
  items:
    - title: 'Address'
      description: 'Add your address here'
      icon: 'i-lucide-house'
    - title: 'Shipping'
      description: 'Set your preferred shipping method'
      icon: 'i-lucide-truck'
    - title: 'Checkout'
      description: 'Confirm your order'
  class: 'w-full'
---
::

### Orientation

`orientation`プロパティを使用してステッパーの向きを変更します。デフォルトは`horizontal`です。

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - StepperItem[]
props:
  orientation: vertical
  items:
    - title: 'Address'
      description: 'Add your address here'
      icon: 'i-lucide-house'
    - title: 'Shipping'
      description: 'Set your preferred shipping method'
      icon: 'i-lucide-truck'
    - title: 'Checkout'
      description: 'Confirm your order'
  class: 'w-full'
---
::

### 無効

`disabled`プロパティを使用して、ステップのナビゲーションを無効にします。

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - StepperItem[]
props:
  disabled: true
  items:
    - title: 'Address'
      description: 'Add your address here'
      icon: 'i-lucide-house'
    - title: 'Shipping'
      description: 'Set your preferred shipping method'
      icon: 'i-lucide-truck'
    - title: 'Checkout'
      description: 'Confirm your order'
---
::

::note{to="#with-controls"}
これは、コントロールで強制的にナビゲーションしたい場合に便利です。
::

## 例

### コントロール付き

ボタンを使用してステッパーの追加コントロールを追加できます。

:component-example{name="stepper-with-controls-example"}

###  Controlアクティブなアイテム

`default-value`プロパティを使用するか、`v-model`ディレクティブを項目の`value`と共に使用することでアクティブな項目を制御できます。`value`が指定されない場合、デフォルトでインデックスになります。

:component-example{name="stepper-model-value-example"}

::tip
`value-key`プロパティを使用して、`v-model`または`default-value`が指定されたときにアイテムにマッチするキーを変更します。
::

### コンテンツスロット付き

`#content`スロットを使用して、各アイテムのコンテンツをカスタマイズします。

:component-example{name="stepper-content-slot-example"}

### カスタムスロット付き

`slot`プロパティを使用して特定のアイテムをカスタマイズします。

以下のスロットにアクセスできます：

- `#{{ item.slot }}`{lang="ts-type"}

:component-example{name="stepper-custom-slot-example"}

## API

### Props

:component-props

### スロット

:component-slots

### Emits

:component-emits

### Expose

型付きコンポーネントインスタンスには[`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref)を使用してアクセスできます。

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

## Theme

:component-theme

## Changelog

:component-changelog
