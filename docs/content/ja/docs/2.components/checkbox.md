---
description: チェック状態とチェックされていない状態を切り替えるinput要素。
category: form
keywords:
  - tickbox
  - check
  - boolean
links:
  - label: チェックボックス
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/checkbox
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Checkbox.vue
---

## 使用法

`v-model`ディレクティブを使用して、チェックボックスのチェック状態を制御します。

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

### 不定

`v-model`ディレクティブまたは`default-value`プロパティの`indeterminate`値を使用して、チェックボックスを[不定状態](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes)に設定します。

::component-code
---
無視
  -  defaultValue
小道具
  defaultValue '不定'
---
::

### 不定アイコン

`indeterminate-icon`プロパティを使用して不定アイコンをカスタマイズします。デフォルトは`i-lucide-minus`です。

::component-code
---
無視
  -  defaultValue
小道具
  defaultValue '不定元'
  indeterminateIcon 'i—lucide—plus'
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

### ラベル

チェックボックスのラベルを設定するには、`label`プロパティを使用します。

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

`description`プロパティを使用して、チェックボックスの説明を設定します。

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

`icon`プロパティを使用して、チェックボックスがチェックされたときのアイコンを設定します。デフォルトは`i-lucide-check`です。

::component-code
---
無視
  - ラベル
  -  defaultValue
小道具
  アイコン'i—lucide—heart'
  defaultValue true
  label Check me
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは、`ui.icons.check`キーの下の`app.config.ts`でグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは、`ui.icons.check`キーの`vite.config.ts`でグローバルにカスタマイズできます。
:::
::

### カラー

チェックボックスの色を変更するには、`color`プロパティを使用します。

::component-code
---
無視
  -  label
  -  defaultValue
小道具
  色ニュートラル
  defaultValue true
  label Check me
---
::

### バリアント

チェックボックスのバリアントを変更するには、`variant`プロパティを使用します。

::component-code
---
無視
  - ラベル
  -  defaultValue
小道具
  色'プライマリ'
  バリアント'カード'
  defaultValue true
  label Check me
---
::

### サイズ

チェックボックスのサイズを変更するには、`size`プロパティを使用します。

::component-code
---
無視
  - ラベル
  -  defaultValue
小道具
  サイズXL
  variant list
  defaultValue true
  label Check me
---
::

### インジケータ

`indicator`プロパティを使用して位置を変更したり、インジケーターを非表示にしたりします。デフォルトは`start`です。

::note
`indicator`が`hidden`の場合、代わりにラベルの上にアイコンが表示されます。
::

::component-code
---
きれい真
無視
  - ラベル
  - アイコン
  -  defaultValue
小道具
  インジケータ'隠し'
  バリアント'カード'
  アイコン'i—lucide—heart'
  defaultValue true
  label Check me
---
::

### 無効

チェックボックスを無効にするには、`disabled`プロパティを使用します。

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
