---
title: InputDate
description: '日付選択のための入力コンポーネント。'
category: form
keywords:
  - date picker
  - datepicker
  - calendar input
links:
  - label: DateField
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/date-field
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputDate.vue
---

## 使用法

`v-model`ディレクティブを使用して選択した日付を制御します。

::component-code
---
cast:
  modelValue: DateValue
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: [2022, 2, 3]
---
::

状態を制御する必要がない場合は、`default-value`プロパティを使用して初期値を設定します。

::component-code
---
cast:
  defaultValue: DateValue
ignore:
  - defaultValue
external:
  - defaultValue
props:
  defaultValue: [2022, 2, 6]
---
::

::framework-only
#nuxt
:::note{to="/docs/getting-started/integrations/i18n/nuxt#locale"}
このコンポーネントは、ロケールに対応した書式設定のために`@internationalized/date`パッケージを使用します。日付フォーマットは、Appコンポーネントの`locale`プロパティによって決定されます。
:::

#vue
:::note{to="/docs/getting-started/integrations/i18n/vue#locale"}
このコンポーネントは、ロケールに対応した書式設定のために`@internationalized/date`パッケージを使用します。日付フォーマットは、Appコンポーネントの`locale`プロパティによって決定されます。
:::
::

### Range

`range`プロパティを使用して、日付の範囲を選択します。

::component-code
---
prettier: true
cast:
  modelValue: DateRange
ignore:
  - range
  - modelValue.start
  - modelValue.end
external:
  - modelValue
props:
  range: true
  modelValue:
    start: [2022, 2, 3]
    end: [2022, 2, 20]
---
::

### Color

`color`プロパティを使用して、InputDateの色を変更します。

::component-code
---
props:
  color: neutral
  highlight: true
---
::

### Variant

`variant`プロパティを使用して、InputDateのバリアントを変更します。

::component-code
---
props:
  variant: subtle
---
::

### サイズ

`size`プロパティを使用して、InputDateのサイズを変更します。

::component-code
---
props:
  size: xl
---
::

### Icon

`icon`プロパティを使用して、[Icon](/docs/components/icon)をInputDate内に表示します。

::component-code
---
props:
  icon: 'i-lucide-calendar'
---
::

::note
アイコンの位置を設定するには`leading`と`trailing`のプロップを使用し、位置ごとに異なるアイコンを設定するには`leading-icon`と`trailing-icon`のプロップを使用します。
::

### Separatorアイコン

`separator-icon`プロパティを使用して、範囲区切り文字の[Icon](/docs/components/icon)を変更します。デフォルトは`i-lucide-minus`です。

::component-code
---
ignore:
  - range
props:
  range: true
  separatorIcon: 'i-lucide-arrow-right'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは`app.config.ts`の`ui.icons.minus`キーでグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは`vite.config.ts`の`ui.icons.minus`キーでグローバルにカスタマイズできます。
:::
::

### アバター

`avatar`プロパティを使用して、[Avatar](/docs/components/avatar)をInputDate内に表示します。

::component-code
---
prettier: true
ignore:
  - avatar.loading
props:
  avatar:
    src: 'https://github.com/vuejs.png'
    loading: lazy
  size: md
  variant: outline
---
::

### 無効

`disabled`プロパティを使用してInputDateを無効にします。

::component-code
---
props:
  disabled: true
---
::

## サンプル

### 利用できない日付

`is-date-unavailable`プロパティを使用して、特定の日付を使用できないとしてマークします。

::component-example
---
name: 'input-date-unavailable-dates-example'
---
::

### 最小/最大日付付き

`min-value`と`max-value`の小道具を使用して日付を制限します。

::component-example
---
name: 'input-date-min-max-dates-example'
---
::

### 日付ピッカーとして

日付ピッカーを作成するには、[Calendar](/docs/components/calendar)と[Popoverv](/docs/components/popover)コンポーネントを使用します。

::component-example
---
name: 'input-date-date-picker-example'
---
::

### 日付範囲ピッカーとして

日付範囲ピッカーを作成するには、[Calendar](/docs/components/calendar)と[Popover](/docs/components/popover)コンポーネントを使用します。

::component-example
---
name: 'input-date-date-range-picker-example'
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
