---
description: 単一の日付、複数の日付、または日付範囲を選択するカレンダーコンポーネント。
category: element
keywords:
  - date picker
  - datepicker
  - schedule
links:
  - label: カレンダー
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/calendar
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Calendar.vue
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

### タイプbadge{label="4.9+" class="align-text-top"}

`type`プロパティを使用して、カレンダーが選択するものを変更します。デフォルトは`date`です。

`date`を使用する場合は、見出しをクリックして日表示から月表示、年表示に切り替え、ドリルダウンして日付を選択します。

::component-code
---
cast:
  modelValue: DateValue
ignore:
  - type
  - modelValue
external:
  - modelValue
props:
  type: month
  modelValue: [2022, 2, 1]
---
::

`type="year"`を使用してスタンドアロンの年ピッカーをレンダリングします。

::component-code
---
cast:
  modelValue: DateValue
ignore:
  - type
  - modelValue
external:
  - modelValue
props:
  type: year
  modelValue: [2022, 1, 1]
---
::

### 複数

`multiple`プロパティを使用して複数選択できます。

::component-code
---
prettier: true
cast:
  modelValue: DateValue[]
ignore:
  - multiple
  - modelValue
external:
  - modelValue
props:
  multiple: true
  modelValue: [[2022, 2, 4], [2022, 2, 6], [2022, 2, 8]]
---
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

`range`プロパティは`type="month"`と`type="year"`でも動作し、月または年の範囲を選択できます。

::component-code
---
prettier: true
cast:
  modelValue: DateRange
ignore:
  - type
  - range
  - modelValue.start
  - modelValue.end
external:
  - modelValue
props:
  type: month
  range: true
  modelValue:
    start: [2022, 2, 1]
    end: [2022, 6, 1]
---
::

### 月数

`numberOfMonths`プロパティを使用して、カレンダーの月数を変更します。

::component-code
---
props:
  numberOfMonths: 3
---
::

### Monthコントロール

`month-controls`プロパティを使用して月コントロールを表示します。デフォルトは`true`です。

::component-code
---
props:
  monthControls: false
---
::

`prev-month`と`next-month`の小道具を使用して月ボタンを上書きします。

::component-code
---
prettier: true
ignore:
  - prevMonth.color
  - prevMonth.variant
  - nextMonth.color
  - nextMonth.variant
props:
  prevMonth:
    color: primary
    variant: soft
  nextMonth:
    color: primary
    variant: soft
---
::

### Yearコントロール

`year-controls`プロパティを使用して年コントロールを表示します。デフォルトは`true`です。

::component-code
---
props:
  yearControls: false
---
::

`prev-year`と`next-year`の小道具を使用して年ボタンを上書きします。

::component-code
---
prettier: true
ignore:
  - prevYear.color
  - prevYear.variant
  - nextYear.color
  - nextYear.variant
props:
  prevYear:
    color: primary
    variant: soft
  nextYear:
    color: primary
    variant: soft
---
::

### Viewコントロールbadge{label="4.9+" class="align-text-top"}

`view-control`プロパティを使用して、見出しを日、月、年ビューを切り替えるボタンにします。デフォルトは`true`です。

::component-code
---
items:
  viewControl:
    - true
    - false
props:
  viewControl: false
---
::

見出しボタンをオーバーライドするオブジェクトに`view-control`プロパティを設定します。

::component-code
---
prettier: true
ignore:
  - viewControl.color
  - viewControl.variant
props:
  viewControl:
    color: primary
    variant: soft
---
::

### 固定週

`fixed-weeks`プロパティを使用して、固定週のカレンダーを表示します。

::component-code
---
props:
  fixedWeeks: false
---
::

### 週番号badge{label="4.4+" class="align-text-top"}

`week-numbers`プロパティを使用して、カレンダーに週番号を表示します。

::component-code
---
props:
  weekNumbers: true
  fixedWeeks: true
---
::

### Color

`color`プロパティを使用してカレンダーの色を変更します。

::component-code
---
cast:
  defaultValue: DateRange
hide:
  - range
  - defaultValue
  - defaultValue.start
  - defaultValue.end
props:
  color: neutral
  range: true
  defaultValue:
    start: [2022, 2, 3]
    end: [2022, 2, 20]
---
::

### Variant

`variant`プロパティを使用して、カレンダーのバリアントを変更します。

::component-code
---
cast:
  defaultValue: DateRange
hide:
  - range
  - defaultValue
  - defaultValue.start
  - defaultValue.end
props:
  variant: subtle
  range: true
  defaultValue:
    start: [2022, 2, 3]
    end: [2022, 2, 20]
---
::

### サイズ

`size`プロパティを使用してカレンダーのサイズを変更します。

::component-code
---
props:
  size: xl
---
::

### 無効

`disabled`プロパティを使用してカレンダーを無効にします。

::component-code
---
props:
  disabled: true
---
::

## 例

### Withチップイベント

[Chip](/docs/components/chip)コンポーネントを使用して、特定の日にイベントを追加します。

::component-example
---
name: 'calendar-events-example'
---
::

### 無効な日付付き

特定の日付を無効にする関数で`is-date-disabled`プロパティを使用します。`type="month"`または`type="year"`を使用する場合は、代わりに`is-month-disabled`または`is-year-disabled`プロパティを使用します。

::component-example
---
name: 'calendar-disabled-dates-example'
---
::

### 利用できない日付

特定の日付を利用できないとマークする関数を使って`is-date-unavailable`プロパティを使用します。`type="month"`または`type="year"`を使用する場合は、代わりに`is-month-unavailable`または`is-year-unavailable`プロパティを使用します。

::component-example
---
name: 'calendar-unavailable-dates-example'
---
::

### 最小/最大日付付き

`min-value`と`max-value`の小道具を使用して日付を制限します。

::component-example
---
name: 'calendar-min-max-dates-example'
---
::

### その他のカレンダーシステム

`@internationalized/date`の他のカレンダーを使用して、別のカレンダーシステムを実装できます。

::component-example
---
name: 'calendar-other-system-example'
---
::

::note{to="https://react-spectrum.adobe.com/internationalized/date/Calendar.html#implementations"}
利用可能なカレンダーは`@internationalized/date`ドキュメントで確認できます。
::

### 外部コントロール付き

`v-model`で渡された日付を操作することで、外部コントロールでカレンダーを制御できます。

::component-example
---
name: 'calendar-external-controls-example'
---
::

### 今日の日付付き

`@internationalized/date`と`getLocalTimeZone`の`today`関数を使用して、値を現在の日付に設定します。

::component-example
---
name: 'calendar-today-example'
---
::

### 日付ピッカーとして

日付ピッカーを作成するには、[Button](/docs/components/button)と[Popover](/docs/components/popover)コンポーネントを使用します。

::component-example
---
name: 'calendar-date-picker-example'
---
::

### 日付範囲ピッカーとして

[Button](/docs/components/button)コンポーネントと[Popover](/docs/components/popover)コンポーネントを使用して、プリセット範囲を持つ日付範囲ピッカーを作成します。

::component-example
---
name: 'calendar-date-range-picker-example'
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
