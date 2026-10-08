---
title: ピン入力
description: ピンを入力する入力要素。
category: form
keywords:
  - otp
  - one-time password
  - verification code
links:
  - label: ピン入力
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/pin-input
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PinInput.vue
---

## 使用法

`v-model`ディレクティブを使用して、PinInputの値を制御します。

::component-code
---
きれい真
無視
  -  modelValue
外部
  -  modelValue
小道具
  modelValue []
---
::

状態を制御する必要がない場合は、`default-value`プロパティを使用して初期値を設定します。

::component-code
---
きれい真
無視
  -  defaultValue
小道具
  defaultValue ['1''2''3']
---
::

### タイプ

入力タイプを変更するには、`type`プロパティを使用します。デフォルトは`text`です。

::component-code
---
アイテム
  タイプ
    - テキスト
    -  number
小道具
  タイプ'数値'
---
::

::note
`type`を`number`に設定すると、数字のみ受け付けます。
::

### マスク

`mask`プロパティを使用して、入力をパスワードのように扱います。

::component-code
---
きれい真
無視
  - プレースホルダー
  -  defaultValue
小道具
  マスクtrue
  defaultValue ['1''2''3''4''5']
---
::

###  OTP

`otp`プロパティを使用してワンタイムパスワード機能を有効にします。有効にすると、モバイルデバイスはSMSメッセージやクリップボードのコンテンツからOTPコードを自動的に検出して入力し、オートコンプリートをサポートします。

::component-code
---
小道具
  otp true
---
::

### プレースホルダー

プレースホルダーテキストを設定するには、`placeholder`プロパティを使用します。

::component-code
---
小道具
  プレースホルダー '○'
---
::

### 長さ

入力量を変更するには、`length`プロパティを使用します。

::component-code
---
無視
  - プレースホルダー
小道具
  長さ6
  プレースホルダー '○'
---
::

### セパレータbadge {label="4.9+" class="align-text-top"}

入力のグループ間に区切り文字を挿入するには、`separator`プロパティを使用します。N番目の入力ごとに挿入するには、数値を渡します。

::component-code
---
無視
  - プレースホルダー
小道具
  長さ6
  セパレーター 3
  プレースホルダー '○'
---
::

位置の配列を渡して、特定の入力の後に区切り文字を挿入することもできます。

::component-code
---
きれい真
無視
  - プレースホルダー
  - 長さ
  - セパレーター
小道具
  長さ7
  区切り文字[3 4]
  プレースホルダー '○'
---
::

### カラー

`color`プロパティを使用して、PinInputがフォーカスされたときにリングの色を変更します。

::component-code
---
無視
  - プレースホルダー
小道具
  色ニュートラル
  ハイライト真
  プレースホルダー '○'
---
::

::note
`highlight` propはフォーカス状態を表示するために使用されます。これはバリデーションエラーが発生したときに内部で使用されます。
::

### バリアント

`variant`プロパティを使用して、PinInputのバリアントを変更します。

::component-code
---
無視
  - プレースホルダー
小道具
  色ニュートラル
  バリアント：微妙
  ハイライトfalse
  プレースホルダー '○'
---
::

### サイズ

`size`プロパティを使用して、PinInputのサイズを変更します。

::component-code
---
無視
  - プレースホルダー
小道具
  サイズXL
  プレースホルダー '○'
---
::

### 無効

`disabled`プロパティを使用して、PinInputを無効にします。

::component-code
---
無視
  - プレースホルダー
小道具
  無効true
  プレースホルダー '○'
---
::

## 例

### セパレータースロット付き：badge {label="4.9+" class="align-text-top"}

`separator`スロットを使用して、セパレーターの外観をカスタマイズします。

::component-example
---
名前'pin—input—separator—slot—example'
---
::

##  API

###  Props

component—props

### スロット

コンポーネントスロット

### エミッツ

component—emits

### エクスポーズ

テンプレート参照を介してコンポーネントにアクセスする場合、以下を使用できます：

| 名前|タイプ|
| ---- | ---- |
| `inputsRef`{lang="ts-type"}| `Ref<ComponentPublicInstance[]>`{lang="ts-type"}|

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
