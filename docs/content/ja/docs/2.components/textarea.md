---
description: 複数行のテキストを入力するtextarea要素。
category: form
keywords:
  - multiline
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Textarea.vue
---

## 使用法

`v-model`ディレクティブを使用して、Textareaの値を制御します。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ''
---
::

### Rows

行数を設定するには`rows`プロパティを使用します。デフォルトは`3`です。

::component-code
---
props:
  rows: 12
---
::

### Placeholder

`placeholder`プロパティを使用してプレースホルダーテキストを設定します。

::component-code
---
props:
  placeholder: 'Type something...'
---
::

### Autoresize

`autoresize`プロパティを使用して、Textareaの高さを自動リサイズできます。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 'This is a long text that will autoresize the height of the Textarea.'
  autoresize: true
---
::

`maxrows`プロパティを使用して、自動サイズ変更時の最大行数を設定します。`0`に設定すると、Textareaは無限に成長します。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 'This is a long text that will autoresize the height of the Textarea with a maximum of 4 rows.'
  maxrows: 4
  autoresize: true
---
::

### Color

`color`プロパティを使用して、Textareaがフォーカスされたときにリングの色を変更します。

::component-code
---
ignore:
  - placeholder
props:
  color: neutral
  highlight: true
  placeholder: 'Type something...'
---
::

::note
`highlight`プロパティはフォーカスの状態を示すために使用されます。バリデーションエラーが発生したときに内部で使用されます。
::

### Variant

`variant`プロパティを使用して、Textareaのバリアントを変更します。

::component-code
---
ignore:
  - placeholder
props:
  color: neutral
  variant: subtle
  highlight: false
  placeholder: 'Type something...'
---
::

### サイズ

`size`プロパティを使用してTextareaのサイズを変更します。

::component-code
---
ignore:
  - placeholder
props:
  size: xl
  placeholder: 'Type something...'
---
::

### Icon

`icon`プロパティを使用して、[Icon](/docs/components/icon)をTextarea内に表示します。

::component-code
---
prettier: true
ignore:
  - placeholder
props:
  icon: 'i-lucide-search'
  size: md
  variant: outline
  placeholder: 'Search...'
  rows: 1
---
::

アイコンの位置を設定するには`leading`と`trailing`のプロップを使用し、位置ごとに異なるアイコンを設定するには`leading-icon`と`trailing-icon`のプロップを使用します。

::component-code
---
prettier: true
ignore:
  - placeholder
props:
  trailingIcon: i-lucide-at-sign
  placeholder: 'Enter your email'
  size: md
  rows: 1
---
::

### アバター

`avatar`プロパティを使用して、[Avatar](/docs/components/avatar)をTextarea内に表示します。

::component-code
---
prettier: true
ignore:
  - placeholder
  - avatar.loading
props:
  avatar:
    src: 'https://github.com/nuxt.png'
    loading: lazy
  size: md
  variant: outline
  placeholder: 'Search...'
  rows: 1
---
::

### Loading

`loading`プロパティを使用して、Textareaにロードアイコンを表示します。

::component-code
---
ignore:
  - placeholder
props:
  loading: true
  trailing: false
  placeholder: 'Search...'
  rows: 1
---
::

### Loading Icon

`loading-icon`プロパティを使用して、ロードアイコンをカスタマイズします。デフォルトは`i-lucide-loader-circle`です。

::component-code
---
ignore:
  - placeholder
props:
  loading: true
  loadingIcon: 'i-lucide-loader'
  placeholder: 'Search...'
  rows: 1
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

`disabled`プロパティを使用してTextareaを無効にします。

::component-code
---
ignore:
  - placeholder
props:
  disabled: true
  placeholder: 'Type something...'
---
::

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attributes" target="_blank"}
このコンポーネントはすべてのネイティブ`<textarea>` HTML属性もサポートします。
::

### スロット

:component-slots

### Emits

:component-emits

### Expose

テンプレート参照を介してコンポーネントにアクセスする場合、以下を使用できます：

| 名前|タイプ|
| ---- | ---- |
| `textareaRef`{lang="ts-type"}| `Ref<HTMLTextAreaElement \| null>`{lang="ts-type"}|
| `autoResize`{lang="ts-type"}| `() => void`{lang="ts-type"}|

## Theme

:component-theme

## Changelog

:component-changelog
