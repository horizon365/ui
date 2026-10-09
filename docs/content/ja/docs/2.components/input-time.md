---
title: 入力時間
description: '時間を選択するための入力。'
category: form
keywords:
  - time picker
  - clock
  - hour
links:
  - label: TimeField
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/time-field
  - label: TimeRangeField
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/time-range-field
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputTime.vue
---

## 使用法

`v-model`ディレクティブを使用して選択時刻を制御します。

::component-code
---
cast:
  modelValue: TimeValue
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: [12, 30, 0]
---
::

状態を制御する必要がない場合は、`default-value`プロパティを使用して初期値を設定します。

::component-code
---
cast:
  defaultValue: TimeValue
ignore:
  - defaultValue
external:
  - defaultValue
props:
  defaultValue: [9, 45, 0]
---
::

::framework-only
#nuxt
:::note{to="/docs/getting-started/integrations/i18n/nuxt#locale"}
このコンポーネントは、ロケールに対応したフォーマットのために`@internationalized/date`パッケージを使用します。時間フォーマットはAppコンポーネントの`locale`プロパティによって決定されます。
:::

#vue
:::note{to="/docs/getting-started/integrations/i18n/vue#locale"}
このコンポーネントは、ロケールに対応したフォーマットのために`@internationalized/date`パッケージを使用します。時間フォーマットはAppコンポーネントの`locale`プロパティによって決定されます。
:::
::

### Range

`range`プロパティを使用して、開始時刻と終了時刻の時間範囲選択を有効にします。

::component-code
---
prettier: true
cast:
  modelValue: TimeRangeValue
ignore:
  - range
  - modelValue.start
  - modelValue.end
external:
  - modelValue
props:
  range: true
  modelValue:
    start: [9, 0, 0]
    end: [17, 30, 0]
---
::

### Hourサイクル

`hour-cycle`プロパティを使用して、InputTimeの時間サイクルを変更します。デフォルトは`12`です。

::component-code
---
cast:
  defaultValue: TimeValue
ignore:
  - hourCycle
  - defaultValue
external:
  - defaultValue
props:
  hourCycle: 24
  defaultValue: [16, 30, 0]
---
::

### Color

`color`プロパティを使用して、InputTimeの色を変更します。

::component-code
---
props:
  color: neutral
  highlight: true
---
::

::note
`highlight`プロパティはフォーカスの状態を示すために使用されます。バリデーションエラーが発生したときに内部で使用されます。
::

### Variant

`variant`プロパティを使用して、InputTimeのバリアントを変更します。

::component-code
---
props:
  variant: subtle
---
::

### サイズ

`size`プロパティを使用して、InputTimeのサイズを変更します。

::component-code
---
props:
  size: xl
---
::

### Icon

`icon`プロパティを使用して、[Icon](/docs/components/icon)をInputTime内に表示します。

::component-code
---
props:
  icon: 'i-lucide-clock'
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

`avatar`プロパティを使用して、InputTime内に[Avatar](/docs/components/avatar)を表示します。

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

`disabled`プロパティを使用してInputTimeを無効にします。

::component-code
---
props:
  disabled: true
---
::

## サンプル

### FormField内

[FormField](/docs/components/form-field)コンポーネント内でInputTimeを使用して、ラベル、ヘルプテキスト、必須インジケータなどを表示できます。

::component-example
---
name: 'input-time-form-field-example'
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
