---
description: 2つの状態を切り替えるコントロール。
category: form
keywords:
  - toggle
  - toggle switch
links:
  - label: スイッチ
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/switch
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Switch.vue
---

## 使用法

`v-model`ディレクティブを使用して、スイッチのチェック状態を制御します。

::component-code
---
無視
  -  modelValue
外部
  -  modelValue
小道具
  modelValue true
---
::

状態を制御する必要がない場合は、`default-value`プロパティを使用して初期値を設定します。

::component-code
---
無視
  -  defaultValue
小道具
  defaultValue true
---
::

### ラベル

`label` propを使用して、Switchのラベルを設定します。

::component-code
---
小道具
  label Check me
---
::

`required` propを使用する場合、ラベルの横にアスタリスクが追加されます。

::component-code
---
無視
  -  label
小道具
  必須true
  label Check me
---
::

### 説明

`description`プロパティを使用して、Switchの説明を設定します。

::component-code
---
無視
  -  label
小道具
  label Check me
  説明：'これはチェックボックスです。
---
::

### アイコン

`checked-icon`および`unchecked-icon` propsを使用して、スイッチのアイコンをチェックしたときとチェックしないときに設定します。

::component-code
---
きれい真
無視
  -  label
  -  defaultValue
小道具
  uncheckedIcon 'i—lucide—x'
  checkedIcon 'i—lucide—check'
  defaultValue true
  label Check me
---
::

### ローディング

`loading`プロップを使用して、Switchに読み込み中のアイコンを表示します。

::component-code
---
無視
  -  label
  -  defaultValue
小道具
  読み込み真
  defaultValue true
  label Check me
---
::

###  Loadingアイコン

読み込みアイコンをカスタマイズするには、`loading-icon`プロパティを使用します。デフォルトは`i-lucide-loader-circle`です。

::component-code
---
無視
  -  label
  -  defaultValue
小道具
  読み込み真
  loadingIcon 'i—lucide—loader'
  defaultValue true
  label Check me
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは、`ui.icons.loading`キーの`app.config.ts`でグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは、`ui.icons.loading`キーの下の`vite.config.ts`でグローバルにカスタマイズできます。
:::
::

### カラー

`color`プロパティを使用して、Switchの色を変更します。

::component-code
---
無視
  - ラベル
  -  defaultValue
小道具
  色ニュートラル
  defaultValue true
  label Check me
---
::

### サイズ

`size`プロパティを使用して、Switchのサイズを変更します。

::component-code
---
無視
  - ラベル
  -  defaultValue
小道具
  サイズXL
  defaultValue true
  label Check me
---
::

### 無効

スイッチを無効にするには、`disabled`プロパティを使用します。

::component-code
---
無視
  -  label
小道具
  無効true
  label Check me
---
::

##  API

###  Props

component—props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
このコンポーネントは、すべてのネイティブ`<button>` HTML属性もサポートします。
::

### スロット

コンポーネントスロット

### エミッツ

component—emits

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
