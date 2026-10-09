---
title: フィールドグループ
description: 複数のボタンのような要素をグループ化します。
category: element
keywords:
  - segmented control
  - toggle group
  - button group
  - input group
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/FieldGroup.vue
---

## 使用法

複数の[Button](/docs/components/button)をFieldGroup内でラップしてグループ化します。

::component-code
---
prettier: true
slots:
  default: |

    <UButton color="neutral" variant="subtle" label="Button" />
    <UButton color="neutral" variant="outline" icon="i-lucide-chevron-down" />
---
:u-button{color="neutral" variant="subtle" label="ボタン"}
:u-button{color="neutral" variant="outline" icon="i-lucide-chevron-down"}
::

### サイズ

`size`プロパティを使用して、すべてのボタンのサイズを変更します。

::component-code
---
prettier: true
props:
  size: xl
slots:
  default: |

    <UButton color="neutral" variant="subtle" label="Button" />
    <UButton color="neutral" variant="outline" icon="i-lucide-chevron-down" />
---
:u-button{color="neutral" variant="subtle" label="ボタン"}
:u-button{color="neutral" variant="outline" icon="i-lucide-chevron-down"}
::

### Orientation

`orientation`プロパティを使用してボタンの向きを変更します。デフォルトは`horizontal`です。

::component-code
---
prettier: true
props:
  orientation: vertical
slots:
  default: |

    <UButton color="neutral" variant="subtle" label="Submit" />
    <UButton color="neutral" variant="outline" label="Cancel" />
---
:u-button{color="neutral" variant="subtle" label="コンテンツ"}
:u-button{color="neutral" variant="outline" label="キャンセル"}
::

## 例

### 入力あり

[Input](/docs/components/input)、[InputMenu](/docs/components/input-menu)、[Select](/docs/components/select) [SelectMenu](/docs/components/select-menu)などのコンポーネントをフィールドグループ内で使用できます。

::component-code
---
prettier: true
slots:
  default: |

    <UInput color="neutral" variant="outline" placeholder="Enter token" />

    <UButton color="neutral" variant="subtle" icon="i-lucide-clipboard" />
---
:u-input{color="neutral" variant="outline" placeholder="Enter token"}
:u-button{color="neutral" variant="subtle" icon="i-lucide-clipboard"}
::

### ツールチップ付き

フィールドグループ内で[Tooltip](/docs/components/tooltip)を使用できます。

:component-example{name="field-group-tooltip-example"}

### ドロップダウンメニュー付き

フィールドグループ内で[DropdownMenu](/docs/components/dropdown-menu)を使用できます。

:component-example{name="field-group-dropdown-example"}

### バッジ付き

フィールドグループ内で[Badge](/docs/components/badge)を使用できます。

:component-example{name="field-group-badge-example"}

## API

### Props

:component-props

### スロット

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
