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

`v-model`ディレクティブを使用して、選択した日付を制御します。

::component-code
---
キャスト
  modelValue DateValue
無視
  -  modelValue
外部
  -  modelValue
小道具
  modelValue [2022 2 3]
---
::

状態を制御する必要がない場合は、`default-value`プロパティを使用して初期値を設定します。

::component-code
---
キャスト
  defaultValue DateValue
無視
  -  defaultValue
外部
  -  defaultValue
小道具
  defaultValue [2022 2 6]
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

### タイプbadge {label="4.9+" class="align-text-top"}

カレンダーが選択するものを変更するには、`type`プロパティを使用します。デフォルトは`date`です。

`date`を使用している場合は、見出しをクリックして日表示から月表示、年表示に切り替え、ドリルダウンして日付を選択します。

::component-code
---
キャスト
  modelValue DateValue
無視
  - タイプ
  -  modelValue
外部
  -  modelValue
小道具
  タイプ月
  modelValue [2022 2 1]
---
::

スタンドアロンの年ピッカーをレンダリングするには、`type="year"`を使用します。

::component-code
---
キャスト
  modelValue DateValue
無視
  - タイプ
  -  modelValue
外部
  -  modelValue
小道具
  タイプ年
  modelValue [2022 1 1]
---
::

### 複数

`multiple`プロパティを使用して複数選択を許可します。

::component-code
---
きれい真
キャスト
  modelValue DateValue []
無視
  - 複数
  -  modelValue
外部
  -  modelValue
