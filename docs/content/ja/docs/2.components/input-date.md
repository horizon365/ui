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

### カラー

`color`プロパティを使用して、InputDateの色を変更します。

::component-code
---
小道具
  色ニュートラル
  ハイライト真
---
::

### バリアント

`variant`プロパティを使用して、InputDateのバリアントを変更します。

::component-code
---
小道具
  バリアント：微妙
---
::

### サイズ

`size`プロパティを使用して、InputDateのサイズを変更します。

::component-code
---
小道具
  サイズXL
---
::

### アイコン

`icon` propを使用して、[ Icon ](/docs/components/icon)をInputDate内に表示します。

::component-code
---
小道具
  アイコン'i—lucide—calendar'
---
::

::note
アイコンの位置を設定するには`leading`および`trailing` propsを使用し、位置ごとに異なるアイコンを設定するには`leading-icon`および`trailing-icon` propsを使用します。
::

### セパレータアイコン

`separator-icon`プロパティを使用して、範囲区切り文字の[ Icon ](/docs/components/icon)を変更します。デフォルトは`i-lucide-minus`です。

::component-code
---
無視
  - 範囲
小道具
  範囲真
  separatorIcon 'i—lucide—arrow—right'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは、`ui.icons.minus`キーの下の`app.config.ts`でグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは、`ui.icons.minus`キーの下の`vite.config.ts`でグローバルにカスタマイズできます。
:::
::

### アバター

`avatar` propを使用して、[ Avatar ](/docs/components/avatar)をInputDate内に表示します。

::component-code
---
きれい真
無視
  -  avatar.ローディング
小道具
  アバター
    http//github.com/vuejs.png/
    読み込み怠惰
  サイズMD
  variantアウトライン
---
::

### 無効

`disabled`プロパティを使用して、InputDateを無効にします。

::component-code
---
小道具
  無効true
---
::

## 例

### 利用できない日付

`is-date-unavailable` propを関数とともに使用して、特定の日付を利用できないとマークします。

::component-example
---
名前'入力日付unavailable—date—example'
---
::

### 最小/最大日付

`min-value`と`max-value` propsを使用して日付を制限します。

::component-example
---
名前'input—date—min—max—dates—example'
---
::

### 日付ピッカーとして

[ Calendar ](/docs/components/calendar)[ Popover ](/docs/components/popover)コンポーネントを使用して、日付ピッカーを作成します。

::component-example
---
名前'入力日付日付ピッカー例'
---
::

### 日付範囲ピッカーとして

[ Calendar ](/docs/components/calendar)と[ Popover ](/docs/components/popover)コンポーネントを使用して、日付範囲ピッカーを作成します。

::component-example
---
名前'入力—日付—範囲—ピッカーの例'
---
::

##  API

###  Props

component—props

### スロット

コンポーネントスロット

### エミッツ

component—emits

##  Theme

コンポーネントテーマ

##  Changelog

component—changelog
