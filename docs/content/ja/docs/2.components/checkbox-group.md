---
title: CheckboxGroup
description: リストから複数のオプションを選択するチェックボックスのセット。
category: form
keywords:
  - multi select
  - checklist
links:
  - label: CheckboxGroup
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/checkbox#group-root
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/CheckboxGroup.vue
---


## 使用法

`v-model`ディレクティブを使用してCheckboxGroupの値を制御し、`default-value` propを使用して、状態を制御する必要がない場合に初期値を設定します。

::component-code
---
きれい真
無視
  -  modelValue
  - アイテム
外部
  - アイテム
  -  modelValue
小道具
  modelValue
    - 'システム'
  アイテム
    - 'システム'
    - 'ライト'
    - 'ダーク'
---
::

### アイテム

`items` propを文字列または数値の配列として使用します。

::component-code
---
きれい真
無視
  -  modelValue
  - アイテム
外部
  - アイテム
  -  modelValue
小道具
  modelValue
    - 'システム'
  アイテム
    - 'システム'
    - 'ライト'
    - 'ダーク'
---
::

次のプロパティを持つオブジェクトの配列を渡すこともできます：

- `label?: string`{lang="ts-type"}
- `description?: string`{lang="ts-type"}
- [`value?: string`{lang="ts-type"}](#value-key)
- `disabled?: boolean`{lang="ts-type"}
- [`icon?: string`{lang="ts-type"}](#indicator)
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, container?: ClassNameValue, base?: ClassNameValue, 'indicator'?: ClassNameValue, icon?: ClassNameValue, wrapper?: ClassNameValue, label?: ClassNameValue, description?: ClassNameValue }`{lang="ts-type"}

::component-code
---
無視
  -  modelValue
  - アイテム
外部
  - アイテム
  -  modelValue
externalTypes
  -  CheckboxGroupItem []
小道具
  modelValue
    - 'system'
  アイテム
    -  label 'System'
      説明'デバイスの設定に一致します。'
      value 'system'
    -  label 'Light'
      説明：「常に光のテーマを使う」
      値'光'
    -  label 'Dark'
      説明：「常に暗いテーマを使う」
      値'暗い'
---
::

::caution
オブジェクトを使用する場合は、`v-model`ディレクティブまたは`default-value` propでオブジェクトの`value`プロパティを参照する必要があります。
::

### 値キー

`value-key` propを使用して、値を設定するために使用するプロパティを変更できます。デフォルトは`value`です。

::component-code
---
無視
  -  modelValue
  - アイテム
  -  valueKey
外部
  - アイテム
  -  modelValue
externalTypes
  -  CheckboxGroupItem []
小道具
  modelValue
    - 'ライト'
  valueKey 'id'
  アイテム
    -  label 'System'
      説明'デバイスの設定に一致します。'
      id 'システム'
    -  label 'Light'
      説明：「常に光のテーマを使う」
      id 'ライト'
    -  label 'Dark'
      説明：「常に暗いテーマを使う」
      id '暗い'
---
::

###  Legend

`legend`プロパティを使用して、CheckboxGroupの凡例を設定します。

::component-code
---
きれい真
無視
  -  defaultValue
  - アイテム
外部
  - アイテム
小道具
  legend：「テーマ」
  defaultValue
    - 'システム'
  アイテム
    - 'システム'
    - 'ライト'
    - 'ダーク'
---
::

### カラー

`color`プロパティを使用して、CheckboxGroupの色を変更します。

::component-code
---
きれい真
無視
  -  defaultValue
  - アイテム
外部
  - アイテム
アイテム
  色
    - プライマリ
    - セカンダリ
    - 成功
    -  info
    -  warning
    - エラー
    - ニュートラル
小道具
  色ニュートラル
  defaultValue
    - 'システム'
  アイテム
    - 'システム'
    - 'ライト'
    - 'ダーク'
---
::

### バリアント

CheckboxGroupのバリアントを変更するには、`variant`プロパティを使用します。

::component-code
---
きれい真
無視
  -  defaultValue
  - アイテム
外部
  - アイテム
externalTypes
  -  CheckboxGroupItem []
アイテム
  色
    - プライマリ
    - セカンダリ
    - 成功
    -  info
    -  warning
    - エラー
    - ニュートラル
  バリアント
    - リスト
    - カード
    - テーブル
小道具
  色'プライマリ'
  バリアント'カード'
  defaultValue
    - 'system'
  アイテム
    -  label 'System'
      value 'system'
      説明'デバイスの設定に一致します。'
    -  label 'Light'
      値'光'
      説明：「常に光のテーマを使う」
    -  label 'Dark'
      値'暗い'
      説明：「常に暗いテーマを使う」
---
::

### サイズ

`size`プロパティを使用して、CheckboxGroupのサイズを変更します。

::component-code
---
きれい真
無視
  -  defaultValue
  - アイテム
外部
  - アイテム
アイテム
  バリアント
    - リスト
    - カード
    - テーブル
小道具
  サイズ'xl'
  variant 'list'
  defaultValue
    - 'システム'
  アイテム
    - 'システム'
    - 'ライト'
    - 'ダーク'
---
::

### オリエンテーション

`orientation`プロパティを使用して、CheckboxGroupの向きを変更します。デフォルトは`vertical`です。

::component-code
---
きれい真
無視
  -  defaultValue
  - アイテム
外部
  - アイテム
アイテム
  バリアント
    - リスト
    - カード
    - テーブル
小道具
  オリエンテーション'水平'
  variant 'list'
  defaultValue
    - 'システム'
  アイテム
    - 'システム'
    - 'ライト'
    - 'ダーク'
---
::

### インジケータ

`indicator`プロパティを使用して位置を変更したり、インジケーターを非表示にしたりします。デフォルトは`start`です。

::note
インジケータが表示されている間は項目の`icon`がチェックマークに置き換わり、`hidden`の場合はラベルの上に表示されます。
::

::component-code
---
きれい真
無視
  -  defaultValue
  - アイテム
外部
  - アイテム
externalTypes
  -  CheckboxGroupItem []
アイテム
  インジケータ
    -  start
    -  end
    - 隠し
  バリアント
    - リスト
    - カード
    - テーブル
小道具
  インジケータ'隠し'
  オリエンテーション'水平'
  variant 'table'
  defaultValue
    - 'システム'
  アイテム
    -  label 'System'
      アイコン'i—lucideモニター'
      value 'システム'
      クラス'W—20'
    -  label 'Light'
      アイコン'i—lucide—sun'
      クラス'W—20'
      値'ライト'
    -  label 'Dark'
      アイコン'i—lucide月'
      クラス'w—20'
      値'暗い'
---
::

### 無効

CheckboxGroupを無効にするには、`disabled`プロパティを使用します。

::component-code
---
きれい真
無視
  -  defaultValue
  - アイテム
外部
  - アイテム
小道具
  無効true
  defaultValue
    - 'システム'
  アイテム
    - 'システム'
    - 'ライト'
    - 'ダーク'
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
