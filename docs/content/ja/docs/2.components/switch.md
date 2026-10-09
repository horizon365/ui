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

`v-model`ディレクティブを使用して、Switchのチェック状態を制御します。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: true
---
::

状態を制御する必要がない場合は、`default-value`プロパティを使用して初期値を設定します。

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: true
---
::

### Label

`label`プロパティを使用して、Switchのラベルを設定します。

::component-code
---
props:
  label: Check me
---
::

`required`プロパティを使用する場合、ラベルの横にアスタリスクが追加されます。

::component-code
---
ignore:
  - label
props:
  required: true
  label: Check me
---
::

### Description

`description`プロパティを使用して、Switchの説明を設定します。

::component-code
---
ignore:
  - label
props:
  label: Check me
  description: 'This is a checkbox.'
---
::

### Icon

`checked-icon`と`unchecked-icon`のプロップを使用して、スイッチのアイコンをチェックしたりオフにしたりします。

::component-code
---
prettier: true
ignore:
  - label
  - defaultValue
props:
  uncheckedIcon: 'i-lucide-x'
  checkedIcon: 'i-lucide-check'
  defaultValue: true
  label: Check me
---
::

### 読み込み中

`loading`プロパティを使用して、Switchにロードアイコンを表示します。

::component-code
---
ignore:
  - label
  - defaultValue
props:
  loading: true
  defaultValue: true
  label: Check me
---
::

### Loadingアイコン

`loading-icon`プロパティを使用して、ロードアイコンをカスタマイズします。デフォルトは`i-lucide-loader-circle`です。

::component-code
---
ignore:
  - label
  - defaultValue
props:
  loading: true
  loadingIcon: 'i-lucide-loader'
  defaultValue: true
  label: Check me
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは`app.config.ts`の`ui.icons.loading`キーでグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは`vite.config.ts`の`ui.icons.loading`キーでグローバルにカスタマイズできます。
:::
::

### Color

`color`プロパティを使用してSwitchの色を変更します。

::component-code
---
ignore:
  - label
  - defaultValue
props:
  color: neutral
  defaultValue: true
  label: Check me
---
::

### サイズ

`size`プロパティを使用してSwitchのサイズを変更します。

::component-code
---
ignore:
  - label
  - defaultValue
props:
  size: xl
  defaultValue: true
  label: Check me
---
::

### 無効

`disabled`プロパティを使用してSwitchを無効にします。

::component-code
---
ignore:
  - label
props:
  disabled: true
  label: Check me
---
::

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
このコンポーネントはすべてのネイティブ`<button>` HTML属性もサポートします。
::

### スロット

:component-slots

### Emits

:component-emits

## Theme

:component-theme

## Changelog

:component-changelog