小道具
  複数true
  modelValue [[2022 2 4][2022 2 6][2022 2 8]
---
::

### 範囲

`range`プロパティを使用して、日付の範囲を選択します。

::component-code
---
きれい真
キャスト
  modelValue DateRange
無視
  -  range
  -  modelValue.start
  -  modelValue.end
外部
  -  modelValue
小道具
  範囲真
  modelValue
    開始[2022年2月3日]
    終了[2022年2月20日]
---
::

`range` propは`type="month"`と`type="year"`でも動作し、月や年の範囲を選択できます。

::component-code
---
きれい真
キャスト
  modelValue DateRange
無視
  - タイプ
  - 範囲
  -  modelValue.start
  -  modelValue.end
外部
  -  modelValue
小道具
  タイプ月
  範囲真
  modelValue
    開始[2022年2月1日]
    終了[2022年6月1日]
---
::

### 月数

`numberOfMonths`プロパティを使用して、カレンダーの月数を変更します。

::component-code
---
小道具
  月数3
---
::

### 月コントロール

月コントロールを表示するには、`month-controls`プロパティを使用します。デフォルトは`true`です。

::component-code
---
小道具
  monthControls false
---
::

月ボタンを上書きするには、`prev-month`および`next-month` propsを使用します。

::component-code
---
きれい真
無視
  メールinfo @ ph049 @ prevMonth.color
  -  prevMonth.variant
  -  nextMonth. color
  -  nextMonth.variant
小道具
  前月
    色プライマリ
    バリアントソフト
  次の月
    色プライマリ
    バリアントソフト
---
::

### 年コントロール

年コントロールを表示するには、`year-controls`プロパティを使用します。デフォルトは`true`です。

::component-code
---
小道具
  yearControls false
---
::

年ボタンを上書きするには、`prev-year`と`next-year` propsを使用します。

::component-code
---
きれい真
無視
  メール：info @ ph058 @ prevyear.color
  -  prevYear.variant
  -  NextYear.color
  -  nextyear.variant
小道具
  前年
    色プライマリ
    バリアントソフト
  次の年
    色プライマリ
    バリアントソフト
---
::

###  View Control badge {label="4.9+" class="align-text-top"}

`view-control`プロパティを使用して、見出しを日、月、年ビューを切り替えるボタンにします。デフォルトは`true`です。

::component-code
---
アイテム
  ビューコントロール
    -  true
    -  false
小道具
  viewControl false
---
::

見出しボタンを上書きするオブジェクトに`view-control` propを設定します。

::component-code
---
きれい真
無視
  -  viewControl.color
  -  viewControl.variant
小道具
  ビューコントロール
    色プライマリ
    バリアントソフト
---
::

### 固定週

`fixed-weeks`プロパティを使用して、固定週のカレンダーを表示します。

::component-code
---
小道具
  fixedWeeks false
---
::

### 週番号badge {label="4.4+" class="align-text-top"}

`week-numbers`プロパティを使用して、カレンダーに週番号を表示します。

::component-code
---
小道具
  weekNumbers true
  fixedWeeks true
---
::

### カラー

`color`プロパティを使用してカレンダーの色を変更します。

::component-code
---
キャスト
  defaultValue DateRange
隠す
  - 範囲
  -  defaultValue
  -  defaultValue.start
  -  defaultvalue.end
小道具
  色ニュートラル
  範囲真
  defaultValue
    開始[2022年2月3日]
    終了[2022年2月20日]
---
::

### バリアント

`variant`プロパティを使用して、カレンダーのバリアントを変更します。

::component-code
---
キャスト
  defaultValue DateRange
隠す
  - 範囲
  -  defaultValue
  -  defaultValue.start
  -  defaultvalue.end
小道具
  バリアント：微妙
  範囲真
  defaultValue
    開始[2022年2月3日]
    終了[2022年2月20日]
---
::

### サイズ

カレンダーのサイズを変更するには、`size`プロパティを使用します。

::component-code
---
小道具
  サイズXL
---
::

### 無効

カレンダーを無効にするには、`disabled`プロパティを使用します。

::component-code
---
小道具
  無効true
---
::

## 例

### チップイベント付き

[ Chip ](/docs/components/chip)コンポーネントを使用して、特定の日にイベントを追加します。

::component-example
---
name 'calendar—events—example'
---
::

### 無効な日付

`is-date-disabled` propを使用して、特定の日付を無効としてマークします。`type="month"`または`type="year"`を使用する場合は、代わりに`is-month-disabled`または`is-year-disabled` propを使用します。

::component-example
---
名前'calendar—disabled dates—example'
---
::

### 利用できない日付

`is-date-unavailable` propを使用して、特定の日付を利用できないとマークします。`type="month"`または`type="year"`を使用する場合は、代わりに`is-month-unavailable`または`is-year-unavailable` propを使用します。

::component-example
---
名前'calendar—unavailable—dates—example'
---
::

### 最小/最大日付

`min-value`と`max-value` propsを使用して日付を制限します。

::component-example
---
名前'calendar—min—max—date—example'
---
::

### 他のカレンダーシステムと

`@internationalized/date`の他のカレンダーを使用して、別のカレンダーシステムを実装できます。

::component-example
---
名前'calendar—other—system—example'
---
::

::note{to="https://react-spectrum.adobe.com/internationalized/date/Calendar.html#implementations"}
利用可能なカレンダーは`@internationalized/date` docsで確認できます。
::

### 外部コントロール付き

`v-model`で渡された日付を操作することで、外部コントロールでカレンダーを制御することができます。

::component-example
---
名前'calendar—external controls—example'
---
::

### 今日の日付付き

`@internationalized/date`から`getLocalTimeZone`関数を使用して、値を現在の日付に設定します。

::component-example
---
名前'カレンダー今日の例'
---
::

### 日付ピッカーとして

[ Button ](/docs/components/button)と[ Popover ](/docs/components/popover)コンポーネントを使用して、日付ピッカーを作成します。

::component-example
---
名前'カレンダー日付ピッカー例'
---
::

### 日付範囲ピッカーとして

[ Button ](/docs/components/button)[ Popover ](/docs/components/popover)コンポーネントを使用して、プリセット範囲を持つ日付範囲ピッカーを作成します。

::component-example
---
名前'カレンダー—日付—範囲—ピッカー—例'
---
::

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
