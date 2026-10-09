---
title: 入力タグ
description: インタラクティブタグを表示するinput要素。
category: form
keywords:
  - chips input
  - multi value
links:
  - label: 入力タグ
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tags-input
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputTags.vue
---

## 使用法

`v-model`ディレクティブを使用してInputTagsの値を制御します。

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
---
::

状態を制御する必要がない場合は、`default-value`プロパティを使用して初期値を設定します。

::component-code
---
prettier: true
ignore:
  - defaultValue
props:
  defaultValue: ['Vue']
---
::

### Placeholder

`placeholder`プロパティを使用してプレースホルダーテキストを設定します。

::component-code
---
props:
  placeholder: 'Enter tags...'
---
::

### Max長さ

`max-length`プロパティを使用して、タグで許可される最大文字数を設定します。

::component-code
---
props:
  maxLength: 4
---
::

### Color

InputTagsがフォーカスされたときにリングの色を変更するには、`color`プロパティを使用します。

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  color: neutral
  highlight: true
---
::

::note
`highlight`プロパティはフォーカスの状態を示すために使用されます。バリデーションエラーが発生したときに内部で使用されます。
::

### バリアント

`variant`プロパティを使用して、InputTagsの外観を変更します。

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  variant: subtle
  color: neutral
  highlight: false
---
::

### サイズ

`size`プロパティを使用して、InputTagsのサイズを調整します。

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  size: xl
---
::

### Icon

`icon`プロパティを使用して、InputTags内に[Icon](/docs/components/icon)を表示します。

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  icon: 'i-lucide-search'
  size: md
  variant: outline
---
::

::note
アイコンの位置を設定するには`leading`と`trailing`のプロップを使用し、位置ごとに異なるアイコンを設定するには`leading-icon`と`trailing-icon`のプロップを使用します。
::

### アバター

`avatar`プロパティを使用して、[Avatar](/docs/components/avatar)をInputTags内に表示します。

::component-code
---
prettier: true
ignore:
  - modelValue
  - avatar.loading
external:
  - modelValue
props:
  modelValue: ['Vue']
  avatar:
    src: 'https://github.com/vuejs.png'
    loading: lazy
  size: md
  variant: outline
---
::

### Deleteアイコン

`delete-icon`プロパティを使用して、タグ内の削除[Icon](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-x`です。

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  deleteIcon: 'i-lucide-trash'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは`app.config.ts`の`ui.icons.close`キーでグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは、`vite.config.ts`の`ui.icons.close`キーでグローバルにカスタマイズできます。
:::
::

### Loading

`loading`プロパティを使用して、InputTagsにロードアイコンを表示します。

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  loading: true
  trailing: false
---
::

### Loading Icon

`loading-icon`プロパティを使用してロードアイコンをカスタマイズします。デフォルトは`i-lucide-loader-circle`です。

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  loading: true
  loadingIcon: 'i-lucide-loader'
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

### 無効

`disabled`プロパティを使用してInputTagsを無効にします。

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  disabled: true
---
::

## 例

###  FormField内

[FormField](/docs/components/form-field)コンポーネント内のInputTagsを使用して、ラベル、ヘルプテキスト、必須インジケータなどを表示できます。

::component-example
---
name: 'input-tags-form-field-example'
---
::

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
このコンポーネントはすべてのネイティブ`<input>` HTML属性もサポートします。
::

### スロット

:component-slots

### Emits

:component-emits

### Expose

テンプレート参照を介してコンポーネントにアクセスする場合、以下を使用できます：

| 名前|タイプ|
| ---- | ---- |
| `inputRef`{lang="ts-type"}| `Ref<HTMLInputElement \| null>`{lang="ts-type"}|

## Theme

:component-theme

## Changelog

:component-changelog
