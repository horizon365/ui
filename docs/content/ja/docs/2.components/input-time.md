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

`v-model`ディレクティブを使用して、選択した時刻を制御します。

::component-code
---
キャスト
  modelValue TimeValue
無視
  -  modelValue
外部
  -  modelValue
小道具
  modelValue [12 30 0]
---
::

状態を制御する必要がない場合は、`default-value`プロパティを使用して初期値を設定します。

::component-code
---
キャスト
  defaultValue TimeValue
無視
  -  defaultValue
外部
  -  defaultValue
小道具
  defaultValue [9 45 0]
---
::

::framework-only
#nuxt
:::note{to="/docs/getting-started/integrations/i18n/nuxt#locale"}
このコンポーネントは`@internationalized/date`パッケージを使用します。時間フォーマットはAppコンポーネントの`locale`プロパティによって決定されます。
:::

#vue
:::note{to="/docs/getting-started/integrations/i18n/vue#locale"}
このコンポーネントは、ロケールに対応した書式設定のために`@internationalized/date`パッケージを使用します。時間フォーマットは、Appコンポーネントの`locale`プロパティによって決定されます。
:::
::

### 範囲

`range`プロパティを使用して、開始時刻と終了時刻の時間範囲選択を有効にします。

::component-code
---
きれい真
キャスト
  modelValue TimeRangeValue
無視
  -  range
  -  modelValue.start
  -  modelValue.end
外部
  -  modelValue
小道具
  範囲真
  modelValue
    開始[9 0 0]
    終了[17 30 0]
---
::

### 時間サイクル

`hour-cycle`プロパティを使用して、InputTimeの時間サイクルを変更します。デフォルトは`12`です。

::component-code
---
キャスト
  defaultValue TimeValue
無視
  -  hourCycle
  -  defaultValue
外部
  -  defaultValue
小道具
  時間サイクル：24
  defaultValue [16 30 0]
---
::

### カラー

`color`プロパティを使用して、InputTimeの色を変更します。

::component-code
---
小道具
  色ニュートラル
  ハイライト真
---
::

::note
`highlight` propはフォーカス状態を表示するために使用されます。これは、バリデーションエラーが発生したときに内部で使用されます。
::

### バリアント

`variant`プロパティを使用して、InputTimeのバリアントを変更します。

::component-code
---
小道具
  バリアント：微妙
---
::

### サイズ

`size`プロパティを使用して、InputTimeのサイズを変更します。

::component-code
---
小道具
  サイズXL
---
::

### アイコン

`icon` propを使用して、[ Icon ](/docs/components/icon)をInputTime内に表示します。

::component-code
---
小道具
  アイコン'i—lucide—clock'
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

`avatar` propを使用して、[ Avatar ](/docs/components/avatar)をInputTime内に表示します。

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

`disabled`プロパティを使用して、InputTimeを無効にします。

::component-code
---
小道具
  無効true
---
::

## 例

###  FormField内

[ FormField ](/docs/components/form-field)コンポーネント内のInputTimeを使用して、ラベル、ヘルプテキスト、必須インジケータなどを表示できます。

::component-example
---
名前'入力時間フォームフィールド例'
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
