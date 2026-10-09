---
title: ラジオグループ
description: リストから1つのオプションを選択するラジオボタンのセット。
category: form
keywords:
  - radio buttons
  - single choice
links:
  - label: ラジオグループ
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/radio-group
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/RadioGroup.vue
---

## 使用法

RadioGroupの値を制御するには`v-model`ディレクティブを使用し、状態を制御する必要がない場合は`default-value`プロパティを使用して初期値を設定します。

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
external:
  - items
  - modelValue
props:
  modelValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### アイテム

`items`プロパティを文字列または数値の配列として使用します：

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
external:
  - items
  - modelValue
props:
  modelValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

次のプロパティを持つオブジェクトの配列を渡すこともできます：

- `label?: string`{lang="ts-type"}
- `description?: string`{lang="ts-type"}
- [`value?: string`{lang="ts-type"}](#value-key)
- `disabled?: boolean`{lang="ts-type"}
- [`icon?: string`{lang="ts-type"}](#indicator)
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, container?: ClassNameValue, base?: ClassNameValue, 'indicator'?: ClassNameValue, wrapper?: ClassNameValue, label?: ClassNameValue, icon?: ClassNameValue, description?: ClassNameValue }`{lang="ts-type"}

::component-code
---
ignore:
  - modelValue
  - items
external:
  - items
  - modelValue
externalTypes:
  - RadioGroupItem[]
props:
  modelValue: 'system'
  items:
    - label: 'System'
      description: 'Matches your device settings.'
      value: 'system'
    - label: 'Light'
      description: 'Always uses the light theme.'
      value: 'light'
    - label: 'Dark'
      description: 'Always uses the dark theme.'
      value: 'dark'
---
::

::caution
オブジェクトを使用する場合は、`v-model`ディレクティブまたは`default-value` propでオブジェクトの`value`プロパティを参照する必要があります。
::

### Value Key

`value-key`プロパティを使用して、値を設定するために使用するプロパティを変更できます。デフォルトは`value`です。

::component-code
---
ignore:
  - modelValue
  - items
  - valueKey
external:
  - items
  - modelValue
externalTypes:
  - RadioGroupItem[]
props:
  modelValue: 'light'
  valueKey: 'id'
  items:
    - label: 'System'
      description: 'Matches your device settings.'
      id: 'system'
    - label: 'Light'
      description: 'Always uses the light theme.'
      id: 'light'
    - label: 'Dark'
      description: 'Always uses the dark theme.'
      id: 'dark'
---
::

### Legend

`legend`プロパティを使用してRadioGroupの凡例を設定します。

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
props:
  legend: 'Theme'
  defaultValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### Color

`color`プロパティを使用してRadioGroupの色を変更します。

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
props:
  color: neutral
  defaultValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### Variant

`variant`プロパティを使用して、RadioGroupのバリアントを変更します。

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
externalTypes:
  - RadioGroupItem[]
props:
  color: 'primary'
  variant: 'card'
  defaultValue: 'system'
  items:
    - label: 'System'
      value: 'system'
      description: 'Matches your device settings.'
    - label: 'Light'
      value: 'light'
      description: 'Always uses the light theme.'
    - label: 'Dark'
      value: 'dark'
      description: 'Always uses the dark theme.'
---
::

### サイズ

`size`プロパティを使用してRadioGroupのサイズを変更します。

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
props:
  size: 'xl'
  variant: 'list'
  defaultValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### Orientation

RadioGroupの向きを変更するには、`orientation`プロパティを使用します。デフォルトは`vertical`です。

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
props:
  orientation: 'horizontal'
  variant: 'list'
  defaultValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### Indicator

`indicator`プロパティを使用して位置を変更したり、インジケーターを非表示にしたりします。デフォルトは`start`です。

::note
ラジオにはインジケータ内にアイコンがないため、アイテムの`icon`は`indicator`がラベルの上にある`hidden`の場合にのみ表示されます。
::

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
externalTypes:
  - RadioGroupItem[]
items:
  indicator:
    - start
    - end
    - hidden
  variant:
    - list
    - card
    - table
props:
  indicator: 'hidden'
  orientation: 'horizontal'
  variant: 'table'
  defaultValue: 'System'
  items:
    - label: 'System'
      icon: 'i-lucide-monitor'
      value: 'System'
      class: 'w-20'
    - label: 'Light'
      icon: 'i-lucide-sun'
      value: 'Light'
      class: 'w-20'
    - label: 'Dark'
      icon: 'i-lucide-moon'
      value: 'Dark'
      class: 'w-20'
---
::

### 無効

`disabled`プロパティを使用してRadioGroupを無効にします。

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
props:
  disabled: true
  defaultValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
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
