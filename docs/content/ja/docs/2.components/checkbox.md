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

### 不定元

`v-model`ディレクティブまたは`default-value`プロパティの`indeterminate`値を使用して、チェックボックスを[indeterminate state](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes)に設定します。

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: 'indeterminate'
---
::

### 不定アイコン

`indeterminate-icon`プロパティを使用して不定アイコンをカスタマイズします。デフォルトは`i-lucide-minus`です。

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: 'indeterminate'
  indeterminateIcon: 'i-lucide-plus'
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

### Label

`label`プロパティを使用して、チェックボックスのラベルを設定します。

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

`description`プロパティを使用して、チェックボックスの説明を設定します。

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

`icon`プロパティを使用して、チェックボックスがチェックされているときのアイコンを設定します。デフォルトは`i-lucide-check`です。

::component-code
---
ignore:
  - label
  - defaultValue
props:
  icon: 'i-lucide-heart'
  defaultValue: true
  label: Check me
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは`app.config.ts`の`ui.icons.check`キーでグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは`vite.config.ts`の`ui.icons.check`キーでグローバルにカスタマイズできます。
:::
::

### Color

`color`プロパティを使用して、チェックボックスの色を変更します。

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

### Variant

`variant`プロパティを使用して、チェックボックスのバリアントを変更します。

::component-code
---
ignore:
  - label
  - defaultValue
props:
  color: 'primary'
  variant: 'card'
  defaultValue: true
  label: Check me
---
::

### サイズ

`size`プロパティを使用して、チェックボックスのサイズを変更します。

::component-code
---
ignore:
  - label
  - defaultValue
props:
  size: xl
  variant: list
  defaultValue: true
  label: Check me
---
::

### Indicator

`indicator`プロパティを使用して位置を変更したり、インジケーターを非表示にしたりします。デフォルトは`start`です。

::note
`indicator`が`hidden`の場合、代わりにラベルの上にアイコンが表示されます。
::

::component-code
---
prettier: true
ignore:
  - label
  - icon
  - defaultValue
props:
  indicator: 'hidden'
  variant: 'card'
  icon: 'i-lucide-heart'
  defaultValue: true
  label: Check me
---
::

### 無効

`disabled`プロパティを使用してチェックボックスを無効にします。

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
